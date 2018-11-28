import React from 'react';

import {
    getMovieSelect,
  } from '../movieSearchActionCreators';

class MovieByTitle extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        const { dispatch, movieItem } = this.props;
        dispatch(getMovieSelect(movieItem.imdbID));
    }

render() {
    const { movieItem } = this.props;
    let moviePoster;
    if (movieItem.Poster == "N/A"){
        moviePoster = <img className="rounded" src='https://www.auro-3d.com/wp-content/uploads/2016/08/no-poster-available.jpg' />
    }
    else{
        moviePoster = <img className="rounded" src={movieItem.Poster} />
    }
    
    return (
    <div className="container">
        <div className='card'>
        <div className='card-body'>
            <p className="font-weight-bold">{movieItem.Title}</p>
            <p>{movieItem.Year}</p>
           {moviePoster}
        <p>
        <a href={"/#/movie/"+movieItem.imdbID}><button onClick={this.handleClick} className='btn btn-primary'>Movie Details</button></a>
        </p>
        </div>
        </div>
    </div>
  )
 }
}
export default MovieByTitle;