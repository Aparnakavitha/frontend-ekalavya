import React from "react";
import Addbatch from "./addBatch";

export default {
  title: "Layouts/Add Batch ",
  component: Addbatch,
};

const Template = (args) => <Addbatch {...args} />;

export const AddBatch = Template.bind({});
AddBatch.args = {
  mainHeading:"Create Batch",
  initialdata:{batchName:"hhhhh"}
};
