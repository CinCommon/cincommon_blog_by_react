import React from 'react'
import './index.scss'
import { setHeader } from 'utils/commonRedux'
import api from 'api';

export default class Category extends React.Component {
  constructor() {
    super()
    this.state = {
      tagList: []
    }
    this.onTagClick = this.onTagClick.bind(this);
  }
  componentDidMount() {
    api.get.initTag()
      .then(data => {
        this.setState({
          tagList: data
        })
      })
    setHeader('标签')
  }
  
  onTagClick(tagId) {
    this.props.history.push(`/tag/${tagId}`);
  }

  render() {
    return (
      <div
        className="category-container"
        style={{
          backgroundImage: `url(${require('../../static/background.jpg')})`
        }}
      >
        <div className="category-block-wrapper">
          {this.state.tagList.map(item => (
            <div className="category-block" key={item.tagId} onClick={() => this.onTagClick(item.tagId, item)}>
              <div title={item.tagName}>{item.tagName}</div>
              <img
                className="normal-background"
                src={require('../../static/tag_background_small_size.png')}
                alt="home-jersey"
                />
              <img
                className="hover-background"
                src={require('../../static/tag_background_small_size_hover.png')}
                alt="away-jersey"
              />
              <div>{item.blogInfoSet.length}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
