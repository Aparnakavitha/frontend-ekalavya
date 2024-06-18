import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProfileCard from "../../../components/cards/ProfileCard";
import DataView from "../../../layouts/common/components/DataView";
import Greeting from "../../../layouts/common/components/Greeting";
import AddCollege from "../../../layouts/admin-student/components/AddCollege";
import CollegeList from "../../../layouts/admin-student/components/CollegeList";
import Modal from "../../../layouts/common/components/Modal";
import ActionComponent from "../../../layouts/common/components/Action";
import AddUser from "../../../layouts/common/components/AddUser";
import {
  getColleges,
  postColleges,
  getUserDetails,
  updateUserDetails,
} from "../../../services/User";
import { fetchBatchParticipants, fetchbatches } from "../../../services/Batch";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";

const fetchStudentsData = async (setStudentsData, params) => {
  try {
    var filterParams = {
      roleId: 3,
    };
    if (params.College) {
      filterParams = {
        collegeId: params.College || "",
      };
    }
    if (params.StudentIds) {
      filterParams = {
        userId: params.StudentIds || "",
      };
    }
    if (params.Batch && !params.StudentIds) {
      setStudentsData([]);
      return;
    }
    console.log(
      "collegse----",
      params.College,
      "useridss---",
      params.StudentIds,
      "batchhh---",
      params.StudentIds
    );
    const filteredParams = Object.fromEntries(
      Object.entries(filterParams).filter(([key, value]) => value !== "")
    );

    console.log("filtered-----", filteredParams);

    const data = await getUserDetails(filteredParams);
    const studentsOnly = data.responseData.filter(
      (item) => item.role && item.role.roleId === 3
    );
    setStudentsData(studentsOnly);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchBatchData = async (setBatchData) => {
  try {
    const data = await fetchbatches();
    const transformedData = data.responseData.map((batch) => [
      batch.batchId,
      batch.batchName,
    ]);
    setBatchData(transformedData);
  } catch (error) {
    console.error("Error fetching batch data:", error);
  }
};

const fetchBatchParticipantsData = async (setParams, params) => {
  try {
    if (params.Batch) {
      var filterParams = {
        batchId: params.Batch || "",
      };
      const filteredParams = Object.fromEntries(
        Object.entries(filterParams).filter(([key, value]) => value !== "")
      );
      console.log("Filtered Params :", filteredParams);
      const participantsData = await fetchBatchParticipants(filteredParams);
      const participantsTransformedData = participantsData.responseData;

      filterParams = {
        userId: participantsTransformedData.join(",") || "",
      };
      const filteredParam = Object.fromEntries(
        Object.entries(filterParams).filter(([key, value]) => value !== "")
      );

      setParams((prevParams) => ({
        ...prevParams,
        StudentIds: participantsTransformedData.join(",") || "",
      }));
    }
  } catch (error) {
    console.error("Error fetching batch data:", error);
  }
};

const AdminStudent = () => {
  const [collegeData, setCollegeData] = useState([]);
  const [batchData, setBatchData] = useState([]);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [studentsData, setStudentsData] = useState([]);
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [cardAnimation, setCardAnimation] = useState(false);
  const [params, setParams] = useState({
    College: "",
    Batch: "",
    StudentIds: "",
  });

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
        console.error("Error fetching college data:", error);
      }
    };

    fetchCollegeData();
  }, [location.state]);

  useEffect(() => {
    fetchStudentsData(setStudentsData, params);
    fetchBatchData(setBatchData, params);
    fetchBatchParticipantsData(setParams, params);
  }, [params]);

  if (!collegeData.length || !userData) {
    return <LoadingSpinner />;
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
        Value: collegeData.map((college) => college[0]),
      },
      {
        Heading: "Batch",
        Content: batchData.map((batch) => batch[1]),
        Value: batchData.map((batch) => batch[0]),
      },
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
    searchPlaceholder: "Search student",
  };

  const dataView = {
    data: studentsData.map((student) => ({
      studentImage: student?.profilePicture || "",
      studentName: `${student?.firstName || ""} ${student?.lastName || ""}`,
      studentId: student?.userId || "",
      studentCollege: student?.college?.collegeName || "",
      studentMail: student?.emailId || "",
      studentPhoneNumber: student?.phoneNo || "",
      canDelete: false,
      viewAnimation: (cardAnimation && student?.newEntry) || false,
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
    setCardAnimation(false);
    setIsAddStudentOpen(true);
  };

  const handleCloseAddStudentModal = () => {
    setIsAddStudentOpen(false);
  };

  const getCollegeName = (collegeId) => {
    const college = collegeData.find((c) => c[0] === collegeId);
    return college ? college[1] : "";
  };

  const handleAddStudentFormSubmit = async (formData) => {
    try {
      formData.roleId = 3;
      formData.profilePicture =
        "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg";

      const response = await updateUserDetails(formData);
      const newStudent = response.responseData;
      newStudent.college = {
        collegeId: formData.collegeId,
        collegeName: getCollegeName(formData.collegeId),
      };
      newStudent.newEntry = true;
      setCardAnimation(true);
      setStudentsData((prevStudentsData) => [newStudent, ...prevStudentsData]);

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

  const handleFilterChange = (filters) => {
    setParams((prevParams) => ({
      ...prevParams,
      ...filters,
      StudentIds: filters.StudentIds || "",
    }));
  };

  const handleCardClick = (userId) => {
    const selectedStudent = studentsData.find(
      (student) => student.userId === userId
    );
    if (selectedStudent) {
      navigate(`/admin/student/student-details/${userId}`, {
        state: { studentsData: selectedStudent },
      });
    } else {
      console.error(`Mentor with userId ${userId} not found.`);
    }
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

      <ActionComponent {...actionData} onFilterChange={handleFilterChange} />
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

      {studentsData.length > 0 ? (
        <DataView
          CardComponent={(props) => (
            <ProfileCard
              {...props}
              onClick={() => handleCardClick(props.studentId)}
            />
          )}
          {...dataView}
        />
      ) : (
        <p style={{ color: "white", paddingLeft: "80px", paddingTop: "30px" }}>
          No students available
        </p>
      )}
    </div>
  );
};

export default AdminStudent;
