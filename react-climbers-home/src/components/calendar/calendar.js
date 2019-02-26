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
					    views={['month']}
					    localizer={localizer}
					    showMultiDayTimes
					    step={60}
					    defaultDate={new Date()}
					    date={this.state.dayChosen}
						onNavigate={(focusDate, flipUnit, prevOrNext) => {

						const _this = this;
						let now = new Date();
						let nowNum = now.getDate();
						let min = moment(now).add(1, "month").toDate();
						let minNum = min.getDate();
						let current = _this.state.dayChosen;
						let currentNum = current.getDate();
						let nextMonth = moment(current).add(1, "month").toDate();
						let nextMonthNum = nextMonth.getDate();
						let prevMonth = moment(current).subtract(1, "month").toDate();
						let prevMonthNum = prevMonth.getDate();

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
						  }
						}}
				      />
				</div>
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