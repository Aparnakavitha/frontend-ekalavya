import axios from "axios";
 
const BASE_URL = "http://localhost:8888/events";
 
/**
* Fetches events from the API.
* @param {Object} params 
* @returns {Promise} 
*/
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
 
/**
* Adds a new event.
* @param {Object} eventData 
* @returns {Promise} 
*/
export const addEventService = async (eventData) => {
  try {
    const response = await axios.post(BASE_URL, eventData);
    return response.data;
  } catch (error) {
    console.log("Error adding event:", error);
    throw error;
  }
};
 
/**
* Deletes an event.
* @param {number} eventId 
* @returns {Promise} 
*/
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


/**
* Get Enrolls a participant in an event.

* @param {number} eventId 
* @param {number} participantId 
* @param {string} attendance 
* @returns {Promise} 
*/
export const enrollParticipantService = async (eventId, participantId, attendance) => {
  try {
    const response = await axios.get("http://localhost:8888/enrollment", {
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

 /**
* Adds a new enrollment.
* @param {Object} eventData 
* @returns {Promise} 
*/
export const addEnrollment = async (eventId, eventData) => {
  try {
    const response = await axios.post(`http://localhost:8888/enrollment?eventId=${eventId}`,eventData);
    return response.data;
  } catch (error) {
    console.log("Error adding event:", error);
    throw error;
  }
};