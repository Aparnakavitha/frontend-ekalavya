import React, { useState } from "react";
import Styles from "./Header.module.css";
import { BsX, BsList } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({ menuItems, imageSrc, button, type }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={Styles.headerContainer}>
      <div className={`${Styles.sidebar} ${showSidebar ? Styles.show : ""}`}>
        <div className={Styles.headerMenuRep}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              className={Styles.menuItemResp}
              href="#"
              onClick={() => item.onClick(item.name)}
            >
              {item.name}
            </a>
          ))}
          <div className={Styles.headerButton}>{button}</div>
        </div>

        <div className={Styles.sidebarIcon} onClick={toggleSidebar}>
          <div className={Styles.headerTitleResp}>
            <img src={imageSrc} className={Styles.image} alt="Icon" />
          </div>
          {showSidebar ? (
            <BsX className={Styles.crossIcon} />
          ) : (
            <BsList className={Styles.hamburger} />
          )}
        </div>
      </div>

      <div className={Styles.headerTitle}>
        <img src={imageSrc} className={Styles.image} alt="Icon" />
      </div>

      <div className={Styles.headerMenu}>
        {menuItems.map((item, index) =>
          type === "link" ? (
            <Link
              key={index}
              className={Styles.menuItem}
              to={item.link}
              onClick={() => item.onClick(item.name)}
            >
              {item.name}
            </Link>
          ) : (
            <a
              key={index}
              className={Styles.menuItem}
              href={item.atag}
              onClick={() => item.onClick(item.name)}
            >
              {item.name}
            </a>
          )
        )}
      </div>

      <div className={Styles.headerButton}>{button}</div>
    </div>
  );
};

export default Header;
