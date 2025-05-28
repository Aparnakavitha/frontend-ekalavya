import React from "react";
import TaskView from "./TaskView";

export default {
  title: "Layouts/admin-tasks/Components/TaskView",
  component: TaskView,
};

const baseTemplate = (args) => <TaskView {...args} />;

// Updated sample data with TaskAccordion layout compatible structure
export const ongoingTasks = [
  {
    name: "Website Redesign Project",
    number: 1,
    title: "Website Redesign Project",
    status: "Ongoing",
    description: "Complete redesign of company website with modern UI/UX including responsive design and accessibility improvements",
    taskType: "Design & Development",
    createdAt: "2025-05-01",
    dueDate: "2025-06-15",
    assignee: "John Doe",
    createdBy: "Project Manager Alice",
    taskId: "task-001",
    attachments: [
      { name: "wireframes.pdf", url: "#" },
      { name: "design-specs.figma", url: "#" }
    ],
    tasks: [
      { name: "Homepage Design", completed: true },
      { name: "Product Pages", completed: true },
      { name: "Checkout Flow", completed: false },
      { name: "Mobile Responsiveness", completed: false },
    ],
  },
  {
    name: "Mobile App Development",
    number: 2,
    title: "Mobile App Development",
    status: "Ongoing",
    description: "Building cross-platform mobile application for iOS and Android with React Native framework",
    taskType: "Mobile Development",
    createdAt: "2025-04-15",
    dueDate: "2025-07-01",
    assignee: "Sarah Johnson",
    createdBy: "Tech Lead Bob",
    taskId: "task-002",
    attachments: [
      { name: "app-mockups.sketch", url: "#" },
      { name: "technical-specs.pdf", url: "#" }
    ],
    tasks: [
      { name: "API Integration", completed: true },
      { name: "UI Components", completed: true },
      { name: "User Authentication", completed: false },
      { name: "Push Notifications", completed: false },
      { name: "Performance Testing", completed: false },
    ],
  },
];

export const toReviewTasks = [
  {
    name: "Marketing Campaign Analytics",
    number: 1,
    title: "Marketing Campaign Analytics",
    status: "To Review",
    description: "Comprehensive analysis of Q2 marketing campaign performance metrics and ROI calculations",
    taskType: "Analytics",
    createdAt: "2025-05-20",
    dueDate: "2025-06-10",
    assignee: "Michael Chen",
    createdBy: "Marketing Director Carol",
    taskId: "task-003",
    attachments: [
      { name: "analytics-report.xlsx", url: "#" },
      { name: "campaign-summary.pdf", url: "#" }
    ],
    tasks: [
      { name: "Data Collection", completed: true },
      { name: "Report Generation", completed: true },
      { name: "Presentation Deck", completed: true },
    ],
    reviewNotes: "Needs executive summary section before final approval",
  },
  {
    name: "Server Migration Documentation",
    number: 2,
    title: "Server Migration Documentation",
    status: "To Review",
    description: "Comprehensive documentation for recent cloud server migration process including rollback procedures",
    taskType: "Documentation",
    createdAt: "2025-05-15",
    dueDate: "2025-05-30",
    assignee: "Emma Wilson",
    createdBy: "DevOps Lead Dan",
    taskId: "task-004",
    attachments: [
      { name: "migration-guide.docx", url: "#" },
      { name: "rollback-procedures.pdf", url: "#" }
    ],
    tasks: [
      { name: "Migration Steps", completed: true },
      { name: "Troubleshooting Guide", completed: true },
      { name: "Security Protocols", completed: true },
    ],
    reviewNotes: "Please verify all screenshots are up-to-date",
  },
];

export const completedTasks = [
  {
    name: "Annual Financial Audit",
    number: 1,
    title: "Annual Financial Audit",
    status: "Completed",
    description: "Full financial audit for fiscal year 2024 including compliance checks and regulatory requirements",
    taskType: "Finance",
    createdAt: "2025-04-01",
    dueDate: "2025-05-15",
    assignee: "Robert Williams",
    createdBy: "CFO Ellen",
    taskId: "task-005",
    score: 9,
    total: 10,
    fileName: "audit-report-2024.pdf",
    attachments: [
      { name: "audit-report.pdf", url: "#" },
      { name: "financial-statements.xlsx", url: "#" }
    ],
    tasks: [
      { name: "Balance Sheets", completed: true },
      { name: "Income Statements", completed: true },
      { name: "Tax Documentation", completed: true },
      { name: "Compliance Checks", completed: true },
    ],
    feedback: "Excellent work. Submitted to board successfully.",
  },
  {
    name: "Employee Training Program",
    number: 2,
    title: "Employee Training Program",
    status: "Completed",
    description: "New hire onboarding training materials development with interactive assessments and feedback system",
    taskType: "HR Development",
    createdAt: "2025-04-10",
    dueDate: "2025-05-10",
    assignee: "Lisa Rodriguez",
    createdBy: "HR Manager Frank",
    taskId: "task-006",
    score: 10,
    total: 10,
    fileName: "training-program-complete.zip",
    attachments: [
      { name: "training-handbook.pdf", url: "#" },
      { name: "assessment-template.docx", url: "#" }
    ],
    tasks: [
      { name: "Training Videos", completed: true },
      { name: "Handbook", completed: true },
      { name: "Assessment Tests", completed: true },
    ],
    feedback: "Training adoption rate is 92% - above target!",
  },
  {
    name: "Office Renovation",
    number: 3,
    title: "Office Renovation",
    status: "Completed",
    description: "3rd floor workspace modernization project with ergonomic furniture and upgraded technology infrastructure",
    taskType: "Facilities",
    createdAt: "2025-03-15",
    dueDate: "2025-04-30",
    assignee: "David Kim",
    createdBy: "Facilities Manager Grace",
    taskId: "task-007",
    score: 8,
    total: 10,
    fileName: "renovation-final-report.pdf",
    attachments: [
      { name: "floor-plan.dwg", url: "#" },
      { name: "renovation-photos.zip", url: "#" }
    ],
    tasks: [
      { name: "Floor Plan Design", completed: true },
      { name: "Furniture Procurement", completed: true },
      { name: "IT Infrastructure", completed: true },
      { name: "Staff Relocation", completed: true },
    ],
    feedback: "Completed 5 days ahead of schedule. Team very pleased with results.",
  },
];

// Story configurations
export const OngoingTasksView = baseTemplate.bind({});
OngoingTasksView.args = {
  projectNames: ongoingTasks,
  userRole: "admin",
  onEdit: (taskId) => alert(`Edit task: ${taskId}`),
};

export const ToReviewTasksView = baseTemplate.bind({});
ToReviewTasksView.args = {
  projectNames: toReviewTasks,
  userRole: "admin",
  onEdit: (taskId) => alert(`Edit task: ${taskId}`),
};

export const CompletedTasksView = baseTemplate.bind({});
CompletedTasksView.args = {
  projectNames: completedTasks,
  userRole: "admin",
  onEdit: (taskId) => alert(`Edit task: ${taskId}`),
};

export const EmptyTasksView = baseTemplate.bind({});
EmptyTasksView.args = {
  projectNames: [],
  userRole: "admin",
  onEdit: (taskId) => alert(`Edit task: ${taskId}`),
};

export const AllTasksView = baseTemplate.bind({});
AllTasksView.args = {
  projectNames: [...ongoingTasks, ...toReviewTasks, ...completedTasks],
  userRole: "admin",
  onEdit: (taskId) => alert(`Edit task: ${taskId}`),
};