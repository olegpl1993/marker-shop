import SliderMain from "@/components/SliderMain/SliderMain";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Категории товаров</h1>
      <SliderMain />
    </div>
  );
}

export default Home;
