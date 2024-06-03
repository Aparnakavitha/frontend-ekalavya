import React, { useState, useEffect } from "react";
import PrimaryCard from "../../../components/cards/PrimaryCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../Home.module.css";

const Project = ({ projects, heading1, heading2 }) => {
  const [chunkSizeProject, setChunkSizeProject] = useState(3);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 767) {
        setChunkSizeProject(1);
        setShowArrows(false);
      } else if (windowWidth >= 768 && windowWidth <= 992) {
        setChunkSizeProject(2);
        setShowArrows(true);
      } else {
        setChunkSizeProject(3);
        setShowArrows(true);
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

  const handleArrow = () => {
    const arrows = document.querySelectorAll(
      ".projects-carousel .control-arrow"
    );
    arrows.forEach((arrow) => {
      arrow.style.background = "none";
      arrow.style.bottom = "17%";
      if (!showArrows) {
        arrow.style.display = "none";
      } else {
        arrow.style.display = "block";
      }
    });
  };

  const handleDots = () => {
    const dots = document.querySelectorAll(
      ".projects-carousel .control-dots .dot"
    );
    dots.forEach((dot, idx) => {
      if (idx >= 3) {
        dot.style.display = "none";
      }
    });
  };

  useEffect(() => {
    handleArrow();
    handleDots();
  }, [projects, chunkSizeProject]);

  return (
    <div className={`${styles["carousel-header"]} ${styles["projects"]}`}>
      <div className={`${styles["carousel-heading"]}`}>
        <a className={`${styles["carousel-heading2"]}`}>{heading2}</a>
        <a className={`${styles["carousel-heading1"]}`}>{heading1}</a>
      </div>
      <div className={`${styles["carousel-wrapper"]}`}>
        <Carousel
          className="projects-carousel"
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          swipeable
          showStatus={false}
          onChange={handleDots}
          onInitialized={handleDots}
        >
          {projectChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className={`${styles["carousel-chunk"]}`}>
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
