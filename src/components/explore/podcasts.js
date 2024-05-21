"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useGlobalContext, AppContext } from "@/context/context";

const podcasts = () => {
  const { podcasts } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const featuredPodcasts = podcasts.slice(0,5);
  const [itemsPerPage, setItemsPerPage] = useState(2); 
  const totalPages = Math.ceil(featuredPodcasts.length / itemsPerPage);
  
  const updateItemsPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) { 
      setItemsPerPage(1);
    // } else if (screenWidth >= 1024) { 
    //   setItemsPerPage(7);
    } else { 
      setItemsPerPage(2);
  };
  } 
const num = Math.max(featuredPodcasts.length - 2, 0);

  const paginate  = new Array(num).fill()

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = featuredPodcasts.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page navigation
  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="w-[90vw] mx-auto mt-[4rem] md:mt-[6rem]">
      <div className="flex flex-row items-center justify-between">
        <p className="font-semibold text-white text-[12px] leading-4 lg:text-[20px] lg:leading-[24px]">
          The Worship Podcast
        </p>
        <p className="font-medium text-white text-[14px] leading-[17px] hidden md:block">
          Explore
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-4 lg:gap-0 lg:flex-nowrap mt-[1rem] justify-between">
        {currentItems.map((podcast) => {
          const { description, slug, id, coverImage } = podcast;
          return (
            <div
              className="relative w-full lg:w-[48%] h-[220px] md:h-[367px] items-container"
              key={id}
            >
              <Link href={`/explore/podcasts/${slug}`}>
                <img
                  src="/images/explore/podcast-img.svg"
                  alt=""
                  className="w-full absolute z-[-10] h-full object-cover rounded-[8px]"
                />
                <div className="w-full h-full absolute bg-gradient-to-r from-[#1111114D] to-[#0521552c] z-[-5]"></div>
                <div className="absolute w-full h-full bg-black opacity-0 click-container transition-all ease-in-out duration-500"></div>
                <img
                  src="/images/podcasts/frame 405.png"
                  alt=""
                  className="absolute bottom-0 right-0 mr-[7%] mb-[2rem] opacity-0 play-container transition-all ease-in-out duration-500"
                />
                <div className="flex flex-row justify-between px-[2%] md:px-[5%] mt-[300px] items-center absolute z-[10] bottom-0 w-full mb-[1rem] md:mb-[2rem]  gap-2 md:gap-[50px]">
                  <p className="text-white text-[10px] leading-3 lg:w-[454px] font-medium lg:text-[14px] lg:leading-[17px]">
                    {description}
                  </p>
                  <img
                    src="/images/explore/worship.svg"
                    className="w-[35px] h-[35px] lg:w-auto lg:h-auto"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="md:hidden flex flex-row gap-[0.5rem] mx-auto justify-center items-center">
        <div
          className={` w-[19px] h-[19px]  rounded-[50%] flex flex-row justify-center items-center mt-[1rem] gap-[0.5rem] cursor-pointer ${
            currentPage === 1 ? " bg-[#3c3e42]" : " bg-[#1B2A41]"
          }`}
          onClick={prevPage}
        >
          <img src="/images/explore/arrow-left.svg" alt="" />{" "}
        </div>
        <div className="flex flex-row gap-[0.5rem] items-center mt-[1rem]">
          {paginate.map((item, index)=>{
            return (
              <div key={index} className="w-[5px] h-[5px] bg-[#D9D9D9] rounded-full currentPage ==="></div>
            )
          })}
        </div>
        <div
          className={` h-[19px]  w-[19px] rounded-[50%] flex flex-row justify-center items-center mt-[1rem] bg-[#1B2A41] gap-[0.5rem] cursor-pointer ${
            currentPage === totalPages ? "bg-[#3c3e42]": "bg-[#1B2A41]"
          }`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <img src="/images/explore/arrow-right.svg" alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default podcasts;
