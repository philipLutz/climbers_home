import React 	from 'react';
import { Link } from 'react-router-dom';
import './rooms.css';

export default class RoomsPage extends React.Component {
	render() {
		return (
			<div id="rooms-container">
				<div id="rooms-image">
					<h2>rooms</h2>
					<div className="blur2"></div>
				</div>
				<div id="rooms">
					<div id="bedroom-image"></div>
					<p>
						Our hostel has several different room options:  single, couples, and family.  Room rates are for one night and do not include tax.  Please check our <Link to="/calendar">calendar</Link> for room availability.
					</p>
					<ul>
						<li>Room 1:  $30 Single</li>
						<li>Room 2:  $100 Family</li>
						<li>Room 3 and 4:  $50 Couple</li>
						<li>Room 5:  $60 Couple</li>
						<li>Room 6 and 7:  $80 Couple</li>
					</ul>
				</div>
			</div>
		);
	}
}