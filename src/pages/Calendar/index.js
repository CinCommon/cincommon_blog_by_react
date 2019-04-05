import React from 'react'
import './index.scss'
import { Calendar } from 'antd'
import { setHeader } from 'utils/commonRedux'
import api from 'api'

export default class CalendarView extends React.Component {
  constructor() {
    super()
    this.dateCellRender = this.dateCellRender.bind(this)
    this.monthCellRender = this.monthCellRender.bind(this)
    this.state = {
      today: new Date(),
      dataMap: []
    }
  }

  componentDidMount() {
    this.initCalendar()
  }
  getListData(value) {
    return this.state.dataMap[value.format('YYYY/MM/DD')] || []
  }
  initCalendar() {
    setHeader('按照日期查看')
    const date = this.state.today
    const y = date.getFullYear()
    const m = date.getMonth()
    const startDate = new Date(y, m, 1).getTime()
    const endDate = new Date(y, m + 1, 0).getTime()
    api.get.findBlogByDate(startDate, endDate).then(data => {
      this.setState({ dataMap: data })
    })
  }
  dateCellRender(value) {
    const listData = this.getListData(value)
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    )
  }

  getMonthData(value) {
    return this.state.dataMap[value.format('YYYY/MM')] || []
  }

  monthCellRender(value) {
    const num = this.getMonthData(value).length
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>TOTAL</span>
      </div>
    ) : null
  }

  render() {
    return (
      <div>
        <Calendar
          dateCellRender={this.dateCellRender}
          monthCellRender={this.monthCellRender}
        />
      </div>
    )
  }
}
