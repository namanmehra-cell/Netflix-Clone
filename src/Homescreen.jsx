import React from 'react';
import "./Homescreen.css"
import Navbar from './Navbar';
import Banner from './Banner';
import Row from './Row';
import requests from './request';

function Homescreen() {
  return <div>
<Navbar/>
<Banner/>

<Row title= "Trending" fetchUrl={requests. fetchTrending} />

<Row title= "Netflix Original" fetchUrl={requests.fetchNetflixOriginals} />
<Row title= "Top Rated" fetchUrl={requests.fetchTopRated} />
<Row title= "Action " fetchUrl={requests.fetchActionMovies} />
<Row title= "Comedy " fetchUrl={requests.fetchComedyMovies} />
<Row title= "Horror" fetchUrl={requests.fetchHorrorMovies} />
<Row title= "Romance" fetchUrl={requests.fetchRomanticMovies} />
<Row title= "Documanteries" fetchUrl={requests.fetchDocumanteries} />

  </div>;
}

export default Homescreen;
