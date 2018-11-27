import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';
function mapStoreToProps(store) {
    return {
      movie: store.getMovies.movie,
      movieData: store.getMovies.movieData,
      showResults:store.getMovies.showResults
    };
  }

export default connect(mapStoreToProps)(MovieSearchContainer);