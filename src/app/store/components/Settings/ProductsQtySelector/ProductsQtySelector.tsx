"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  changeCurrentPage,
  changeProductsOnPage,
} from "@/redux/slices/storePaginationSlice";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./ProductsQtySelector.scss";

function ProductsQtySelector() {
  const dispatch = useAppDispatch();
  const productsOnPage = useAppSelector(
    (state) => state.storePaginationReducer.productsOnPage
  );

  const handleChangeProductsOnPage = (event: SelectChangeEvent) => {
    dispatch(changeCurrentPage(1));
    dispatch(changeProductsOnPage(Number(event.target.value)));
  };

  return (
    <Select
      className="pageQtySelector"
      value={String(productsOnPage)}
      onChange={handleChangeProductsOnPage}
      displayEmpty
    >
      <MenuItem value={"20"}>20</MenuItem>
      <MenuItem value={"30"}>30</MenuItem>
      <MenuItem value={"50"}>50</MenuItem>
      <MenuItem value={"100"}>100</MenuItem>
    </Select>
  );
}

export default ProductsQtySelector;
