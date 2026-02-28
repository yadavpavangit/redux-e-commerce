import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "AdToCart",
  initialState: { items: JSON.parse(localStorage.getItem("products")) || [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("products", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export default addToCartSlice.reducer;
export const { addItem, removeItem, clearCart } = addToCartSlice.actions;
