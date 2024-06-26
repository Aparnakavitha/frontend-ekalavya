import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "../AdminStudent.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Input from "../../../components/inputbox/InputBox";
import {
  validateAndCleanInput,
  validateCountry,
  validateState,
} from "../../common/components/validation";

const AddCollege = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className={`${styles["addcollege-container"]}`}>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={`${styles["addcollege-form"]}`}
      >
        <div className={`${styles["addcollege-formgroup"]}`}>
          <div className={`${styles["addcollege-head"]}`}>Add College</div>
          <div className={styles.field}>
            <Controller
              name="collegeName"
              control={control}
              rules={{
                required: "College name is required",
                validate: validateAndCleanInput,
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="College Name"
                  size="normal"
                  placeholders={["College name"]}
                />
              )}
            />
            {errors.collegeName && (
              <p className={`${styles["addcollege-error"]}`}>
                {errors.collegeName.message}
              </p>
            )}
          </div>
          <div className={styles.field}>
            <Controller
              name="collegePlace"
              control={control}
              rules={{
                required: "Place is required",
                validate: validateAndCleanInput,
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Place"
                  size="normal"
                  placeholders={["Place"]}
                />
              )}
            />
            {errors.collegePlace && (
              <p className={`${styles["addcollege-error"]}`}>
                {errors.collegePlace.message}
              </p>
            )}
          </div>
          <div className={styles.field}>
            <Controller
              name="collegeDistrict"
              control={control}
              rules={{
                required: "District is required",
                validate: validateAndCleanInput,
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="District"
                  size="normal"
                  placeholders={["District"]}
                />
              )}
            />
            {errors.collegeDistrict && (
              <p className={`${styles["addcollege-error"]}`}>
                {errors.collegeDistrict.message}
              </p>
            )}
          </div>
          <div className={styles.field}>
            <Controller
              name="collegeState"
              control={control}
              rules={{
                required: "State is required",
                validate: {validateAndCleanInput,validateState},
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="State"
                  size="normal"
                  placeholders={["State"]}
                />
              )}
            />
            {errors.collegeState && (
              <p className={`${styles["addcollege-error"]}`}>
                {errors.collegeState.message}
              </p>
            )}
          </div>
          <div className={styles.field}>
            <Controller
              name="collegeCountry"
              control={control}
              rules={{
                required: "Country is required",
                validate: validateCountry,
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Country"
                  size="normal"
                  placeholders={["Country"]}
                />
              )}
            />
            {errors.collegeCountry && (
              <p className={`${styles["addcollege-error"]}`}>
                {errors.collegeCountry.message}
              </p>
            )}
          </div>
          <PrimaryButton
            type="submit"
            content="Add"
            variant="primary"
            width="full"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCollege;
