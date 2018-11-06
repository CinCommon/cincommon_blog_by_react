import React, { Component } from 'react';
import { Header, Slide, Container, Card, Footer } from './components';
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
          <Slide className='app-slide'>
            <Card title={'分类'}>
              <ul>
                <li><Link to='/'>aaa</Link></li>
                <li><Link to='/'>bbb</Link></li>
                <li><Link to='/'>ccc</Link></li>
              </ul>
            </Card>
            <Card title={'最新'}>
              <ul>
                <li><Link to='/'>aaa</Link></li>
                <li><Link to='/'>bbb</Link></li>
                <li><Link to='/'>ccc</Link></li>
              </ul>
            </Card>
            <Card title={'最热'}>
              <ul>
                <li><Link to='/'>aaa</Link></li>
                <li><Link to='/'>bbb</Link></li>
                <li><Link to='/'>ccc</Link></li>
              </ul>
            </Card>
          </Slide>
        </div>
        <div className='app-footer'>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
