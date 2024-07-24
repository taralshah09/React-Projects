import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const Home = () => {
  return (
    <div className="home-page">
      <Carousel
        className="carousel"
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={3000}
        transitionTime={600}
      >
        <div>
          <div className="overlay">
            <h1>Brand New Deals <br></br>are back!</h1>
          </div>
          <img
            className="carousel-img"
            src="https://plus.unsplash.com/premium_photo-1683121269108-1bd195cd18cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fashionable clothing item 1"
          />
        </div>
        <div>
          <div className="overlay">
            <h1>Have a look <br/>before the sales over!</h1>
          </div>

          <img
            className="carousel-img"
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fashionable clothing item 2"
          />
        </div>
        <div>
          <div className="overlay">
          <h1>Its time to update your<br></br> wardrobe!</h1>
          </div>

          <img
            className="carousel-img"
            src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fashionable clothing item 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
