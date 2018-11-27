import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
    return {
      movie: store.getMovies.movie,
    };
  }

export default connect(mapStoreToProps)(MovieSearchContainer);