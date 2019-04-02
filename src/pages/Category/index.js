import React from 'react'
import './index.scss'
import { Button } from 'antd'
import { setHeader } from '../../utils/commonRedux'

export default class Category extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  componentDidMount() {
    setHeader('标签')
  }

  render() {
    return (
      <div className="category-container">
        <div className="category-block-wrapper">
          <div className="category-block">
            <div>JAVA</div>
            <img src={require('../../static/tag_background_small_size.png')} />
            <div>10</div>
          </div>
          <div className="category-block">
            <div>Javascript</div>
            <img src={require('../../static/tag_background_small_size.png')} />
            <div>10</div>
          </div>
          <div className="category-block">
            <div>JAVA</div>
            <img src={require('../../static/tag_background_small_size.png')} />
            <div>10</div>
          </div>
          <div className="category-block">
            <div>JAVA</div>
            <img src={require('../../static/tag_background_small_size.png')} />
            <div>10</div>
          </div>
          <div className="category-block">
            <div>JAVA</div>
            <img src={require('../../static/tag_background_small_size.png')} />
            <div>10</div>
          </div>
        </div>
      </div>
    )
  }
}
