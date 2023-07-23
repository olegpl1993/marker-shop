"use client";
import "./Content.scss";
import StoreCard from "../StoreCard/StoreCard";
import { useGetProductsQuery } from "@/redux/services/productsApi";

function Content() {
  const { data } = useGetProductsQuery(null);
  if (data) {
    return (
      <section className="content">
        {data.map((product) => (
          <StoreCard key={product.sku} product={product} />
        ))}
      </section>
    );
  }
}

export default Content;
