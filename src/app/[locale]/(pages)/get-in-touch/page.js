import React from 'react'
import Header from '@/components/getintouch/header'
import Form from '@/components/getintouch/form'
import Faq from '@/components/getintouch/faq'

const page = ({params : {locale}}) => {
  return (
    <div className='pt-[3rem] md:pt-[7rem] mb-[3rem] md:mb-0'>
      <Header locale={locale}/>
      <Form locale={locale}/>
      <Faq locale={locale}/>
    </div>
  )
}

export default page