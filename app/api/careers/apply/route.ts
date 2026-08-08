import { Resend } from "resend";
import { getCareerBySlug } from "@/lib/careers-data";

const TO_ADDRESS = "joshua@audaxventures.ca";
const FROM_ADDRESS = "Audax Ventures Careers <careers@audaxventures.ca>";
const APPLICANT_FROM_ADDRESS = "Audax Ventures <careers@audaxventures.ca>";

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB per file — stays under typical serverless request-body limits
const ALLOWED_DOC_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const QUESTION_ANSWER_VALUES = new Set(["Yes", "No"]);

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validateFile(file: unknown, label: string): { error?: string; file?: File } {
  if (!(file instanceof File) || file.size === 0) {
    return { error: `${label} is required.` };
  }
  if (file.size > MAX_FILE_SIZE) {
    return { error: `${label} must be under 4MB.` };
  }
  if (!ALLOWED_DOC_TYPES.has(file.type)) {
    return { error: `${label} must be a PDF, DOC, or DOCX file.` };
  }
  return { file };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Careers application: RESEND_API_KEY is not configured.");
    return Response.json(
      { error: "Application submissions are not configured yet. Please email joshua@audaxventures.ca directly." },
      { status: 500 }
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const jobSlug = formData.get("jobSlug")?.toString().trim() ?? "";
  const job = getCareerBySlug(jobSlug);
  if (!job) {
    return Response.json({ error: "This job posting could not be found." }, { status: 400 });
  }

  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const videoLink = formData.get("videoLink")?.toString().trim() ?? "";

  if (!name || !email || !phone) {
    return Response.json({ error: "Name, email, and phone are required." }, { status: 400 });
  }

  const resumeCheck = validateFile(formData.get("resume"), "Resume");
  if (resumeCheck.error) return Response.json({ error: resumeCheck.error }, { status: 400 });

  const coverLetterCheck = validateFile(formData.get("coverLetter"), "Cover letter");
  if (coverLetterCheck.error) return Response.json({ error: coverLetterCheck.error }, { status: 400 });

  const answers: string[] = [];
  for (let i = 0; i < job.questions.length; i++) {
    const answer = formData.get(`question-${i}`)?.toString().trim() ?? "";
    if (!QUESTION_ANSWER_VALUES.has(answer)) {
      return Response.json({ error: "Please answer all 5 screening questions." }, { status: 400 });
    }
    answers.push(answer);
  }

  const resume = resumeCheck.file!;
  const coverLetter = coverLetterCheck.file!;
  const [resumeBuffer, coverLetterBuffer] = await Promise.all([
    resume.arrayBuffer().then(Buffer.from),
    coverLetter.arrayBuffer().then(Buffer.from),
  ]);

  const resend = new Resend(apiKey);

  const questionsHtml = job.questions
    .map((q, i) => `<p style="margin: 0 0 12px;"><strong>${escapeHtml(q)}</strong><br/>${escapeHtml(answers[i])}</p>`)
    .join("");

  const questionsText = job.questions.map((q, i) => `${q}\n${answers[i]}`).join("\n\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `New Application — ${job.title} — ${name}`,
      text: [
        `Job: ${job.title}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Video cover letter link: ${videoLink || "—"}`,
        "",
        "Screening questions:",
        questionsText,
        "",
        "Resume and cover letter attached.",
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; font-size: 14px; color: #0F172A;">
          <p><strong>Job:</strong> ${escapeHtml(job.title)}</p>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Video cover letter link:</strong> ${videoLink ? `<a href="${escapeHtml(videoLink)}">${escapeHtml(videoLink)}</a>` : "—"}</p>
          <p><strong>Screening questions:</strong></p>
          ${questionsHtml}
          <p>Resume and cover letter attached.</p>
        </div>
      `,
      attachments: [
        { filename: resume.name, content: resumeBuffer },
        { filename: coverLetter.name, content: coverLetterBuffer },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to submit application. Please email joshua@audaxventures.ca directly." }, { status: 502 });
    }

    // Best-effort applicant confirmation — the internal notification above is
    // the critical email, so a failure here shouldn't fail the submission.
    try {
      const { error: confirmError } = await resend.emails.send({
        from: APPLICANT_FROM_ADDRESS,
        to: email,
        subject: `We've received your application — ${job.title}`,
        text: [
          `Hi ${name},`,
          "",
          `Thanks for applying for the ${job.title} role at Audax Ventures. This email confirms we've received your application, including your resume and cover letter.`,
          "",
          "Our team will review it carefully. If you're selected to move forward, we'll be in touch to schedule an interview.",
          "",
          "Thanks again for your interest in Audax Ventures.",
          "",
          "— The Audax Ventures Team",
        ].join("\n"),
        html: `
          <div style="font-family: sans-serif; font-size: 14px; color: #0F172A; line-height: 1.6;">
            <p>Hi ${escapeHtml(name)},</p>
            <p>Thanks for applying for the <strong>${escapeHtml(job.title)}</strong> role at Audax Ventures. This email confirms we've received your application, including your resume and cover letter.</p>
            <p>Our team will review it carefully. If you're selected to move forward, we'll be in touch to schedule an interview.</p>
            <p>Thanks again for your interest in Audax Ventures.</p>
            <p>— The Audax Ventures Team</p>
          </div>
        `,
      });
      if (confirmError) {
        console.error("Applicant confirmation email failed:", confirmError);
      }
    } catch (confirmErr) {
      console.error("Applicant confirmation email failed:", confirmErr);
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Careers application send failed:", err);
    return Response.json({ error: "Failed to submit application. Please email joshua@audaxventures.ca directly." }, { status: 500 });
  }
}
