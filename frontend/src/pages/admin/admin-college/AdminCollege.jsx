import React, { useState, useEffect } from "react";
import AdminCollegeAction from "../../../layouts/admin-college/components/AdminCollegeAction";
import CollegeCard from "../../../components/cards/CollegeCard";
import { DataView } from "../../../layouts/common";
import { getColleges } from "../../../services/User";

const AdminCollege = () => {
  const [collegeData, setCollegeData] = useState([]);
  useEffect(() => {
    const fetchCollegeData = async () => {
      try {
        const data = await getColleges();
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
      } catch (error) {
        console.error("Error fetching college data:", error);
      }
    };

    fetchCollegeData();
  }, []);
  console.log("_____________________0", collegeData);

  const collegeCardData =
    {
      data: collegeData.map((college) => ({
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

  return (
    <div>
      {/* <Greeting {...greeting} /> */}
      <AdminCollegeAction
        // formSubmit={formSubmit}
        AdminCollegeActionData={AdminCollegeActionData}
        // onSearchChange={handleSearchChange}
      />
      {collegeData.length > 0 ? (
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
