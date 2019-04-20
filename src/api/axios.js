import Axios from 'axios'
import { Modal } from 'antd'
import { setLoading } from 'utils/commonRedux'
import store from '../store'
const API_PREFIX = '/blog-api'

let cnt = 0
let timer
const showLoading = () => {
  cnt++
  if (!store.getState().loading) {
    timer = setTimeout(() => {
      setLoading(true)
    }, 500)
  }
}
const hideLoading = () => {
  cnt--
  if (cnt === 0) {
    clearTimeout(timer)
    setLoading(false)
  }
}

Axios.interceptors.request.use(config => {
  showLoading()
  // console.log('before---axios', config)
  config.url = `${API_PREFIX}${config.url}`
  return config
})
Axios.interceptors.response.use(response => {
  hideLoading()
  // console.log('after---axios', response)
  return response.data || { retCode: -1, message: '系统异常' }
})

export const request = (method, url, params, config = {}) => {
  const { returnResponse = false, commonError = true, successCode = 0 } = config
  let requestParams
  if (method === 'get') {
    requestParams = { params }
  } else {
    requestParams = { data: params }
  }
  return new Promise(resolve => {
    Axios({
      url,
      method,
      ...requestParams
    })
      .then(data => {
        if (returnResponse) {
          resolve(data)
        } else {
          if (!commonError) {
            resolve(data.data)
          }
          if (data.retCode !== successCode) {
            throw new Error(data.message)
          }
          resolve(data.data)
        }
      })
      .catch(error => {
        Modal.error({
          title: error.message
        })
      })
  })
}

export default request
