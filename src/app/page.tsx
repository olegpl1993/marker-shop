import "./home.scss";
import SliderMain from "@/components/SliderMain/SliderMain";
import RecommendedProducts from "@/components/RecommendedProducts/RecommendedProducts";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";

function Home() {
  return (
    <div className="home">
      <p className="home__title">Категории товаров</p>
      <SliderMain />
      <p className="home__title">Рекомендуем товары</p>
      <RecommendedProducts />
      <ScrollToTopButton />
    </div>
  );
}

export default Home;
