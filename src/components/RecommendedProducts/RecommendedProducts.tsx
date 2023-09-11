"use client";
import "./RecommendedProducts.scss";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import Spinner from "../Spinner/Spinner";
import { Product } from "@/types";
import StoreCard from "../StoreCard/StoreCard";
import { useEffect, useState } from "react";

const getRandomProducts = (products: Product[], numberOfProducts: number) => {
  const randomProducts = [];
  for (let i = 0; i < numberOfProducts; i++) {
    const randomIndex = Math.floor(Math.random() * products.length);
    randomProducts.push(products[randomIndex]);
  }
  return randomProducts;
};

function RecommendedProducts() {
  const { data } = useGetProductsQuery(null);
  const [renderProducts, setRenderProducts] = useState([] as Product[]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!data) return;
    setRenderProducts(getRandomProducts(data, 8));
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const totalHeight = document.documentElement.offsetHeight;
      console.log(
        "windowHeight = ",
        windowHeight,
        "scrollTop = ",
        scrollTop,
        "totalHeight = ",
        totalHeight
      );
      if (totalHeight - scrollTop <= windowHeight + 10) {
        setIsLoading(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    if (!data) return;
    setTimeout(() => {
      setRenderProducts([...renderProducts, ...getRandomProducts(data, 8)]);
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  if (data) {
    return (
      <div className="recommendedProducts">
        {renderProducts.map((product, index) => (
          <StoreCard key={index} product={product} />
        ))}
        {isLoading && <Spinner />}
      </div>
    );
  }

  return <Spinner />;
}

export default RecommendedProducts;
