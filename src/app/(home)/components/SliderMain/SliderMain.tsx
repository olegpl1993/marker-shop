"use client";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { Product } from "@/shared/types";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { IconButton, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./SliderMain.scss";

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
  const router = useRouter();

  const handleRedirectToStore = (category: string) => {
    router.push(`/store?categories=%5B"${category}"%5D&currentPage=1`);
  };

  const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
      <IconButton
        className="sliderMain__iconButtonBefore"
        onClick={() => swiper.slidePrev()}
      >
        <NavigateBeforeIcon className="sliderMain__navigateIcon" />
      </IconButton>
    );
  };

  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
      <IconButton
        className="sliderMain__iconButtonNext"
        onClick={() => swiper.slideNext()}
      >
        <NavigateNextIcon className="sliderMain__navigateIcon" />
      </IconButton>
    );
  };

  if (data) {
    const uniqueProducts = getUniqueProducts(data);
    return (
      <div className="sliderMain">
        <Swiper
          modules={[A11y]}
          className="sliderMain__swiper"
          slidesPerView={1}
          spaceBetween={"20px"}
          breakpoints={{
            767: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
            1023: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            1279: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
            1599: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
          }}
        >
          <SwiperButtonPrev />
          <SwiperButtonNext />
          {uniqueProducts.map((product) => (
            <SwiperSlide key={product.sku}>
              <Paper
                elevation={1}
                className="sliderMain__slide"
                onClick={() => handleRedirectToStore(product.category)}
              >
                <div className="sliderMain__imgBox">
                  <img
                    src={product.gallery[0]}
                    alt={product.name}
                    className="sliderMain__img"
                  />
                </div>
                <p className="sliderMain__category">{product.category}</p>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default SliderMain;
