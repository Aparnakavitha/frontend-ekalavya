import { React, useState } from "react";
import UserProfileInfo from "../../common/components/UserProfileInfo";
import Modal from "../../common/components/Modal";
import BasicDetails from "../../common/components/BasicDetails";
import DeleteBox from "../../common/components/DeleteBox";
import profilepic from "../../../assets/DP.png";

const MentorProfileInfo = (props) => {
  const sample = {
    role: "mentor",
    profilepic:  profilepic ,
    name: "Emma Watson",
    college: "Christ University",
    dob: "1990-01-01",
    email: "emmawatson@gmail.com",
    phoneNumber: 8755383632,
    houseName: "Sample House",
    city: "Sample City",
    pinCode: "123456",
    state: "Sample State",
    country: "Sample Country",
    hasDelete: false,
    onClickEdit: () => {
      handleOpenEditBasicDetails();
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
    initialData: {
      profilepic: sample.profilepic,
      name: sample.name,
      dob: sample.dob,
      college: sample.college,
      phoneNumber: sample.phoneNumber,
      houseName: "Skyline villa",
      city: "Bengaluru",
      pinCode: "795432",
      state: "Karnataka",
      country: "India",
      aboutMe: "Mumble mumble mumble",
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
