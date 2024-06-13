import axios from "axios";

const API_URL = "http://localhost:8888";

export const getUserDetails = async (params) => {
  try {
    const response = await axios.get(`${API_URL}/users`, {
      params: params, 
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const updateUserDetails = async (params) => {
  try {
    const response = await axios.post(`${API_URL}/users`, params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};


const apiData = {
    userId: null,
    firstName: null,
    lastName: null,
    phoneNo: null,
    dob: null,
    aboutMe: null,
    addresses: [
      {
        addressType: null,
        houseName: null,
        city: null,
        state: null,
        country: null,
        pinCode: null
      },
      {
        addressType: null,
        houseName: null,
        city: null,
        state: null,
        country: null,
        pinCode: null
      }
    ],
    qualifications: [
      {
        degree: null,
        institution: null,
        specialization: null,
        startDate: null,
        endDate: null,
        percentage: null
      },
      {
        degree: null,
        institution: null,
        specialization: null,
        startDate: null,
        endDate: null,
        percentage: null
      }
    ]
  };
  
