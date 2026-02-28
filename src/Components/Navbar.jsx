import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddToCart from "./AddToCart";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-linear-to-r from-green-600 to-emerald-500 shadow-lg px-6 md:px-12 py-4 text-white fixed w-full z-50">
      <div className="flex justify-between items-center">
        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-wide">🛍 Redux Store</h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center text-lg font-medium">
          <NavLink to="/" className="hover:text-yellow-300 transition">
            Home
          </NavLink>
          <NavLink to="/products" className="hover:text-yellow-300 transition">
            Products
          </NavLink>

          {/* CART ICON */}
          <NavLink to="/cart">
            <AddToCart />
          </NavLink>
        </div>

        {/* RIGHT SIDE (Mobile Cart + Menu Button) */}
        <div className="flex items-center gap-4 md:hidden">
          {/* CART ICON (Mobile) */}
          <AddToCart />

          {/* HAMBURGER */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>✖</button>
        </div>

        <div className="flex flex-col gap-6 p-6 text-lg">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setIsOpen(false)}>
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
