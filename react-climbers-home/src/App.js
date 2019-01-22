import React, { Component }  from 'react';
import {Route, withRouter}   from 'react-router-dom';
import Navigation                from './navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="nav-container">
          <Navigation />
        </div>
      </div>
    );
  }
}

export default App;
