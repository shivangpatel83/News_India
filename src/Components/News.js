import { useState, useEffect } from "react"
import { NewsItem } from "./NewsItem"


export const News=()=>{

        const [data, setData] = useState([])
      const [page , setPage] = useState({current : 1, size : 0})
      
   useEffect( () =>  {
     const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e44c7db87b2944859a16a8fb7071c77d`
    fetch(url)
     .then(response => response.json())
     .then(parsedData=>{
     setData(parsedData.articles)
     setPage({...page , size : parsedData.totalResults})
    //  console.log(parsedData.articles)
     }
     )
  }, []);

  const handleNextPage=()=>{
// console.log(page.current)
if(page.current+1>Math.ceil(page.size/20)){
}else{
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e44c7db87b2944859a16a8fb7071c77d&page=${page.current+1}&pageSize=20`
    fetch(url)
     .then(response => response.json())
     .then(parsedData=>{
     setData(parsedData.articles)
    //  console.log(parsedData.articles)
     }
     )
    setPage({...page, current : page.current+1})
    // console.log(page)
}
  }
  const handlePrevPage=()=>{
    console.log(page.current)
  
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e44c7db87b2944859a16a8fb7071c77d&page=${page.current-1}&pageSize=20`
    fetch(url)
     .then(response => response.json())
     .then(parsedData=>{
     setData(parsedData.articles)
    //  console.log(parsedData.articles)
     }
     )
    setPage({...page, current : page.current-1})
    
    // console.log(page)
  }

    return (
        <>
        <div className="container my-3">
        <h3>Welcome to News WOrld! - Top Headlines</h3>
        <div className="row">
       { data.map((ele)=>
              <div className="col-md-4 my-3" key = {ele.url}>
              <NewsItem  title = {ele.title} desc = {ele.description} image = {ele.urlToImage} url = {ele.url}/>
              </div>
        )}
        </div>
        </div>
        <div className="container d-flex justify-content-around">
        <button disabled={page.current<=1} type="button" className="btn btn-primary" onClick={()=>{handlePrevPage()}}>&larr; Previous</button>
        <button disabled={page.current==Math.ceil(page.size/20)} type="button" className="btn btn-primary" onClick={()=>{handleNextPage()}}>Next &rarr;</button>
        </div>
        </>
    )
}