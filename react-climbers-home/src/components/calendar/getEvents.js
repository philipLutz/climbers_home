import request from 'superagent';

const CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
let URL = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${GOOGLE_API_KEY}`;

export function getEvents (callback) {
  request
    .get(URL)
    .end((err, resp) => {
      if (!err) {
        const events = [];
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary
          })
        })
        callback(events);
      }
    });
}