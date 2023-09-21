import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setDataUrl, getDataUrl } from "../dataUrl";

const selectedCategoriesSlice = createSlice({
  name: "selectedCategories",
  initialState: {
    selectedCategories: [] as String[],
  },
  reducers: {
    initializeSelectedCategories(state) {
      const categories = getDataUrl("categories");
      if (categories) state.selectedCategories = JSON.parse(categories);
    },
    changeSelectedCategories(state, action: PayloadAction<String[]>) {
      state.selectedCategories = action.payload;
      setDataUrl("categories", JSON.stringify(action.payload));
    },
  },
});

export const { changeSelectedCategories, initializeSelectedCategories } =
  selectedCategoriesSlice.actions;
export default selectedCategoriesSlice.reducer;
