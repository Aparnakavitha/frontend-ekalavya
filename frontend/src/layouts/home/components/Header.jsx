import React, { useState } from "react";
import styles from "../Home.module.css";
import { BsX, BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import CustomGoogleLoginButton from "../../../services/CustomGoogleLoginButton";

const Header = ({
  menuItems,
  imageSrc,
  type,
  showMenu = true,
  showMenuInSidebar = true,
  showResponsiveMenu = true,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`${styles["header-container"]}`}>
      <div
        className={`${styles["header-sidebar"]} ${showSidebar ? styles.show : ""}`}
      >
        <div className={`${styles["header-menuresponsive"]}`}>
          {showResponsiveMenu &&
            showMenuInSidebar &&
            menuItems.map((item, index) => (
              <a
                key={index}
                className={`${styles["header-menuitemresponsive"]}`}
                href="#"
                onClick={() => {
                  item.onClick(item.name);
                  toggleSidebar();
                }}
              >
                {item.name}
              </a>
            ))}
          <div
            className={`${styles["header-button"]} ${styles["button-resp"]}`}
          >
            <CustomGoogleLoginButton />
          </div>
        </div>

        <div
          className={`${styles["header-sidebaricon"]}`}
          onClick={toggleSidebar}
        >
          <div className={`${styles["header-titleresponsive"]}`}>
            <img
              src={imageSrc}
              className={`${styles["header-image"]}`}
              alt="Icon"
            />
          </div>
          {showSidebar ? (
            <BsX className={`${styles["header-crossicon"]}`} />
          ) : (
            <BsList className={`${styles["header-hamburger"]}`} />
          )}
        </div>
      </div>

      <div className={`${styles["header-title"]}`}>
        <img
          src={imageSrc}
          className={`${styles["header-image"]}`}
          alt="Icon"
        />
      </div>

      {showMenu && (
        <div className={`${styles["header-menu"]}`}>
          {menuItems.map((item, index) =>
            type === "link" ? (
              <Link
                key={index}
                className={`${styles["header-menuitem"]}`}
                to={item.link}
                onClick={() => item.onClick(item.name)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={index}
                className={`${styles["header-menuitem"]}`}
                href={item.atag}
                onClick={() => item.onClick(item.name)}
              >
                {item.name}
              </a>
            )
          )}
        </div>
      )}
      <div className={`${styles["header-button"]} ${styles["button"]}`}>
        <CustomGoogleLoginButton />
      </div>
    </div>
  );
};

export default Header;
