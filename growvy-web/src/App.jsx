export default function Home() {
  return (
    <section className="min-h-screen bg-white pt-10 pb-24 px-6 md:px-12">
      {/* Centered Rounded Navbar (Bigger) */}
      <div className="flex justify-center">
        <div className="w-[90%] max-w-4xl">
          <nav className="bg-white border border-black rounded-full shadow-md px-12 py-4 flex justify-center gap-10 text-base font-semibold text-gray-900">
            <a href="#" className="hover:text-[#03AF08]">Home</a>
            <a href="#" className="hover:text-[#03AF08]">Jobs</a>
            <a href="#" className="hover:text-[#03AF08]">Success</a>
            <a href="#" className="hover:text-[#03AF08]">Services</a>
            <a href="#" className="hover:text-[#03AF08]">Pricing</a>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 min-h-[70vh]">
        {/* Left Content */}
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

        {/* Right Image (Hero Visual) */}
        <div className="w-full h-full flex justify-center">
          <img
            src="/images/hero.png"
            alt="Growvy Hero"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>

      {/* Section Divider & Intro Paragraph */}
      <div className="max-w-4xl mx-auto mt-20 text-center px-4">
        {/* Small Green Bar */}
        <div className="h-1 w-16 bg-[#03AF08] ml-auto rounded-full mb-6"></div>

        {/* Paragraph */}
        <p className="text-gray-700 text-base leading-relaxed">
          Growvy is built to streamline hiring, optimize assets, and drive business
          growth. Our mission is to create a tech-driven ecosystem where
          companies hire smarter, manage resources efficiently, and scale effortlessly.
          Whether you're seeking top talent, asset solutions, or business expansion,
          Growvy is your trusted partner in success.
        </p>
      </div>
      {/* 4 Feature Cards Section */}
<div className="max-w-7xl mx-auto mt-20 grid gap-16 px-4">
  {/* 1. Job Seeker */}
  <div className="grid md:grid-cols-2 items-center gap-6">
    {/* Text */}
    <div>
      <h3 className="text-2xl font-bold text-black">I’m a Job Seeker!</h3>
      <p className="text-gray-600 mt-2">
        Looking for job according to my skills and requirements.
      </p>
      <button className="mt-4 bg-[#03AF08] text-white px-5 py-2 rounded-full text-sm font-semibold">
        Jobs
      </button>
    </div>
    {/* Image */}
    <div className="flex justify-center">
      <img src="/images/job-seeker.svg" alt="Job Seeker" className="max-w-[200px]" />
    </div>
  </div>

  {/* 2. Employer */}
  <div className="grid md:grid-cols-2 items-center gap-6">
    {/* Image */}
    <div className="flex justify-center">
      <img src="/images/employer.svg" alt="Employer" className="max-w-[200px]" />
    </div>
    {/* Text */}
    <div>
      <h3 className="text-2xl font-bold text-black">I’m an Employer!</h3>
      <p className="text-gray-600 mt-2">
        Looking for talented candidates for my company.
      </p>
      <button className="mt-4 bg-[#03AF08] text-white px-5 py-2 rounded-full text-sm font-semibold">
        Post a Job
      </button>
    </div>
  </div>

  {/* 3. E-commerce Store */}
  <div className="grid md:grid-cols-2 items-center gap-6">
    {/* Text */}
    <div>
      <h3 className="text-2xl font-bold text-black">I’m a E-commerce Store!</h3>
      <p className="text-gray-600 mt-2">
        Looking for potential sales data for sales campaign.
      </p>
      <button className="mt-4 bg-[#03AF08] text-white px-5 py-2 rounded-full text-sm font-semibold">
        Sales Data
      </button>
    </div>
    {/* Image */}
    <div className="flex justify-center">
      <img src="/images/ecommerce.svg" alt="E-commerce Store" className="max-w-[200px]" />
    </div>
  </div>

  {/* 4. Business */}
  <div className="grid md:grid-cols-2 items-center gap-6">
    {/* Image */}
    <div className="flex justify-center">
      <img src="/images/business.svg" alt="Business" className="max-w-[200px]" />
    </div>
    {/* Text */}
    <div>
      <h3 className="text-2xl font-bold text-black">I’m Business!</h3>
      <p className="text-gray-600 mt-2">
        Looking for CRM or Data resources to boost my business.
      </p>
      <button className="mt-4 bg-[#03AF08] text-white px-5 py-2 rounded-full text-sm font-semibold">
        Business Plans
      </button>
    </div>
  </div>
</div>
{/* Join Community Section (New) */}
<div className="max-w-5xl mx-auto mt-28 text-center px-4 py-16">
<h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
Join Growvy's 50M+ Job Seeker <br /> Community & Get Hired Faster!
</h2>
<p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
“Build your profile, get noticed by top employers, and access exclusive job
opportunities tailored to your skills. Your next career move starts here!”
</p>
<div className="mt-8">
<button className="bg-[#03AF08] text-white px-10 py-4 rounded-full text-base font-semibold hover:opacity-90 transition shadow-lg">
Sign In
</button>
</div>
</div>

    </section>
  );
}
