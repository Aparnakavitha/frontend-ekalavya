import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Common.module.css";
import colorfilter from "../../../assets/colorfilter.svg";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner"; // Assuming you have a LoadingSpinner component

const NotFound = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 100);
    setTimeout(() => {
      window.location.reload();
    }, 10); 
    

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          
          <div className={styles["hero-image4"]}>
            <img src={colorfilter} alt="" />
          </div>
          <h1 className={styles.heading}>404 - Page Not Found</h1>
          <p className={styles.paragraph}>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <p className={styles.paragraph}>
            Please{" "}
            <Link to="/" className={styles.link}>
              return to the home page
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  );
};

export default NotFound;
