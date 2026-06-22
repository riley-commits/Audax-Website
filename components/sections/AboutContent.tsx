"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Heart, Zap, Users, Shield, TrendingUp, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { prefix: "+", value: 1000, suffix: "",  display: "+1,000", label: "Completed Projects"    },
  { prefix: "+", value: 350,  suffix: "",  display: "+350",   label: "Happy Customers"       },
  { prefix: "",  value: 98.9, suffix: "%", display: "98.9%",  label: "Customer Satisfaction" },
];

const values = [
  {
    icon: Target,
    title: "Scope Discipline",
    description: "We help clients build what they need — nothing more. The right scope, ruthlessly applied, is the difference between a product that ships and one that never does.",
    example: "We've turned down projects we could have billed because the scope wasn't right. Scoping honestly costs us short-term revenue. It builds long-term trust.",
  },
  {
    icon: Heart,
    title: "Founder Empathy",
    description: "We understand the pressure founders face. That understanding drives us to be careful, honest, and genuinely invested in every dollar and decision.",
    example: "We structure payments by phase. You never pay for work that hasn't started. We've deferred invoices when a client hit a fundraising crunch.",
  },
  {
    icon: Zap,
    title: "Bias to Ship",
    description: "A working product in users' hands beats a perfect product on a roadmap. We optimize for learning and momentum, not perfection.",
    example: "Our sprints end with a live demo, not a status update. If it doesn't run in front of you, we haven't shipped.",
  },
  {
    icon: Users,
    title: "Radical Transparency",
    description: "We tell you when something won't work, when a timeline is unrealistic, and when an idea needs more validation — even when it's uncomfortable.",
    example: "In discovery calls, we tell founders what we'd change about their idea before they become clients. Most appreciate it. Some don't. That's fine.",
  },
  {
    icon: Shield,
    title: "Quality Without Compromise",
    description: "Fast doesn't mean fragile. We build on solid foundations — every project includes proper architecture, documentation, and the structure you can grow on for years.",
    example: "Every codebase we hand over includes documentation, a test suite, and an architecture decision record. We build for the engineer who comes after us.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Thinking",
    description: "We make decisions that serve your product's long-term trajectory. Our best client relationships span years, not sprints — and we build accordingly.",
    example: "Our longest client relationship is 4+ years. We made decisions in year one that served year four — and we'd make them again.",
  },
];

const team = [
  {
    name: "Joshua Zaporzan",
    role: "President",
    tagline: "Software innovation meets capital strategy.",
    photo: "/team/joshua-zaporzan.avif",
    bio: "Joshua leads Audax Ventures with a focus on combining software innovation, capital strategy, and operational excellence. He works closely with founders and enterprise teams to define what's possible and ensure every engagement delivers real business outcomes.",
    linkedin: "#",
  },
  {
    name: "Manoj Manghnani",
    role: "Director of Technology",
    tagline: "Scalable architecture, production-grade from day one.",
    photo: "/team/manoj-manghnani.png",
    bio: "Manoj sets technical standards across all Audax engagements. He brings deep expertise in software architecture and leads the technical direction of complex builds — ensuring the systems we deliver are scalable, maintainable, and production-grade from day one.",
    linkedin: "#",
  },
  {
    name: "Denise Zaporzan",
    role: "Director of Strategy",
    tagline: "Software investments aligned with business goals.",
    photo: "/team/denise-zaporzan.png",
    bio: "Denise leads strategy development for Audax clients, helping founders and enterprise teams align their software investments with their broader business goals. She specializes in go-to-market positioning, operational design, and growth planning.",
    linkedin: "#",
  },
  {
    name: "Riley Peterson",
    role: "Project & Venture Manager",
    tagline: "On scope, on schedule, on budget — every time.",
    photo: "/team/riley-peterson.png",
    bio: "Riley manages project delivery and venture development across the Audax portfolio. He keeps engagements on scope, on schedule, and on budget — acting as the day-to-day link between clients and the delivery team throughout every phase of a build.",
    linkedin: "#",
  },
  {
    name: "Lawson Yates",
    role: "Marketing Manager",
    tagline: "Visibility and demand for the products we build.",
    photo: "/team/lawson-yates.png",
    bio: "Lawson drives marketing strategy and execution for Audax and supports clients with their own go-to-market efforts. He combines content strategy, digital marketing, and brand development to build visibility and demand for the products we help create.",
    linkedin: "#",
  },
  {
    name: "Lindsay Friesen",
    role: "Project Manager",
    tagline: "Clear communication, realistic timelines, clean handoffs.",
    photo: "/team/lindsay-friesen.png",
    bio: "Lindsay ensures every Audax project runs smoothly from kickoff through launch. She coordinates between design, development, and client stakeholders — keeping communication clear, timelines realistic, and deliverables on track across multiple concurrent engagements.",
    linkedin: "#",
  },
];

