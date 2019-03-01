import React 		from 'react';
import Slideshow	from './slideshow.js';
import './amenities.css';

export default class AmenitiesPage extends React.Component {
	render() {
		return (
			<div id="amenities-container">
				<div id="amenities-image">
					<h2>amenities</h2>
					<div className="blur2"></div>
				</div>
				<div id="amenities">
					<div id="slideshow-container">
						<Slideshow />
					</div>
					<p>
						In addition to offering a comfy bed in a private room, our hostel has a full kitchen, bathroom, and climbing gym for all guests to use.  There is free Wifi throughout the hostel.  We warmly welcome you to our home and would love for you to enjoy our community and your time spent climbing at the Red River Gorge.  
					</p>
				</div>
			</div>
		);
	}
}