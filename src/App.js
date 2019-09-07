import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.scss'
class App extends Component {

  componentWillMount() {
    const firstVisit = sessionStorage.getItem('_IS_FIRST_VISIT')
    console.log(firstVisit)
    if (firstVisit !== 'false') {
      this.props.history.replace('/landing')
    }
  }


  render() {
    return (
      <div>
        {this.props.location.pathname === '/landing' ? (
          <div>{this.props.children}</div>
        ) : (
          <div className='app'>
            <div className={'app-draw-container'}>
              <Link to="/" className={'app-menu-link icon-home'} />
              <Link to="/tag" className={'app-menu-link icon-drawer'} />
              <Link to="/calendar" className={'app-menu-link icon-stopwatch'} />
            </div>
            <div className={'app-main-container'}>
              <div className={'app-header'}>
                <h1>{this.props.headerValue}</h1>
              </div>
              <div className={'app-page'}>{this.props.children}</div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default withRouter(
  connect(
    state => state,
    dispatch => ({ dispatch })
  )(App)
)
