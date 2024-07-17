import React from "react";

const NewsComponent = ({ title, source, imgUrl, url, description }) => {
  return (
    <div className="article">
      <img src={imgUrl ? imgUrl : "../images/News.png"} alt="News" />
      <h3>{title}</h3>
      {/* <p>{!description? (description.slice(0, 75) + '...' ): description}</p> */}
      <p>{description}</p>
      <button>
        <a href={url}>Read More</a>
      </button>
    </div>
  );
};

export default NewsComponent;
