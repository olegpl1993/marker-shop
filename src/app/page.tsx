"use client";
import "./home.scss";
import "./global.scss";
import SliderMain from "@/components/SliderMain/SliderMain";
import RecommendedProducts from "@/components/RecommendedProducts/RecommendedProducts";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import CubeSpinner from "@/components/CubeSpinner/CubeSpinner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Интернет-магазин MARKER SHOP главная страница",
  description: `Интернет-магазин MARKER SHOP: 
    ✓ Электроника, одежда и обувь, бытовая техника, товары для дома и бизнеса 
    ✓ Официальная гарантия 
    ✓ Доставка по всей Украине 🚚 
    ✓ Отзывы покупателей, обзоры и характеристики товаров
    ✓ Выгодные цены и скидки`,
};

function Home() {
  const { data } = useGetProductsQuery(null);

  if (data) {
    return (
      <div className="container">
        <div className="home">
          <p className="home__title">Категории товаров</p>
          <SliderMain />
          <p className="home__title">Рекомендуем товары</p>
          <RecommendedProducts />
          <ScrollToTopButton />
        </div>
      </div>
    );
  }

  return (
    <div className="cubeSpinnerContainer">
      <CubeSpinner />
    </div>
  );
}

export default Home;
