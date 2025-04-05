import React from 'react';
import './Events.css';

export default function Events() {
  // Store the calendar URL in a variable to prevent escaping issues
  const calendarUrl = "https://calendar.google.com/calendar/embed?src=efbbf254a4e9f87a2dedeb0654c2334996671047bf7206a85f18e9cd8265408c%40group.calendar.google.com&ctz=America%2FNew_York";
  
  return (
    <div className="page">
      <h1 className="page-title">Events</h1>
      
      <div className="content-section">
        <p className="events-intro">
          Check out upcoming events and availability. You can also subscribe to this calendar 
          to stay updated with the latest schedule.
        </p>
      </div>
      
      <div className="calendar-container">
        <iframe 
          src={calendarUrl}
          style={{border: 0}}
          width="100%" 
          height="100%" 
          frameBorder="0" 
          scrolling="no"
          title="Events Calendar"
        ></iframe>
      </div>
      
      <div className="content-section">
        <h2>Booking Information</h2>
        <p>
          For booking inquiries, please contact through the <a href="/contact">contact page</a> with your preferred 
          dates and details about your event.
        </p>
      </div>
    </div>
  );
}