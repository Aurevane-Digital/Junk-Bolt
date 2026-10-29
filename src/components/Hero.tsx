interface HeroProps {
  onSeeServices: () => void;
}

export default function Hero({ onSeeServices }: HeroProps) {
  return (
    <section className="relative w-full min-h-[560px] lg:min-h-[640px] flex items-center justify-center text-center text-white bg-navydark-900 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Junk Bolt Fleet in SE Michigan"
          className="w-full h-full object-cover object-center opacity-25"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtSNbMX7A6nIpar-FPf3SHfHE_XDLl4HJCm4y7X0tynSoA_N85sKY1xskCkWvtjMM-NoKTztQi-WBmOdHMlZlhXLDVrbwzm4I2QIy6H3TqYhChgC50YTa0n4q-K6Yt10-xPEm4tn2D7UtKnV4VXyuRSivBjXVgfQXk_laS53qsLiBasQ9ckusNzNzFsKGW6uNtn_edYhBn67W4JOTlPg-a7nrMcCV87KDcm7DULiIC"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navydark-950/90 via-navydark-900/85 to-navydark-950/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:py-24 flex flex-col items-center">
        {/* Verification badge */}
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-navydark-800/80 border border-brandgold/40 text-brandgold text-xs font-bold font-montserrat uppercase tracking-wider backdrop-blur-sm shadow-sm">
          <span className="material-symbols-outlined text-[16px]">verified</span>
          Licensed and Insured • Locally Operated in Michigan
        </div>

        {/* Hero headline */}
        <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-tight sm:leading-none text-white drop-shadow-sm">
          RELIABLE HAULING &amp; REMOVAL<br className="hidden sm:inline" />{" "}
          <span className="text-brandgold">DONE RIGHT</span>
        </h1>

        {/* Lead subhead */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
          From furniture and appliance removal to full garage and basement cleanouts, Junk Bolt delivers dependable hauling backed by professional 15-yard trailers and upfront pricing.
        </p>

        {/* Dual action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onSeeServices}
            className="w-full sm:w-auto px-8 py-3.5 bg-brandgold hover:bg-brandgold-hover text-navydark-950 font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase transition-all rounded shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            SEE OUR SERVICES
          </button>
          <a
            className="w-full sm:w-auto px-8 py-3.5 border-2 border-slate-400 hover:border-brandgold text-white hover:text-brandgold font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase transition-all rounded bg-navydark-950/40 backdrop-blur-sm flex items-center justify-center gap-2"
            href="tel:2487097911"
          >
            <span className="material-symbols-outlined text-[18px]">phone</span>
            CALL 248-709-7911
          </a>
        </div>
      </div>
    </section>
  );
}
