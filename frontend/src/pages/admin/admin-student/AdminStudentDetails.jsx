import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SkillList from "../../../layouts/admin-student/components/SkillList";
import EventList from "../../../layouts/admin-student/components/EventsList";
import StudentProfileInfo from "../../../layouts/admin-student/components/StudentProfile";
import {
  getUserDetails,
  addNewUser,
  deleteUser,
} from "../../../services/User";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";
import { useRecoilState } from "recoil";
import { adminStudentSkillState } from "../../../states/Atoms";
import { getSkillsForUser } from "../../../services/Skills";
import { enrollParticipantService } from "../../../services/Event"; // Ensure this import is correct

const fetchStudentDetails = async (userId, setStudentData) => {
  try {
    const params = { userId };
    const data = await getUserDetails(params);
    if (data && data.responseData && data.responseData.length > 0) {
      setStudentData(data.responseData[0]);
    }
  } catch (error) {
    console.error("Error fetching student details:", error);
  }
};

const AdminStudentDetails = () => {
  const [studentsData, setStudentData] = useState(null);
  const [studentSkills, setStudentSkills] = useRecoilState(adminStudentSkillState);
  const [studentEvents, setStudentEvents] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { studentsData: selectedStudent } = location.state || {};

  const fetchStudentSkills = async (userId) => {
    if (userId) {
      try {
        const response = await getSkillsForUser(userId);
        console.log("Fetching skills for userId:", userId);
        console.log("Skills API response:", response);
        
        if (response.length > 0 && response[0].skills) {
          const skills = response[0].skills.map((skill) => ({
            miniHeading: skill.skill_name,  // Use skill_name for miniHeading
            mainHeading: skill.skill_name,
            count: skill.skill_level,
            cardType: "skill",
            canEdit: true,
            canDelete: true,
          }));
          console.log("Formatted skills:", skills);
          setStudentSkills(skills);
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Error fetching student skills:", error);
      }
    }
  };

  const fetchStudentEvents = async (participantId) => {
    try {
      const response = await enrollParticipantService(null, participantId, null);
      const events = response.responseData.enrolled.map((event) => ({
        miniHeading: event.eventType,
        mainHeading: event.eventTitle,
        startDate: event.startDate,
        endDate: event.endDate,
        Description: event.description,
        cardType: event.eventType,
        eventId: event.eventId,
      }));
      setStudentEvents(events);
    } catch (error) {
      console.error("Error fetching student events:", error);
    }
  };

  useEffect(() => {
    if (selectedStudent) {
      setStudentData(selectedStudent);
    }
  }, [selectedStudent]);

  useEffect(() => {
    if (studentsData?.userId) {
      fetchStudentDetails(studentsData.userId, setStudentData);
      fetchStudentSkills(studentsData.userId); // Fetch skills after setting student data
      fetchStudentEvents(studentsData.userId); // Fetch events after setting student data
    }
  }, [studentsData]);

  const handleFormSubmit = async (formData) => {
    try {
      const { dob, phoneNo, aboutMe, addresses, userId, education } = formData;
      const updatedAddresses = addresses.map((address) => ({
        ...address,
        addressId: address.addressId || "",
      }));

      const updatedData = {
        userId,
        dob,
        phoneNo,
        aboutMe,
        addresses: updatedAddresses,
      };

      await addNewUser(updatedData);

      fetchStudentDetails(userId, setStudentData);
      fetchStudentSkills(userId); // Fetch skills after updating student data
      fetchStudentEvents(userId); // Fetch events after updating student data
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handleDelete = async () => {
    try {
      if (studentsData?.userId) {
        const params = { userId: studentsData.userId };
        await deleteUser(params);
        navigate("/admin/student");
      } else {
        console.error("studentsData or studentsData.userId is not defined");
      }
    } catch (error) {
      console.error(`Error deleting user with userId ${studentsData.userId}:`, error);
    }
  };

  if (!studentsData) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <StudentProfileInfo
        studentsData={studentsData}
        onSubmit={handleFormSubmit}
      />
      <SkillList />
      <EventList participantId={studentsData.userId} events={studentEvents} handleDelete={handleDelete} />
    </div>
  );
};

export default AdminStudentDetails;
