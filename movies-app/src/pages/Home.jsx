import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzRhODFmNjM1NDk4NTI4YmU3YjljNWJiNDk4ZDBmMiIsIm5iZiI6MTcyMTU3Nzg2NC41MTQ1NjUsInN1YiI6IjY2OWQyZjYyNDdlYjA2NjZhY2NkN2QwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.22U2UnEnn8u7kvEKEasmooqcU244kYWFTx1WBdi87v4",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setPopularMovies(response.results);
        console.log(popularMovies);
      })
      .catch((err) => console.error(err));
  }, [page]);

  return (
    <div className="home-page">
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={2}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="posterImage_overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__ratings">
                    {movie ? movie.vote_average.toFixed(1) : ""}
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="posterImage__description">
                  <span>{movie ? movie.overview : ""}</span>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>

      <div className="popular-movies">
        <h2>Popular</h2>
        <div className="popular-movies-container">
          {popularMovies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <MovieCard
                name={movie.original_title}
                id={movie.id}
                image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                release={movie.release_date}
                ratings={movie.vote_average.toFixed(1)}
                description={movie.overview}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
