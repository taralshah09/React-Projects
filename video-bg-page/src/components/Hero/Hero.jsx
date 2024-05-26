import "./Hero.css";

const Hero = ({
  heroData,
  heroCount,
  setHeroCount,
  playStatus,
  setPlayStatus,
}) => {
  const pauseIcon = "images/pause_icon.png";
  const playIcon = "images/play_icon.png";
  const arrowIcon = "images/arrow_btn.png";
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrowIcon} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots" style={{marginLeft : "25px"}}>
        <li
            onClick={(prev) => {
              return setHeroCount(0);
            }}
            className={heroCount === 0 ? "hero-dot orange" : ""}
          >
            
          </li>
          <li
            onClick={(prev) => {
              return setHeroCount(1);
            }}
            className={heroCount === 1 ? "hero-dot orange" : ""}
          >
            
          </li>
          <li
            onClick={(prev) => {
              return setHeroCount(2);
            }}
            className={heroCount === 2 ? "hero-dot orange" : ""}
          >
            
          </li>
        </ul>
        <div className="hero-play">
            <img src={playStatus ? pauseIcon : playIcon} alt=""  onClick={()=>{
                return setPlayStatus(prev=>!prev)
            }}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
