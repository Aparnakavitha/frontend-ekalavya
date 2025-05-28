
// import React, { useState, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import AdminTaskMenu from "../../../layouts/admin-tasks/components/AdminTaskMenu.jsx";
// import TaskView from "../../../layouts/admin-tasks/components/TaskView.jsx";
// import TaskDetail from "../../../layouts/admin-tasks/components/TaskDetail.jsx";
// import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";
// import NoData from "../../../components/nodata/NoData";
// import EditTask from "../../../layouts/common/components/EditTask";
// import secureLocalStorage from "react-secure-storage";
// import Modal from "../../../layouts/common/components/Modal";
// import { getTasks } from "../../../services/Task";
// import { getProjects } from "../../../services/Projects.jsx";
// import { fetchbatches } from "../../../services/Batch.jsx";

// const AdminTask = () => {
//   const navigate = useNavigate();
//   const [allTasks, setAllTasks] = useState([]);
//   const [filteredTasks, setFilteredTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("Ongoing");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [typeFilter, setTypeFilter] = useState("");
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [taskToEdit, setTaskToEdit] = useState(null);

//   const handleReset = () => {
//     setFilter("Ongoing");
//     setTypeFilter("");
//     setSearchTerm("");
//   };

//   const determineTaskStatus = (task) => {
//     const currentDate = new Date();
//     const dueDate = new Date(task.endDate);
//     const isOverdue = currentDate > dueDate;

//     if (!isOverdue) return "Ongoing";

//     if (task.submissions && task.submissions.length > 0) {
//       const allMarked = task.submissions.every((sub) => sub.marks !== null);
//       return allMarked ? "Completed" : "To Review";
//     }

//     return "To Review";
//   };

//   const fetchAdminTasks = useCallback(async () => {
//     setLoading(true);
//     try {
//       const [taskRes, projectRes, batchRes] = await Promise.all([
//         getTasks(),
//         getProjects(),
//         fetchbatches(),
//       ]);

//       const tasksFromBackend = taskRes.responseData || [];
//       const allProjects = projectRes.responseData || [];
//       const allBatches = batchRes.responseData || [];

//       const projectMap = {};
//       allProjects.forEach((proj) => {
//         projectMap[proj.projectId] = proj.title;
//       });

//       const batchMap = {};
//       allBatches.forEach((batch) => {
//         batchMap[batch.batchId] = batch.batchName;
//       });

//       const tasksWithStatus = tasksFromBackend.map((task, index) => {
//         let taskType = task.type?.toLowerCase();
//         if (taskType?.includes(",")) {
//           taskType = taskType.split(",")[0].trim();
//         }

//         const transformedTask = {
//           ...task,
//           taskId: task.task_id,
//           title: task.title,
//           description: task.description,
//           endDate: task.due_date,
//           createdAt: task.created_at,
//           attachments: task.attachment,
//           taskType: taskType,
//           projectTaskTitle: taskType === "project" ? projectMap[task.type_id] : null,
//           batchTaskTitle: taskType === "batch" ? batchMap[task.type_id] : null,
//           submissions: task.submissions || [],
//         };

//         const status = determineTaskStatus(transformedTask);

//         return {
//           ...transformedTask,
//           status,
//           number: index + 1,
//         };
//       });

//       console.log("✅ Transformed task types:", tasksWithStatus.map((t) => t.taskType));
//       setAllTasks(tasksWithStatus);
//     } catch (error) {
//       console.error("❌ Error fetching tasks:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const applyAllFilters = useCallback(() => {
//     let filtered = [...allTasks];
//     console.log("🔍 Applying filters...");
//     console.log("📌 Status Filter:", filter);
//     console.log("📌 Type Filter:", typeFilter);
//     console.log("📌 Search Term:", searchTerm);

//     if (filter !== "All") {
//       filtered = filtered.filter((task) => task.status === filter);
//     }

//     if (typeFilter) {
//       filtered = filtered.filter((task) =>
//         task.taskType?.split(",").map((t) => t.trim().toLowerCase()).includes(typeFilter.toLowerCase())
//       );
//     }

