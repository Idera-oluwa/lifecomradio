import React from 'react'
import OnAir from '@/components/explore/onAir'
import Schedule from '@/components/onair/schedule'
import Download from '@/components/home/download'
import Download2 from '@/components/home-mobile/download'

const page = () => {
  return (
    <div className='pt-[3rem] md:pt-[12rem] mb-[3rem] md:mb-0'>
     <OnAir />
     <Schedule />
     <Download />
     <Download2 />
    </div>
  )
}

export default page