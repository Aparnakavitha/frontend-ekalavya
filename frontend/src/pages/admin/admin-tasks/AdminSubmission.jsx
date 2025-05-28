import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import NavButton from "../../../components/buttons/NavButton";
import Paginations from "../../../components/pagination/Pagination";
import TaskSubmission from "../../../layouts/admin-tasks/components/TaskSubmission";
import AddMark from "../../../layouts/common/components/AddMark";
import EditMark from "../../../layouts/common/components/EditMark";
import Modal from "../../../layouts/common/components/Modal";
 
const Submissions = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const task = location.state?.task;
 
  // Dummy data mapping
  const taskSubmissionsData = {
    "1": [
        // {
        //     teamId: "T001",
        //     teamName: "Frontend Team",
        //     studentId: "S1001",
        //   studentName: "Alice Johnson",
        //     submission: "mobile_app_frontend.pdf",
        //     date: "2024-05-20",
        //     marks: 88,
        //   },
      // ... other submissions
    ],
    // ... other tasks
  };
 
  const taskNames = {
    "1": "Frontend Integration",
    // ... other task names
  };
 
  const [allSubmissions, setAllSubmissions] = useState([]);
  const [currentTaskName, setCurrentTaskName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [addMarkModalOpen, setAddMarkModalOpen] = useState(false);
  const [editMarkModalOpen, setEditMarkModalOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
 
  useEffect(() => {
    if (task) {
      // Use data from the task passed in navigation state
      setAllSubmissions(task.submissions || []);
      setCurrentTaskName(task.taskTitle || "Unknown Task");
    } else {
      // Fallback to dummy data if no task in state
      const submissions = taskSubmissionsData[taskId] || [];
      setAllSubmissions(submissions);
      setCurrentTaskName(taskNames[taskId] || "Unknown Task");
    }
  }, [taskId, task]);
 
  const submissionsPerPage = 10;
  const totalPages = Math.ceil(allSubmissions.length / submissionsPerPage);
  const startIdx = (currentPage - 1) * submissionsPerPage;
  const currentSubmissions = allSubmissions.slice(startIdx, startIdx + submissionsPerPage);
 
  const handlePageChange = (page) => setCurrentPage(page);
 
  const handleAddMarkSubmit = (mark) => {
    setAllSubmissions(prev =>
      prev.map(sub =>
        sub.studentId === selectedSubmission.studentId
          ? { ...sub, marks: parseInt(mark) }
          : sub
      )
    );
    setAddMarkModalOpen(false);
  };
 
  const handleEditMarkSubmit = (mark) => {
    setAllSubmissions(prev =>
      prev.map(sub =>
        sub.studentId === selectedSubmission.studentId
          ? { ...sub, marks: parseInt(mark) }
          : sub
      )
    );
    setEditMarkModalOpen(false);
  };
 
  return (
    <div style={{ padding: "2rem" }}>
      <NavButton pageName="Tasks" onClick={() => navigate("/admin/tasks")} />
      
      
      
      <TaskSubmission
        submissions={currentSubmissions}
        onAddMark={(sub) => {
          setSelectedSubmission(sub);
          setAddMarkModalOpen(true);
        }}
        onEditMark={(sub) => {
          setSelectedSubmission(sub);
          setEditMarkModalOpen(true);
        }}
      />
 
      {totalPages > 1 && (
        <Paginations
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
 
      {/* Add Mark Modal */}
      {addMarkModalOpen && (
      <Modal
        isOpen={addMarkModalOpen}
        widthVariant="small"
        onClose={() => setAddMarkModalOpen(false)}
      >
        <AddMark
          heading={`Add Mark for ${selectedSubmission?.studentName}`}
          onSubmit={handleAddMarkSubmit}
        />
      </Modal>
      )}
 
      {/* Edit Mark Modal */}
      <Modal
        isOpen={editMarkModalOpen}
        widthVariant="small"
        onClose={() => setEditMarkModalOpen(false)}
      >
        <EditMark
          heading={`Edit Mark for ${selectedSubmission?.studentName}`}
          currentMark={selectedSubmission?.marks}
          onSubmit={handleEditMarkSubmit}
        />
      </Modal>
    </div>
  );
};
 
export default Submissions;
 