"use client";
import "./Categories.scss";
import { Product } from "@/types";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeSelectedCategories } from "@/redux/slices/selectedCategoriesSlice";
import { changeCurrentPage } from "@/redux/slices/storePaginationSlice";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const getUniqueCategories = (data: Product[]) => {
  const categories = data.map((product) => product.category);
  const setCategories = new Set(categories);
  return [...setCategories];
};

function Categories() {
  const { data } = useGetProductsQuery(null);
  const dispatch = useAppDispatch();

  const selectedCategories = useAppSelector(
    (state) => state.selectedCategoriesReducer.selectedCategories
  );

  const handleChangeCategories = (category: string) => {
    if (selectedCategories.includes(category)) {
      dispatch(
        changeSelectedCategories(
          selectedCategories.filter((item) => item !== category)
        )
      );
    } else {
      dispatch(changeSelectedCategories([...selectedCategories, category]));
    }
    dispatch(changeCurrentPage(1));
  };

  const isChecked = (category: string) => selectedCategories.includes(category);

  if (data) {
    const categories = getUniqueCategories(data);
    return (
      <Accordion elevation={1} defaultExpanded={true} className="categories">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="categories__title">Категории</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup className="categories__list">
            {categories.map((category) => (
              <FormControlLabel
                control={
                  <Checkbox size="small" checked={isChecked(category)} />
                }
                className="categories__item"
                label={category}
                key={category}
                onChange={() => handleChangeCategories(category)}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    );
  }
}

export default Categories;
