import { useState } from "react";

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Before & After", href: "#before-after" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Areas We Serve", href: "#areas" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left Nav & Brand Logo Container */}
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
            aria-label="Junk Bolt Home"
          >
            <img
              alt="Junk Bolt Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XXCF6XSxPEllaXMbgjk1ziI06M_86PVYdiCVuhi-a33iEoP8WEpUNTS8PdpFJznh8ODiuam111fckkHhwXU0-W9HmWm2l9cseV9uVjORsKzhqltci5kLftrh-X86638NoK_-zvg3QqLBC9vRYHyKfEzVW2GRTa2lsgHdXpyNmLNyU5Tz9tNZPwz-5icVZvRR6TNk7xRbMLUAuRW6t1csIRH8sR8NUvMBQW-2s_-RnI"
            />
          </a>

          {/* Main Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-brandgold-dark transition-colors tracking-wide py-1 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            aria-label="Junk Bolt on Instagram"
            className="w-9 h-9 rounded-md border border-slate-300 text-slate-700 hover:text-brandgold-dark hover:border-brandgold flex items-center justify-center transition-all bg-slate-50 hover:bg-amber-50/50"
            href="https://www.instagram.com/junk.bolt/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-800 px-3 py-2 rounded border border-slate-200 hover:border-brandgold-dark transition-colors bg-white whitespace-nowrap"
            href="tel:2487097911"
          >
            <span className="material-symbols-outlined text-[16px] text-brandgold-dark">call</span>
            <span>248-709-7911</span>
          </a>

          <a
            onClick={(e) => {
              e.preventDefault();
              onOpenQuote();
              const el = document.getElementById("quote-form");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 bg-brandgold hover:bg-brandgold-hover text-navydark-950 text-xs sm:text-sm font-bold font-montserrat tracking-wider uppercase rounded transition-all shadow-sm cursor-pointer whitespace-nowrap"
            href="#quote-form"
          >
            Contact Us
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 hover:text-brandgold-dark transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-slate-900 bg-slate-100 rounded-md"
                href="tel:2487097911"
              >
                <span className="material-symbols-outlined text-base text-brandgold-dark">call</span>
                <span>Call 248-709-7911</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
