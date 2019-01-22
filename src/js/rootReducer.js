import { combineReducers } from 'redux';
import movieSearchReducer from './MovieSearch/reducer';

const reducers = combineReducers({
    getMovies: movieSearchReducer
});

export default reducers;
