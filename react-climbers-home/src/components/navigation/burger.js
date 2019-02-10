import React              from 'react';
import { Link }           from 'react-router-dom';
import { slide as Menu }  from 'react-burger-menu';

export default class Burger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu right width={ '20%' }>
        <Link to="/">
          <h5>Home</h5>
        </Link>
        <Link to="/amenities">
          <h5>Amenities</h5>
        </Link>
        <Link to="/rooms">
          <h5>Rooms</h5>
        </Link>
        <Link to="/calendar">
          <h5>Calendar</h5>
        </Link>
        <Link to="/beta">
          <h5>Beta</h5>
        </Link>
        <Link to="/contact">
          <h5>Contact</h5>
        </Link>
      </Menu>
    );
  }
}