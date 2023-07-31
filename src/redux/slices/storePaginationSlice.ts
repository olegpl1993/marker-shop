import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const storePaginationSlice = createSlice({
  name: "storePagination",
  initialState: {
      currentPage: 1,
      pageQty: 0,
      productsOnPage: 20
  },
  reducers: {
    changeCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    changePageQty(state, action: PayloadAction<number>) {
      state.pageQty = action.payload;
    },
    changeProductsOnPage(state, action: PayloadAction<number>) {
      state.productsOnPage = action.payload;
    }
  },
});

export const { changeCurrentPage, changePageQty, changeProductsOnPage } = storePaginationSlice.actions;
export default storePaginationSlice.reducer;
