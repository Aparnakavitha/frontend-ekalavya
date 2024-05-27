import React from "react";
import styles from "./editSkill.module.css";
import { useForm, Controller } from "react-hook-form";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";

const Editskill = ({ message, skillName,mainHeading }) => {
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
        <div className={styles.allHeading}>
        <header className={styles.head}>{mainHeading}</header>
        {message && skillName && (
          <p className={styles.message}>
            {message} <span className={styles.skillName}>{skillName}</span>
          </p>
          
        )}
        </div>
        <div className={styles.containerInput}>
          <Controller
            name="selecedtLevel"
            control={control}
            render={({ field }) => (
              <InputDropdown
                {...field}
                label="Level"
                placeholder="Select level"
                options={options}
              />
            )}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <PrimaryButton variant="primary" content="Save" width="full" />
      </div>
    </form>
  );
};

export default Editskill;
