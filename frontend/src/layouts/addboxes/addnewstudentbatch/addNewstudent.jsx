import React from "react";
import styles from "./addNewstudent.module.css";
import { useForm, Controller } from "react-hook-form";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Input from "../../../components/inputbox/InputBox";

const Addnewstudent = () => {
  const { handleSubmit, control, getValues } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.containerOne}>
        <header className={styles.head}>Add Student</header>
        <div className={styles.containerInput}>
          <Controller
            name="studentId"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Add student ID"
                placeholders={["Student ID"]}
                size="normal"
              />
            )}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <PrimaryButton variant="primary" content="Add" width="full" />
      </div>
    </form>
  );
};

export default Addnewstudent;
