import React from 'react'

const download = () => {
  return (
    <div className='md:hidden mt-[5rem] bg-gradient-to-r from-[#091C32] to-[#122330] py-[3rem] relative'>
        <img src='/images/home/play-big.png' alt='' className='absolute top-0 bottom-0 my-auto'/>
        <img src='/images/home/apple-big.png' alt='' className='absolute right-0 top-0 bottom-0 my-auto'/>
        <div className='flex flex-col items-center'>
            <p className='font-bold text-[20px] text-white w-[257px] text-center leading-[24.2px]'>Download our Mobile App and Enjoy More Features</p>
            <p className='text-white font-normal text-[12px] leading-[14.5px] w-[310px] mt-[0.5rem] text-center'>You can get our mobile app on the Google and Apple app stores.</p>
            <div className='flex flex-row gap-[0.5rem] mt-[1.5rem]'>
            <a href='https://play.google.com/store/apps/details?id=com.lifecomradio.station'><div className='flex flex-row gap-[0.5rem] bg-[#1B2A41] w-[137px] h-[45px] justify-center items-center'>
          <img src='/images/home/play-logo.svg' alt='' className='w-[17px] h-[19px]'/>
          <div>
            <p className='text-[10px] text-white font-normal leading-[12px] '>Download on</p>
            <p className='text-[12px] text-white font-semibold leading-[14.5px] '>PLAY STORE</p>
          </div>
        </div> </a>
        <div className='flex flex-row gap-[0.5rem] bg-[#1B2A41] w-[137px] h-[45px] justify-center items-center'>
          <img src='/images/home/apple-logo.svg' alt='' className='w-[23px] h-[23px]'/>
          <div>
            <p className='text-[10px] text-white font-normal leading-[12px] '>Get it on the</p>
            <p className='text-[12px] text-white font-semibold leading-[14.5px] '>APP STORE</p>
          </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default download