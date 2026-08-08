import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "AI Leadership", href: "/services/ai-leadership" },
  { label: "Custom Software Development", href: "/services/custom-software-development" },
  { label: "Digital Operations", href: "/services/digital-operations" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "About Joshua Zaporzan", href: "/about/joshua-zaporzan" },
  { label: "Our Approach", href: "/approach" },
  { label: "Products", href: "/products" },
  { label: "Programs", href: "/programs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  { label: "Articles", href: "/insights" },
  { label: "Client Success Stories", href: "/success-stories" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <Image src="/audax-logo.png" alt="Audax Ventures" width={160} height={52} className="h-11 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-5">
              The AI strategy partner that actually builds. Fractional leadership. Custom software. Real impact.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/audax-ventures-inc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="text-white/40 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://twitter.com/audaxventures" target="_blank" rel="noopener noreferrer" aria-label="X"
                className="text-white/40 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://instagram.com/audax.ventures" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="text-white/40 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Company</h3>
            <ul className="space-y-2.5">
              {company.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {resources.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Differentiator line */}
        <div className="border-t border-white/10 pt-8 pb-2 text-center">
          <p className="text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            <span className="block text-white/50">Most firms help you define the strategy or build the technology.</span>
            <span className="block bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent font-semibold">
              Audax does both, then stays with you to ensure it delivers real business results.
            </span>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Audax Ventures Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-white/40 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
