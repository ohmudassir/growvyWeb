import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white py-16 px-6 md:px-12 mt-28">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-black">Growvy</h2>
          <p className="text-gray-700 text-base max-w-sm mt-2">
            Optimize your business with smart asset management, growth
            strategies, and cutting-edge solutions to boost sales and efficiency
            with Growvy!
          </p>

          {/* Social Icons */}
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

        {/* Right */}
        <div className="flex-1">
          <ul className="text-sm space-y-2 text-gray-800 font-semibold">
            <li className="hover:text-[#03AF08] cursor-pointer">About Us</li>
            <li className="hover:text-[#03AF08] cursor-pointer">Services</li>
            <li className="hover:text-[#03AF08] cursor-pointer">
              Plans & Pricing
            </li>
            <li className="hover:text-[#03AF08] cursor-pointer">
              Business Solutions
            </li>
            <li className="hover:text-[#03AF08] cursor-pointer">
              Success Stories
            </li>
            <li className="hover:text-[#03AF08] cursor-pointer">Jobs</li>
          </ul>

          <div className="flex items-center mt-4">
            <span className="text-green-600 text-lg">★★★★★</span>
          </div>

          {/* Footer Image */}
          <div className="mt-6 flex justify-end">
            <img
              src="/images/footer-illustration.png"
              alt="Growvy Footer Graphic"
              className="w-40 md:w-52 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
