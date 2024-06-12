import React, { useState } from "react";
import styles from "../Common.module.css";
import ListItem from "../../../components/listitem/ListItem";
import { BsList, BsX } from "react-icons/bs";
import Logo from "../../../assets/EduNexa.png";
import ProfileBox from "../../../components/profilenotificationbox/ProfileNotificationBox";

const SideBar = ({ button, listItems, profileBox, onItemClick, location ,user }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  const isActive = (path) => {
    if (user === "public") {
      return false;
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const handleItemClick = (index, page) => {
    setActiveIndex(index);
    setShowSidebar(false);
    onItemClick(page);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`${styles["sidebarcontainer"]}`}>
      <div className={`${styles["sidebar-headerresp"]}`}>
        <div className={`${styles["sidebar-headercontainer"]}`}>
          <div
            className={`${styles["sidebar-toggleout"]}`}
            onClick={toggleSidebar}
          >
            <BsList className={`${styles["sidebar-hamburger"]}`} />
          </div>
          <div className={`${styles["sidebar-headingout"]}`}>
            <img src={Logo} alt="EduNexa" />
          </div>
        </div>
      </div>
      <div
        className={`${styles["sidebar"]} ${showSidebar ? styles["show"] : ""}`}
      >
        <div className={`${styles["sidebar-headercontainer"]}`}>
          <div className={`${styles["sidebar-headingin"]}`}>
            <img src={Logo} alt="EduNexa" />
          </div>
          <div className={`${styles["sidebar-toggle"]}`}>
            <BsX
              className={`${styles["sidebar-crossicon"]}`}
              onClick={toggleSidebar}
            />
          </div>
        </div>
        <div className={`${styles["sidebar-content"]}`}>
          <div className={`${styles["sidebar-list"]}`}>
            {listItems.map((item, index) => (
              <ListItem
                key={index}
                icon={item.icon}
                name={item.name}
                viewIcon={item.viewIcon}
                active={isActive(`/${user}/${item.page}`)} 
                onClick={() => handleItemClick(index, item.page)}
              />
            ))}
          </div>
          <div className={`${styles["sidebar-bottom"]}`}>
            <div className={`${styles["sidebar-headerbutton"]}`}>{button}</div>
            <div className={`${styles["sidebar-card"]}`}>
              <ProfileBox {...profileBox} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
