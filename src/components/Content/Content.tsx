"use client";
import "./Content.scss";
import StoreCard from "../StoreCard/StoreCard";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { Product } from "@/types";

const sortByAvailable = (data: Product[]) => {
  const availableProducts = data.filter((product) => !!product.sizes.length);
  const notAvailableProducts = data.filter((product) => !product.sizes.length);
  return [...availableProducts, ...notAvailableProducts];
};

function Content() {
  const { data } = useGetProductsQuery(null);

  if (data) {
    const products = sortByAvailable(data);
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
