import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import { Main, Category, CalendarView, Detail } from './pages'
import { Loading } from './components'
import { connect } from 'react-redux'

const routers = [
  {
    path: '/',
    Component: Main
  },
  {
    path: '/tag',
    Component: Category
  },
  {
    path: '/calendar',
    Component: CalendarView
  },
  {
    path: '/blog/:id',
    Component: Detail
  },
  {
    path: '/tag/:id',
    Component: Main
  },
  {
    path: '/calendar/:id',
    Component: Main
  }
]

const renderRouter = routers =>
  routers.map(({ path, Component, children }, index) =>
    children ? (
      <Route
        path={path}
        exact
        key={index}
        children={({ history, location, match }) => renderRouter(children)}
      />
    ) : (
      <Route path={path} exact key={index} component={Component} />
    )
  )

class BlogRouter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    console.log(this.props.loading)
    return (
      <Fragment>
        <Loading loading={this.props.loading} />
        <BrowserRouter>
          <App>
            <Switch>{renderRouter(routers)}</Switch>
          </App>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default connect(({ loading }) => ({
  loading
}))(BlogRouter)
