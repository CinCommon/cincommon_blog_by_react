import React from 'react'
import './index.scss'
import Axios from 'axios'
import { setHeader } from '../../utils/commonRedux';

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      top10List: []
    }
    this.onBlogClick = this.onBlogClick.bind(this)
  }

  componentDidMount() {
    setHeader('')
    Axios.get('/blog/initMain').then(res => {
      const data = res.data.data
      this.setState({ top10List: data })
    })
  }
  onBlogClick(blogId) {
    this.props.history.push(`/blog/${blogId}`)
  }

  render() {
    return (
      <div className="main-container">
        <div className="main-block-wrapper">
          {this.state.top10List.map(item => (
            <div
              className={'main-block'}
              key={item.id}
              onClick={() => this.onBlogClick(item.id)}
            >
              <div>
                <h1 className={'block-title'}>{item.title}</h1>
              </div>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
