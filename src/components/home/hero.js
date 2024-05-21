import React from 'react'
import Link from "next/link";
import initTranslations from '@/i18n';

const hero = async ({locale}) => {
  const { t } = await initTranslations(locale,['home']);
  return (
    <div className='w-[90vw] h-[calc(100vh-17rem)] mx-auto py-[1rem] flex justify-between mt-[3rem]'>
      <div className='w-[40%] mt-[6rem]'>
       <p className='font-normal text-[18px] leading-[24px] text-white'>{t('Transforming Lives Through')}</p>
       <h1 className='font-bold text-[40px] leading-[58px] text-white mt-[0.4rem]'>{t('Sound and Spirit')}</h1>
       <p className='font-normal text-[16px] leading-[19.36px] text-[#CCC9DC] mt-[1rem] w-[491px]'>{t('Discover a world of inspiration and connection at LifeCom Radio, where the power of music and spoken word converges to uplift your spirit and deepen your faith journey.')}</p>
       <Link href="/onair"><div className={`bg-[#324A5F] ${locale === 'fr' ?'w-[207px]' :'w-[167px]'} h-[40px] rounded-[4px] flex flex-row justify-center items-center mt-[1.5rem] cursor-pointer gap-[0.5rem] hover:bg-[#1B2A41] transition-all ease-out duration-500`}>
        <p className='font-medium text-[15px] text-white leading-[18px]'>{t('Start Listening')}</p>
        <img src='/images/home/play.svg' alt=''/>
        </div></Link>
      </div>
      <img src='/images/home/afro3.png' alt='' className=''/>
    </div>
  )
}

export default hero
