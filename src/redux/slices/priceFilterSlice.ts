import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const priceFilterSlice = createSlice({
  name: "priceFilter",
  initialState: {
    priceFilter: [0, 0] as number[],
  },
  reducers: {
    changePriceFilter(state, action: PayloadAction<number[]>) {
      state.priceFilter = action.payload;
    },
  },
});

export const { changePriceFilter } = priceFilterSlice.actions;
export default priceFilterSlice.reducer;
