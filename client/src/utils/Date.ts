const Moment = require('moment-timezone')

export const formatDate = (date: string | object) => (fmt?: string) => {
  Moment.locale('ja')
  return Moment(date).format(fmt)
}
