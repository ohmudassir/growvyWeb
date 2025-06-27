import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-white py-16 px-6 md:px-12 mt-28">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left section: Branding and social media */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-black">Growvy</h2>
          <p className="text-gray-700 text-base max-w-sm mt-2">
            Optimize your business with smart asset management, growth
            strategies, and cutting-edge solutions to boost sales and efficiency
            with Growvy!
          </p>

          {/* Social media icons with hover effect */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#03AF08] transition"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#03AF08] transition"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#03AF08] transition"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right section: Navigation links + ratings + graphic */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-6">
            {/* Internal site links */}
            <div>
              <ul className="text-sm space-y-2 text-gray-800 font-semibold">
                <li>
                  <Link to="/about" className="hover:text-[#03AF08]">About Us</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#03AF08]">Services</Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-[#03AF08]">Plans & Pricing</Link>
                </li>
                <li>
                  <Link to="/business" className="hover:text-[#03AF08]">Business Solutions</Link>
                </li>
                <li>
                  <Link to="/success" className="hover:text-[#03AF08]">Success Stories</Link>
                </li>
                <li>
                  <Link to="/jobs" className="hover:text-[#03AF08]">Jobs</Link>
                </li>
              </ul>

              {/* Rating visuals */}
              <div className="flex items-center mt-4">
                <span className="text-green-600 text-lg">★★★★★</span>
              </div>
            </div>

            {/* Decorative footer illustration */}
            <div className="flex-shrink-0">
              <img
                src="/images/footer-illustration.svg"
                alt="Growvy Footer Graphic"
                className="w-32 md:w-40 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
