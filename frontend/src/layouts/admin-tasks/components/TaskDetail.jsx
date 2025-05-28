// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import styles from "../AdminTask.module.css";
// import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
// import EditButton from "../../../components/buttons/EditButton";
// import DeleteIcon from "../../../components/buttons/DeleteIcon";
// import ViewSubmissionButton from "../../../components/buttons/ViewSubmissionButton";
// import SubmissionButton from "../../../components/buttons/SubmissionButton";
// import ScoreIcon from "../../../components/buttons/ScoreIcon.jsx";
// import { AvatarCircleGroup } from "../../../components/profilepicture/AvatarCircle";
 
// const TaskAccordion = ({
//   number,
//   title,
//   description,
//   attachments = [],
//   createdAt,
//   dueDate,
//   taskType,
  
//   status,
//   onEdit,
//   onDelete,
//   onView,
//   onSubmit,
//   score,
//   total,
//   fileName,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
  
//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };
 
//   const renderActions = () => {
//     switch (status) {
//       case "Ongoing":
//         return (
//           <>
            
//             <EditButton onClick={onEdit} />
//             <DeleteIcon onClick={onDelete} />
//           </>
//         );
      
//       case "To Review":
//         return (
//           <>
//             <ViewSubmissionButton onClick={onView} />
//             <EditButton onClick={onEdit} />
//             <DeleteIcon onClick={onDelete} />
//           </>
//         );
      
//       case "Completed":
//         return (
//           <>
//             <ViewSubmissionButton onClick={onView} />
//           </>
//         );
      
//       default:
//         return null;
//     }
//   };
 
//   return (
//     <div className={styles.taskAccordion}>
      
//       <div
//         className={`${styles.taskHeader} ${isOpen ? styles.taskHeaderExpanded : ''}`}
//         onClick={handleToggle}
//       >
//         <div className={styles.content}>
//           <div>
//             <p className={`${styles.taskNumber} ${isOpen ? styles.taskNumberExpanded : ''}`}>
//               {number}. {title}
//             </p>
//             {!isOpen && <p className={styles.taskDueDate}>Due Date: {dueDate}</p>}
//           </div>
 
//           <div className={styles.rightContent}>
//             <div className={styles.actions} onClick={(e) => e.stopPropagation()}>
//               {renderActions()}
//             </div>
 
//             <div className={styles.icon}>
//               {isOpen ? (
//                 <RiArrowDropUpLine size={28} />
//               ) : (
//                 <RiArrowDropDownLine size={28} />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
 
      
//       {isOpen && (
//         <div className={styles.taskDetailContainer}>
//           <div className={styles.taskContentWrapper}>
//             <div className={styles.taskDetails}>
//               <div className={styles.taskDescription}>{description}</div>
 
//               <div className={styles.taskMeta}>
//                 <div className={styles.metaRow}>
//                   <span className={styles.metaLabel}>Created at</span>
//                   <span>{createdAt}</span>
//                 </div>
//                 <div className={styles.metaRow}>
//                   <span className={styles.metaLabel}>Due Date</span>
//                   <span>{dueDate}</span>
//                 </div>
                
//                 {/* <div className={styles.metaRow}>
//                   <span className={styles.metaLabel}>Assigned to</span>
//                   <div className={styles.avatarGroupContainer}>
//                     <AvatarCircleGroup
//                       avatarUrls={assignedTo.map((user) => ({
//                         imageUrl: user.imageUrl || "",
//                         alt: user.name,
//                       }))}
//                       size={24}
//                       maxVisible={4}
//                     />
//                   </div>
//                 </div> */}

// <div className={styles.metaRow}>
//   <span className={styles.metaLabel}>Task Type</span>
//   <span>{taskType}</span>
// </div>

                
//               </div>
//             </div>
 
//             <div className={styles.taskDivider}></div>
 
//             <div className={styles.taskAttachments}>
//               <h4 className={styles.attachmentsTitle}>Attachments</h4>
//               {attachments.length > 0 ? (
//                 <div className={styles.attachmentList}>
//                   {attachments.map((attachment, index) => (
//                     <a
//                       key={index}
//                       href={attachment.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={styles.attachmentLink}
//                     >
//                       {attachment.name}
//                     </a>
//                   ))}
//                 </div>
//               ) : (
//                 <p className={styles.noAttachments}>No attachments</p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
 
