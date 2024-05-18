import React from "react";
import initTranslations from "@/i18n";
import { useTranslation } from "react-i18next";

const form = ({ locale }) => {
   const {t} = useTranslation('contact',{lng:locale});
  return (
    <div className="mt-[4rem] lg:mt-[13rem] w-[90%] mx-auto flex flex-col gap-8 md:flex-row justify-between items-center">
      <div className="w-full lg:w-[50%]">
        <p className="text-[14px] lg:text-[32px] font-medium text-white px-4 max-w-full w-[360px] leading-[24px] lg:leading-[38.7px] lg:text-left text-center">
          {t("We Value Your")}{" "}
          <span className="font-normal text-[#1562A6]">{t("Feedback")}</span>
        </p>
        <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] lg:leading-[17px] leading-[12px] text-center lg:text-left max-w-full px-4 lg:w-[416px] mt-2 lg:mt-[1rem]">
          {t(
            "Have a specific question or message for us? Fill out the form below, and a member of our team will get back to you as soon as possible"
          )}
        </p>
      </div>
      <form 
  action="https://formspree.io/f/mayrkbqo"
  method="POST" className="w-full lg:w-[50%] bg-[#d3d3d30e] lg:h-[460px] rounded-[4px] shadow-sm  p-[0.5rem] lg:p-[2rem]">
        <input
          type="text"
          name="email"
          placeholder="Email address"
          className="w-full h-[32px] lg:h-[51px] bg-[#03345F1F] border-[1.3px] border-[#03345F] outline-none rounded-[4px] p-[0.5rem] lg:p-[1rem] text-white font-medium text-[10px] lg:text-[14px]"
        />
        <textarea
          name="message"
          placeholder={t("Type your message here...")}
          className="w-full h-[175px] lg:h-[222px] bg-[#03345F1F] border-[1.3px] border-[#03345F] outline-none rounded-[4px] p-[0.5rem] lg:p-[1rem] text-white font-medium mt-[0.5rem] lg:mt-[1rem] text-[10px] lg:text-[14px] resize-none"
        />
        <button type='submit' className="w-full h-[40px] lg:h-[67px] bg-[#03345F] mt-[0.5rem] lg:mt-[1rem] rounded-[4px] flex justify-center items-center font-semibold text-white text-[10px] lg:text-[16px]">
          {t("Submit")}
        </button>
      </form>
    </div>
  );
};

export default form;