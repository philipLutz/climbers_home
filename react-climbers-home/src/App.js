import React, { Component }   from 'react';
import {Route, withRouter}    from 'react-router-dom';
import AmenitiesPage          from './components/amenities/amenities';
import BetaPage               from './components/beta/beta';
import CalendarPage           from './components/calendar/calendar';
import ContactPage            from './components/contact/contact';
import LandingPage            from './components/landing/landing';
import Navigation             from './components/navigation/navigation';
import RoomsPage              from './components/rooms/rooms';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="nav-container">
          <Navigation />
        </div>
        <main className="content">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/amenities" component={AmenitiesPage} />
          <Route exact path="/beta" component={BetaPage} />
          <Route exact path="/calendar" component={CalendarPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/rooms" component={RoomsPage} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);