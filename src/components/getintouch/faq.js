"use client";
import React, { useState } from "react";
import items from "@/data";
import initTranslations from "@/i18n";
import { useTranslation } from "react-i18next";

const faq = ({ locale }) => {
  const {t} = useTranslation('contact',{lng:locale});
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleShow = (index) => {
    setActiveIndex(index);
  };
  const handleHide = (e) => {
    e.stopPropagation();
    setActiveIndex(null);
  };
  return (
    <div className="bg-[#1B2A4166] pt-[2rem] pb-[3rem] mt-[2rem] lg:mt-[7rem]">
      <div className="w-[90%] mx-auto">
        <p className="font-semibold text-[18px] lg:text-[32px] text-white text-center">
          {t("Frequently Asked Questions")}
        </p>
        <p className="text-[10px] lg:text-[16px] text-[#CCC9DC] font-normal max-w-[90%] sm:max-w-[70%] lg:w-[704px] mt-[1rem] text-center mx-auto leading-3 lg:leading-[19.36px]">
          {t(
        "Have questions or feedback? We'd love to hear from you! Contact us today to learn more about LifeCom Radio."
      )}
        </p>
        <div className="flex flex-col gap-[0.5rem] lg:gap-[1rem] mt-[1rem] lg:mt-[4rem]">
          {items.map((data, index) => {
            const { title, content } = data;
            return (
              <div
                className="w-full bg-[#162132B2] py-[0.75rem] lg:py-[1.5rem] px-[1.5rem] lg:px-[3rem] rounded-t-[8px] cursor-pointer"
                key={index}
                onClick={() => handleShow(index)}>
                <div className="h-full flex flex-row justify-between items-center">
                  <p className="text-white font-semibold text-[10px] lg:text-[16px]">
                    {title}
                  </p>
                  <div
                    className="lg:w-[24px] lg:h-[24px] w-4 h-4 rounded-full bg-[#324A5F] flex items-center justify-center cursor-pointer"
                    onClick={(e) => handleHide(e)}>
                    <img
                      src="/images/getintouch/caret.png"
                      className={`${
                        activeIndex === index && "-rotate-[180deg]"
                      }`}
                    />
                  </div>
                </div>
                {activeIndex === index && (
                  <p className="lg:mt-[1rem] mt-[0.5rem] text-[10px] lg:text-[14px] text-[#CCC9DC] font-normal">
                    {content}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default faq;