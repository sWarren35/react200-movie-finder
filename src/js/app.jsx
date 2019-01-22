import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';

import MovieSearchBar from './MovieSearch/index';
import MovieDetailsPage from './MovieDetailsPage/index';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container-fluid'> 
          <Route exact path='/' component={ MovieSearchBar } />
          <Route path='/movie/:id' component={ MovieDetailsPage } />
        </div>
      </Router>
    )
  }
}
