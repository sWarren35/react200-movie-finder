import React from 'react';
import MovieByTitle from "./MovieByTitle/MovieByTitle";

import {
  updateMovie,
  getMovie,
  getMoviePlot
} from './movieSearchActionCreators';

export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleMovieSearchInput = this.handleMovieSearchInput.bind(this);
    this.handleGoButton= this.handleGoButton.bind(this);
    this.enterPressed=this.enterPressed.bind(this);
  }
  
  handleMovieSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateMovie(value));
  }

  handleGoButton(e){
    const { dispatch, movie } = this.props;
    dispatch(getMovie(movie)),
    dispatch(getMoviePlot(movie));
  }
  enterPressed(event) {
    var code = event.keyCode || event.which;
    if(code === 13) {   
      this.handleGoButton();
  } 
}
  
  render() {
    const { movie, movieData, showResults, dispatch } = this.props;
    let searchResults;
    if (showResults){
      searchResults = <div className="container">
      {movieData.map(movieItem => {
                return <MovieByTitle 
                key={movieItem.Title}
                movieItem= { movieItem }
                dispatch={ dispatch }
                />
              })}
      </div>
    }
  return (
    <div>
      <div className='container'>
        <h1  className='display-3 text-center'>Movie Finder</h1>
        <div className='input-group'>
            <input id="movieInput" value={movie} onChange={ this.handleMovieSearchInput } onKeyPress={this.enterPressed.bind(this)} className='form-control p-b 15' type='text' placeholder='Enter a Movie' />
                <span className='input-group-btn'>
                    <button id="myBtn" onClick={this.handleGoButton}className='btn btn-primary'>Go!</button>
                </span>
        </div>
        {searchResults}
      </div>
    </div>
    )
   }
  }