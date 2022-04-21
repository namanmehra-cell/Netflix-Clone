const apiKey  = "83b75eb834314daf05f7fd76ccb546e1";

const requests = {
    fetchTrending  : `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals  : `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_network=213`,
    fetchTopRated  : `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanticMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumanteries : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`,
}

export default requests;

// https://api.themoviedb.org/3/trending/all/week?api_key=83b75eb834314daf05f7fd76ccb546e1&language=en-US
//https://api.themoviedb.org/3/discover/movie?api_key=83b75eb834314daf05f7fd76ccb546e1&with_genre=35

//to show to movie trailer
//https://api.themoviedb.org/3/movie/movie.id/videos?api_key={apikey}
// in key element to show yt