const defaultState = {
    movie:''
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
    default: {
        return state;
    }
  }
}