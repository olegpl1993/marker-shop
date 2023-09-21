import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setDataUrl, getDataUrl } from "../dataUrl";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    initializeSelectedSearch(state) {
      const search = getDataUrl("search");
      if (search) state.search = JSON.parse(search);
    },
    changeSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      setDataUrl("search", JSON.stringify(action.payload));
    },
  },
});

export const { changeSearch, initializeSelectedSearch } = searchSlice.actions;
export default searchSlice.reducer;
