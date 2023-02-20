const APIUrls = [
  {
    title: "movies playing now",
    url: "https://api.themoviedb.org/3/movie/now_playing?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US",
    type: "movie",
  },
  {
    title: "popular movies",
    url: "https://api.themoviedb.org/3/movie/popular?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US&page=1",
    type: "movie",
  },
  {
    title: "TV shows airing today",
    url: "https://api.themoviedb.org/3/tv/airing_today?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US&page=1",
    type: "tv",
  },
  {
    title: "upcoming movies",
    url: "https://api.themoviedb.org/3/movie/upcoming?api_key=5855e9b9f4ec1fd91373dae25331f786&page=1",
    type: "movie",
  },

  {
    title: "top rated movies",
    url: "https://api.themoviedb.org/3/movie/top_rated?api_key=5855e9b9f4ec1fd91373dae25331f786&page=1",
    type: "movie",
  },
  {
    title: "popular TV shows",
    url: "https://api.themoviedb.org/3/tv/popular?api_key=5855e9b9f4ec1fd91373dae25331f786&page=1",
    type: "tv",
  },
  {
    title: "top rated TV shows",
    url: "https://api.themoviedb.org/3/tv/top_rated?api_key=5855e9b9f4ec1fd91373dae25331f786&page=1",
    type: "tv",
  },
];

export { APIUrls };
