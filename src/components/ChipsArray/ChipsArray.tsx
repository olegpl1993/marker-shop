"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import "./ChipsArray.scss";
import Chip from "@mui/material/Chip";
import { changeSelectedCategories } from "@/redux/slices/selectedCategoriesSlice";
import { changeCurrentPage } from "@/redux/slices/storePaginationSlice";

function ChipsArray() {
  const dispatch = useAppDispatch();

  const selectedCategories = useAppSelector(
    (state) => state.selectedCategoriesReducer.selectedCategories
  );

  const handleDeleteCategory = (category: String) => {
    dispatch(
      changeSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      )
    );
    dispatch(changeCurrentPage(1));
  };

  return (
    <div className="chipsArray">
      {selectedCategories.map((category, index) => (
        <Chip
          key={index}
          label={category}
          onDelete={() => handleDeleteCategory(category)}
        />
      ))}
    </div>
  );
}

export default ChipsArray;
