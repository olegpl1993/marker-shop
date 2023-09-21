import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataUrl, setDataUrl } from "../dataUrl";

const storePaginationSlice = createSlice({
  name: "storePagination",
  initialState: {
    currentPage: 1,
    pageQty: 0,
    productsOnPage: 20,
  },
  reducers: {
    initializeProductsOnPage(state) {
      const initialParams = getDataUrl("productsOnPage");
      if (initialParams) state.productsOnPage = JSON.parse(initialParams);
    },
    changeCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    changePageQty(state, action: PayloadAction<number>) {
      state.pageQty = action.payload;
    },
    changeProductsOnPage(state, action: PayloadAction<number>) {
      state.productsOnPage = action.payload;
      setDataUrl("productsOnPage", JSON.stringify(action.payload));
    },
  },
});

export const {
  changeCurrentPage,
  changePageQty,
  changeProductsOnPage,
  initializeProductsOnPage,
} = storePaginationSlice.actions;
export default storePaginationSlice.reducer;
