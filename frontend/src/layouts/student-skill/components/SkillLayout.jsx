import React, { useState } from "react";
import Card from "../../../components/cards/SkillCard";
import { GoPlus } from "react-icons/go";
import styles from "../StudentSkill.module.css";
import Modal from "../../common/components/Modal";
import DeleteBox from "../../common/components/DeleteBox";
import CombinedSkillForm from "../../common/components/CombinedSkillForm";
import { initialSkills, handleAddSkill } from "./skillData"; // Importing here

const Layout = () => {
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    index: null,
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log("Form Submitted with data:", formData);
    setIsOpen(false);
    handleAddSkill(formData); // Directly using handleAddSkill
  };

  const handleDeleteSkill = () => {
    console.log("Delete Skill");
    setDeleteModal({ isOpen: false, index: null });
  };

  const options = [
    { value: "abc", label: "ABC" },
    { value: "xyz", label: "XYZ" },
    { value: "pqr", label: "PQR" },
  ];

  return (
    <div className={styles["skilllayout-skilltitle"]}>
      <h3>Skills </h3>
      <div className={styles["skilllayout-layoutcontainer"]}>
        {initialSkills.map((skill, index) => (
          <div key={index} className={styles["skilllayout-skillcontainer"]}>
            <Card
              subtitle={skill.Level}
              title={skill.mainHeading}
              showCloseIcon={true}
              onClose={() => setDeleteModal({ isOpen: true, index: index })}
            />
          </div>
        ))}
        <div className={styles["skilllayout-addbutton"]}>
          <GoPlus
            className={styles["skilllayout-plusicon"]}
            onClick={() => setIsOpen(true)}
          />
        </div>
        <Modal
          isOpen={isOpen}
          widthVariant="large"
          onClose={() => setIsOpen(false)}
        >
          <CombinedSkillForm
            mainHeading="Add New Skill"
            isSelect={true}
            isEditlevel={false}
            displaytext="This skill is only to be placed at level 1"
            buttonTitle="Add Skill"
            options={options}
            onSubmit={handleFormSubmit}
          />
        </Modal>
        <Modal
          isOpen={deleteModal.isOpen}
          widthVariant="small"
          onClose={() => setDeleteModal({ isOpen: false, index: null })}
        >
          <DeleteBox
            title="Delete Skill"
            message="Are you sure you want to delete this skill?"
            buttonText="Delete"
            onCancel={() => setDeleteModal({ isOpen: false, index: null })}
            onConfirm={handleDeleteSkill}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Layout;
