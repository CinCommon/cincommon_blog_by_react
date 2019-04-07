import Axios from './axios'
export const prefix = 'get'

export const initMain = () => Axios.get(`/${prefix}/initMain`)

export const findBlogById = id => Axios.get(`/${prefix}/blog/${id}`)

export const initTag = () => Axios.get(`/${prefix}/tag`)

export const findTagById = id => Axios.get(`/${prefix}/tag/${id}`)

export const initForum = () => Axios.get(`/${prefix}/forum`)

export const findForumById = id => Axios.get(`/${prefix}/forum/${id}`)
export const getOneDayBlog = timestamp =>
  Axios.get(`/${prefix}/getOneDayBlog/${timestamp}`)

export const getOneYearCount = year => Axios.get(`/${prefix}/getOneYearCount/${year}`)

export const findBlogByDate = (startDate, endDate) =>
  Axios.get(`/${prefix}/queryByDate`, {
    params: {
      startDate,
      endDate
    }
  })
