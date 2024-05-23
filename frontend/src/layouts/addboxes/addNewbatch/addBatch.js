import React, { useState } from "react";
import styles from "./addBatch.module.css";
import Input from "../../../components/inputbox/InputBox";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { FaPlus } from "react-icons/fa6";
import TextButton from "../../../components/buttons/TextButton";
import { useForm, Controller } from "react-hook-form";

const Addbatch = () => {
  const { handleSubmit, control, getValues } = useForm();
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  const handleTextButtonClick = () => {
    console.log("Add Studnets clicked!");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {/* <div className={styles.containerOne}> */}
        <div className={styles.containerInput}>
          <header className={styles.head}>Create Batch</header>
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
          <div className={styles.iconLabelContainerInput}>
            <div className={styles.iconLabelContainer}>
              <div className={styles.labeling}> Student ID</div>
              <TextButton
                icon={<FaPlus />}
                text="Add students"
                onCli
                onClick={handleTextButtonClick}
              />
            </div>
            <Controller
              name="studentId"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholders={["Student ID"]}
                  size="normal"
                />
              )}
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <PrimaryButton variant="primary" content="Create Batch" width="full" />
        </div>
      {/* </div> */}
    </form>
  );
};

export default Addbatch;
