import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../redux/addToCartSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CartItems() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cardItems = useSelector((state) => state.cart.items);
  const [cartProducts, setCartProducts] = useState(cardItems);

  useEffect(() => {
    setCartProducts(cardItems);
  }, [cardItems]);

  const manageQuantity = (id, value) => {
    let qtnt = parseInt(value);
    let cartTempItem = cardItems.map((item) =>
      item.id == id ? { ...item, qtnt } : item,
    );
    setCartProducts(cartTempItem);
  };

  const orderPlace = (id) => {
    dispatch(removeItem(id));
    alert("Order Places");
  };

  const handleOrderAll = () => {
    localStorage.clear();
    dispatch(clearCart());
    alert("All Order Placed");
    navigate("/");
  };

  return (
    <>
      <div className="w-full py-10">
        <h1 className="text-3xl font-bold">Cart Items</h1>
        <h2 className="text-end text-xl font-semibold">
          Items: <span className="font-bold">{cartProducts.length}</span>
        </h2>
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => (
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
                  <div className="flex gap-3 items-center">
                    <input
                      type="number"
                      className="focus:outline-none border border-blue-200  w-10"
                      value={product.qtnt || 1}
                      min={1}
                      onChange={(e) =>
                        manageQuantity(product.id, e.target.value)
                      }
                    />
                    <p>
                      Price: ₹{product.qtnt * product.price || product.price}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition"
                      onClick={() => orderPlace(product.id)}
                    >
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
        <hr />
        <div className="py-3 my-3 px-2 flex justify-between text-center lg:text-end">
          {cardItems.length > 1 && (
            <button
              className="bg-blue-600 px-3 py-2 rounded-lg text-xl font-medium text-white"
              onClick={handleOrderAll}
            >
              Order All
            </button>
          )}

          <h3 className="text-xl font-bold">
            Total: ₹
            {cartProducts
              .reduce(
                (sum, item) =>
                  item.qtnt ? sum + item.price * item.qtnt : sum + item.price,
                0,
              )
              .toFixed(2)}
          </h3>
        </div>
      </div>
    </>
  );
}

export default CartItems;
