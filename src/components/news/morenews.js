"use client"
import React, {useState} from 'react'
import Link from "next/link";
import {useGlobalContext,AppContext} from '@/context/context';

const MoreNews = () => {
  const { blogs} = useGlobalContext()
  const news = blogs.reverse()
 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Slice items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page navigation
  const nextPage = () => {
    if (currentPage !==totalPages){
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
    <div className='w-[90vw] mx-auto mt-[4rem] md:mt-[8rem]'>
    <p className='font-semibold text-white text-[12px] md:text-[20px] leading-[24px] mb-[-2rem]'>Continue reading</p>
    <div className="mt-[4rem] lg:flex grid grid-cols-2 md:grid-cols-3  lg:flex-col  gap-[0.7rem] sm:gap-5 md:gap-6 lg:gap-[4rem] w-full">
    {currentItems.map((news)=>{
      const {slug, title, id,coverImage} = news;
      return(
      <div className="flex flex-col lg:flex-row mt-[2rem] md:mt-0 gap-[10px] md:gap-[16px]  lg:gap-[4rem] items-center" key={id}>
     <img src={coverImage.url} className="w-full lg:w-auto" alt="" />
              <div className="flex flex-col justify-center items-center lg:items-start gap-[10px] md:gap-[16px] lg:gap-[1.5rem]">
     <p className='hidden md:block font-normal text-[12px] text-white leading-[14.5px]'>GLOBAL NEWS</p>
     <p className="font-medium text-[10px] text-center lg:text-left leading-3 lg:text-[24px] lg:leading-[29px] text-[#F5F5F5] lg:w-[509px] w-[90%]">
                  {title.substring(0, 60) + "..."}
                </p>
                <Link href={`/explore/news/${slug}`} prefetch={false}>
                  <p className=" font-medium text-[10px] leading-3 lg:font-semibold text-[#114A7D] lg:text-[14px] lg:leading-[17px] cursor-pointer">
                    Read more
                  </p>
                </Link>

     </div>
     </div>
      )
    })}
    </div>
    <div className='hidden md:flex flex-row gap-[0.5rem] mx-auto justify-center'>
    <div className={`${currentPage !== totalPages? 'w-[117px]' : 'w-[152px]'} h-[43px] ${currentPage === totalPages? 'bg-[#1B2A41]': 'bg-transparent' } rounded-[10px] flex flex-row justify-center items-center mt-[6rem] gap-[0.5rem] cursor-pointer ${currentPage === 1? 'hidden' : 'flex'}`}  onClick={prevPage}>
    {currentPage === totalPages && <img src='/images/news/caret1.svg' alt=''/>}
      <p className='text-[18px] text-white font-medium leading-[22px]'>Previous</p>
    </div>
    <div className={`${currentPage !== totalPages? 'w-[117px]' : 'w-auto'} h-[43px] ${currentPage === totalPages? 'bg-transparent': 'bg-[#1B2A41]' }  rounded-[10px] flex flex-row justify-center items-center mt-[6rem] gap-[0.5rem] cursor-pointer `} onClick={nextPage} disabled={currentPage === totalPages}>
      <p className='text-[18px] text-white font-semibold leading-[22px]'>{currentPage !== totalPages? 'Next' : 'Back to Explore'}</p>
      {currentPage !== totalPages && <img src='/images/news/caret2.svg' alt=''/>}
    </div>
    </div>
    <div className="flex flex-row gap-[0.5rem] mx-auto justify-center mb-[3rem] md:hidden">
        <div
          className={` w-[19px] h-[19px]  rounded-[50%] flex flex-row justify-center items-center mt-[1rem] bg-[#1B2A41] gap-[0.5rem] cursor-pointer ${
            currentPage === 1 ? "hidden" : "flex"
          }`}
          onClick={prevPage}
        >
          <img src="/images/explore/caret2left.png" alt="" />{" "}
        </div>
        <div
          className={` h-[19px]  w-[19px] rounded-[50%] flex flex-row justify-center items-center mt-[1rem] bg-[#1B2A41] gap-[0.5rem] cursor-pointer ${
            currentPage === totalPages && "hidden"
          }`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <img src="/images/explore/caret2right.png" alt="" />{" "}
        </div>
      </div>
   
    </div>
  )
}

export default MoreNews