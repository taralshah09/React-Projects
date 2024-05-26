import { useState } from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { useEffect } from "react";

function App() {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to ", text2: "your passions" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  // I used chatgpt over here
  useEffect(() => {
    let interval;
    if (!playStatus) {
      interval = setInterval(() => {
        setHeroCount((count) => (count === 2 ? 0 : count + 1));
      }, 3000);
    }
    
    return () => clearInterval(interval);
  }, [playStatus]); 

  return (
    <div className="container">
      <div className="overlay"></div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <Hero
        heroCount={heroCount}
        heroData={heroData[heroCount]}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </div>
  );
}

export default App;
