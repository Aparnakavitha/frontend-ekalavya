import React from "react";
import styles from "./QualificationCard.module.css";
import { MdModeEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import TextButton from "../buttons/TextButton";
import { format, parseISO, isValid } from "date-fns";
import { RxCross1 } from "react-icons/rx";

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
      return format(date, "dd/MM/yyyy");
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

  const formatText = (text) => {
    if (text.length > 48) {
      text = text.slice(0, 44) + "... ";
    }
    return text;
  };

  return (
    <div key={index} className={`${styles.cards}`} onClick={handleClick}>
      <div className={`${styles.cardContents}`}>
        <div className={styles.titleContainer}>
          <div className={`${styles["education-qualifications-list"]}`}>
            <div>
              {" "}
              <h3>{degree}</h3>
            </div>
            <div>
              <h4 className={`${styles["education-qualification-name"]}`}>
                <p>Percentage: {percentage}%</p>
              </h4>
            </div>
            <div>
              <p className={`${styles["education-qualification-specialization"]}`}>
                Specialization: {specialization}
              </p>
            </div>
            <div>
              <p className={`${styles["education-qualification-institution"]}`}>{formatText(institution)}</p>
            </div>
            <div>
              <p className={`${styles["education-qualification-date"]}`}>
                {formattedDate(startDate)} - {formattedDate(endDate)}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cardsDeleteEdit}>
          {/* <TextButton
            onClick={handleDeleteClick}
            isDelete={true}
            className={styles.deleteTextIcon}
            icon={<TiDeleteOutline size={19} />}
            text=" Remove"
          /> */}
          <RxCross1
            title="Remove"
            className={`${styles["education-qualification-remove"]}`}
          />
          {/* <FiMinusCircle/> */}
          <MdModeEdit
            className={styles.editIcon}
            onClick={handleEditClick}
            title="Edit"
          />
        </div>
      </div>
    </div>
  );
};

export default QualificationCard;
