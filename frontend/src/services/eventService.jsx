import axios from "axios";
 
const BASE_URL = "http://localhost:8888/events";
 
/**
* Fetches events from the API.
* @param {Object} params
* @returns {Promise}
*/
export const fetchEvents = async (params = {}) => {
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
 * Fetches enrolled event IDs for a participant.
 * @param {number} participantId
 * @returns {Promise<Array<number>>}
 */
export const getEnrolledEventIds = async (participantId) => {
  try {
    const response = await axios.get("https://ekalavya.tarento.com/enrollment", {
      params: {
        participantId: participantId
      }
    });
    return response.data.responseData;
  } catch (error) {
    console.error("Error fetching enrolled event IDs:", error);
    throw error;
  }
};

 
/**
* Adds a new event.
* @param {Object} eventData
* @returns {Promise}
*/
export const addEvent = async (eventData) => {
  try {
    const response = await axios.post(BASE_URL, eventData);
    return response.data;
  } catch (error) {
    console.log("Error adding event:", error);
    throw error;
  }
};
 
/**
* Deletes an event enrollment for a participant.
* @param {number} eventId
* @param {number} participantId
* @returns {Promise}
*/
export const deleteEvent = async (eventId, participantId) => {
  try {
    const response = await axios.delete(BASE_URL, {
      params: {
        eventId: eventId,
        participantId: participantId
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting event enrollment:', error);
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
export const enrollParticipant = async (eventId, participantId, attendance) => {
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

/**
 * Fetches user details by userId from the API.
 * @param {string} userId - The user ID to fetch.
 * @returns {Promise<Object>} - Promise resolving to the API response data.
 */
export const fetchUserById = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8888/users`, {
      params: { userId }
    });
    console.log('fetchUserById Response:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};