import React from 'react';
import './card.scss';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (<div className='card-container'>
      <div className='card-wrapper'>
        <div className='card-title'>
          {this.props.title}
        </div>
        <div className='card-content'>
          {this.props.children}
        </div>
      </div>
    </div>)
  }
}