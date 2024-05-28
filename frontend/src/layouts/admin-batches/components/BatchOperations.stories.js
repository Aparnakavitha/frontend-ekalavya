import React from "react";
import Batchoperations from "./BatchOperations";

export default {
  title: "Layouts/AdminBatches/Components/Add Batch ",
  component: Batchoperations,
};

const Template = (args) => <Batchoperations {...args} />;

export const Addbatch = Template.bind({});

Addbatch.args = {
  mainHeading: "Create Batch",
};
