import React from 'react';
import './index.scss';
import { Calendar, Badge } from 'antd';

export default class CalendarView extends React.Component {

  constructor() {
    super();
    this.dateCellRender = this.dateCellRender.bind(this);
    this.monthCellRender = this.monthCellRender.bind(this);
    this.state = {
      today: new Date(),
    };
  }

  getListData(value) {
    console.log('getListData', value);
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ]; break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ]; break;
      case 16:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ]; break;
      default:
    }
    return listData || [];
  }

  dateCellRender(value) {
    console.log('dateCellRender', value);
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {
          listData.map(item => (
            <li key={item.content}>
              <Badge status={item.type} text={item.content} />
            </li>
          ))
        }
      </ul>
    );
  }

  getMonthData(value) {
    console.log(value);
    if (value.month() === 8) {
      return 1394;
    }
  }

  monthCellRender(value) {
    console.log(value);
    const num = this.getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  render() {
    return (<div><Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} /></div>);
  }
}