import React from 'react';
import MovieResults from "./MovieResults/MovieResults";
import { getMovie, getMoviePlot, updateMovie } from './actions';

export default class MovieSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleMovieSearchInput = this.handleMovieSearchInput.bind(this);
    this.handleGoButton = this.handleGoButton.bind(this);
    this.enterPressed = this.enterPressed.bind(this);
  }

  handleMovieSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateMovie(value));
  }

  handleGoButton(e) {
    const { dispatch, movie } = this.props;
    dispatch(getMovie(movie)),
    dispatch(getMoviePlot(movie));
  }

  enterPressed(event) {
    var code = event.keyCode || event.which;
    if (code === 13) {
      this.handleGoButton();
    }
  }

  render() {
    const { movie, movieData, showResults, dispatch } = this.props;
    let searchResults;
    if (showResults) {
      searchResults = 
      <div className="mt-3">
          {movieData.map(movieItem => {
            return <MovieResults
              key={movieItem.Title}
              movieItem={movieItem}
              dispatch={dispatch}
            />
          })}
      </div>
    }
    return (
      <div>
        <div className='container'>
          <h1 className='resultsTitle title-page display-3 text-center'>🎞 Movie Finder</h1>
          <div className='input-group'>
            <input id="movieInput" value={movie} onChange={this.handleMovieSearchInput} 
            onKeyPress={this.enterPressed.bind(this)} className='form-control p-b 15 form-rounded' 
            type='text' placeholder='Enter a Movie' />
            <span className='input-group-btn'>
              <button id="myBtn" onClick={this.handleGoButton} className='btn btn-primary'>Go!</button>
            </span>
          </div>
          {searchResults}
        </div>
      </div>
    )
  }
}
