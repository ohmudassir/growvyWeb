// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <div className="flex justify-center mt-10 px-6 md:px-12">
      <div className="w-[90%] max-w-4xl">
        <nav className="bg-white border border-black rounded-full shadow-md px-12 py-4 flex justify-center gap-10 text-base font-semibold text-gray-900">
          {["Home", "Jobs", "Success", "Services", "Pricing"].map((item) => (
            <a key={item} href="#" className="hover:text-[#03AF08]">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
