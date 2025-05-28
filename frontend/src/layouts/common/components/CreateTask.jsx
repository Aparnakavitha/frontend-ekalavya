
import React, { useState, useEffect } from "react";
import InputBox from "../../../components/inputbox/InputBox";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";
import styles from "../Common.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { getProjects } from "../../../services/Projects";
import { createTask } from "../../../services/Task";
import { fetchbatches } from "../../../services/Batch";
import { getUserDetails } from "../../../services/User";
import { toast } from "react-toastify";




const CreateTask = ({
  onClose,
  role = "admin",         // "admin" or "mentor"
  mentorId = null,         // Pass only for mentor
  adminId=null,        // Pass for admin
  fixedType = "Project"
}) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignedProjects, setAssignedProjects] = useState([]);
  const [assignedtype, setAssignedtype] = useState(
    role === "mentor" ? { value: fixedType, label: fixedType } : null
  );
  const [file, setFile] = useState(null);
  const [projectOptions, setProjectOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await getProjects();
      let allProjects = [];
      if (response) {
        allProjects = response
      } else if (Array.isArray(response)) {
        allProjects = response;
      } else if (response) {
        allProjects = response;
      }
      console.log(" All projects received:", allProjects);
      let filteredProjects = [];
      if (role === "mentor" && mentorId) {
        filteredProjects = allProjects.filter(
          (project) =>
            project.mentorId === mentorId || project.mentorId === String(mentorId)
        );
        console.log(" Filtered projects for mentor:", filteredProjects);
      } else if (role === "admin") {
        filteredProjects = allProjects; // Admin gets all projects (only for Project type)
        console.log(" All projects for admin:", filteredProjects);
      }
  
      const formattedOptions = filteredProjects.map((proj) => ({
        value: proj.projectId,
        label: proj.title,
      }));
  
      console.log("✅ Formatted project options:", formattedOptions);
      setProjectOptions(formattedOptions);
    } catch (error) {
      console.error("❌ Error fetching projects:", error);
      setProjectOptions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (role === "mentor") {
      fetchProjects(); // Always fetch for mentor on mount
    }
  }, [role, mentorId]);
  
  


  const handleTypeChange = async (selectedType) => {
    console.log("Type changed to:", selectedType, "for role:", role);
    setAssignedtype(selectedType);
    setAssignedProjects([]); // Clear current selection
  
    const typeValue = selectedType?.value || selectedType;
  
    if (typeValue === "Project") {
      console.log(" Fetching projects for admin");
      fetchProjects();
    } else if (typeValue === "Batch") {
      try {
        setLoading(true);
        console.log(" Fetching batches...");
        
        const response = await fetchbatches();
        const allBatches = response?.responseData || [];
        
      const batchOptions = allBatches.map((batch) => ({
  value: batch.batchId,  // Use batchId as value (this is what gets sent to backend)
  label: batch.batchName, // Use batchName as label (this is what user sees)
}));

        
        console.log("Batch options:", batchOptions);
        setProjectOptions(batchOptions);
      } catch (error) {
        console.error(" Error fetching batches:", error);
        setProjectOptions([]);
      } finally {
        setLoading(false);
      }
    } else if (typeValue === "Individual") {
      try {
        setLoading(true);
        console.log("🧑‍🎓 Fetching students (roleId=3)...");
  
        const response = await getUserDetails({ roleId: 3 });
        const students = response?.responseData || [];
  
        const studentOptions = students.map((student) => ({
          value: student.userId,
          label: `${student.firstName} ${student.lastName}`,
        }));
  
        console.log(" Student options:", studentOptions);
        setProjectOptions(studentOptions);
      } catch (error) {
        console.error("❌ Error fetching students:", error);
        setProjectOptions([]);
      } finally {
        setLoading(false);
      }
    }
     else {
      console.log("🧹 Clearing options for unsupported type");
      setProjectOptions([]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

  
    const selectedType = role === "mentor" ? fixedType : (assignedtype?.value || assignedtype);

    const selectedIds = Array.isArray(assignedProjects)
    ? assignedProjects.map((p) => (typeof p === "object" ? p.value : p))
    : [];

  console.log("📤 Submitting task with type:", selectedType);
  console.log("📦 Selected IDs (typeIds):", selectedIds);
  
    if (selectedIds.length === 0) {
      alert("Please assign at least one " + selectedType);
      return;
    }
  
    const taskData = {
      title: taskName,
      description,
      dueDate,
      attachment: file,
      type: selectedType,
      typeIds: selectedIds,
      createdBy: role === "mentor" ? mentorId : adminId,
    };
    console.log("🚀 Payload to send:", taskData);
    createTask(taskData)
      .then((res) => {
        console.log("✅ Task created successfully:", res);
        toast.success("Task created successfully!");
        onClose();
      })
      .catch((err) => {
        console.error("❌ Task creation failed:", err);
        const errorMessage = err?.response?.data?.statusMessage || "Task creation failed.";
        toast.error(errorMessage);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <InputBox
        label="Task Title"
        size="normal"
        placeholders={["Enter task name"]}
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      
      <InputBox
        label="Description"
        size="large"
        placeholders={["Enter task description"]}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      
      {role === "admin" ? (
        <InputDropdown
          label="Type"
          placeholder="Select Type"
          options={[
            { value: "Project", label: "Project" },
            { value: "Batch", label: "Batch" },
            { value: "Individual", label: "Individual" },
          ]}
          value={assignedtype}
          onChange={handleTypeChange}
          isSingle
        />
      ) : (
        <InputBox
          label="Type"
          size="normal"
          placeholders={["Project"]}
          value={fixedType}
          disabled
        />
      )}
      
      <InputDropdown
        label="AssignTo"
        placeholder={
          role === "admin" && !assignedtype?.value 
            ? "Select type first" 
            : loading 
              ? "Loading ..." 
              : "Select"
        }
        options={projectOptions}
        value={assignedProjects}
        onChange={setAssignedProjects}
        isMulti
        isDisabled={loading || (role === "admin" && !assignedtype?.value)}
      />
      
      <InputBox
        label="Due Date"
        size="normal"
        placeholders={["Select due date"]}
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        isDatePicker
      />
      
      <InputBox
        label="Attach File (Optional)"
        size="normal"
        placeholders={["Upload file"]}
        isFileInput
        onChange={(e) => setFile(e.target.files[0])}
      />
      
      <PrimaryButton
        type="submit"
        content="Create Task"
        variant="primary"
        width="full"
      />
    </form>
  );
};

export default CreateTask;