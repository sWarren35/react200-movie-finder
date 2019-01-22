import axios from "axios";

export function updateMovie(movie) {
  return {
    type: 'UPDATE_MOVIE',
    payload: { movie },
  };
}
export function getMovie(title) {
  return {
    type: 'GET_MOVIE_DATA',
    payload: axios
      .get('https://www.omdbapi.com/?s=' + title + process.env.API_KEY)
      .then(response => response.data)
  };
}
export function getMoviePlot(title) {
  return {
    type: 'GET_MOVIE_PLOT',
    payload: axios
      .get('https://www.omdbapi.com/?t=' + title + process.env.API_KEY)
      .then(response => response.data)
  };
}
export function getMovieSelect(imdbID) {
  return {
    type: 'GET_MOVIE_SELECT',
    payload: axios
      .get('https://www.omdbapi.com/?i=' + imdbID + process.env.API_KEY)
      .then(response => response.data)
  };
}
