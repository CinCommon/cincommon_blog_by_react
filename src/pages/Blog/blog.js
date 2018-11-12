import React from 'react';
import { Slide, Card, Block } from 'components';
import { Link } from 'react-router-dom';
import './blog.scss';

const BlockData = [{
  thumbnail: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra: 'footerExtra'
}, {
  thumbnail: 'https://pbs.twimg.com/media/DrUfrYcU0AIgzoz.jpg',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra: 'footerExtra'
}, {
  thumbnail: 'https://pbs.twimg.com/media/DmTlVrNX4AAf-iG.jpg',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra: 'footerExtra'
}, {
  thumbnail: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra: 'footerExtra'
}, {
  thumbnail: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra: 'footerExtra'
}, {
  thumbnail: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra: 'footerExtra'
}, {
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
          {BlockData.map(({ thumbnail, children, title, titleExtra, footer, footerExtra }, index) => <Block className='blog-item' thumbnail={thumbnail} children={children} title={title} titleExtra={titleExtra} footer={footer} footerExtra={footerExtra} key={index} />)}
        </div>
        <Slide className='blog-slide'>
          <Card title={'分类'}>
            <ul>
              <li><Link to='/'>aaa</Link></li>
              <li><Link to='/'>bbb</Link></li>
              <li><Link to='/'>ccc</Link></li>
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
