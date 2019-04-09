import Axios from 'axios'
import { Modal } from 'antd'

const API_PREFIX = '/blog-api'

Axios.interceptors.request.use(config => {
  console.log('before---axios', config)
  config.url = `${API_PREFIX}${config.url}`
  return config
})
Axios.interceptors.response.use(response => {
  console.log('after---axios', response)
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
      ...{ requestParams }
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
