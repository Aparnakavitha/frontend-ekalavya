import React, { useState } from "react";
import styles from "../AdminSkill.module.css";
import Table from "../../../components/table/Table";
import NavButton from "../../../components/buttons/NavButton";
import { useRecoilValue } from "recoil";
import { participantsState, skillState } from "../../../states/Atoms";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { deleteSkill } from "../../../services/Skills";
import Modal from "../../common/components/Modal";
import { toast } from "react-toastify";
import { DeleteBox } from "../../common";
import { useNavigate } from "react-router-dom";

const AdminSkillParticipants = ({ data, headings, onClick, pageName }) => {
  const participants = useRecoilValue(participantsState);
  const skillsData = useRecoilValue(skillState);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteSkillId, setDeleteSkillId] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleOpenDelete = () => {
    setDeleteSkillId(skillsData.id);
    console.log("delete skill id is:", deleteSkillId);
    setIsDeleteOpen(true);
    setError("");
  };

  const handleCloseDelete = () => {
    setIsDeleteOpen(false);
    setDeleteSkillId(null);
    setError("");
  };

  const handleDeleteCancel = () => {
    console.log("Delete canceled");
    handleCloseDelete();
  };

  const handleDeleteConfirm = async () => {
    try {
      await deleteSkill(deleteSkillId);
      console.log("Delete confirmed");
      handleCloseDelete();
      toast.success("Skill removed successfully!");
      navigate(`/admin/skills`);
    } catch (error) {
      console.error("Error removing skill: ", error);
      toast.error("Error removing skill");
    }
  };

  const props = {
    content: "Delete Skill",
    variant: "tertiary",
    width: "full",
    onClick: () => handleOpenDelete(),
  };

  const deleteprops = {
    title: "Delete Skill ",
    message: "Are you sure you want to delete this skill?",
    buttonText: "Delete",
  };

  return (
    <div
      className={`${styles["adminskillparticipants-container"]} ${["padding"]} ${["padding-top"]} ${["padding-bottom"]}`}
    >
      <div className={`${styles["adminskillparticipants-header"]}`}>
        <div className={`${styles["adminskillparticipants-navbuttons"]}`}>
          {pageName.map((name, index) => (
            <NavButton
              key={index}
              pageName={skillsData.skillName}
              onClick={onClick}
            />
          ))}
        </div>
        <div className={`${styles["adminskillparticipants-deletebutton"]}`}>
          <PrimaryButton {...props} />
        </div>
        <Modal
          isOpen={isDeleteOpen}
          widthVariant="small"
          onClose={handleCloseDelete}
        >
          <DeleteBox
            {...deleteprops}
            onCancel={handleDeleteCancel}
            onConfirm={handleDeleteConfirm}
          />
        </Modal>
      </div>
      <div className={`${styles["adminskillparticipants-table"]}`}>
        {participants && participants.length > 0 ? (
          <Table data={participants} headings={headings} />
        ) : (
          <p className="nodata" >No participants in this batch.</p>
        )}
      </div>
    </div>
  );
};

export default AdminSkillParticipants;
