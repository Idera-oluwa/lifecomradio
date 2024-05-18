"use client"
import React,{useState, useContext, useEffect} from 'react';

// import {AllArticles, SingleArticle} from '@/queries/articles'
import { getArticles } from '@/promises/article';
import { getBlogs } from '@/promises/news';
import { getPodcasts } from '@/promises/podcast';

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [articles, setArticles] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        getArticles().then(result => {
            setArticles(result);
          });
          getBlogs().then(result => {
            setBlogs(result);
          });
          getPodcasts().then(result => {
            setPodcasts(result);
          });
    }, [])
    
    
    return(
        <AppContext.Provider value={{articles, blogs, podcasts}}>
           {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider};