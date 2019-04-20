import request from './axios'
export const prefix = 'get'

export const initMain = (pageSize = 10, pageNum = 1) => request('get', `/${prefix}/initMain`, { pageSize, pageNum });

export const findBlogById = id => request('get', `/${prefix}/blog/${id}`)

export const initTag = () => request('get', `/${prefix}/tag`)

export const findTagById = id => request('get', `/${prefix}/tag/${id}`)

export const initForum = () => request('get', `/${prefix}/forum`)

export const findForumById = id => request('get', `/${prefix}/forum/${id}`)

export const getOneDayBlog = timestamp =>
  request('get', `/${prefix}/getOneDayBlog/${timestamp}`)

export const getOneYearCount = year => request('get', `/${prefix}/getOneYearCount/${year}`)

export const findBlogByDate = (startDate, endDate) =>
  request('get', `/${prefix}/queryByDate`, {
    params: {
      startDate,
      endDate
    }
  })
