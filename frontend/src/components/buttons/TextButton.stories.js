import TextButton from "./TextButton";
import { GoTrash } from "react-icons/go";

export default {
  title: "Button/text Button",
  component: TextButton,
};

export const Textbutton = {
  args: {
    icon: <GoTrash />,
    text: "fdnej",
    onClick: (e) => {
      console.log("hllo");
    },
  },
};
