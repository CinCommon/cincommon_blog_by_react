import React from 'react'
import parser from 'react-html-parser'
import Axios from 'axios'
import './index.scss'

class Detail extends React.Component {
  constructor() {
    super()
    this.state = {
      blogInfo: {}
    }
  }

  componentWillMount() {
    const { id } = this.props.match.params
    Axios.get('/blog', {
      params: {
        id
      }
    }).then(res => {
      this.setState({ blogInfo: res.data.data })
    })
  }
  componentDidMount() {}

  render() {
    const { content, title } = this.state.blogInfo
    return (
      <div className="detail-container">
        <h1>{title}</h1>
        {parser(content)}
      </div>
    )
  }
}
export default Detail
