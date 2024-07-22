import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzRhODFmNjM1NDk4NTI4YmU3YjljNWJiNDk4ZDBmMiIsIm5iZiI6MTcyMTU3Nzg2NC41MTQ1NjUsInN1YiI6IjY2OWQyZjYyNDdlYjA2NjZhY2NkN2QwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.22U2UnEnn8u7kvEKEasmooqcU244kYWFTx1WBdi87v4",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieList(response.results);
        // console.log(popularMovies);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="movie-list">
      <h2 className="movie-list-title">
        {type ? type.toUpperCase() : "POPULAR"}
      </h2>
      <div className="list-cards">
        {movieList.map((movie) => (
          <Link
            to={`movie/${movie.id}`}
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
  );
};

export default MovieList;
