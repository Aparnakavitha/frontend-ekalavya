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
      className={`${styles["addevent-form"]}`}
    >
      <div className={`${styles["addevent-eventtitlemode"]}`}>
        <div className={`${styles["addevent-eventtitlediv"]}`}>
          <Controller
            name="eventTitle"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Event Title"
                size="normal"
                placeholders={["Event Title"]}
                className={`${styles["addevent-eventtitle"]}`}
              />
            )}
          />
        </div>

        <div className={`${styles["addevent-eventmodediv"]}`}>
          <Controller
            name="eventMode"
            control={control}
            render={({ field }) => (
              <InputDropdown
                {...field}
                label="Event Mode"
                placeholder="Event Mode"
                options={options}
                className={`${styles["addevent-eventmode"]}`}
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
            className={`${styles["addevent-eventtype"]}`}
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
            className={`${styles["addevent-description"]}`}
          />
        )}
      />

      <div className={`${styles["addevent-datetimecontainer"]}`}>
        <div className={`${styles["addevent-datetime"]}`}>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Start Date"
                size="normal"
                placeholders={["dd/mm/yyyy"]}
                className={`${styles["addevent-startdate"]}`}
                isDatePicker
              />
            )}
          />
        </div>

        <div className={`${styles["addevent-datetime"]}`}>
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="End Date"
                size="normal"
                placeholders={["dd/mm/yyyy"]}
                className={`${styles["addevent-enddate"]}`}
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
                className={`${styles["addevent-starttime"]}`}
                isTimePicker
              />
            )}
          />
        </div>

        <div className={`${styles["addevent-datetime"]}`}>
          <Controller
            name="endTime"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="End Time"
                size="normal"
                placeholders={["hh:mm:ss"]}
                className={`${styles["addevent-endtime"]}`}
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
            className={`${styles["addevent-location"]}`}
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
            className={`${styles["addevent-speaker"]}`}
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
            className={`${styles["addevent-organizer"]}`}
          />
        )}
      />

      <PrimaryButton
        content="Submit"
        variant="primary"
        width="full"
        className={`${styles["addevent-submitbutton"]}`}
      />
    </form>
  );
};

export default AddEvent;
