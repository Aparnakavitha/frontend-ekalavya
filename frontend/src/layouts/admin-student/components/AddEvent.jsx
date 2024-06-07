import React from "react";
import styles from "../AdminStudent.module.css";
import { useForm, Controller } from "react-hook-form";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";
 
const Addevent = ({ mainHeading, options, onSubmit }) => {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();
 
  const handleFormSubmit = (data) => {
    onSubmit(data);
  };
 
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={`${styles["addevent-form"]}`}
    >
      <div className={`${styles["addevent-containerone"]}`}>
        <header className={`${styles["addevent-head"]}`}>{mainHeading}</header>
        <div className={`${styles["addevent-containerinput"]}`}>
          <Controller
            name="selectedEventId"
            control={control}
            rules={{
              required: "Event ID is required",
            }}
            render={({ field }) => (
              <InputDropdown
                {...field}
                label="Select Event(s)"
                placeholder="Event ID"
                options={options}
              />
            )}
          />
          {errors.selectedEventId && (
            <p className={`${styles["addevent-error"]}`}>
              {errors.selectedEventId.message}
            </p>
          )}
        </div>
      </div>
      <div className={`${styles["addevent-buttoncontainer"]}`}>
        <PrimaryButton variant="primary" content="Add" width="full" />
      </div>
    </form>
  );
};
 
export default Addevent;