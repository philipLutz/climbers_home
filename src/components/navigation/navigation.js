import React 						from 'react';
import { Link } 					from 'react-router-dom';
import Burger						from './burger.js';
import Logo							from '../logo.js';
import './navigation.css';

export default class Navigation extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			fill: "#fff"
		}
	}

	mouseEnter = () => {
		this.setState({
			fill: "#61616B"
		});
	}

	mouseLeave = () => {
		this.setState({
			fill: "#fff"
		});
	}
	
	render() {
		return (
			<nav id="navigation">
				<div id="logo-container" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
					<Link to="/">
						<Logo id="logo" width="100%" height="100%" fill={this.state.fill} viewBox="0 0 800 800" />
					</Link>
				</div>
				<h3>Climber's Home</h3>
				<Burger right />
			</nav>
		);
	}
}