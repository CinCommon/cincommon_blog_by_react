import Axios from 'axios'

Axios.interceptors.request.use(config => {
  console.log('before---axios', config)
  return config
})
Axios.interceptors.response.use(response => {
  console.log('after---axios', response)
  return response.data.data;
})
export default Axios
