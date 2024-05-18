import React from 'react'
import Link from "next/link";
import initTranslations from '@/i18n';
import { useTranslation } from 'react-i18next';


const herosm = ({locale}) => {
   const {t} = useTranslation('home',{lng:locale});
  return (
    <div className='w-[80vw] mx-auto py-[1rem] flex flex-col items-center mt-[1rem] text-center'>
     <p className='font-normal text-[10px] leading-[24px] text-white'>{t('Transforming Lives Through')}</p>
     <h1 className='font-semibold text-[24px] text-white mt-[0.4rem]'>{t('Sound and Spirit')}</h1>
     <p className='font-normal text-[12px] text-[#CCC9DC] mt-[0.5rem]'>{t('Discover a world of inspiration and connection at LifeCom Radio, where the power of music and spoken word converges to uplift your spirit and deepen your faith journey.')}</p>
    </div>
  )
}

export default herosm