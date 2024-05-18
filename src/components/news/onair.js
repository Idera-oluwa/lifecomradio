import React from 'react'
import Link from "next/link";

const onAir = () => {
  return (
    <div className='bg-[#081A27] h-[80px] relative flex flex-row justify-around items-center mt-[1rem] md:mt-[3rem]'>
        <div className='flex flex-row items-center gap-[0.9rem] '>
         <img src='/images/explore/explore-happy.svg' alt='' className='w-[29.47px] h-[29.47px] md:w-[77px] md:h-[77px]'/>
         <div className=''>
            <p className='font-medium text-[10px] md:text-[14px] text-[#CCC9DC] leading-[17px]'>Happy Akpeyi</p>
            <p className='font-semibold text-white text-[10px] md:text-[16px] leading-[19px]'>News @ 10</p>
         </div>
        </div>
        <div className='bg-[#851800] w-[49px] h-[27px] md:w-[106px] md:h-[46px] rounded-[4px] flex justify-center items-center'>
            <p className='text-white font-semibold text-[10px] md:text-[15px] leading-[18px]'>on AIR</p>
        </div>
        <Link href="/onair"><div className='bg-gradient-to-b from-[#03294A] to-[#57718869] w-[60px] h-[27px] md:w-[106px] md:h-[46px] rounded-[4px] flex justify-center items-center'>
            <p className='text-white font-semibold text-[10px] md:text-[15px] leading-[18px]'>Listen</p>
        </div></Link>
    </div>
  )
}

export default onAir