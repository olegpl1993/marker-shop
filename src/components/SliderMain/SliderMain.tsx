"use client";
import "./SliderMain.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { Product } from "@/types";
import { Paper } from "@mui/material";

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
          modules={[Navigation, A11y]}
          className="sliderMain__swiper"
          spaceBetween={60}
          slidesPerView={5}
          navigation
        >
          {uniqueProducts.map((product) => (
            <SwiperSlide key={product.sku}>
              <Paper elevation={3} className="sliderMain__slide">
                <img
                  src={product.gallery[0]}
                  alt={product.name}
                  className="sliderMain__img"
                />
                <p>{product.category}</p>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default SliderMain;
