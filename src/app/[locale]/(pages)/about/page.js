import React from 'react'
import About from '@/components/about/about'
import Media from '@/components/about/media'
import Download from '@/components/about/download'
import Team from '@/components/about/team'
import HeroFooter from '@/components/home-mobile/herofooter'
import Download2 from '@/components/home-mobile/download'

const page = ({params : {locale}}) => {
  return (
    <div className='pt-[0rem] md:pt-[7rem] mb-[3rem]'>
        <About locale={locale}/>
        <Media locale={locale}/>
        <HeroFooter />
        <Team locale={locale}/>
        <Download2 />
        <Download locale={locale}/>
    </div>
  )
}

export default page