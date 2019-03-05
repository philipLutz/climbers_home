import React 			from 'react';
import { Link } 		from 'react-router-dom';
import moment 			from 'moment';
import BigCalendar 		from 'react-big-calendar';
import { getEvents } 	from './getEvents.js';
import './calendar.css';
import './react-big-calendar.css';

export default class CalendarPage extends React.Component {
	constructor () {
	    super()
	    this.state = {
	      events: [],
	      dayChosen: new Date()
		}
	}
	componentDidMount () {
	    getEvents((response) => {
	    	let events = [];
	    	for (let i=0; i<response.length; i++) {
	    		events.push(response[i]);
	    	}
	    	this.setState({events})
	    })
	}
	render() {

		const localizer = BigCalendar.momentLocalizer(moment);

		return (
			<div id="calendar-page">
				<div id="calendar-container">
					<BigCalendar 
						id="calendar"
						events={this.state.events}
						popup
					    views={['month']}
					    localizer={localizer}
					    showMultiDayTimes
					    step={60}
					    defaultDate={new Date()}
					    date={this.state.dayChosen}
						onNavigate={(focusDate, flipUnit, prevOrNext) => {
							const _this = this;
							let now = new Date();
							let min = moment(now).add(1, "month").toDate();
							let current = _this.state.dayChosen;
							let nextMonth = moment(current).add(1, "month").toDate();
							let prevMonth = moment(current).subtract(1, "month").toDate();

							  if (prevOrNext === "NEXT"){
							        _this.setState({
							          dayChosen: nextMonth
							        });
							  } else if (prevOrNext === "PREV" && current < min) {
							  		_this.setState({
							          dayChosen: now
							        });
							  } else if (prevOrNext === "PREV"){
								  	_this.setState({
										dayChosen: prevMonth
								  	});
							  } else if (prevOrNext === "TODAY") {
							  		_this.setState({
							          dayChosen: now
							        });
								}
							}
						}
				      />
				</div>
				<div id="room-list">
					<div className="room-type">
						<h5>Single</h5>
						<div>Room 1: $30</div>
					</div>
					<div className="room-type">
						<h5>Couple</h5>
						<div>Room 3: $50</div>
						<div>Room 4: $50</div>
						<div>Room 5: $60</div>
						<div>Room 6: $80</div>
						<div>Room 7: $80</div>
					</div>
					<div className="room-type">
						<h5>Family</h5>
						<div>Room 2: $100</div>
					</div>
				</div>
				<div id="calendar-p">
					<p>
						To help plan your stay at Climber's Home, this calendar displays the rooms that are already booked.  If a room is not displayed during a given time, it is available to be booked.  Our hostel has several different room options:  single, couples, and family.  Room rates are for one night and do not include tax.  Please <Link to="/contact"><i>contact Sunny</i></Link> to book your accommodation or if you have any questions.
					</p>
				</div>
			</div>
		);
	}
}