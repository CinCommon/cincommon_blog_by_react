import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'style/iconfont/iconfont.css'
import 'style/animation.css'
import './index.scss'
import BlogRouter from './router'
import store from './store';
import 'style/normalize.css'

ReactDOM.render(
  <Provider store={store}>
    <BlogRouter />
  </Provider>,
  document.getElementById('root')
)
