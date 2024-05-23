import React, { useState } from "react";
import styles from "./addEvent.module.css";
import { useForm, Controller } from "react-hook-form";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";
const Addevent = () => {
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
        <header className={styles.head}>Add Profile links</header>
        <div className={styles.containerInput}>
          <Controller
            name="selectedEventId"
            control={control}
            render={({ field }) => (
              <InputDropdown
                {...field}
                label="Select Event ID"
                placeholder="Event ID"
                options={options}
              />
            )}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <PrimaryButton variant="primary" content="Add" width="full" />
      </div>
    </form>
  );
};

export default Addevent;
