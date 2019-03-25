import React from 'react';
import './index.scss';
import { Button } from 'antd';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className='category-container'>
        <div id='word-cloud'></div>
        <Button>qqq</Button>
      </div>
    );
  }
}