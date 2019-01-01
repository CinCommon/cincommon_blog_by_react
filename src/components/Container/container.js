import React from 'react';
import './container.scss';

export default class Container extends React.Component {
  render() {
    return (
      <div className='container-container'>
        {this.props.children}
      </div>
    )
  }
}