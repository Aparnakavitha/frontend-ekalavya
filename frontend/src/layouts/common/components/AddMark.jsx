import React, { useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "../Common.module.css";
import InputBox from "../../../components/inputbox/InputBox";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { validateAndCleanInput } from "../../common/components/validation";
 
const AddMark = ({ heading, onSubmit, submitError = "" }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    trigger,
  } = useForm();
 
  const markRef = useRef(null);
 
  useEffect(() => {
    if (markRef.current) {
      markRef.current.focus();
    }
  }, []);
 
  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };
 
  const handleFormSubmit = (data) => {
    onSubmit(data.mark);
  };
 
  return (
<div className={`${styles["adduser-container"]}`}>
<div className={`${styles["adduser-head"]}`}>{heading}</div>
<form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={`${styles["adduser-form"]}`}
>
<Controller
          name="mark"
          control={control}
          rules={{
            required: "Mark is required",
            validate: validateAndCleanInput,
          }}
          render={({ field }) => (
<InputBox
              {...field}
              ref={markRef}
              label="Enter Marks"
              size="normal"
              placeholders={["e.g., 85"]}
              type="number"
              onBlur={() => handleBlur("mark")}
            />
          )}
        />
        {(errors.mark || submitError) && (
<p className={styles["adduser-error"]}>
            {errors.mark ? errors.mark.message : submitError}
</p>
        )}
 
        <PrimaryButton
          type="submit"
          content="Submit"
          variant="primary"
          width="full"
        />
</form>
</div>
  );
};
 
export default AddMark;