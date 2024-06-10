import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "../AdminStudent.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Input from "../../../components/inputbox/InputBox";
import { validateAndCleanInput,validateCountry,validateState } from "../../common/components/validation";

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
              name="collegename"
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
            {errors.collegename && (
              <p className={`${styles["addcollege-error"]}`}>
                {errors.collegename.message}
              </p>
            )}
          </div>
          <div className={styles.field}>
            <Controller
              name="Place"
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
            {errors.Place && (
              <p className={`${styles["addcollege-error"]}`}>
                {errors.Place.message}
              </p>
            )}
          </div>
          <div className={styles.field}>
            <Controller
              name="District"
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
            {errors.District && (
              <p className={`${styles["addcollege-error"]}`}>
                {errors.District.message}
              </p>
            )}
          </div>
          <div className={styles.field}>
            <Controller
              name="State"
              control={control}
              rules={{
                required: "State is required",
                validate: validateState,
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
            {errors.State && (
              <p className={`${styles["addcollege-error"]}`}>
                {errors.State.message}
              </p>
            )}
          </div>
          <div className={styles.field}>
            <Controller
              name="Country"
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
            {errors.Country && (
              <p className={`${styles["addcollege-error"]}`}>
                {errors.Country.message}
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
