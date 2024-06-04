import React, { useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import styles from "../AdminSkill.module.css";
import Input from "../../../components/inputbox/InputBox";

const AddSkill = ({ onSubmit, onClose }) => {
  const [skill, setSkill] = useState("");

  const handleInputChange = (event) => {
    setSkill(event.target.value);
  };

  const handleAddSkill = () => {
    onSubmit(skill);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className={styles["addskill-boxcontainer"]}>
      <div className={styles["addskill-layoutcontainer"]}>
        <p>Create New Skill</p>
        <div className={styles["addskill-inputbox"]}>
          <Input
            size="normal"
            label="Create Skills"
            placeholders={["Skills"]}
            value={skill}
            onChange={handleInputChange}
            id="normal-input"
          />
        </div>
        <div className={styles["addskill-buttonrow"]}>
          <PrimaryButton
            variant="primary"
            content="Cancel"
            onClick={handleCancel}
            width="full"
          />
          <PrimaryButton
            variant="primary"
            content="Add"
            onClick={handleAddSkill}
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default AddSkill;
