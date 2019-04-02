import { CHANGE_VALUE, SET_HEADER } from "./actionTypes";

export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
})

export const setHeader = (headerValue) => ({
  type: SET_HEADER,
  value: headerValue,
})