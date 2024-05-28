import React, { useState } from "react";
import Select from "react-select";
import styles from "./InputDropdown.module.css";
 
function InputDropdown({
  label,
  placeholder,
  options,
  value,
  onChange,
  onBlur,
}) {
  const [isFocused, setIsFocused] = useState(false);
 
  const getControlStyles = (provided) => ({
    ...provided,
    height: 57,
    borderRadius: 10,
    backgroundColor: "transparent",
    borderColor: isFocused ? "var(--primary-color)" : "var(--neutral600)",
    borderWidth: 1,
    fontSize: "14px",
    boxShadow: isFocused ? "0 0 0 0.2px var(--primary-color)" : "none",
    "&:hover": { borderColor: "var(--primary-color)" },
  });
 
  const getOptionStyles = (provided, state) => ({
    ...provided,
    color: "var(--white)",
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: "14px",
    backgroundColor: state.isSelected
      ? "var(--neutral600)"
      : "var(--neutral800)",
    "&:hover": {
      backgroundColor: "var(--primary-color)",
      color: "var(--black)",
    },
  });
 
  return (
    <div>
      {label && <label className={styles.label}>{label}</label>}
      <Select
        value={options.find(option => option.value === value) || null}
        onChange={(selectedOption) => onChange(selectedOption?.value)}
        options={options}
        placeholder={placeholder}
        className={styles.selectField}
        isSearchable
        onFocus={() => setIsFocused(true)}
        onBlur={(event) => {
          setIsFocused(false);
          if (onBlur) {
            onBlur(event);
          }
        }}
        styles={{
          control: getControlStyles,
          option: getOptionStyles,
          singleValue: (provided) => ({
            ...provided,
            paddingLeft: "17px",
            color: "var(--neutral400)",
          }),
          menu: (provided) => ({
            ...provided,
            marginTop: 0,
            borderRadius: 0,
            borderColor: "var(--primary-color)",
            backgroundColor: "transparent",
            boxShadow: "none",
          }),
          menuList: (provided) => ({
            ...provided,
            padding: 0,
            borderColor: "var(--primary-color)",
            borderRadius: 8,
          }),
          indicatorSeparator: () => ({ display: "none" }),
          input: (provided) => ({
            ...provided,
            paddingLeft: "15px",
            color: "var(--neutral400)",
          }),
          placeholder: (provided) => ({
            ...provided,
            paddingLeft: "15px",
            color: "var(--neutral400)",
          }),
        }}
      />
    </div>
  );
}
 
export default InputDropdown;
