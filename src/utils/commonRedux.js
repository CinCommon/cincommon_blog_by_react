import { SET_HEADER } from '@/store/actionTypes';
import store from '@/store';

export const setHeader = (headerValue) => {
  store.dispatch({
    type: SET_HEADER,
    value: headerValue,
  });
}
