import React, { useState, useEffect } from "react";
import StudentCard from "../../../components/cards/StudentCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../Home.module.css";

const StarPerformer = ({ studentProfiles, heading }) => {
  const [chunkSizeStudent, setChunkSizeStudent] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 767) {
        setChunkSizeStudent(1);
      } else if (windowWidth >= 768 && windowWidth <= 992) {
        setChunkSizeStudent(2);
      } else {
        setChunkSizeStudent(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const studentChunks = [];
  for (let i = 0; i < studentProfiles.length; i += chunkSizeStudent) {
    studentChunks.push(studentProfiles.slice(i, i + chunkSizeStudent));
  }

  const handleDots = () => {
    const dots = document.querySelectorAll(".carousel .control-dots .dot");
    dots.forEach((dot, idx) => {
      if (idx >= 3) {
        dot.style.display = "none";
      }
    });
  };

  useEffect(() => {
    handleDots();
  }, [studentProfiles, chunkSizeStudent]);

  return (
    <div className={`${styles.carouselHeader} ${styles.starPerformer}`}>
      <div className={styles.carouselHeading}>
        <a className={styles.carouselHeading1}>{heading}</a>
      </div>
      <div className={styles.carouselWrapper}>
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          showStatus={false}
          onChange={handleDots}
          onInitialized={handleDots}
        >
          {studentChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className={styles.chunk}>
              {chunk.map((student, index) => (
                <StudentCard
                  key={index}
                  studentImage={student.studentImage}
                  studentName={student.studentName}
                  studentId={student.studentId}
                  studentCollege={student.studentCollege}
                  studentMail={student.studentMail}
                  studentPhoneNumber={student.studentPhoneNumber}
                  handleClick={student.handleClick}
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default StarPerformer;
