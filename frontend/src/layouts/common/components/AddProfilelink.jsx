import React from "react";
import styles from "../../common/Common.module.css";
import { useForm, Controller } from "react-hook-form";
import Input from "../../../components/inputbox/InputBox";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";

const AddProfilelink = ({ mainHeading, options }) => {
  const { handleSubmit, control, getValues } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles["addProfilelink-form"]}`}
    >
      <div className={`${styles["addProfilelink-containerOne"]}`}>
        <header className={`${styles["addProfilelink-head"]}`}>
          {mainHeading}
        </header>
        <div className={`${styles["addProfilelink-containerInput"]}`}>
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
      <div className={`${styles["addProfilelink-buttonContainer"]}`}>
        <PrimaryButton variant="primary" content="Add" width="full" />
      </div>
    </form>
  );
};

export default AddProfilelink;
