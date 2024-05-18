import React from 'react'

const popular = () => {
  return (
    <div className='bg-[#324A5F33] mt-[8rem] pt-[1.5rem] pb-[1rem]'>
     <div className='w-[90vw] mx-auto'>
     <h4 className='font-bold text-[24px] text-white leading-[29px]'>Popular</h4>
     <div className='grid grid-cols-fluid mt-[1rem] gap-[1rem]'>
      <div className=' w-[280px]'>
        <div className='w-[280px] relative'>
        <img src='/images/home/pop1.svg' alt='' className='w-full'/>
        <img src='/images/home/logo.svg' alt='' className='absolute right-0 bottom-0 mr-[0.5rem] mb-[0.5rem] w-[41px] h-[41px]'/>
        </div>
      <div className='flex flex-row items-center justify-between mt-[1rem]'>
      <div className='flex flex-col'>
      <p className='font-semibold text-white text-[16px] leading-[19.36px]'>The What’s Next Podcast</p>
      <p className='font-medium text-[#CCC9DC] text-[14px] leading-[17px]'>Happy Akpeyi</p>
      </div>
      <img src='/images/home/playbtn1.svg' alt='' className='cursor-pointer'/>
      </div>
      </div>
      <div className=' w-[280px]'>
        <div className='w-[280px] relative'>
        <img src='/images/home/pop2.svg' alt='' className='w-full'/>
        <img src='/images/home/logo.svg' alt='' className='absolute right-0 bottom-0 mr-[0.5rem] mb-[0.5rem] w-[41px] h-[41px]'/>
        </div>
      <div className='flex flex-row items-center justify-between mt-[1rem]'>
      <div className='flex flex-col'>
      <p className='font-semibold text-white text-[16px] leading-[19.36px]'>Faithfully</p>
      <p className='font-medium text-[#CCC9DC] text-[14px] leading-[17px]'>Marilyn Munroe</p>
      </div>
      <img src='/images/home/playbtn1.svg' alt='' className='cursor-pointer'/>
      </div>
      </div>
      <div className=' w-[280px]'>
        <div className='w-[280px] relative'>
        <img src='/images/home/pop3.svg' alt='' className='w-full'/>
        <img src='/images/home/logo.svg' alt='' className='absolute right-0 bottom-0 mr-[0.5rem] mb-[0.5rem] w-[41px] h-[41px]'/>
        </div>
      <div className='flex flex-row items-center justify-between mt-[1rem]'>
      <div className='flex flex-col'>
      <p className='font-semibold text-white text-[16px] leading-[19.36px]'>In His Presence</p>
      <p className='font-medium text-[#CCC9DC] text-[14px] leading-[17px]'>Happy Akpeyi</p>
      </div>
      <img src='/images/home/playbtn1.svg' alt='' className='cursor-pointer'/>
      </div>
      </div>
      <div className=' w-[280px]'>
        <div className='w-[280px] relative'>
        <img src='/images/home/pop4.svg' alt='' className='w-full'/>
        <img src='/images/home/logo.svg' alt='' className='absolute right-0 bottom-0 mr-[0.5rem] mb-[0.5rem] w-[41px] h-[41px]'/>
        </div>
      <div className='flex flex-row items-center justify-between mt-[1rem]'>
      <div className='flex flex-col'>
      <p className='font-semibold text-white text-[16px] leading-[19.36px]'>Your Maker Podcast</p>
      <p className='font-medium text-[#CCC9DC] text-[14px] leading-[17px]'>Hannah Montague</p>
      </div>
      <img src='/images/home/playbtn1.svg' alt='' className='cursor-pointer'/>
      </div>
      </div>
     </div>
     </div>
    </div>
  )
}

export default popular
