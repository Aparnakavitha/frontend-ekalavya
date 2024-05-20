import Input from "./InputBox";

export default {
  title: "Input",
  component: Input,
};

const inputData = {
  label: "Enter email addresses",
  width: "526px",
  height: "57px",
  placeholders: ["Address ", "Address 2", "Address 3", "Address 3"],
};

export const input = {
  args: {
    ...inputData,
  },
};
