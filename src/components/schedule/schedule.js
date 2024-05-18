import React from "react";

const schedule = () => {
  return (
    <div className="w-[90vw] mx-auto mt-[6rem] mb-16 md:mb-0">
      <h4 className="font-bold text-[20px] text-white leading-[24px] mt-[4rem]">
        Schedule
      </h4>
      <div className="flex flex-col gap-[2rem] md:gap-[4rem] mt-[3rem]">
        <div className="flex flex-row gap-[1rem] md:gap-[2rem] items-center">
          <img
            src="/images/schedule/morning-show.png"
            alt=""
            className="w-[139px] h-[113px] md:w-[304px] md:h-[206px] object-cover"
          />
          <div className="flex flex-col gap-[0.7rem]">
            <p className="font-semibold text-[14px] md:text-[18px] text-[#F5F5F5]">
              The Morning Show
            </p>
            <p className="font-medium text-[10px] md:text-[16px] text-[#CCC9DC] md:w-[511px]">
              Start your day with a spiritual dose of God’s word and uplifting
              music
            </p>
            <div className="bg-[#1B2A4180] rounded-[4px] flex items-center justify-center w-[64px] h-[35px] md:w-[88px] md:h-[64px]">
              <p className="text-[10px] md:text-[14px] font-semibold text-white">
                6:00AM
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[1rem] md:gap-[2rem] items-center">
          <img
            src="/images/schedule/news10.png"
            alt=""
            className="w-[139px] h-[113px] md:w-[304px] md:h-[206px] object-cover"
          />
          <div className="flex flex-col gap-[0.7rem]">
            <p className="font-semibold text-[14px] md:text-[18px] text-[#F5F5F5]">
              The News @ Ten
            </p>
            <p className="font-medium text-[10px] md:text-[16px] text-[#CCC9DC] md:w-[511px]">
              Start your day with a spiritual dose of God’s word and uplifting
              music
            </p>
            <div className="flex gap-2 items-center">
              <div className="bg-[#1B2A4180] rounded-[4px] flex items-center justify-center w-[64px] h-[35px] md:w-[88px] md:h-[64px]">
                <p className="text-[10px] md:text-[14px] font-semibold text-white">
                  10:00AM
                </p>
              </div>
              <div className="bg-[#851800] rounded-[4px] flex items-center justify-center w-[64px] h-[35px] md:w-[88px] md:h-[64px]">
                <p className="text-[10px] md:text-[14px] font-semibold text-white">
                  10:00AM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[1rem] md:gap-[2rem] items-center">
          <img
            src="/images/schedule/morning-show.png"
            alt=""
            className="w-[139px] h-[113px] md:w-[304px] md:h-[206px] object-cover"
          />
          <div className="flex flex-col gap-[0.7rem]">
            <p className="font-semibold text-[14px] md:text-[18px] text-[#F5F5F5]">
              The Night Show
            </p>
            <p className="font-medium text-[10px] md:text-[16px] text-[#CCC9DC] md:w-[511px]">
              Enjoy soothing music and inspirational contents every night.
            </p>
            <div className="bg-[#1B2A4180] rounded-[4px] flex items-center justify-center w-[64px] h-[35px] md:w-[88px] md:h-[64px]">
              <p className="text-[10px] md:text-[14px] font-semibold text-white">
                00:00AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default schedule;
