export default function WhyChooseUs() {
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
    <section className="py-16 sm:py-20 bg-navydark-950 text-white border-b border-slate-800" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white">
          WHY CHOOSE <span className="text-brandgold">JUNK BOLT?</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-start">
          {pillars.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col items-center group ${
                index === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-navydark-850 border border-brandgold/30 flex items-center justify-center shadow-lg mb-4 group-hover:border-brandgold group-hover:scale-105 transition-all">
                <span className="material-symbols-outlined text-brandgold text-2xl sm:text-3xl">
                  {item.icon}
                </span>
              </div>
              <span className="font-montserrat font-bold text-xs sm:text-sm text-slate-200 tracking-wide max-w-[150px] leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
