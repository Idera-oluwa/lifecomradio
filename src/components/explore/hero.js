"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, A11y, EffectFade } from "swiper/modules";
import { I18nextProvider, useTranslation,withTranslation } from 'react-i18next';

const page = ({ locale }) => {
  const sliderRef = useRef();
  const {t} = useTranslation('home',{lng:locale});

  return (
    <Swiper
      modules={[Autoplay, Navigation, A11y, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      onSwiper={(it) => (sliderRef.current = it)}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      className="">
      <SwiperSlide>
      <div className="pt-[50px] lg:pt-0 bg-explore-bg2 h-[calc(270px)] md:h-[calc(100vh-17rem)] w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
          <p className="font-medium text-[10px] lg:bg-transparent h-[24px] w-[117px] bg-[rgba(12,24,33,1)] rounded-xl leadiing-3 lg:text-[20px] lg:min-w-fit lg:leading-[24px] text-[#CCC9DC] flex justify-center items-center">
            <span> {t("Discover a World of")}</span>
          </p>
          <h1 className="font-bold lg:text-[48px] text-xl md:text-3xl lg:leading-[58px] text-white mt-[0.8rem]">
            {t("Inspiration and Connection")}
          </h1>
          <p className=" text-[10px] md:text-[12px] opacity-[0.93] font-normal  lg:text-[16px] text-white lg:leading-[19px]  max-w-full px-[5%] sm:max-w-[342px]  lg:max-w-[791px] text-center mt-[0.8rem]">
            { t(
        "Discover a world of inspiration and connection at LifeCom Radio, where the power of music and spoken word converges to uplift your spirit and deepen your faith journey."
      )}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=" pt-[50px] lg:pt-0 bg-explore-bg3 h-[calc(270px)] md:h-[calc(100vh-17rem)] w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
          <p className="font-medium text-[10px] lg:bg-transparent h-[24px] w-[117px] bg-[rgba(12,24,33,1)] rounded-xl leadiing-3 lg:text-[20px] lg:min-w-fit lg:leading-[24px] text-[#CCC9DC] flex justify-center items-center">
            <span> {t("Discover a World of")}</span>
          </p>
          <h1 className="font-bold lg:text-[48px] text-xl md:text-3xl lg:leading-[58px] text-white mt-[0.8rem]">
          {t("Inspiration and Connection")}
          </h1>
          <p className=" text-[10px] md:text-[12px] opacity-[0.93] font-normal  lg:text-[16px] text-white lg:leading-[19px]  max-w-full px-[5%] sm:max-w-[342px]  lg:max-w-[791px] text-center mt-[0.8rem]">
            { t(
        "Discover a world of inspiration and connection at LifeCom Radio, where the power of music and spoken word converges to uplift your spirit and deepen your faith journey."
      )}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=" pt-[50px] lg:pt-0 bg-explore-bg4 h-[calc(270px)] md:h-[calc(100vh-17rem)] w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
          <p className="font-medium text-[10px] lg:bg-transparent h-[24px] w-[117px] bg-[rgba(12,24,33,1)] rounded-xl leadiing-3 lg:text-[20px] lg:min-w-fit lg:leading-[24px] text-[#CCC9DC] flex justify-center items-center">
            <span> {t("Discover a World of")}</span>
          </p>
          <h1 className="font-bold lg:text-[48px] text-xl md:text-3xl lg:leading-[58px] text-white mt-[0.8rem]">
          {t("Inspiration and Connection")}
          </h1>
          <p className=" text-[10px] md:text-[12px] opacity-[0.93] font-normal  lg:text-[16px] text-white lg:leading-[19px]  max-w-full px-[5%] sm:max-w-[342px]  lg:max-w-[791px] text-center mt-[0.8rem]">
            { t(
        "Discover a world of inspiration and connection at LifeCom Radio, where the power of music and spoken word converges to uplift your spirit and deepen your faith journey."
      )}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" bg-opacity-50 pt-[50px] lg:pt-0 bg-explore-bg bg-white h-[calc(270px)] md:h-[calc(100vh-17rem)] w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
          <p className="font-medium text-[10px] lg:bg-transparent h-[24px] w-[117px] bg-[rgba(12,24,33,1)] rounded-xl leadiing-3 lg:text-[20px] lg:min-w-fit lg:leading-[24px] text-[#CCC9DC] flex justify-center items-center">
            <span> {t("Discover a World of")}</span>
          </p>
          <h1 className="font-bold lg:text-[48px] text-xl md:text-3xl lg:leading-[58px] text-white mt-[0.8rem]">
          {t("Inspiration and Connection")}
          </h1>
          <p className=" text-[10px] md:text-[12px] opacity-[0.93] font-normal  lg:text-[16px] text-white lg:leading-[19px]  max-w-full px-[5%] sm:max-w-[342px]  lg:max-w-[791px] text-center mt-[0.8rem]">
            { t(
        "Discover a world of inspiration and connection at LifeCom Radio, where the power of music and spoken word converges to uplift your spirit and deepen your faith journey."
      )}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default page;

