import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      currentKey: undefined,
    };
  }
  componentDidMount () {
    console.log(this.props);
  }
  onNavClick({ key }) {
    this.setState({
      currentKey: key,
    })
  }

  render() {
    
  const navLi = [{
    label: '写博客',
    path: '/editor',
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
    label: '关于我',
    path: '/about',
    key: 5,
  }];
    return (
      <div className='header-container'>
        <div className='header-logo-container'>
          <Link to='/' onClick={() => this.onNavClick('')}>
            <img src={require('../../static/logo.png')} alt='logo' className='header-logo'/>
          </Link>
        </div>
        <div className='header-menu-container'>
        {navLi.map(item => 
          <Link
            onClick={() => this.onNavClick(item)}
            key={item.key}
            to={item.path}
            className={`header-menu-link ${this.state.currentKey === item.key ? 'header-menu-link-active' : ''}`}
            >{item.label}
          </Link>)}
        </div>
        <div className='header-search-container'>
          <div className='header-search-wrapper'>
            <input className='header-search-input' placeholder='搜索'/>
            <i className='iconfont'>&#xe632;</i>
          </div>
        </div>
      </div>
    )
  }
}