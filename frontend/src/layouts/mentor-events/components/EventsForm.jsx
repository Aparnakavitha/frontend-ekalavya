import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../../../components/inputbox/InputBox";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";
import styles from "../MentorEvents.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import NavButton from "../../../components/buttons/NavButton";

const EventForm = () => {
  const { handleSubmit, control, watch, setValue } = useForm({});

  const [eventMode, setEventMode] = useState("Offline");

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
  };

  useEffect(() => {
    if (selectedEventMode === "Online") {
      setValue("location", "");
    }
  }, [selectedEventMode, setValue]);

  const typeoptions = [
    { value: "Hackathon", label: "Hackathon" },
    { value: "Workshop", label: "Workshop" },
    { value: "Session", label: "Session" },
    { value: "Conference", label: "Conference" },
    { value: "Contest", label: "Contest" },
    { value: "Webinar", label: "Webinar" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles["eventform-form"]} padding padding-top padding-bottom`}
    >
      <NavButton pageName="Create Event" onClick={() => {}} />
      <div className={`${styles["eventform-eventtitlemode"]}`}>
        <div className={`${styles["eventform-eventtitlediv"]}`}>
          <Controller
            name="eventTitle"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Event Title"
                size="normal"
                placeholders={["Event Title"]}
                className={`${styles["eventform-eventtitle"]}`}
              />
            )}
          />
        </div>

        <div className={`${styles["eventform-eventmodediv"]}`}>
          <Controller
            name="eventMode"
            control={control}
            render={({ field }) => (
              <InputDropdown
                {...field}
                label="Event Mode"
                placeholder="Event Mode"
                options={options}
                className={`${styles["eventform-eventmode"]}`}
              />
            )}
          />
        </div>
      </div>

      <Controller
        name="eventType"
        control={control}
        render={({ field }) => (
          <InputDropdown
            {...field}
            label="Event Type"
            size="normal"
            placeholder={["Event Type"]}
            options={typeoptions}
            className={`${styles["eventform-eventtype"]}`}
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

      <div className={`${styles["eventform-datetimecontainer"]}`}>
        <div className={`${styles["eventform-datetime"]}`}>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Start Date"
                size="normal"
                placeholders={["dd/mm/yyyy"]}
                className={`${styles["eventform-startdate"]}`}
                isDatePicker
              />
            )}
          />
        </div>

        <div className={`${styles["eventform-datetime"]}`}>
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="End Date"
                size="normal"
                placeholders={["dd/mm/yyyy"]}
                className={`${styles["eventform-enddate"]}`}
                isDatePicker
              />
            )}
          />
        </div>

        <div className={`${styles["eventform-datetime"]}`}>
          <Controller
            name="startTime"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Start Time"
                size="normal"
                placeholders={["hh:mm:ss"]}
                className={`${styles["eventform-starttime"]}`}
                isTimePicker
              />
            )}
          />
        </div>

        <div className={`${styles["eventform-datetime"]}`}>
          <Controller
            name="endTime"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="End Time"
                size="normal"
                placeholders={["hh:mm:ss"]}
                className={`${styles["eventform-endtime"]}`}
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
        name="speakerdescription"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Speaker Description"
            size="normal"
            placeholders={["Speaker Description"]}
            className={`${styles["eventform-speakerdescription"]}`}
          />
        )}
      />

      <div className={`${styles["eventform-buttondiv"]}`}>
        <div className={`${styles["eventform-buttoncontainer"]}`}>
          <PrimaryButton
            content="Submit"
            variant="primary"
            width="full"
            className={`${styles["eventform-submitbutton"]}`}
          />
        </div>
      </div>
    </form>
  );
};

export default EventForm;
