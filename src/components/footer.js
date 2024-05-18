"use client"
import React,{useState} from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import initTranslations from '@/i18n';
import { useRouter } from "next/router";
import { useTranslation } from 'react-i18next';

const Footer = ({locale}) => {
  const {t} = useTranslation('subscribe',{lng:locale});
  const pathname = usePathname();
  const pathnamee=locale==="en"?pathname:pathname.substring(3)

  const [text1, setText1] = useState(t('Subscribe to get more info'))
  const [text2, setText2] = useState(t("At LifeCom Radio, we believe in providing more than just music and podcasts; we're dedicated to fostering a vibrant community of learning and growth."))
  const [text3, setText3] = useState(t('Email address'))
  const [text4, setText4] = useState(t('Home'))
  const [text5, setText5] = useState(t('Explore'))
  const [text6, setText6] = useState(t('Schedule'))
  const [text7, setText7] = useState(t('About us'))
  const [text8, setText8] = useState(t('Contact'))
  return (
    <div className='hidden md:block mt-[12rem] bg-[#09172E] w-full pt-[3rem]'>
        <div className='w-[90vw] mx-auto flex flex-row justify-between pb-[4rem]'>
         <div>
            <img src='/images/home/logo.svg' alt='' className='w-[96px] h-[96px]'/>
            <div className='flex flex-row gap-[0.5rem] mt-[2rem]'>
            <a
            href="https://www.facebook.com/Lifecomfm.co.uk/"
            target="_blank"
            rel="noreferrer"
          ><img src='/images/home/facebook.svg' alt=''/></a>
            <img src='/images/home/twitter.svg' alt=''/>
            <a
            href="https://www.instagram.com/lifecom_radioandtelevision/"
            target="_blank"
            rel="noreferrer"
          ><img src='/images/home/instagram.svg' alt=''/></a>
            <img src='/images/home/linkedin.svg' alt=''/>
            </div>
         </div>
         <div>
         <ul className='flex flex-row gap-[1.5rem] items-center'>
      <Link href="/"><li className={`font-normal text-[16px] leading-[19px] cursor-pointer hover:text-[#145C9B] ${pathname==="/" || pathname.length===3
                  ? "text-[#145C9B]"
                  : "bg-transparent text-white "}
      `}>{text4}</li></Link>
      <Link href="/explore"><li className={`font-normal text-[16px] leading-[19px] cursor-pointer hover:text-[#145C9B]
               ${pathname.startsWith("/explore")
                  ? "text-[#145C9B]"
                  : "bg-transparent text-white "}`}>{text5}</li></Link>
      <Link href="/schedule"><li className={`font-normal text-[16px] leading-[19px] cursor-pointer  hover:text-[#145C9B] ${pathname === "/schedule"
                  ? "text-[#145C9B]"
                  : "bg-transparent text-white "}`}>{text6}</li></Link>
      <Link href="/about"><li className={`font-normal text-[16px] leading-[19px] cursor-pointer  hover:text-[#145C9B] ${pathname === "/about"
                  ? "text-[#145C9B]"
                  : "bg-transparent text-white "}`}>{text7}</li></Link>
         <Link href="/get-in-touch"><li className={`font-normal text-[16px] leading-[19px] cursor-pointer  hover:text-[#145C9B] ${pathname === "/get-in-touch"
                  ? "text-[#145C9B]"
                  : "bg-transparent text-white "}`}>{text8}</li></Link>
      </ul>
      <p className='text-[#CCC9DC] font-normal text-[14px] leading-[17px] mt-[2rem] w-[449px]'>{text2}</p>
         </div>
         <div className=''>
            <p className='font-bold text-[16px] text-[#CCC9DC] leading-[19px]'>{t('Subscribe to get more info')}</p>
            <form 
            action="https://formspree.io/f/xgegqzod"
            method="POST"          
            className='flex flex-row mt-[1rem]'>
                <input type='text' name='email' placeholder={text3} className='w-[290px] h-[51px] outline outline-[2px] outline-[#324A5F] text-[12px] font-medium text-[#CCC9DC] leading-[14px] bg-transparent px-[1rem] rounded-[4px]'/>
                <button type="submit" className='bg-[#324A5F] w-[72px] h-[55px] flex items-center justify-center ml-[1rem] rounded-[4px] cursor-pointer mt-[-0.1rem]'>
                 <img src='/images/home/subs-btn.svg' alt=''/>
                </button>
            </form>
         </div>
        </div>
        <div className='w-full h-[1.5px] bg-[#324A5F]'></div>
        <div className='w-[90vw] mx-auto p-[0.5rem] flex justify-between'>
         <div className='flex flex-row text-[#CCC9DC] text-[14px] font-medium leading-[17px] gap-[0.2rem]'>
          <p>@lifecomradio.co.uk </p>
          <p>|</p>
          <p>www.lifecomradio.co.uk</p>
         </div>
         <div className='flex flex-row text-[#CCC9DC] text-[14px] font-medium leading-[17px] gap-[0.2rem]'>
          <p>Privacy Policy </p>
          <p>|</p>
          <p>Terms & Conditions</p>
         </div>
        </div>
    </div>
  )
}

export default Footer