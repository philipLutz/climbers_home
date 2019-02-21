import React 			from 'react';
import moment 			from 'moment';
import BigCalendar 		from 'react-big-calendar';
// import { getEvents } 	from './getEvents.js';
import './calendar.css';

export default class CalendarPage extends React.Component {
	constructor () {
	    super()
	    this.state = {
	      events: []
		}
	}
	componentDidMount () {
	    // getEvents((response) => {
	    // 	console.log(response);
	    // 	let events = [];
	    // 	for (let i=0; i<response.length; i++) {
	    // 		events.push(response[i]);
	    // 	}
	    // 	this.setState({events})
	    // })
	}
	render() {

		// const localizer = BigCalendar.momentLocalizer(moment);

		// return (
		// 	<div id="calendar-container">
		// 		<BigCalendar
		// 			localizer={localizer}
		// 	        style={{height: '420px'}}
		// 	        events={this.state.events}
		// 	        startAccessor="start"
  //     				endAccessor="end"
		// 	      />
		// 	</div>
		// );

		return (
			<div id="calendar-container">
				<p id="calendar-p">
					This calendar feature to reference while making your reservation is not available right now.  We will get it up and running as soon as possible.
				</p>
			</div>
		);
	}
}