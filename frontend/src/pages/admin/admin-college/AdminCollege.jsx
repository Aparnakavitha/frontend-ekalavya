import React, { useState, useEffect } from "react";
import AdminCollegeAction from "../../../layouts/admin-college/components/AdminCollegeAction";
import CollegeCard from "../../../components/cards/CollegeCard";
import { DataView } from "../../../layouts/common";
import { getColleges } from "../../../services/User";
import { postColleges } from "../../../services/User";
import {  toast } from "react-toastify";
import {  useLocation } from "react-router-dom";


const AdminCollege = () => {
  const location = useLocation();
  const [collegeData, setCollegeData] = useState([]);
  const [filteredCollegeData, setFilteredCollegeData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [count, setCount] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCollegeData = async () => {
      try {
        const data = await getColleges();
        const count = data.responseData.length;
        setCount(count);
        const transformedData = data.responseData
          .map((college) => [
            college.collegeId,
            college.collegeName,
            college.collegePlace,
            college.collegeDistrict,
            college.collegeState,
            college.collegeCountry,
          ])
          .sort((a, b) => a[1].localeCompare(b[1]));

        setCollegeData(transformedData);
        setFilteredCollegeData(transformedData);
      } catch (error) {
        console.error("Error fetching college data:", error);
      }
    };

    fetchCollegeData();
  }, []);
  console.log("_____________________0", collegeData);


  const handleSearchChange = (college) => {
    const searchValue = college.toLowerCase();
    setSearchTerm(searchValue);

    const filteredData = collegeData.filter((college) =>
      college[1].toLowerCase().includes(searchValue)
    );
    setFilteredCollegeData(filteredData);
  };

  const collegeCardData =
    {
      data: filteredCollegeData.map((college) => ({
        miniHeading: college[0],
        mainHeading: college[1],
        Count: 150,
        cardType: "college",
        handleClick: () => console.log("Card clicked"),
        showCount: true,
        viewAnimation: false,
        showPlace: true,
        placeHeading: `${college[2]}, ${college[3]}`,
      })),
      tableColumns: [
        { key: "miniHeading", displayName: "College ID" },
        { key: "mainHeading", displayName: "College Name" },
        { key: "Count", displayName: "Count" },
        { key: "placeHeading", displayName: "Place" },
      ],
      toggle: true,
      itemsPerPage: 12,
    };
  console.log("_____________________1", collegeCardData);

  const AdminCollegeActionData = {
    heading: "Colleges List",
    buttonProps: {
      variant: "tertiary",
      content: "+ Add New College",
      width: "full",
    },
    showDelete: false,
    searchWidth: "small",
    searchbarProps: {
      variant: "custom",
      placeholder: "Colleges",
    },
    showFiltersAndReset: false,
    searchPlaceholder: "Search Colleges",
  };

  const formSubmit = async (formData) => {
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
        setFilteredCollegeData(transformedData);

        if (location.state && location.state.userData) {
          setUserData(location.state.userData);
        }
      } catch (error) {
        toast.error("Error creating college", {
          position: "top-center",
          autoClose: 5000,
        });
      }
      toast.success("College Added", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error adding college:", error);
    }
  };

  return (
    <div>
      {/* <Greeting {...greeting} /> */}
      <AdminCollegeAction
        count={count}
        formSubmit={formSubmit}
        AdminCollegeActionData={AdminCollegeActionData}
        onSearchChange={handleSearchChange}
      />
      {filteredCollegeData.length > 0 ? (
        <DataView CardComponent={CollegeCard} {...collegeCardData} />
      ) : (
        <p style={{ color: "white", paddingLeft: "80px", paddingTop: "30px" }}>
          No Colleges to display
        </p>
      )}
    </div>
  );
};

export default AdminCollege;
