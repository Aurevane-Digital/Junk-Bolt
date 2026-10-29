import { useState } from "react";
import { SERVICE_AREAS } from "../data/reviews";

interface ServiceAreasSectionProps {
  onRequestQuote: () => void;
}

export default function ServiceAreasSection({ onRequestQuote }: ServiceAreasSectionProps) {
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);

  const mapBgUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCw0TGujZiJc7cvPi5bc3U5jGh1ozEhu2ZMta3SlQxnXgW1Vv8c_-3_uLfhxm1Q1ZLbe0_dSitWSyVmBfxdkcWNAWCOsFohA7hkYIlvAWmJmhh2mJXl5_fK77CcvZLUQJiZAE2eOpqqZyujMfk0r_dfpA3WXztAEANSWn6bIkoJPEvCzqwtnaLoKxg5FT4e5TCi3pTgNpJxNAsopWEQ6p5nsZJCjPg-4g7RP-i7t8UA";

  return (
    <section
      className="relative py-16 sm:py-24 bg-navydark-900 text-white overflow-hidden border-t border-b border-slate-800"
      id="areas"
    >
      {/* Background Map Texture */}
      <div className="absolute inset-0 z-0">
        <img
          alt="SE Michigan Map Background"
          className="w-full h-full object-cover opacity-15"
          src={mapBgUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navydark-950 via-navydark-900/90 to-navydark-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-bold font-montserrat tracking-widest uppercase text-brandgold mb-1">
              LOCAL DISPATCH COVERAGE
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
              SERVING SOUTHEASTERN<br />
              <span className="text-brandgold">MICHIGAN</span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Serving Troy, Rochester Hills, Birmingham, Royal Oak, Sterling Heights, Shelby Township, Macomb, Detroit Metro, and surrounding areas.
            </p>

            {/* County Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => {
                const isSelected = selectedCounty === area.county;
                return (
                  <button
                    key={area.county}
                    onClick={() =>
                      setSelectedCounty(isSelected ? null : area.county)
                    }
                    className={`px-3.5 py-1.5 rounded font-montserrat font-bold text-xs uppercase shadow-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-brandgold text-navydark-950 border border-brandgold"
                        : "bg-navydark-800 border border-slate-700 text-white hover:border-brandgold/60"
                    }`}
                  >
                    <span>{area.county}</span>
                    {isSelected && (
                      <span className="material-symbols-outlined text-sm">
                        check
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* City highlights if county selected */}
            {selectedCounty && (
              <div className="mt-4 p-3.5 rounded-lg bg-navydark-850/90 border border-brandgold/40 text-xs text-slate-200 animate-in fade-in duration-150">
                <span className="text-brandgold font-bold font-montserrat uppercase mr-1">
                  Active Dispatch in {selectedCounty}:
                </span>
                <span>
                  {SERVICE_AREAS.find((a) => a.county === selectedCounty)?.cities}
                </span>
              </div>
            )}

            <div className="mt-8">
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-brandgold text-brandgold hover:bg-brandgold hover:text-navydark-950 font-montserrat font-bold text-xs uppercase tracking-wider transition-colors rounded shadow-sm cursor-pointer"
              >
                SEE ALL SERVICE AREAS
              </button>
            </div>
          </div>

          {/* Right Column: Map Visual */}
          <div className="lg:col-span-6">
            <div className="rounded-lg overflow-hidden border border-slate-700 shadow-2xl bg-white">
              <div
                className="relative w-full h-[320px] bg-cover bg-center"
                style={{ backgroundImage: `url("${mapBgUrl}")` }}
              >
                {/* Pin Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-105">
                    <span className="material-symbols-outlined text-4xl text-brandgold drop-shadow-md animate-bounce">
                      location_on
                    </span>
                    <span className="px-3 py-1 rounded bg-navydark-950 text-brandgold font-montserrat font-bold text-[10px] uppercase shadow border border-brandgold/40">
                      SE Michigan Dispatch
                    </span>
                    <span className="text-[10px] text-white bg-black/70 px-2 py-0.5 rounded mt-1 shadow">
                      Daily Fleet Routes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
