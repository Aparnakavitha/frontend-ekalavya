import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ProfileNotificationBox.module.css";
import { FiBell } from "react-icons/fi";

const ProfileNotificationBox = ({
  name,
  profilePic,
  gmail,
  onBellIconClick,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleNameClick = (event) => {
    event.stopPropagation();
    setDropdownVisible((prevVisible) => !prevVisible);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest(`.${styles.profilenotificationbox}`)) {
      return; // Ignore clicks inside the profile box
    }
    setDropdownVisible(false);
  };

  useEffect(() => {
    if (dropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible]);

  const truncatedName = name
    ? name.length > 15
      ? `${name.slice(0, 15)}...`
      : name
    : "";
  const truncatedGmail = gmail
    ? gmail.length > 22
      ? `${gmail.slice(0, 22)}...`
      : gmail
    : "";

  return (
    <div>
      <div className={styles.profilenotificationbox} onClick={handleNameClick}>
        <FiBell className={styles.bellicon} onClick={onBellIconClick} />
        <img src={profilePic} alt="Profile" className={styles.profilepic} />
        <div className={styles.info}>
          <span className={styles.name} title={name}>
            {truncatedName}
          </span>
          <span className={styles.gmail} title={gmail}>
            {truncatedGmail}
          </span>
        </div>
      </div>
      {dropdownVisible && (
        <div className={styles.dropdowncontainer}>
          <div className={styles.pointer}></div>
          <div className={styles.dropdown}>
            <div className={styles.button}>Profile</div>
            <div className={styles.line}></div>
            <div className={styles.button}>Logout</div>
          </div>
        </div>
      )}
    </div>
  );
};

ProfileNotificationBox.propTypes = {
  name: PropTypes.string,
  profilePic: PropTypes.string.isRequired,
  gmail: PropTypes.string,
  onBellIconClick: PropTypes.func,
};

export default ProfileNotificationBox;
