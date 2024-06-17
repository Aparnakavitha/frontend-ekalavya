import React, { useState } from "react";
import PropTypes from "prop-types";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import styles from "../AdminSkill.module.css";
import Input from "../../../components/inputbox/InputBox";

const DeleteSkill = ({ onSubmit, onCancel }) => {
  const [skill, setSkill] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setSkill(event.target.value);
    setError("");
  };

  const validateSkill = (skill) => {
    if (!skill.trim()) {
      return "Skill ID cannot be empty.";
    }
    if (/^\s/.test(skill)) {
      return "Skill ID cannot start with a space.";
    }
    // if (!/[a-zA-Z]/.test(skill)) {
    //   return "Skill ID must contain at least one letter.";
    // }
    return "";
  };

  const handleDeleteSkill = () => {
    const validationError = validateSkill(skill);
    if (validationError) {
      setError(validationError);
      return;
    }
    onSubmit(skill);
  };

  return (
    <div className={`${styles["deleteskill-boxcontainer"]}`}>
      <div className={`${styles["deleteskill-layoutcontainer"]}`}>
        <p>Delete Skill</p>
        <div className={`${styles["deleteskill-inputbox"]}`}>
          <Input
            size="normal"
            label="Enter Skill ID"
            placeholders={["Skill ID"]}
            value={skill}
            onChange={handleInputChange}
            id="normal-input"
          />
        </div>
        {error && <div className={`${styles["error-message"]}`}>{error}</div>}
        <div className={`${styles["deleteskill-buttonrow"]}`}>
          <PrimaryButton
            variant="secondary"
            content="Cancel"
            onClick={onCancel}
            width="full"
          />
          <PrimaryButton
            variant="primary"
            content="Delete"
            onClick={handleDeleteSkill}
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

DeleteSkill.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default DeleteSkill;
