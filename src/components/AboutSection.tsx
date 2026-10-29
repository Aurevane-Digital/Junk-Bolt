import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AboutSectionProps {
  onGetEstimate: () => void;
}

export default function AboutSection({ onGetEstimate }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left side: image and badge reveal
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { scale: 0, rotation: -15 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // Right side: staggered content reveal
      if (rightColRef.current) {
        const elements = rightColRef.current.children;
        gsap.fromTo(
          elements,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Trailer Photo with Emblem Badge */}
          <div ref={leftColRef} className="lg:col-span-6 relative will-change-transform">
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-slate-200 group">
              <img
                alt="Junk Bolt owner standing atop heavy-duty hauling trailer"
                className="w-full h-[340px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG2gi0f4pqeOMteXYjvAOcb_BVRiFXDeqAuUWblTqgphr4bxsScqtt3fjyE3RP7MtL5w_HE4PluJ4SzZuYCt6AWCG1IqPmrSYYL8TMZdYUnaAmrRTlfLrrSaR48saPsevYViaqQ6boyIKLmQFaDjbhVBKxyuB-pbS1PueWKSDm8b-b2ry_w85LGi3ZGaFO83m6wxS7kbHd_Obevm0qOcW9LGRqyvIQtodTr1tK0e-C_lLLExs_SvaF2sb4S7o9DLzWh7239p5elU-jXYs"
              />
            </div>

            {/* Vintage Badge overlapping top-left with muted gold tone */}
            <div
              ref={badgeRef}
              className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-brandgold text-navydark-950 border-4 border-white shadow-xl flex flex-col items-center justify-center p-2 text-center select-none transition-transform duration-300 hover:scale-110 hover:rotate-3 will-change-transform"
            >
              <span className="text-[9px] sm:text-[10px] font-montserrat font-bold tracking-widest uppercase">
                JUNK BOLT
              </span>
              <div className="flex items-center justify-center my-0.5">
                <span className="material-symbols-outlined text-navydark-950 text-2xl sm:text-3xl">
                  bolt
                </span>
                <span className="font-montserrat font-extrabold text-sm sm:text-lg italic tracking-tight text-navydark-950 ml-0.5">
                  MI
                </span>
              </div>
              <span className="bg-navydark-900 text-brandgold text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                FOUNDED 19 Y/O
              </span>
              <span className="text-[8px] sm:text-[9px] text-navydark-900 font-bold tracking-wider mt-0.5">
                EST. LOCAL
              </span>
            </div>
          </div>

          {/* Right Column: Clean Bold Typography */}
          <div ref={rightColRef} className="lg:col-span-6 flex flex-col justify-center">
            <div className="w-12 h-1 bg-brandgold mb-4" />
            <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-slate-900 leading-tight">
              TRUSTED JUNK REMOVAL SERVICES FOR HOMES AND BUSINESSES
            </h2>
            <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed">
              From single-item pickups to large-scale residential and commercial cleanouts, Junk Bolt delivers safe, dependable junk removal backed by honest communication and hard work. When you need the job done right, our licensed and insured team is ready to help.
            </p>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Founded right here in Southeastern Michigan, we operate high-capacity 15-yard dump trailers that handle everything from heavy furniture and broken appliances to contractor debris and entire estate cleanouts.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onGetEstimate}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brandgold hover:bg-brandgold-hover text-navydark-950 font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase rounded transition-all shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 duration-150"
              >
                <span>GET AN ESTIMATE</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
              <span className="text-sm font-semibold text-slate-500">
                Same-Day &amp; Next-Day Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
