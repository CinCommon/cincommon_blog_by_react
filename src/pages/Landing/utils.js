
import React from 'react';
import { Button } from 'antd';

const imgClick = item => {
  return item.url ? {
    onClick: () => window.location.href = item.url,
    style: { cursor: 'pointer' }
  } : {};
}

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/;
export const getChildrenToRender = (item, i) => {
  const tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
  let children = typeof item.children === 'string' && item.children.match(isImg)
    ? React.createElement('img', { src: item.children, ...imgClick(item), alt: 'img' })
    : item.children;
  if (item.name.indexOf('button') === 0 && typeof item.children === 'object') {
    children = React.createElement(Button, {
      ...item.children
    });
  }
  return React.createElement(tag, { key: i.toString(), ...item }, children);
};
