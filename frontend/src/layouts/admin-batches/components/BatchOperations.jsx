import React from "react";
import styles from "../AdminBatches.module.css";
import Input from "../../../components/inputbox/InputBox";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { FaPlus } from "react-icons/fa6";
import TextButton from "../../../components/buttons/TextButton";
import { useForm, Controller } from "react-hook-form";

const Batchoperations = ({ mainHeading, initialdata }) => {
  const { handleSubmit, control, getValues } = useForm({
    defaultValues: initialdata,
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const handleTextButtonClick = () => {
    console.log("Add Studnets clicked!");
  };

  const studentIdLabel = (
    <div className={`${styles["batchOperations-iconLabelContainerInput"]}`}>
      <div className={`${styles["batchOperations-iconLabelContainer"]}`}>
        <div> Student ID</div>
        <TextButton
          icon={<FaPlus />}
          text="Add students"
          onClick={handleTextButtonClick}
        />
      </div>
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles["batchOperations-form"]}`}
    >
      <div className={`${styles["batchOperations-containerOne"]}`}>
        <header className={`${styles["batchOperations-head"]}`}>
          {mainHeading}
        </header>
        <div className={`${styles["batchOperations-containerInput"]}`}>
          <Controller
            name="batchName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Enter Batch Name"
                placeholders={["Batch Name"]}
                size="normal"
              />
            )}
          />
          <Controller
            name="studentId"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label={studentIdLabel}
                placeholders={["Student ID"]}
                size="normal"
              />
            )}
          />
        </div>
      </div>
      <div className={`${styles["batchOperations-buttonContainer"]}`}>
        <PrimaryButton variant="primary" content="Create Batch" width="full" />
      </div>
    </form>
  );
};

export default Batchoperations;
