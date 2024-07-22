import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const MovieCard = ({ name, image, ratings, release, description, id }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const [url, setUrl] = useState(id);

  return (
    <>
      {loading ? (
        <SkeletonTheme color="#202020" highlightColor="#444">
          <div className="skeleton-wrapper">
            <div className="skeleton-box"></div>
            <Skeleton height={20} width={`60%`} />
            <Skeleton height={20} width={`40%`} />
            <Skeleton height={15} width={`80%`} count={2} />
          </div>
        </SkeletonTheme>
      ) : (
        <Link to={`/movie/${url}`} style={{ textDecoration: "none", color: "white" }}>
          <div className="movie-card">
            <img src={image} alt="" />
            <div className="overlay">
              <h3>{name}</h3>
              <div className="release-date">
                <p>{release}</p>
                <p>
                  {ratings} <i className="fa-solid fa-star"></i>
                </p>
              </div>
              <span className="description">
                {description.length > 75
                  ? description.substring(0, 100) + "..."
                  : description}
              </span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default MovieCard;
