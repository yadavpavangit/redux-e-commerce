import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/addToCartSlice";

function CartItems() {
  const dispatch = useDispatch();
  const cardItems = useSelector((state) => state.cart.items);
  return (
    <>
      <div className="w-full h-screen pt-10">
        <h1 className="text-3xl font-bold">Cart Items</h1>
        <h2 className="text-end text-xl font-semibold">
          Items: <span className="font-bold">{cardItems.length}</span>
        </h2>
        {cardItems.length > 0 ? (
          cardItems.map((product) => (
            <div
              key={product.id}
              className="flex my-10 items-top gap-4 bg-amber-100 px-3 py-2 rounded-lg shadow-md"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-24 object-container rounded-lg mr-4"
              />
              <div className="w-full flex flex-col justify-between">
                <div className="px-4 flex items-center justify-between">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-semibold">{product.title}</h2>
                    <p className="text-md font-semibold text-gray-600">
                      category: {product.category}
                    </p>
                  </div>
                  <button
                    className="text-black border border-blue-300 px-3 py-2 rounded-lg hover:border-blue-600 active:scale-95 transition"
                    onClick={() => dispatch(removeItem(product.id))}
                  >
                    Remove Item
                  </button>
                </div>
                <div className="flex items-center justify-end gap-5">
                  <p>Price: ₹{product.price}</p>
                  <div className="flex gap-4">
                    <button className="bg-green-500 text-white w-40 px-4 py-2 rounded-lg hover:bg-green-600 transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-xl font-semibold">
            No items in cart 0️⃣
          </div>
        )}
      </div>
    </>
  );
}

export default CartItems;
