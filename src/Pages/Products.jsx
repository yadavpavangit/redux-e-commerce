import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/addToCartSlice";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productsSlice";

function Products() {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-20 px-6 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Products 🛒
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.length > 0
            ? products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-5 h-120 flex flex-col justify-between"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-52 w-full object-container md:object-cover rounded-lg mb-4"
                  />

                  <h2 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h2>

                  <p className="text-green-600 font-bold mb-4">
                    ₹{product.price}
                  </p>

                  <div className="flex gap-3 items-center">
                    <button
                      className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 active:scale-95 transition-all duration-50"
                      onClick={() => dispatch(addItem())}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="w-full bg-orange-700 text-white py-2 rounded-lg hover:bg-orange-800 transition"
                      onClick={() => dispatch(removeItem())}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              ))
            : "No products available"}
        </div>
      </div>
    </>
  );
}

export default Products;
