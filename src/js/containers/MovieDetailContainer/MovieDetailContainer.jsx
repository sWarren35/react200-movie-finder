import React from 'react';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movieSelect } = this.props;
    let moviePoster;
    if (movieSelect.Poster == "N/A"){
        moviePoster = <img className="rounded" src='https://www.auro-3d.com/wp-content/uploads/2016/08/no-poster-available.jpg' />
    }
    else{
        moviePoster = <img className="rounded" src={movieSelect.Poster} />
    }
    return (
      <div>
      <h1>Movie Details</h1>
      <p>Your are viewing movie id: {this.props.match.params.id} in our database</p>
      <a href={"/#/"}>Back</a>
      
      <div className="container-fluid">
      <div className="row justify-content-md-center"> 
      <div className="col-xs-6">
          {moviePoster}
      </div>
      
      <div className="col-sm-4">
      <div className='card border-primary'>
      <div className='card-header text-white bg-primary'>Movie Details</div>
      <div className='card-body'>
      <p className="font-weight-bold">{movieSelect.Title}</p>
      <p>{movieSelect.Year}</p>
      <p>{movieSelect.Plot}</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default MovieDetailContainer;