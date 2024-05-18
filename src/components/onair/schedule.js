"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const schedule = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  
  return (
    <div className='w-[90vw] mx-auto mt-[3rem] md:mt-[6rem]'>
      <img src='/images/explore/arrowback.png' alt='' className='md:hidden' onClick={goBack}/>
         <h4 className='font-bold text-[12px] md:text-[24px] text-white leading-[24px] mt-[2rem] md:mt-[4rem]'>Schedule</h4>
         <p className='font-semibold text-[10px] md:text-[20px] text-white mt-[1rem] md:mt-[5rem]'>19th Monday 2024</p>
         <div className='flex flex-col gap-[2rem] md:gap-[4rem] mt-[2rem] md:mt-[3rem]'>
          <div className='flex flex-row gap-[1rem] md:gap-[2rem] items-center'>
            <img src='/images/schedule/morning-show.png' alt='' className='w-[139px] h-[113px] md:w-[304px] md:h-[206px]'/>
            <div className='flex flex-col gap-[0.7rem]'>
              <p className='font-semibold text-[14px] md:text-[18px] text-[#F5F5F5]'>The Morning Show</p>
              <p className='font-medium text-[10px] md:text-[16px] text-[#CCC9DC] md:w-[511px]'>Start your day with a spiritual dose of God’s word and uplifting music</p>
              <div className='bg-[#1B2A4180] rounded-[4px] flex items-center justify-center w-[64px] h-[35px] md:w-[88px] md:h-[64px]'>
                <p className='text-[10px] md:text-[14px] font-semibold text-white'>6:00AM</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-[1rem] md:gap-[2rem] items-center'>
            <img src='/images/schedule/news10.png' alt='' className='w-[139px] h-[113px] md:w-[304px] md:h-[206px]'/>
            <div className='flex flex-col gap-[0.7rem]'>
              <p className='font-semibold text-[14px] md:text-[18px] text-[#F5F5F5]'>The Morning Show</p>
              <p className='font-medium text-[10px] md:text-[16px] text-[#CCC9DC] md:w-[511px]'>Start your day with a spiritual dose of God’s word and uplifting music</p>
              <div className='flex flex-row items-center gap-[1rem]'>
              <div className='bg-[#1B2A4180] rounded-[4px] flex items-center justify-center w-[64px] h-[35px] md:w-[88px] md:h-[64px]'>
                <p className='text-[10px] md:text-[14px] font-semibold text-white'>10:00AM</p>
              </div>
              <div className='bg-[#851800] w-[64px] h-[35px]  md:w-[106px] md:h-[46px] rounded-[4px] flex justify-center items-center'>
            <p className='text-white font-semibold text-[12px] md:text-[15px] leading-[18px]'>on AIR</p>
        </div>
        </div>
            </div>
          </div>
          <div className='flex flex-row gap-[1rem] md:gap-[2rem] items-center'>
            <img src='/images/schedule/morning-show.png' alt='' className='w-[139px] h-[113px] md:w-[304px] md:h-[206px]'/>
            <div className='flex flex-col gap-[0.7rem]'>
              <p className='font-semibold text-[14px] md:text-[18px] text-[#F5F5F5]'>The Morning Show</p>
              <p className='font-medium text-[10px] md:text-[16px] text-[#CCC9DC] md:w-[511px]'>Start your day with a spiritual dose of God’s word and uplifting music</p>
              <div className='bg-[#1B2A4180] rounded-[4px] flex items-center justify-center w-[64px] h-[35px] md:w-[88px] md:h-[64px]'>
                <p className='text-[10px] md:text-[14px] font-semibold text-white'>6:00AM</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-[1rem] md:gap-[2rem] items-center'>
            <img src='/images/schedule/news10.png' alt='' className='w-[139px] h-[113px] md:w-[304px] md:h-[206px]'/>
            <div className='flex flex-col gap-[0.7rem]'>
              <p className='font-semibold text-[14px] md:text-[18px] text-[#F5F5F5]'>The Morning Show</p>
              <p className='font-medium text-[10px] md:text-[16px] text-[#CCC9DC] md:w-[511px]'>Start your day with a spiritual dose of God’s word and uplifting music</p>
              <div className='bg-[#1B2A4180] rounded-[4px] flex items-center justify-center w-[64px] h-[35px] md:w-[88px] md:h-[64px]'>
                <p className='text-[10px] md:text-[14px] font-semibold text-white'>6:00AM</p>
              </div>
            </div>
          </div>
         </div>
    </div>
  )
}

export default schedule