// TaskAccordion.propTypes = {
//   number: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   taskType: PropTypes.string.isRequired,
//   attachments: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     })
//   ),
//   createdAt: PropTypes.string.isRequired,
//   dueDate: PropTypes.string.isRequired,
//   assignedTo: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       imageUrl: PropTypes.string,
//     })
//   ),
//   createdBy: PropTypes.string.isRequired,
//   status: PropTypes.oneOf(["Ongoing", "To Review", "Completed"]).isRequired,
//   onEdit: PropTypes.func,
//   onDelete: PropTypes.func,
//   onView: PropTypes.func,
//   onSubmit: PropTypes.func,
//   score: PropTypes.number,
//   total: PropTypes.number,
//   fileName: PropTypes.string,
// };
 
// export default TaskAccordion;

import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../AdminTask.module.css";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import EditButton from "../../../components/buttons/EditButton";
import DeleteIcon from "../../../components/buttons/DeleteIcon";
import ViewSubmissionButton from "../../../components/buttons/ViewSubmissionButton";
import SubmissionButton from "../../../components/buttons/SubmissionButton";
import ScoreIcon from "../../../components/buttons/ScoreIcon.jsx";
import { AvatarCircleGroup } from "../../../components/profilepicture/AvatarCircle";
 
const TaskAccordion = ({
  number,
  title,
  description,
  attachments = [],
  createdAt,
  dueDate,
  taskType,
  
  status,
  onEdit,
  onDelete,
  onView,
  onSubmit,
  score,
  total,
  fileName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
 
  const renderActions = () => {
    switch (status) {
      case "Ongoing":
        return (
          <>
            
            <EditButton onClick={onEdit} />
            <DeleteIcon onClick={onDelete} />
          </>
        );
      
      case "To Review":
        return (
          <>
            <ViewSubmissionButton onClick={onView} />
            <EditButton onClick={onEdit} />
            <DeleteIcon onClick={onDelete} />
          </>
        );
      
      case "Completed":
        return (
          <>
            <ViewSubmissionButton onClick={onView} />
          </>
        );
      
      default:
        return null;
    }
  };
 
  return (
    <div className={styles.taskAccordion}>
      {/* Header Section (Always Visible) */}
      <div
        className={`${styles.taskHeader} ${isOpen ? styles.taskHeaderExpanded : ''}`}
        onClick={handleToggle}
      >
        <div className={styles.content}>
          <div>
            <p className={`${styles.taskNumber} ${isOpen ? styles.taskNumberExpanded : ''}`}>
              {number}. {title}
            </p>
            {!isOpen && <p className={styles.taskDueDate}>Due Date: {dueDate}</p>}
          </div>
 
          <div className={styles.rightContent}>
            <div className={styles.actions} onClick={(e) => e.stopPropagation()}>
              {renderActions()}
            </div>
 
            <div className={styles.icon}>
              {isOpen ? (
                <RiArrowDropUpLine size={28} />
              ) : (
                <RiArrowDropDownLine size={28} />
              )}
            </div>
          </div>
        </div>
      </div>
 
      {/* Expandable Content Section */}
      {isOpen && (
        <div className={styles.taskDetailContainer}>
          <div className={styles.taskContentWrapper}>
            <div className={styles.taskDetails}>
              <div className={styles.taskDescription}>{description}</div>
 
              <div className={styles.taskMeta}>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Created at</span>
                  <span>{createdAt}</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Due Date</span>
                  <span>{dueDate}</span>
                </div>
                
                {/* <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Assigned to</span>
                  <div className={styles.avatarGroupContainer}>
                    <AvatarCircleGroup
                      avatarUrls={assignedTo.map((user) => ({
                        imageUrl: user.imageUrl || "",
                        alt: user.name,
                      }))}
                      size={24}
                      maxVisible={4}
                    />
                  </div>
                </div> */}
 
<div className={styles.metaRow}>
  <span className={styles.metaLabel}>Task Type</span>
  <span>{taskType}</span>
</div>
 
                
              </div>
            </div>
 
            <div className={styles.taskDivider}></div>
 
            <div className={styles.taskAttachments}>
              <h4 className={styles.attachmentsTitle}>Attachments</h4>
              {attachments.length > 0 ? (
                <div className={styles.attachmentList}>
                  {attachments.map((attachment, index) => (
                    <a
                      key={index}
                      href={attachment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.attachmentLink}
                    >
                      {attachment.name}
                    </a>
                  ))}
                </div>
              ) : (
                <p className={styles.noAttachments}>No attachments</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
 
TaskAccordion.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  taskType: PropTypes.string.isRequired,
  attachments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  createdAt: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  assignedTo: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
    })
  ),
  createdBy: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["Ongoing", "To Review", "Completed"]).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onView: PropTypes.func,
  onSubmit: PropTypes.func,
  score: PropTypes.number,
  total: PropTypes.number,
  fileName: PropTypes.string,
};
 
export default TaskAccordion;
 