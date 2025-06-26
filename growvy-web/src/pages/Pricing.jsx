import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <>
      <Navbar />

      {/* Header Section */}
      <section className="relative bg-[#E6F7EA] py-20 text-center px-4 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Pricing
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-base">
          "Discover flexible pricing plans tailored to your needs—start growing with us today!"
        </p>

        {/* Curved Bottom SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-[120px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,0 C400,140 1040,140 1440,0 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
        
      </section>
      {/* Recruitment Cards Section */}
<section className="bg-white pt-28 pb-28 px-6 md:px-12">
  <div className="max-w-6xl mx-auto text-center">
    {/* Header & CTA */}
    <img
      src="/images/services/hiring.svg"
      alt="Recruitment"
      className="mx-auto w-24 h-24 mb-4"
    />
    <h2 className="text-4xl md:text-5xl font-extrabold text-black">Recruitment Solution</h2>
    <p className="max-w-2xl mx-auto text-gray-700 text-base mt-3">
      "Unlock seamless hiring with our tailored Recruitment Plans—flexible pricing designed to find your perfect talent, fast!"
    </p>
    <button className="mt-6 bg-[#03AF08] text-white px-10 py-3 rounded-full text-base font-semibold hover:opacity-90 transition shadow-md">
      Plans
    </button>
  </div>

  {/* Cards */}
  <div className="max-w-6xl mx-auto mt-20 grid gap-10 md:grid-cols-3">
    {[
      {
        title: "Basic CV Service",
        desc:
          "Companies HR who are looking for a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals.",
        cost: ["Price 30$ (9797 PKR) Discount 20$ (6600 PKR) Monthly"],
        benefits: [
          "Access 200 searches/month",
          "Manage Filters: Skills, Cities, Experience",
          "Live chat experts help",
        ],
        gradient: "from-[#D5F500] to-[#A5E12C]",
      },
      {
        title: "Lead Generating",
        desc:
          "Companies will directly get qualifying responses in their chat to schedule interviews at their own place and our service charges will apply on the candidate’s approach.",
        cost: ["Price 50$ (6998 PKR)", "50% applies per 20 candidates"],
        benefits: [
          "Create job post on Growvy",
          "Use filters to shortlist",
          "Guide team to top candidates",
          "Live chat experts help",
        ],
        gradient: "from-[#0DF1C4] to-[#0DA8F4]",
      },
      {
        title: "Recruitment Service",
        desc:
          "Our recruitment specialist will connect with companies HR Team and plan a complete hiring strategy to make their hire quick and fast.",
        cost: ["40% of first salary (experienced)", "Available after subscription"],
        benefits: [
          "Post jobs with filters",
          "Minor screening interview",
          "WhatsApp group with team",
          "Complete A–Z solution",
        ],
        gradient: "from-[#7C3AED] to-[#06B6D4]",
      },
    ].map((plan, index) => (
      <div
        key={index}
        className={`bg-white rounded-xl shadow-md flex flex-col justify-between border-[3px] border-transparent p-[2px] bg-gradient-to-br ${plan.gradient}`}
      >
        <div className="bg-white rounded-[10px] px-6 py-6 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-black mb-2">{plan.title}</h3>
            <p className="text-sm text-gray-700 mb-3">{plan.desc}</p>
            <p className="text-sm font-semibold text-black mb-1">Service Cost:</p>
            <ul className="text-sm text-gray-700 list-disc pl-5 mb-3">
              {plan.cost.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-black mb-1">Benefits:</p>
            <ul className="text-sm text-gray-700 list-disc pl-5 mb-6">
              {plan.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
          <button className="bg-[#03AF08] text-white w-full py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
            Start Today
          </button>
        </div>
      </div>
    ))}
  </div>
</section>


      <Footer />
    </>
  );
}
