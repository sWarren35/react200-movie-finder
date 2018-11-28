import React from 'react';

class MovieByTitle extends React.Component {
    constructor(props) {
        super(props);
}
render() {
const { movieItem } = this.props;
    return (
    <div className='card'>
    <div className='card-body'>
        <p>{movieItem.Title}</p>
        <p>{movieItem.Year}</p>
        <p>{movieItem.Plot}</p>
    </div>
    </div>
  )
 }
}
export default MovieByTitle;