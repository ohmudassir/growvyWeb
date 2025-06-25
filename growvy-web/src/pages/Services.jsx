import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Header Section */}
      <section className="relative bg-[#E6F7EA] py-20 text-center px-4 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Services
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-base">
          At Growvy, we provide innovative, cost-effective solutions to help
          businesses and professionals thrive.
        </p>

        {/* Curved bottom using SVG */}
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

      {/* Services Cards */}
      <section className="bg-white pt-28 pb-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid gap-20 md:grid-cols-3 place-items-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <div className="relative bg-white border-[3px] border-black rounded-2xl w-64 h-64 px-6 pt-20 pb-6 text-center shadow-md">
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                <img
                  src="/images/services/hiring.svg"
                  alt="Hiring"
                  className="w-28 h-28"
                />
              </div>
              <h3 className="font-bold text-black mt-2">Hiring</h3>
              <p className="text-sm text-gray-700 mt-2">
                Access a vast talent pool to hire the right candidates quickly
                and affordably.
              </p>
            </div>
            <button className="mt-5 bg-[#03AF08] text-white px-8 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition w-[80%]">
              Plans
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <div className="relative bg-white border-[3px] border-black rounded-2xl w-64 h-64 px-6 pt-20 pb-6 text-center shadow-md">
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                <img
                  src="/images/services/shopping.svg"
                  alt="E-commerce"
                  className="w-28 h-28"
                />
              </div>
              <h3 className="font-bold text-black mt-2">E-commerce</h3>
              <p className="text-sm text-gray-700 mt-2">
                Drive expansion with targeted strategies and market-driven
                solutions.
              </p>
            </div>
            <button className="mt-5 bg-[#03AF08] text-white px-8 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition w-[80%]">
              Plans
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <div className="relative bg-white border-[3px] border-black rounded-2xl w-64 h-64 px-6 pt-20 pb-6 text-center shadow-md">
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                <img
                  src="/images/services/businessPlan.svg"
                  alt="Business"
                  className="w-28 h-28"
                />
              </div>
              <h3 className="font-bold text-black mt-2">Business</h3>
              <p className="text-sm text-gray-700 mt-2">
                Optimize and manage business resources with data-backed
                insights.
              </p>
            </div>
            <button className="mt-5 bg-[#03AF08] text-white px-8 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition w-[80%]">
              Plans
            </button>
          </div>
        </div>
        {/* Join Community Section */}
        <div className="max-w-5xl mx-auto mt-28 text-center px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Join over 10k users worldwide
          </h2>

          <div className="mt-8">
            <button className="bg-[#03AF08] text-white px-12 py-2 rounded-full text-base font-semibold hover:opacity-90 transition shadow-lg">
              View Pricing
            </button>
          </div>
        </div>
        {/* Section: E-commerce Owner */}
        <div className="bg-white py-16 px-6 md:px-12 mt-28">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Problems in Hiring
              </h2>
              <p className="text-gray-700 text-base max-w-sm">
                Companies spend high $$$ budgets on job portals like Indeed and
                LinkedIn, only to receive low-quality CVs and irrelevant
                applicants, making hiring slow and inefficient.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/images/ecommerce-owner.svg"
                alt="E-commerce"
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="grid md:grid-cols-2 items-center gap-6">
          <div className="flex justify-center">
            <img
              src="/images/employer.svg"
              alt="Employer"
              className="max-w-[200px]"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black">
              With Growvy Solution
            </h3>
            <p className="text-gray-600 mt-2 max-w-sm">
              With Growvy, businesses can access a database of active job
              seekers who have recently joined for job search. Use advanced
              filters to find the right candidates quickly and at a fraction of
              the cost—no wasted budget, just quality hires!
            </p>
            <button className="mt-4 bg-[#03AF08] text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
              Start Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
