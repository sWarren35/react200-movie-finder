import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
  return {
    movie: store.getMovies.movie,
    movieData: store.getMovies.movieData,
    plot: store.getMovies.plot,
    movieSelect: store.getMovies.movieSelect
  };
}

export default connect(mapStoreToProps)(MovieDetailContainer);