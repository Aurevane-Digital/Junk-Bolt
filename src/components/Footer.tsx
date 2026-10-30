import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FooterProps {
  onNavClick: (id: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const footerRef = useRef<HTMLElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !footerRef.current) return;

    const ctx = gsap.context(() => {
      if (cardsGridRef.current) {
        gsap.fromTo(
          cardsGridRef.current.children,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={cardsGridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Navy Card with Gold Details */}
          <div className="lg:col-span-6 bg-navydark-850 text-white rounded-lg p-8 sm:p-10 shadow-lg flex flex-col justify-between border border-slate-700 transition-all duration-300 hover:border-brandgold/40 hover:shadow-xl">
            <div className="flex flex-col">
              <span className="text-xs font-bold font-montserrat tracking-widest uppercase text-brandgold mb-1">
                DIRECT CONTACT
              </span>
              <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white mb-6">
                CONTACT US
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-slate-300 font-normal">
                <p className="font-extrabold text-white text-xl tracking-wide flex items-center gap-2">
                  <span className="material-symbols-outlined text-brandgold text-2xl">
                    call
                  </span>
                  <a className="hover:text-brandgold transition-colors" href="tel:2487097911">
                    248-709-7911
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brandgold text-xl">
                    mail
                  </span>
                  <a
                    className="hover:text-brandgold underline font-semibold transition-colors text-white"
                    href="mailto:getjunkbolt@gmail.com"
                  >
                    getjunkbolt@gmail.com
                  </a>
                </p>
                <p className="text-slate-300 flex items-start gap-2">
                  <span className="material-symbols-outlined text-brandgold text-xl shrink-0 mt-0.5">
                    location_on
                  </span>
                  <span>
                    Serving Oakland, Macomb &amp; Wayne Counties
                    <br />
                    Southeastern Michigan
                  </span>
                </p>
                <div className="pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed flex items-center gap-2">
                  <span className="material-symbols-outlined text-brandgold text-xl">
                    schedule
                  </span>
                  <span>
                    <strong className="text-white">Monday – Sunday:</strong> 8:00 AM – 8:00 PM
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700 flex items-center justify-between">
              <a
                aria-label="Instagram"
                className="w-9 h-9 rounded bg-brandgold text-navydark-950 hover:bg-brandgold-hover flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
                href="https://www.instagram.com/junk.bolt/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <span className="text-xs text-brandgold font-montserrat uppercase tracking-wider font-bold">
                Fast Dispatch
              </span>
            </div>
          </div>

          {/* Right Side: Brand Emblem & Legal Title */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-lg p-8 sm:p-10 border border-slate-800 shadow-md flex flex-col justify-center items-start text-slate-100 transition-all duration-300 hover:border-brandgold/40 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <img
                alt="Junk Bolt Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 hover:scale-105 drop-shadow-md"
                src="/assets/aistudio/junkbolt-logo-transparent_c4fe9438.svg"
              />
            </div>
            <h4 className="font-montserrat font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-white mt-2">
              JUNK BOLT HAULING SERVICES, LLC.
            </h4>
            <p className="mt-3 text-sm font-semibold text-brandgold uppercase tracking-wider">
              Licensed and Insured • Owner-Operated MI Fleet
            </p>
            <p className="mt-4 text-xs text-slate-300 max-w-md leading-relaxed">
              High-capacity 15-yard dump trailers providing residential cleanouts, furniture haul-away, and commercial construction cleanup.
            </p>
          </div>
        </div>

        {/* Sub-footer copyright strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Junk Bolt Hauling Services, LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavClick("about")}
              className="hover:text-brandgold transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavClick("about")}
              className="hover:text-brandgold transition-colors cursor-pointer"
            >
              Terms and Conditions
            </button>
            <button
              onClick={() => onNavClick("areas")}
              className="hover:text-brandgold transition-colors cursor-pointer"
            >
              Service Areas
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
