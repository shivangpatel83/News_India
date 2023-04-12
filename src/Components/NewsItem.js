
export const NewsItem=(props)=>{
    return (
        <>
        <div className="card" style={{"width": "15rem"}}>
  <img src= {props.image?props.image:'https://images.moneycontrol.com/static-mcnews/2021/04/Delisting-770x433.jpg'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}...</h5>
    <p className="card-text">{props.desc?props.desc:'Read more about HEADLINE at PTI. Find out more Breaking News and Latest News Headlines from India and around the world HEADLINE word to be replaced by the headline'}</p>
    <a href={props.url} className="btn btn-primary" target="_blank">Read More</a>
  </div>
</div>
</>
    )
}