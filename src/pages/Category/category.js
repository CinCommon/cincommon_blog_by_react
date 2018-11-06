import React from 'react';

export default class Category extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    console.log(props);
  }
  render () {
    return (
      <div>Category</div>
    );
  }
}