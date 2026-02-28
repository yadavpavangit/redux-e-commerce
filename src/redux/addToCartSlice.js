import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "AdToCart",
  initialState: { value: 0 },
  reducers: {
    addItem: (state) => {
      state.value += 1;
    },
    removeItem: (state) => {
      state.value > 0 ? (state.value -= 1) : null;
    },
    clearCart: (state) => {
      state.value = 0;
    },
  },
});

export default addToCartSlice.reducer;
export const { addItem, removeItem, clearCart } = addToCartSlice.actions;
