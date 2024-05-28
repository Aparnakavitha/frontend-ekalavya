import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
// import styles from "./AddStudent.module.css";
import styles from "../admin-student.module.css";
import Input from "../../../components/inputbox/InputBox";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const AddStudent = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className={`${styles['addStudent-container']}`}>
      <div className={`${styles['addStudent-head']}`}> Add New Student</div>
      <form onSubmit={handleSubmit(onSubmit)} className={`${styles['addStudent-form']}`}>
        <div className={`${styles['addStudent-field']}`}>
          <div className={`${styles['addStudent-name']}`}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Enter Full Name"
                  size="normal"
                  placeholders={["First name"]}
                />
              )}
            />
          </div>
          <div className={`${styles['addStudent-name']}`}>
            <Controller
              name="secondName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  size="normal"
                  placeholders={["Second name"]}
                />
              )}
            />
          </div>
        </div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Enter email address"
              size="normal"
              placeholders={["Second name"]}
            />
          )}
        />
        <Controller
          name="college"
          control={control}
          render={({ field }) => (
            <InputDropdown
              {...field}
              label="Select College"
              size="normal"
              placeholders={["Select College"]}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
              ]}
            />
          )}
        />
        <Controller
          name="track"
          control={control}
          render={({ field }) => (
            <InputDropdown
              {...field}
              label="Select Track"
              size="normal"
              placeholders={["Select Track"]}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
              ]}
            />
          )}
        />
        <PrimaryButton
          type="submit"
          content="Add"
          variant="primary"
          width="full"
        />
      </form>
    </div>
  );
};

export default AddStudent;
