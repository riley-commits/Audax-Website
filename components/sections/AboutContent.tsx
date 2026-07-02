"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Heart, Zap, Users, Shield, TrendingUp, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { prefix: "", value: 50,  suffix: "+", display: "50+",  label: "Projects Delivered"  },
  { prefix: "", value: 98,  suffix: "%", display: "98%",  label: "Client Satisfaction" },
  { prefix: "", value: 100, suffix: "%", display: "100%", label: "Code Ownership"      },
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
  { badge: "AI-Curious SMEs",        num: "01", description: "Fractional AI leadership, opportunity audits, and workflow automation — for businesses that know AI matters but don't know where to start." },
  { badge: "Funded Founders & Scale-Ups", num: "02", description: "Custom AI-powered products and internal tools, built and shipped fast — without the overhead of a full in-house engineering team." },
  { badge: "Established & Regulated Firms", num: "03", description: "AI governance, risk management, and custom integrations for healthcare, legal, financial, and other firms that can't afford to get AI adoption wrong." },
];

const whyStatements = [
  "We tell you when AI isn't the right answer for your problem.",
  "You own 100% of the code and IP. No lock-in, ever.",
  "We won't offshore your project without telling you.",
  "Fixed-price phases. No runaway invoices.",
  "We've turned down AI projects we didn't believe would work.",
];

const approach = [
  { num: "01", title: "Honest AI Assessment",  body: "We tell you where AI will actually create value for your business — and where it won't. No hype, no vendor pitch, just a grounded audit." },
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
      <div className="font-[var(--font-outfit)] font-extrabold text-5xl sm:text-6xl text-[#2E5F8A] mb-2 tabular-nums">
        {displayValue}
      </div>
      <div className="text-[#6B7280] text-sm font-medium">{stat.label}</div>
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
    <div className="bg-[#FAFAF8]">

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 relative overflow-visible">
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(46,95,138,0.10) 0%, transparent 68%)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(58,123,213,0.07) 0%, transparent 68%)" }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 items-start mb-16">
            <div className="lg:pt-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-[#6B7280] font-semibold mb-6"
              >
                <MapPin size={13} /> Winnipeg, Manitoba, Canada
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#2E5F8A] mb-6 leading-tight"
              >
                Your AI Strategy &amp; Software Development Partner
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#6B7280] text-lg leading-relaxed max-w-xl"
              >
                Audax Ventures is an AI strategy and innovation firm based in Canada. Through Fractional Chief AI Officer services and custom AI &amp; software development, we help organizations identify, implement, and scale technology solutions that create measurable business value.
              </motion.p>
            </div>

            {/* Image extends below hero into Mission section on large screens */}
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] hidden sm:block lg:mb-[-160px] z-20"
            >
              <Image
                src="/about/winnipeg-office-meeting.png"
                alt="Audax team in a client meeting at the Winnipeg office"
                fill
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-200 relative z-10"
          >
            {stats.map((s) => (
              <CountUp key={s.label} stat={s} started={countStarted} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision — extra top padding on lg to clear the overlapping hero image ── */}
      <section className="pt-16 lg:pt-52 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-10 border border-gray-100 shadow-md relative overflow-hidden"
              style={{ borderLeft: "5px solid #2E5F8A" }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(46,95,138,0.06) 0%, transparent 70%)" }} />
              <div className="w-12 h-12 rounded-2xl bg-[#2E5F8A]/10 flex items-center justify-center mb-5">
                <Target className="text-[#2E5F8A]" size={24} />
              </div>
              <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-bold mb-3">Our Mission</p>
              <h2 className="font-[var(--font-outfit)] font-extrabold text-xl sm:text-2xl text-[#1A1A2E] mb-4 leading-snug">
                &ldquo;To give organizations executive-level AI leadership and the custom software they need to turn emerging technology into measurable business outcomes.&rdquo;
              </h2>
              <p className="text-[#6B7280] leading-relaxed text-sm">
                We go beyond AI hype — we bring the strategy, governance, and engineering expertise that turn AI from a buzzword into a real driver of efficiency and growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-10 border border-gray-100 shadow-md relative overflow-hidden"
              style={{ borderLeft: "5px solid #3A7BD5" }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(58,123,213,0.06) 0%, transparent 70%)" }} />
              <div className="w-12 h-12 rounded-2xl bg-[#3A7BD5]/10 flex items-center justify-center mb-5">
                <Eye className="text-[#3A7BD5]" size={24} />
              </div>
              <p className="text-xs tracking-widest uppercase text-[#3A7BD5] font-bold mb-3">Our Vision</p>
              <h2 className="font-[var(--font-outfit)] font-extrabold text-xl sm:text-2xl text-[#1A1A2E] mb-4 leading-snug">
                &ldquo;To ignite a world where AI-driven strategy and software reshape how organizations operate, compete, and grow.&rdquo;
              </h2>
              <p className="text-[#6B7280] leading-relaxed text-sm">
                We believe in the power of AI to change how businesses work — and we are committed to making that change practical, responsible, and enduring.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who We Are — whiteboard image bleeds into Client Segments below ── */}
      <section className="py-16 relative overflow-visible">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:pt-6"
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
                  We work with businesses that know AI matters but don&apos;t have the in-house leadership or engineering capacity to act on it — from funded founders building their first AI-powered product, to growing SMEs automating repetitive work, to established firms in regulated industries that need AI governance done right.
                </p>
                <p>
                  Across every engagement, our approach is the same: a tailored mix of AI strategy, software innovation, and operational excellence — delivered by a team that fosters creativity, takes calculated risks, and treats your business as seriously as our own.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] hidden sm:block lg:mb-[-100px] z-20"
            >
              <Image
                src="/about/whiteboard-strategy.png"
                alt="Audax team mapping an AI strategy on a whiteboard"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Client Segments — top padding accommodates overlapping whiteboard image ── */}
      <section className="pt-12 lg:pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Who We Work With</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E]">Built for Every Stage of AI Adoption</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {segments.map((s, i) => (
              <motion.div
                key={s.badge}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:border-[#2E5F8A]/30 hover:shadow-md transition-all duration-200"
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

      {/* ── Core Values ── */}
      <section className="py-20">
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

      {/* ── Team ── */}
      <section className="py-20 pb-32">
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

    </div>
  );
}
