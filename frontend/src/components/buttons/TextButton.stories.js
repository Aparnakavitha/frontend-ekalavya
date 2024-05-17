import TextButton from "./TextButton";
import { GoTrash } from "react-icons/go";

export default {
  title: "text Button",
  component: TextButton,
};

export const sample = {
  args: {
    icon: <GoTrash />,
    text: "fdnej",
    onClick: (e) => {
      console.log("hllo");
    },
  },
};
