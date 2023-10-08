"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import "./ChipsArray.scss";
import Chip from "@mui/material/Chip";
import { changeSelectedCategories } from "@/redux/slices/selectedCategoriesSlice";
import { changeCurrentPage } from "@/redux/slices/storePaginationSlice";
import { Button } from "@mui/material";
import { initializePriceFilter } from "@/redux/slices/priceFilterSlice";

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

  const handleClearFilters = () => {
    dispatch(changeSelectedCategories([]));
    dispatch(changeCurrentPage(1));
  };

  if (selectedCategories.length > 0) {
    return (
      <div className="chipsArray">
        <Button
          variant="outlined"
          className="chipsArray__buttonClearFilters"
          size="medium"
          onClick={handleClearFilters}
        >
          очистить фильтры
        </Button>
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
}

export default ChipsArray;
