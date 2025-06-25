import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Jobs() {
  return (
    <>
      <Navbar />

      {/* Header Section */}
      <section className="relative bg-[#E6F7EA] py-20 text-center px-4 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Jobs
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-base">
          "Join our team and shape the future—explore exciting career
          opportunities today!"
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

      {/* Categories Section */}
      <section className="bg-white pt-20 pb-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-1 gap-y-6 place-items-center">
          {[
            "Tech",
            "Management",
            "Human Resource",
            "Marketing & Sales",
            "Accounts & Finance",
            "Customer Service",
          ].map((category) => (
            <button
              key={category}
              className="border-2 border-black px-6 py-4 rounded-3xl text-sm font-bold text-black hover:text-[#03AF08] hover:border-[#03AF08] transition max-w-[240px] w-full"
            >
              {category}
            </button>
          ))}
        </div>
        {/* Join Community Section */}
        <div className="max-w-5xl mx-auto mt-28 text-center px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Join Growvy's 50M+ Job Seeker <br /> Community & Get Hired Faster!
          </h2>
          <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
            “Build your profile, get noticed by top employers, and access
            exclusive job opportunities tailored to your skills. Your next career
            move starts here!”
          </p>
          <div className="mt-8">
            <button className="bg-[#03AF08] text-white px-12 py-2 rounded-full text-base font-semibold hover:opacity-90 transition shadow-lg">
              Sign In
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
