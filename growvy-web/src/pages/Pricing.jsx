import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingSection from "../components/PricingSection";

export default function Pricing() {
  const commonPlans = [
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
  ];

  return (
    <>
      <Navbar />
      <section className="relative bg-[#E6F7EA] py-20 text-center px-4 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Pricing</h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-base">
          "Discover flexible pricing plans tailored to your needs—start growing with us today!"
        </p>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 120" className="w-full h-[120px]" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,0 C400,140 1040,140 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      <PricingSection
        title="Recruitment Solution"
        subtitle="Unlock seamless hiring with our tailored Recruitment Plans—flexible pricing designed to find your perfect talent, fast!"
        imageSrc="/images/services/hiring.svg"
        plans={commonPlans}
      />

      <PricingSection
        title="E-commerce Solutions"
        subtitle="Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly"
        imageSrc="/images/services/shopping.svg"
        plans={commonPlans}
      />

      <PricingSection
        title="Business Solutions"
        subtitle="Grow your operations with tailored business strategies—custom plans to maximize efficiency and scale"
        imageSrc="/images/services/businessPlan.svg"
        plans={commonPlans}
      />

      {/* Section: Schedule Call */}
        <div className="bg-white py-16 px-6 md:px-12 mt-28">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 flex justify-center">
              <img src="/images/schedule-call.svg" alt="Schedule Call" className="w-full max-w-sm" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <button className="bg-[#03AF08] text-white px-5 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition mb-4">
                Schedule Call Now
              </button>
              <p className="text-gray-700 text-base">
                Join over 10k users worldwide. <br />
                Start scheduling in less than 1 minute.
              </p>
            </div>
          </div>
        </div>

      <Footer />
    </>
  );
}
