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
  const logoBoxClass = isLeftALigned ? styles.logoBoxLeft : styles.logoBox;
  const containerClass = isLeftALigned ? styles.containerLeft : styles.container;
  const copyrightClass = isLeftALigned ? styles.copyrightLeft : styles.copyright;
  return (
    <div className={`${styles["Footer-footer"]}`}>
      <div className={containerClass}>
        <div className={logoBoxClass}>
          <img src={Logo} alt="Logo" className={`${styles["Footer-img"]}`} />
          <span className={styles.quote}>{quoteContent}</span>
        </div>
      </div>

      <div className={`${styles["Footer-bottombox"]}`}>
        <div className={copyrightClass}>
          <span className={`${styles["Footer-copyrightContent"]}`}>{copyrightContent}</span>
          <a
            href="https://www.tarento.com/privacy-policy/"
            className={`${styles["Footer-copyrightContent2"]}`}
          >
            {copyrightContent2}
          </a>
        </div>
        <div className={`${styles["Footer-footerbox"]}`}></div>
      </div>
    </div>
  );
};

export default Footer;
