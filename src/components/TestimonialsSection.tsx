import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REVIEWS_DATA } from "../data/reviews";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (cardsGridRef.current) {
        gsap.fromTo(
          cardsGridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsGridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (bannerRef.current) {
        gsap.fromTo(
          bannerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bannerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const googleReviewUrl =
    "https://www.google.com/maps/place/Junk+Bolt/@42.3619592,-83.7816001,10z/data=!4m15!1m7!3m6!1s0x8d92c874147f4885:0x98e4ae1ea952549e!2sJunk+Bolt!8m2!3d42.4582885!4d-83.454252!16s%2Fg%2F11z9hbcj3n!3m6!1s0x8d92c874147f4885:0x98e4ae1ea952549e!8m2!3d42.4582885!4d-83.454252!15sCglqdW5rIGJvbHRaCyIJanVuayBib2x0kgEUanVua19yZW1vdmFsX3NlcnZpY2WaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnN3TkdGSFVtRk9NMDQwVkcxS1dGZElSbXRSV0d0NlRqSnNiRTVIWXhBQuABAPoBBQixARBI!16s%2Fg%2F11z9hbcj3n?entry=ttu";

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-slate-50 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-left mb-12 sm:mb-16">
          <div className="w-12 h-1 bg-brandgold mb-3" />
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-navydark-900">
            SEE WHAT OUR CUSTOMERS ARE SAYING
          </h2>
        </div>

        {/* Reviews with Slate / Warm Gold Accents */}
        <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.slice(0, 2).map((rev) => (
            <div
              key={rev.id}
              className="bg-white text-slate-800 rounded-lg p-8 sm:p-10 shadow-md flex flex-col justify-between border-t-4 border-t-brandgold border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 will-change-transform"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-brandgold mb-5">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-2xl fill-current text-brandgold transition-transform hover:scale-125 duration-150"
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic font-normal">
                  "{rev.quote}"
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <p className="font-montserrat font-extrabold text-sm tracking-wider uppercase text-navydark-900">
                  — {rev.name}, {rev.location}
                </p>
                <span className="text-xs font-semibold text-slate-400">Verified Client</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review Prompt Banner */}
        <div
          ref={bannerRef}
          className="mt-10 p-6 sm:p-8 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:border-brandgold/40 hover:shadow-md will-change-transform"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-amber-50 border border-brandgold/40 flex items-center justify-center shrink-0 text-brandgold-dark shadow-sm transition-transform hover:scale-110">
              <span className="material-symbols-outlined text-2xl">rate_review</span>
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-brandgold mb-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[18px] fill-current text-brandgold"
                  >
                    star
                  </span>
                ))}
                <span className="text-xs font-bold text-slate-700 ml-1.5 font-montserrat uppercase tracking-wider">
                  5.0 Star Rating
                </span>
              </div>
              <h3 className="font-montserrat font-extrabold text-base sm:text-lg uppercase tracking-tight text-navydark-900">
                Recently worked with Junk Bolt?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                Your feedback helps local Michigan families and businesses find reliable hauling.
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full sm:w-auto text-center">
            <a
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brandgold hover:bg-brandgold-hover text-navydark-950 font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all duration-200 shadow-sm w-full sm:w-auto hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              href={googleReviewUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Leave a Review on Google</span>
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5">
                open_in_new
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
