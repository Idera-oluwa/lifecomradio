import React from 'react'
import OnAir from '@/components/schedule/onAir'
import Contact from '@/components/schedule/contact'
import Footer from '@/components/footer'
import Recent from '@/components/schedule/recent'
import Schedule from '@/components/schedule/schedule'
import Footersm from '@/components/footersm'
import Navbar from '@/components/navbar'

const page = ({params : {locale}}) => {
  return (
    <div>
      <Navbar locale={locale} color='#1B2A414D'/>
        <OnAir />
        <Contact />
        <Recent />
        <Schedule />
        <Footer locale={locale}/>
        <Footersm />
    </div>
  )
}

export default page