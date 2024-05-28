import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../../../components/inputbox/InputBox";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";
import styles from "../MentorEvents.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
 
const EventForm = () => {
  const { handleSubmit, control, watch, setValue } = useForm({
    defaultValues: {
      eventMode: "Offline",
      location: "",
    },
  });
 
  const [eventMode, setEventMode] = useState("Offline");
 
  const onSubmit = (data) => {
    if (data.eventMode === "Online") {
      if (data.location) {
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
  };
 
  useEffect(() => {
    if (selectedEventMode === "Online") {
      setValue("location", "");
    }
  }, [selectedEventMode, setValue]);
 
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles["eventform-form"]}`}>
      <div className={`${styles["eventform-eventTitleMode"]}`}>
        <div className={`${styles["eventform-eventTitleDiv"]}`}>
          <Controller
            name="eventTitle"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Event Title"
                size="normal"
                placeholders={["Event Title"]}
                className={`${styles["eventform-eventTitle"]}`}
              />
            )}
          />
        </div>
 
        <div className={`${styles["eventform-eventModeDiv"]}`}>
          <Controller
            name="eventMode"
            control={control}
            render={({ field }) => (
              <InputDropdown
                {...field}
                label="Event Mode"
                placeholder="Event Mode"
                options={options}
                className={`${styles["eventform-eventMode"]}`}
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
            className={`${styles["eventform-eventType"]}`}
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
            className={`${styles["eventform-description"]}`}
          />
        )}
      />
 
      <div className={`${styles["eventform-dateTimeContainer"]}`}>
        <div className={`${styles["eventform-dateTime"]}`}>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Start Date"
                size="normal"
                placeholders={["dd/mm/yyyy"]}
                className={`${styles["eventform-startDate"]}`}
                isDatePicker
              />
            )}
          />
        </div>
 
        <div className={`${styles["eventform-dateTime"]}`}>
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="End Date"
                size="normal"
                placeholders={["dd/mm/yyyy"]}
                className={`${styles["eventform-endDate"]}`}
                isDatePicker
              />
            )}
          />
        </div>
 
        <div className={`${styles["eventform-dateTime"]}`}>
          <Controller
            name="startTime"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Start Time"
                size="normal"
                placeholders={["hh:mm:ss"]}
                className={`${styles["eventform-startTime"]}`}
                isTimePicker
              />
            )}
          />
        </div>
 
        <div className={`${styles["eventform-dateTime"]}`}>
          <Controller
            name="endTime"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="End Time"
                size="normal"
                placeholders={["hh:mm:ss"]}
                className={`${styles["eventform-endTime"]}`}
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
            className={`${styles["eventform-location"]}`}
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
            className={`${styles["eventform-speaker"]}`}
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
            className={`${styles["eventform-organizer"]}`}
          />
        )}
      />
 
      <div className={`${styles["eventform-buttonDiv"]}`}>
        <div className={`${styles["eventform-buttonContainer"]}`}>
          <PrimaryButton
            content="Submit"
            variant="primary"
            width="full"
            className={`${styles["eventform-submitButton"]}`}
          />
        </div>
      </div>
    </form>
  );
};
 
export default EventForm;

