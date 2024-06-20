import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import StudentEventDescription from '../../../layouts/student-event-description/components/StudentEventDescription';
import { fetchEvents, fetchUserById } from '../../../services/eventService';

const StudentEventDetails = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const { tab } = location.state || {}; 
  console.log({tab})// Extract tab from location.state
  const [eventDetails, setEventDetails] = useState(null);
  const [organizerName, setOrganizerName] = useState('');
  const [loading, setLoading] = useState(true);

  // Mock participantId for demonstration, replace with actual logic to fetch participantId
  const participantId = 3; // Replace this with actual logic

  useEffect(() => {
    const getEventAndOrganizerDetails = async () => {
      try {
        const eventData = await fetchEvents({ eventId });
        const eventDetails = eventData[0]; // Assuming the response is an array with one event
        console.log('Event Details:', eventDetails);
        setEventDetails(eventDetails);

        // Fetch organizer details using the hostId from eventDetails
        if (eventDetails.hostId) {
          const organizerData = await fetchUserById(eventDetails.hostId);
          console.log('Organizer Data:', organizerData);
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
  }, [eventId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <StudentEventDescription 
        eventDetails={eventDetails} 
        participantId={participantId} 
        organizerName={organizerName} 
        eventId={eventId}
        tab={tab} // Pass the tab state to StudentEventDescription
      />
    </div>
  );
};

export default StudentEventDetails;
