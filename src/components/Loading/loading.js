import React from 'react';
import './loading.scss';

const Loading = ({ loading }) => loading ?
  <div className="cover">
    <div className="spinner-wrapper">
      <div className="spinner">
      </div>
    </div>
  </div> : null;


export default Loading;