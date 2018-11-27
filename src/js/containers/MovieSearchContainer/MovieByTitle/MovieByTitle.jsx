import React from 'react';

class MovieByTitle extends React.Component {
render() {
const { movieItem } = this.props;
    return (
    <div className='card'>
    <div className='card-body'>
        <p>{movieItem.Title}</p>
    </div>
    </div>
  )
 }
}
export default MovieByTitle;