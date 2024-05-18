"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import initTranslations from "@/i18n";
import { useTranslation } from 'react-i18next';

const footersm = ({locale}) => {
  const {t} = useTranslation('home',{lng:locale});
  const pathname = usePathname();

  const pathnamee = pathname.substring(3);
const text = '@LifeComRadioKentUKfm'
  return (
    <div className='bg-[#09172E] w-full pt-[2rem] relative md:hidden px-[5vw]'>
        <img src='/images/home/radio.png' alt='' className='absolute top-0 left-0 right-0 mx-auto'/>
        <p className='text-white font-semibold text-[14px]'>Quick Links</p>
        <div className='flex flex-row justify-between mt-[2rem]'>
        <ul className="md:hidden flex flex-col gap-[0.13rem] items-left">
        <Link href="/" locale={locale}>
          <li
            className={`font-medium text-[10px] leading-[19px] cursor-pointer hover:text-[#145C9B] ${
              pathnamee === "/" || pathname.length === 3
                ? "text-[#145C9B]"
                : "bg-transparent text-white "
            }
      `}
          >
            {t("Home")}
          </li>
        </Link>
        <Link href="/explore" locale={locale}>
          <li
            className={`font-medium text-[10px] leading-[19px] cursor-pointer hover:text-[#145C9B]
               ${
                 pathnamee.startsWith("/explore")
                   ? "text-[#145C9B]"
                   : "bg-transparent text-white "
               }`}
          >
            {t("Explore")}
          </li>
        </Link>
        <Link href="/schedule" locale={locale}>
        <li
            className={`font-medium text-[10px] leading-[19px] cursor-pointer  hover:text-[#145C9B] ${
              pathnamee === "/schedule"
                ? "text-[#145C9B]"
                : "bg-transparent text-white "
            }`}
          >
            {t("Schedule")}
          </li>
        </Link>
        <Link href="/about" locale={locale}>
          <li
            className={`font-medium text-[10px] leading-[19px] cursor-pointer  hover:text-[#145C9B] ${
              pathnamee === "/about"
                ? "text-[#145C9B]"
                : "bg-transparent text-white "
            }`}
          >
            {t("About us")}
          </li>
        </Link>
        <Link href="/get-in-touch" locale={locale}>
          <li
            className={`font-medium text-[10px] leading-[19px] cursor-pointer  hover:text-[#145C9B] ${
              pathnamee === "/get-in-touch"
                ? "text-[#145C9B]"
                : "bg-transparent text-white "
            }`}
          >
            {t("Contact")}
          </li>
        </Link>
      </ul>
      <div className='mt-[0.5rem]'>
      <div className='flex flex-row gap-[0.3rem] items-end'>
      <img src='/images/getintouch/location.png' alt='' className='h-[11.3px] w-[8px] mb-[4px]'/>
      <p className='font-medium text-[12px] text-white'>Office Address</p>
      </div>
      <p className='font-normal text-[10px] text-[#CCC9DC] mt-0.5rem] ml-[0.7rem] leading-[19px]'>22 Cutmore Street </p>
     <p className='font-normal text-[10px] text-[#CCC9DC] mt-[0.3rem] ml-[0.7rem] leading-[19px]'>Gravesend Kent</p>
     <p className='font-normal text-[10px] text-[#CCC9DC] mt-[0.3rem] ml-[0.7rem] leading-[19px]'> DA11 0PS</p>
     </div>
     <div className="flex flex-row gap-[0.2rem]">
     <div className='flex flex-col gap-[0.5rem]'>
       <a
            href="https://www.facebook.com/Lifecomfm.co.uk/"
            target="_blank"
            rel="noreferrer"
          > <img src='/images/home/facebook.svg' alt='' className='cursor-pointer w-[20px] h-[20px]'/> </a>
            <img src='/images/home/twitter.svg' alt='' className='cursor-pointer w-[20px] h-[20px]'/>
            <a
            href="https://www.instagram.com/lifecom_radioandtelevision/"
            target="_blank"
            rel="noreferrer"
          ><img src='/images/home/instagram.svg' alt='' className='cursor-pointer w-[20px] h-[20px]'/></a>
            <img src='/images/home/linkedin.svg' alt='' className='cursor-pointer w-[20px] h-[20px]'/>
            </div>
     </div>
    </div>
    <div className='w-[90vw] mx-auto p-[0.5rem] flex justify-between mt-[4rem]'>
         <div className='flex flex-row text-[#CCC9DC] text-[10px] font-normal leading-[17px] gap-[0.2rem]'>
          <p>@lifecomradio.co.uk </p>
         </div>
         <div className='flex flex-row text-[#CCC9DC] text-[10px] font-normal leading-[17px] gap-[0.2rem]'>
          <p>Privacy Policy </p>
          <p>|</p>
          <p>Terms & Conditions</p>
         </div>
        </div>
        </div>
  )
}

export default footersm