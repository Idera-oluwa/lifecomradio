import React from 'react'
import Link from "next/link";
import initTranslations from '@/i18n';
import { useTranslation } from 'react-i18next';


const about = ({locale}) => {
  const {t:h} = useTranslation('home',{lng:locale});
  const { t } = useTranslation('about',{lng:locale});
  return (
    <div className='w-[90vw] mx-auto md:mt-[5rem] relative'>
      <img src='/images/about/aboutmic.png' alt='' className='md:hidden absolute right-0 mr-[-1.2rem] bottom-0 mb-[3.5rem]'/>
        <div className='w-[80vw] mx-auto mt-[5rem] flex flex-row justify-between items-center'>
           <p className='font-normal text-[20px] md:text-[40px] leading-[58px] text-white'>{t('About Us')}</p>
           <Link href="/onair"><div className={`bg-[#324A5F] ${locale === 'fr' ?'w-[207px]' :'w-[167px]'} h-[40px] rounded-[4px] hidden md:flex flex-row justify-center items-center cursor-pointer gap-[0.5rem] hover:bg-[#1B2A41] transition-all ease-out duration-500`}>
        <p className='font-medium text-[15px] text-white leading-[18px]'>{h('Start Listening')}</p>
        <img src='/images/home/play.svg' alt=''/>
        </div></Link>
        <div className='w-[60px] h-[27px] bg-[#324A5F] rounded-[4px] md:hidden flex flex-row justify-center items-center cursor-pointer gap-[0.5rem] hover:bg-[#1B2A41] transition-all ease-out duration-500`'>
          <p className='text-white text-[10px] font-semibold leading-[12px]'>Listen</p>
        </div>
        </div>
        <div className='w-full bg-[#1B2A41] h-[2px] md:h-[5px] mt-[1rem] md:mt-[3rem] rounded-[10px]'></div>
        <div className='flex flex-row gap-[3rem] md:gap-0 md:justify-between w-[80vw] mx-auto mt-[4rem]'>
          <div >
           <p className='font-medium text-white text-[12px] md:text-[20px] leading-[14.52px] md:leading-[24px]'>{t('Our Values')}</p>
           <p className='font-normal text-[10px] md:text-[14px] text-[#CCC9DC] leading-[12.1px] mt-[1.3rem] md:mt-[2rem] md:leading-[22px]'>{t('Faith')}</p>
           <p className='font-normal text-[10px] md:text-[14px] text-[#CCC9DC] mt-[0.7rem] md:mt-[0.5rem] leading-[12.1px] md:leading-[22px]'>{t('Integrity')}</p>
           <p className='font-normal text-[10px] md:text-[14px] text-[#CCC9DC] mt-[0.7rem] md:mt-[0.5rem] leading-[12.1px] md:leading-[22px]'>{t('Compassion')}</p>
          </div>
          <div >
           <p className='font-medium text-white text-[12px] md:text-[20px] leading-[14.52px] md:leading-[24px]'>{t('What we offer')}</p>
           <p className='font-normal text-[10px] md:text-[14px] text-[#CCC9DC] mt-[1.3rem] md:mt-[2rem] leading-[12.1px] md:leading-[22px]'>{t('Engaging Contents')}</p>
           <p className='font-normal text-[10px] md:text-[14px] text-[#CCC9DC] mt-[0.7rem] md:mt-[0.5rem] leading-[12.1px] md:leading-[22px]'>{t('Professional Excellence')}</p>
           <p className='font-normal text-[10px] md:text-[14px] text-[#CCC9DC] mt-[0.7rem] md:mt-[0.5rem] leading-[12.1px] md:leading-[22px]'>{t('Community Connections')}</p>
          </div>
          <div className='hidden md:block'>
           <p className='font-medium text-white text-[20px] leading-[24px]'>{t('Get Involved')}</p>
           <p className='font-normal text-[14px] text-[#CCC9DC] mt-[2rem] leading-[22px] w-[505px]'>{t("Are you passionate about spreading the message of faith and hope? Join us in our mission to transform lives through the power of Christian media. Whether you're interested in becoming a volunteer, contributing content, or supporting our work financially, there are many ways to get involved and make a difference at LifeCom Radio")}</p>
           </div>
        </div>
        <div className='md:hidden w-[80vw] mx-auto mt-[4rem]'>
           <p className='font-medium text-white text-[12px] leading-[14.52px] md:leading-[24px]'>{t('Get Involved')}</p>
           <p className='font-normal text-[10px] text-[#CCC9DC] mt-[1rem] md:mt-[2rem] leading-[22px] w-full'>{t("Are you passionate about spreading the message of faith and hope? Join us in our mission to transform lives through the power of Christian media. Whether you're interested in becoming a volunteer, contributing content, or supporting our work financially, there are many ways to get involved and make a difference at LifeCom Radio")}</p>
           </div>
    </div>
  )
}

export default about