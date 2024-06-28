import { atom } from 'recoil';

export const studentDataAtom = atom({
  key: 'studentData',
  default: [],
});

export const eventNameState = atom({
  key: 'eventNameState',
  default: '',
});
