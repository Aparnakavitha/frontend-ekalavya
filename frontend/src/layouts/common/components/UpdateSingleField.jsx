import React from "react";
import styles from "../Common.module.css";
import { useForm, Controller } from "react-hook-form";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Input from "../../../components/inputbox/InputBox";

const UpdateSingleField = ({
  mainHeading,
  labelTitle,
  placeHolder,
  buttonTitle,
  initialData,
}) => {
  const { handleSubmit, control, getValues } = useForm({
    defaultValues: initialData,
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles["addstudent-form"]}`}
    >
      <div className={`${styles["addstudent-containerone"]}`}>
        <header className={`${styles["addstudent-head"]}`}>
          {mainHeading}
        </header>
        <div className={`${styles["addstudent-containerinput"]}`}>
          <Controller
            name="inputData"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label={labelTitle}
                placeholders={[placeHolder]}
                size="normal"
              />
            )}
          />
        </div>
      </div>
      <div className={`${styles["addstudent-buttoncontainer"]}`}>
        <PrimaryButton variant="primary" content={buttonTitle} width="full" />
      </div>
    </form>
  );
};

export default UpdateSingleField;
