import React from 'react';
import parser from 'react-html-parser';
import './index.scss';
import Axios from 'axios';

export default class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      top10List: [],
    };
  }

  componentDidMount() {
    console.log(this.state.top10List);
    Axios.get('/blog/initMain')
    .then(res => {
        const data = res.data.data;
        this.setState({ top10List: data.top10List });
      });
  }

  render() {
    console.log(this.state.top10List);
    return (
      <div className={'main-container'}>
        <div className={'main-block'}>
          <div className={'block-title'}></div>
          {parser(`<h1>从Flux到Redux(一)</h1>
          <p>要了解Redux, 首先要从Flux说起, 可以认为Redux是Flux思想的另一种实现方式,通过了解Flux, 我们可以知道Flux一族框架贯彻的最重要的思想------单向数据流</p><p>要了解Redux, 首先要从Flux说起, 可以认为Redux是Flux思想的另一种实现方式,通过了解Flux, 我们可以知道Flux一族框架贯彻的最重要的思想------单向数据流</p><p>要了解Redux, 首先要从Flux说起, 可以认为Redux是Flux思想的另一种实现方式,通过了解Flux, 我们可以知道Flux一族框架贯彻的最重要的思想------单向数据流</p>`)}
        </div>
      </div>
    );
  }
}