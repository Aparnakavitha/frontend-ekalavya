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
  buttonTilte,
  options,
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
      className={`${styles["combinedSkillForm-form"]}`}
    >
      <div className={`${styles["combinedSkillForm-containerOne"]}`}>
        <div className={`${styles["combinedSkillForm-allHeading"]}`}>
          <header className={`${styles["combinedSkillForm-head"]}`}>
            {mainHeading}
          </header>
          {isEditlevel && !isSelect && message && skillName && (
            <p className={`${styles["combinedSkillForm-message"]}`}>
              {message}{" "}
              <span className={`${styles["combinedSkillForm-skillName"]}`}>
                {skillName}
              </span>
            </p>
          )}
        </div>
        <div className={`${styles["combinedSkillForm-containerInput"]}`}>
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
              <div className={`${styles["combinedSkillForm-text"]}`}>
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
      <div className={`${styles["combinedSkillForm-buttonContainer"]}`}>
        <PrimaryButton variant="primary" content={buttonTilte} width="full" />
      </div>
    </form>
  );
};

export default CombinedSkillForm;
