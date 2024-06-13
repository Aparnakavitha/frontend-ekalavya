import React, { useState, useEffect } from "react";
import Card from "../../../components/cards/SkillCard";
import { GoPlus } from "react-icons/go";
import styles from "../StudentSkill.module.css";
import Modal from "../../common/components/Modal";
import DeleteBox from "../../common/components/DeleteBox";
import CombinedSkillForm from "../../common/components/CombinedSkillForm";
import {
  getSkillsForUser,
  Userskillpost,
  SkillService,
  UserSkillDelete,
} from "../../../services/student/skills/StudentSkillService";

const Layout = () => {
  const [userSkills, setUserSkills] = useState([]);
  const [skillsforDelete, setSkillsForDelete] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    index: null,
  });
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchUserSkills = async () => {
      try {
        const skills = await getSkillsForUser(1); // Replace with actual userId logic
        setSkillsForDelete(skills); // Store skills with IDs for deletion
        const skillsWithIds = skills.map((skill) => ({
          ...skill,
          skill_id: skill.id,
        }));
        setUserSkills(skillsWithIds);
        console.log("Fetched user skills:", skillsWithIds);
      } catch (error) {
        console.error("Error fetching user skills", error);
      }
    };

    const fetchSkills = async () => {
      try {
        const skillsResponse = await SkillService();
        setOptions(
          skillsResponse.map((skill) => ({
            value: skill.id,
            label:
              skill.skillName.charAt(0).toUpperCase() +
              skill.skillName.slice(1),
            originalName: skill.skillName.toLowerCase(),
          }))
        );
      } catch (error) {
        console.error("Error fetching skills", error);
      }
    };

    fetchUserSkills();
    fetchSkills();
  }, []);

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleAddSkill = async (formData) => {
    try {
      const { skill } = formData;
      const postData = {
        userId: 1, // Replace with actual userId logic
        skillId: skill,
      };
      const newSkillResponse = await Userskillpost(postData);

      const newSkill = {
        skill_name:
          options.find((opt) => opt.value === skill)?.originalName ||
          "undefined",
        skill_level: 1,
        skill_id: newSkillResponse.skillId, // Ensure skillId is captured
        ...newSkillResponse,
      };

      setUserSkills((prevSkills) => [...prevSkills, newSkill]);
      console.log("Skill added successfully:", newSkill);
      setIsOpen(false);
    } catch (error) {
      console.error("Error adding skill:", error);
    }
  };

  const handleFormSubmit = (formData) => {
    console.log("Here's the form data:", formData);
    handleAddSkill(formData);
  };

  const handleDeleteSkill = async () => {
    const skillToDelete = skillsforDelete[deleteModal.index];
    console.log("Deleting skill:", skillToDelete);

    try {
      if (!skillToDelete || !skillToDelete.skill_id) {
        throw new Error("Skill or skill_id undefined");
      }

      await UserSkillDelete(1, skillToDelete.skill_id); // Adjust userId as needed
      setUserSkills((prevSkills) =>
        prevSkills.filter((_, index) => index !== deleteModal.index)
      );
      console.log("Skill deleted successfully:", skillToDelete);
    } catch (error) {
      console.error("Error deleting skill:", error);
    } finally {
      setDeleteModal({ isOpen: false, index: null });
    }
  };

  return (
    <div className={`${styles["skilllayout-container"]} padding-top padding`}>
      <div className={styles["skilllayout-skilltitle"]}>
        <h3>Skills </h3>
        <div className={styles["skilllayout-layoutcontainer"]}>
          {userSkills.map((skill, index) => (
            <div key={index} className={styles["skilllayout-skillcontainer"]}>
              <Card
                subtitle={`Level ${skill.skill_level}`}
                title={capitalizeFirstLetter(skill.skill_name)}
                showCloseIcon={true}
                onClose={() => setDeleteModal({ isOpen: true, index: index })}
              />
            </div>
          ))}
          <div className={styles["skilllayout-addbutton"]}>
            <GoPlus
              className={styles["skilllayout-plusicon"]}
              onClick={() => setIsOpen(true)}
            />
          </div>
          <Modal
            isOpen={isOpen}
            widthVariant="large"
            onClose={() => setIsOpen(false)}
          >
            <CombinedSkillForm
              mainHeading="Add New Skill"
              isSelect={true}
              isEditlevel={false}
              displaytext="This skill is only to be placed at level 1"
              buttonTitle="Add Skill"
              options={options}
              onSubmit={handleFormSubmit}
            />
          </Modal>
          <Modal
            isOpen={deleteModal.isOpen}
            widthVariant="small"
            onClose={() => setDeleteModal({ isOpen: false, index: null })}
          >
            <DeleteBox
              title="Delete Skill"
              message="Are you sure you want to delete this skill?"
              buttonText="Delete"
              onCancel={() => setDeleteModal({ isOpen: false, index: null })}
              onConfirm={handleDeleteSkill}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Layout;
