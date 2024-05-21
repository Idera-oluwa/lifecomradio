import React from 'react'
import Link from "next/link";
import initTranslations from '@/i18n';

const team = async ({locale}) => {
  const { t } = await initTranslations(locale,['about']);
  const { t:h } = await initTranslations(locale,['home']);
  return (
    <div className='w-[80vw] mx-auto flex flex-col md:flex-row justify-between mt-[5rem] md:mt-[15rem] mb-[-3rem]'>
     <div className='flex flex-col items-center md:items-start'>
        <div className='flex flex-row gap-[0.1rem] md:gap-[1rem] items-end'>
          <p className='text-white text-[12px] md:text-[28px] font-semibold'>{t('Meet the Team')}</p>
          <img src='/images/about/golden-mic.png' alt='' className='md:w-[61px] md:h-[61px] w-[28px] h-[28px]'/>
        </div>
        <p className='w-[90%] text-center md:text-left md:w-[297px] font-normal text-white text-[10px] md:text-[16px] leading-[12.1px] md:leading-[22.3px] mt-[0.5rem] md:mt-[1.2rem]'>{t('Get to know the individuals dedicated to making LifeCom radio an uplifting and entertaining radio station.')}</p>
        <Link href="/about"><button className='bg-[#1B2A41] w-[116px] h-[37px] rounded-[4px] hidden md:flex justify-center items-center font-medium text-[14px] text-white mt-[2.5rem]'>{h('Learn More')}</button></Link>
     </div>
     <div className='flex flex-row gap-[1rem] mt-[2rem] md:mt-0'>
      <div className='w-[153px] md:bg-[#292E35] h-[208px] rounded-[4px]'>
        <img src='/images/about/team1.png' alt=''/>
       <div className='py-[0.5rem] flex flex-col items-center'>
       <p className='text-white text-[10px] md:text-[12px] font-semibold'>Andrew Lawrence</p>
        <p className='text-white text-[10px] md:text-[12px] font-normal'>{t('Presenter')}</p>
       </div>
      </div>
      <div className='w-[153px] md:bg-[#292E35] h-[208px] rounded-[4px]'>
        <img src='/images/about/team2.png' alt=''/>
       <div className='py-[0.5rem] flex flex-col items-center'>
       <p className='text-white text-[10px] md:text-[12px] font-semibold'>J. Smooth</p>
        <p className='text-white text-[10px] md:text-[12px] font-normal'>{t('Presenter')}</p>
       </div>
      </div>
      <div className='w-[153px] md:bg-[#292E35] h-[208px] rounded-[4px]'>
        <img src='/images/about/team3.png' alt=''/>
       <div className='py-[0.5rem] flex flex-col items-center'>
       <p className='text-white text-[10px] md:text-[12px] font-semibold'>Anita . A. A</p>
        <p className='text-white text-[10px] md:text-[12px] font-normal'>{t('Product Lead')}</p>
       </div>
      </div>
      <div className='w-[153px] md:bg-[#292E35] h-[208px] rounded-[4px] hidden md:block'>
        <img src='/images/about/team1.png' alt=''/>
       <div className='py-[0.5rem] flex flex-col items-center'>
       <p className='text-white text-[10px] md:text-[12px] font-semibold'>Timothy Luca</p>
        <p className='text-white text-[10px] md:text-[12px] font-normal'>{t('Engineer')}</p>
       </div>
      </div>
     </div>
    </div>
  )
}

export default team