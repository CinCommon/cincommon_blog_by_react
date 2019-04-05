import React from 'react'
import './index.scss'
import { setHeader } from 'utils/commonRedux'
import { BlogCard } from 'components'
import { formatDate } from 'utils/utils'
import api from 'api'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      blogList: []
    }
    this.onBlogClick = this.onBlogClick.bind(this)
    this.onTagClick = this.onTagClick.bind(this)
    this.onDateClick = this.onDateClick.bind(this)
  }
  componentDidMount() {
    const { params, path } = this.props.match
    switch (path) {
      case '/tag/:id':
        this.findBlogByTagId(params.id)
        break
      case '/calendar/:id':
        this.findBlogByCalendar(params.id)
        break
      case '/':
        api.get.initMain().then(data => {
          this.setState({ blogList: data })
        })
        setHeader('CinCommon-Blog')
        break
      default:
        break
    }
  }

  onDateClick(date) {
    this.findBlogByCalendar(date)
    this.props.history.push(`/calendar/${date}`)
  }

  onBlogClick(blogId) {
    this.props.history.push(`/blog/${blogId}`)
  }
  onTagClick(tagId) {
    this.findBlogByTagId(tagId)
    this.props.history.push(`/tag/${tagId}`)
  }
  findBlogByTagId(id) {
    api.get.findTagById(id).then(data => {
      this.setState({ blogList: data.blogInfoSet })
      setHeader(data.tagName)
    })
  }
  findBlogByCalendar(date) {
    api.get.findBlogByDate(date).then(data => {
      this.setState({ blogList: data })
    })
    setHeader(formatDate(date, 'YYYY/MM/DD'))
  }

  render() {
    return (
      <div className="main-container">
        <div className="main-block-wrapper">
          {this.state.blogList.map(item => (
            <BlogCard
              onBlogClick={this.onBlogClick}
              onTagClick={this.onTagClick}
              onDateClick={this.onDateClick}
              blog={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    )
  }
}
