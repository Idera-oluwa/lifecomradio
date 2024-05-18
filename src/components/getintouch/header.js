import React from "react";
import initTranslations from "@/i18n";
import { useTranslation } from "react-i18next";

const header = ({ locale }) => {
   const {t} = useTranslation('contact',{lng:locale});
  return (
    <div className="w-[90vw] mx-auto mt-[2rem] lg:mt-[6rem]">
      {/* <img
        src="/images/explore/arrowback.png"
        alt=""
        className="ml-[5vw] md:hidden"
        onClick={goBack}
      /> */}
      <div className="w-[90%] mx-auto mt-[0rem] lg:mt-[5rem] flex flex-row justify-between items-center lg:items-start">
        <div className="flex flex-row mt-[0.5rem] lg:gap-[1rem] items-center lg:items-start">
          <p className="font-normal text-[20px] leading-6 lg:text-[40px] lg:leading-[58px] text-white">
            {t("Contact")}
          </p>
          <img
            src="/images/getintouch/getintouch.png"
            alt=""
            className="lg:w-[49px] w-[17px] h-[17px] lg:h-[50px] ml-[ 0.5rem] lg:mt-[-0.5rem]"
          />
        </div>
        <div className="flex flex-row gap-[0.5rem]">
          <a
            href="https://www.facebook.com/Lifecomfm.co.uk/"
            target="_blank"
            rel="noreferrer">
            {" "}
            <img
              src="/images/home/facebook.svg"
              alt=""
              className="cursor-pointer lg:w-[30px] lg:h-[30px] w-[17px] h-[17px]"
            />{" "}
          </a>
          <img
            src="/images/home/twitter.svg"
            alt=""
            className="cursor-pointer  lg:w-[30px] lg:h-[30px] w-[17px] h-[17px]"
          />
          <a
            href="https://www.instagram.com/lifecom_radioandtelevision/"
            target="_blank"
            rel="noreferrer">
            <img
              src="/images/home/instagram.svg"
              alt=""
              className="cursor-pointer  lg:w-[30px] lg:h-[30px] w-[17px] h-[17px]"
            />
          </a>
          <img
            src="/images/home/linkedin.svg"
            alt=""
            className="cursor-pointer  lg:w-[30px] lg:h-[30px] w-[17px] h-[17px]"
          />
        </div>
      </div>
      <div className="w-full bg-[#1B2A41] h-[2px] md:h-[5px] mt-4 lg:mt-[3rem] rounded-[10px]"></div>
      <div className="w-[90%] mx-auto">
        <p className="font-semibold text-[12px] lg:text-[18px] text-white mt-6 lg:mt-[4rem]">
          {t("Connect With Us")}
        </p>
        <p className="font-normal text-[10px] mt-[0.5rem] lg:text-[16px] text-[#CCC9DC] lg:mt-[1rem]">
          {t(
            "Have questions or feedback? We'd love to hear from you! Contact us today to learn more about LifeCom Radio and how you can be a part of our community"
          )}
        </p>
        <div className="mt-[2rem] lg:mt-[7rem] lg:hidden">
          <p className="font-semibold text-[12px] lg:text-[18px] text-white">
            {t("Email")}
          </p>
          <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] mt-4 lg:mt-[2rem]">
            Airtime:{" "}
            <a target="_blank" href="mailto:airtime@lifecomradio.org.uk">
              airtime@lifecomradio.org.uk
            </a>{" "}
          </p>
          <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] mt-[0.7rem]">
            {t("General Enquiries:")}{" "}
            <a target="_blank" href="mailto:enquiries@lifecomradio.org.uk">
              enquiries@lifecomradio.org.uk
            </a>{" "}
          </p>
          <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] mt-[0.7rem]">
            {t("Advert Placements:")}{" "}
            <a target="_blank" href="mailto:adverts@lifecomradio.org.uk">
              adverts@lifecomradio.org.uk
            </a>{" "}
          </p>
          <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] mt-[0.7rem]">
            {" "}
            {t("Partnership opportunites: ")}{" "}
            <a target="_blank" href="mailto:partnership@lifecomradio.org.uk">
              partnership@lifecomradio.org.uk
            </a>{" "}
          </p>
        </div>
        <div className="flex flex-row mt-[3rem] lg:mt-[8rem] justify-between md:justify-normal">
          <div className="md:w-[50%]">
            <p className="font-semibold text-[12px] lg:text-[18px] text-white">
              {t("Call Us")}
            </p>
            <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] lg:mt-[2rem] mt-4">
              Whatsapp:{" "}
              <a target="_blank" href="https://wa.me/+447436439241">
                07436439241
              </a>
            </p>
            <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] mt-[0.7rem]">
              {t("Technical Support:")}
              <a target="_blank" href="tel:+443333397371">
                +44 3333397371{" "}
              </a>
            </p>
          </div>
          <div className="md:w-[50%]">
            <div className="flex flex-row gap-[0.3rem] md:gap-[0.5rem] items-center md:items-end">
              <img
                src="/images/getintouch/location.png"
                alt=""
                className="lg:h-[22px] lg:w-[14.19px] w-[8px] h-[11.3px]"
              />
              <p className="font-semibold text-[12px] lg:text-[18px] text-white">
                {t("Office Address")}
              </p>
            </div>
            <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] lg:mt-[2rem] mt-4 ml-[0.7rem]">
              Gravesend Kent
            </p>
            <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] mt-[0.7rem] ml-[0.7rem]">
              {t("Technical Support:")}{" "}
              <a target="_blank" href="tel:+443333397371">
                +44 3333397371{" "}
              </a>
            </p>
            <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] mt-[0.7rem] ml-[0.7rem]">
              {" "}
              DA11 0PS
            </p>
          </div>
        </div>
        <div className="mt-[2rem] lg:mt-[7rem] hidden lg:block">
          <p className="font-semibold text-[12px] lg:text-[18px] text-white">
            {t("Email")}
          </p>
          <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] mt-4 lg:mt-[2rem]">
            Airtime:{" "}
            <a target="_blank" href="mailto:airtime@lifecomradio.org.uk">
              airtime@lifecomradio.org.uk
            </a>{" "}
          </p>
          <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] mt-[0.7rem]">
            {t("General Enquiries:")}{" "}
            <a target="_blank" href="mailto:enquiries@lifecomradio.org.uk">
              enquiries@lifecomradio.org.uk
            </a>{" "}
          </p>
          <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] mt-[0.7rem]">
            {t("Advert Placements:")}{" "}
            <a target="_blank" href="mailto:adverts@lifecomradio.org.uk">
              adverts@lifecomradio.org.uk
            </a>{" "}
          </p>
          <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] mt-[0.7rem]">
            {" "}
            {t("Partnership opportunites: ")}{" "}
            <a target="_blank" href="mailto:partnership@lifecomradio.org.uk">
              partnership@lifecomradio.org.uk
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default header;