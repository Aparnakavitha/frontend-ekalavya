import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SkillList from "../../../layouts/admin-student/components/SkillList";
import EventList from "../../../layouts/admin-student/components/EventsList";
import EducationalQaulification from "../../../layouts/common/components/EducationalQualification";
import StudentProfileInfo from "../../../layouts/admin-student/components/StudentProfile";
import { getUserDetails, updateUserDetails } from "../../../services/User";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";

const fetchStudentDetails = async (userId, setStudentData) => {
  try {
    const params = {
      userId,
    };
    console.log("useriddd---", userId);
    const data = await getUserDetails(params);
    if (data && data.responseData && data.responseData.length > 0) {
      console.log("Response-----", data.responseData);
      setStudentData(data.responseData[0]);
    }
  } catch (error) {
    console.error("Error fetching student details:", error);
  }
};

const AdminStudentDetails = () => {
  const [studentsData, setStudentData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { studentsData: selectedStudent } = location.state || {};

  useEffect(() => {
    if (selectedStudent) {
      setStudentData(selectedStudent);
    }
  }, [selectedStudent]);

  useEffect(() => {
    if (studentsData) {
      fetchStudentDetails(studentsData.userId, setStudentData);
    }
  }, [studentsData]);

  const handleFormSubmit = async (formData) => {
    try {
      const { dob, phoneNo, aboutMe, addresses, userId, education } = formData;

      // Prepare addresses with addressId included
      const updatedAddresses = addresses.map((address) => ({
        ...address,
        addressId: address.addressId || "", // If addressId is not present, use empty string
      }));

      const updatedData = {
        userId,
        dob,
        phoneNo,
        aboutMe,
        addresses: updatedAddresses,
      };

      await updateUserDetails(updatedData);

      console.log("User details updated successfully!");
      fetchStudentDetails(userId, setStudentData); // Fetch updated mentor details after update
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handleFormSubmit2 = async (formData) => {
    try {
      console.log("Form Submitted with data:", formData);
      const response = await updateUserDetails(formData);
      console.log("Update response:", response);
      fetchStudentDetails(formData.userId, setStudentData);
    } catch (error) {
      console.error("Error updating user details:", error);
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
        onformSubmit={handleFormSubmit2}
      />
      {/* <EducationalQaulification/> */}
      <SkillList />
      <EventList studentId={studentsData.userId} />
    </div>
  );
};

export default AdminStudentDetails;
