"use client";
import { Product } from "@/shared/types";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./Gallery.scss";

interface Props {
  productData: Product;
}

function Gallery(props: Props) {
  const { productData } = props;
  const { gallery } = productData;

  const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
      <IconButton
        className="gallery__iconButtonBefore"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <NavigateBeforeIcon className="gallery__navigateIcon" />
      </IconButton>
    );
  };

  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
      <IconButton
        className="gallery__iconButtonNext"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <NavigateNextIcon className="gallery__navigateIcon" />
      </IconButton>
    );
  };

  const SwiperSlideSelector = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiper = useSwiper();
    swiper.on("slideChange", () => {
      setActiveIndex(swiper.activeIndex);
    });
    return (
      <div className="gallery__imgBox">
        {productData.gallery.map((img, index) => (
          <img
            key={img}
            className={
              "gallery__smallImg " +
              (activeIndex === index ? "gallery__smallImg_active" : "")
            }
            src={img}
            alt={productData.name}
            loading="lazy"
            onClick={() => {
              swiper.slideTo(index);
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="gallery">
      <Swiper
        modules={[A11y]}
        className="gallery__swiper"
        slidesPerView={1}
        spaceBetween={"50px"}
      >
        <SwiperButtonPrev />
        <SwiperButtonNext />

        {gallery.map((productImg) => (
          <SwiperSlide key={productImg} className="gallery__slide">
            <Paper elevation={2} className="gallery__paper">
              <img src={productImg} alt={productImg} className="gallery__img" />
            </Paper>
          </SwiperSlide>
        ))}

        <SwiperSlideSelector />
      </Swiper>
    </div>
  );
}

export default Gallery;
