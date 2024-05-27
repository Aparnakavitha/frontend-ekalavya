import React, { useState,useEffect } from "react";
import styles from "./bdAdd.module.css";
import { useForm, Controller } from "react-hook-form";
import Input from "../../../components/inputbox/InputBox";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { FaPlus } from "react-icons/fa6";
import TextButton from "../../../components/buttons/TextButton";

const BdAdd = ({mainHeading, initialData }) => {
  const {
    handleSubmit,
    control,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: initialData
  });
  const [fileError, setFileError] = useState("");

  const [profilePhotoName, setProfilePhotoName] = useState("");

  useEffect(() => {
    if (initialData?.profilePhoto) {
      setProfilePhotoName(initialData.profilePhoto.name);
    }
  }, [initialData]);
  const onSubmit = (data) => {
    if (fileError) {
      console.error("Form contains errors. Please fix them before submitting.");
      return;
    }
    console.log("Form Data:", data);
  };

  const handleTextButtonClick = () => {
    console.log("Add profile link clicked!");
  };

  const validateImageFile = (file) => {
    const validImageTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/bmp",
      "image/webp",
    ];
    if (file && !validImageTypes.includes(file.type)) {
      setFileError("Invalid file type. Please upload an image file.");
      setError("profilePhoto", {
        type: "manual",
        message: "Invalid file type. Please upload an image file.",
      });
      return false;
    }
    setFileError("");
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.containerOne}>
        <header className={styles.head}>{mainHeading}</header>
        <div className={styles.containerInput}>
          
          <Controller
            name="dob"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Date of Birth"
                size="normal"
                placeholders={["yyyy-mm-dd"]}
                isDatePicker
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Phone Number"
                placeholders={["phone number"]}
                size="normal"
              />
            )}
          />
          {/* <Controller
            name="profilePhoto"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Profile Photo"
                placeholders={["profile photo"]}
                size="normal"
                isFileInput="true"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (validateImageFile(file)) {
                    setValue("profilePhoto", file);
                  } else {
                    setValue("profilePhoto", null);
                  }
                }}
              />
              
            )}
          />
          {fileError && <p className={styles.error}>{fileError}</p>} */}
      <Controller
            name="profilePhoto"
            control={control}
            render={({ field }) => (
                <Input
                  {...field}
                  label="Profile Photo"
                  placeholders={[profilePhotoName || "profile photo"]}
                  size="normal"
                  isFileInput="true"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (validateImageFile(file)) {
                      setValue("profilePhoto", file);
                      setProfilePhotoName(file.name);
                    } else {
                      setValue("profilePhoto", null);
                      setProfilePhotoName("");
                    }
                  }}
                /> 
            )}
          />
          {fileError && <p className={styles.error}>{fileError}</p>}

          <div className={styles.iconText}>
            <TextButton
              icon={<FaPlus />}
              text="Add Profile Links"
              onClick={handleTextButtonClick}
            />
          </div>
        </div>
      </div>
      <div className={styles.containerInput2}>
        <Controller
          name="houseName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Address"
              placeholders={["House Name"]}
              size="normal"
            />
          )}
        />
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholders={["City"]} size="normal" />
          )}
        />
        <Controller
          name="pinCode"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholders={["Pincode"]} size="normal" />
          )}
        />
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholders={["State"]} size="normal" />
          )}
        />
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholders={["Country"]} size="normal" />
          )}
        />
        <div className={styles.containerInput3}>
          <Controller
            name="aboutMe"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="About Me"
                placeholders={["about me"]}
                size="large"
              />
            )}
          />
          <div className={styles.buttonContainer}>
            <PrimaryButton variant="primary" content="Save" width="full" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default BdAdd;
