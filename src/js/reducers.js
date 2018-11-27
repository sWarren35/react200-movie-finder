import { combineReducers } from 'redux';
import movieSearchReducer from './containers/MovieSearchContainer/movieSearchReducer';

const reducers = combineReducers({
    getMovies: movieSearchReducer
});

export default reducers;