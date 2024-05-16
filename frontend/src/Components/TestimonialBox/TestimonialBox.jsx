import React from 'react';
import PropTypes from 'prop-types';
import Styles from './TestimonialBox.module.css';

const TestimonialBox = ({ name, info, place, description, profilePicture }) => {
  return (
    <div className={Styles.testimonialbox}>
        <div className={Styles.testimonialcontent}>
          <img src={profilePicture} alt="Profile" className={Styles.profile} />
          <div className={Styles.details}>
            <div className={Styles.name}>{name}</div>
            <div className={Styles.info}>{info}</div>
            <div className={Styles.place}>{place}</div>
          </div>
        </div>
          <div className={Styles.description}>{description}</div>
      </div>
  );
};

TestimonialBox.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
};

export default TestimonialBox;
