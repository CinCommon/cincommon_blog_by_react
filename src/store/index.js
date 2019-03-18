import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk'; // 使得action中可以返回函数, 进行异步操作

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose; 
// redux的中间件, 在createStore时通过applyMiddleware加载
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(
  reducer,
  enhancer,
);

export default store;