import { useState } from "react"
import { NewsItem } from "./NewsItem"


export const News=()=>{
    
       const fetching = async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e44c7db87b2944859a16a8fb7071c77d`
    const getData = await fetch(url)
    const parsedData =  await getData.json()
    console.log(parsedData.articles)
    return parsedData.articles
}

// const newsArray = fetching()
// console.log(`newsArray`, newsArray)

   
    // console.log(`hello` ,data)

    const [data, setData] = useState(``)

    return (
        <>
        <div className="container my-3">
        <h3>Welcome to News WOrld! - Top Headlines</h3>
        <div className="row">
          
            
       { data.map((ele)=>
    //    console.log(ele.description.slice(0,50))
              <div className="col-md-4 my-3" key = {ele.url}>
              <NewsItem  title = {ele.title} desc = {ele.description} image = {ele.urlToImage} url = {ele.url}/>
              </div>
        )}
        </div>
        </div>
        </>
    )
}