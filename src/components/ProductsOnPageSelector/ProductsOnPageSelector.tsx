"use client";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  changeCurrentPage,
  changeProductsOnPage,
} from "@/redux/slices/storePaginationSlice";

function ProductsOnPageSelector() {
  const dispatch = useAppDispatch();
  const productsOnPage = useAppSelector(
    (state) => state.storePaginationReducer.productsOnPage
  );

  const handleChangeProductsOnPage = (event: SelectChangeEvent) => {
    dispatch(changeCurrentPage(1));
    dispatch(changeProductsOnPage(Number(event.target.value)));
    console.log(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
      <Select
        value={String(productsOnPage)}
        onChange={handleChangeProductsOnPage}
        displayEmpty
      >
        <MenuItem value={"20"}>20</MenuItem>
        <MenuItem value={"30"}>30</MenuItem>
        <MenuItem value={"50"}>50</MenuItem>
        <MenuItem value={"100"}>100</MenuItem>
      </Select>
    </FormControl>
  );
}

export default ProductsOnPageSelector;
