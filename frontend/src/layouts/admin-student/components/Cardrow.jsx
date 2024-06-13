import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../AdminStudent.module.css";
import PrimaryCard from "../../../components/cards/PrimaryCard";
import TextButton from "../../../components/buttons/TextButton";
import { IoIosArrowDown } from "react-icons/io";
import SkillBatchCard from "../../../components/cards/SkillBatchCard";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Modal from "../../../layouts/common/components/Modal";
import DeleteBox from "../../../layouts/common/components/DeleteBox";
import UpdateSingleField from "../../../layouts/common/components/UpdateSingleField";

const CardRow = ({ cardData, card, handleClick }) => {
  const [cardnum, setCardnum] = useState(4);
  const [pcardnum, setPcardnum] = useState(4);
  const [showAllCards, setShowAllCards] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 780) {
        setCardnum(1);
        setPcardnum(1);
      } else if (windowWidth >= 768 && windowWidth <= 1170) {
        setCardnum(2);
        setPcardnum(2);
      } else if (windowWidth <= 1530 && windowWidth >= 992) {
        setCardnum(3);
        setPcardnum(2);
      } else {
        setCardnum(4);
        setPcardnum(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dropcards = () => {
    setShowAllCards(!showAllCards);
  };

  const handleOpenEdit = (skill) => {
    setCurrentSkill(skill);
    setIsEditOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditOpen(false);
    setCurrentSkill(null);
  };

  const openModal = (skill) => {
    setCurrentSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentSkill(null);
  };

  const confirmDelete = () => {
    console.log("Delete confirmed for:", currentSkill);
    closeModal();
  };

  const handleFormSubmit = (data) => {
    console.log("Form submitted with data:", data);
    handleCloseEdit();
  };

  const downbutton = {
    icon: <IoIosArrowDown />,
    text: "View More",
    onClick: dropcards,
  };

  const upbutton = {
    icon: <MdOutlineKeyboardArrowUp />,
    text: "View Less",
    onClick: dropcards,
  };

  return (
    <>
      {card === "skill" && (
        <div className="padding">
          <div className={styles["cardrow-skillcontainer"]}>
            <div className={styles["cardrow-skillcard"]}>
              {cardData
                .slice(0, showAllCards ? cardData.length : cardnum)
                .map((data, index) => (
                  <SkillBatchCard
                    key={index}
                    {...data}
                    handleDeleteClick={() => openModal(data)}
                    handleEditClick={() => handleOpenEdit(data)}
                  />
                ))}
            </div>
            <div className={styles["cardrow-viewnext"]}>
              {showAllCards ? (
                <TextButton {...upbutton} />
              ) : (
                <TextButton {...downbutton} />
              )}
            </div>
          </div>
        </div>
      )}

      {card === "event" && (
        <div className="padding">
          <div className={styles["cardrow-content"]}>
            <div className={styles["cardrow-cardscontainer"]}>
              {cardData
                .slice(0, showAllCards ? cardData.length : pcardnum)
                .map((item, index) => (
                  <div
                    key={index}
                    className={`${styles["cardrow-primarycard"]}`}
                    onClick={() => handleClick(item.id)}
                  >
                    <PrimaryCard {...item} />
                  </div>
                ))}
            </div>
            <div className={styles["cardrow-pviewnext"]}>
              {showAllCards ? (
                <TextButton {...upbutton} />
              ) : (
                <TextButton {...downbutton} />
              )}
            </div>
          </div>
        </div>
      )}

      <Modal isOpen={isModalOpen} widthVariant="small" onClose={closeModal}>
        <DeleteBox
          title="Confirmation Required"
          message="Are you sure you want to remove this skill?"
          buttonText="Confirm"
          onConfirm={confirmDelete}
          onCancel={closeModal}
        />
      </Modal>
      <Modal
        isOpen={isEditOpen}
        widthVariant="medium"
        onClose={handleCloseEdit}
      >
        {currentSkill && (
          <UpdateSingleField
            mainHeading="Edit Skill Level"
            labelTitle="Skill Level"
            placeHolder="Skill Level"
            buttonTitle="Save"
            initialData={{ inputData: currentSkill.Count }}
            onSubmit={handleFormSubmit}
            isEdit={true}
            message="You are updating :"
            skillId={currentSkill.miniHeading}
          />
        )}
      </Modal>
    </>
  );
};

CardRow.propTypes = {
  cardData: PropTypes.array.isRequired,
  card: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardRow;
