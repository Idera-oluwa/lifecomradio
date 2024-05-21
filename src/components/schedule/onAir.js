"use client";
import React, { useEffect, useState } from "react";
import ReactHowler from "react-howler";

const onAir = () => {
  const [playing, setPlaying] = useState(false);
  const [radioInfo, setRadioInfo] = useState({});
  const url = 'https://fastcast4u.com/player/lifecomradio/'
  const togglePlay = () => {
    setPlaying(!playing);
  };
  const handleOnPlay = () => {
    setPlaying(true);
  };
  async function RadioData() {
    const response = await fetch(
      "https://lifecom-proxyserver.onrender.com/api"
    );
    const data = await response.json();
    setRadioInfo(data);
  }

  useEffect(() => {
    RadioData();
  }, [radioInfo]);

  console.log(radioInfo)

  return (
    <div
      className={`${
        playing ? "bg-onAir-bg2" : "bg-onAir-bg"
      } bg-cover bg-no-repeat w-[100%] h-[350px] md:h-[552px] relative transition-all ease-out duration-500`}>
      <ReactHowler
        src="https://eu9.fastcast4u.com/proxy/lifecomradio/stream"
        html5={true}
        playing={playing}
        onPlay={handleOnPlay}
      />
      <img src={radioInfo?.image} alt="" className="w-[106px] h-[108px] absolute top-0 mt-[90px] left-0 right-0 mx-auto"/>
      <img
        src={`${
          playing ? "/images/schedule/onair2.png" : "/images/schedule/onair.png"
        }`}
        alt=""
        className="absolute w-[110px] h-[113px] lg:w-auto lg:h-auto right-0 bottom-0  mb-[2rem] mr-[10%] md:mr-[6rem]"
      />

      <div className="flex flex-row absolute left-0 bottom-0 mb-[4rem] ml-[10%] md:ml-[20%] gap-4 md:gap-[3rem] items-center">
        <div
          className="bg-transparent border-[#324A5F] border-4 w-[32px] h-[32px] lg:w-[55px] lg:h-[55px] rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => togglePlay()}>
          <img
            src={
              playing ? "/images/podcasts/pause.png" : "/images/home/play.svg"
            }
            alt=""
            className={`${
              playing
                ? "w-[10px] h-[12.5px] lg:w-[22px] lg:h-[22px]"
                : "w-[10px] h-[12.5px] lg:w-[17.69px] lgh-[21.79px]"
            }`}
          />
        </div>
        <div className="">
          <p className="font-medium text-[10px] leading-3 md:text-[14px] text-[#CCC9DC] lg:leading-[17px]">
            ON AIR NOW
          </p>
          <p className="font-semibold text-white text-[12px] lg:text-[16px] leading-3 lg:leading-[19px] mt-[0.5rem]">
            {radioInfo?.album ? radioInfo.album : "Nil"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default onAir;
