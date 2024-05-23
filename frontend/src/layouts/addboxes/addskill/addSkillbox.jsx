import React, { useState } from "react";
import styles from "./addSkillbox.module.css";
import { useForm, Controller } from "react-hook-form";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";
const Addskill = () => {
  const { handleSubmit, control, getValues } = useForm();
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  const options = [
    { value: "abc", label: "ABC" },
    { value: "xyz", label: "XYZ" },
    { value: "pqr", label: "PQR" },
  ];
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.containerOne}>
        <header className={styles.head}>Add New Skill</header>
        <div className={styles.containerInput}>
          <Controller
            name="skill"
            control={control}
            render={({ field }) => (
              <InputDropdown
                {...field}
                label="Select Skills"
                placeholder="Skills"
                options={options}
              />
            )}
          />
        </div>
        <div className={styles.text}>
          This skill is only to be placed at level 4
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <PrimaryButton variant="primary" content="Add" width="full" />
      </div>
    </form>
  );
};

export default Addskill;
