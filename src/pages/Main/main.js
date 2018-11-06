import React from 'react';
import { Block } from '../../components';
import './main.scss';

const BlockData = [{
  thumbnail: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra : 'footerExtra'
}, {
  thumbnail: 'https://pbs.twimg.com/media/DrUfrYcU0AIgzoz.jpg',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra : 'footerExtra'
}, {
  thumbnail: 'https://pbs.twimg.com/media/DmTlVrNX4AAf-iG.jpg',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra : 'footerExtra'
}, {
  thumbnail: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra : 'footerExtra'
}, {
  thumbnail: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra : 'footerExtra'
}, {
  thumbnail: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra : 'footerExtra'
}, {
  thumbnail: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc',
  children: <h1>content</h1>,
  title: 'title',
  titleExtra: 'titleExtra',
  footer: 'footer',
  footerExtra : 'footerExtra'
}, ];

export default class Main extends React.Component {
  render () {
    return (
      <div className='main-container'>
        {BlockData.map(({ thumbnail, children, title, titleExtra, footer, footerExtra }, index) => <Block className='main-item' thumbnail={thumbnail} children={children} title={title} titleExtra={titleExtra} footer={footer} footerExtra={footerExtra} key={index} />)}
      </div>
    );
  }
}