import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./addToCartSlice";
import productsReducer from "./productsSlice";

export const store = configureStore({
  reducer: {
    cart: addToCartReducer,
    products: productsReducer,
  },
});
