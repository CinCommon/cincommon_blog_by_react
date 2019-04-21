import React from 'react'
import './index.scss'
import { Button, Icon } from 'antd'

const SimplePagination = ({ pageSize, total, pageNum, onClick }) => {
  const onPrevClick = () => {
    onClick(pageNum - 1)
  }
  const onNextClick = () => {
    onClick(pageNum + 1)
  }
  const MaxNum = () => {
    if (total % pageSize === 0) {
      return Math.floor(total / pageSize - 1)
    } else {
      return Math.floor(total / pageSize)
    }
  }
  return (
    <div className="simple-pagination-container">
      {pageNum > 0 && (
        <Button className="prev-button" onClick={onPrevClick}>
          <Icon type="left" />
          PREV
        </Button>
      )}
      {pageNum < MaxNum() && (
        <Button className="next-button" onClick={onNextClick}>
          NEXT
          <Icon type="right" />
        </Button>
      )}
    </div>
  )
}

export default SimplePagination
