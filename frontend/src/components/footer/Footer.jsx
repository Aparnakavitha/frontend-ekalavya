import React from "react";
import Styles from "./Footer.module.css";

const Footer = (props) => {
  const {
    Logo,
    quoteContent,
    copyrightContent,
    copyrightContent2,
    isLeftALigned,
  } = props;
  const LogoBoxs = isLeftALigned ? Styles.logoBoxLeft : Styles.logoBox;
  const Containers = isLeftALigned ? Styles.conatinerLeft : Styles.container;
  const COpyRights = isLeftALigned ? Styles.copyrightLeft : Styles.copyright;
  return (
    <div className={Styles.footer}>
      <div className={Containers}>
        <div className={LogoBoxs}>
          <img src={Logo} alt="imagevgbhnj" className={Styles.img} />
          <span className={Styles.quote}>{quoteContent}</span>
        </div>
      </div>

      <div className={Styles.bottumbox}>
        <div className={COpyRights}>
          <span className={Styles.copyrightContent}>{copyrightContent}</span>
          <a
            href="https://www.tarento.com/privacy-policy/"
            className={Styles.copyrightContent2}
          >
            {copyrightContent2}
          </a>
        </div>
        <div className={Styles.footerbox}></div>
      </div>
    </div>
  );
};

export default Footer;
