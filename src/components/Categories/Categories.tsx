"use client";
import "./Categories.scss";
import { Product } from "@/types";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { Checkbox, FormControlLabel, FormGroup, Paper } from "@mui/material";

const getUniqueCategories = (data: Product[]) => {
  const categories = data.map((product) => product.category);
  const setCategories = new Set(categories);
  return [...setCategories];
};

function Categories() {
  const { data } = useGetProductsQuery(null);

  if (data) {
    const categories = getUniqueCategories(data);
    return (
      <Paper elevation={3} className="categories">
        <div className="categories__title">Категории</div>
        <FormGroup className="categories__list">
          {categories.map((category) => (
            <FormControlLabel
              control={<Checkbox size="small" />}
              className="categories__item"
              label={category}
              key={category}
            />
          ))}
        </FormGroup>
      </Paper>
    );
  }
}

export default Categories;
