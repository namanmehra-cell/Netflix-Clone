import React, { useState,useEffect } from 'react';
import "./row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({fetchUrl,title,largeRow = false}) {
    let img = "https://image.tmdb.org/t/p/original/"
   const[movies,setMovie] = useState([])
   const[trailerUrl,settrailerUrl] = useState(null)
   
   
   async function fetchMovie(){
        const request = await fetch(fetchUrl)
        let data = await request.json();
        setMovie(data.results)
        return data
   }

 
const opts={
     height:'390',
     width:'100%',
     playerVars:{
      autoplay:1
     }
   }
   function onClickimage(movie){
    if(trailerUrl){
      settrailerUrl('')
    }else{
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "").then((url)=>{
        const urlP = new URLSearchParams(new URL(url).search);
        settrailerUrl(urlP.get('v')) 
      }).catch((error)=>{alert(error);})
    }
  }
  console.log(trailerUrl)
   useEffect(()=>{fetchMovie()},[])
   
  
  return <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters' >
      {movies.map((movie)=>{
          return (  
           <img onClick={()=>{onClickimage(movie.id)}} className={`poster ${largeRow && "large_poster"}`} key={movie.id} src={`${img}${largeRow?movie.poster_path:movie.backdrop_path}` } alt={`${movie.name}`} />  
           )})}
</div>
 { trailerUrl ? <YouTube videoId={trailerUrl} opts={opts} />:<div></div> }
  </div>
  
}

export default Row;
