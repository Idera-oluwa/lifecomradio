import React, {useState, useEffect} from 'react'
import Link from "next/link";
import initTranslations from '@/i18n';
import {useRouter} from 'next/router';
import { useTranslation } from 'react-i18next';

const BreakingNews =  ({locale}) => {
  const {t} = useTranslation('home',{lng:locale});
  const [isRotated, setIsRotated] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  // const [text1, setText1] = useState(t('GLOBAL NEWS'))
  // const [text2, setText2] = useState(t('Stay Informed on the latest happenings globally'))
  // const [text3, setText3] = useState(t('Our blog/news section serves as a hub for insightful articles, uplifting stories, and timely updates that enrich your faith journey and deepen your connection with our station.'))
  // const [text4, setText4] = useState(t('Learn More'))
  
  return (
    <div className='relative w-[100%] overflow-hidden'>
      <div className='w-[88vw] mx-auto mt-[19rem] flex flex-row items-center justify-between '>
      <img src={`${isRotated?'/images/home/world-hover.png' : '/images/home/world-default.png'}`} alt='' className={`absolute right-0 w-[535.17px] h-[522.64px] mr-[-5%]  ${isRotated? "-rotate-[250deg]" : "-rotate-[60deg]"} z-[10] transition-all ease-in-out duration-700`}/>
      <div className={`w-[50%] h-[415px] ${isHovered? 'bg-breaking-bg' : 'bg-breaking-bg2'} bg-no-repeat bg-cover transition-all ease-out duration-500`} onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
      </div>
       <div className='z-[100]' onMouseEnter={() => setIsRotated(true)}
        onMouseLeave={() => setIsRotated(false)}>
        <p className='text-[#CCC9DC] font-bold text-[14px] leading-[17px]'>{t("GLOBAL NEWS")}</p>
       <h1 className='font-bold text-[28px] leading-[34px] text-white w-[360px] mt-[2rem]'>{t("Stay Informed on the latest happenings globally")}</h1>
        <p className='font-normal text-[14px] text-white leading-[17px] mt-[2rem] w-[384px]'>{t("Our blog/news section serves as a hub for insightful articles, uplifting stories, and timely updates that enrich your faith journey and deepen your connection with our station.")}</p>
        <Link href="/explore"> <button className='bg-[#1B2A41] w-[116px] h-[37px] rounded-[4px] flex justify-center items-center font-medium text-[14px] text-white mt-[2rem]'>{t("Learn More")}</button></Link>
       </div>
    </div>
    </div>
    
  )

}

export default BreakingNews
