import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      currentKey: undefined,
    };
  }
  componentDidMount() {
    console.log(this.props);
  }
  onNavClick({ key }) {
    this.setState({
      currentKey: key,
    })
  }
  generateNavLi(navLi) {
    const result = navLi.map(item =>
      <Link
        onClick={() => this.onNavClick(item)}
        key={item.key}
        to={item.path}
        className={`header-menu-link ${this.state.currentKey === item.key ? 'header-menu-link-active' : ''}`}
      >{item.label}
      </Link>);
    result.splice(result.length / 2,
      0,
        <Link to='/' onClick={() => this.onNavClick('')} >
          <img src={require('../../static/logo.png')} alt='logo' className='header-logo' />
        </Link>);
    return result;
  }
  render() {
    const navLi = [{
      label: '博客',
      path: '/blog',
      key: 1,
    }, {
      label: '选择分类',
      path: '/category',
      key: 2,
    }, {
      label: '利物浦',
      path: '/liverpool',
      key: 3,
    }, {
      label: '常用工具',
      path: '/tools',
      key: 4,
    }, {
      label: '图片画廊',
      path: '/picGallary',
      key: 5,
    }, {
      label: '关于我',
      path: '/about',
      key: 6,
    }];
    return (
      <div className='header-container'>
        <div className='header-menu-container'>
          {this.generateNavLi(navLi)}
        </div>
        <div className='header-search-container'>
          <div className='header-search-wrapper'>
            <input className='header-search-input' placeholder='搜索' />
            <i className='iconfont header-search-input-icon'>&#xe632;</i>
          </div>
        </div>
      </div>
    )
  }
}