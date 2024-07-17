import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NewsComponent from "./component/NewsComponent";
import { useEffect } from "react";

function App() {
  const getArticles = async () => {
    const API_KEY = "c930f8deaf51476ea192a40f6653bde0";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    setArticles(data.articles);
  };

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, [0]);

  console.log(articles);
  return (
    <>
      <main>
        {articles.map((article, index) => (
          <NewsComponent
            key={index}
            title={article.title}
            source={article.source.name}
            imgUrl={article.urlToImage}
            url={article.url}
            description={article.description}
          />
        ))}
      </main>
    </>
  );
}

export default App;
