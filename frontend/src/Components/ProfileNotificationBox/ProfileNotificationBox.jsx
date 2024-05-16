import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ProfileNotificationBox.module.css'; // We'll create this file for styling
import { FiBell } from 'react-icons/fi'; // Importing a bell icon from React Icons library

const ProfileNotificationBox = ({ name, profilePic, gmail, onNameClick, onBellIconClick }) => {
    // Check if name and gmail are provided, otherwise set them to empty strings
    const truncatedName = name ? (name.length > 15 ? `${name.slice(0, 15)}...` : name) : '';
    const truncatedGmail = gmail ? (gmail.length > 22 ? `${gmail.slice(0, 22)}...` : gmail) : '';

    return (
        <div className={Styles.profilenotificationbox}>
            <FiBell className={Styles.bellicon} onClick={onBellIconClick}/>
            <img src={profilePic} alt="Profile" className={Styles.profilepic} />
            <div className={Styles.info}>
                <span className={Styles.name} onClick={onNameClick}>{truncatedName}</span>
                <span className={Styles.gmail}>{truncatedGmail}</span>
            </div>
        </div>
    );
};

ProfileNotificationBox.propTypes = {
    name: PropTypes.string, // Make the name prop optional
    profilePic: PropTypes.string.isRequired,
    gmail: PropTypes.string, // Make the gmail prop optional
    onNameClick: PropTypes.func, // Added onClick prop for name click event handler
    onBellIconClick: PropTypes.func
};

export default ProfileNotificationBox;





