import React		from 'react';
import { Link } 	from 'react-router-dom';
import Logo			from '../logo.js';
import './footer.css';

export default class Footer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			fill: "#fff"
		}
	}

	mouseEnter = () => {
		this.setState({
			fill: "#000"
		});
	}

	mouseLeave = () => {
		this.setState({
			fill: "#fff"
		});
	}

	render() {
		return (
			<footer id="footer">
				
			</footer>
		);
	}

}