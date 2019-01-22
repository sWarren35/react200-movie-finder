import { connect } from 'react-redux';
import MovieSearchBar from './MovieSearchBar';

function mapStoreToProps(store) {
  return {
    movie: store.getMovies.movie,
    movieData: store.getMovies.movieData,
    showResults: store.getMovies.showResults,
    plot: store.getMovies.plot,
    movieSelect: store.getMovies.movieSelect
  };
}

export default connect(mapStoreToProps)(MovieSearchBar);
