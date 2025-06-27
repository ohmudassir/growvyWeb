import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Success() {
  return (
    <>
      <Navbar />

      {/* Page Header Section */}
      <section className="relative bg-[#E6F7EA] py-20 text-center px-4 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Success
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-base">
          "Discover inspiring Success Stories—see how our solutions empower
          businesses to thrive!"
        </p>

        {/* Decorative Curved Bottom */}
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

      {/* Community Join CTA */}
      <div className="max-w-4xl mx-auto mt-28 text-center px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
          Join over 10k users worldwide
        </h2>
        <div className="mt-8">
          <button className="bg-[#03AF08] text-white px-12 py-2 rounded-full text-base font-semibold hover:opacity-90 transition shadow-lg">
            View Pricing
          </button>
        </div>
      </div>

      {/* Brand Logos Section */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 items-center gap-8 justify-items-center">
          <img src="/images/brands/echonetService.png" alt="Echonet" className="w-32 h-auto object-contain" />
          <img src="/images/brands/easypaisa.png" alt="Easypaisa" className="w-32 h-auto object-contain" />
          <img src="/images/brands/jazzcash.png" alt="JazzCash" className="w-32 h-auto object-contain" />
          <img src="/images/brands/motive.png" alt="Motive" className="w-32 h-auto object-contain" />
        </div>
      </section>

      {/* Second Community CTA */}
      <div className="max-w-4xl mx-auto mt-28 text-center px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
          Join Growvy's 50M+ Job Seeker <br /> Community & Get Hired Faster!
        </h2>
        <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
          “Build your profile, get noticed by top employers, and access
          exclusive job opportunities tailored to your skills. Your next
          career move starts here!”
        </p>
        <div className="mt-8">
          <button className="bg-[#03AF08] text-white px-12 py-2 rounded-full text-base font-semibold hover:opacity-90 transition shadow-lg">
            Sign In
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="bg-white pb-20 pt-10 px-4 md:px-0">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="relative p-[4px] rounded-2xl bg-gradient-to-br from-[#B6D68B] via-[#C8FACC] to-[#A4DD92] shadow-md"
            >
              {/* Inner card */}
              <div className="bg-white rounded-2xl pt-6 pb-6 px-6 relative">
                {/* Profile Image Overlap */}
                <div className="absolute -left-2 -top-12">
                  <img
                    src="/images/success/userProfile.png"
                    alt="User"
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <div className="pl-16">
                  <p className="text-gray-800 font-medium text-lg mb-2">
                    Excellent Experience with growvy.
                  </p>
                  <div className="flex text-yellow-400 text-xl">
                    {Array(5).fill("★").map((star, idx) => (
                      <span key={idx}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Pagination Indicator */}
        <div className="mt-12 flex justify-center items-center gap-1">
          {Array(15).fill(0).map((_, idx) => {
            const center = 7;
            const distance = Math.abs(center - idx);
            const size = 10 - distance > 2 ? 10 - distance : 2;

            return (
              <span
                key={idx}
                style={{ width: `${size}px`, height: `${size}px` }}
                className="rounded-full bg-[#03AF08]"
              ></span>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
