
import React, { useState } from "react";
import styles from "./MentorTaskMenu.module.css";
import Button from "../../components/buttons/PrimaryButton";
import TabButton from "../../components/buttons/TabButton";
import Searchbar from "../../components/searchbar/Searchbar";
import CreateTask from "../../layouts/common/components/CreateTask";
import Modal from "../../layouts/common/components/Modal"
import secureLocalStorage from "react-secure-storage";

const MentorTaskMenu = (props) => {
  const {
    explore,
    statuses,
    title,
    activeFilter,
    searchTerm,
    setSearchTerm,
    buttonVisible = true,
    showSearchBar = true,
    showButton = true,
    placeholder = "Search Tasks",
    typeFilter,
    setTypeFilter,
    showCreateTask = true,
  } = props;
  const userSession = secureLocalStorage.getItem("userSession") || {};
  const loggedUserFirstName = userSession.firstName;

  console.log(userSession.userId);
  const loggedInMentor=userSession.userId;

  const [activeStatus, setActiveStatus] = useState(activeFilter);
  const [showTaskModal, setShowTaskModal] = useState(false);

  return (
    <div className={`${styles["mentortaskmenus-container"]} padding`}>
      {/* Header */}
      {showButton && (
        <div className={styles["mentortaskmenus-head"]}>
          <h1 className={styles["mentortaskmenus-title"]}>{title}</h1>
          <div className={styles["mentortaskmenus-button-group"]}>
            {buttonVisible && <Button {...explore} />}
          </div>
        </div>
      )}

      {/* Search + Filters */}
      <div className={styles["mentortaskmenus-searchbar"]}>
        {showSearchBar && (
          <div className={styles["mentortaskmenus-searchbar-input"]}>
            <Searchbar
              placeholder={placeholder}
              onSearch={setSearchTerm}
              value={searchTerm}
            />
          </div>
        )}

        <div className={styles["mentortaskmenus-filter-group"]}>
          <div className={styles["mentortaskmenus-filter"]}>
            {/* <Filter
              initialHeading="Projects"
              Content={["Projects", "Batches", "Individuals"]}
              selectedOption={typeFilter}
              onOptionClick={setTypeFilter}
            /> */}
          </div>

          {showCreateTask && (
            <div className={styles["mentortaskmenus-create"]}>
              <Button
                content="Create Task"
                variant="secondary"
                width="full"
                onClick={() => setShowTaskModal(true)}
              />
            </div>
          )}
        </div>
      </div>

      
      <div className={styles["mentortaskmenus-tabbutton"]}>
        {statuses.map((status) => (
          <TabButton
            key={status.name}
            status={status.name}
            isActive={activeStatus === status.name}
            onClick={() => {
              setActiveStatus(status.name);
              status.onClick();
            }}
          />
        ))}
      </div>

      
      <Modal isOpen={showTaskModal} widthVariant="large" onClose={() => setShowTaskModal(false)}>
  <CreateTask role="mentor"  mentorId={loggedInMentor}  fixedType="Project" createdBy={loggedInMentor}  onClose={() => setShowTaskModal(false)} />
</Modal>

    </div>
  );
};

export default MentorTaskMenu;
