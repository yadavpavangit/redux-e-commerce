import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-lg font-semibold text-white flex items-center gap-2">
          🛍 Redux Store
        </div>

        {/* Routes */}
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-white transition">
            Products
          </Link>
          <Link to="/cart" className="hover:text-white transition">
            Cart
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {year} Pavan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
