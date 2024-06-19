import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SkillList from "../../../layouts/admin-student/components/SkillList";
import EventList from "../../../layouts/admin-student/components/EventsList";
import EducationalQaulification from "../../../layouts/common/components/EducationalQualification";
import StudentProfileInfo from "../../../layouts/admin-student/components/StudentProfile";
import {
  getUserDetails,
  updateUserDetails,
  addNewUser,
} from "../../../services/User";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";
import { useRecoilState } from "recoil";
import { adminStudentSkillState } from "../../../states/Atoms";
import { getSkillsForUser } from "../../../services/student/skills/StudentSkillService";

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

const userId = 1;

const AdminStudentDetails = () => {
  const [studentsData, setStudentData] = useState(null);
  const [studentSkills, setStudentSkills] = useRecoilState(
    adminStudentSkillState
  );
  const navigate = useNavigate();
  const location = useLocation();
  const { studentsData: selectedStudent } = location.state || {};

  const fetchStudentSkills = async () => {
    const response = await getSkillsForUser(userId);
    const skills = response.map((skill) => ({
      miniHeading: skill.skill_id,
      mainHeading: skill.skill_name,
      count: skill.count,
      cardType: "skill",
      canEdit: true,
      canDelete: true,
    }));

    console.log("Formatted skills: ",skills);
    setStudentSkills(skills);
  };

  useEffect(() => {
    fetchStudentSkills();
  }, []);

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

      console.log("User details updated successfully!");
      fetchStudentDetails(userId, setStudentData);
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handleFormSubmit2 = async (formData) => {
    try {
      console.log("Form Submitted with data:", formData);
      const response = await addNewUser(formData);
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
