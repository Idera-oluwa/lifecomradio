import React from 'react'
import initTranslations from '@/i18n';

const heroFooter = async ({locale}) => {
  const { t } = await initTranslations(locale,['home']);
  return (
    <div className='bg-[#081A27] flex flex-row justify-center mt-[-1rem] py-[1.5rem] gap-[10%]'>
      <div className='flex flex-row items-center'>
        <img src='/images/home/one.svg' className='w-[38px] h-[38px]'/>
        <p className='font-semibold text-[16px] text-white leading-[19px] ml-[1.5rem]'>87.7 KentUK</p>
        <p className='font-medium text-[16px] text-[#CCC9DC] leading-[17px] ml-[0.6rem]'>{t('SPIRITUAL RADIO')}</p>
      </div>
      <div className='flex flex-row items-center'>
        <img src='/images/home/headset.svg' className='w-[39px] h-[34px]'/>
        <p className='font-semibold text-[16px] text-white leading-[19px] ml-[1.5rem]'>100K+</p>
        <p className='font-medium text-[14px] text-[#CCC9DC] leading-[17px] ml-[0.6rem]'>{t('LISTENERS')}</p>
      </div>
      <div className='flex flex-row items-center gap-[1.5rem]'>
        <img src='/images/home/earth.svg' className='w-[35px] h-[35px]'/>
        <p className='font-medium text-[14px] text-[#CCC9DC] leading-[17px]'>{t('LISTEN ANYWHERE')}</p>
      </div>
    </div>
  )
}

export default heroFooter
