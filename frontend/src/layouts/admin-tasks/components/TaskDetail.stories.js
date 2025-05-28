import React from "react";
import TaskAccordionLayout from "./TaskDetail";

export default {
  title: "Layouts/admin-tasks/components/TaskAccordionLayout",
  component: TaskAccordionLayout,
};

const mockAssignedTo = [
  { name: "Alice", imageUrl: "https://i.pravatar.cc/24?img=1" },
  { name: "Bob", imageUrl: "https://i.pravatar.cc/24?img=2" },
  { name: "Charlie", imageUrl: "https://i.pravatar.cc/24?img=3" },
  { name: "Daisy", imageUrl: "https://i.pravatar.cc/24?img=4" },
  { name: "Eve", imageUrl: "https://i.pravatar.cc/24?img=5" },
];

const mockAttachments = [
  { name: "Requirements.pdf", url: "https://example.com/requirements.pdf" },
  { name: "Design.png", url: "https://example.com/design.png" },
];

const mockTasks = [
  {
    number: 1,
    title: "Implement Login",
    description: "Create login functionality with JWT authentication.",
    taskType: "Development",
    attachments: mockAttachments,
    createdAt: "2025-04-01",
    dueDate: "2025-04-10",
    assignedTo: mockAssignedTo,
    createdBy: "Mentor John",
    status: "Ongoing",
    onEdit: () => alert("Edit clicked"),
    onDelete: () => alert("Delete clicked"),
    onSubmit: () => alert("Submit clicked"),
  },
  {
    number: 2,
    title: "Frontend Integration",
    description: "Integrate frontend with backend APIs and ensure proper data flow.",
    taskType: "Integration",
    attachments: mockAttachments,
    createdAt: "2025-04-02",
    dueDate: "2025-04-12",
    assignedTo: mockAssignedTo.slice(0, 3),
    createdBy: "Mentor Sarah",
    status: "To Review",
    onEdit: () => alert("Edit clicked"),
    onDelete: () => alert("Delete clicked"),
    onView: () => alert("View Submission clicked"),
  },
  {
    number: 3,
    title: "Final Report",
    description: "Complete final project report with all deliverables and documentation.",
    taskType: "Documentation",
    attachments: mockAttachments,
    createdAt: "2025-04-03",
    dueDate: "2025-04-15",
    assignedTo: mockAssignedTo.slice(0, 2),
    createdBy: "Mentor Mike",
    status: "Completed",
    score: 8,
    total: 10,
    fileName: "final_report.pdf",
    onView: () => alert("View Final clicked"),
  },
];

const Template = (args) => <TaskAccordionLayout {...args} />;

// Ongoing Tasks View
export const OngoingTasksLayout = Template.bind({});
OngoingTasksLayout.args = {
  tasks: [
    {
      number: 1,
      title: "Implement Login System",
      description: "Create a complete login system with JWT authentication, password validation, and user session management.",
      taskType: "Development",
      attachments: mockAttachments,
      createdAt: "2025-04-01",
      dueDate: "2025-04-10",
      assignedTo: mockAssignedTo,
      createdBy: "Mentor John",
      status: "Ongoing",
      onEdit: () => alert("Edit clicked"),
      onDelete: () => alert("Delete clicked"),
      onSubmit: () => alert("Submit clicked"),
    },
    {
      number: 2,
      title: "Database Schema Design",
      description: "Design and implement the database schema for user management and application data storage.",
      taskType: "Database",
      attachments: [{ name: "Schema.sql", url: "https://example.com/schema.sql" }],
      createdAt: "2025-04-02",
      dueDate: "2025-04-12",
      assignedTo: mockAssignedTo.slice(0, 2),
      createdBy: "Mentor Sarah",
      status: "Ongoing",
      onEdit: () => alert("Edit clicked"),
      onDelete: () => alert("Delete clicked"),
      onSubmit: () => alert("Submit clicked"),
    },
    {
      number: 3,
      title: "API Endpoints Development",
      description: "Develop RESTful API endpoints for user operations, data retrieval, and business logic implementation.",
      taskType: "Backend",
      attachments: mockAttachments,
      createdAt: "2025-04-03",
      dueDate: "2025-04-15",
      assignedTo: mockAssignedTo.slice(0, 3),
      createdBy: "Mentor Mike",
      status: "Ongoing",
      onEdit: () => alert("Edit clicked"),
      onDelete: () => alert("Delete clicked"),
      onSubmit: () => alert("Submit clicked"),
    },
  ],
};

