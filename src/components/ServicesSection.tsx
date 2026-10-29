import { useState } from "react";
import { SERVICES_DATA, ServiceItem } from "../data/services";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleServiceClick = (service: ServiceItem) => {
    setActiveModalService(service);
  };

  const handleBookService = (service: ServiceItem) => {
    setActiveModalService(null);
    onSelectService(service.id);
  };

  return (
    <section
      className="py-16 sm:py-24 bg-slate-100 text-slate-900 border-t border-b border-slate-200"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10 sm:mb-12">
          <div className="w-12 h-1 bg-brandgold mb-3" />
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-navydark-900">
            JUNK REMOVAL SERVICES
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Comprehensive residential and commercial hauling with heavy-duty equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Residential */}
          <div className="relative group rounded-lg overflow-hidden min-h-[320px] p-8 flex flex-col justify-between border border-slate-300 bg-white hover:border-brandgold transition-all shadow-md">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-md bg-amber-50 border border-brandgold/30 flex items-center justify-center text-brandgold-dark mb-4">
                <span className="material-symbols-outlined text-2xl">home</span>
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl uppercase tracking-tight text-navydark-900">
                RESIDENTIAL
              </h3>
              <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-md">
                Furniture, mattresses, appliances, garages, basements, attics, yard debris, and general household clutter removed with zero stress.
              </p>
            </div>
            <div className="relative z-10 pt-6">
              <button
                onClick={() => handleServiceClick(SERVICES_DATA[0])}
                className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-navydark-900 hover:border-brandgold text-navydark-900 hover:text-brandgold-dark font-montserrat font-bold text-xs uppercase tracking-wider transition-colors rounded cursor-pointer"
              >
                VIEW RESIDENTIAL
              </button>
            </div>
          </div>

          {/* Card 2: Commercial */}
          <div className="relative group rounded-lg overflow-hidden min-h-[320px] p-8 flex flex-col justify-between border border-slate-300 bg-white hover:border-brandgold transition-all shadow-md">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-md bg-amber-50 border border-brandgold/30 flex items-center justify-center text-brandgold-dark mb-4">
                <span className="material-symbols-outlined text-2xl">apartment</span>
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl uppercase tracking-tight text-navydark-900">
                COMMERCIAL
              </h3>
              <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-md">
                Office and retail fixture removal, warehouse cleanouts, cardboard baling, property management turnovers, and commercial site prep.
              </p>
            </div>
            <div className="relative z-10 pt-6">
              <button
                onClick={() => handleServiceClick(SERVICES_DATA[1])}
                className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-navydark-900 hover:border-brandgold text-navydark-900 hover:text-brandgold-dark font-montserrat font-bold text-xs uppercase tracking-wider transition-colors rounded cursor-pointer"
              >
                VIEW COMMERCIAL
              </button>
            </div>
          </div>

          {/* Card 3: Wide Full Banner (Navy & Warm Amber Accent) */}
          <div className="md:col-span-2 relative rounded-lg overflow-hidden p-8 sm:p-10 border border-navydark-800 bg-navydark-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold font-montserrat tracking-widest uppercase text-brandgold">
                COMPREHENSIVE REMOVAL
              </span>
              <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white mt-1">
                CONSTRUCTION DEBRIS, CLEANOUTS &amp; MORE
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Drywall, lumber, tile, remodel scrap, estate cleanouts, shed tear-downs, and heavy industrial load-outs. We handle all heavy lifting and responsible disposal.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleServiceClick(SERVICES_DATA[2])}
                  className="inline-flex items-center justify-center px-6 py-3 bg-brandgold hover:bg-brandgold-hover text-navydark-950 font-montserrat font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-sm cursor-pointer"
                >
                  VIEW ALL SERVICES
                </button>
              </div>
            </div>

            {/* Right Side Graphic Accent Box */}
            <div className="w-full md:w-64 h-36 rounded-lg bg-navydark-800/80 border border-slate-700 flex items-center justify-center p-4 shrink-0 shadow-inner">
              <div className="flex items-center justify-center gap-4 text-white">
                <div
                  className="w-12 h-12 rounded-full bg-navydark-950 border border-slate-600 flex items-center justify-center shadow"
                  title="Heavy Trailer Hauling"
                >
                  <span className="material-symbols-outlined text-2xl text-slate-300">
                    rv_hookup
                  </span>
                </div>
                <div
                  className="w-12 h-12 rounded-full bg-brandgold text-navydark-950 flex items-center justify-center shadow-lg"
                  title="Junk Bolt Fast Dispatch"
                >
                  <span className="material-symbols-outlined text-2xl font-bold">
                    bolt
                  </span>
                </div>
                <div
                  className="w-12 h-12 rounded-full bg-navydark-950 border border-slate-600 flex items-center justify-center shadow"
                  title="Responsible Disposal & Recycling"
                >
                  <span className="material-symbols-outlined text-2xl text-slate-300">
                    delete
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close details"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-amber-50 border border-brandgold/40 flex items-center justify-center text-brandgold-dark shrink-0">
                <span className="material-symbols-outlined text-2xl">
                  {activeModalService.icon}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brandgold-dark">
                  Service Details
                </span>
                <h3 className="font-montserrat font-extrabold text-xl text-navydark-900 uppercase">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              {activeModalService.shortDesc}
            </p>

            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 font-montserrat">
                Common Items &amp; Tasks Included:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {activeModalService.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[18px] text-brandgold-dark shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-brandgold-dark text-[20px] shrink-0">
                local_shipping
              </span>
              <span>{activeModalService.equipment}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleBookService(activeModalService)}
                className="flex-1 py-3 bg-brandgold hover:bg-brandgold-hover text-navydark-950 font-montserrat font-bold text-xs uppercase tracking-wider rounded transition-colors text-center shadow-sm cursor-pointer"
              >
                Request Quote For This Service
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-3 border border-slate-300 hover:border-slate-400 text-slate-700 font-montserrat font-semibold text-xs uppercase rounded transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
