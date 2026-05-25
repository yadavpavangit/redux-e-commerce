import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/addToCartSlice";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productsSlice";
import { useNavigate } from "react-router-dom";
import ProductHandle from "../Components/ProductHandle";

function Products() {
  const { products, selectedCategories } = useSelector(
    (state) => state.products,
  );

  const cartItems = useSelector((state) => state.cart.items);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((p) => selectedCategories.includes(p.category));
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 md:px-16">
      <button
        onClick={() => navigate("/")}
        className="mb-8 text-blue-600 hover:underline flex items-center gap-2"
      >
        ← Back to home
      </button>
      <h1 className="text-4xl font-bold text-center mb-10">Our Products 🛒</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <div className="md:w-1/4 bg-white p-6 rounded-xl shadow-md h-fit">
          <ProductHandle />
        </div>

        {/* Products Grid */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 p-5 flex flex-col"
              >
                <div
                  className="cursor-pointer"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-52 w-full object-contain mb-4"
                  />

                  <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                    {product.title}
                  </h2>

                  <p className="text-green-600 text-xl font-bold mb-4">
                    ₹{product.price}
                  </p>
                </div>

                {/* Button */}
                {cartItems.find((items) => items.id === product.id) ? (
                  <button
                    className="mt-auto bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={() => dispatch(removeItem(product.id))}
                  >
                    Remove Item
                  </button>
                ) : (
                  <button
                    className="mt-auto bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 active:scale-95 transition"
                    onClick={() => dispatch(addItem(product))}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
