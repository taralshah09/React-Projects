import './Background.css'

const Background = ({heroCount,playStatus}) => {
    const video1 = "images/video1.mp4";
    const image1= "images/image1.png"
    const image2= "images/image2.png"
    const image3= "images/image3.png"
  if(playStatus){
    return (
        <video className='background fade-in' autoPlay muted loop>
            <source src={video1} type="video/mp4"/>
        </video>
    )
  }
  else if(heroCount === 0){
    return(
        <img src={image1} alt='image-1' className='background fade-in' />
    )
  }
  else if(heroCount === 1){
    return(
        <img src={image2} alt='image-2' className='background fade-in' />
    )
  }
  else if(heroCount === 2){
    return(
        <img src={image3} alt='image-3' className='background fade-in' />
    )
  }
}

export default Background
