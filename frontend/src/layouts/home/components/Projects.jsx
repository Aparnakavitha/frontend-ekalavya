import React, { useState, useEffect } from "react";
import PrimaryCard from "../../../components/cards/PrimaryCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../Home.module.css";

const Project = ({ projects, heading1, heading2 }) => {
  const [chunkSizeProject, setChunkSizeProject] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 767) {
        setChunkSizeProject(1);
      } else if (windowWidth >= 768 && windowWidth <= 992) {
        setChunkSizeProject(2);
      } else {
        setChunkSizeProject(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectChunks = [];
  for (let i = 0; i < projects.length; i += chunkSizeProject) {
    projectChunks.push(projects.slice(i, i + chunkSizeProject));
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
  }, [projects, chunkSizeProject]);

  return (
    <div className={`${styles.carouselHeader} ${styles.projects}`}>
      <div className={styles.carouselHeading}>
        {" "}
        <a className={styles.carouselHeading2}>{heading2}</a>
        <a className={styles.carouselHeading1}>{heading1}</a>
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
          {projectChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className={styles.chunk}>
              {chunk.map((project, index) => (
                <PrimaryCard
                  key={index}
                  miniHeading={project.miniHeading}
                  mainHeading={project.mainHeading}
                  startDate={project.startDate}
                  endDate={project.endDate}
                  Description={project.Description}
                  handleClick={project.handleClick}
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
