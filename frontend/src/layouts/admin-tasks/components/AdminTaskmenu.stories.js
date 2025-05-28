import React, { useState } from "react";
import AdminTaskMenu from "./AdminTaskMenu";
import Modal from "react-modal";


Modal.setAppElement("#storybook-root");

export default {
  title: "Layouts/admin-tasks/Components/AdminTaskMenu",
  component: AdminTaskMenu,
};

const Template = (args) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  return (
    <AdminTaskMenu
      {...args}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      typeFilter={typeFilter}
      setTypeFilter={setTypeFilter}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "All Tasks",
  count: 8,
  activeFilter: "To Do",
  statuses: [
    { name: "To Do", onClick: () => console.log("To Do clicked") },
    { name: "In Progress", onClick: () => console.log("In Progress clicked") },
    { name: "Completed", onClick: () => console.log("Completed clicked") },
    { name: "Overdue", onClick: () => console.log("Overdue clicked") },
  ],
  buttonVisible: true,
  showSearchBar: true,
  showButton: true,
  showCreateTask: true, // enable this now
};

