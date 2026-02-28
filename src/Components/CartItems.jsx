import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/addToCartSlice";

function CartItems() {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">Cart Items</h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </>
  );
}

export default CartItems;
