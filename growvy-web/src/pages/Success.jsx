import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Success() {
  return (
    <>
      <Navbar />

      {/* Header Section */}
      <section className="relative bg-[#E6F7EA] py-20 text-center px-4 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Success
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-base">
          "Discover inspiring Success Stories—see how our solutions empower
          businesses to thrive!"
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
        

      <Footer />
    </>
  );
}
