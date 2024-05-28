import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
// import styles from "./AddCollege.module.css";
import styles from "../AdminStudent.module.css";

import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Input from "../../../components/inputbox/InputBox";

const AddCollege = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data); 
  };

  return (
    <div className={`${styles['addCollege-container']}`}>
      <form onSubmit={handleSubmit(onSubmit)} className={`${styles['addCollege-form']}`}>
        <div className={`${styles['addCollege-formgroup']}`}>
          <div className={`${styles['addCollege-head']}`}>Add College</div>
          <div className={styles.field}>
            <Controller
              name="collegename"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="College Name"
                  size="normal"
                  placeholders={["college name"]}
                />
              )}
            />
          </div>
          <div className={styles.field}>
            <Controller
              name="Place"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Place"
                  size="normal"
                  placeholders={["place"]}
                />
              )}
            />
          </div>
          <div className={styles.field}>
            <Controller
              name="District"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="District"
                  size="normal"
                  placeholders={["district"]}
                />
              )}
            />
          </div>
          <div className={styles.field}>
            <Controller
              name="State"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="State"
                  size="normal"
                  placeholders={["state"]}
                />
              )}
            />
          </div>
          <div className={styles.field}>
            <Controller
              name="Country"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Country"
                  size="normal"
                  placeholders={["country"]}
                />
              )}
            />
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
