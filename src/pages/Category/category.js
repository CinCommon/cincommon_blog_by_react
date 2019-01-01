import React from 'react';
import { Slide, Card, Block } from 'components';
import { Link } from 'react-router-dom';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render () {
    return (
      <div className='category-contaner'>
        <Block className='blog-item' height='5px' />
      </div>
    );
  }
}