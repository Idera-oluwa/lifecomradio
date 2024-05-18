import React from 'react'
import initTranslations from '@/i18n';
import { useTranslation } from 'react-i18next';

const heroFooter = ({locale}) => {
   const {t} = useTranslation('home',{lng:locale});
  return (
    <div className='bg-[#081A27] flex flex-row py-[0.6rem] justify-center items-center gap-[10%] px-[5vw] md:hidden'>
      <div className='flex flex-row items-center'>
        <img src='/images/home/logo.svg' className='w-[27px] h-[27px]'/>
        <p className='font-medium text-[12px] text-white leading-[19px] ml-[1rem]'>87.7 KentUK</p>
      </div>
      <div className='flex flex-row items-center'>
        <img src='/images/home/headset.svg' className='w-[23px] h-[22px]'/>
        <p className='font-medium text-[12px] text-white leading-[19px] ml-[1rem]'>100K+</p>
        <p className='font-medium text-[10px] text-[#CCC9DC] leading-[17px] ml-[0.4rem]'>{t('LISTENERS')}</p>
      </div>
    </div>
  )
}

export default heroFooter
