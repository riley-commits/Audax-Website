"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, Clock, CheckCircle2, ArrowRight, Phone, Calendar } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const contactCards = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@audaxventures.ca",
    href: "mailto:info@audaxventures.ca",
    sub: "We respond within one business day",
  },
  {
    icon: Calendar,
    label: "Book a Call",
    value: "Free 30-min strategy call",
    href: "https://calendly.com/audax-ventures/30min",
    sub: "No pitch. No pressure. Just clarity.",
    external: true,
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "Winnipeg, Manitoba",
    href: null,
    sub: "Canada 🇨🇦 — working in your timezone",
  },
];

const serviceOptions = [
  "MVP Development",
  "SaaS Platform",
  "Internal Tools",
  "Mobile App (iOS / Android)",
  "AI Integration or Consulting",
  "Website or E-Commerce",
  "Process Automation",
  "Fractional Chief AI Officer",
  "Other / Not sure yet",
];

const budgetOptions = [
  "Under $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000+",
  "Not sure yet",
];

const timelineOptions = [
  "As soon as possible",
  "Within 1–3 months",
  "Within 3–6 months",
  "Just exploring for now",
];

const nextSteps = [
  {
    num: "01",
    title: "We review your message",
    body: "A real person reads every inquiry. You'll hear back within one business day — usually the same day.",
  },
  {
    num: "02",
    title: "We schedule a 30-min call",
    body: "A focused discovery call to understand your goals, timeline, and constraints. No pitch deck.",
  },
  {
    num: "03",
    title: "We send a clear proposal",
    body: "A scoped, fixed-price proposal within 48 hours of the call. No vague hourly estimates.",
  },
];

