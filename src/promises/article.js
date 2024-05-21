import {AllArticles, SingleArticle} from '@/queries/articles'
  export const getArticles = async () =>{
    const response = await fetch('https://api-eu-west-2.hygraph.com/v2/clumsr21f0opz07tbp81bplcp/master', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: AllArticles
      })
    });
    const json = await response.json();
    return json.data.articles
  }
  
  export const getSingleArticle = async (slug) =>{
    const response = await fetch('https://api-eu-west-2.hygraph.com/v2/clumsr21f0opz07tbp81bplcp/master', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: SingleArticle,
        variables: { slug: slug }
      })
    })
    const json = await response.json();
    return json.data.article
  }