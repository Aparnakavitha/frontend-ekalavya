import React from "react";
import { useForm, Controller } from "react-hook-form";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";
import styles from "../../common/Common.module.css";

const CombinedSkillForm = ({
  mainHeading,
  isSelect,
  isEditlevel,
  message,
  skillName,
  displaytext,
  buttonTitle,
  options,
  initialData,
  onSubmit
}) => {
  const { handleSubmit, control, getValues } = useForm({
    defaultValues: initialData,
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={`${styles["combinedskillform-form"]}`}
    >
      <div className={`${styles["combinedskillform-containerone"]}`}>
        <div className={`${styles["combinedskillform-allheading"]}`}>
          <header className={`${styles["combinedskillform-head"]}`}>
            {mainHeading}
          </header>
          {isEditlevel && !isSelect && message && skillName && (
            <p className={`${styles["combinedskillform-message"]}`}>
              {message}{" "}
              <span className={`${styles["combinedskillform-skillname"]}`}>
                {skillName}
              </span>
            </p>
          )}
        </div>
        <div className={`${styles["combinedskillform-containerinput"]}`}>
          {isSelect ? (
            <>
              <Controller
                name="skill"
                control={control}
                render={({ field }) => (
                  <InputDropdown
                    {...field}
                    label="Select Skills"
                    placeholder="Skills"
                    options={options}
                  />
                )}
              />
              <div className={`${styles["combinedskillform-text"]}`}>
                {displaytext}
              </div>
            </>
          ) : isEditlevel ? (
            <Controller
              name="selectedLevel"
              control={control}
              render={({ field }) => (
                <InputDropdown
                  {...field}
                  label="Level"
                  placeholder="Select level"
                  options={options}
                />
              )}
            />
          ) : (
            <>
              <Controller
                name="selectedSkills"
                control={control}
                render={({ field }) => (
                  <InputDropdown
                    {...field}
                    label="Select Skills"
                    placeholder="Select your skill"
                    options={options}
                  />
                )}
              />
              <Controller
                name="selectedLevel"
                control={control}
                render={({ field }) => (
                  <InputDropdown
                    {...field}
                    label="Level"
                    placeholder="Select level"
                    options={options}
                  />
                )}
              />
            </>
          )}
        </div>
      </div>
      <div className={`${styles["combinedskillform-buttoncontainer"]}`}>
        <PrimaryButton variant="primary" content={buttonTitle} width="full" />
      </div>
    </form>
  );
};

export default CombinedSkillForm;
