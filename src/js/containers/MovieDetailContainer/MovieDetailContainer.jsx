import React from 'react';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movieSelect } = this.props;
    let moviePoster;
    if (movieSelect.Poster == "N/A") {
      moviePoster = <img className="rounded mb-3" src='https://www.auro-3d.com/wp-content/uploads/2016/08/no-poster-available.jpg' />
    }
    else {
      moviePoster = <img className="rounded mb-3" src={movieSelect.Poster} />
    }
    return (
      <div>
        <h1 className="text-center"><a className='resultsTitle' href={"/"}>Movie Finder</a></h1>
        <h6 className="text-center back-results">(You are viewing movie {this.props.match.params.id} in the database)</h6>

        <h3 className="text-center"><a className='shadow back-results' href={"/#/"}>Back To My Results</a></h3>

        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col-xs-6">
              {moviePoster}
            </div>

            <div className="col-sm-3">
              <div className='card border-primary'>
                <div className='card-header text-white bg-primary text-center back-results'>Movie Details</div>
                <div className='card-body'>
                  <p className="font-weight-bold">{movieSelect.Title}</p>
                  <label className='rounded-10' style={{ 'color': 'white', 'backgroundColor': 'darkGreen', 'padding': '0 10px', 'marginRight': '10px', 'border-radius': '10px' }}>{'Released ' + movieSelect.Year}</label>
                  <label className='rounded-10' style={{ 'color': 'white', 'backgroundColor': 'darkGreen', 'padding': '0 10px', 'marginRight': '10px', 'border-radius': '10px' }}>{movieSelect.Runtime}</label>
                  <label className='rounded-10' style={{ 'color': 'white', 'backgroundColor': 'darkGreen', 'padding': '0 10px', 'marginRight': '10px', 'border-radius': '10px' }}>{movieSelect.Genre}</label>
                  <p>{movieSelect.Plot}</p>
                  <p>{movieSelect.Awards}</p>
                  <div><strong>Metascore: </strong>{movieSelect.Metascore}</div>
                  <div><strong>IMDB: </strong>{movieSelect.imdbRating}</div>
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