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
    initializeStorePagination(state) {
      const currentPage = getDataUrl("currentPage");
      if (currentPage) state.currentPage = JSON.parse(currentPage);
      const productsOnPage = getDataUrl("productsOnPage");
      if (productsOnPage) state.productsOnPage = JSON.parse(productsOnPage);
    },
    changeCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      setDataUrl("currentPage", JSON.stringify(action.payload));
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
  initializeStorePagination,
} = storePaginationSlice.actions;
export default storePaginationSlice.reducer;
