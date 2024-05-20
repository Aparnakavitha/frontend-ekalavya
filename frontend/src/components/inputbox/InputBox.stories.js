import inputBox from "./InputBox";

export default {
  title: "components/InputBox",
  component: inputBox,
};

const inputData = {
  label: "Enter email addresses",
  width: "526px",
  height: "57px",
  placeholders: ["Address ", "Address 2", "Address 3", "Address 3"],
};

export const InputBox = {
  args: {
    ...inputData,
  },
};
