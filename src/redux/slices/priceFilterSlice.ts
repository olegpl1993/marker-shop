import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataUrl, setDataUrl } from "../dataUrl";

const priceFilterSlice = createSlice({
  name: "priceFilter",
  initialState: {
    priceFilter: [0, 0] as number[],
  },
  reducers: {
    initializePriceFilter(state) {
      const initialParams = getDataUrl("priceFilter");
      if (initialParams) state.priceFilter = JSON.parse(initialParams);
    },
    changePriceFilter(state, action: PayloadAction<number[]>) {
      state.priceFilter = action.payload;
      setDataUrl("priceFilter", JSON.stringify(action.payload));
    },
  },
});

export const { changePriceFilter, initializePriceFilter } =
  priceFilterSlice.actions;
export default priceFilterSlice.reducer;
