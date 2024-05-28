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
    <div className={`${styles["sidebar-Container"]}`}>
      <div className={`${styles["sidebar-HeaderResp"]}`}>
        <div className={`${styles["sidebar-HeaderContainer"]}`}>
          <div className={`${styles["sidebar-ToggleOut"]}`} onClick={toggleSidebar}>
            <BsList className={`${styles["sidebar-Hamburger"]}`} />
          </div>
          <div className={`${styles["sidebar-HeadingOut"]}`}>
            <img src={Logo} alt="EduNexa" />
          </div>
        </div>
      </div>
      <div className={`${styles["sidebar"]} ${showSidebar ? styles["show"] : ""}`}>
        <div className={`${styles["sidebar-HeaderContainer"]}`}>
          <div className={`${styles["sidebar-HeadingIn"]}`}>
            <img src={Logo} alt="EduNexa" />
          </div>
          <div className={`${styles["sidebar-Toggle"]}`}>
            <BsX className={`${styles["sidebar-CrossIcon"]}`} onClick={toggleSidebar} />
          </div>
        </div>
        <div className={`${styles["sidebar-Content"]}`}>
          <div className={`${styles["sidebar-List"]}`}>
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
          <div className={`${styles["sidebar-Bottom"]}`}>
            <div className={`${styles["sidebar-HeaderButton"]}`}>{button}</div>
            <div className={`${styles["sidebar-Card"]}`}>
              <ProfileBox {...profileBox} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
