import "./home.scss";
import "./global.scss";
import SliderMain from "@/components/SliderMain/SliderMain";
import RecommendedProducts from "@/components/RecommendedProducts/RecommendedProducts";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";

function Home() {
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

export default Home;
