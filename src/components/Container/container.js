import React from 'react';
import './container.scss';

export default class Container extends React.Component {
  render() {
    console.log(this)
    return (
      <div className='container-container'>
        {this.props.children}
      </div>
    )
  }
}