export function updateMovie(movie) {
    return {
      type: 'UPDATE_MOVIE',
      payload: { movie },
    };
  }