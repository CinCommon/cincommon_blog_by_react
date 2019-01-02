import React from 'react';
import { Slide, Card, Block } from 'components';
import { Link, Router, BrowserRouter } from 'react-router-dom';
import './blog.scss';

const BlockData = [{
  blogId: 1,
  thumbnail: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra: 'footerExtra'
}, {
  blogId: 2,
  thumbnail: 'https://pbs.twimg.com/media/DrUfrYcU0AIgzoz.jpg',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra: 'footerExtra'
}, {
  blogId: 3,
  thumbnail: 'https://pbs.twimg.com/media/DmTlVrNX4AAf-iG.jpg',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra: 'footerExtra'
}, {
  blogId: 4,
  thumbnail: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra: 'footerExtra'
}, {
  blogId: 5,
  thumbnail: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra: 'footerExtra'
}, {
  blogId: 6,
  thumbnail: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra: 'footerExtra'
}, {
  blogId: 7,
  thumbnail: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra: 'footerExtra'
},];

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className='blog-container'>
        <div className='blog-list'>
          {BlockData.map(({ thumbnail, children, title, titleExtra, footer, footerExtra, blogId }, index) => <Block onClick={() => {this.props.history.push(`/blog/${blogId}`)}} className='blog-item' id={blogId} thumbnail={thumbnail} children={children} title={title} titleExtra={titleExtra} footer={footer} footerExtra={footerExtra} key={index} />)}
        </div>
        <Slide className='blog-slide'>
          <Card title={'分类'}>
            <ul>
              <li><Link to='/'>Nginx</Link></li>
              <li><Link to='/'>JavaScript</Link></li>
              <li><Link to='/'>Linux</Link></li>
            </ul>
          </Card>
          <Card title={'最新'}>
            <ul>
              <li><Link to='/'>aaa</Link></li>
              <li><Link to='/'>bbb</Link></li>
              <li><Link to='/'>ccc</Link></li>
            </ul>
          </Card>
          <Card title={'最热'}>
            <ul>
              <li><Link to='/'>aaa</Link></li>
              <li><Link to='/'>bbb</Link></li>
              <li><Link to='/'>ccc</Link></li>
            </ul>
          </Card>
        </Slide>
      </div>
    );
  }
}

export default Blog;
