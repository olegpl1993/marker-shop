"use client";
import "./SliderMain.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y } from "swiper/modules";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { Product } from "@/types";
import { IconButton, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { changeSelectedCategories } from "@/redux/slices/selectedCategoriesSlice";
import { changeCurrentPage } from "@/redux/slices/storePaginationSlice";
import Spinner from "../Spinner/Spinner";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

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

  const [swiperParams, setSwiperParams] = useState({
    slidesPerView: 5,
    spaceBetween: 60,
  });

  const updateSwiperParams = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setSwiperParams({
        slidesPerView: 1,
        spaceBetween: 20,
      });
    } else if (window.matchMedia("(max-width: 1023px)").matches) {
      setSwiperParams({
        slidesPerView: 2,
        spaceBetween: 60,
      });
    } else if (window.matchMedia("(max-width: 1279px)").matches) {
      setSwiperParams({
        slidesPerView: 3,
        spaceBetween: 60,
      });
    } else if (window.matchMedia("(max-width: 1599px)").matches) {
      setSwiperParams({
        slidesPerView: 4,
        spaceBetween: 60,
      });
    } else {
      setSwiperParams({
        slidesPerView: 5,
        spaceBetween: 60,
      });
    }
  };

  useEffect(() => {
    updateSwiperParams();
    window.addEventListener("resize", updateSwiperParams);
    return () => {
      window.removeEventListener("resize", updateSwiperParams);
    };
  }, []);

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
          {...swiperParams}
        >
          <SwiperButtonPrev />
          <SwiperButtonNext />
          {uniqueProducts.map((product) => (
            <SwiperSlide key={product.sku}>
              <Paper
                elevation={3}
                className="sliderMain__slide"
                onClick={() => handleRedirectToStore(product.category)}
              >
                <div />
                <img
                  src={product.gallery[0]}
                  alt={product.name}
                  className="sliderMain__img"
                />
                <p className="sliderMain__category">{product.category}</p>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  return <Spinner />;
}

export default SliderMain;
