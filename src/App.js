import React, { Component } from 'react';
import { Header, Slide, Container } from './components/index';
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
          <Slide className='app-slide'></Slide>
        </div>
      </div>
    );
  }
}

export default App;
