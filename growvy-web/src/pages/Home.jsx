import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-white pt-10 pb-24 px-6 md:px-12">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-snug">
              Maximize <br />
              business efficiency
            </h1>
            <p className="text-[#03AF08] font-medium text-sm mt-3">with</p>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#03AF08] mt-1">
              Growvy
            </h2>
            <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-md">
              Scale your company with tailored strategies, market insights,
              and expert consulting
            </p>
            <div className="mt-8">
              <button className="bg-[#03AF08] text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition">
                Start Today
              </button>
            </div>
          </div>
          <div className="w-full h-full flex justify-center">
            <img
              src="/images/hero.png"
              alt="Growvy Hero"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

        {/* Section Divider & Intro Paragraph */}
        <div className="max-w-4xl mx-auto mt-20 px-4">
          <div className="h-1 w-16 bg-[#03AF08] ml-auto rounded-full mb-6"></div>
          <p className="text-gray-700 text-base leading-relaxed text-center">
            Growvy is built to streamline hiring, optimize assets, and drive
            business growth. Our mission is to create a tech-driven ecosystem
            where companies hire smarter, manage resources efficiently, and scale
            effortlessly. Whether you're seeking top talent, asset solutions, or
            business expansion, Growvy is your trusted partner in success.
          </p>
        </div>

        {/* 4 Feature Cards Section */}
        <div className="max-w-7xl mx-auto mt-20 grid gap-16 px-4">
          {/* Card 1 */}
          <div className="grid md:grid-cols-2 items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-black">I’m a Job Seeker!</h3>
              <p className="text-gray-600 mt-2">
                Looking for job according to my skills and requirements.
              </p>
              <button className="mt-4 bg-[#03AF08] text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
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
              <h3 className="text-2xl font-bold text-black">I’m an Employer!</h3>
              <p className="text-gray-600 mt-2">
                Looking for talented candidates for my company.
              </p>
              <button className="mt-4 bg-[#03AF08] text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                Post a Job
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="grid md:grid-cols-2 items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-black">
                I’m a E-commerce Store!
              </h3>
              <p className="text-gray-600 mt-2">
                Looking for potential sales data for sales campaign.
              </p>
              <button className="mt-4 bg-[#03AF08] text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                Sales Data
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/ecommerce.svg"
                alt="E-commerce Store"
                className="max-w-[200px]"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="grid md:grid-cols-2 items-center gap-6">
            <div className="flex justify-center">
              <img
                src="/images/business.svg"
                alt="Business"
                className="max-w-[200px]"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black">I’m Business!</h3>
              <p className="text-gray-600 mt-2">
                Looking for CRM or Data resources to boost my business.
              </p>
              <button className="mt-4 bg-[#03AF08] text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                Business Plans
              </button>
            </div>
          </div>
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

        {/* Section: E-commerce Owner */}
        <div className="bg-white py-16 px-6 md:px-12 mt-28">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">E-commerce Owner?</h2>
              <p className="text-gray-700 text-base max-w-md">
                Optimize your business with smart asset management, growth strategies, and
                cutting-edge solutions to boost sales and efficiency with Growvy!
              </p>
              <button className="mt-6 bg-[#03AF08] text-white px-6 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition">
                Plans
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <img src="/images/ecommerce-owner.svg" alt="E-commerce" className="w-full max-w-sm" />
            </div>
          </div>
        </div>

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
      </section>

      <Footer />
    </>
  );
}
