import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../../../components/inputbox/InputBox";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";
import styles from "../Common.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const QualificationForm = ({ heading, options, initialValues }) => {
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    console.log("Start Date:", data.startDate);
    console.log("End Date:", data.endDate);
  };

  return (
    <form
      className={styles[`QualificationForm-form`]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <header className={styles[`QualificationForm-head`]}>{heading}</header>
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
      <div className={styles[`QualificationForm-startDateEndDate`]}>
        <div className={styles[`QualificationForm-datebox`]}>
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
        <div className={styles[`QualificationForm-datebox`]}>
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
      <div className={styles[`QualificationForm-button`]}>
        <PrimaryButton variant="primary" content="Save" width="full" />
      </div>
    </form>
  );
};

export default QualificationForm;
