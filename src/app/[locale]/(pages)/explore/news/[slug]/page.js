"use client"
import React,{useState, useEffect} from 'react'
import OnAir from '@/components/news/onair'
import News from '@/components/news/news'
import MoreNews from '@/components/news/morenews'
import { getSingleBlog } from '@/promises/news';

const page = ({params}) => {
  const [news, setNews] = useState({});
  useEffect(() => {
      getSingleBlog(params.slug).then(result => {
          setNews(result);
        });
  }, [])
  return (
    <div className='pt-[3rem] md:pt-[7rem]'>
      <OnAir />
      <News news = {news}/>
      <MoreNews />
    </div>
  )
}

export default page