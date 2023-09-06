"use client";
import "./SliderMain.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { Product } from "@/types";

const getUniqueProducts = (data: Product[]) => {
  const uniqueProducts: Product[] = [];

  data.forEach((product) => {
    if (!uniqueProducts.find((item) => item.category === product.category)) {
      uniqueProducts.push(product);
    }
  });

  return uniqueProducts;
};

function SliderMain() {
  const { data } = useGetProductsQuery(null);

  if (data) {
    const uniqueProducts = getUniqueProducts(data);
    console.log(uniqueProducts);

    return (
      <div className="sliderMain">
        <Swiper
          className="sliderMain__swiper"
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
        >
          {uniqueProducts.map((product) => (
            <SwiperSlide key={product.sku}>
              <div className="sliderMain__slide">
                <img
                  src={product.gallery[0]}
                  alt={product.name}
                  className="sliderMain__img"
                />
                <p>{product.category}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default SliderMain;
