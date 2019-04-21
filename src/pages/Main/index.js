import React from 'react'
import './index.scss'
import { setHeader } from 'utils/commonRedux'
import { BlogCard, SimplePagination } from 'components'
import { formatDate } from 'utils/utils'
import api from 'api'

let timer = null;
export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      blogList: [],
      pageSize: 10,
      pageNum: 0,
      total: 0
    }
    this.onBlogClick = this.onBlogClick.bind(this)
    this.onTagClick = this.onTagClick.bind(this)
    this.onDateClick = this.onDateClick.bind(this)
    this.onPageChangeClick = this.onPageChangeClick.bind(this)
  }
  componentDidMount() {
    this.renderList()
  }
  renderList() {
    const { params, path } = this.props.match
    switch (path) {
      case '/tag/:id':
        this.findBlogByTagId(params.id)
        break
      case '/calendar/:id':
        this.findBlogByCalendar(params.id)
        break
      case '/':
        api.get.initMain(this.state.pageSize, this.state.pageNum).then(data => {
          const { list, total } = data
          this.setState({ blogList: list, total })
        })
        setHeader('CinCommon-Blog')
        break
      default:
        break
    }
  }
  onDateClick(date) {
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
    clearTimeout(timer)
    timer = setTimeout(() => {
      api.get.findTagById(id).then(data => {
        this.setState({ blogList: data.blogInfoSet })
        setHeader(data.tagName)
      })
    }, 200)
  }
  findBlogByCalendar(date) {
    api.get.getOneDayBlog(date).then(data => {
      this.setState({ blogList: data })
    })
    setHeader(formatDate(date, 'YYYY/MM/DD'))
  }

  onPageChangeClick(pageNum) {
    this.setState({ pageNum }, this.renderList)
  }

  render() {
    return (
      <div className="main-container">
        <div className="main-block-wrapper">
          <SimplePagination
            pageSize={this.state.pageSize}
            total={this.state.total}
            pageNum={this.state.pageNum}
            onClick={this.onPageChangeClick}
          />
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
