import React 						from 'react';
import { Link } 					from 'react-router-dom';
import Logo							from '../logo.js';
import Burger						from './burger.js';
import './navigation.css';

export default class Navigation extends React.Component {
	render() {
		return (
			<nav id="navigation">
				<div id="logo-container">
					<Link to="/">
						<Logo id="logo" width="100%" height="100%" fill="#fff" viewBox="0 0 800 800" />
					</Link>
				</div>
				<Burger right />
			</nav>
		);
	}
}