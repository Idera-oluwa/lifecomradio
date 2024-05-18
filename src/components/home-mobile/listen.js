"use client"
import Link from "next/link";

import React, {useState, useEffect} from 'react'

const listen = () => {
    const [radioInfo, setRadioInfo] = useState({})

    async function RadioData() {
        const response = await fetch("https://lifecom-proxyserver.onrender.com/api");
        const data = await response.json();
        setRadioInfo(data)
      }
    
      useEffect(()=>{
        RadioData()
      },[radioInfo])
  return (
    <div className={`bg-[#1B21297A] w-[100%] relative transition-all ease-out duration-500 px-[5vw] pb-[1rem]`}>
        {/* <img src='/images/schedule/mp3.png' alt='' className='absolute right-0 bottom-0 mb-[4rem] mr-[2rem]'/> */}
    <div className=' mx-auto pt-[2rem] flex flex-row items-center justify-center gap-[0.5rem]'>
    <img src='/images/explore/explore-happy.svg' alt='' className='w-[26.94px] h-[26.94px]'/>
    <div className='bg-[#851800] w-[61px] h-[27px] rounded-[4px] flex justify-center items-center'>
            <p className='text-white font-semibold text-[15px] leading-[18px]'>on AIR</p>
        </div>
    </div>
    <div className='mt-[5rem] flex flex-row justify-between'>
    <div className='flex flex-row gap-[0.7rem] items-center mt-[1rem]'>
    <Link href="/onair"> <div className='bg-transparent border-[#324A5F] border w-[20px] h-[20px] rounded-full flex items-center justify-center cursor-pointer'> 
     <img src='/images/home/play.svg' alt='' className='w-[5.79px] h-[7.15px]'/>
     </div></Link>
     <div className=''>
            <p className='font-medium text-[10px] text-[#CCC9DC] leading-[12.1px]'>ON AIR NOW</p>
            <p className='font-semibold text-white text-[12px] leading-[14.5px] mt-[0.2rem]'>{radioInfo?.album ? radioInfo.album:"Nil"}</p>
         </div>
    </div>
    <img src='/images/schedule/mp3.png' alt='' className=''/> 
    </div>
    {/* <div className='flex flex-row absolute left-0 bottom-0 mb-[6rem] ml-[20%] gap-[3rem] items-center'>
     <div className='bg-transparent border-[#324A5F] border-4 w-[55px] h-[55px] rounded-full flex items-center justify-center cursor-pointer'> 
     <img src='/images/home/play.svg' alt='' className='w-[17.69px] h-[21.79px]'/>
     </div>
     <div className=''>
            <p className='font-medium text-[14px] text-[#CCC9DC] leading-[17px]'>ON AIR NOW</p>
            <p className='font-semibold text-white text-[16px] leading-[19px] mt-[0.5rem]'>{radioInfo?.album ? radioInfo.album:"Nil"}</p>
         </div>
    </div> */}
    </div>
  )
}

export default listen