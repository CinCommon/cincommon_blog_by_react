import React from 'react';

import './block.scss';

const Block = ({ height = '140px', thumbnail, children, title, titleExtra, footer, footerExtra, onClick }) => {
  return (
    <div className='block-container' onClick={onClick} style={{ height }}>
      {thumbnail && <div className='block-thumbnail'>
        <img className='block-thumbnail-img' src={thumbnail} alt='thumbnail' />
      </div>}
      <div className='block-sparation'></div>
      <div className='block-wrapper'>
        <div className='block-header'>
          {title && <div className='block-header-left'>{title}</div>}
          {titleExtra && <div className='block-header-right'>{titleExtra}</div>}
        </div>
        <div className='block-content'>
          {children}
        </div>
        <div className='block-footer'>
          {footer && <div className='block-footer-left'>{footer}</div>}
          {footerExtra && <div className='block-footer-right'>{footerExtra}</div>}
        </div>
      </div>
    </div>
  );
};

export default Block