// To Review Tasks View
export const ToReviewTasksLayout = Template.bind({});
ToReviewTasksLayout.args = {
  tasks: [
    {
      number: 1,
      title: "Frontend Integration",
      description: "Integrate frontend components with backend APIs and ensure proper data flow and error handling.",
      taskType: "Integration",
      attachments: mockAttachments,
      createdAt: "2025-03-25",
      dueDate: "2025-04-05",
      assignedTo: mockAssignedTo.slice(0, 3),
      createdBy: "Mentor Sarah",
      status: "To Review",
      onEdit: () => alert("Edit clicked"),
      onDelete: () => alert("Delete clicked"),
      onView: () => alert("View Submission clicked"),
    },
    {
      number: 2,
      title: "Unit Testing Implementation",
      description: "Write comprehensive unit tests for all components and ensure code coverage meets project requirements.",
      taskType: "Testing",
      attachments: [
        { name: "TestPlan.pdf", url: "https://example.com/testplan.pdf" },
        { name: "TestResults.html", url: "https://example.com/results.html" }
      ],
      createdAt: "2025-03-28",
      dueDate: "2025-04-08",
      assignedTo: mockAssignedTo.slice(1, 4),
      createdBy: "Mentor John",
      status: "To Review",
      onEdit: () => alert("Edit clicked"),
      onDelete: () => alert("Delete clicked"),
      onView: () => alert("View Submission clicked"),
    },
  ],
};

// Completed Tasks View
export const CompletedTasksLayout = Template.bind({});
CompletedTasksLayout.args = {
  tasks: [
    {
      number: 1,
      title: "Project Requirements Analysis",
      description: "Complete analysis of project requirements, stakeholder interviews, and technical feasibility study.",
      taskType: "Analysis",
      attachments: mockAttachments,
      createdAt: "2025-03-15",
      dueDate: "2025-03-25",
      assignedTo: mockAssignedTo.slice(0, 2),
      createdBy: "Mentor Mike",
      status: "Completed",
      score: 9,
      total: 10,
      fileName: "requirements_analysis.pdf",
      onView: () => alert("View Final clicked"),
    },
    {
      number: 2,
      title: "UI/UX Design Mockups",
      description: "Create detailed UI/UX mockups and wireframes for the application interface with user flow diagrams.",
      taskType: "Design",
      attachments: [
        { name: "Mockups.fig", url: "https://example.com/mockups.fig" },
        { name: "UserFlow.pdf", url: "https://example.com/userflow.pdf" }
      ],
      createdAt: "2025-03-18",
      dueDate: "2025-03-28",
      assignedTo: mockAssignedTo.slice(2, 5),
      createdBy: "Mentor Sarah",
      status: "Completed",
      score: 8,
      total: 10,
      fileName: "design_mockups.zip",
      onView: () => alert("View Final clicked"),
    },
    {
      number: 3,
      title: "Final Project Report",
      description: "Comprehensive final project report including all deliverables, documentation, and project retrospective.",
      taskType: "Documentation",
      attachments: mockAttachments,
      createdAt: "2025-03-20",
      dueDate: "2025-03-30",
      assignedTo: mockAssignedTo,
      createdBy: "Mentor John",
      status: "Completed",
      score: 10,
      total: 10,
      fileName: "final_project_report.pdf",
      onView: () => alert("View Final clicked"),
    },
  ],
};

// Empty States for each view
export const EmptyOngoingLayout = Template.bind({});
EmptyOngoingLayout.args = {
  tasks: [],
  children: (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      border: '2px dashed #dee2e6'
    }}>
      <h3 style={{ color: '#6c757d', marginBottom: '10px' }}>No Ongoing Tasks</h3>
      <p style={{ color: '#6c757d' }}>All tasks are either completed or under review.</p>
    </div>
  ),
};

export const EmptyToReviewLayout = Template.bind({});
EmptyToReviewLayout.args = {
  tasks: [],
  children: (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      backgroundColor: '#fff3cd',
      borderRadius: '8px',
      border: '2px dashed #ffeaa7'
    }}>
      <h3 style={{ color: '#856404', marginBottom: '10px' }}>No Tasks to Review</h3>
      <p style={{ color: '#856404' }}>No submissions are pending review at this time.</p>
    </div>
  ),
};

export const EmptyCompletedLayout = Template.bind({});
EmptyCompletedLayout.args = {
  tasks: [],
  children: (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      backgroundColor: '#d1e7dd',
      borderRadius: '8px',
      border: '2px dashed #badbcc'
    }}>
      <h3 style={{ color: '#0f5132', marginBottom: '10px' }}>No Completed Tasks</h3>
      <p style={{ color: '#0f5132' }}>Completed tasks will appear here once reviewed and graded.</p>
    </div>
  ),
};