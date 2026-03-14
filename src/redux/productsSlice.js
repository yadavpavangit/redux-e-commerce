import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProductsApi", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

const initialState = {
  products: [],
  loading: false,
  status: undefined,
  error: null,
  selectedCategories: [],
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(
          (c) => c !== category,
        );
      } else {
        state.selectedCategories.push(category);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload;
    });
  },
});
export const { toggleCategory } = productsSlice.actions;
export default productsSlice.reducer;
