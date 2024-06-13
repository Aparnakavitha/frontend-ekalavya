import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AdminStudentAction from "../../../layouts/admin-student/components/AdminStudentAction";
import ProfileCard from "../../../components/cards/ProfileCard";
import DataView from "../../../layouts/common/components/DataView";
import { getColleges, postColleges } from "../../../services/User";
import Greeting from "../../../layouts/common/components/Greeting";
import AddCollege from "../../../layouts/admin-student/components/AddCollege";
import CollegeList from "../../../layouts/admin-student/components/CollegeList";
import Modal from "../../../layouts/common/components/Modal";

const AdminStudent = () => {
  const [collegeData, setCollegeData] = useState([]);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, [location.state]);

  if (!collegeData.length || !userData) {
    return <div>Loading...</div>;
  }

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
    dataView: {
      data: [
        {
          studentImage: "image",
          studentName: "John Doe",
          studentId: "STDID3456",
          studentCollege: "St Christ College",
          studentMail: "johndoe@email.com",
          studentPhoneNumber: "(555) 555-5555",
          canDelete: false,
        },
      ],
      tableColumns: [
        { key: "studentId", displayName: "Student ID" },
        { key: "studentName", displayName: "Name" },
        { key: "studentCollege", displayName: "College" },
        { key: "studentMail", displayName: "Email ID" },
        { key: "studentPhoneNumber", displayName: "Phone Number" },
      ],
      toggle: true,
      itemsPerPage: 15,
    },
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
      <AdminStudentAction />
      <DataView
        CardComponent={(props) => (
          <ProfileCard {...props} onClick={handleClick} />
        )}
        {...AdminStudentData.dataView}
      />
    </div>
  );
};

export default AdminStudent;
