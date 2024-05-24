import React from "react";
import styles from "./addProfilelink.module.css";
import { useForm, Controller } from "react-hook-form";
import Input from "../../../components/inputbox/InputBox";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";

const AddProfilelink = () => {
  const { handleSubmit, control, getValues } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const options = [
    { value: "abc", label: "ABC" },
    { value: "xyz", label: "XYZ" },
    { value: "pqr", label: "PQR" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.containerOne}>
        <header className={styles.head}>Add Profile links</header>
        <div className={styles.containerInput}>
          <Controller
            name="selectedType"
            control={control}
            render={({ field }) => (
              <InputDropdown
                {...field}
                label="Select Type"
                placeholder="Select type"
                options={options}
              />
            )}
          />
          <Controller
            name="url"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="URL"
                placeholders={["Enter the url"]}
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

export default AddProfilelink;
