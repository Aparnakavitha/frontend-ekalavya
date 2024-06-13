import { React, useState } from "react";
import UserProfileInfo from "../../common/components/UserProfileInfo";
import Modal from "../../common/components/Modal";
import BasicDetails from "../../common/components/BasicDetails";
import DeleteBox from "../../common/components/DeleteBox";
import profilepic from "../../../assets/DP.png";

const MentorProfileInfo = (props) => {
  const mentorData  = props; 

  const sample = {
    role: "mentor",
    ...mentorData,
    hasDelete: false,
    onClickEdit: () => {
      handleOpenEditBasicDetails();
      console.log(mentorData);
    },
    onClickDelete: () => {
      handleOpenDeleteBasicDetails();
    },
  };
  

  const [isEditDetailsOpen, setIsEditDetailsOpen] = useState(false);
  const [isDeleteDetailsIsOpen, setIsDeleteDetailsIsOpen] = useState(false);

  const handleOpenEditBasicDetails = () => {
    setIsEditDetailsOpen(true);
  };

  const handleCloseEditBasicDetails = () => {
    setIsEditDetailsOpen(false);
  };

  const handleOpenDeleteBasicDetails = () => {
    setIsDeleteDetailsIsOpen(true);
  };

  const handleCloseDeleteBasicDetails = () => {
    setIsDeleteDetailsIsOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Submitted with data:", formData);
    handleCloseEditBasicDetails();
  };

  const editBox = {
    mainHeading: "Edit Basic Details",
    initialData: {...mentorData,
    },
    isEdit: true,
  };

  const deleteBox = {
    title: "Confirm deletion",
    message: "This action will delete the user. Are you sure?",
    buttonText: "Confirm",
  };

  return (
    <div>
      <UserProfileInfo {...sample} />
      <Modal
        isOpen={isEditDetailsOpen}
        widthVariant="medium"
        onClose={handleCloseEditBasicDetails}
      >
        <BasicDetails {...editBox} />
      </Modal>

      <Modal
        isOpen={isDeleteDetailsIsOpen}
        widthVariant="medium"
        onClose={handleCloseDeleteBasicDetails}
      >
        <DeleteBox {...deleteBox} />
      </Modal>
    </div>
  );
};

export default MentorProfileInfo;




const jjl= {
  "userId":1 ,
  "firstName": "Raju",
  "lastName": "P",
  "phoneNo": "9874587458",
  "dob": "1990-05-15",
  "aboutMe": "I'm a btech graduate",
  "addresses": [
    {
      "addressType": "home",
      "houseName": "123 Main St",
      "city": "city",
      "state": "State",
      "country": "Country",
      "pinCode": "12345"
    },
    {
      "addressType": "home",
      "houseName": "456 Business Ave",
      "city": "Worktown",
      "state": "State",
      "country": "Country",
      "pinCode": "54321"
    }
  ],
  "qualifications": [
    {
        "degree": "Btech CS",
        "institution": "KTU",
        "specialization": "Btech",
        "startDate": "2005-01-01",
        "endDate": "2009-01-01",
        "percentage": "88"
    },
    {  
        "degree": "Mtech in CS",
        "institution": "KTU",
        "specialization": "Mtech",
        "startDate": "2010-01-01",
        "endDate": "2012-01-01",
        "percentage": "88.2"
 
 
    }
 ]
 }
  
