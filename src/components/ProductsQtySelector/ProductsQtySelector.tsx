"use client";
import "./ProductsQtySelector.scss";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  changeCurrentPage,
  changeProductsOnPage,
} from "@/redux/slices/storePaginationSlice";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function ProductsQtySelector() {
  const dispatch = useAppDispatch();
  const productsOnPage = useAppSelector(
    (state) => state.storePaginationReducer.productsOnPage
  );

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const productsOnPageParam = searchParams.get("productsOnPage");
    const productsOnPageParams = ["20", "30", "50", "100"];
    const currentProductsOnPage = productsOnPageParams.find(
      (param) => param === productsOnPageParam
    );
    if (currentProductsOnPage) {
      dispatch(changeProductsOnPage(Number(currentProductsOnPage)));
    }
  }, []);

  const createQueryString = (name: string, value: string) => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const params = new URLSearchParams(searchParams.toString());
    if (value === "") {
      params.delete(name);
    } else {
      params.set(name, value);
    }
    return params.toString();
  };

  const handleChangeProductsOnPage = (event: SelectChangeEvent) => {
    dispatch(changeCurrentPage(1));
    dispatch(changeProductsOnPage(Number(event.target.value)));
    router.push(
      pathname + "?" + createQueryString("productsOnPage", event.target.value)
    );
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
