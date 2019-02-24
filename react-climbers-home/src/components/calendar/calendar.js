import React 			from 'react';
import moment 			from 'moment';
import BigCalendar 		from 'react-big-calendar';
import { getEvents } 	from './getEvents.js';
import './calendar.css';
import './react-big-calendar.css';

// const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// const calendarURL = 'https://calendar.google.com/calendar/embed?src=51dtqg3dukqtjp0i3delels808%40group.calendar.google.com&ctz=America%2FLos_Angeles';

// const calendar_configuration = {
//     api_key: GOOGLE_API_KEY,
//     calendars: [
//       {
//         name: 'Climber\'s Home', // whatever you want to name it
//         url: calendarURL // your calendar URL
//       }
//     ],
//     dailyRecurrence: 700,
//     weeklyRecurrence: 500,
//     monthlyRecurrence: 20
// }

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

export default class CalendarPage extends React.Component {
	constructor () {
	    super()
	    this.state = {
	      events: []
		}
	}
	componentDidMount () {
	    getEvents((response) => {
	    	console.log(response);
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
			<div id="calendar-container">
				<BigCalendar
					events={this.state.events}
				    views={allViews}
				    localizer={localizer}
			      />
			</div>
		);

		// return (
		// 	<div>
		// 		<iframe src="https://calendar.google.com/calendar/embed?src=51dtqg3dukqtjp0i3delels808%40group.calendar.google.com&ctz=America%2FLos_Angeles" ></iframe>
		// 	</div>
		// );

		// return (
		// 	<div id="calendar-container">
		// 		<p id="calendar-p">
		// 			This calendar feature to reference while making your reservation is not available right now.  We will get it up and running as soon as possible.
		// 		</p>
		// 	</div>
		// );
	}
}