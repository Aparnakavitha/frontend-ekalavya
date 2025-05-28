import axios from 'axios';
 
const TASK_BASE_URL = 'http://localhost:8899/api/tasks';
const SUBMISSION_BASE_URL = 'http://localhost:8899/api/submissions';
const ASSIGNMENT_BASE_URL = 'http://localhost:8899/api/assignments';
 
 
// Create task
export const createTask = async (taskData) => {
  const formData = new FormData();

  // Required fields
  formData.append('title', taskData.title);
  formData.append('description', taskData.description);
  formData.append('dueDate', taskData.dueDate); // Format: YYYY-MM-DD

  // Optional file
  if (taskData.attachment) {
    formData.append('attachment', taskData.attachment);
  }

  formData.append('type', taskData.type);


// Fix: Properly append typeIdList as a comma-separated string
const typeIdString = taskData.typeIds.join(",");
formData.append("typeIdList", typeIdString);


  // Ensure createdBy is passed as a string
  formData.append('createdBy', String(taskData.createdBy));
  
// Debug logging
console.log("📤 FormData being sent:");
console.log("- title:", taskData.title);
console.log("- description:", taskData.description);
console.log("- dueDate:", taskData.dueDate);
console.log("- type:", taskData.type);
console.log("- typeIdList:", typeIdString);
console.log("- createdBy:", String(taskData.createdBy));
console.log("- typeIds array:", taskData.typeIds);


  try {
    const response = await axios.post(TASK_BASE_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Handle ResponseDTO wrapping
    if (response.data.statusCode === 201) {
      return response.data.responseData; 
    } else {
      throw new Error(response.data.message || 'Task creation failed');
    }
  } catch (error) {
    console.error('Task creation error:', error);
    throw error;
  }
};
 
// Get all tasks
export const getTasks = async (createdBy, userId, sortDir = "desc") => {
  const response = await axios.get(TASK_BASE_URL, {
    params: { createdBy, userId, sortDir },
  });
  return response.data;
};

 
// Update task
export const updateTask = async (taskData) => {
  const formData = new FormData();
 
  // Required parameters
  formData.append('taskId', taskData.taskId);
  formData.append('loggedInUser', taskData.loggedInUser); // This was missing
 
  // Optional parameters
  if (taskData.title) formData.append('title', taskData.title);
  if (taskData.description) formData.append('description', taskData.description);
  if (taskData.dueDate) formData.append('dueDate', taskData.dueDate);
  if (taskData.attachment) formData.append('attachment', taskData.attachment);
 
  if (taskData.type && taskData.typeIds && taskData.typeIds.length > 0) {
    formData.append('type', taskData.type);
    const typeIdList = taskData.typeIds.join(',');
    formData.append('typeIdList', typeIdList);
  }
 
  const response = await axios.put(TASK_BASE_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
 
  return response.data;
};
 
// Delete task
export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${TASK_BASE_URL}/${taskId}`);
  return response.data;
};
 
 
export const submitTask = async (taskId, userId, { score, file }) => {
  const formData = new FormData();
  formData.append('userId', userId);
  if (score !== undefined && score !== null) formData.append('score', score);
  if (file) formData.append('upload', file);
 
  const response = await axios.put(`${SUBMISSION_BASE_URL}/${taskId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
 
// Get all submissions for a task
export const getSubmissionsByTaskId = async (taskId) => {
  const response = await axios.get(SUBMISSION_BASE_URL, {
    params: { taskId },
  });
  return response.data;
};
 
export const deleteAssignment = async (assignmentId) => {
    const response = await axios.delete(`${ASSIGNMENT_BASE_URL}/${assignmentId}`);
    return response.data;
  };