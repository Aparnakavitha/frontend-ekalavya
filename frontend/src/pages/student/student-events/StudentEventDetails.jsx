import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import StudentEventDescription from '../../../layouts/student-event-description/components/StudentEventDescription';
import { fetchEventsService } from '../../../services/Event';
import { getUserDetails } from '../../../services/User';
 
const StudentEventDetails = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const { tab } = location.state || {}; // Extract tab from location.state
  console.log({ tab });
  const [eventDetails, setEventDetails] = useState(null);
  const [organizerName, setOrganizerName] = useState('');
  const [loading, setLoading] = useState(true);
 
  // Mock participantId for demonstration, replace with actual logic to fetch participantId
  const participantId = sessionStorage.getItem("user_id");; // Replace this with actual logic
 
  useEffect(() => {
    const getEventAndOrganizerDetails = async () => {
      try {
        const eventData = await fetchEventsService({ eventId });
        const eventDetails = eventData[0]; // Assuming the response is an array with one event
        console.log('Event Details:', eventDetails);
        setEventDetails(eventDetails);
 
        // Fetch organizer details using the hostId from eventDetails
        if (eventDetails.hostId) {
          const organizerData = await getUserDetails({ userId: eventDetails.hostId });
          console.log('Organizer Data:', organizerData.responseData[0].firstName);
          const organizerName = `${organizerData.responseData[0].firstName} ${organizerData.responseData[0].lastName}`;
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
 