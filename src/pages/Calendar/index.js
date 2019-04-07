import React from 'react'
import moment from 'moment'
import { Calendar } from 'antd'
import { setHeader } from 'utils/commonRedux'
import { formatDate } from 'utils/utils'
import api from 'api'
import './index.scss'

export default class CalendarView extends React.Component {
  constructor() {
    super()
    this.dateCellRender = this.dateCellRender.bind(this)
    this.monthCellRender = this.monthCellRender.bind(this)
    this.onPanelChange = this.onPanelChange.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = {
      today: new moment(),
      selectDate: new moment(),
      dataMap: [],
      mode: 'month',
      yearCountMap: {}
    }
  }
  timer = null
  onChange(date) {
    const { mode, selectDate } = this.state
    this.setState(
      {
        selectDate: date
      },
      () => {
        if (selectDate[mode]() !== date[mode]()) {
          this.initCalendar()
        }
      }
    )
    if (mode === 'year') {
      this.setState({
        mode: 'month'
      })
    }
  }
  componentDidMount() {
    this.initCalendar()
  }
  getListData(value) {
    return this.state.dataMap[value.format('YYYY/MM/DD')] || []
  }
  initCalendar() {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      if (this.state.mode === 'month') {
        setHeader(formatDate(this.state.selectDate.valueOf(), 'YYYY/MM'))
        const date = this.state.selectDate
        api.get
          .findBlogByDate(
            date.startOf('month').valueOf(),
            date.endOf('month').valueOf()
          )
          .then(data => {
            this.setState({ dataMap: data })
          })
      } else {
        setHeader(formatDate(this.state.selectDate.valueOf(), 'YYYY'))
        const date = this.state.selectDate
        api.get.getOneYearCount(date.year()).then(data => {
          this.setState({ yearCountMap: data })
        })
      }
    }, 200)
  }
  onPanelChange(date, mode) {
    this.setState({ mode }, () => {
      this.initCalendar()
    })
  }
  dateCellRender(value) {
    const listData = this.getListData(value)
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    )
  }

  getMonthData(value) {
    return this.state.yearCountMap[value.format('YYYY/MM')] || 0
  }

  monthCellRender(value) {
    const num = this.getMonthData(value)
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>TOTAL</span>
      </div>
    ) : null
  }

  render() {
    return (
      <div className="calendar-container">
        <Calendar
          onPanelChange={this.onPanelChange}
          dateCellRender={this.dateCellRender}
          monthCellRender={this.monthCellRender}
          onChange={this.onChange}
          mode={this.state.mode}
        />
      </div>
    )
  }
}
