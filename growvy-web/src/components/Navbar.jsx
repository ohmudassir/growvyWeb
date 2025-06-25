import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Success", path: "/success" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <div className="flex justify-center mt-10 px-6 md:px-12">
      <div className="w-[90%] max-w-4xl">
        <nav className="bg-white border border-black rounded-full shadow-md px-12 py-4 flex justify-center gap-10 text-base font-semibold text-gray-900">
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
      </div>
    </div>
  );
}
