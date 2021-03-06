import React from 'react'
import { connect } from 'react-redux'
import { setHeader } from 'utils/commonRedux'
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js/lib/index'
import 'highlight.js/styles/qtcreator_dark.css'
import './index.scss'
import api from 'api'
class Detail extends React.Component {
  constructor() {
    super()
    this.state = {
      blogInfo: {},
      prevBlog: {},
      postBlog: {}
    }
    this.onPrevBlogClick = this.onPrevBlogClick.bind(this)
    this.onPostBlogClick = this.onPostBlogClick.bind(this)
  }

  componentWillMount() {
    const { id } = this.props.match.params
    this.queryBlog(id);
  }
  footerRedirect(id) {
    if (id) {
      this.queryBlog(id);
      this.props.history.push(`/blog/${id}`)
    }
  }
  queryBlog(id) {
    api.get.findBlogById(id).then(data => {
      const { currentBlog, prevBlog, postBlog } = data
      setHeader(currentBlog.title)
      this.setState({
        blogInfo: currentBlog,
        prevBlog: prevBlog || {},
        postBlog: postBlog || {}
      }, this.renderCode)
      // scroll to top
      document.getElementById('detail-container').scrollTo(0, 0)
    })
  }
  renderCode() {
    // hljs.initHighlighting 默认init之后就不会再次调用, 这里需要强制将flag置为false, 让其再次触发
    hljs.initHighlighting.called = false
    hljs.initHighlighting()
  }
  onPrevBlogClick(id) {
    this.footerRedirect(id)
  }
  onPostBlogClick(id) {
    this.footerRedirect(id)
  }

  render() {
    const { blogInfo, prevBlog, postBlog } = this.state
    return (
      <div id="detail-container" className="detail-container">
        <div className="detail-wrapper">
          {blogInfo.introduction && <ReactMarkdown source={blogInfo.introduction} style={{ fontStyle: 'italic' }} />}
          <ReactMarkdown source={blogInfo.content} />
        </div>
        <div className="detail-footer">
          <div
            className="prev"
            onClick={() => this.onPrevBlogClick(prevBlog.id)}
          >
            <div className="detail-arrow icon-circle-left" />
            <div className="content">{prevBlog.title || '没有了'}</div>
          </div>
          <div
            className="post"
            onClick={() => this.onPostBlogClick(postBlog.id)}
          >
            <div className="content">{postBlog.title || '没有了'}</div>
            <div className="detail-arrow icon-circle-right" />
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  state => state,
  dispatch => ({ dispatch })
)(Detail)
