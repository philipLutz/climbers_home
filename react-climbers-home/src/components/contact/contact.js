import React 	from 'react';
import './contact.css';

export default class ContactPage extends React.Component {
	render() {
		const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
		return (
			<div id="contact-container">
				<div id="contact-image">
					<h2>contact</h2>
				</div>
				<div id="contact">
					<div id="map-image-container">
						<img src={"https://maps.googleapis.com/maps/api/staticmap?center=37.852386,-83.856159&zoom=12&size=300x300&key=" +REACT_APP_GOOGLE_API_KEY} title="Google Map Location" alt="Google Map Location" />
					</div>
				</div>
			</div>
		);
	}
}