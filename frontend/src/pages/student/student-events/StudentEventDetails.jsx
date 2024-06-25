import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import StudentEventDescription from '../../../layouts/student-event-description/components/StudentEventDescription';
import { fetchEventsService } from '../../../services/Event'; // Import fetchAllEvents

const StudentEventDetails = () => {
  const [loading, setLoading] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const { eventId } = useParams();
  const location = useLocation();
  const { tab } = location.state || {};

  const participantId = sessionStorage.getItem("user_id");

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const eventData = await fetchEventsService(); // Use fetchAllEvents instead of fetchEvents
        console.log('Fetched Event Data:', eventData);
        setUpcomingEvents(eventData);
      } catch (error) {
        console.error('Error fetching upcoming events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {upcomingEvents.length > 0 ? (
        upcomingEvents.map(event => (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        ))
      ) : (
        <div>No upcoming events found.</div>
      )}
      <StudentEventDescription
        upcomingEvents={upcomingEvents}
        eventId={eventId}
        participantId={participantId}
        tab={tab}
      />
    </div>
  );
};

export default StudentEventDetails;
