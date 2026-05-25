import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Section */}
        <div className="grid gap-12 border-b border-neutral-800 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">Redux Store</h2>

            <p className="mt-5 leading-7 text-neutral-400">
              Discover premium products with modern design, seamless shopping
              experience, and fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title">Quick Links</h3>

            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/about">About</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="footer-title">Support</h3>

            <div className="footer-links">
              <Link to="/contact">Contact Us</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms & Conditions</Link>
              <Link to="/">FAQs</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="footer-title">Follow Us</h3>

            <p className="mb-5 text-neutral-400">
              Stay connected on social platforms.
            </p>

            <div className="flex items-center gap-4">
              <a href="/" className="social-icon">
                <FaFacebookF />
              </a>

              <a href="/" className="social-icon">
                <FaInstagram />
              </a>

              <a href="/" className="social-icon">
                <FaTwitter />
              </a>

              <a href="/" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-sm text-neutral-500 md:flex-row">
          <p>© {year} Pavan. All rights reserved.</p>

          <p>Built with React, Redux Toolkit & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
