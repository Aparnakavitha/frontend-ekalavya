import axios from "axios";

const API_URL = "http://localhost:8888";

export const getMentorDetails = async (params) => {
  try {
    const response = await axios.get(`${API_URL}/users`, {
      params: params, // Pass the params object directly
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
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
  
