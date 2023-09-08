"use client";
import "./SliderMain.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { Product } from "@/types";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { changeSelectedCategories } from "@/redux/slices/selectedCategoriesSlice";
import { changeCurrentPage } from "@/redux/slices/storePaginationSlice";

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
  const dispatch = useAppDispatch();

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

  const handleRedirectToStore = (category: string) => {
    dispatch(changeCurrentPage(1));
    dispatch(changeSelectedCategories([category]));
    router.push("/store");
  };

  if (data) {
    const uniqueProducts = getUniqueProducts(data);

    return (
      <div className="sliderMain">
        <Swiper
          modules={[Navigation, A11y]}
          className="sliderMain__swiper"
          navigation
          {...swiperParams}
        >
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
}

export default SliderMain;
