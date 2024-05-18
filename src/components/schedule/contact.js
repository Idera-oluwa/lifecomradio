import React from "react";

const contact = () => {
  return (
    <div className="w-[100%] h-[80px] bg-[#081A27]">
      <div className="px-4 md:w-[80%] flex flex-row justify-between mx-auto items-center h-full">
        <div className="flex flex-row gap-[0.5rem] items-center">
          <img
            src="/images/schedule/phone-blue.png"
            alt=""
            className="w-[11px] lg:w-[21.76px] h-[11px] lg:h-[21.76px]"
          />
          <p className="text-[15px] font-medium text-[#CCC9DC] md:block hidden">
            Call us
          </p>
          <a target="_blank" href="tel:+443333397371">
            <p className="text-[10px] lg:text-[14px] font-semibold text-[#F5F5F5]">
              09033065500
            </p>
          </a>
        </div>
        <div className="flex flex-row gap-[0.5rem] items-center">
          <img
            src="/images/schedule/email.png"
            alt=""
            className="w-[13px] h-[9.5px] lg:w-[29.33px] lg:h-[22px]"
          />
          <p className="text-[10px] lg:text-[15px] md:block hidden font-medium text-[#CCC9DC]">
            Send a message
          </p>
          <a target="_blank" href="sms:+443333397371">
            <p className="text-[10px] lg:text-[14px] font-semibold text-[#F5F5F5]">
              9033065500
            </p>
          </a>
        </div>
        <div className="flex flex-row gap-[0.5rem]">
          <a
            href="https://www.facebook.com/Lifecomfm.co.uk/"
            target="_blank"
            rel="noreferrer">
            <img
              src="/images/home/facebook.svg"
              alt=""
              className="w-[17px] h-[17px] lg:w-auto lg:h-auto"
            />
          </a>
          <img
            src="/images/home/twitter.svg"
            alt=""
            className="w-[17px] h-[17px] lg:w-auto lg:h-auto"
          />
          <a
            href="https://www.instagram.com/lifecom_radioandtelevision/"
            target="_blank"
            rel="noreferrer">
            <img
              src="/images/home/instagram.svg"
              alt=""
              className="w-[17px] h-[17px] lg:w-auto lg:h-auto"
            />
          </a>
          <img
            src="/images/home/linkedin.svg"
            alt=""
            className="w-[17px] h-[17px] lg:w-auto lg:h-auto cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default contact;
