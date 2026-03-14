import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/addToCartSlice";

function ProductDetails() {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchingData = async () => {
    try {
      setLoading(true);
      let res = await axios(`https://fakestoreapi.com/products/${id}`);
      setProductData(res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!productData)
    return <div className="text-center py-20">Product not found.</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-blue-600 hover:underline flex items-center gap-2"
      >
        ← Back to Products
      </button>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* IMAGE */}
        <div className="md:w-1/2 p-10 flex items-center justify-center bg-white">
          <img
            src={productData.image}
            alt={productData.title}
            className="max-h-96 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <span className="text-sm text-gray-500 uppercase tracking-widest mb-2">
            {productData.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {productData.title}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold text-green-600">
              ₹{productData.price}
            </span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              ★ {productData.rating?.rate} ({productData.rating?.count} reviews)
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {productData.description}
          </p>

          <button
            className="w-full md:w-max px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 active:scale-95 transition-all"
            onClick={() => dispatch(addItem(productData))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
