import React from 'react'

const socials = () => {
  return (
    <div className='mt-[5rem] h-[229px] relative flex flex-col justify-center items-center'>
        <img src='/images/home/socials.png' className='absolute h-full -z-20'/>
        <div>
            <p className='font-semibold text-[24px] leading-[29px] text-center text-white w-[258px]'>Follow us on Social Media</p>
            <p className='font-normal text-white text-[14px] leading-[17px] text-center mt-[0.5rem]'>@LifeComRadioKentUK</p>
            <div className='flex flex-row gap-[0.5rem] justify-center mt-[0.6rem]'>
       <a
            href="https://www.facebook.com/Lifecomfm.co.uk/"
            target="_blank"
            rel="noreferrer"
          > <img src='/images/home/facebook.svg' alt='' className='cursor-pointer w-[30px] h-[30px]'/> </a>
            <img src='/images/home/twitter.svg' alt='' className='cursor-pointer w-[30px] h-[30px]'/>
            <a
            href="https://www.instagram.com/lifecom_radioandtelevision/"
            target="_blank"
            rel="noreferrer"
          ><img src='/images/home/instagram.svg' alt='' className='cursor-pointer w-[30px] h-[30px]'/></a>
            <img src='/images/home/linkedin.svg' alt='' className='cursor-pointer w-[30px] h-[30px]'/>
            </div>
        </div>
    </div>
  )
}

export default socials