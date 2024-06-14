import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AdminStudentAction from "../../../layouts/admin-student/components/AdminStudentAction";
import ProfileCard from "../../../components/cards/ProfileCard";
import DataView from "../../../layouts/common/components/DataView";
import {
  getColleges,
  postColleges,
  getUserDetails,
  updateUserDetails,
} from "../../../services/User";
import { fetchbatches } from "../../../services/Batch";
import Greeting from "../../../layouts/common/components/Greeting";
import AddCollege from "../../../layouts/admin-student/components/AddCollege";
import CollegeList from "../../../layouts/admin-student/components/CollegeList";
import Modal from "../../../layouts/common/components/Modal";
import ActionComponent from "../../../layouts/common/components/Action";
import AddUser from "../../../layouts/common/components/AddUser";

const AdminStudent = () => {
  const [collegeData, setCollegeData] = useState([]);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [studentsData, setStudentsData] = useState([]);
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchCollegeData = async () => {
      try {
        const data = await getColleges();
        const transformedData = data.responseData.map((college) => [
          college.collegeId,
          college.collegeName,
          college.collegePlace,
          college.collegeDistrict,
          college.collegeState,
          college.collegeCountry,
        ]);
        setCollegeData(transformedData);

        if (location.state && location.state.userData) {
          setUserData(location.state.userData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchStudentsData = async () => {
      try {
        const params = {
          roleId: "3",
        };
        const data = await getUserDetails(params);
        setStudentsData(data.responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCollegeData();
    fetchStudentsData();
  }, [location.state]);

  if (!collegeData.length || !userData) {
    return <div>Loading...</div>;
  }

  console.log(studentsData);

  const AdminStudentData = {
    greetingData: {
      welcome: "Welcome Back",
      name: userData.firstName,
      info: "Here is the information about",
      profile: "Students",
      showButtons: true,
      viewprops: {
        data: collegeData,
        headings: [
          "ClgID",
          "CollegeName",
          "Place",
          "District",
          "State",
          "Country",
        ],
      },
      addprops: {},
    },
    heading: "Students List",
    buttonProps: {
      variant: "tertiary",
      content: "+ Add new Student",
      width: "full",
    },
    searchWidth: "medium",
    searchbarProps: {
      variant: "custom",
      placeholder: "Student Name",
    },
    showFiltersAndReset: true,
    filterProps: [
      {
        Heading: "College",
        Content: collegeData.map((college) => college[1]),
      },
      { Heading: "Batch", Content: ["Batch 1", "Batch 2", "Batch 3"] },
    ],
    resetProps: {
      variant: "secondary",
      content: "Reset",
      width: "full",
    },
    adduserprops: {
      options: collegeData.map((college) => ({
        value: college[0],
        label: college[1],
      })),
      viewCollege: true,
      heading: "Add New Student",
    },
  };

  const dataView = {
    data: studentsData.map((student) => ({
      studentImage: student.profilePicture || "",
      studentName: `${student.firstName || ""} ${student.lastName || ""}`,
      studentId: student.userId || "",
      studentCollege: student.college.collegeName || "",
      studentMail: student.emailId || "",
      studentPhoneNumber: student.phoneNo || "",
      canDelete: false,
    })),
    tableColumns: [
      { key: "studentId", displayName: "Student ID" },
      { key: "studentName", displayName: "Name" },
      { key: "studentCollege", displayName: "College" },
      { key: "studentMail", displayName: "Email ID" },
      { key: "studentPhoneNumber", displayName: "Phone Number" },
    ],
    toggle: true,
    itemsPerPage: 15,
  };

  const handleOpenView = () => {
    setIsViewOpen(true);
  };

  const handleCloseView = () => {
    setIsViewOpen(false);
  };

  const handleOpenAdd = () => {
    setIsAddOpen(true);
  };

  const handleCloseAdd = () => {
    setIsAddOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await postColleges(formData);
      console.log("College added successfully:", response);
      try {
        const data = await getColleges();
        const transformedData = data.responseData.map((college) => [
          college.collegeId,
          college.collegeName,
          college.collegePlace,
          college.collegeDistrict,
          college.collegeState,
          college.collegeCountry,
        ]);
        setCollegeData(transformedData);

        if (location.state && location.state.userData) {
          setUserData(location.state.userData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      handleCloseAdd();
    } catch (error) {
      console.error("Error adding college:", error);
    }
  };

  const GreetingData = {
    ...AdminStudentData.greetingData,
    handleClick: handleOpenView,
    handleClick2: handleOpenAdd,
  };

  const handleOpenAddStudentModal = () => {
    setIsAddStudentOpen(true);
  };

  const handleCloseAddStudentModal = () => {
    setIsAddStudentOpen(false);
  };

  const handleAddStudentFormSubmit = async (formData) => {
    try {
      formData.roleId = 3;
      console.log(formData);
      const response = await updateUserDetails(formData);
      console.log("Student added successfully:", response);

      handleCloseAddStudentModal();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const actionData = {
    ...AdminStudentData,
    buttonProps: {
      ...AdminStudentData.buttonProps,
      onClick: handleOpenAddStudentModal,
    },
  };

  const handleClick = () => {
    navigate(`/admin/student/student-details`);
  };

  return (
    <div>
      <Greeting {...GreetingData} />
      <Modal isOpen={isViewOpen} widthVariant="large" onClose={handleCloseView}>
        {collegeData.length > 0 ? (
          <CollegeList {...AdminStudentData.greetingData.viewprops} />
        ) : (
          <div>No colleges available</div>
        )}
      </Modal>
      <Modal isOpen={isAddOpen} widthVariant="large" onClose={handleCloseAdd}>
        <AddCollege onSubmit={handleFormSubmit} />
      </Modal>

      <ActionComponent {...actionData} />
      <Modal
        isOpen={isAddStudentOpen}
        widthVariant="medium"
        onClose={handleCloseAddStudentModal}
      >
        <AddUser
          {...AdminStudentData.adduserprops}
          onSubmit={handleAddStudentFormSubmit}
        />
      </Modal>
      <DataView
        CardComponent={(props) => (
          <ProfileCard {...props} onClick={handleClick} />
        )}
        {...dataView}
      />
    </div>
  );
};

export default AdminStudent;