//     if (searchTerm) {
//       filtered = filtered.filter((task) =>
//         task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         (task.projectTaskTitle && task.projectTaskTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         (task.batchTaskTitle && task.batchTaskTitle.toLowerCase().includes(searchTerm.toLowerCase()))
//       );
//     }

//     const numberedTasks = filtered.map((task, index) => ({
//       ...task,
//       number: index + 1,
//     }));

//     console.log("✅ Filtered result count:", numberedTasks.length);
//     setFilteredTasks(numberedTasks);
//   }, [allTasks, filter, typeFilter, searchTerm]);

//   useEffect(() => {
//     fetchAdminTasks();
//   }, [fetchAdminTasks]);

//   useEffect(() => {
//     applyAllFilters();
//   }, [applyAllFilters]);

//   const transformedTasks = filteredTasks.map((task, index) => ({
//     id: task.taskId,
//     taskId: task.taskId,
//     title: task.title,
//     name: task.projectTaskTitle || task.batchTaskTitle || task.title,
//     description: task.description,
//     attachments: task.attachments || [],
//     createdAt: task.createdAt,
//     dueDate: task.endDate,
//     type: task.type,
//     taskType: task.taskType,
//     createdBy: task.createdBy,
//     submissions: task.submissions || [],
//     status: task.status,
//     number: index + 1,
//   }));

//   return (
//     <div>
//       <AdminTaskMenu
//         explore={null}
//         statuses={[
//           { name: "Ongoing", onClick: () => setFilter("Ongoing") },
//           { name: "To Review", onClick: () => setFilter("To Review") },
//           { name: "Completed", onClick: () => setFilter("Completed") },
//         ]}
//         types={[
//           { name: "Projects", onClick: () => setTypeFilter("project") },
//           { name: "Batches", onClick: () => setTypeFilter("batch") },
//           { name: "Individuals", onClick: () => setTypeFilter("individual") },
//         ]}
//         title="Tasks"
//         count={filteredTasks.length}
//         activeFilter={filter}
//         activeTypeFilter={typeFilter}
//         buttonVisible={false}
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//         typeFilter={typeFilter}
//         setTypeFilter={setTypeFilter}
//         placeholder="Search Tasks"
//         onReset={handleReset}
//       />

//       {loading ? (
//         <LoadingSpinner />
//       ) : filteredTasks.length > 0 ? (
//         (typeFilter === "project" || typeFilter === "batch") ? (
//           <TaskView
//             projectNames={transformedTasks}
//             taskType={typeFilter}
//             currentStatus={filter}
//             userRole="admin"
//             onView={(taskId) => navigate(`/admin/submissions/${taskId}`)}
//             onEdit={(taskId) => {
//               const task = allTasks.find((t) => t.taskId === taskId);
//               setTaskToEdit(task);
//               setEditModalOpen(true);
//             }}
//           />
//         ) : (
//           <div>
//             {transformedTasks.map((task) => (
//               <TaskDetail
//                 key={task.taskId}
//                 number={task.number}
//                 title={task.title}
//                 description={task.description}
//                 attachments={task.attachments}
//                 createdAt={task.createdAt}
//                 dueDate={task.dueDate}
//                 taskType={task.taskType}
//                 status={task.status}
//                 onEdit={() => {
//                   const originalTask = allTasks.find((t) => t.taskId === task.taskId);
//                   setTaskToEdit(originalTask);
//                   setEditModalOpen(true);
//                 }}
//                 onView={(taskId) => navigate(`/admin/submissions/${taskId}`)}
//               />
//             ))}
//           </div>
//         )
//       ) : (
//         <NoData title={`${typeFilter || 'All'} Tasks`} />
//       )}

//       {editModalOpen && taskToEdit && (
//         <Modal
//           isOpen={editModalOpen}
//           widthVariant="large"
//           onClose={() => setEditModalOpen(false)}
//         >
//           <EditTask
//             task={taskToEdit}
//             onClose={() => setEditModalOpen(false)}
//             onSave={(updatedTask) => {
//               setAllTasks((prev) =>
//                 prev.map((t) =>
//                   t.taskId === updatedTask.taskId ? updatedTask : t
//                 )
//               );
//               setEditModalOpen(false);
//             }}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default AdminTask;



