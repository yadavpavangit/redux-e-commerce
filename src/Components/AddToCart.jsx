import { useSelector } from "react-redux";

function AddToCart() {
  const cartCount = useSelector((state) => state.cart.value);
  return (
    <>
      <div className="relative cursor-pointer">
        🛒
        <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
          {cartCount}
        </span>
      </div>
    </>
  );
}

export default AddToCart;
