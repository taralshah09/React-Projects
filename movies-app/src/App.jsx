import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieList from "./components/MovieList";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<MoviePage/>}></Route>
          <Route
            path="movies/:type"
            element={<MovieList/>}
          ></Route>
          <Route path="/*" element={<h1>Page not found</h1>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
