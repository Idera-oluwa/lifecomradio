import React from 'react'
import initTranslations from '@/i18n';

const onair = async ({locale}) => {
  const { t } = await initTranslations(locale,['home']);
  return (
    <div className='relative'>
      <img src='/images/home/microphone.png' alt='' className='absolute left-0 top-[-7rem] z-[-10]'/>
<div className='w-[90vw] mx-auto mt-[8rem] flex flex-row items-center justify-between'>
     <div className='w-[488px]'>
     <h1 className='text-[28px] font-bold text-[white] leading-[34px]'>{t('Listen to live radio shows and podcasts from your favorite hosts')}</h1>
     <p className='text-[#CCC9DC] text-[14px] leading-[17px] font-normal mt-[2rem] w-[448px]'>{t('Discover a world of inspiration and connection')}</p>
     </div>
     <img src='/images/home/onair.svg' alt=''/>
    </div>
    </div>
    
  )
}

export default onair
