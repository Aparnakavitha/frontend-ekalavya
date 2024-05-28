import React, { useState } from "react";
import styles from "../Common.module.css";
import ListItem from "../../../components/listitem/ListItem";
import { BsList, BsX } from "react-icons/bs";
import Logo from "../../../assets/EduNexa.png";
import ProfileBox from "../../../components/profilenotificationbox/ProfileNotificationBox";

const SideBar = ({ button, listItems, profileBox }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setShowSidebar(false);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`${styles["sidebar-container"]}`}>
      <div className={`${styles["sidebar-headerResp"]}`}>
        <div className={`${styles["sidebar-headerContainer"]}`}>
          <div className={`${styles["sidebar-toggleOut"]}`} onClick={toggleSidebar}>
            <BsList className={`${styles["sidebar-hamburger"]}`} />
          </div>
          <div className={`${styles["sidebar-headingOut"]}`}>
            <img src={Logo} alt="EduNexa" />
          </div>
        </div>
      </div>
      <div className={`${styles["sidebar"]} ${showSidebar ? styles["show"] : ""}`}>
        <div className={`${styles["sidebar-headerContainer"]}`}>
          <div className={`${styles["sidebar-headingIn"]}`}>
            <img src={Logo} alt="EduNexa" />
          </div>
          <div className={`${styles["sidebar-toggle"]}`}>
            <BsX className={`${styles["sidebar-crossIcon"]}`} onClick={toggleSidebar} />
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
                active={activeIndex === index}
                onClick={() => {
                  handleItemClick(index);
                }}
              />
            ))}
          </div>
          <div className={`${styles["sidebar-bottom"]}`}>
            <div className={`${styles["sidebar-headerButton"]}`}>{button}</div>
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
