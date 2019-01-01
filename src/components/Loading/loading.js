import React from 'react';
import './loading.scss';

const Loading = ({ children }) => {

  return (
    <div className="cover">
      <div className="spinner">
        {children}
      </div>
    </div>
  )
}

export default Loading;