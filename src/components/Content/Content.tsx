"use client";
import "./Content.scss";
import StoreCard from "../StoreCard/StoreCard";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { Product } from "@/types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeProducts } from "@/redux/slices/productsSlice";
import { useEffect } from "react";
import { contentUtils } from "./contentUtils";

function Content() {
  const { data } = useGetProductsQuery(null);
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector(
    (state) => state.storePaginationReducer.currentPage
  );
  const productsOnPage = useAppSelector(
    (state) => state.storePaginationReducer.productsOnPage
  );
  const sortType = useAppSelector((state) => state.sortReducer.sort);
  const search = useAppSelector((state) => state.searchReducer.search);

  let products = [] as Product[];
  useEffect(() => {
    if (data) {
      dispatch(changeProducts(products));
    }
  }, [data, products]);

  if (data) {
    products = contentUtils.searchByProducts(data, search);
    products = contentUtils.sortingProducts(products, sortType);
    products = contentUtils.sortByAvailable(products);
    console.log(products);
    const paginatedProducts = contentUtils.paginateProducts(
      products,
      productsOnPage,
      currentPage
    );
    console.log(paginatedProducts);

    return (
      <section className="content">
        {paginatedProducts.map((product) => (
          <StoreCard key={product.sku} product={product} />
        ))}
      </section>
    );
  }
}

export default Content;
