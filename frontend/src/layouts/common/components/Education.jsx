import React from "react";
import TextButton from "../../../components/buttons/TextButton";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import styles from "../Common.module.css";
import { format, parse } from "date-fns";

const Education = (props) => {
  const { qualifications, onClickAdd, onClickEdit, onClickDelete } = props;

  const formattedDate = (dateString) => {
    const date = parse(dateString, "yyyy-MM-dd", new Date());
    const day = format(date, "do");
    const monthYear = format(date, "MMMM, yyyy");
    return `${day} ${monthYear}`;
  };

  return (
    <div className={`${styles["education-container"]} padding-bottom padding`}>
      <div className={`${styles["education-qualification"]}`}>
        <div className={`${styles["education-qualification-content"]}`}>
          <div className={`${styles["education-title"]}`}>
            <h2 className={`${styles["education-title2"]}`}>
              Educational Qualification
            </h2>
          </div>
          <div className={`${"education-qualification-add-button"}`}>
            <div className={`${styles["education-qualification-button"]}`}>
              <TextButton
                icon={<IoMdAdd />}
                text="Add Educational Qualification"
                onClick={onClickAdd}
              />
            </div>
          </div>
        </div>
        <div className={`${styles["education-qualifications-list"]}`}>
          <div>
            <ol type="1" className={`${styles["education-list-box"]}`}>
              {qualifications.map((qualification, index) => (
                <div
                  key={index}
                  className={`${styles["education-qualification-instance"]}`}
                >
                  <div key={index} className={`${styles["education-maindiv"]}`}>
                    <li
                      key={index}
                      className={`${styles["education-education"]}`}
                    >
                      <h3
                        className={`${styles["education-qualification-name"]}`}
                      >
                        {qualification.degree}
                      </h3>

                      <p>{qualification.institution}</p>
                      <p>Percentage: {qualification.percentage}</p>
                      <p>
                        {formattedDate(qualification.startDate)} - {formattedDate(qualification.endDate)}
                      </p>
                      <p>Specialization: {qualification.specialization}</p>
                    </li>
                  </div>
                  <div
                    className={`${styles["education-qualification-mod-buttons"]}`}
                  >
                    <div
                      className={`${styles["education-qualification-button"]}`}
                    >
                      <TextButton
                        icon={<MdEdit />}
                        text="Edit"
                        onClick={() => onClickEdit(index)}
                      />
                    </div>
                    <div
                      className={`${styles["education-qualification-button"]}`}
                    >
                      <TextButton
                        icon={<MdDelete />}
                        text="Delete"
                        onClick={() => onClickDelete(index)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
