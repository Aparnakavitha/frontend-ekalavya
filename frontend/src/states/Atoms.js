import { atom } from "recoil";

export const currentPageState = atom({
  key: "currentPageState",
  default: "profile",
});

export const studentPageState = atom({
  key: "studentPageState",
  default: "profile",
});
