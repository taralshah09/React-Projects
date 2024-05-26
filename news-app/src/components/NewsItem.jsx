const NewsItem = ({title,description,url,imgUrl}=props) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth : "345px",}}>
    <img src={imgUrl ? imgUrl : "News.png"} style={{height : "200px",width :"330px",}}className="card-img-top" alt=""/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,80) + "..."}</h5>
      <p className="card-text my-3">{description ? description.slice(0,90) + "..." : "Read the full article for more details on the story in the link provided below. Please click the Read More button."}</p>
      <a href={url} style={{width:"100%",}}className="btn btn-primary">Read More</a>
    </div>
  </div>
  )
}

export default NewsItem
