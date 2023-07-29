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

const searchByProducts = (data: Product[], input: string) => {
  const searchedProducts = data.filter((product) =>
    product.name.trim().toLowerCase().includes(input.trim().toLowerCase())
  );
  return searchedProducts;
};

const sortingProducts = (products: Product[], sortType: string) => {
  const sortedProducts = [...products];
  const sortTypes = {
    cheap: (a: Product, b: Product) => a.price - b.price,
    expensive: (a: Product, b: Product) => b.price - a.price,
    title: (a: Product, b: Product) =>
      a.name.trim().toLowerCase().localeCompare(b.name.trim().toLowerCase()),
  };
  return sortedProducts.sort(sortTypes[sortType as keyof typeof sortTypes]);
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
    (state) => state.storePaginationReducer.currentPage
  );
  const productsOnPage = useAppSelector(
    (state) => state.storePaginationReducer.productsOnPage
  );
  const sortType = useAppSelector((state) => state.sortReducer.sort);
  const search = useAppSelector((state) => state.searchReducer.search);

  if (data) {
    let products = data;
    products = searchByProducts(products, search);
    products = sortingProducts(products, sortType);
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
