import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SkillList from "../../../layouts/admin-student/components/SkillList";
import EventList from "../../../layouts/admin-student/components/EventsList";
import StudentProfileInfo from "../../../layouts/admin-student/components/StudentProfile";
import { getUserDetails, addNewUser, deleteUser } from "../../../services/User";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";
import { useRecoilState } from "recoil";
import { adminStudentSkillState } from "../../../states/Atoms";
import { getSkillsForUser } from "../../../services/Skills";
import { toast } from "react-toastify";
import {
  enrollParticipantService,
  fetchEventsService,
  addEnrollmentService,
} from "../../../services/Event";
import EducationalQualification from "../../../layouts/common/components/EducationalQualification";

const fetchStudentDetails = async (userId) => {
  try {
    const params = { userId };
    const data = await getUserDetails(params);
    if (data && data.responseData && data.responseData.length > 0) {
      return data.responseData[0];
    }
    return null;
  } catch (error) {
    console.error("Error fetching student details:", error);
    return null;
  }
};

const AdminStudentDetails = () => {
  const [studentsData, setStudentData] = useState(null);
  const [studentSkills, setStudentSkills] = useRecoilState(
    adminStudentSkillState
  );
  const [studentEvents, setStudentEvents] = useState([]);
  const [eventOptions, setEventOptions] = useState([]);
  const [isEditDetailsOpen, setIsEditDetailsOpen] = useState(false);
  const [educationData, setEducationData] = useState(null);
  const [isEditEducationOpen, setIsEditEducationOpen] = useState(false);
  const { userId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { studentsData: selectedStudent } = location.state || {};

  useEffect(() => {
    const fetchData = async () => {
      let fetchedStudentData = null;
      if (selectedStudent) {
        fetchedStudentData = selectedStudent;
      } else {
        fetchedStudentData = await fetchStudentDetails(userId);
      }

      if (fetchedStudentData) {
        setStudentData(fetchedStudentData);

        const studentEvents = await fetchStudentEvents(
          fetchedStudentData.userId
        );
        const enrolledEventIds = studentEvents.map((event) => event.eventId);
        await fetchEventOptions(enrolledEventIds);
      }
    };
    fetchData();
  }, [userId, selectedStudent]);

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

      const updatedStudentData = await fetchStudentDetails(userId);
      if (updatedStudentData) {
        setStudentData(updatedStudentData);

        const studentEvents = await fetchStudentEvents(userId);
        const enrolledEventIds = studentEvents.map((event) => event.eventId);
        await fetchEventOptions(enrolledEventIds);
        toast.success("Details updated successfully!");
      } else {
        toast.error("Failed to fetch updated user details.");
      }
    } catch (error) {
      toast.error("Error updating user details!");
    }
  };

  const handleEnrollSubmit = async (enrollmentData) => {
    try {
      await addEnrollmentService(enrollmentData.selectedEventId, {
        participantId: studentsData.userId,
      });
      const updatedEvents = await fetchStudentEvents(studentsData.userId);
      const enrolledEventIds = updatedEvents.map((event) => event.eventId);
      await fetchEventOptions(enrolledEventIds);
      toast.success("Event added successfully!");
    } catch (error) {
      toast.error("Error enrolling in event!");
    }
  };

  const handleDelete = async () => {
    try {
      if (studentsData?.userId) {
        const params = { userId: studentsData.userId };
        await deleteUser(params);
        navigate("/admin/student");
        toast.success("Student deleted successfully!");
      } else {
        console.error("studentsData or studentsData.userId is not defined");
      }
    } catch (error) {
      toast.error(`Error deleting user with userId ${studentsData.userId}:`);
    }
  };

  const handleOpenEditEducation = () => {
    setEducationData(studentsData.qualifications);
    setIsEditEducationOpen(true);
  };

  if (!studentsData) {
    return <LoadingSpinner />;
  }

  const Education = studentsData ? studentsData.qualifications : [];

  return (
    <div>
      <StudentProfileInfo
        studentsData={studentsData}
        onSubmit={handleFormSubmit}
      />
      <EducationalQualification
        qualifications={Education}
        userId={studentsData.userId}
        onFormSubmit={handleFormSubmit}
        onEditClick={handleOpenEditEducation}
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
