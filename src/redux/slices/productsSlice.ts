import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
      products: [] as Product[],
  },
  reducers: {
    changeProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const { changeProducts } = productsSlice.actions;
export default productsSlice.reducer;
