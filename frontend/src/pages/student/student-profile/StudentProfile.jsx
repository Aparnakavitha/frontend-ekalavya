import React, { useState, useEffect } from "react";
import AboutMe from "../../../layouts/common/components/AboutMe";
import Upcoming from "../../../layouts/student-profile/components/Upcoming";
import StudentProfileInfo from "../../../layouts/student-profile/components/StudentProfileInfo";
import EducationalQualification from "../../../layouts/common/components/EducationalQualification";
import { getUserDetails, updateUserDetails } from "../../../services/User";
import profilepic from "../../../assets/DP.png";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";
import { fetchEventsService } from "../../../services/Event";

const StudentProfile = () => {
  const [studentData, setStudentData] = useState(null);
  const [eventData, setEventData] = useState(null);

  const fetchData = async () => {
    try {
      const userId = sessionStorage.getItem("user_id");
      const params = {
        userId: userId,
      };
      const data = await getUserDetails(params);
      const eventdata = await fetchEventsService({ completed: 0 });
      console.log(eventdata);
      setEventData(eventdata);

      // // Assuming data.responseData is an array and we want the first element
      if (data.responseData[0]) {
        setStudentData(data.responseData[0]);
      } else {
        console.error("No student data found");
        // Handle case where no student data is found
      }
      console.log("Student data:", data.responseData);
    } catch (error) {
      console.error("Error fetching student data:", error);
      // Handle error state or display a message to the user
    }
  };
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once on component mount
  const handleFormSubmit = async (formData) => {
    try {
      console.log("Form Submitted with data:", formData);
      const response = await updateUserDetails(formData);
      console.log("Update response:", response);
      fetchData(); // Refetch data after update
    } catch (error) {
      console.error("Error updating user details:", error);
      // Handle error state or display a message to the user
    }
  };

  if (!studentData) {
    return <LoadingSpinner />; // Display a loading spinner while data is being fetched
  }
  const transformEventData = (events) => {
    return events.map(event => ({
      eventId:event.eventId,
      main: event.eventTitle,
      sub: event.location,
      start: new Date(`1970-01-01T${event.startTime}`).toLocaleTimeString([], { hour: '2-digit', hour12: true }).toLowerCase(),
      end: new Date(`1970-01-01T${event.endTime}`).toLocaleTimeString([], { hour: '2-digit', hour12: true }).toLowerCase(),
      status: "upcoming",
      date: new Date(event.startDate).getDate(), // Extracting the day from startDate
    }));
  };
  const transformedEventData = eventData ? transformEventData(eventData) : [];
  console.log(transformedEventData);

  const about = {
    title: "About Me",
    description: studentData.aboutMe || "",
  };

  const homeAddress = studentData.addresses.find(
    (address) => address.addressType === "home"
  );

  const EditableData = {
    userId: studentData.userId,
    dob: studentData.dob,
    phoneNo: studentData.phoneNo,
    addresses: [
      {
        addressId: homeAddress?.addressId || "",
        houseName: homeAddress?.houseName || "",
        city: homeAddress?.city || "",
        pinCode: homeAddress?.pinCode || "",
        state: homeAddress?.state || "",
        country: homeAddress?.country || "",
      },
    ],
    aboutMe: studentData.aboutMe || "",
  };

  const profileData = {
    profilepic: profilepic,
    name: `${studentData.firstName} ${studentData.lastName}`,
    college: studentData.college?.collegeName || "",
    email: studentData.emailId,
  };

  const Education = studentData.qualifications || [];

  return (
    <div>
      <StudentProfileInfo
        profileData={profileData}
        EditableData={EditableData}
        onFormSubmit={handleFormSubmit}
      />
      <EducationalQualification
        qualifications={Education}
        userId={studentData.userId}
        onFormSubmit={handleFormSubmit}
      />
      <AboutMe {...about} />
      <Upcoming events={transformedEventData}/>
    </div>
  );
};

export default StudentProfile;
