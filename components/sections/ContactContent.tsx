"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Calendar } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const coreServices = [
  "AI Leadership",
  "Software Development",
  "Digital Operations",
];

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A2E] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E5F8A]/25 focus:border-[#2E5F8A] transition-colors";
const labelClass = "block text-xs font-semibold text-[#1A1A2E] mb-1.5 tracking-wide";

// ── Component ─────────────────────────────────────────────────────────────────

const initialForm = {
  name: "", email: "", company: "", phone: "",
  services: [] as string[], message: "",
};

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState(initialForm);

  const set = (field: "name" | "email" | "company" | "phone" | "message") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const toggleService = (service: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(service)
        ? f.services.filter((s) => s !== service)
        : [...f.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── Dark Hero ── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1A2E45 50%, #0F172A 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#2E5F8A]/10 blur-[100px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-white/40 font-semibold mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to new conversations
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 leading-tight"
          >
            Let&apos;s Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Whether you have a question, an idea, or just want to explore what&apos;s possible — we&apos;d love to hear from you. Reach out and let&apos;s start the conversation.
          </motion.p>

          {/* Quick-access chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="https://calendly.com/audax-ventures/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#2E5F8A] text-white font-bold hover:bg-[#3A7BD5] transition-colors"
            >
              <Calendar size={15} /> Book a Free Strategy Call
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Main two-column layout ── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 items-start">

            {/* ── Left: trust + next steps ── */}
            <div className="space-y-6">

              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <Image
                  src="/about/whiteboard-strategy.png"
                  alt="Audax Ventures team working through a strategy session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 380px"
                />
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="rounded-2xl bg-white border border-gray-100 p-6"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#374151] mb-4">Follow Us</p>
                <div className="flex items-center gap-3">
                  {[
                    { href: "https://www.linkedin.com/company/audax-ventures-inc/", label: "LinkedIn", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                    { href: "https://instagram.com/audax.ventures", label: "Instagram", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-9 h-9 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#374151] hover:bg-[#2E5F8A] hover:text-white transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── Right: Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-24 px-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} className="text-green-500" />
                    </div>
                    <h3 className="font-[var(--font-outfit)] font-extrabold text-2xl text-[#1A1A2E] mb-3">
                      Message sent!
                    </h3>
                    <p className="text-[#374151] max-w-sm leading-relaxed mb-8">
                      Your message has been sent to{" "}
                      <span className="font-semibold text-[#2E5F8A]">info@audaxventures.ca</span>.
                      We&apos;ll get back to you within one business day.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="https://calendly.com/audax-ventures/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2E5F8A] text-white font-bold text-sm hover:bg-[#3A7BD5] transition-colors"
                      >
                        <Calendar size={14} /> Also book a call
                      </Link>
                      <button
                        onClick={() => { setSubmitted(false); setForm(initialForm); }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-[#374151] font-bold text-sm hover:border-[#2E5F8A] hover:text-[#2E5F8A] transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="p-8 sm:p-10"
                  >
                    <div className="mb-8">
                      <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl text-[#1A1A2E] mb-2">
                        Connect with Us Today
                      </h2>
                      <p className="text-[#374151] text-sm">
                        Share a few details and we&apos;ll take it from there.
                      </p>
                    </div>

                    <div className="space-y-5">

                      {/* Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Full Name <span className="text-red-400">*</span></label>
                          <input required value={form.name} onChange={set("name")} className={inputClass} placeholder="Jane Smith" />
                        </div>
                        <div>
                          <label className={labelClass}>Email Address <span className="text-red-400">*</span></label>
                          <input required type="email" value={form.email} onChange={set("email")} className={inputClass} placeholder="jane@company.com" />
                        </div>
                      </div>

                      {/* Company + Phone */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Company <span className="text-[#9CA3AF] font-normal">(optional)</span></label>
                          <input value={form.company} onChange={set("company")} className={inputClass} placeholder="Acme Corp" />
                        </div>
                        <div>
                          <label className={labelClass}>Phone <span className="text-[#9CA3AF] font-normal">(optional)</span></label>
                          <input type="tel" value={form.phone} onChange={set("phone")} className={inputClass} placeholder="+1 (204) 555-0100" />
                        </div>
                      </div>

                      {/* Service(s) */}
                      <div>
                        <label className={labelClass}>Which service(s) are you interested in?</label>
                        <div className="grid sm:grid-cols-3 gap-3">
                          {coreServices.map((s) => {
                            const checked = form.services.includes(s);
                            return (
                              <label
                                key={s}
                                className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 text-sm cursor-pointer transition-colors ${
                                  checked
                                    ? "border-[#2E5F8A] bg-[#2E5F8A]/5 text-[#1A1A2E] font-semibold"
                                    : "border-gray-200 text-[#374151] hover:border-[#2E5F8A]/40"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => toggleService(s)}
                                  className="w-4 h-4 rounded border-gray-300 text-[#2E5F8A] focus:ring-[#2E5F8A]/25 flex-shrink-0"
                                />
                                {s}
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className={labelClass}>Message <span className="text-red-400">*</span></label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={set("message")}
                          className={`${inputClass} resize-none`}
                          placeholder="Tell us a bit about yourself and what you'd like to connect with us about — a question, an idea, a potential project, or just to say hello."
                        />
                      </div>

                      {error && (
                        <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                          {error}
                        </p>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-full bg-[#2E5F8A] text-white font-bold hover:bg-[#3A7BD5] transition-colors disabled:opacity-60 flex items-center justify-center gap-2 text-sm"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>Submit <ArrowRight size={15} /></>
                        )}
                      </button>

                      <p className="text-center text-xs text-[#9CA3AF]">
                        Prefer a direct email?{" "}
                        <a href="mailto:info@audaxventures.ca" className="text-[#2E5F8A] hover:underline font-medium">
                          info@audaxventures.ca
                        </a>
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bottom FAQ strip ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-outfit)] font-extrabold text-xl text-[#1A1A2E] mb-8 text-center">
            Common Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "How quickly will you respond?", a: "Within one business day. Usually the same day if you reach out in the morning." },
              { q: "Is the strategy call really free?", a: "Yes — no credit card, no commitment. It's a 30-minute conversation to see if we're the right fit for each other." },
              { q: "What if I'm not sure exactly what I need yet?", a: "That's completely normal — most conversations start that way. Tell us what you're working on and we'll help you figure out the right starting point on our call." },
              { q: "Do you sign NDAs?", a: "Absolutely. We sign an NDA before any substantive discussion about your product or idea." },
            ].map((faq) => (
              <div key={faq.q} className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100">
                <p className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] text-sm mb-2">{faq.q}</p>
                <p className="text-[#374151] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
