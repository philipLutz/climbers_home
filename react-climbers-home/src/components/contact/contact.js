import React 	from 'react';
import './contact.css';

export default class ContactPage extends React.Component {
	render() {
		const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
		const logoPath = "https://raw.githubusercontent.com/philipLutz/climbers_home/develop/react-climbers-home/src/hostelPhotos/climbersHomeLogoBlkWht.png";
		return (
			<div id="contact-container">
				<div id="contact-image">
					<h2>contact</h2>
				</div>
				<div id="contact">
					<div id="facebook-container" className="container">
						<div className="icon-container">
							<a href="https://www.facebook.com/sunshineswhereeverlovegrows/" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-facebook-square"></i>
							</a>
						</div>
						<div className="text-container">
							Visit <a href="https://www.facebook.com/sunshineswhereeverlovegrows/" target="_blank" rel="noopener noreferrer">Climber's Home Facebook Page</a> to see what is going on at the hostel or to get in touch through Messenger.
						</div>
					</div>
					<div id="email-container" className="container">
						<div className="icon-container">
							<a href="mailto:sunnyang918@hotmail.com"><i className="fas fa-envelope-square"></i></a>
						</div>
						<div className="text-container">
							Email Sunny at <a href="mailto:sunnyang918@hotmail.com">sunnyang918@hotmail.com</a>
						</div>
					</div>
					<div id="address-container" className="container">
						<div className="icon-container">
							<a href="https://www.google.com/maps/place/488+N+Main+St,+Stanton,+KY+40380/@37.8523327,-83.856699,148m/data=!3m2!1e3!4b1!4m5!3m4!1s0x88439e7ae5b69337:0x52199d2bd0002bc0!8m2!3d37.8523316!4d-83.8561518" target="_blank" rel="noopener noreferrer"><i className="fas fa-map-marker-alt"></i></a>
						</div>
						<div className="text-container">
							We are located at 488 North Main Street, Stanton, KY 40380
						</div>
					</div>
					<div id="map-image-container">
						<a href="https://www.google.com/maps/place/488+N+Main+St,+Stanton,+KY+40380/@37.8523327,-83.856699,148m/data=!3m2!1e3!4b1!4m5!3m4!1s0x88439e7ae5b69337:0x52199d2bd0002bc0!8m2!3d37.8523316!4d-83.8561518" target="_blank" rel="noopener noreferrer">
							<img src={"https://maps.googleapis.com/maps/api/staticmap?center=37.852386,-83.856159&zoom=14&maptype=hybrid&size=300x300&markers=icon:" + logoPath + "|37.852386,-83.856159&key=" + GOOGLE_API_KEY} title="Google Map Location" alt="Google Map Location" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}