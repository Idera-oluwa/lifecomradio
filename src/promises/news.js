import {AllBlogs, SingleBlog} from '@/queries/news'
  export const getBlogs = async () =>{
    const response = await fetch('https://api-eu-west-2.hygraph.com/v2/clumsr21f0opz07tbp81bplcp/master', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: AllBlogs
      })
    });
    const json = await response.json();
    // console.log(json.data.blogs)
    return json.data.blogs
  }
  
  export const getSingleBlog = async (slug) =>{
    const response = await fetch('https://api-eu-west-2.hygraph.com/v2/clumsr21f0opz07tbp81bplcp/master', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: SingleBlog,
        variables: { slug: slug }
      })
    })
    const json = await response.json();
     return json.data.blog
  }