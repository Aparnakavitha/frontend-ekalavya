import axios from "axios";
 
const BASE_URL = "https://ekalavya.tarento.com/events";
 

export const fetchEventsService = async (params = {}) => {
  try {
    const response = await axios.get(BASE_URL, { params });
    console.log(response);
    return response.data.responseData;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
 


export const addEventService = async (eventData) => {
  try {
    const response = await axios.post(BASE_URL, eventData);
    return response.data;
  } catch (error) {
    console.log("Error adding event:", error);
    throw error;
  }
};
 

export const deleteEventService = async (eventId) => {
  try {
    const response = await axios.delete(BASE_URL, {
      params: {
        event_id: eventId
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
};



export const enrollParticipantService = async (eventId, participantId, attendance) => {
  try {
    const response = await axios.get("https://ekalavya.tarento.com/enrollment", {
  params: {
    eventId: eventId,
    participantId: participantId,
    attendance: attendance
  }
});
    return response.data;
  } catch (error) {
    console.error("Error enrolling participant:", error);
    throw error;
  }
};


export const addEnrollmentService  = async (eventId, eventData) => {
  try {
    const response = await axios.post(`https://ekalavya.tarento.com/enrollment?eventId=${eventId}`,eventData);
    return response.data;
  } catch (error) {
    console.log("Error adding event:", error);
    throw error;
  }
};