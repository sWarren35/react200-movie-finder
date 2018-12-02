import React from 'react';

import {
    getMovieSelect,
} from '../movieSearchActionCreators';

class MovieResults extends React.Component {
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
        if (movieItem.Poster == "N/A") {
            moviePoster = <img className="rounded float-left img-thumbnail" src='https://www.auro-3d.com/wp-content/uploads/2016/08/no-poster-available.jpg' />
        }
        else {
            moviePoster = <img className="rounded float-left img-thumbnail" src={movieItem.Poster} />
        }

        return (
            <div className='card' style={{"background":"none", "margin-bottom": "-120px", "margin-top": "-20px"}}>
                <div className='card-body-results'>
                    {moviePoster}
                    <div className="search-heading">
                        <p id="results" className="testTitle text-center"><strong>{movieItem.Title}</strong></p>
                        <p id="results" className='text-center'>{movieItem.Year}</p>
                        <p className="detail-btn text-right pr-4" style={{"margin-top":"330px"}}>
                        <a href={"/#/movie/" + movieItem.imdbID}><button onClick={this.handleClick} className='btn btn-primary'>Movie Details</button></a>
                    </p>
                    </div>
                
                </div>
                <div>
                </div>
            </div>
        )
    }
}
export default MovieResults;