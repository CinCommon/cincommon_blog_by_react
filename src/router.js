import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App'
import { Main, About, Category, Editor, Liverpool, Tools, Blog } from './pages';

const routers = [{
  path: '/',
  Component: Main,
}, {
  path: '/about',
  Component: About,
}, {
  path: '/category',
  Component: Category,
}, {
  path: '/blog',
  Component: Blog,
}, {
  path: '/liverpool',
  Component: Liverpool,
}, {
  path: '/tools',
  Component: Tools,
}, ];
class BlogRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App >
          <Switch>
            {routers.map(({ path, Component }, index) => <Route path={path} exact component={Component} key={index}/>)}
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

export default BlogRouter;