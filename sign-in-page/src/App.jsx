import { useState,useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignInPage from "./Components/SignInPage";
import LoginPage from "./Components/LoginPage";
import { useEffect } from "react";

function App() {
  const [page, setPage] = useState(false);
  const btn = useRef();
  const togglePages = () => {
    setPage((prev) => !prev);
    console.log(page)
    
  }

  return (
    <div className="container">
      {page?<SignInPage page={page} setPage={setPage}/> : <LoginPage page={page} setPage={setPage}/>}

    </div>
  );
}

export default App;
