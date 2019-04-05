import React from 'react'
import './index.scss'
import { formatDate } from 'utils/utils'

const BlogCard = ({ blog, onBlogClick, onTagClick, onDateClick }) => {
  return (
    <div
      className={'blog-block'}
      key={blog.id}
      onClick={() => onBlogClick(blog.id, blog)}
    >
      <div className="block-title-container">
        <h1 className="block-title">{blog.title}</h1>
        <div className="block-tag-wrapper">
          {blog.tagInfoSet.map(item => (
            <span
              key={item.tagId}
              className="block-tag"
              onClick={e => {
                e.stopPropagation()
                onTagClick(item.tagId, item, blog)
              }}
            >
              {item.tagName}
            </span>
          ))}
        </div>
        <span
          className="block-date"
          onClick={e => {
            e.stopPropagation()
            onDateClick(blog.createDate, blog.id, blog)
          }}
        >
          {formatDate(blog.createDate)}
        </span>
      </div>
    </div>
  )
}

export default BlogCard
