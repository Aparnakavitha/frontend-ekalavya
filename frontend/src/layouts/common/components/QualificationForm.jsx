import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../../../components/inputbox/InputBox";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";
import styles from "../Common.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const QualificationForm = ({ heading, options, initialValues, onSubmit }) => {
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: initialValues,
  });

  const handleFormSubmit = (data) => {
    console.log("Form Data:", data);
    console.log("Start Date:", data.startDate);
    console.log("End Date:", data.endDate);
    onSubmit(data); // Invoke the onSubmit callback
  };

  return (
    <form
      className={`${styles["qualification-form-form"]}`}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <header className={`${styles["qualification-form-head"]}`}>
        {heading}
      </header>
      <Controller
        name="degree"
        control={control}
        render={({ field }) => (
          <InputDropdown
            {...field}
            label="Degree of Education:"
            placeholder="Select degree"
            options={options}
          />
        )}
      />
      <Controller
        name="specialization"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Specialization:"
            placeholders={["specialization"]}
            size="normal"
          />
        )}
      />
      <Controller
        name="university"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Institution / University:"
            placeholders={["university"]}
            size="normal"
          />
        )}
      />
      <Controller
        name="cgpa"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Percentage:"
            placeholders={["cgpa"]}
            size="normal"
          />
        )}
      />
      <div className={`${styles["qualification-form-startdate-enddate"]}`}>
        <div className={`${styles["qualification-form-datebox"]}`}>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Start Date"
                size="normal"
                placeholders={["yyyy-mm-dd"]}
                isDatePicker
              />
            )}
          />
        </div>
        <div className={`${styles["qualification-form-datebox"]}`}>
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="End Date"
                size="normal"
                placeholders={["yyyy-mm-dd"]}
                isDatePicker
              />
            )}
          />
        </div>
      </div>
      <div className={`${styles["qualification-form-button"]}`}>
        <PrimaryButton variant="primary" content="Save" width="full" />
      </div>
    </form>
  );
};

export default QualificationForm;
