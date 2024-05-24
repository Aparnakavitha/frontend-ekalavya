import React from "react";
import styles from "./addNewskill.module.css";
import { useForm, Controller } from "react-hook-form";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";

const AddNewskill = () => {
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
            name="selectedSkills"
            control={control}
            render={({ field }) => (
              <InputDropdown
                {...field}
                label="Select Skills"
                placeholder="Select your skill"
                options={options}
              />
            )}
          />
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
        <PrimaryButton variant="primary" content="Add Skill" width="full" />
      </div>
    </form>
  );
};

export default AddNewskill;
