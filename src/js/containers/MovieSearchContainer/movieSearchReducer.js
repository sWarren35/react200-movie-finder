const defaultState = {
    movie:'',
    movieData:[{"Title":"","Year":"","Poster":""}],
    showResults: false
}

export default function movieSearchReducer(state = defaultState, action) {
  const { type, payload } = action;
    switch (type) {
        case 'UPDATE_MOVIE': {
          return {
            ...state,
            movie: payload.movie
          };
        }
        case 'GET_MOVIE_DATA_FULFILLED': {
          return {
            ...state,
            movieData: payload.Search,
            showResults: true
          };
        }
    default: {
        return state;
    }
  }
}