import React 						from 'react';
import { Link } 					from 'react-router-dom';
import Logo							from '../logo.js';
import './navigation.css';

export default class Navigation extends React.Component {
	render() {
		return (
			<nav id="navigation">
				<div id="logo-container">
					<Logo id="logo" width="100%" height="100%" fill="#fff" viewBox="0 0 800 800" />
				</div>
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
				</ul>
			</nav>
		);
	}
}