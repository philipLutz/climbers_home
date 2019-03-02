import React, { Component }   from 'react';
import {Route, withRouter}    from 'react-router-dom';
import AmenitiesPage          from './components/amenities/amenities';
import BetaPage               from './components/beta/beta';
import CalendarPage           from './components/calendar/calendar';
import ContactPage            from './components/contact/contact';
import LandingPage            from './components/landing/landing';
import Navigation             from './components/navigation/navigation';
import './App.css';

require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="content">
          <div id="nav-container">
            <Navigation />
          </div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/amenities" component={AmenitiesPage} />
          <Route path="/beta" component={BetaPage} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/contact" component={ContactPage} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
