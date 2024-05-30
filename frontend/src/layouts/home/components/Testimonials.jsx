import React, { useState, useEffect } from "react";
import TestimonialCard from "../../../components/cards/TestimonialCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../Home.module.css";

const Testimonials = ({ testimonials, heading }) => {
  const [chunkSizeTestimonial, setChunkSizeTestimonial] = useState(4);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 767) {
        setChunkSizeTestimonial(1);
        setShowArrows(false);
      } else if (windowWidth >= 768 && windowWidth <= 992) {
        setChunkSizeTestimonial(2);
        setShowArrows(true);
      } else {
        setChunkSizeTestimonial(4);
        setShowArrows(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonialChunks = [];
  for (let i = 0; i < testimonials.length; i += chunkSizeTestimonial) {
    testimonialChunks.push(testimonials.slice(i, i + chunkSizeTestimonial));
  }

  const handleArrow = () => {
    const arrows = document.querySelectorAll(".testimonials-carousel .control-arrow");
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
    const dots = document.querySelectorAll(".testimonials-carousel .control-dots .dot");
    dots.forEach((dot, idx) => {
      if (idx >= 3) {
        dot.style.display = "none";
      }
    });
  };

  useEffect(() => {
    handleArrow();
    handleDots();
  }, [testimonials, chunkSizeTestimonial]);

  return (
    <div className={`${styles["carousel-header"]} ${styles["testimonials"]}`}>
      <div className={`${styles["carousel-heading"]}`}>
        <a className={`${styles["carousel-heading1"]}`}>{heading}</a>
      </div>
      <div className={`${styles["carousel-wrapper"]}`}>
        <Carousel
        className="testimonials-carousel"
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          swipeable
          showStatus={false}
          onChange={handleDots}
          onInitialized={handleDots}
        >
          {testimonialChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className={`${styles["carousel-chunk"]}`}>
              {chunk.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  info={testimonial.info}
                  place={testimonial.place}
                  description={testimonial.description}
                  profilePicture={testimonial.profilePicture}
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
