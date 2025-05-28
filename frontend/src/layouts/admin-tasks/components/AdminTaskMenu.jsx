// import React, { useState } from "react";
// import styles from "../AdminTask.module.css";
 
// import ActionComponent from "../../common/components/Action.jsx";
// import TabButton from "../../../components/buttons/TabButton.jsx";
// import secureLocalStorage from "react-secure-storage";
// import Modal from "../../common/components/Modal.jsx";
// import CreateTask from "../../common/components/CreateTask.jsx";
 
// const AdminTaskMenu = (props) => {
//   const {
//     explore,
//     statuses,
//     title,
//     activeFilter,
//     searchTerm,
//     setSearchTerm,
//     buttonVisible = true,
//     showSearchBar = true,
//     showButton = true,
//     placeholder = "Search Tasks",
//     typeFilter,
//     setTypeFilter,
//     showCreateTask = true,
//     count = 0,
//   } = props;
 
//   const [activeStatus, setActiveStatus] = useState(activeFilter);
//   const [showTaskModal, setShowTaskModal] = useState(false);
 
//   const userSession = secureLocalStorage.getItem("userSession") || {};
//   const loggedInAdmin = userSession.userId;
 
//   return (
//     <div className={styles["mentortaskmenus-container"]}>
//       <ActionComponent
//         heading={title || "Tasks"}
//         count={count}
//         onSearchChange={setSearchTerm}
//         buttonProps={{
//           variant: "tertiary",
//           content: "+ Add new Task",
//           width: "full",
//           style: { display: buttonVisible ? "block" : "none" },
//           onClick: () => setShowTaskModal(true),
//         }}
//         searchWidth="large"
//         searchPlaceholder={placeholder}
//         showFiltersAndReset={true}
//         filterProps={[
//           {
//             Heading: "Type",
//             Content: ["Projects", "Batches", "Individuals"],
//             defaultOption: typeFilter || "",
//             defaultValue: typeFilter || "",
//             Value: ["Projects", "Batches", "Individuals"],
//           },
//         ]}
//         onFilterChange={(filters) => {
//           let normalizedType = filters.Type?.toLowerCase() || "";
        
//           // Map plural capitalized values to singular lowercase
//           if (normalizedType === "projects") normalizedType = "project";
//           else if (normalizedType === "batches") normalizedType = "batch";
//           else if (normalizedType === "individuals") normalizedType = "individual";
        
//           setTypeFilter(normalizedType);
//         }}
        
//         resetProps={{
//           content: "Reset",
//           variant: "tertiary",
//           width: "full",
//         }}
//         showDelete={false}
//       />
 
//       <div className={styles["mentortaskmenus-tabbutton"]}>
//         {statuses &&
//           statuses.map((status) => (
//             <TabButton
//               key={status.name}
//               status={status.name}
//               isActive={activeStatus === status.name}
//               onClick={() => {
//                 setActiveStatus(status.name);
//                 status.onClick();
//               }}
//             />
//           ))}
//       </div>
 
//       <Modal
//         isOpen={showTaskModal}
//         widthVariant="large"
//         onClose={() => setShowTaskModal(false)}
//       >
//         <CreateTask onClose={() => setShowTaskModal(false)} />
//       </Modal>
//     </div>
//   );
// };
 
// export default AdminTaskMenu;

import React, { useState } from "react";
import styles from "../AdminTask.module.css";
 
import ActionComponent from "../../common/components/Action.jsx";
import TabButton from "../../../components/buttons/TabButton.jsx";
import secureLocalStorage from "react-secure-storage";
import Modal from "../../common/components/Modal.jsx";
import CreateTask from "../../common/components/CreateTask.jsx";
 
const AdminTaskMenu = (props) => {
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
    count = 0,
  } = props;
 
  const [activeStatus, setActiveStatus] = useState(activeFilter);
  const [showTaskModal, setShowTaskModal] = useState(false);
 
  const userSession = secureLocalStorage.getItem("userSession") || {};
  const loggedInAdmin = userSession.userId;
 
  return (
    <div className={`${styles["mentortaskmenus-container"]} `}>
      
      <ActionComponent

        heading={title || "Tasks"}
        count={count}
        onSearchChange={setSearchTerm}
        buttonProps={{
          variant: "tertiary",
          content: "+ Add new Task",
          width: "full",
          style: { display: buttonVisible ? "block" : "none" },
          onClick: () => setShowTaskModal(true),
        }}
        searchWidth="large"
        searchPlaceholder={placeholder}
        showFiltersAndReset={true}
        filterProps={[
          {
            Heading: "Type",
            Content: ["Project", "Batch", "Individual"],
            defaultOption: typeFilter || "",
            defaultValue: typeFilter || "",
            Value: ["Project", "Batch", "Individual"],
          },
        ]}
        onFilterChange={(filters) => setTypeFilter(filters.Type)}
        resetProps={{
          content: "Reset",
          variant: "tertiary",
          width: "full",
        }}
        showDelete={false}
      />
      <div className={styles["mentortaskmenus-tabbutton"]}>
        {statuses &&
          statuses.map((status) => (
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
 
      <Modal
        isOpen={showTaskModal}
        widthVariant="large"
        onClose={() => setShowTaskModal(false)}
      >
        <CreateTask onClose={() => setShowTaskModal(false)} adminId={loggedInAdmin}  createdBy={loggedInAdmin}  />
      </Modal>
    </div>
  );
};
 
export default AdminTaskMenu;
 
 