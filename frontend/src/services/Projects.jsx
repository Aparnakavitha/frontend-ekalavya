import axios from "axios";
 
const BASE_URL = "http://localhost:8088/api/projects";
const PROJECT_STACK_BASE_URL = "http://localhost:8088/api/project-stack";
 
 
/**
* Fetch all projects.
* @returns {Promise<Array>} - List of projects.
*/
export const getProjects = async () => {
  try {
    const response = await axios.get(BASE_URL);
    console.log("Full API response:", response.data);
    if (response.data && response.data.responseData && Array.isArray(response.data.responseData.projects)) {
      console.log("✅ Projects found:", response.data.responseData.projects.length);
      return response.data.responseData.projects;
    } else {
      console.error("Unexpected API response structure:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
/**
* Fetch a project with stack details.
* @param {string} projectId - UUID of the project.
* @returns {Promise<Object>} - Project object with stacks.
*/
export const getProjectWithStacks = async (projectId) => {
  try {
    const response = await axios.get(`${BASE_URL}/with-stacks`, {
      params: { id: projectId }
    });
    return response.data.responseData;
  } catch (error) {
    console.error("Error fetching project with stacks:", error);
    throw error;
  }
};
 
/**
* Fetch a single project by ID.
* @param {string} projectId - UUID of the project.
* @returns {Promise<Object>} - Project object.
*/
export const getProjectById = async (projectId) => {
  try {
    const response = await axios.get(`${BASE_URL}/projectId`, {
      params: { id: projectId },
    });
    return response.data.responseData;
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    throw error;
  }
};
 
/**
* Create a new project.
* @param {Object} projectData - The DTO containing project info.
* @returns {Promise<Object>} - Created project object.
*/
export const createProject = async (projectData) => {
  try {
    const response = await axios.post(BASE_URL, projectData);
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};
 
 
/**
* Delete multiple projects by their IDs.
* @param {Array<{projectId: string}>} projectIds - Array of objects with projectId field.
* @returns {Promise<Object>} - Response data.
*/
export const deleteProjects = async (projectIds) => {
  try {
    const response = await axios.delete(BASE_URL, {
      data: projectIds, // [{ projectId: uuid }, ...]
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting projects:", error);
    throw error;
  }
};
 
/**
* Update an existing project by ID.
* @param {string} projectId - UUID of the project.
* @param {Object} updatedData - Updated project DTO.
* @returns {Promise<Object>} - Updated project object.
*/
export const updateProject = async (projectId, updatedData) => {
  try {
    // First update the project details
    const projectResponse = await axios.put(
      `${BASE_URL}/projectId`,
      updatedData,
      { params: { id: projectId } }
    );
    
 
    // Then handle stack updates if needed
    if (updatedData.stackUsed && updatedData.stackUsed.length > 0) {
      await updateProjectStacks(projectId, updatedData.stackUsed);
    }
 
    return projectResponse.data;
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
};
 
/**
* Update project stacks
* @param {string} projectId - UUID of the project
* @param {Array} newStacks - Array of stack/skill IDs
*/
const updateProjectStacks = async (projectId, newStacks) => {
  try {
    // First get current stacks
    const currentStacksResponse = await axios.get(PROJECT_STACK_BASE_URL, {
      params: { projectId }
    });
 
    const currentStacks = currentStacksResponse.data?.response?.skillIds || [];
 
    // Determine stacks to add and remove
    const stacksToAdd = newStacks.filter(stack => !currentStacks.includes(stack));
    const stacksToRemove = currentStacks.filter(stack => !newStacks.includes(stack));
 
    // Add new stacks
    if (stacksToAdd.length > 0) {
      await axios.post(PROJECT_STACK_BASE_URL, {
        projectId,
        skillIds: stacksToAdd
      });
    }
 
    // Remove old stacks
    if (stacksToRemove.length > 0) {
      await axios.delete(PROJECT_STACK_BASE_URL, {
        data: {
          projectId,
          skillIds: stacksToRemove
        }
      });
    }
  } catch (error) {
    console.error("Error updating project stacks:", error);
    throw error;
  }
};
/**
* Fetch available stack options
* @returns {Promise<Array>} - Array of stack options {value, label}
*/
export const getStackOptions = async () => {
  try {
    const response = await axios.get("http://localhost:8088/api/skills");
    return response.data?.responseData?.map(skill => ({
      value: skill.id,
      label: skill.skillName
    })) || [];
  } catch (error) {
    console.error("Error fetching stack options:", error);
    throw error;
  }
};
 
/**
* Fetch mentor details by ID
* @param {string} mentorId - The ID of the mentor
* @returns {Promise<Array>} - Array of mentor details
*/
export const getMentorDetails = async (mentorId) => {
  try {
    const response = await axios.get("http://localhost:8082/users", {
      params: { userId: mentorId }
    });
    
    // Assuming the API returns an array of users
    return response.data || [];
  } catch (error) {
    console.error("Error fetching mentor details:", error);
    throw error;
  }
};