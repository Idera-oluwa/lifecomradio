import React from 'react'
import Link from "next/link";

const global = () => {
  return (
    <div className='mt-[5rem] relative flex flex-col items-center w-[90vw] mx-auto text-center'>
        <p className='text-[40px] font-semibold text-[#ffffff11] absolute top-0 left-0 right-0 mx-auto text-center'>Global News</p>
        <p className='font-medium text-[12px] text-white mt-[1.5rem]'>GLOBAL NEWS</p>
        <div className='flex flex-row items-end'>
            <img src='/images/home/global-news.png' alt='' className='w-[38px] h-[38px]'/>
            <p className='text-[20px] font-semibold text-white mt-[1rem] ml-[-2rem]'>Stay Informed on the Latest Happenings Globally</p>
        </div>
        <p className='font-normal text-[12px] text-[#CCC9DC] mt-[0.5rem]'>Our blog/news section serves as a hub for insightful articles, uplifting stories, and timely updates that enrich your faith journey and deepen your connection with our station.</p>
        <Link href="/explore"> <button className='bg-[#1B2A41] w-[116px] h-[37px] rounded-[4px] flex justify-center items-center font-medium text-[14px] text-white mt-[2rem]'>Learn More</button></Link>
    </div>
  )
}

export default global