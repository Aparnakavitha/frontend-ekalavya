import { atom } from 'recoil';

export const currentPageState = atom({
  key: 'currentPageState',
  default: 'profile',
});

export const isCreatingEventState = atom({
  key: "isCreatingEventState",
  default: false,
});