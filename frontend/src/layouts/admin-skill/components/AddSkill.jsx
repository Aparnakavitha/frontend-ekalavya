import React, { useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import styles from "../AdminSkill.module.css";
import Input from "../../../components/inputbox/InputBox";

const AddSkill = () => {
  const [skill, setSkill] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setSkill(event.target.value);
    setError("");
  };

  const validateSkill = (skill) => {
    if (!skill.trim()) {
      return "Skill cannot be empty.";
    }
    if (/^\s/.test(skill)) {
      return "Skill cannot start with a space.";
    }
    if (!/[a-zA-Z]/.test(skill)) {
      return "Skill must contain at least one letter.";
    }
    return "";
  };

  const handleAddSkill = () => {
    const validationError = validateSkill(skill);
    if (validationError) {
      setError(validationError);
      return;
    }
    console.log(skill);
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <div className={`${styles["addskill-boxcontainer"]}`}>
      <div className={`${styles["addskill-layoutcontainer"]}`}>
        <p>Create New Skill</p>
        <div className={`${styles["addskill-inputbox"]}`}>
          <Input
            size="normal"
            label="Create Skills"
            placeholders={["Skills"]}
            value={skill}
            onChange={handleInputChange}
            id="normal-input"
          />
        </div>
        {error && <div className={`${styles["error-message"]}`}>{error}</div>}
        <div className={`${styles["addskill-buttonrow"]}`}>
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
