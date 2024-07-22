import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();

  const [movieDetail, setMovieDeatail] = useState([]);

  useEffect(() => {
    getData();
  }, [0]);

  const getData = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzRhODFmNjM1NDk4NTI4YmU3YjljNWJiNDk4ZDBmMiIsIm5iZiI6MTcyMTU3Nzg2NC41MTQ1NjUsInN1YiI6IjY2OWQyZjYyNDdlYjA2NjZhY2NkN2QwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.22U2UnEnn8u7kvEKEasmooqcU244kYWFTx1WBdi87v4",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => setMovieDeatail(response))
      .catch((err) => console.error(err));
  };

  console.log(movieDetail);
  return (
    <div className="movie-page">
      <div className="page">
        <img
          src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
          className="pageImg"
        />
      </div>
      <div className="overlay">
        <div className="col">
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
            alt=""
          />
        </div>
        <div className="col">
          <div className="main-box">
            <h2>
              {movieDetail.original_title ? movieDetail.original_title : ""}
            </h2>
            <p>{movieDetail.tagline ? movieDetail.tagline : ""}</p>
            <div className="ratings">
              <span>
                {movieDetail.vote_average
                  ? movieDetail.vote_average.toFixed(1)
                  : ""}{" "}
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                ({movieDetail.vote_count ? movieDetail.vote_count : 0}) Votes
              </span>
            </div>
            <p>{movieDetail.runtime ? movieDetail.runtime : 0} Minutes</p>
            <p>
              Release Date :{" "}
              {movieDetail.release_date ? movieDetail.release_date : ""}
            </p>
            <div className="genre-box">
              {movieDetail.genres
                ? movieDetail.genres.map((item) => (
                    <p
                      className="genre"
                      style={{
                        width: item["name"].length > 15 ? "200px" : "100px",
                        textAlign: "center",
                      }}
                    >
                      {item["name"]}
                    </p>
                  ))
                : ""}
            </div>
          </div>

          <div className="synopsis-box">
            <h2>Synopsis</h2>
            <p>{movieDetail.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
