import React from "react";
import styles from "../AdminBatches.module.css";
import Input from "../../../components/inputbox/InputBox";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { useForm, Controller } from "react-hook-form";

const Batchoperations = ({ mainHeading, options }) => {
  const { handleSubmit, control, getValues } = useForm({
    defaultValues: {
      batchName: "",
      studentIds: [],
    },
  });
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles["batchoperations-form"]}`}
    >
      <div className={`${styles["batchoperations-containerone"]}`}>
        <header className={`${styles["batchoperations-head"]}`}>
          {mainHeading}
        </header>
        <div className={`${styles["batchoperations-containerinput"]}`}>
          <Controller
            name="batchName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Enter Batch Name"
                placeholders={["Batch Name"]}
                size="normal"
              />
            )}
          />
          <Controller
            name="studentIds"
            control={control}
            render={({ field }) => (
              <InputDropdown
                label="Student ID(s)"
                placeholder="Student ID"
                options={options}
                isMulti={true}
                {...field}
              />
            )}
          />
        </div>
      </div>
      <div className={`${styles["batchoperations-buttoncontainer"]}`}>
        <PrimaryButton variant="primary" content="Create Batch" width="full" />
      </div>
    </form>
  );
};

export default Batchoperations;
