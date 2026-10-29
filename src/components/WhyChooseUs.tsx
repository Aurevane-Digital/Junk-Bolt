import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, scale: 0.75, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      icon: "location_city",
      label: "Serving SE Michigan",
      desc: "Oakland, Macomb & Wayne Counties",
    },
    {
      icon: "verified_user",
      label: "Licensed and Insured",
      desc: "Full general liability coverage",
    },
    {
      icon: "construction",
      label: "Residential & Commercial Experience",
      desc: "Trailers & gear for any site",
    },
    {
      icon: "forum",
      label: "Clear Communication",
      desc: "Exact arrival windows & upfront quote",
    },
    {
      icon: "workspace_premium",
      label: "Reliable, Consistent Work",
      desc: "100% clean broom sweep finish",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 bg-navydark-950 text-white border-b border-slate-800 overflow-hidden"
      id="why-us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          ref={headingRef}
          className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white"
        >
          WHY CHOOSE <span className="text-brandgold">JUNK BOLT?</span>
        </h2>

        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-start"
        >
          {pillars.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col items-center group cursor-default ${
                index === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-navydark-850 border border-brandgold/30 flex items-center justify-center shadow-lg mb-4 group-hover:border-brandgold group-hover:scale-110 group-hover:bg-navydark-800 transition-all duration-300">
                <span className="material-symbols-outlined text-brandgold text-2xl sm:text-3xl transition-transform duration-300 group-hover:rotate-6">
                  {item.icon}
                </span>
              </div>
              <span className="font-montserrat font-bold text-xs sm:text-sm text-slate-200 tracking-wide max-w-[150px] leading-snug group-hover:text-white transition-colors duration-200">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
