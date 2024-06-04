import React from "react";
import styles from "../AdminStudent.module.css";
import { useForm, Controller } from "react-hook-form";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";

const Addevent = ({ mainHeading, options }) => {
  const { handleSubmit, control, getValues } = useForm({
    defaultValues: {
      // batchName: "",
      selectedEventId: [],
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles["addevent-form"]}`}
    >
      <div className={`${styles["addevent-containerone"]}`}>
        <header className={`${styles["addevent-head"]}`}>{mainHeading}</header>
        <div className={`${styles["addevent-containerinput"]}`}>
          <Controller
            name="selectedEventId"
            control={control}
            render={({ field }) => (
              <InputDropdown
                {...field}
                label="Select Event(s)"
                placeholder="Event ID"
                options={options}
                isMulti={true}
              />
            )}
          />
        </div>
      </div>
      <div className={`${styles["addevent-buttoncontainer"]}`}>
        <PrimaryButton variant="primary" content="Add" width="full" />
      </div>
    </form>
  );
};

export default Addevent;
