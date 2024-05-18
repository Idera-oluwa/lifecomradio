"use client"
import React,{useState, useEffect} from 'react'
import OnAir from '@/components/news/onair'
import Podcast from '@/components/podcasts/podcast'
import Popular from '@/components/podcasts/popular'
import { getSinglePodcast } from '@/promises/podcast';
import {useGlobalContext,AppContext} from '@/context/context';

const replica = ({params}) => {
  const [podcast, setPodcast] = useState({});
  const [loading, setLoading] = useState(false)
  useEffect(() => {
      getSinglePodcast(params.slug).then(result => {
          setPodcast(result);
          setLoading(true)
        });
  }, [])
  const { podcasts} = useGlobalContext()
  const length = podcasts.length
  const featuredPodcasts = podcasts.slice(1,length)
  return (
    <div className='md:mt-[6rem] mt-[1rem] pt-[3rem] md:pt-[7rem] mb-[2rem] md:mb-0'>
        <OnAir />
        <Podcast podcast={podcast} loading={loading}/>
        <Popular text={"Recently played"} posts={featuredPodcasts}/>
        <Popular text={"Based on your previous listening"} posts={featuredPodcasts}/>
        <Popular text={"Recommended for you"} posts={featuredPodcasts}/>
    </div>
  )
}

export default replica