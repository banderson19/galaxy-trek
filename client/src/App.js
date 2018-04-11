import React, { Component } from 'react';
import './App.css';
import routes from './routes';

import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect( mapStateToProps )( App );

