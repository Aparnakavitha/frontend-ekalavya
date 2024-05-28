import React from "react";
import styles from "../AdminBatches.module.css";
import { useForm, Controller } from "react-hook-form";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Input from "../../../components/inputbox/InputBox";

const Addnewstudent = ({ mainHeading, initialData }) => {
  const { handleSubmit, control, getValues } = useForm({
    defaultValues: initialData,
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles["addStudent-form"]}`}
    >
      <div className={`${styles["addStudent-containerOne"]}`}>
        <header className={`${styles["addStudent-head"]}`}>
          {mainHeading}
        </header>
        <div className={`${styles["addStudent-containerInput"]}`}>
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
      <div className={`${styles["addStudent-buttonContainer"]}`}>
        <PrimaryButton variant="primary" content="Add" width="full" />
      </div>
    </form>
  );
};

export default Addnewstudent;
