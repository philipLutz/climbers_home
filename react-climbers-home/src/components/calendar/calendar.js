import React 			from 'react';
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
			</div>
		);
	}
}