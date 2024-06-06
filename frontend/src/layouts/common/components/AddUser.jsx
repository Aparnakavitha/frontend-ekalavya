import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "../Common.module.css";
import Input from "../../../components/inputbox/InputBox";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const AddUser = ({ options, viewCollege, heading, onSubmit }) => {
  const { handleSubmit, control } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className={`${styles["adduser-container"]}`}>
      <div className={`${styles["adduser-head"]}`}>{heading}</div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={`${styles["adduser-form"]}`}
      >
        <div className={`${styles["adduser-field"]}`}>
          <div className={`${styles["adduser-name"]}`}>
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
          <div className={`${styles["adduser-name"]}`}>
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
              placeholders={["Email address"]}
            />
          )}
        />
        {viewCollege && (
          <Controller
            name="college"
            control={control}
            render={({ field }) => (
              <InputDropdown
                {...field}
                label="Select College"
                size="normal"
                placeholders={["Select College"]}
                options={options}
              />
            )}
          />
        )}
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

export default AddUser;
