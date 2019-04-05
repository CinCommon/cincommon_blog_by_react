import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.scss'
class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={'app'}>
        <div className={'app-draw-container'}>
          <Link to="/" className={'app-menu-link icon-home'} />
          <Link to="/tag" className={'app-menu-link icon-listing-box'} />
          <Link to="/calendar" className={'app-menu-link icon-star-full'} />
        </div>
        <div className={'app-main-container'}>
          <div className={'app-header'}>
            <h1>{this.props.headerValue}</h1>
          </div>
          <div className={'app-page'}>{this.props.children}</div>
        </div>
      </div>
    )
  }
}
export default withRouter(
  connect(
    state => state,
    dispatch => ({ dispatch }),
  )(App)
)
