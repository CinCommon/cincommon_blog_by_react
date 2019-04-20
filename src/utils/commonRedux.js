import { SET_HEADER } from '@/store/actionTypes';
import store from '@/store';
import { SET_LOADING } from '../store/actionTypes';

export const setHeader = (headerValue) => {
  store.dispatch({
    type: SET_HEADER,
    value: headerValue,
  });
}

export const setLoading = (isLoading) => {
  store.dispatch({
    type: SET_LOADING,
    value: isLoading,
  });
}
