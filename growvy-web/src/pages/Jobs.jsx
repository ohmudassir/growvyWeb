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
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-1 gap-y-6 place-items-center">
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
        {/* Top Jobs Section */}
        <section className="bg-white pt-10 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-10">
              Top Jobs
            </h2>

            <div className="space-y-4">
              {[
                "Business Developer",
                "Finance Manager",
                "Human Resource Manager",
                "Software Engineer",
                "Web Developer",
                "Graphic Designer / Ui / Ux",
                "SEO Expert",
                "Android Developer",
                "Floor Manager",
                "Sales Representative",
                "Data Entry Operator",
                "Delivery Man",
                "Urdu / English Call Center Agent",
                "Morning Shift Jobs for Females",
                "Accountant",
              ].map((job) => (
                <div
                  key={job}
                  className="flex justify-between items-center border-2 border-black px-6 py-4 rounded-3xl w-full"
                >
                  <span className="text-sm font-bold text-black">{job}</span>
                  <button className="bg-[#03AF08] text-white text-xs px-6 py-2 rounded-full font-bold hover:opacity-90 transition">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
      {/* Wavy Arrow Section */}
      <div className="flex justify-center my-20">
        <svg
          width="340"
          height="60"
          viewBox="0 0 340 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="8"
              refY="3.5"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="black" />
            </marker>
          </defs>
          <circle cx="20" cy="30" r="6" fill="#3B82F6" />
          <path
            d="M 26 30
                Q 50 10, 70 30
                Q 90 50, 110 30
                Q 130 10, 150 30
                Q 170 50, 190 30
                Q 210 10, 230 30
                Q 250 50, 270 30
                Q 290 10, 310 30"
            stroke="#000"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            markerEnd="url(#arrowhead)"
          />
          <circle cx="320" cy="30" r="6" fill="#03AF08" />
        </svg>
      </div>
      {/* 4 Feature Cards Section */}
        <div className="max-w-2xl mx-auto mt-20 grid gap-16 px-4">
          {/* Card 1 */}
          <div className="grid md:grid-cols-2 items-center gap-6">
            <div>
              <h3 className="text-4xl font-bold text-black">I'm a Job Seeker!</h3>
              <p className="text-gray-600 mt-2">
                Looking for job according to my skills and requirements.
              </p>
              <button className="mt-4 bg-[#03AF08] text-white px-14 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                Jobs
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/job-seeker.svg"
                alt="Job Seeker"
                className="max-w-[200px]"
              />
            </div>
          </div>
          </div>

      <Footer />
    </>
  );
}
