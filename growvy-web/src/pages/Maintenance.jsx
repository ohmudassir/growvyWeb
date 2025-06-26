import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Maintenance() {
  return (
    <>
      <Navbar />

      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Page Under Maintenance
        </h1>
        <p className="text-gray-700 max-w-md text-base">
          We're currently working on this page. Please check back later!
        </p>
        <Link to="/" className="mt-6 bg-[#03AF08] text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition">
          Go Back Home
        </Link>
      </section>

      <Footer />
    </>
  );
}
