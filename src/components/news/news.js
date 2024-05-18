import React from 'react'
import { RichText } from '@graphcms/rich-text-react-renderer'
import moment from 'moment'
import { useRouter } from 'next/navigation';

const news = ({news}) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const {title, updatedAt,createdAt, content, coverImage, media} = news;
  return (
    <div className='w-[90vw] mx-auto mt-[1.5rem] md:mt-[5rem]'>
      <img src='/images/explore/arrowback.png' alt='' className='md:hidden' onClick={goBack}/>
    <p className='font-semibold text-white text-[12px] md:text-[20px] leading-[24px] mt-[1.5rem] md:mt-0'>News</p>
    <p className='text-[14px ] md:text-[24px] font-medium leading-[16.9px] md:leading-[29px] text-white w-full lg:w-[1098px] mt-[2rem]'>{title}</p>
    <p className='font-normal text-[10px] md:text-[12px] text-white mt-[1.5rem] leading-[14px]'>{moment(createdAt).format('DD MMMM YYYY, HH:mm')} | Updated: {moment(updatedAt).format('DD MMMM YYYY, HH:mm')}</p>
    <div className='flex flex-row gap-[2rem] mt-[1.5rem]  md:h-[379px] h-[120px] justify-between'>
     <img src={coverImage?.url} alt='' className='w-[100%] object-cover' />
     <img src={media?.url} alt='' className='w-[50%] h-[379px] hidden'/>
    </div>
    <RichText content={content ? content.raw : []} 
   renderers={{
    h1: ({ children }) => <h1 className="text-white">{children}</h1>,
    bold: ({ children }) => <strong>{children}</strong>,
    p:({children}) => <p className='font-normal text-[10px] md:text-[18px] text-[#F5F5F5] leading-4 md:leading-[22px] mt-[2.2rem]'>{children}</p>
  }}

  />
    </div> 
  )
}

export default news