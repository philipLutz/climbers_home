import React 	from 'react';
import './contact.css';

export default class ContactPage extends React.Component {
	render() {
		const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
		// const logoPath = "https://raw.githubusercontent.com/philipLutz/climbers_home/master/hostelPhotos/climbersHomeLogo.svg";
		return (
			<div id="contact-container">
				<div id="contact-image">
					<h2>contact</h2>
				</div>
				<div id="contact">
					<div id="phone-container" className="container">
						<i className="fas fa-phone-square"></i>
					</div>
					<div id="facebook-container" className="container">
						<a href="https://www.facebook.com/sunshineswhereeverlovegrows/" target="_blank" rel="noopener">
							<i className="fab fa-facebook-square"></i>
						</a>
					</div>
					<div id="email-container" className="container">
						<a href="mailto:sunnyang918@hotmail.com "><i className="fas fa-envelope-square"></i></a>
					</div>
					<div id="address-container" className="container">
						<i className="fas fa-map-marker-alt"></i>
					</div>
					<div id="map-image-container">
						<a href="https://www.google.com/maps/place/488+N+Main+St,+Stanton,+KY+40380/@37.8523327,-83.856699,148m/data=!3m2!1e3!4b1!4m5!3m4!1s0x88439e7ae5b69337:0x52199d2bd0002bc0!8m2!3d37.8523316!4d-83.8561518" target="_blank" rel="noopener">
							<img src={"https://maps.googleapis.com/maps/api/staticmap?center=37.852386,-83.856159&zoom=14&maptype=hybrid&size=300x300&markers=37.852386,-83.856159&markers=color:red%7Clabel:S%7C11211%7C11206%7C11222&markers=size:mid&key=" + REACT_APP_GOOGLE_API_KEY} title="Google Map Location" alt="Google Map Location" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}