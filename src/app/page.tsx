"use client";
import "./home.scss";
import "./global.scss";
import SliderMain from "@/components/SliderMain/SliderMain";
import RecommendedProducts from "@/components/RecommendedProducts/RecommendedProducts";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import CubeSpinner from "@/components/CubeSpinner/CubeSpinner";
import Principles from "@/components/Principles/Principles";

function Home() {
  const { data } = useGetProductsQuery(null);

  if (data) {
    return (
      <div className="container">
        <div className="home">
          <p className="home__title">Категории товаров</p>
          <SliderMain />
          <Principles />
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
