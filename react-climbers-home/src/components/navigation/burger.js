import React              from 'react';
import { Link }           from 'react-router-dom';
import { slide as Menu }  from 'react-burger-menu';

export default class Burger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  constructor (props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
      this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
      this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render () {
    return (
      <Menu 
        right width={ '28%' }
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <Link to="/" onClick={() => this.closeMenu()}>
          <h5>Home</h5>
        </Link>
        <Link to="/amenities" onClick={() => this.closeMenu()}>
          <h5>Amenities</h5>
        </Link>
        <Link to="/beta" onClick={() => this.closeMenu()}>
          <h5>Beta</h5>
        </Link>
        <Link to="/calendar" onClick={() => this.closeMenu()}>
          <h5>Calendar</h5>
        </Link>
        <Link to="/contact" onClick={() => this.closeMenu()}>
          <h5>Contact</h5>
        </Link>
      </Menu>
    );
  }
}