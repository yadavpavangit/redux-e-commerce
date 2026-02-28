import React from "react";
import { featuredProducts } from "../constant/data";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-gray-100">
        {/* HERO SECTION */}
        <section className="text-center py-20 bg-linear-to-r from-green-500 to-emerald-600 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Redux Store 🛍
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover amazing products at unbeatable prices.
          </p>
          <NavLink
            to="/products"
            className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </NavLink>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="w-full py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-52 w-full object-cover object-top rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-green-600 font-bold mb-4">
                  ₹{product.price}
                </p>
                <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
