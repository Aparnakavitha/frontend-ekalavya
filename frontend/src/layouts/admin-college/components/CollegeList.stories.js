import React from "react";
import CollegeList from "./CollegeList";

export default {
  title: "layouts/Admin-college/Components/CollegeList",
  component: CollegeList,
  args: {
    data: [
      [
        "CLG001",
        "Massachusetts Institute of Technology",
        "Cambridge",
        "Massachusetts",
        "USA",
      ],
      ["CLG002", "Stanford University", "Stanford", "California", "USA"],
      ["CLG003", "Harvard University", "Cambridge", "Massachusetts", "USA"],
      [
        "CLG004",
        "California Institute of Technology",
        "Pasadena",
        "California",
        "USA",
      ],
      ["CLG005", "University of Oxford", "Oxford", "Oxfordshire", "UK"],
      [
        "CLG006",
        "University of Cambridge",
        "Cambridge",
        "Cambridgeshire",
        "UK",
      ],
      ["CLG007", "Imperial College London", "London", "Greater London", "UK"],
      ["CLG008", "ETH Zurich", "Zurich", "Zurich", "Switzerland"],
      ["CLG009", "University of Chicago", "Chicago", "Illinois", "USA"],
      [
        "CLG010",
        "National University of Singapore",
        "Singapore",
        "Singapore",
        "Singapore",
      ],
      ["CLG011", "Princeton University", "Princeton", "New Jersey", "USA"],
      ["CLG012", "Yale University", "New Haven", "Connecticut", "USA"],
      ["CLG013", "Columbia University", "New York City", "New York", "USA"],
      [
        "CLG014",
        "University of California, Berkeley",
        "Berkeley",
        "California",
        "USA",
      ],
      [
        "CLG015",
        "University of Pennsylvania",
        "Philadelphia",
        "Pennsylvania",
        "USA",
      ],
      [
        "CLG016",
        "University of California, Los Angeles",
        "Los Angeles",
        "California",
        "USA",
      ],
      ["CLG017", "University College London", "London", "Greater London", "UK"],
      ["CLG018", "University of Toronto", "Toronto", "Ontario", "Canada"],
      ["CLG019", "Cornell University", "Ithaca", "New York", "USA"],
      ["CLG020", "Tsinghua University", "Beijing", "Beijing", "China"],
    ],
    headings: ["ClgID", "CollegeName", "Place", "State", "Country"],
  },
};

export const Collegelist = (args) => <CollegeList {...args} />;
