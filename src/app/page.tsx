import "./home.scss";
import SliderMain from "@/components/SliderMain/SliderMain";
import RecommendedProducts from "@/components/RecommendedProducts/RecommendedProducts";

function Home() {
  return (
    <div className="home">
      <p className="home__title">Категории товаров</p>
      <SliderMain />
      <p className="home__title">Рекомендуем товары</p>
      <RecommendedProducts />
    </div>
  );
}

export default Home;
