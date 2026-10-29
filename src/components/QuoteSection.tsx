import { useState, useEffect } from "react";
import { TRAILER_TIERS } from "../data/services";

interface QuoteSectionProps {
  prefilledService?: string;
}

export default function QuoteSection({ prefilledService }: QuoteSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    serviceType: "",
    description: "",
    selectedTier: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showEstimator, setShowEstimator] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: prefilledService,
      }));
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      zip: "",
      serviceType: "",
      description: "",
      selectedTier: "",
    });
  };

  const handleSelectTier = (tierName: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedTier: tierName,
      description: prev.description
        ? `${prev.description}\n[Estimated Space: ${tierName}]`
        : `[Estimated Space: ${tierName}]`,
    }));
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50" id="quote-form">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-12 h-1 bg-brandgold mx-auto mb-3" />
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-navydark-900">
            REQUEST A FREE QUOTE
          </h2>
          <p className="mt-3 text-slate-600 text-base max-w-xl mx-auto">
            Fill out this simple form for upfront rates. No hidden dump fees, zero surprises.
          </p>

          {/* Quick Estimator Toggle Button */}
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={() => setShowEstimator(!showEstimator)}
              className="inline-flex items-center gap-1.5 text-xs font-montserrat font-bold uppercase tracking-wider text-brandgold-dark bg-amber-50 hover:bg-amber-100 border border-brandgold/40 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">calculate</span>
              <span>
                {showEstimator ? "Hide Trailer Estimator" : "Need help estimating size? View 15-Yard Guide"}
              </span>
            </button>
          </div>
        </div>

        {/* Interactive 15-Yard Trailer Size Estimator Guide */}
        {showEstimator && (
          <div className="mb-8 p-6 bg-white rounded-lg border border-slate-200 shadow-md animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-montserrat font-bold text-sm text-navydark-900 uppercase tracking-tight">
                  15-Yard Trailer Capacity &amp; Ballpark Pricing Guide
                </h3>
                <p className="text-xs text-slate-500">
                  Our custom high-sided dump trailers hold the equivalent of 8–10 standard pickup truck beds.
                </p>
              </div>
              <span className="text-[11px] font-bold text-brandgold-dark uppercase tracking-wider bg-amber-50 px-2 py-1 rounded border border-brandgold/30">
                Transparent Rates
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TRAILER_TIERS.map((tier) => {
                const isPicked = formData.selectedTier === tier.size;
                return (
                  <div
                    key={tier.size}
                    onClick={() => handleSelectTier(tier.size)}
                    className={`p-4 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isPicked
                        ? "border-brandgold bg-amber-50/60 shadow-sm ring-1 ring-brandgold"
                        : "border-slate-200 hover:border-brandgold/60 bg-slate-50"
                    }`}
                  >
                    <div>
                      {/* Trailer Capacity Bar */}
                      <div className="w-full bg-slate-200 rounded-full h-2 mb-3 overflow-hidden">
                        <div
                          className="bg-brandgold h-full rounded-full transition-all"
                          style={{ width: `${tier.percentage}%` }}
                        />
                      </div>
                      <h4 className="font-montserrat font-bold text-xs uppercase text-navydark-900 mb-1">
                        {tier.size}
                      </h4>
                      <div className="font-montserrat font-extrabold text-base text-brandgold-dark mb-1">
                        {tier.priceEstimate}
                      </div>
                      <p className="text-[11px] text-slate-500 mb-2">
                        {tier.equivalent}
                      </p>
                      <p className="text-[11px] text-slate-700 leading-snug">
                        {tier.idealFor}
                      </p>
                    </div>

                    <button
                      type="button"
                      className={`mt-3 w-full py-1.5 text-[10px] font-montserrat font-bold uppercase rounded text-center transition-colors ${
                        isPicked
                          ? "bg-brandgold text-navydark-950"
                          : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {isPicked ? "Selected" : "Select Tier"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Quote Form Container */}
        <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-6 sm:p-10">
          {submitted ? (
            <div className="p-6 sm:p-8 rounded-lg bg-amber-50/70 border border-brandgold-dark text-slate-900 text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-brandgold text-navydark-950 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="material-symbols-outlined text-3xl font-bold">check</span>
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl uppercase tracking-tight text-navydark-900 mb-2">
                QUOTE REQUEST DISPATCHED!
              </h3>
              <p className="text-slate-700 text-sm sm:text-base max-w-lg mx-auto mb-4 leading-relaxed">
                Thank you, <strong>{formData.name}</strong>! We have received your request for{" "}
                <strong>{formData.zip || "your local Michigan address"}</strong>. Our team will review your item list and reach out at{" "}
                <strong>{formData.phone}</strong> with upfront rates.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white border border-slate-200 text-xs font-semibold text-slate-600 mb-6">
                <span className="material-symbols-outlined text-brandgold-dark text-base">
                  schedule
                </span>
                <span>Average Response Time: Under 30 Minutes</span>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-navydark-900 hover:bg-navydark-850 text-white font-montserrat font-bold text-xs uppercase tracking-wider rounded transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" id="quote-form-element">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-xs font-montserrat font-bold uppercase tracking-wider text-slate-700 mb-2"
                    htmlFor="client-name"
                  >
                    Your Full Name *
                  </label>
                  <input
                    className="w-full rounded border-slate-300 focus:border-brandgold focus:ring-brandgold text-sm py-2.5 px-3 border shadow-sm"
                    id="client-name"
                    placeholder="John Miller"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-montserrat font-bold uppercase tracking-wider text-slate-700 mb-2"
                    htmlFor="client-phone"
                  >
                    Phone Number *
                  </label>
                  <input
                    className="w-full rounded border-slate-300 focus:border-brandgold focus:ring-brandgold text-sm py-2.5 px-3 border shadow-sm"
                    id="client-phone"
                    placeholder="(248) 555-0199"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-xs font-montserrat font-bold uppercase tracking-wider text-slate-700 mb-2"
                    htmlFor="client-email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full rounded border-slate-300 focus:border-brandgold focus:ring-brandgold text-sm py-2.5 px-3 border shadow-sm"
                    id="client-email"
                    placeholder="john@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-montserrat font-bold uppercase tracking-wider text-slate-700 mb-2"
                    htmlFor="client-zip"
                  >
                    Service ZIP Code *
                  </label>
                  <input
                    className="w-full rounded border-slate-300 focus:border-brandgold focus:ring-brandgold text-sm py-2.5 px-3 border shadow-sm"
                    id="client-zip"
                    placeholder="48084 (Troy)"
                    required
                    type="text"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-montserrat font-bold uppercase tracking-wider text-slate-700 mb-2"
                  htmlFor="service-select"
                >
                  Type of Removal Service *
                </label>
                <select
                  className="w-full rounded border-slate-300 focus:border-brandgold focus:ring-brandgold text-sm py-2.5 px-3 border shadow-sm bg-white"
                  id="service-select"
                  required
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                >
                  <option value="">Select removal type...</option>
                  <option value="furniture">Furniture / Couch / Mattress Removal</option>
                  <option value="appliance">Appliance Removal (Refrigerator, Washer, etc.)</option>
                  <option value="garage">Garage Cleanout</option>
                  <option value="basement">Basement &amp; Attic Cleanout</option>
                  <option value="commercial">Commercial / Retail Clearout</option>
                  <option value="construction">Construction &amp; Remodel Trash</option>
                  <option value="yard">Yard Waste / Debris</option>
                  <option value="shed">Shed or Outbuilding Demolition</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-xs font-montserrat font-bold uppercase tracking-wider text-slate-700 mb-2"
                  htmlFor="item-notes"
                >
                  Items to Remove / Cleanout Description *
                </label>
                <textarea
                  className="w-full rounded border-slate-300 focus:border-brandgold focus:ring-brandgold text-sm py-2.5 px-3 border shadow-sm"
                  id="item-notes"
                  placeholder="Please list or describe the junk to be removed..."
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <button
                className="w-full py-3.5 bg-brandgold hover:bg-brandgold-hover text-navydark-950 font-montserrat font-bold text-sm tracking-wider uppercase rounded transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                type="submit"
              >
                <span>REQUEST MY FREE QUOTE</span>
                <span className="material-symbols-outlined text-[18px]">bolt</span>
              </button>

              <p className="text-center text-xs text-slate-500 font-medium">
                🔒 Your information is private. We only use this to dispatch your quote.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
