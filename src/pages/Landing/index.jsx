/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav0 from './Nav0';
import Banner2 from './Banner2';
import Teams0 from './Teams0';
import Feature4 from './Feature4';
import Feature2 from './Feature2';
import Footer2 from './Footer2';

import {
  Nav00DataSource,
  Banner20DataSource,
  Teams00DataSource,
  Feature40DataSource,
  Feature20DataSource,
  Footer20DataSource,
} from './data.source';
import './scss/antMotionStyle.scss';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      // show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    // /* 如果不是 dva 2.0 请删除 start */
    // if (location.port) {
    //   // 样式 build 时间在 200-300ms 之间;
    //   setTimeout(() => {
    //     this.setState({
    //       show: true,
    //     });
    //   }, 500);
    // }
    // /* 如果不是 dva 2.0 请删除 end */
    sessionStorage.setItem("_IS_FIRST_VISIT", false)
  }

  render() {
    const children = [
      // <Nav0
      //   id="Nav0_0"
      //   key="Nav0_0"
      //   dataSource={Nav00DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      <Banner2
        id="Banner2_0"
        key="Banner2_0"
        dataSource={Banner20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams0
        id="Teams0_0"
        key="Teams0_0"
        dataSource={Teams00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature4
        id="Feature4_0"
        key="Feature4_0"
        dataSource={Feature40DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_0"
        key="Feature2_0"
        dataSource={Feature20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer2
        id="Footer2_0"
        key="Footer2_0"
        dataSource={Footer20DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {/* {this.state.show && children} */}
        {children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
