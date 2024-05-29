import React from "react";
import styles from "../Common.module.css";

const Footer = (props) => {
  const {
    Logo,
    quoteContent,
    copyrightContent,
    copyrightContent2,
    isLeftALigned,
  } = props;
  const logoBoxClass = isLeftALigned
    ? styles["footer-logoboxleft"]
    : styles["footer-logobox"];
  const containerClass = isLeftALigned
    ? styles["footer-containerleft"]
    : styles["footer-container"];
  const copyrightClass = isLeftALigned
    ? styles["footer-copyrightleft"]
    : styles["footer-copyright"];
  return (
    <div className={styles["footer-footer"]}>
      <div className={containerClass}>
        <div className={logoBoxClass}>
          <img src={Logo} alt="Logo" className={styles["footer-img"]} />
          <span className={styles["footer-quote"]}>{quoteContent}</span>
        </div>
      </div>

      <div className={styles["footer-bottombox"]}>
        <div className={copyrightClass}>
          <span className={styles["footer-copyrightcontent"]}>
            {copyrightContent}
          </span>
          <a
            href="https://www.tarento.com/privacy-policy/"
            className={styles["footer-copyrightcontent2"]}
          >
            {copyrightContent2}
          </a>
        </div>
        <div className={styles["footer-footerbox"]}></div>
      </div>
    </div>
  );
};

export default Footer;
