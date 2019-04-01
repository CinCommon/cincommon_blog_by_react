import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.scss'
import { dispatch } from 'C:/Users/Cin/AppData/Local/Microsoft/TypeScript/3.3/node_modules/rxjs/internal/observable/pairs';
class App extends Component {
  componentDidMount() {
    console.log(this)
  }

  render() {
    return (
      <div className={'app'}>
        <div className={'app-draw-container'}>
          <Link to="/" className={'app-menu-link icon-home'} />
          <Link to="/category" className={'app-menu-link icon-listing-box'} />
          <Link to="/calendar" className={'app-menu-link icon-star-full'} />
        </div>
        <div className={'app-main-container'}>
          <div className={'app-header'}>
            <h1>{'HEADER'}</h1>
          </div>
          <div className={'app-page'}>{this.props.children}</div>
        </div>
      </div>
    )
  }
}
// export default withRouter(App);
export default connect(
  state => state,
  dispatch => { console.log('log---from mapDispatchToProps', dispatch); return {dispatch}},
  // (stateProps, dispatchProps, ownProps) => { console.log('log---from mergeProps', stateProps, dispatchProps, ownProps); return {} }
  // dispatch => dispatch
)(App)
