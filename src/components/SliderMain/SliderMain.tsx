"use client";
import "./SliderMain.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SliderMain() {
  return (
    <div className="sliderMain">
      <Swiper
        className="sliderMain__swiper"
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="sliderMain__slide">
          <img src="/images/ava.jpg" alt="avatar" className="sliderMain__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/ava.jpg" alt="avatar" className="sliderMain__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/ava.jpg" alt="avatar" className="sliderMain__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/ava.jpg" alt="avatar" className="sliderMain__img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderMain;
