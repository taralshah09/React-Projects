import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";
import Startpage from "./components/Startpage";
import Gameplay from "./components/Gameplay";

function App() {
  const [page, setPage] = useState(false);
  const togglePage = () => {
    setPage((prev)=>!prev);
  }
  return(
    <Container>
      {
         page ?  <Gameplay/> : <Startpage toggle={togglePage}/>  
      }
    </Container>
  )
}




const Container = styled.div`
  width: 100%;
  height: 100vh;
`
export default App;
