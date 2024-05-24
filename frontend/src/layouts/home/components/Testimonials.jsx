import React, { useState, useEffect } from 'react';
import TestimonialCard from '../../../components/cards/TestimonialCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../Home.module.css';


const Testimonials = ({ testimonials, heading }) => {
  const [chunkSizeTestimonial, setChunkSizeTestimonial] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 767) {
        setChunkSizeTestimonial(1); 
      } else if (windowWidth >= 768 && windowWidth <= 992) {
        setChunkSizeTestimonial(2);
      } else {
        setChunkSizeTestimonial(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonialChunks = [];
  for (let i = 0; i < testimonials.length; i += chunkSizeTestimonial) {
    testimonialChunks.push(testimonials.slice(i, i + chunkSizeTestimonial));
  }
  
  const handleDots = () => {
    const dots = document.querySelectorAll('.carousel .control-dots .dot');
    dots.forEach((dot, idx) => {
      if (idx >= 3) {
        dot.style.display = 'none';
      }
    });
  };

  useEffect(() => {
    handleDots(); 
  }, [testimonials, chunkSizeTestimonial]);


  return (
    <div className={`${styles.carouselHeader} ${styles.testimonials}`}>
      <div className={styles.carouselHeading}>
      <a className={styles.carouselHeading1}>{heading}</a></div>
      <div className={styles.carouselWrapper}>
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows showStatus={false} onChange={handleDots} onInitialized={handleDots}>
          {testimonialChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className={styles.chunk}>
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