const segments = [
  { badge: "Early-Stage Founders",  num: "01", description: "MVP development, market positioning, and fundraising support — from raw idea to a product your investors can actually see." },
  { badge: "Scaling Businesses",    num: "02", description: "Operations optimization, internal tooling, and fractional C-suite leadership — building the systems and team your growth demands." },
  { badge: "Exit-Focused Owners",   num: "03", description: "Transition planning, technology due diligence support, and investor matchmaking — positioning your business for the outcome you've worked toward." },
];

const whyStatements = [
  "We tell you when your idea isn't ready to build.",
  "You own 100% of the code. No lock-in, ever.",
  "We won't offshore your project without telling you.",
  "Fixed-price phases. No runaway invoices.",
  "We've said no to projects we couldn't deliver on time.",
];

const approach = [
  { num: "01", title: "Honest Scoping",        body: "We define what you actually need — not everything you might want. Scope discipline is how we keep budgets real and timelines honest." },
  { num: "02", title: "Transparent Delivery",  body: "Weekly live demos, clear status, and no surprises. You see progress every fortnight — not just at the end." },
  { num: "03", title: "Full IP Transfer",       body: "Source code, documentation, and all assets are yours from day one. No retainer required to keep the lights on." },
  { num: "04", title: "Partnership Mentality", body: "We measure our success by your outcomes — not our billable hours. Our best relationships last years." },
];

// ── Option 1: Count-up stat ───────────────────────────────────────────────────

function CountUp({ stat, started }: { stat: typeof stats[0]; started: boolean }) {
  // Sentinel pattern: count=null means we render the final display value
  // (SSR + pre-hydration). Once the parent signals started=true after
  // hydration, we set count=0 and animate up. This keeps SSR HTML showing
  // real numbers for SEO + no-JS users instead of placeholder zeros.
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!started) return;
    setCount(0);
    const steps = 50;
    const duration = 1600;
    let step = 0;
    const id = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setCount(eased * stat.value);
      if (step >= steps) { setCount(stat.value); clearInterval(id); }
    }, duration / steps);
    return () => clearInterval(id);
  }, [started, stat.value]);

  let displayValue: string;
  if (count === null) {
    displayValue = stat.display;
  } else {
    const formatted = stat.value % 1 !== 0
      ? count.toFixed(count >= stat.value ? 1 : 0)
      : Math.round(count).toLocaleString();
    displayValue = `${stat.prefix}${formatted}${stat.suffix}`;
  }

  return (
    <div className="text-center">
      <div className="font-[var(--font-outfit)] font-extrabold text-5xl sm:text-6xl text-white mb-2 tabular-nums">
        {displayValue}
      </div>
      <div className="text-white/50 text-sm font-medium">{stat.label}</div>
    </div>
  );
}

// ── Option 2: Team card with hover-reveal bio ─────────────────────────────────

