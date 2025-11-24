
import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Signup", path: "/signup" },
  { name: "Login", path: "/login" },
  { name: "Features", path: "/#features" },
  { name: "Contact", path: "/#contact" },
];

export default function QuickLinks() {
  return (
    <section className="py-12 px-6 bg-green-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-green-900 mb-6">Quick Links</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="text-green-800 font-semibold hover:text-green-600 transition-colors"
            >
              {link.name}
            </Link>
            
          ))}
        </div>
      </div>
      <p className="text-center text-gray-500 mt-16">
        © {new Date().getFullYear()} Bug Tracker System — All Rights Reserved
      </p>
    </section>
  );
}
