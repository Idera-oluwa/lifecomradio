"use client";
import React, { useRef, useState } from "react";
import { useGlobalContext, AppContext } from "@/context/context";
import Link from "next/link";
import moment from "moment";
import { Autoplay, Navigation, A11y, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const articles = () => {
  const { articles } = useGlobalContext();
  const sliderRef = useRef();
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const toggleLike = () => {
    setLike(true);
    setDislike(false);
  };
  const toggleDislike = () => {
    setDislike(true);
    setLike(false);
  };
  return (
    <div className="w-[90vw] mx-auto mt-[5rem] md:mt-[8rem] mb-16 lg:mb-0">
      <p className="font-semibold text-white text-[14px] md:text-[24px] leading-[24px]">
        Articles
      </p>
      <Swiper
        modules={[Autoplay, Navigation, A11y, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(it) => (sliderRef.current = it)}
        effect="fade"
        fadeEffect={{ crossFade: true }}>
        {articles.map((article) => {
          const {
            id,
            author,
            title,
            description,
            createdAt,
            readingTime,
            slug,
            coverImage,
          } = article;
          return (
            <SwiperSlide key={id}>
              <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between mt-[1rem] md:mt-[3rem] w-full items-start relative">
                <div className="flex flex-row items-center gap-[0.7rem]">
                  <img
                    src="/images/explore/explore-happy.svg"
                    alt=""
                    className="lg:w-[51px] w-[30px] h-[30px] lg:h-[51px]"
                  />
                  <p className="font-semibold text-white text-[10px] leading-3 lg:text-[16px] lg:leading-[19px]">
                    Happy Akpeyi
                  </p>
                  <img src="/images/explore/bluetick.svg" alt="" className="w-[13px] h-[13px] md:w-[28px] md:h-[28px]"/>
                </div>
                <div className="flex flex-row gap-0 lg:gap-[1.5rem]">
                  <div className="relative w-[40px]  lg:hidden">
                    <img
                      src={coverImage?.url}
                      alt=""
                      className="max-w-full h-[177px] lg:h-[419px] w-full object-cover object"
                    />
                  </div>
                  <div className="bg-[#1B2A4180] lg:w-[414px] h-[177px] lg:h-[419px] rounded-[10px] p-[13px] py-[18px] lg:py-0 lg:px-[2rem] flex flex-col lg:justify-center mr-[8px] lg:mr-0">
                    <h3 className="text-white text-[14px] leading-4 lg:text-[24px] font-semibold lg:leading-[29px] capitalize lg:w-[304px]">
                      {title}
                    </h3>
                    <p className="font-medium text-[10px] leading-3 lg:text-[14px] text-[#F5F5F5] lg:w-[246px] lg:leading-[17px] mt-[10px] lg:mt-[1rem]">
                      {description}
                    </p>
                    <div className="flex flex-row items-center gap-[0.25rem] lg:gap-[0.5rem] mt-[13px] lg:mt-[1rem]">
                      <p className="text-[#CCC9DC] text-[10px] lg:text-[12px] font-medium leading-[10px] lg:leading-[14.5px]">
                        {moment(createdAt).format("MMM DD, YYYY")}
                      </p>
                      <img src="/images/explore/dot.svg" alt="" className="w-[5px] h-[5px] md:w-[10px] md:h-[10px]"/>
                      <p className="text-[#CCC9DC] leading-[10px] lg:text-[12px] font-medium text-[10px] lg:leading-[14.5px]">
                        {readingTime} min read
                      </p>
                    </div>
                    <div className="flex flex-row-reverse gap-3 justify-end items-center">
                      {/* <div className="lg:w-[136px] w-[64px] h-[25px] lg:h-[53px] bg-[#324A5F4D] flex justify-center items-center mt-3 lg:mt-[2rem] gap-[1rem] rounded-[10px]">
                        <img
                          src={
                            like
                              ? "/images/explore/likeFilled.svg"
                              : "/images/articles/like.png"
                          }
                          alt=""
                          className="cursor-pointer w-[10px] h-[10px] lg:w-auto lg:h-auto"
                          onClick={() => toggleLike()}
                        />
                        <img
                          src={
                            dislike
                              ? "/images/explore/unlikeFilled.svg"
                              : "/images/articles/dislike.png"
                          }
                          alt=""
                          className="cursor-pointer mt-[0.5rem] w-[10px] h-[10px] lg:w-auto lg:h-auto"
                          onClick={() => toggleDislike()}
                        />
                      </div> */}
                     <Link href={`/explore/articles/${article && article.slug}`}>
                      <div className="flex flex-row gap-[0.5rem] w-[57px] lg:w-[156px] lg:h-[47px] h-[20px] mt-3 lg:mt-[2rem] border-[1.8px] md:border-[2px] border-white justify-center items-center rounded-[10px] cursor-pointer">
                        <span className="text-[10px] leading-3 lg:text-[16px] text-white font-medium lg:leading-[19px]">
                          Read
                        </span>
                        <span className="text-[10px] leading-3 lg:text-[16px] text-white font-medium lg:leading-[19px] hidden md:block">
                          article
                        </span>
                        <img
                          src="/images/explore/arrow.svg"
                          alt=""
                          className="w-[4px] h-[7px] lg:w-auto"
                        />
                      </div>
                    </Link>
                    </div>
                  </div>
                  <div className="relative lg:w-[571px]">
                    <img
                      src={coverImage?.url}
                      alt=""
                      className="w-full h-[177px] lg:h-[419px] object-cover"
                    />
                    <div className="absolute w-[24px] h-[24px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] rounded-full top-0 bottom-0 right-0 my-auto mr-[1.3rem] flex items-center justify-center cursor-pointer">
                      <img
                        src="/images/explore/caret.svg"
                        alt=""
                        onClick={() => sliderRef.current?.slideNext()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default articles;
