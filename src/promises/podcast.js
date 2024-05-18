import {AllPodcasts, SinglePodcast} from '@/queries/podcast'
  export const getPodcasts = async () =>{
    const response = await fetch('https://api-eu-west-2.hygraph.com/v2/clumsr21f0opz07tbp81bplcp/master', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: AllPodcasts
      })
    });
    const json = await response.json();
    return json.data.podcasts
  }
  
  export const getSinglePodcast = async (slug) =>{
    const response = await fetch('https://api-eu-west-2.hygraph.com/v2/clumsr21f0opz07tbp81bplcp/master', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: SinglePodcast,
        variables: { slug: slug }
      })
    })
    const json = await response.json();
     return json.data.podcast
  }