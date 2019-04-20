import { CHANGE_VALUE, SET_HEADER, SET_LOADING } from "./actionTypes";

export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
})

export const setHeader = (headerValue) => ({
  type: SET_HEADER,
  value: headerValue,
})
export const setLoading = (loading) => ({
  type: SET_LOADING,
  value: loading,
})
