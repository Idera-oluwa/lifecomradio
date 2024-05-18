import React from "react";

const recent = () => {
  return (
    <div className="w-[90vw] mx-auto">
      <h4 className="font-bold text-[20px] text-white leading-[24px] mt-[4rem]">
        Recently played music
      </h4>
      <div className="lg:grid flex flex-wrap  lg:grid-cols-fluid mt-[2rem] gap-4 lg:gap-[2rem]">
        <img
          src="/images/schedule/recent1.png"
          alt=""
          className=" lg:w-auto lg:h-auto w-[97px] h-[97px]"
        />
        <img
          src="/images/schedule/recent2.png"
          alt=""
          className="w-[97px] h-[97px] lg:w-auto lg:h-auto"
        />
        <img
          src="/images/schedule/recent3.png"
          alt=""
          className="w-[97px] h-[97px] lg:w-auto lg:h-auto"
        />
        <img
          src="/images/schedule/recent4.png"
          alt=""
          className="hidden lg:block w-[117px] h-[117px] lg:w-auto lg:h-auto"
        />
      </div>
    </div>
  );
};

export default recent;