import React from "react";
import styles from "./QualificationCard.module.css";
import { MdModeEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import TextButton from "../buttons/TextButton";
import { format, parseISO, isValid } from "date-fns";

const QualificationCard = ({
  qualifications,
  degree,
  institution,
  percentage,
  startDate,
  endDate,
  specialization,
  handleClick,
  onClickEdit,
  onClickDelete,
  index,
}) => {
  const formattedDate = (dateString) => {
    if (!dateString) return "";

    const dateStr = String(dateString);
    const date = parseISO(dateStr);

    if (isValid(date)) {
      return format(date, "dd-MM-yyyy");
    } else {
      return "Invalid date";
    }
  };

  const handleEditClick = (event) => {
    event.stopPropagation();
    onClickEdit(index);
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    onClickDelete(index);
  };

  return (
    <div key={index} className={`${styles.cards}`} onClick={handleClick}>
      <div className={`${styles.cardContents}`}>
        <div className={styles.cardsDeleteEdit}>
          <TextButton
            onClick={handleDeleteClick}
            isDelete={true}
            className={styles.deleteTextIcon}
            icon={<TiDeleteOutline size={19} />}
            text=" Remove"
          />
          <MdModeEdit
            className={styles.editIcon}
            onClick={handleEditClick}
            title="Edit"
          />
        </div>

        <div className={styles.titleContainer}>
          <div className={`${styles["education-qualifications-list"]}`}>
            <div>
              <h3 className={`${styles["education-qualification-name"]}`}>
                {degree}
              </h3>
              <p>{institution}</p>
              <p>Percentage: {percentage}%</p>
              <p>
                {formattedDate(startDate)} - {formattedDate(endDate)}
              </p>
              <p>Specialization: {specialization}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationCard;
