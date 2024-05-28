import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../../../components/inputbox/InputBox";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";
import styles from "../AdminEvent.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const AddEvent = ({ defaultValues }) => {
  const initialDefaultValues = defaultValues;

  const mergedDefaultValues = { ...initialDefaultValues, ...defaultValues };

  const { handleSubmit, control, watch, setValue } = useForm({
    defaultValues: mergedDefaultValues,
  });

  const [eventMode, setEventMode] = useState(mergedDefaultValues.eventMode);

  const onSubmit = (data) => {
    if (data.eventMode === "Online") {
      if (!data.location) {
        data.link = "";
      } else {
        data.link = data.location;
      }
      delete data.location;
    }
    console.log("Form Data:", data);
  };

  const options = [
    { value: "Online", label: "Online" },
    { value: "Offline", label: "Offline" },
  ];

  const selectedEventMode = watch("eventMode", eventMode);

  const handleEventModeChange = (selectedOption) => {
    const newValue = selectedOption.value;
    setEventMode(newValue);
    setValue("eventMode", newValue);

    if (newValue === "Online") {
      setValue("location", mergedDefaultValues.link || "");
    } else {
      setValue("location", mergedDefaultValues.location || "");
    }
  };

  useEffect(() => {
    if (selectedEventMode === "Online") {
      setValue("location", mergedDefaultValues.link || "");
    } else {
      setValue("location", mergedDefaultValues.location || "");
    }
  }, [selectedEventMode, setValue, mergedDefaultValues]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles["addEvent-form"]}`}
    >
      <div className={`${styles["addEvent-eventTitleMode"]}`}>
        <div className={`${styles["addEvent-eventTitleDiv"]}`}>
          <Controller
            name="eventTitle"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Event Title"
                size="normal"
                placeholders={["Event Title"]}
                className={`${styles["addEvent-eventTitle"]}`}
              />
            )}
          />
        </div>

        <div className={`${styles["addEvent-eventModeDiv"]}`}>
          <Controller
            name="eventMode"
            control={control}
            render={({ field }) => (
              <InputDropdown
                {...field}
                label="Event Mode"
                placeholder="Event Mode"
                options={options}
                className={`${styles["addEvent-eventMode"]}`}
                value={options.find(
                  (option) => option.value === selectedEventMode
                )}
                onChange={(option) => {
                  field.onChange(option.value);
                  handleEventModeChange(option);
                }}
              />
            )}
          />
        </div>
      </div>

      <Controller
        name="eventType"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Event Type"
            size="normal"
            placeholders={["Event Type"]}
            className={`${styles["addEvent-eventType"]}`}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Description"
            size="large"
            placeholders={["Description"]}
            className={`${styles["addEvent-description"]}`}
          />
        )}
      />

      <div className={`${styles["addEvent-dateTimeContainer"]}`}>
        <div className={`${styles["addEvent-dateTime"]}`}>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Start Date"
                size="normal"
                placeholders={["dd/mm/yyyy"]}
                className={`${styles["addEvent-startDate"]}`}
                isDatePicker
              />
            )}
          />
        </div>

        <div className={`${styles["addEvent-dateTime"]}`}>
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="End Date"
                size="normal"
                placeholders={["dd/mm/yyyy"]}
                className={`${styles["addEvent-endDate"]}`}
                isDatePicker
              />
            )}
          />
        </div>

        <div className={styles.dateTime}>
          <Controller
            name="startTime"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Start Time"
                size="normal"
                placeholders={["hh:mm:ss"]}
                className={`${styles["addEvent-startTime"]}`}
                isTimePicker
              />
            )}
          />
        </div>

        <div className={`${styles["addEvent-dateTime"]}`}>
          <Controller
            name="endTime"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="End Time"
                size="normal"
                placeholders={["hh:mm:ss"]}
                className={`${styles["addEvent-endTime"]}`}
                isTimePicker
              />
            )}
          />
        </div>
      </div>

      <Controller
        name="location"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label={selectedEventMode === "Online" ? "Link" : "Location"}
            size="normal"
            placeholders={[
              selectedEventMode === "Online" ? "Link" : "Location",
            ]}
            className={`${styles["addEvent-location"]}`}
          />
        )}
      />

      <Controller
        name="speaker"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Speaker"
            size="normal"
            placeholders={["Speaker"]}
            className={`${styles["addEvent-speaker"]}`}
          />
        )}
      />

      <Controller
        name="organizer"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Organizer"
            size="normal"
            placeholders={["Organizer"]}
            className={`${styles["addEvent-organizer"]}`}
          />
        )}
      />

      <PrimaryButton
        content="Submit"
        variant="primary"
        width="full"
        className={`${styles["addEvent-submitButton"]}`}
      />
    </form>
  );
};

export default AddEvent;
