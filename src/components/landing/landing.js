import React 	from 'react';
import './landing.css';

export default class LandingPage extends React.Component {
	render() {
		return (
			<div id="landing-container">
				<div id="landing-image">
					<div className="blur1"></div>
				</div>
				<h3 id="tagline">
					<i>A loving home for climbers in the Red River Gorge</i>
				</h3>
			</div>
		);
	}
}