import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AdminTaskMenu from "../../../layouts/admin-tasks/components/AdminTaskMenu.jsx";
import TaskView from "../../../layouts/admin-tasks/components/TaskView.jsx";
import TaskDetail from "../../../layouts/admin-tasks/components/TaskDetail.jsx";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";
import NoData from "../../../components/nodata/NoData";
import EditTask from "../../../layouts/common/components/EditTask";
import secureLocalStorage from "react-secure-storage";
import Modal from "../../../layouts/common/components/Modal";
 
import {
  getTasks,
} from "../../../services/Task";
 
import { getProjects,} from "../../../services/Projects.jsx";
import { fetchbatches,} from "../../../services/Batch.jsx";
const AdminTask = () => {
  const navigate = useNavigate();
  const [allTasks, setAllTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("Ongoing");
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  
 
  
  const handleReset = () => {
    setFilter("Ongoing");
    setTypeFilter(null);
    setSearchTerm("");
  };
 
  const userSession = secureLocalStorage.getItem("userSession") || {};
  const userId = userSession.userId;
  const loggedInAdmin = userSession.userId;


  const determineTaskStatus = (task) => {
    const currentDate = new Date();
    const dueDate = new Date(task.endDate);
    const isOverdue = currentDate > dueDate;
  
    if (!isOverdue) return "Ongoing";
  
    if (task.submissions && task.submissions.length > 0) {
      const allMarked = task.submissions.every(sub => sub.marks !== null);
      return allMarked ? "Completed" : "To Review";
    }
  
    return "To Review";
  };
  
  const fetchAdminTasks = useCallback(async () => {
    setLoading(true);
    try {
      // Step 1: Fetch all data
      const [taskRes, projectRes, batchRes] = await Promise.all([
        getTasks(),
        getProjects(),
        fetchbatches()
      ]);
  
      const tasksFromBackend = taskRes.responseData || [];
      const allProjects = projectRes.responseData || [];
      const allBatches = batchRes.responseData || [];
  
      // Step 2: Build lookup maps
      const projectMap = {};
      allProjects.forEach(proj => {
        projectMap[proj.projectId] = proj.title;
      });
  
      const batchMap = {};
      allBatches.forEach(batch => {
        batchMap[batch.batchId] = batch.batchName;
      });
  
      // Step 3: Transform each task
      const tasksWithStatus = tasksFromBackend.map((task, index) => {
        const taskType = task.type?.toLowerCase();
        const transformedTask = {
          ...task,
          taskId: task.task_id,
          title: task.title,
          description: task.description,
          endDate: task.due_date,
          createdAt: task.created_at,
          attachments: task.attachment,
          taskType: taskType, // "project" | "batch" | "individual"
  
          // Lookup and attach display titles
          projectTaskTitle: taskType === "project" ? projectMap[task.type_id] : null,
          batchTaskTitle: taskType === "batch" ? batchMap[task.type_id] : null,
  
          submissions: task.submissions || [],
        };
  
        const status = determineTaskStatus(transformedTask);
  
        return {
          ...transformedTask,
          status,
          number: index + 1,
        };
      });
  
      setAllTasks(tasksWithStatus);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  }, []);
  

 
  // Apply all filters (status, type, search) to the complete task list
  const applyAllFilters = useCallback(() => {
    let filtered = [...allTasks];
 
    // Apply status filter - show all tasks if filter is "All"
    if (filter !== "All") {
      filtered = filtered.filter(task => task.status === filter);
    }
 
    // Apply type filter - show all if typeFilter is null or undefined
    if (typeFilter) {
      filtered = filtered.filter((task) => task.taskType?.toLowerCase()  === typeFilter.toLowerCase());
    }
 
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (task.projectTaskTitle && task.projectTaskTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (task.batchTaskTitle && task.batchTaskTitle.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
 
    // Re-number the filtered tasks
    const numberedTasks = filtered.map((task, index) => ({
      ...task,
      number: index + 1,
    }));
 
    setFilteredTasks(numberedTasks);
  }, [allTasks, filter, typeFilter, searchTerm]);
 
  const handleDelete =()=>{
// delete api task
  }
  // Fetch tasks only once when component mounts
  useEffect(() => {
    fetchAdminTasks();
  }, [fetchAdminTasks]);
 
  // Apply filters whenever any filter changes or tasks are loaded
  useEffect(() => {
    applyAllFilters();
  }, [applyAllFilters]);
 
  // Transform filtered tasks to match expected format
  const transformedTasks = filteredTasks.map((task, index) => ({
    id: task.taskId,
    taskId: task.taskId,
    title: task.title,
    name: task.projectTaskTitle || task.batchTaskTitle || task.title,
    description: task.description,
    attachments: task.attachments || [],
    createdAt: task.createdAt,
    dueDate: task.endDate,
    type: task.type,
    taskType: task.taskType,
    createdBy: task.createdBy,
    submissions: task.submissions || [],
    status: task.status,
    number: index + 1,
  }));
 
  return (
    <div>
      <AdminTaskMenu
        explore={null}
        statuses={[
          { name: "Ongoing", onClick: () => setFilter("Ongoing") },
          { name: "To Review", onClick: () => setFilter("To Review") },
          { name: "Completed", onClick: () => setFilter("Completed") },
        ]}
        types={[
          { name: "Project", onClick: () => setTypeFilter("Project") },
          { name: "Batch", onClick: () => setTypeFilter("Batch") },
          { name: "Individual", onClick: () => setTypeFilter("Individual") },
        ]}
        title="Tasks"
        count={filteredTasks.length}
        activeFilter={filter}
        activeTypeFilter={typeFilter}
        buttonVisible={false}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        placeholder="Search Tasks"
        onReset={handleReset}
      />
 
      {loading ? (
        <LoadingSpinner />
      ) : filteredTasks.length > 0 ? (
        
        (typeFilter === "Project" || typeFilter === "Batch") ? (
          <TaskView
            tasks={transformedTasks}
            taskType={typeFilter}
            currentStatus={filter}
            userRole="admin"
            onView={(taskId) => navigate(`/admin/submissions/${taskId}`)}
            onEdit={(taskId) => {
              const task = allTasks.find((t) => t.taskId === taskId);
              setTaskToEdit(task);
              setEditModalOpen(true);
            }}
          />
        ) : (
          <div>
            {transformedTasks.map((task) => (
              <TaskDetail
                key={task.taskId}
                number={task.number}
                title={task.title}
                description={task.description}
                attachments={task.attachments}
                createdAt={task.createdAt}
                dueDate={task.dueDate}
                
                 taskType={task.taskType}
                status={task.status}
                onEdit={() => {
                  const originalTask = allTasks.find((t) => t.taskId === task.taskId);
                  setTaskToEdit(originalTask);
                  setEditModalOpen(true);
                }}
                onDelete={handleDelete}
                onView={(taskId) => navigate(`/admin/submissions/${taskId}`)}
              />
            ))}
          </div>
        )
      ) : (
        <NoData title={`${typeFilter || 'All'} Tasks`} />
      )}
 
      {editModalOpen && taskToEdit && (
        <Modal
          isOpen={editModalOpen}
          widthVariant="large"
          onClose={() => setEditModalOpen(false)}
        >
          <EditTask
            task={taskToEdit}
            onClose={() => setEditModalOpen(false)}
            adminId={loggedInAdmin}  
            createdBy={loggedInAdmin}
            onSave={(updatedTask) => {
              setAllTasks((prev) =>
                prev.map((t) =>
                  t.taskId === updatedTask.taskId ? updatedTask : t
                )
              );
              setEditModalOpen(false);
            }}
          />
        </Modal>
      )}
    </div>
  );
};
 
export default AdminTask;
