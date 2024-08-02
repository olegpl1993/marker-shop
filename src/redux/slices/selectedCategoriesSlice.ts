import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataUrl, setDataUrl } from "../dataUrl";

const selectedCategoriesSlice = createSlice({
  name: "selectedCategories",
  initialState: {
    selectedCategories: [] as String[],
  },
  reducers: {
    initializeSelectedCategories(state) {
      const initialParams = getDataUrl("categories");
      if (initialParams) state.selectedCategories = JSON.parse(initialParams);
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
