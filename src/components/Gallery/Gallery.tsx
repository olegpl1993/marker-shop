"use cliet";
import "./Gallery.scss";
import { Product } from "@/types";
import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { IconButton, Paper } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y } from "swiper/modules";

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
    const swiper = useSwiper();
    return (
      <div className="gallery__imgBox">
        {productData.gallery.map((img, index) => (
          <img
            key={img}
            className={"gallery__smallImg"}
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
            <Paper elevation={3} className="gallery__paper">
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
