export default function Home() {
  return (
    <section className="min-h-screen bg-white pt-10 px-4">
      {/* Centered Rounded Navbar */}
      <div className="flex justify-center">
        <nav className="bg-white border border-black rounded-full shadow-sm px-8 py-2 flex gap-6 text-sm font-medium text-gray-800">
          <a href="#" className="hover:text-[#03AF08]">Home</a>
          <a href="#" className="hover:text-[#03AF08]">Jobs</a>
          <a href="#" className="hover:text-[#03AF08]">Success</a>
          <a href="#" className="hover:text-[#03AF08]">Services</a>
          <a href="#" className="hover:text-[#03AF08]">Pricing</a>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-snug">
            Maximize <br />
            business efficiency
          </h1>

          <p className="text-[#03AF08] font-medium text-sm mt-3">with</p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#03AF08] mt-1">
            Growvy
          </h2>

          <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-md">
            Scale your company with tailored strategies, market insights,
            and expert consulting
          </p>

          <div className="mt-8">
            <button className="bg-[#03AF08] text-white px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition">
              Start Today
            </button>
          </div>
        </div>

        {/* Right Image (Hero Visual) */}
        <div className="w-full h-full flex justify-center">
          <img
            src="/hero-image.png"
            alt="Growvy Hero"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
