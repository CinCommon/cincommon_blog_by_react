import React from 'react'
import parser from 'react-html-parser'
import Axios from 'axios'
import { connect } from 'react-redux'
import { SET_HEADER } from "@/store/actionTypes";
import './index.scss'
import { setHeader } from '../../utils/commonRedux';

class Detail extends React.Component {
  constructor() {
    super()
    this.state = {
      blogInfo: {}
    }
  }

  componentWillMount() {
    const { dispatch } = this.props
    const { id } = this.props.match.params
    Axios.get('/blog', {
      params: {
        id
      }
    }).then(res => {
      const blogInfo = res.data.data;
      setHeader(blogInfo.title)
      this.setState({ blogInfo })
    })
  }
  componentDidMount() {}

  render() {
    const { content, title } = this.state.blogInfo
    return (
      <div className="detail-container">
        <div className="detail-wrapper">
        <h1>{title}</h1>
        {parser(content)}
        </div>
      </div>
    )
  }
}
export default connect(state => state, dispatch => ({dispatch}))(Detail)
