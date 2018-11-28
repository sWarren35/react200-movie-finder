const defaultState = {
    movie:'',
    movieData:[{"Title":""}],
    showResults: false,
    movieSelect:'',
    plot:[]
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
            showResults: true,
          };
        }
        case 'GET_MOVIE_PLOT_FULFILLED': {
          return {
            ...state,
            //payload in array for mapping in render function when searching by title..
            plot: [payload],
            showResults: true
          };
        }
        case 'GET_MOVIE_SELECT_FULFILLED': {
          return {
            ...state,
            movieSelect: payload
          };
        }
    default: {
        return state;
    }
  }
}