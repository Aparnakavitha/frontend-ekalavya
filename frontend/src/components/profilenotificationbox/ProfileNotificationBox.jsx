import React from "react";
import PropTypes from "prop-types";
import styles from "./ProfileNotificationBox.module.css";
import { FiBell } from "react-icons/fi";

const ProfileNotificationBox = ({
  name,
  profilePic,
  gmail,
  onNameClick,
  onBellIconClick,
}) => {
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
    <div className={styles.profilenotificationbox}>
      <FiBell className={styles.bellicon} onClick={onBellIconClick} />
      <img src={profilePic} alt="Profile" className={styles.profilepic} />
      <div className={styles.info}>
        <span className={styles.name} onClick={onNameClick}>
          {truncatedName}
        </span>
        <span className={styles.gmail}>{truncatedGmail}</span>
      </div>
    </div>
  );
};

ProfileNotificationBox.propTypes = {
  name: PropTypes.string,
  profilePic: PropTypes.string.isRequired,
  gmail: PropTypes.string,
  onNameClick: PropTypes.func,
  onBellIconClick: PropTypes.func,
};

export default ProfileNotificationBox;
