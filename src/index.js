import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'highlight.js/styles/github.css'
import 'style/normalize.css'
import 'style/iconfont/iconfont.css'
import 'style/animation.css'
import './index.scss'
import BlogRouter from './router'
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BlogRouter />
  </Provider>,
  document.getElementById('root')
)
