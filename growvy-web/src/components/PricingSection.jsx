// Reusable pricing section component
// Displays a header (with optional image), intro text, call-to-action button, and pricing plan cards

export default function PricingSection({ title, subtitle, imageSrc, buttonText = "Plans", plans = [] }) {
  return (
    <section className="bg-white pt-10 pb-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Optional image icon at the top */}
        {imageSrc && (
          <img src={imageSrc} alt={title} className="mx-auto w-24 h-24 mb-4" />
        )}

        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-black">{title}</h2>

        {/* Optional subtitle */}
        {subtitle && (
          <p className="max-w-2xl mx-auto text-gray-700 text-base mt-3">{subtitle}</p>
        )}

        {/* CTA button below header */}
        <button className="mt-6 bg-[#03AF08] text-white px-10 py-3 rounded-full text-base font-semibold hover:opacity-90 transition shadow-md">
          {buttonText}
        </button>
      </div>

      {/* Plan cards section */}
      <div className="max-w-6xl mx-auto mt-20 grid gap-10 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md flex flex-col justify-between border-[3px] border-transparent p-[2px] bg-gradient-to-br ${plan.gradient}`}
          >
            {/* Card inner content with white background */}
            <div className="bg-white rounded-[10px] px-6 py-6 h-full flex flex-col justify-between">
              <div>
                {/* Plan title and description */}
                <h3 className="text-lg font-bold text-black mb-2">{plan.title}</h3>
                <p className="text-sm text-gray-700 mb-3">{plan.desc}</p>

                {/* Pricing details */}
                <p className="text-sm font-semibold text-black mb-1">Service Cost:</p>
                <ul className="text-sm text-gray-700 list-disc pl-5 mb-3">
                  {plan.cost.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>

                {/* Benefits list */}
                <p className="text-sm font-semibold text-black mb-1">Benefits:</p>
                <ul className="text-sm text-gray-700 list-disc pl-5 mb-6">
                  {plan.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              {/* Action button inside the card */}
              <button className="bg-[#03AF08] text-white w-full py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                Start Today
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
