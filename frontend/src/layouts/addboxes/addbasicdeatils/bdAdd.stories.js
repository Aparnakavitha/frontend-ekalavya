import React from 'react';
import BdAdd from './bdAdd';
import file from "../../../assets/DP.png"
export default {
  title: 'Layouts/Edit Basic Details ', 
  component: BdAdd, 
};

const Template = (args) => <BdAdd {...args} />;

export const EditBasicDetails = Template.bind({});
EditBasicDetails.args = {
  mainHeading:"Edit Basic Details",
  initialData: {
    dob: "1990-01-01",
    phoneNumber: "1234567890",
    profilePhoto: { name: file }, 
    houseName: "Sample House",
    city: "Sample City",
    pinCode: "123456",
    state: "Sample State",
    country: "Sample Country",
    aboutMe: "This is a sample about me"
  }
}; 
