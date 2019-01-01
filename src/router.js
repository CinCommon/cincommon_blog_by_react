import React from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import App from './App'
import { Main, About, Category, Editor, Liverpool, Tools, Blog } from './pages';
import { Loading } from './components';

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
  children: [{
    path: '/blog',
    Component: Blog,
  }, {
    path: '/blog/:id',
    Component: Category,
  }]
}, {
  path: '/liverpool',
  Component: Liverpool,
}, {
  path: '/tools',
  Component: Tools,
},];

const renderRouter = routers => routers.map(({ path, Component, children }, index) => children ? <Route path={path} exact key={index} children={({ history, location, match }) => renderRouter(children)}></Route> : <Route path={path} exact key={index} component={Component}></Route>);

class BlogRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App >
          <Loading />
          <Switch>
            {renderRouter(routers)}
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

export default BlogRouter;