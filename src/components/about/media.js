import React from 'react'
import initTranslations from '@/i18n';

const media = async ({locale}) => {
  const { t } = await initTranslations(locale,['about']);
  const { t:h } = await initTranslations(locale,['home']);
  return (
    <div className='relative'>
      <img src='/images/about/about-mic.png' alt='' className='hidden md:block absolute right-0 top-0 mt-[-11rem]'/>
    <div className='mt-[4rem] md:mt-[14rem] w-[80vw] mx-auto flex flex-row justify-between items-center md:items-start mb-[2rem] md:mb-0'>
     <img src='/images/about/about-onair.png' className=' md:w-[528px] md:h-[297px] w-[179px] h-[101px]'/>
          <div className='md:mt-[2rem]'>
            <img src='/images/home/one.svg' className='w-[19px] h-[19px] md:w-[50px] md:h-[50px]'/>
            <p className='font-semibold text-white text-[10px] md:text-[14px] mt-[0.5rem]'>NO 1</p>
            <p className='font-medium text-[#CCC9DC] text-[12px] md:text-[16px] mt-[0.2rem]'>{h('SPIRITUAL RADIO')}</p>
            <p className='hidden md:block mt-[3rem] font-medium text-[14px] leading-[17px] text-[#CCC9DC]'>{t('Follow us on social media')}</p>
            <div className='hidden md:flex flex-row gap-[0.5rem] mt-[1rem]'>
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
          <div className='mt-[2rem] hidden md:block'>
            <img src='/images/home/headset.svg' className='w-[58px] h-[50px]'/>
            <p className='font-semibold text-white text-[14px] mt-[0.5rem]'>{t('Over 100K')} </p>
            <p className='font-medium text-[#CCC9DC] text-[16px] mt-[0.2rem]'>{t('DAILY LISTENERS')}</p>
          </div>
        </div>
    </div>
   
  )
}

export default media