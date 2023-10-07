"use client";
import "./RecommendedProducts.scss";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { Product } from "@/types";
import StoreCard from "../StoreCard/StoreCard";
import { useEffect, useRef, useState } from "react";
import Spinner from "../Spinner/Spinner";

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
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!data) return;
    setRenderProducts(getRandomProducts(data, 8));
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      if (!loaderRef.current) return;
      const loaderRect = loaderRef.current.getBoundingClientRect();
      const isLoaderVisible = loaderRect.top <= window.innerHeight;
      if (isLoaderVisible) {
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
        <div className="recommendedProducts__products">
          {renderProducts.map((product, index) => (
            <StoreCard key={index} product={product} />
          ))}
        </div>
        <div className="recommendedProducts__loader" ref={loaderRef}>
          {isLoading && <Spinner />}
        </div>
      </div>
    );
  }
}

export default RecommendedProducts;
