import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";
import QuoteBox from "./components/QuoteBox";
import { useEffect } from "react";

function App(props) {
  var colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#999886",
    "#77B1A9",
    "#73A857",
  ];

  const [randomColor,setRandomColor] = useState( colors[Math.floor(Math.random() * colors.length + 1)])
  const [quotesData, setQuotesData] = useState([]);
  useEffect(() => {
    fetch("https://api.quotable.io/quotes/random?limit=150")
      .then((res) => res.json())
      .then((data) => setQuotesData(data));

  }, [0]);
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomNumber]);
    setRandomColor(colors[Math.floor(Math.random() * colors.length + 1)])
  };
  console.log(quotesData)
  return (

    <Container color={randomColor ? randomColor : "black"}>
      <QuoteBox
        color={randomColor ? randomColor : "black"}
        generateQuote={generateQuote}
        quote={quote}
      />
      <p id="creator">&copy; Made by Taral Shah</p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};

  #creator{
    color: white;
    margin-top: 15px;
    font-weight: 500;
  }
`;
export default App;
