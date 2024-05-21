import React from 'react'
import initTranslations from '@/i18n';

const download = async ({locale}) => {
  const { t } = await initTranslations(locale,['home']);
  return (
    <div className='hidden md:flex flex-row w-[88vw] justify-between items-center mt-[12rem] mx-auto'>
    <div>
    <h1 className='font-bold text-[28px] leading-[34px] text-white w-[401px]'>{t('Download our mobile app and enjoy many more features')}</h1>
      <p className='text-[16px] text-[#CCC9DC] font-normal leading-[19px] mt-[2rem] w-[365px]'>{t('You can get our mobile app on the Google and Apple app stores, or scan the code present on the screen.')}</p>
    </div>
    <div className='w-[50%] h-[287px] bg-gradient-to-r from-[#00255F4D] to-[#38475E43] flex flex-row gap-[4rem] items-center justify-center rounded-[4px]'>
       <div className='flex flex-col gap-[1rem]'>
       <a href='https://play.google.com/store/apps/details?id=com.lifecomradio.station'><div className='flex flex-row gap-[0.5rem] bg-[#1B2A41] w-[181px] h-[63px] justify-center items-center'>
          <img src='/images/home/play-logo.svg' alt='' className='w-[24px] h-[27px]'/>
          <div>
            <p className='text-[12px] text-white font-normal leading-[14.5px] '>Download on</p>
            <p className='text-[14px] text-white font-semibold leading-[17px] '>PLAY STORE</p>
          </div>
        </div> </a>
        <div className='flex flex-row gap-[0.5rem] bg-[#1B2A41] w-[181px] h-[63px] justify-center items-center'>
          <img src='/images/home/apple-logo.svg' alt='' className='w-[24px] h-[27px]'/>
          <div>
            <p className='text-[12px] text-white font-normal leading-[14.5px] '>Get it on the</p>
            <p className='text-[14px] text-white font-semibold leading-[17px] '>APP STORE</p>
          </div>
        </div>
       </div>
      <img src='/images/home/qrcode.svg' className='w-[170px] h-[147px]'/>
    </div>
    </div>
  )
}

export default download