"use client";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import CubeSpinner from "@/shared/components/CubeSpinner/CubeSpinner";
import ScrollToTopButton from "@/shared/components/ScrollToTopButton/ScrollToTopButton";
import Principles from "./components/Principles/Principles";
import RecommendedProducts from "./components/RecommendedProducts/RecommendedProducts";
import SliderMain from "./components/SliderMain/SliderMain";
import "./home.scss";

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
