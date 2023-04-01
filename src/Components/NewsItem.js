
export const NewsItem=(props)=>{
    return (
        <>
        <div className="card" style={{"width": "15rem"}}>
  <img src= {props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}...</h5>
    <p className="card-text">{props.desc}</p>
    <a href={props.url} className="btn btn-primary" target="_blank">Read More</a>
  </div>
</div>
</>
    )
}