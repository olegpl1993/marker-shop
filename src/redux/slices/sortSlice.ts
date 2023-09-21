import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataUrl, setDataUrl } from "../dataUrl";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    sort: "title",
  },
  reducers: {
    initializeSort(state) {
      const initialParams = getDataUrl("sort");
      if (initialParams) state.sort = JSON.parse(initialParams);
    },
    changeSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
      setDataUrl("sort", JSON.stringify(action.payload));
    },
  },
});

export const { changeSort, initializeSort } = sortSlice.actions;
export default sortSlice.reducer;
