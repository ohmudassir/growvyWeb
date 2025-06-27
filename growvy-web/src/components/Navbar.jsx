import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Define all navigation links in one place for reusability and clarity
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Success", path: "/success" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <header className="relative z-50 px-6 md:px-12 mt-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Mobile view: show brand title on the left */}
        <h1 className="text-xl font-bold text-black md:hidden">Growvy</h1>

        {/* Desktop navigation: center-aligned nav links with border and shadow */}
        <nav className="hidden md:flex gap-10 bg-white border border-black rounded-full shadow-md px-12 py-4 text-base font-semibold text-gray-900 mx-auto">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`hover:text-[#03AF08] transition ${
                location.pathname === path ? "text-[#03AF08]" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile view: hamburger toggle button */}
        <button
          className="md:hidden z-50 p-2 rounded-full border border-black ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile navigation menu: slides down when menu is open */}
      {menuOpen && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-lg border border-black z-40 flex flex-col items-center py-4 space-y-4 transition-all duration-300">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`hover:text-[#03AF08] transition text-base font-semibold ${
                location.pathname === path ? "text-[#03AF08]" : "text-gray-900"
              }`}
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
