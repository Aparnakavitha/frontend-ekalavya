import React, { useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "../Common.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import InputBox from "../../../components/inputbox/InputBox";
 
const AddSubmission = ({ heading, onSubmit, submitError = "" }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    trigger,
  } = useForm();
 
  const fileRef = useRef(null);
 
  useEffect(() => {
    if (fileRef.current) {
      fileRef.current.focus();
    }
  }, []);
 
  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };
 
  const handleFormSubmit = (data) => {
    const file = data?.submissionFile?.[0];
    if (file) {
      onSubmit(file);
    }
  };
 
  return (
<div className={`${styles["adduser-container"]}`}>
<div className={`${styles["adduser-head"]}`}>{heading}</div>
<form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={`${styles["adduser-form"]}`}
>
<InputBox
          label="Attach File "
          size="normal"
          placeholders={["Upload file"]}
          isFileInput
        />
 
        {(errors.submissionFile || submitError) && (
<p className={styles["adduser-error"]}>
            {errors.submissionFile
              ? errors.submissionFile.message
              : submitError}
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
 
export default AddSubmission;