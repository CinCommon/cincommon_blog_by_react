import React from 'react';
import { Link } from 'react-router-dom';
import './slide.scss';

export default class Slide extends React.Component {
  componentDidMount() { 
  }
  render() {
    return (
      <div className='slide-container'>
        {this.props.children}
        <div className='slide-card'>
          <div className='slide-title'>
            {/* <i className></i> */}
            这是标题
          </div>
          <ul className='slide-content'>
            <li><Link to='/'>aaa</Link></li>
            <li><Link to='/'>bbb</Link></li>
            <li><Link to='/'>ccc</Link></li>
          </ul>
        </div>
        <div className='slide-card'>
          <div className='slide-title'>
            这是标题22
          </div>
          <ul className='slide-content'>
            <li><Link to='/'>ddd</Link></li>
            <li><Link to='/'>eee</Link></li>
            <li><Link to='/'>fff</Link></li>
          </ul>
        </div>
        
      </div>
    )
  }
}