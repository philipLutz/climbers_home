import React 	from 'react';
import './landing.css';

export default class LandingPage extends React.Component {
	render() {
		return (
			<div id="landing-container">
				<div id="landing-image">
					<div id="blur"></div>
				</div>
				<h3 id="tagline">
					A loving home for climbers in the Red River Gorge
				</h3>
			</div>
		);
	}
}