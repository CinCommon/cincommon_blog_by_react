import React from 'react'
import HighLight from 'react-highlight'
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
    const { content } = this.state.blogInfo
    return (
      <div className="detail-container">
        <div className="detail-wrapper">
          <HighLight innerHTML={true}>{content}</HighLight>
        </div>
      </div>
    )
  }
}
export default connect(
  state => state,
  dispatch => ({ dispatch })
)(Detail)
