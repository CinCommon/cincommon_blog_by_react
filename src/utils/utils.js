import moment from 'moment'

const formatDate = (millisecond, pattern = 'YYYY/MM/DD HH:mm:ss') =>
  new moment(Number(millisecond)).format(pattern)

export { formatDate }
