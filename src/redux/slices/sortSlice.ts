import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    sort: "title",
  },
  reducers: {
    changeSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
});

export const { changeSort } = sortSlice.actions;
export default sortSlice.reducer;
