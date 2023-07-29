import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const selectedCategoriesSlice = createSlice({
  name: "selectedCategories",
  initialState: {
    selectedCategories: [] as String[],
  },
  reducers: {
    changeSelectedCategories(state, action: PayloadAction<String[]>) {
      state.selectedCategories = action.payload;
    },
  },
});

export const { changeSelectedCategories } = selectedCategoriesSlice.actions;
export default selectedCategoriesSlice.reducer;
