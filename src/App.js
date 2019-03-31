import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './App.scss';
class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className={"app"}>
        <div className={"app-draw-container"}>
          <Link to='/' className={'app-menu-link icon-home'} />
          <Link to='/category' className={'app-menu-link icon-listing-box'} />
          <Link to='/dateline' className={'app-menu-link icon-star-full'} />
        </div>
        <div className={"app-main-container"}>
          <div className={"app-header"}>
            
          </div>
          <div className={"app-page"}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
// export default withRouter(App);
export default App;
