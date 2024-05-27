import React from 'react';
import styles from './MentorProfile.module.css';
import ProfilePicture from '../../components/profilepicture/ProfilePicture';
import { FaPhone } from "react-icons/fa";
import profilePic from '../../assets/pic.png';  // Import the image
import { MdEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";

const MentorProfile = (props) => {
    const {
        name = "Emma Watson",
        MentorId = "STD8795",
        dob = "Jan 21 2001",
        email = "emmawatson@gmail.com",
        phone = "(+91) 8337254637",
        linkedin = "linkedin/emmawatson",
        github = "github.com/emmawatson153",
        address = "Bengaluru, 685789, Karnataka, India",
        about = "I am an experienced marketing professional with a passion for creating innovative marketing strategies. I have a strong background in digital marketing and a proven track record of success in various marketing campaigns.",
        qualifications = [{
            name: "Master of Business Administration (MBA)",
            university: "University of business studies City, State",
            cgpa: 7.2,
            start: "May 2022",
            end: "April 2024",
            specialization: "Marketing"
        }],
        ...rest
    } = props;
    
    return (
        <div className={styles.main}>
            <div className={styles["user-details"]}>
                <h2 className={styles.title1}>Details</h2>
                <div className={styles["details-section"]}>
                    <div className={styles["basic-info"]}>
                        <div className={styles["profile-picture"]}>
                            <ProfilePicture src={profilePic}/>
                        </div>
                        <div className={styles["info-text"]}>
                            <h3 className={styles["name"]}>{name}</h3>
                            <h4 className={styles["Mentor-id"]}><b>Mentor Id:</b> {MentorId}</h4>
                            <h4 className={styles["dob"]}>DOB: {dob}</h4>
                        </div>                   
                    </div>

                    <div className={styles["bio"]}>
                        <h4 className={styles["email"]}><MdEmail className={styles.icon} />{email}</h4>
                        <h4 className={styles["phone"]}><FaPhone className={styles.icon} /> {phone}</h4>
                        <h4 className={styles["linkedin"]}><SiLinkedin className={styles.icon} />{linkedin}</h4>
                        <h4 className={styles["github"]}><FaGithub className={styles.icon} />{github}</h4>
                        <h4 className={styles["address"]}><IoHomeSharp className={styles.icon}/>{address}</h4>
                    </div>
                </div>

                <div className={styles["about-section"]}>
                    <h2 className={styles.title2}>About Me</h2>
                    <p className={styles["about"]}>I am an experienced marketing professional with a passion for creating innovative marketing strategies. I have a strong background in digital marketing and a proven track record of success in various marketing campaigns.</p>
                    
                </div>

                <div className={styles["qualification"]}>
                    <h2 className={styles["title2"]}>Educational Qualification</h2>
                    <div className={styles["qualifications-list"]}>
                        <ol type='1'>
                            {qualifications.map((qualification, index) => (
                                <li key={index}>
                                    <h3 className={styles["qualification-name"]}>{qualification.name}</h3>
                                    <p>{qualification.university}</p>
                                    <p>CGPA: {qualification.cgpa}</p>
                                    <p>{qualification.start} - {qualification.end}</p>
                                    <p>Specialization: {qualification.specialization}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MentorProfile;
