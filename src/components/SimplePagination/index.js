import React from 'react'
import './index.scss'
import { Button } from 'antd'

const SimplePagination = ({ pageSize, total, pageNum, onClick }) => {
  const onPrevClick = () => {
    onClick(pageNum - 1)
  }
  const onNextClick = () => {
    onClick(pageNum + 1)
  }
  const MaxNum = () => Math.ceil(total / pageSize)
  return (
    <div className="simple-pagination-container">
      {pageNum > 1 && (
        <Button className="prev-button" onClick={onPrevClick}>
          PREV
        </Button>
      )}
      {pageNum < MaxNum() && (
        <Button className="next-button" onClick={onNextClick}>
          NEXT
        </Button>
      )}
    </div>
  )
}

export default SimplePagination
