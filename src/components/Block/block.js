import React from 'react';
import './block.scss';

const Block = ({ thumbnail, children, title, titleExtra, footer, footerExtra }) => {
  return (
    <div className='block-container'>
      <div className='block-thumbnail'>
        <img className='block-thumbnail-img' src={thumbnail} alt='thumbnail' />
      </div>
      <div className='block-sparation'></div>
      <div className='block-wrapper'>
        <div className='block-header'>
          <div className='block-header-left'>{title}</div>
          <div className='block-header-right'>{titleExtra}</div>
      </div>
        <div className='block-content'>
          {children}
        </div>
        <div className='block-footer'>
        <div className='block-footer-left'>{footer}</div>
          <div className='block-footer-right'>{footerExtra}</div>
        </div>
      </div>
    </div>
  );
};

export default Block