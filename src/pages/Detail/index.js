import React from 'react'
import parser from 'react-html-parser'
import { connect } from 'react-redux'
import './index.scss'
import { setHeader } from 'utils/commonRedux'
import api from 'api'

class Detail extends React.Component {
  constructor() {
    super()
    this.state = {
      blogInfo: {}
    }
  }

  componentWillMount() {
    const { id } = this.props.match.params
    api.get.findBlogById(id).then(data => {
      setHeader(data.title)
      this.setState({ blogInfo: data })
    })
  }
  componentDidMount() {}

  render() {
    const { content, title } = this.state.blogInfo
    return (
      <div className="detail-container">
        <div className="detail-wrapper">{parser(content)}</div>
      </div>
    )
  }
}
export default connect(
  state => state,
  dispatch => ({ dispatch })
)(Detail)
