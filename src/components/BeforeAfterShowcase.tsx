import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS_DATA, ProjectItem } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

interface BeforeAfterShowcaseProps {
  onBookCleanout: (projectTitle: string) => void;
}

export default function BeforeAfterShowcase({ onBookCleanout }: BeforeAfterShowcaseProps) {
  // Default to Project 1 (Commercial Dumpster)
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const showcaseBoxRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeProject: ProjectItem = PROJECTS_DATA[selectedIdx] || PROJECTS_DATA[0];

  // GSAP ScrollTrigger reveals
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }

      if (showcaseBoxRef.current) {
        gsap.fromTo(
          showcaseBoxRef.current,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              once: true,
            },
          }
        );
      }

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
              trigger: sectionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSelectProject = (idx: number) => {
    setSelectedIdx(idx);
    setSliderPos(50);
  };

  const updateSliderFromClientX = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width <= 0) return;
    const offsetX = clientX - rect.left;
    const clampedPct = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPos(Math.round(clampedPct * 10) / 10);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateSliderFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateSliderFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPos(100);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 bg-white border-b border-slate-200 overflow-hidden"
      id="before-after"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-left mb-10 sm:mb-12">
          <div className="w-12 h-1 bg-brandgold mb-3" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-navydark-900">
                BEFORE &amp; AFTER: REAL TRANSFORMATIONS
              </h2>
              <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
                Explore all 4 real local transformations from commercial dumpster corrals to residential garage cleanouts. Drag the interactive comparison slider anywhere across the photo or click any project below to inspect the transformation.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-xs font-montserrat font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3.5 py-2 rounded border border-slate-200">
              <span className="material-symbols-outlined text-brandgold-dark text-[18px]">touch_app</span>
              <span>Click or drag photo to compare</span>
            </div>
          </div>
        </div>

        {/* Project Tabs Switcher */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
          {PROJECTS_DATA.map((proj, idx) => {
            const isActive = idx === selectedIdx;
            return (
              <button
                key={proj.id}
                onClick={() => handleSelectProject(idx)}
                className={`project-tab px-4 sm:px-5 py-2.5 rounded font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                  isActive
                    ? "bg-navydark-900 text-brandgold shadow-md border border-navydark-900"
                    : "bg-white text-slate-700 border border-slate-300 hover:border-brandgold hover:text-navydark-900 shadow-sm"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    isActive ? "bg-brandgold" : "bg-slate-400"
                  }`}
                />
                <span>
                  {idx + 1}. {proj.title.split("&")[0].split("TEARDOWN")[0].split("OVERFLOW")[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Interactive Slider Comparison Box */}
        <div
          ref={showcaseBoxRef}
          className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Slider container with pointer events */}
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="slider"
              aria-label="Before and After comparison slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(sliderPos)}
              className="lg:col-span-8 relative bg-slate-950 h-[400px] sm:h-[480px] lg:h-[540px] overflow-hidden select-none cursor-ew-resize group focus:outline-none focus:ring-2 focus:ring-brandgold touch-none"
            >
              {/* After image (base, clean result) */}
              <img
                alt={`${activeProject.title} - After clean transformation`}
                className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
                draggable={false}
                src={activeProject.afterImg}
              />

              {/* Before image (top layer clipped with hardware-accelerated clipPath) */}
              <img
                alt={`${activeProject.title} - Before cluttered state`}
                className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
                draggable={false}
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                src={activeProject.beforeImg}
              />

              {/* Badges */}
              <div
                className="absolute top-4 left-4 z-20 pointer-events-none transition-opacity duration-200"
                style={{ opacity: sliderPos < 10 ? 0.2 : 1 }}
              >
                <span className="px-3 py-1.5 rounded font-montserrat font-extrabold text-xs uppercase tracking-wider bg-navydark-950/90 border border-slate-700 text-white shadow-md flex items-center gap-1.5 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[15px] text-amber-400">
                    history
                  </span>
                  BEFORE
                </span>
              </div>
              <div
                className="absolute top-4 right-4 z-20 pointer-events-none transition-opacity duration-200"
                style={{ opacity: sliderPos > 90 ? 0.2 : 1 }}
              >
                <span className="px-3 py-1.5 rounded font-montserrat font-extrabold text-xs uppercase tracking-wider bg-brandgold text-navydark-950 shadow-md flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px]">check_circle</span>
                  AFTER
                </span>
              </div>

              {/* Divider line & drag handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-brandgold shadow-[0_0_14px_rgba(217,155,6,0.9)] z-20 pointer-events-none flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                <div
                  className={`w-11 h-11 rounded-full bg-navydark-950 text-brandgold shadow-2xl flex items-center justify-center border-2 border-brandgold -ml-[21px] transition-transform duration-150 ${
                    isDragging
                      ? "scale-110 shadow-[0_0_20px_rgba(217,155,6,0.8)]"
                      : "group-hover:scale-105"
                  }`}
                >
                  <span className="text-[11px] font-bold font-montserrat tracking-tighter flex items-center gap-0.5 select-none text-brandgold">
                    ◀▶
                  </span>
                </div>
              </div>

            </div>

            {/* Project Details Panel */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold font-montserrat uppercase text-brandgold-dark tracking-wider mb-2">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  verified completed job
                </div>
                <h3 className="font-montserrat font-extrabold text-xl sm:text-2xl text-navydark-900 uppercase tracking-tight">
                  {activeProject.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  {activeProject.loc}
                </p>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {activeProject.desc}
                </p>

                <div className="mt-6 space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-500 font-medium flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brandgold-dark text-[18px]">
                        timer
                      </span>
                      Turnaround:
                    </span>
                    <span className="font-montserrat font-bold text-navydark-900">
                      {activeProject.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-500 font-medium flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brandgold-dark text-[18px]">
                        local_shipping
                      </span>
                      Trailer Load:
                    </span>
                    <span className="font-montserrat font-bold text-navydark-900">
                      {activeProject.load}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-500 font-medium flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brandgold-dark text-[18px]">
                        cleaning_services
                      </span>
                      Quality:
                    </span>
                    <span className="font-montserrat font-bold text-brandgold-dark">
                      {activeProject.finish}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <button
                  onClick={() => onBookCleanout(activeProject.title)}
                  className="w-full py-3.5 bg-brandgold hover:bg-brandgold-hover text-navydark-950 font-montserrat font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>BOOK YOUR CLEANOUT</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
                <p className="text-center text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-2.5">
                  Upfront Pricing • No Dump Fee Surcharges
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ALL 4 PROJECTS GALLERY CARDS (VISIBLE SIDE-BY-SIDE INSPECTION) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-montserrat font-extrabold text-lg sm:text-xl uppercase tracking-tight text-navydark-900">
                All 4 Verified Project Galleries
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Click any card to inspect in the live interactive slider above.
              </p>
            </div>
            <span className="text-xs font-bold text-brandgold-dark uppercase tracking-wider hidden sm:inline-block">
              100% Real Michigan Jobs
            </span>
          </div>

          <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS_DATA.map((proj, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <div
                  key={proj.id}
                  onClick={() => handleSelectProject(idx)}
                  className={`project-card cursor-pointer rounded-lg border-2 bg-white p-4 transition-all duration-200 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between group ${
                    isSelected
                      ? "border-brandgold shadow-md ring-1 ring-brandgold/40"
                      : "border-slate-200 shadow-sm hover:border-brandgold/60"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[11px] font-extrabold font-montserrat uppercase px-2 py-0.5 rounded transition-colors ${
                          isSelected
                            ? "bg-brandgold text-navydark-950"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        Project {proj.id}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {proj.loc.split(",")[0]}
                      </span>
                    </div>

                    <h4 className="font-montserrat font-bold text-sm text-navydark-900 uppercase tracking-tight mb-3 group-hover:text-brandgold-dark transition-colors duration-200">
                      {proj.id}. {proj.title}
                    </h4>

                    {/* Side-by-Side Thumbnail Pair */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="relative rounded overflow-hidden aspect-[3/4] bg-slate-100 border border-slate-200">
                        <img
                          alt={`Project ${proj.id} Before`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          src={proj.beforeImg}
                        />
                        <span className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-black/80 text-[9px] font-bold text-white uppercase rounded backdrop-blur-xs">
                          Before
                        </span>
                      </div>
                      <div className="relative rounded overflow-hidden aspect-[3/4] bg-slate-100 border border-brandgold/40">
                        <img
                          alt={`Project ${proj.id} After`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          src={proj.afterImg}
                        />
                        <span className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-brandgold text-[9px] font-bold text-navydark-950 uppercase rounded">
                          After
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-600 space-y-1">
                    <p className="font-medium text-slate-700 flex items-center gap-1">
                      <span>⏱️</span>
                      <span>{proj.time}</span>
                    </p>
                    <p className="font-medium text-slate-700 flex items-center gap-1">
                      <span>🚛</span>
                      <span className="truncate">{proj.load}</span>
                    </p>
                    <span className="inline-block mt-2 font-montserrat font-bold text-[10px] text-brandgold-dark uppercase tracking-wider group-hover:underline">
                      Click to view in slider →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
