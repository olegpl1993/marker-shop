import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setDataUrl, getDataUrl } from "../dataUrl";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    initializeSelectedSearch(state) {
      const initialParams = getDataUrl("search");
      if (initialParams) state.search = JSON.parse(initialParams);
    },
    changeSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      setDataUrl("search", JSON.stringify(action.payload));
    },
  },
});

export const { changeSearch, initializeSelectedSearch } = searchSlice.actions;
export default searchSlice.reducer;
