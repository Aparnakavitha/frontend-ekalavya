import { atom } from "recoil";
import { atom } from "recoil";

export const currentPageState = atom({
  key: "currentPageState",
  default: "student",
});

export const adminPageState = atom({
  key: "currentPageState",
  default: "student",
  key: "currentPageState",
  default: "profile",
});

export const studentPageState = atom({
  key: "studentPageState",
  default: "profile",
});
