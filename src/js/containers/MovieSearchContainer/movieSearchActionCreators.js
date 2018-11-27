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
    .get('http://www.omdbapi.com/?s=' + title + '&apikey=8730e0e')
    .then(response => response.data)
  };
}