import inputBox from "./InputBox";

export default {
  title: "components/InputBox",
  component: inputBox,
};

const inputData = {
  label: "Enter email addresses",
  width: "526px",
  height: "57px",
  placeholders: ["Email Address "],
};

export const InputBox = {
  args: {
    ...inputData,
  },
};
