import React from 'react';

import {
  updateMovie
} from './movieSearchActionCreators';

export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleMovieSearchInput = this.handleMovieSearchInput.bind(this);
  }
  
  handleMovieSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target.value;
    console.log(this.props);
    dispatch(updateMovie(value));
  }

  render() {
    const { movie } = this.props;
    return (
    <div>
      <div className='container'>
        <h1  className='display-3 text-center'>Movie Finder</h1>
        <div className='input-group'>
            <input id="movie" value={movie} onChange={ this.handleMovieSearchInput } className='form-control p-b 15' type='text' placeholder='Enter a Movie' />
                <span className='input-group-btn'>
                    <button className='btn btn-primary'>Go!</button>
                </span>
      </div>
      </div>
      </div>
    )
  }
}
