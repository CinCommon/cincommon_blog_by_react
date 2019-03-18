import { CHANGE_VALUE } from "./actionTypes";

export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
})