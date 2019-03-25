import { CHANGE_VALUE } from './actionTypes';

const defaultState = {
  value: 'CinCommon',
  value2: 'Liverpool',
};

// reducer 可以接收state, 但是不可以直接修改原来的state
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === CHANGE_VALUE) {
    newState.value = action.value;
    return newState;  
  }
  return state;
}