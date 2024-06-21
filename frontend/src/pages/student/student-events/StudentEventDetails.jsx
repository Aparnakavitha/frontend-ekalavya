import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import StudentEventDescription from '../../../layouts/student-event-description/components/StudentEventDescription';
import { fetchEvents, fetchUserById, getEnrolledEventIds, fetchAllEvents, fetchParticipantIdFromService } from '../../../services/eventServices';

const StudentEventDetails = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const { tab } = location.state || {};
  
  const [eventDetails, setEventDetails] = useState([]);
  const [organizerName, setOrganizerName] = useState('');
  const [loading, setLoading] = useState(true);
  const [participantId, setParticipantId] = useState(null);

  // Function to fetch participant ID
  const fetchParticipantId = async () => {
    try {
      const fetchedParticipantId = await fetchParticipantIdFromService(eventId);
      return fetchedParticipantId;
    } catch (error) {
      console.error('Error fetching participant ID:', error);
      return null; // Handle error gracefully
    }
  };

  useEffect(() => {
    const initializeComponent = async () => {
      setLoading(true);
      try {
        const fetchedParticipantId = await fetchParticipantId();
        setParticipantId(fetchedParticipantId);
      } catch (error) {
        console.error('Error initializing component:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeComponent();
  }, []);

  useEffect(() => {
    const getEventAndOrganizerDetails = async () => {
      if (!participantId) {
        return;
      }

      setLoading(true);
      try {
        let eventData = [];

        if (tab === "Upcoming") {
          const enrolledEventIds = await getEnrolledEventIds(participantId);

          if (enrolledEventIds.length === 0) {
            eventData = await fetchAllEvents();
          } else {
            eventData = await fetchEvents({ eventIds: enrolledEventIds.join(",") });
          }
        } else {
          eventData = await fetchEvents();
        }

        // Logging fetched event data
        console.log("Fetched Event Data:", eventData);

        setEventDetails(eventData);

        if (eventData.length > 0 && eventData[0].hostId) {
          const organizerData = await fetchUserById(eventData[0].hostId);
          const organizerName = `${organizerData.firstName} ${organizerData.lastName}`;
          setOrganizerName(organizerName);
        }
      } catch (error) {
        console.error('Error fetching event or organizer details:', error);
      } finally {
        setLoading(false);
      }
    };

    getEventAndOrganizerDetails();
  }, [tab, participantId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {eventDetails.length > 0 ? (
        eventDetails.map(event => (
          <StudentEventDescription
            key={event.eventId}
            eventDetails={event}
            organizerName={organizerName}
            tab={tab}
          />
        ))
      ) : (
        <div>No upcoming events available</div>
      )}
    </div>
  );
};

export default StudentEventDetails;
