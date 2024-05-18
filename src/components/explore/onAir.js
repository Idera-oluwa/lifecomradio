import React from "react";
import Link from "next/link";

const onAir = () => {
  return (
    <div className="bg-[#081A27] h-[80px] w-full px-[5%]  lg:max-w-full relative flex flex-row justify-between lg:justify-around items-center">
      <div className="flex flex-row items-center gap-[0.9rem] mt-[-0.8rem]">
        <img
          src="/images/explore/explore-happy.svg"
          alt=""
          className="lg:absolute relative top-0 lg:mt-[-1rem] w-[30px] h-[30px] lg:w-auto lg:h-auto"
        />
        <div className="lg:ml-[90px]">
          <p className="font-medium lg:text-[14px] leading-3 text-[10px] text-[#CCC9DC] lg:leading-[17px]">
            Happy Akpeyi
          </p>
          <p className="font-semibold text-white lg:text-[16px] leading-3 text-[10px] lg:leading-[19px] mt-[0.3rem]">
            News @ 10
          </p>
        </div>
      </div>
      <div className="bg-[#851800] w-[49px] lg:w-[106px] h-[27px] lg:h-[46px] rounded-[4px] flex justify-center items-center mt-[-0.8rem]">
        <p className="text-white font-semibold text-[10px] leading-3 lg:text-[15px] lg:leading-[18px]">
          on AIR
        </p>
      </div>
      <Link href="/onair">
        <div className="bg-gradient-to-b from-[#03294A] to-[#57718869] w-[60px] lg:w-[106px] h-[27px] lg:h-[46px] rounded-[4px] flex justify-center items-center mt-[-0.8rem] cursor-pointer">
          <p className="text-white font-semibold text-[10px] leading-3 lg:text-[15px] lg:leading-[18px]">
            Listen
          </p>
        </div>
      </Link>
    </div>
  );
};

export default onAir;
