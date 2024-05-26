import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";

const Newsboard = ({category}=props) => {
    const [news,setNews] = useState([]);

    useEffect(()=>{
        // const url = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=c930f8deaf51476ea192a40f6653bde0";
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=c930f8deaf51476ea192a40f6653bde0`
        fetch(url).then(res=>res.json()).then(data=>setNews(data.articles))
    },[category])
    console.log(news)
  return (
    <div>
      <h2 className="text-center m-3">Latest <span className="badge bg-danger">News</span></h2>
      
      <div className="news-container">
        {news.map((article,index)=>(
            <NewsItem 
            key={index} 
            title={article.title}
            description={article.description}
            imgUrl={article.urlToImage}
            url={article.url}
            />
        ))}
      </div>
      
    </div>
  )
}

export default Newsboard
