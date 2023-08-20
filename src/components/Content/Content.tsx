"use client";
import "./Content.scss";
import StoreCard from "../StoreCard/StoreCard";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { Product } from "@/types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeProducts } from "@/redux/slices/productsSlice";
import { useEffect } from "react";
import { contentUtils } from "./contentUtils";
import StorePagination from "../StorePagination/StorePagination";

function Content() {
  const { data } = useGetProductsQuery(null);
  const dispatch = useAppDispatch();
  console.log(data);
  const cart = useAppSelector((state) => state.cartReducer.cart);
  console.log(cart);

  const priceFilter = useAppSelector(
    (state) => state.priceFilterReducer.priceFilter
  );
  const currentPage = useAppSelector(
    (state) => state.storePaginationReducer.currentPage
  );
  const productsOnPage = useAppSelector(
    (state) => state.storePaginationReducer.productsOnPage
  );
  const sortType = useAppSelector((state) => state.sortReducer.sort);
  const search = useAppSelector((state) => state.searchReducer.search);
  const selectedCategories = useAppSelector(
    (state) => state.selectedCategoriesReducer.selectedCategories
  );
  console.log(selectedCategories);

  let products = [] as Product[];
  useEffect(() => {
    if (data) {
      dispatch(changeProducts(products));
    }
  }, [data, products]);

  if (data) {
    products = contentUtils.processProductData(
      data,
      selectedCategories,
      search,
      sortType,
      priceFilter
    );
    const paginatedProducts = contentUtils.paginateProducts(
      products,
      productsOnPage,
      currentPage
    );
    console.log(paginatedProducts);

    if (products.length === 0) {
      return (
        <section className="content">
          <div className="content__wrapper">
            <p className="content__notFound">Товаров не найдено</p>
          </div>
        </section>
      );
    }

    return (
      <section className="content">
        <div className="content__wrapper">
          {paginatedProducts.map((product) => (
            <StoreCard key={product.sku} product={product} />
          ))}
        </div>
        <StorePagination />
      </section>
    );
  }
}

export default Content;