const trustPoints = [
  { value: "50+",   label: "Projects shipped" },
  { value: "1 day", label: "Avg. response time" },
  { value: "100%",  label: "IP ownership — always" },
  { value: "🇨🇦",   label: "Canadian team" },
];

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A2E] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E5F8A]/25 focus:border-[#2E5F8A] transition-colors";
const labelClass = "block text-xs font-semibold text-[#1A1A2E] mb-1.5 tracking-wide";

// ── Component ─────────────────────────────────────────────────────────────────

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "",
    service: "", budget: "", timeline: "", message: "",
  });

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Build a mailto link so messages arrive at info@audaxventures.ca
    const subject = encodeURIComponent(`Project Inquiry — ${form.service || "General"} — ${form.name}`);
    const body = encodeURIComponent([
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Service: ${form.service || "—"}`,
      `Budget: ${form.budget || "—"}`,
      `Timeline: ${form.timeline || "—"}`,
      ``,
      `Project Details:`,
      form.message,
    ].join("\n"));

    window.open(`mailto:info@audaxventures.ca?subject=${subject}&body=${body}`, "_blank");

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
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
            Accepting new projects
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 leading-tight"
          >
            Let&apos;s Build Something Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Tell us what you&apos;re building. We&apos;ll tell you exactly what it takes — scope, timeline, and cost — with no fluff and no obligation.
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
            <a
              href="mailto:info@audaxventures.ca"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white/80 font-bold hover:bg-white/10 transition-colors"
            >
              <Mail size={15} /> info@audaxventures.ca
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Contact info cards ── */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              const inner = (
                <div className={`group flex items-start gap-4 bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100 transition-all duration-200 ${card.href ? "hover:border-[#2E5F8A]/30 hover:shadow-md cursor-pointer" : ""}`}>
                  <div className="w-10 h-10 rounded-xl bg-[#2E5F8A]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#2E5F8A]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1">{card.label}</p>
                    <p className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] text-sm mb-0.5 group-hover:text-[#2E5F8A] transition-colors">{card.value}</p>
                    <p className="text-xs text-[#9CA3AF]">{card.sub}</p>
                  </div>
                </div>
              );
              return card.href ? (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {inner}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Main two-column layout ── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 items-start">

            {/* ── Left: trust + next steps ── */}
            <div className="space-y-6">

              {/* Trust stats */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 text-white"
                style={{ background: "linear-gradient(135deg, #0F172A 0%, #1A3A5C 100%)" }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/35 mb-5">Why Audax</p>
                <div className="grid grid-cols-2 gap-4">
                  {trustPoints.map((t) => (
                    <div key={t.label} className="text-center bg-white/6 rounded-xl py-4 px-2">
                      <p className="font-[var(--font-outfit)] font-extrabold text-2xl text-white mb-1">{t.value}</p>
                      <p className="text-white/45 text-xs leading-tight">{t.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* What happens next */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl bg-white border border-gray-100 p-6"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2E5F8A] mb-5">What Happens Next</p>
                <div className="space-y-5">
                  {nextSteps.map((step, i) => (
                    <div key={step.num} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="w-7 h-7 rounded-full bg-[#2E5F8A]/10 text-[#2E5F8A] text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {step.num}
                        </span>
                        {i < nextSteps.length - 1 && (
                          <div className="w-px flex-1 bg-gray-100 mt-2" />
                        )}
                      </div>
                      <div className="pb-5 last:pb-0">
                        <p className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] text-sm mb-1">{step.title}</p>
                        <p className="text-[#6B7280] text-xs leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="rounded-2xl bg-white border border-gray-100 p-6"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-4">Follow Us</p>
                <div className="flex items-center gap-3">
                  {[
                    { href: "https://www.linkedin.com/company/audax-ventures-inc/", label: "LinkedIn", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                    { href: "https://twitter.com/audaxventures", label: "Twitter", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> },
                    { href: "https://instagram.com/audax.ventures", label: "Instagram", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-9 h-9 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#6B7280] hover:bg-[#2E5F8A] hover:text-white transition-all duration-200"
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
                      Your email client should be open!
                    </h3>
                    <p className="text-[#6B7280] max-w-sm leading-relaxed mb-8">
                      Your message has been pre-filled in your email client addressed to{" "}
                      <span className="font-semibold text-[#2E5F8A]">info@audaxventures.ca</span>.
                      Hit send and we&apos;ll get back to you within one business day.
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
                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", phone: "", service: "", budget: "", timeline: "", message: "" }); }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-[#6B7280] font-bold text-sm hover:border-[#2E5F8A] hover:text-[#2E5F8A] transition-colors"
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
                        Tell Us About Your Project
                      </h2>
                      <p className="text-[#6B7280] text-sm">
                        Fill in what you know — we&apos;ll ask the rest on our call.
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

                      {/* Service type */}
                      <div>
                        <label className={labelClass}>What are you looking to build?</label>
                        <select value={form.service} onChange={set("service")} className={inputClass}>
                          <option value="">Select a service type</option>
                          {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      {/* Budget + Timeline */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Estimated Budget</label>
                          <select value={form.budget} onChange={set("budget")} className={inputClass}>
                            <option value="">Select a range</option>
                            {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>When do you want to start?</label>
                          <select value={form.timeline} onChange={set("timeline")} className={inputClass}>
                            <option value="">Select a timeline</option>
                            {timelineOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className={labelClass}>Tell us about your project <span className="text-red-400">*</span></label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={set("message")}
                          className={`${inputClass} resize-none`}
                          placeholder="What are you building? What problem does it solve? What stage are you at? Any specific constraints we should know about?"
                        />
                      </div>

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
                            Opening your email client…
                          </>
                        ) : (
                          <>Send to info@audaxventures.ca <ArrowRight size={15} /></>
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
              { q: "What's the minimum project size?", a: "Our engagements typically start at $15,000–$25,000 CAD for a focused scope. We'll tell you upfront if your project is outside that range." },
              { q: "Do you sign NDAs?", a: "Absolutely. We sign an NDA before any substantive discussion about your product or idea." },
            ].map((faq) => (
              <div key={faq.q} className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100">
                <p className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] text-sm mb-2">{faq.q}</p>
                <p className="text-[#6B7280] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
