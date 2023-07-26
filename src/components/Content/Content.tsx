"use client";
import "./Content.scss";
import StoreCard from "../StoreCard/StoreCard";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { Product } from "@/types";
import { useAppSelector } from "@/redux/hooks";

const sortByAvailable = (data: Product[]) => {
  const availableProducts = data.filter((product) => !!product.sizes.length);
  const notAvailableProducts = data.filter((product) => !product.sizes.length);
  return [...availableProducts, ...notAvailableProducts];
};

const paginateProducts = (
  products: Product[],
  productsOnPage: number,
  currentPage: number
) => {
  const startIndex = (currentPage - 1) * productsOnPage;
  const endIndex = startIndex + productsOnPage;
  return products.slice(startIndex, endIndex);
};

function Content() {
  const { data } = useGetProductsQuery(null);

  const currentPage = useAppSelector(
    (state) => state.storePaginationState.currentPage
  );
  const productsOnPage = useAppSelector(
    (state) => state.storePaginationState.productsOnPage
  );

  if (data) {
    let products = data;
    products = sortByAvailable(products);
    console.log(products);
    products = paginateProducts(products, productsOnPage, currentPage);
    console.log(products);

    return (
      <section className="content">
        {products.map((product) => (
          <StoreCard key={product.sku} product={product} />
        ))}
      </section>
    );
  }
}

export default Content;
