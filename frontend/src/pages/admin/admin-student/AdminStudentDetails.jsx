import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const [studentData, setStudentData] = useState(null);
  const location = useLocation();
  const { studentData: selectedStudent } = location.state || {};

  useEffect(() => {
    if (selectedStudent) {
      setStudentData(selectedStudent);
    }
  }, [selectedStudent]);

  useEffect(() => {
    if (studentData) {
      fetchStudentDetails(studentData.userId, setStudentData);
    }
  }, [studentData]);

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

  if (!studentData) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <StudentProfileInfo
        studentData={studentData}
        onSubmit={handleFormSubmit}
        onformSubmit={handleFormSubmit2}
      />
      {/* <EducationalQaulification/> */}
      <SkillList />
      <EventList studentId={studentData.userId} />
    </div>
  );
};

export default AdminStudentDetails;
