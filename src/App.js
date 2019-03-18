import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.scss';
class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className={"app"}>
        <ul className={"app-draw-container"}>
          <Link to='/' className={'app-menu-link icon-home'} />
          <Link to='/category' className={'app-menu-link icon-listing-box'} />
        </ul>
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
export default App;
