import React from "react";
import styles from "../AdminStudent.module.css"
import { useForm, Controller } from "react-hook-form";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";

const Addevent = ({ mainHeading, options }) => {
  const { handleSubmit, control, getValues } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles["addEvent-form"]}`}
    >
      <div className={`${styles["addEvent-containerOne"]}`}>
        <header className={`${styles["addEvent-head"]}`}>{mainHeading}</header>
        <div className={`${styles["addEvent-containerInput"]}`}>
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
      <div className={`${styles["addEvent-buttonContainer"]}`}>
        <PrimaryButton variant="primary" content="Add" width="full" />
      </div>
    </form>
  );
};

export default Addevent;
