import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onSeeServices: () => void;
}

export default function Hero({ onSeeServices }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Ensure video plays continuously
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: muted is set so modern browsers allow it
      });
    }

    if (prefersReducedMotion || !containerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // Background video subtle scale in on load
      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          { scale: 1.05 },
          { scale: 1, duration: 1.6, ease: "power2.out" }
        );

        // Parallax effect on scroll
        gsap.to(videoRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Timeline for content entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.15 }
        );
      }

      if (headlineLine1Ref.current && headlineLine2Ref.current) {
        tl.fromTo(
          [headlineLine1Ref.current, headlineLine2Ref.current],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.15 },
          "-=0.4"
        );
      }

      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        );
      }

      if (buttonsRef.current) {
        tl.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
          "-=0.4"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[640px] lg:min-h-[720px] flex items-center justify-center text-center text-white bg-black/90 overflow-hidden"
    >
      {/* Background HTML5 Video with transparent neutral overlay (no static picture) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-100 will-change-transform"
        >
          <source
            src="/assets/aistudio/junk_bolt_website_intro_section_video_a667f877.mp4"
            type="video/mp4"
          />
        </video>
        {/* Transparent neutral dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-28 sm:pt-36 pb-20 sm:pb-28 flex flex-col items-center">
        {/* Verification badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-black/45 border border-brandgold/40 text-brandgold text-xs font-bold font-montserrat uppercase tracking-wider backdrop-blur-md shadow-sm transition-transform hover:scale-105 duration-200"
        >
          <span className="material-symbols-outlined text-[16px]">verified</span>
          Licensed and Insured • Locally Operated in Michigan
        </div>

        {/* Hero headline with masked overflow reveals */}
        <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-tight sm:leading-none text-white drop-shadow-md">
          <span className="block overflow-hidden pb-1">
            <span ref={headlineLine1Ref} className="block will-change-transform">
              RELIABLE HAULING &amp; REMOVAL
            </span>
          </span>
          <span className="block overflow-hidden pt-1">
            <span
              ref={headlineLine2Ref}
              className="block text-brandgold will-change-transform drop-shadow"
            >
              DONE RIGHT
            </span>
          </span>
        </h1>

        {/* Lead subhead */}
        <p
          ref={subtextRef}
          className="mt-6 max-w-2xl text-base sm:text-lg text-slate-200 font-normal leading-relaxed will-change-transform drop-shadow"
        >
          From furniture and appliance removal to full garage and basement cleanouts, Junk Bolt delivers dependable hauling backed by professional 15-yard trailers and upfront pricing.
        </p>

        {/* Dual action buttons */}
        <div
          ref={buttonsRef}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onSeeServices}
            className="w-full sm:w-auto px-8 py-3.5 bg-brandgold hover:bg-brandgold-hover text-navydark-950 font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase transition-all rounded shadow-md flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] duration-150"
          >
            <span>SEE OUR SERVICES</span>
          </button>
          <a
            className="w-full sm:w-auto px-8 py-3.5 border-2 border-white/60 hover:border-brandgold text-white hover:text-brandgold font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase transition-all rounded bg-black/35 backdrop-blur-sm flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] duration-150"
            href="tel:2487097911"
          >
            <span className="material-symbols-outlined text-[18px]">phone</span>
            <span>CALL 248-709-7911</span>
          </a>
        </div>
      </div>
    </section>
  );
}
