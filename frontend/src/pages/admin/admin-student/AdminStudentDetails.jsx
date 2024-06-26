import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SkillList from "../../../layouts/admin-student/components/SkillList";
import EventList from "../../../layouts/admin-student/components/EventsList";
import StudentProfileInfo from "../../../layouts/admin-student/components/StudentProfile";
import { getUserDetails, addNewUser, deleteUser } from "../../../services/User";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";
import { useRecoilState } from "recoil";
import { adminStudentSkillState } from "../../../states/Atoms";
import { getSkillsForUser } from "../../../services/Skills";
import {
  enrollParticipantService,
  fetchEventsService,
  addEnrollmentService,
} from "../../../services/Event";

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

  const [studentSkills, setStudentSkills] = useRecoilState(
    adminStudentSkillState
  );
  const [studentEvents, setStudentEvents] = useState([]);
  const [eventOptions, setEventOptions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { studentsData: selectedStudent } = location.state || {};


  const fetchStudentEvents = async (participantId) => {
    try {
      const response = await enrollParticipantService(
        null,
        participantId,
        null
      );
      const enrolledEvents = response.responseData.enrolled.map((event) => ({
        miniHeading: event.eventType,
        mainHeading: event.eventTitle,
        startDate: event.startDate,
        endDate: event.endDate,
        Description: event.description,
        cardType: event.eventType,
        eventId: event.eventId,
      }));
      const completedEvents = response.responseData.completed.map((event) => ({
        miniHeading: event.eventType,
        mainHeading: event.eventTitle,
        startDate: event.startDate,
        endDate: event.endDate,
        Description: event.description,
        cardType: event.eventType,
        eventId: event.eventId,
      }));
      setStudentEvents([...enrolledEvents, ...completedEvents]);
      return [...enrolledEvents, ...completedEvents];
    } catch (error) {
      console.error("Error fetching student events:", error);
      return [];
    }
  };

  const fetchEventOptions = async (enrolledEventIds) => {
    try {
      const eventData = await fetchEventsService({ completed: 0 });
      const formattedOptions = eventData
        .filter((event) => !enrolledEventIds.includes(event.eventId))
        .map((event) => ({
          value: event.eventId,
          label: `${event.eventId}-${event.eventTitle}`,
        }));
      setEventOptions(formattedOptions);
    } catch (error) {
      console.error("Error fetching event options:", error);
    }
  };

  useEffect(() => {
    if (selectedStudent) {
      setStudentData(selectedStudent);
    }
  }, [selectedStudent]);

  useEffect(() => {
    const fetchData = async () => {
      if (studentsData?.userId) {
        await fetchStudentDetails(studentsData.userId, setStudentData);
        const studentEvents = await fetchStudentEvents(studentsData.userId);
        const enrolledEventIds = studentEvents.map((event) => event.eventId);
        await fetchEventOptions(enrolledEventIds);
      }
    };
    fetchData();
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

      const fetchData = async () => {
        await fetchStudentDetails(userId, setStudentData);
        const studentEvents = await fetchStudentEvents(userId);
        const enrolledEventIds = studentEvents.map((event) => event.eventId);
        await fetchEventOptions(enrolledEventIds);
      };
      fetchData();
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handleEnrollSubmit = async (enrollmentData) => {
    try {
      await addEnrollmentService(enrollmentData.selectedEventId, {
        participantId: studentsData.userId,
      });
      // Update student events list
      const updatedEvents = await fetchStudentEvents(studentsData.userId);
      const enrolledEventIds = updatedEvents.map((event) => event.eventId);
      await fetchEventOptions(enrolledEventIds);
    } catch (error) {
      console.error("Error enrolling in event:", error);
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
      console.error(
        `Error deleting user with userId ${studentsData.userId}:`,
        error
      );
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
      <SkillList studentId={studentsData.userId} />
      <EventList
        participantId={studentsData.userId}
        events={studentEvents}
        handleDelete={handleDelete}
        eventOptions={eventOptions}
        onSubmit={handleEnrollSubmit}
      />
    </div>
  );
};

export default AdminStudentDetails;
