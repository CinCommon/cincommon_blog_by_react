import React, { Component } from 'react';
import { Header, Slide, Card, Footer } from 'components';
import { Link } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className='app-header'>
          <Header></Header>
        </div>
        <div className='app-body'>
          <div className='app-content'>
            {this.props.children}
          </div>
        </div>
        <div className='app-footer'>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
