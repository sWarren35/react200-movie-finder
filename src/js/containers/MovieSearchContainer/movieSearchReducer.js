const defaultState = {
    movie:'',
    movieData:[{"Title":""}],
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
            //payload in array for mapping in render function
            movieData: [payload],
            showResults: true
          };
        }
    default: {
        return state;
    }
  }
}