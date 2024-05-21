import React from 'react'
import initTranslations from '@/i18n';
import Link from "next/link";

const onair = async ({locale}) => {
    const { t } = await initTranslations(locale,['home']);
  return (
    <div className='mt-[1rem]'>
        <img src='/images/home/onair-sm.png' alt='' className='h-[213px] w-full'/>
        <img src='/images/home/scribble.png' alt=''  className='w-full mt-[1.5rem] h-[116px]'/>
        <div className='bg-[#032558BF] mt-[1rem] text-center py-[2rem] px-[10vw] items-center'>
            <h1 className='text-[20px] font-bold text-[white] leading-[24px]'>{t('Listen to live radio shows and podcasts from your favorite hosts')}</h1>
     <p className='text-[#CCC9DC] text-[12px] leading-[14.5px] font-normal mt-[0.8rem]'>{t('Discover a world of inspiration and connection')}</p>
     <Link href="/onair"><div className={`bg-[#324A5F] ${locale === 'fr' ?'w-[207px]' :'w-[167px]'} h-[40px] rounded-[4px] flex flex-row justify-center items-center mt-[1.5rem] cursor-pointer gap-[0.5rem] hover:bg-[#1B2A41] transition-all ease-out duration-500 mx-auto`}>
        <p className='font-medium text-[15px] text-white leading-[18px]'>{t('Start Listening')}</p>
        <img src='/images/home/play.svg' alt=''/>
        </div></Link>
        </div>
    </div>
  )
}

export default onair