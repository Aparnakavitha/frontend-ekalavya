
 
 
import React, { useState, useEffect } from "react";
import InputBox from "../../../components/inputbox/InputBox";
import InputDropdown from "../../../components/inputdropdown/InputDropdown";
import styles from "../Common.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { getProjects } from "../../../services/Projects";
import { fetchbatches } from "../../../services/Batch";
import { getUserDetails } from "../../../services/User";
import { toast } from "react-toastify";
import secureLocalStorage from "react-secure-storage";
import { updateTask } from "../../../services/Task";

 
const userSession = secureLocalStorage.getItem("userSession") || {};
const userId = userSession.userId;
const userRole = userSession.role || "mentor";
 
const EditTask = ({
   task, onClose,
   role = "admin",         // "admin" or "mentor"
   mentorId = null,         // Pass only for mentor
   adminId=null,        // Pass for admin
   fixedType = "Project"}) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignedProjects, setAssignedProjects] = useState([]);
  const [assignedtype, setAssignedtype] = useState(
     role === "mentor" ? { value: fixedType, label: fixedType } : null);
  const [file, setFile] = useState(null);
    const [projectOptions, setProjectOptions] = useState([]);
    const [loading, setLoading] = useState(false);
  

  
  const typeOptions = [
    { value: "project", label: "Project" },
    { value: "batch", label: "Batch" },
    { value: "individual", label: "Individual" },
  ];
  useEffect(() => {
    if (task) {
      console.log("📝 Editing Task:", task);
      setTaskName(task.title || "");
      setDescription(task.description || "");
      setDueDate(task.due_date || "");
  
      const matchedType = typeOptions.find(
        (opt) => opt.value.toLowerCase() === (task.type || "").toLowerCase()
      );
  
      console.log("🔍 Task.type:", task.type);
      console.log("✅ Matched type option:", matchedType);
  
      setAssignedtype(matchedType || null);
  
      if (task.type_id) {
        console.log("📌 task.type_id exists:", task.type_id);
        setAssignedProjects([{ value: task.type_id, label: "Loading..." }]);
      }
  
      if (matchedType) {
        handleTypeChange(matchedType).then((fetchedOptions) => {
          console.log("📦 Options returned from handleTypeChange:", fetchedOptions);
  
          const matchedOption = fetchedOptions.find(
            (opt) => opt.value === task.type_id
          );
  
          console.log("🔎 Matched option in returned list:", matchedOption);
  
          if (matchedOption) {
            setAssignedProjects([matchedOption]);
          } else {
            setAssignedProjects([{ value: task.type_id, label: "Unknown" }]);
          }
        });
      } else {
        console.warn("⚠️ Could not match task type to dropdown options.");
      }
    }
  }, [task]);
  
  
   const fetchProjects = async () => {
      try {
        setLoading(true);

        
        const response = await getProjects();
        let allProjects = [];
    
        if (response?.responseData) {
          allProjects = response.responseData;
        } else if (Array.isArray(response)) {
          allProjects = response;
        } else if (response?.data) {
          allProjects = response.data;
        }
    
        console.log("📦 All projects received:", allProjects);
        let filteredProjects = [];
    
        if (role === "mentor" && mentorId) {
          filteredProjects = allProjects.filter(
            (project) =>
              project.mentorId === mentorId || project.mentorId === String(mentorId)
          );
          console.log("👨‍🏫 Filtered projects for mentor:", filteredProjects);
        } else if (role === "admin") {
          filteredProjects = allProjects; // Admin gets all projects (only for Project type)
          console.log("👑 All projects for admin:", filteredProjects);
        }
    
        const formattedOptions = filteredProjects.map((proj) => ({
          value: proj.projectId,
          label: proj.title,
        }));
    
        console.log("✅ Formatted project options:", formattedOptions);
        setProjectOptions(formattedOptions);
        return formattedOptions;
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
        console.log("🔁 handleTypeChange called with:", selectedType);
      
        setAssignedtype(selectedType);
        setAssignedProjects([]);
      
        const typeValue = selectedType?.value || selectedType;
        console.log("🧪 Normalized typeValue:", typeValue);
      
        if (typeValue === "Project") {
          console.log("🛠 Fetching projects for 'Project' type...");
          const options = await fetchProjects();  // <-- make sure this returns!
          return options || [];
        } else if (typeValue === "Batch") {
          try {
            setLoading(true);
            console.log("🔄 Fetching batches...");
            const response = await fetchbatches();
            const allBatches = response?.responseData || [];
            const batchOptions = allBatches.map((batch) => ({
              value: batch.batchId,
              label: batch.batchName,
            }));
            console.log("📦 Batch options:", batchOptions);
            setProjectOptions(batchOptions);
            return batchOptions;
          } catch (error) {
            console.error("❌ Error fetching batches:", error);
            setProjectOptions([]);
            return [];
          } finally {
            setLoading(false);
          }
        } else if (typeValue === "Individual") {
          try {
            setLoading(true);
            console.log("🧑‍🎓 Fetching students...");
            const response = await getUserDetails({ roleId: 3 });
            const students = response?.responseData || [];
            const studentOptions = students.map((student) => ({
              value: student.userId,
              label: `${student.firstName} ${student.lastName}`,
            }));
            console.log("📦 Student options:", studentOptions);
            setProjectOptions(studentOptions);
            return studentOptions;
          } catch (error) {
            console.error("❌ Error fetching students:", error);
            setProjectOptions([]);
            return [];
          } finally {
            setLoading(false);
          }
        } else {
          console.log("🧹 Clearing project options for unsupported type:", typeValue);
          setProjectOptions([]);
          return [];
        }
      };
      
    const handleUpdate = (e) => {
      e.preventDefault();
    
      const selectedType = role === "mentor" ? fixedType : (assignedtype?.value || assignedtype);
    
      const selectedIds = Array.isArray(assignedProjects)
        ? assignedProjects.map((p) => (typeof p === "object" ? p.value : p))
        : [];
    
      console.log("✏️ Editing task with type:", selectedType);
      console.log("📦 Selected IDs (typeIds):", selectedIds);
    
      if (selectedIds.length === 0) {
        alert("Please assign at least one " + selectedType);
        return;
      }
    
      const taskData = {
        taskId: task.taskId, // or however you're storing the selected task
        title: taskName,
        description,
        dueDate,
        attachment: file,
        type: selectedType,
        
        loggedInUser: role === "mentor" ? mentorId : adminId,
      };
      if (
        Array.isArray(assignedProjects) &&
        (assignedProjects.length !== 1 || assignedProjects[0].value !== task.type_id)
      ) {
        taskData.typeIds = assignedProjects.map((p) =>
          typeof p === "object" ? p.value : p
        );
      }
      console.log("🚀 Payload for update:", taskData);
    
      updateTask(taskData)
        .then((res) => {
          console.log("✅ Task updated successfully:", res);
          toast.success("Task updated successfully!");
          onClose(); // Close modal or form
        })
        .catch((err) => {
          console.error("❌ Task update failed:", err);
          const errorMessage = err?.response?.data?.statusMessage || "Task update failed.";
          toast.error(errorMessage);
        });
    };
    

 
  return (
    <form onSubmit={handleUpdate} className={styles.form}>
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
        content="Edit Task"
        variant="primary"
        width="full"
      />
    </form>
  );
};
 
export default EditTask;
 

