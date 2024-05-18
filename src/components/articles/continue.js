"use client";
import React, { useState } from "react";
import { useGlobalContext, AppContext } from "@/context/context";
import Link from "next/link";
import moment from "moment";

const Continue = () => {
  const { articles } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
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
  const itemsPerPage = 2;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Slice items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);

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
    <div className="w-[90vw] mx-auto mt-[5rem] md:mt-[8rem]">
      <p className="font-semibold text-white text-[13px] md:text-[20px] leading-[14.52px] md:leading-[24px]">
        Articles
      </p>
      <div className="flex flex-col md:gap-[5rem] md:mt-[5rem]">
        {currentItems.map((article) => {
          return (
            <div
              key={article.id}
              className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between mt-[3rem] w-full items-start relative">
              <div className="flex flex-row items-center gap-[0.7rem]">
                <img
                  src="/images/explore/explore-happy.svg"
                  alt=""
                  className="lg:w-[51px] w-[30px] h-[30px] lg:h-[51px]"
                />
                <p className="font-semibold text-white text-[10px] leading-3 lg:text-[16px] lg:leading-[19px]">
                  {article && article.author.name}
                </p>
                <img src="/images/explore/bluetick.svg" alt="" className="w-[13px] h-[13px] md:w-[28px] md:h-[28px]"/>
              </div>
              <div className="flex flex-row gap-0 lg:gap-[1.5rem]">
                <div className="relative w-[40px]  lg:hidden">
                  <img
                    src={article?.coverImage?.url}
                    alt=""
                    className="max-w-full h-[177px] lg:h-[419px] w-full object-cover object"
                  />
                </div>
                <div className="bg-[#1B2A4180] lg:w-[414px] h-[177px] lg:h-[419px] rounded-[10px] p-[13px] py-[18px] lg:py-0 lg:px-[2rem] flex flex-col lg:justify-center mr-[8px] lg:mr-0">
                  <h3 className="text-white text-[14px] leading-4 lg:text-[24px] font-semibold lg:leading-[29px] capitalize lg:w-[304px]">
                    {article && article.title}
                  </h3>
                  <p className="font-medium text-[10px] leading-3 lg:text-[14px] text-[#F5F5F5] lg:w-[246px] lg:leading-[17px] mt-[10px] lg:mt-[1rem]">
                    {article && article.description}
                  </p>
                  <div className="flex flex-row gap-[0.25rem] lg:gap-[0.5rem] mt-[13px] lg:mt-[1rem]">
                    <p className="text-[#CCC9DC] text-[10px] lg:text-[12px] font-medium leading-[10px] lg:leading-[14.5px]">
                      {moment(article.createdAt).format("MMM DD, YYYY")}
                    </p>
                    <img src="/images/explore/dot.svg" alt="" />
                    <p className="text-[#CCC9DC] leading-[10px] lg:text-[12px] font-medium text-[10px] lg:leading-[14.5px]">
                      {article && article.readingTime} min read
                    </p>
                  </div>
                  <div className="flex md:flex-col flex-row-reverse gap-3 justify-end items-center md:items-start">
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
                    src={article.coverImage?.url}
                    alt=""
                    className="w-full h-[177px] lg:h-[419px] object-cover"
                  />
                  <div className="absolute w-[40px] h-[40px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] rounded-full top-0 bottom-0 right-0 my-auto mr-[1.3rem] items-center justify-center cursor-pointer hidden">
                    <img
                      src="/images/explore/caret.svg"
                      alt=""
                      onClick={() => sliderRef.current?.slideNext()}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row gap-[0.5rem] mb-16 lg:mb-0 mx-auto justify-center">
        <div
          className={`${
            currentPage !== totalPages ?  "w-[70px] md:w-[117px]" : "w-[70px] md:w-[152px]"
          } h-[33px] md:h-[43px] ${
            currentPage === totalPages ? "bg-[#1B2A41]" : "bg-transparent"
          } rounded-[10px] flex flex-row justify-center items-center mt-[3rem] md:mt-[6rem] gap-[0.3rem] md:gap-[0.5rem] cursor-pointer ${
            currentPage === 1 ? "hidden" : "flex"
          }`}
          onClick={prevPage}>
          {currentPage === totalPages && (
            <img src="/images/news/caret1.svg" alt="" className="md:w-[10px] md:h-[15px] w-[5px] h-[7px]"/>
          )}
          <p className="text-[10px] md:text-[18px] text-white font-medium leading-[22px]">
            Previous
          </p>
        </div>
        <div
          className={`${
            currentPage !== totalPages ? "w-[60px] md:w-[117px]" : "w-auto"
          } h-[33px] md:h-[43px] ${
            currentPage === totalPages ? "bg-transparent" : "bg-[#1B2A41]"
          }  rounded-[10px] flex flex-row justify-center items-center mt-[3rem] md:mt-[6rem] gap-[0.3rem] md:gap-[0.5rem] cursor-pointer `}
          onClick={nextPage}
          disabled={currentPage === totalPages}>
          <p className="text-[10px] md:text-[18px] text-white font-semibold leading-[22px]">
            {currentPage !== totalPages ? "Next" : "Back to Explore"}
          </p>
          {currentPage !== totalPages && (
            <img src="/images/news/caret2.svg" alt="" className="md:w-[10px] md:h-[15px] w-[5px] h-[7px]"/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Continue;
