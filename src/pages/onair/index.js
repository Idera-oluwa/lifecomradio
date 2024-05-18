import React from 'react'
import OnAir from '@/components/schedule/onAir'
import Contact from '@/components/schedule/contact'
import Footer from '@/components/footer'
import Recent from '@/components/schedule/recent'
import Schedule from '@/components/schedule/schedule'
import Footersm from '@/components/footersm'
import { useRouter } from "next/router";

const page = () => {
    const locale=useRouter().locale;
  return (
    <div className='pt-[3rem] md:pt-[7rem]'>
        <OnAir />
        <Contact />
        <Recent />
        <Schedule />
    </div>
  )
}

export default page