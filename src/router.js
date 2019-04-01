import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App'
import { Main, Category, CalendarView, Detail } from './pages';
import { Loading } from './components';

const routers = [{
  path: '/',
  Component: Main,
}, {
  path: '/category',
  Component: Category,
}, {
  path: '/calendar',
  Component: CalendarView,
}, {
  path: '/blog/:id',
  Component: Detail,
}];

const renderRouter = routers => routers.map(({ path, Component, children }, index) => children ? <Route path={path} exact key={index} children={({ history, location, match }) => renderRouter(children)}></Route> : <Route path={path} exact key={index} component={Component}></Route>);

class BlogRouter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <Fragment>
        <Loading loading={this.state.loading} />
        <BrowserRouter>
          <App >
            <Switch>
              {renderRouter(routers)}
            </Switch>
          </App>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default BlogRouter;