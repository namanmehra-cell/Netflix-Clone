import React,{useEffect, useState} from 'react';
import './banner.css'

import requests from './request'

function Banner() {
  const[movie,setMovie]=useState([])

  async function fetchData(){
       const request = await fetch(requests.fetchActionMovies)
       let data = await request.json();
       setMovie(data.results[Math.floor(Math.random() * data.results.length-1)]);
       return data;
     }
  useEffect(()=>{fetchData()},[])

  console.log(movie);

function cutTheText(string,n){
 return string?.length > n? string.substr(0,n-1)+ "..." : string 
}

  return<>
   <header className='banner' style={{
      backgroundSize:"cover",
      backgroundPosition:"center center",
      
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`}} >
        <div className="banner_contents">
          <h1 className="title">{movie?.title || movie?.name || movie.original_name}</h1>
          <div className="banner_buttons">
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My list</button>
          </div>
          <h2 className="banner_desc">{cutTheText(movie?.overview,130)}</h2>
        </div>
        <div className='faded_bottom'></div>

      </header>
 </>  ;
}

export default Banner;
