import React from 'react'
import Link from "next/link";

const popular = ({text,posts}) => {
 
  return (
    <div className='mt-[2rem] md:mt-[8rem] pt-[1.5rem] pb-[1rem]'>
     <div className='w-[90vw] mx-auto'>
     <h4 className='font-bold text-[12px] md:text-[24px] text-white leading-[29px]'>{text}</h4>
     <div className='flex flex-row mt-[2rem] gap-[1rem] md:gap-[2rem] justify-between overflow-x-scroll container'>
      {posts.map((post)=>{
          const {coverImage, title, slug, author, id} = post;
        return(
          <Link href={`/explore/podcasts/${slug}`} key={id}>
          <div className='w-[136.48px] md:w-[290px] md:bg-[#324A5F33] md:p-[1.5rem]' key={id}>
          <div className='relative podcast-container'>
          <img src={coverImage?.url} alt='' className='w-full h-[131px] md:h-[239px]'/>
          <img src='/images/podcasts/frame 405.png' alt='' className='absolute bottom-0 top-0 left-0 right-0 m-auto w-[15px] h-[15px] md:w-[47.85px] md:h-[47.85px] opacity-0 play-container transition-all ease-in-out duration-500'/>
          </div>
        <div className='flex flex-row items-end md:items-center justify-between mt-[1.5rem]'>
        <div className='flex flex-col'>
        <p className='font-semibold text-white text-[12px] md:text-[16px] leading-[19.36px]'>{title}</p>
        <p className='font-medium text-[#CCC9DC] text-[10px] md:text-[14px] leading-[17px]'>{author?.name}</p>
        </div>
        <img src='/images/home/logo.svg' alt='' className='cursor-pointer w-[13px] h-[13px] md:w-[41px] md:h-[41px]'/>
        </div>
        </div>
        </Link>
        )
      })}
    
     </div>
     </div>
    </div>
  )
}

export default popular
