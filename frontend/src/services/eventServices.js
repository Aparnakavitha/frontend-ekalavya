// eventServices.js

import axios from "axios";

const BASE_URL = "http://localhost:8888/events";

/**
 * Fetches all events where completed = 0.
 * @returns {Promise<Array>} Array of events
 */
export const fetchAllEvents = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        completed: 0
      }
    });
    return response.data.responseData;
  } catch (error) {
    console.error("Error fetching all events:", error);
    throw error;
  }
};

/**
 * Fetches events from the API.
 * @param {Object} params
 * @returns {Promise}
 */
export const fetchEvents = async (params = {}) => {
  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data; // Assuming response.data directly contains the array of events
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
    const response = await axios.get("http://localhost:8888/enrollment", {
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
 * Enrolls a participant in an event.
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
    const response = await axios.post(`http://localhost:8888/enrollment?eventId=${eventId}`, eventData);
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

/**
 * Example function to fetch participant ID from backend.
 * Replace with your actual implementation.
 * @param {number} eventId - The event ID for which participant ID is fetched.
 * @returns {Promise<number>} - Promise resolving to participant ID.
 */
export const fetchParticipantIdFromService = async (eventId) => {
  try {
    const response = await axios.get(`${BASE_URL}/participants/${eventId}`);
    return response.data.participantId; // Assuming the response structure has participantId
  } catch (error) {
    console.error("Error fetching participant ID:", error);
    throw error;
  }
};