function TeamCard({ member, delay }: { member: typeof team[0]; delay: number }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer select-none"
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      onClick={() => setRevealed((v) => !v)}
    >
      {/* Front face */}
      <div className="bg-[#F8F9FA] border border-gray-100 rounded-2xl p-7 text-center transition-colors duration-300 group-hover:border-[#2E5F8A]/30">
        <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-white shadow-md">
          <Image
            src={member.photo}
            alt={member.name}
            width={112}
            height={112}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] text-base mb-0.5">{member.name}</h3>
        <p className="text-[#2E5F8A] text-xs font-semibold mb-2">{member.role}</p>
        <p className="text-[#9CA3AF] text-xs italic leading-snug">{member.tagline}</p>
      </div>

      {/* Slide-up bio overlay */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="absolute inset-0 rounded-2xl flex flex-col justify-between p-7"
            style={{ background: "linear-gradient(160deg, #1A3A5C 0%, #0F172A 100%)" }}
          >
            <div>
              <h3 className="font-[var(--font-outfit)] font-bold text-white text-base mb-0.5">{member.name}</h3>
              <p className="text-[#3A7BD5] text-xs font-semibold mb-4">{member.role}</p>
              <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
            </div>
            <a
              href={member.linkedin}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors mt-4"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn Profile
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Option 3: Interactive values grid ────────────────────────────────────────

function ValuesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featured = values[activeIndex];
  const FeaturedIcon = featured.icon;

  return (
    <div className="grid lg:grid-cols-[1fr_360px] gap-6 items-start">
      {/* Featured panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="rounded-3xl p-10 text-white relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0F172A 0%, #1A3A5C 100%)" }}
        >
          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#2E5F8A]/15 pointer-events-none" />
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-[#2E5F8A]/30 flex items-center justify-center mb-6">
              <FeaturedIcon size={26} className="text-[#60A5FA]" />
            </div>
            <h3 className="font-[var(--font-outfit)] font-extrabold text-2xl text-white mb-3">{featured.title}</h3>
            <p className="text-white/65 leading-relaxed mb-8">{featured.description}</p>

            <div className="border-t border-white/10 pt-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/35 mb-3">How We Live This</p>
              <p className="text-white/55 text-sm leading-relaxed italic">&ldquo;{featured.example}&rdquo;</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Value selector list */}
      <div className="flex flex-col gap-2.5">
        {values.map((v, i) => {
          const Icon = v.icon;
          const isActive = activeIndex === i;
          return (
            <button
              key={v.title}
              onClick={() => setActiveIndex(i)}
              className={`w-full text-left flex items-center gap-4 rounded-2xl px-5 py-4 border transition-all duration-200 ${
                isActive
                  ? "border-[#2E5F8A]/40 bg-[#2E5F8A]/6 shadow-sm"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                  isActive ? "bg-[#2E5F8A] text-white" : "bg-[#F8F9FA] text-[#6B7280]"
                }`}
              >
                <Icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-[var(--font-outfit)] font-bold text-sm transition-colors ${isActive ? "text-[#2E5F8A]" : "text-[#1A1A2E]"}`}>
                  {v.title}
                </p>
                <p className="text-[#9CA3AF] text-xs truncate mt-0.5">{v.description.slice(0, 55)}…</p>
              </div>
              {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#2E5F8A] flex-shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function AboutContent() {
  const [countStarted, setCountStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setCountStarted(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── Option 1: Dark cinematic hero with count-up stats ── */}
      <section
        className="pt-32 pb-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1A2E45 50%, #0F172A 100%)" }}
      >
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[#2E5F8A]/12 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#3A7BD5]/8 blur-[80px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-white/50 font-semibold mb-6"
          >
            <MapPin size={13} /> Winnipeg, Manitoba, Canada
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight max-w-3xl"
          >
            Your Canadian Software Development Partner
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/55 text-lg leading-relaxed max-w-2xl mb-16"
          >
            Audax Ventures is a software development company and venture studio that combines software innovation, capital strategy, and operational excellence — built to help ambitious founders and growing companies launch, scale, and thrive.
          </motion.p>

          {/* Count-up stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10"
          >
            {stats.map((s) => (
              <CountUp key={s.label} stat={s} started={countStarted} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#2E5F8A] rounded-3xl p-10 text-white"
            >
              <Target className="mb-5 text-blue-200" size={32} />
              <p className="text-xs tracking-widest uppercase text-blue-300 font-semibold mb-3">Our Mission</p>
              <h2 className="font-[var(--font-outfit)] font-extrabold text-xl sm:text-2xl mb-4 leading-snug">
                &ldquo;To equip ambitious founders and growing companies with the software, strategy, and capital they need to launch, scale, and thrive.&rdquo;
              </h2>
              <p className="text-blue-100 leading-relaxed text-sm">
                We go beyond building software — we bring the strategy, capital connections, and operational expertise that turn a great idea into a real, growing business.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1A1A2E] rounded-3xl p-10 text-white"
            >
              <Eye className="mb-5 text-blue-300" size={32} />
              <p className="text-xs tracking-widest uppercase text-blue-400 font-semibold mb-3">Our Vision</p>
              <h2 className="font-[var(--font-outfit)] font-extrabold text-xl sm:text-2xl mb-4 leading-snug">
                &ldquo;To ignite a world where technology-driven ventures reshape industries and propel sustainable economic growth.&rdquo;
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                We believe in the power of technology to change the world — and we are committed to making that change positive, impactful, and enduring.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-4">Who We Are</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-6">
              AI Strategy &amp; Innovation Experts, Based in Canada
            </h2>
            <div className="space-y-4 text-[#6B7280] text-base leading-relaxed">
              <p>
                Audax Ventures is an AI strategy and innovation firm that helps organizations identify, implement, and scale technology solutions that create measurable business value. Through Fractional Chief AI Officer services, AI transformation initiatives, and custom software development, we work alongside leadership teams to turn emerging technology into practical business outcomes.
              </p>
              <p>
                We work with three kinds of clients. Early-stage founders who need to validate, build, and launch their first product. Scaling businesses that need the right systems, team, and leadership to grow without breaking. And exit-focused owners who want to maximize value and find the right path forward.
              </p>
              <p>
                Across all three, our approach is the same: a tailored mix of AI strategy, software innovation, and operational excellence — delivered by a team that fosters creativity, takes calculated risks, and treats your business as seriously as our own.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Client Segments ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Who We Work With</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E]">Built for Every Stage of Growth</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {segments.map((s, i) => (
              <motion.div
                key={s.badge}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#F8F9FA] rounded-2xl p-7 border border-gray-100 hover:border-[#2E5F8A]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2E5F8A]/10 text-[#2E5F8A] text-xs font-bold tracking-wide mb-4">
                  {s.num} — {s.badge}
                </div>
                <p className="text-[#374151] text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Option 4: Why Audax? split section ── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">The Honest Answer</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E]">Why Audax?</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Bold statements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-10 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0F172A 0%, #1A2E45 100%)" }}
            >
              <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-[#2E5F8A]/10 pointer-events-none" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/35 mb-8">Things We Actually Mean</p>
              <div className="space-y-5 relative">
                {whyStatements.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2E5F8A]/40 flex items-center justify-center mt-0.5">
                      <CheckCircle2 size={13} className="text-[#60A5FA]" />
                    </span>
                    <p className="font-[var(--font-outfit)] font-bold text-white text-lg leading-snug">{s}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: How we work */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-2">How We Work</p>
              {approach.map((a, i) => (
                <motion.div
                  key={a.num}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="flex items-start gap-5 bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#2E5F8A]/30 hover:shadow-sm transition-all"
                >
                  <span className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#2E5F8A]/15 flex-shrink-0 tabular-nums leading-none mt-0.5">
                    {a.num}
                  </span>
                  <div>
                    <h4 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mb-1">{a.title}</h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{a.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Option 3: Interactive values grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">What We Stand For</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E]">Core Values</h2>
            <p className="text-[#6B7280] mt-3 text-sm">Click any value to see how we actually live it.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ValuesGrid />
          </motion.div>
        </div>
      </section>

      {/* ── Option 2: Team with hover-reveal bio ── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">The People</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E]">Our Team</h2>
            <p className="text-[#6B7280] mt-4 max-w-xl mx-auto text-sm">
              Hover (or tap) any card to meet the person behind the role.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
