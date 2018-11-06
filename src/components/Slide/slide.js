import React from 'react';

export default class Slide extends React.Component {
  componentDidMount() { 
  }
  render() {
    return (
      <div className='slide-container'>
        {this.props.children}
      </div>
    )
  }
}