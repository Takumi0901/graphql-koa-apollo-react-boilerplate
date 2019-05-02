const ErrorMessages: { [key: string]: string } = {
  required: '必須項目です。入力してください。',
  email: '正しいメールアドレスの形式でご入力ください。',
  num: '半角数字(小数不可)で入力して下さい。',
  password: '8文字以上で入力してください。',
  time: '時刻の形式で入力してください。',
  url: 'URLの形式が間違っています。 例：https://example.com'
}

// prettier-ignore
const Regex: { [key: string]: RegExp } = {
  email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  num: /^[0-9]+$/,
  password: /^(?=.*?[a-zA-Z])(?=.*?\d)[!-\~]{8,16}$/,
  url: /^(https?)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/,
  time: /^\d{2}:\d{2}$/
}

const checkRegex = (value: string, prop: string) => {
  if (!value || Regex[prop].test(value)) return ''
  return prop
}

const checkRequired = (value: string | number) => {
  if (value || typeof value === 'number') return ''
  return 'required'
}

const checkMinNumber = (value: string, num: number, prop: string) => {
  if (!value || value.length >= num) return ''
  return prop
}

const pushMessage = (prop: string) => (prop.length > 0 ? ErrorMessages[prop] : undefined)

export const required = (value: string) => pushMessage(checkRequired(value))

export const email = (value: string) => pushMessage(checkRegex(value, 'email'))

export const password = (value: string) => pushMessage(checkMinNumber(value, 8, 'password'))

export const num = (value: string) => pushMessage(checkRegex(value, 'num'))

export const url = (value: string) => pushMessage(checkRegex(value, 'url'))

export const time = (value: string) => pushMessage(checkRegex(value, 'time'))

export const composeValidators = (...args: Array<(value: string) => string | undefined>) => (value: string) => {
  for (const validator of args) {
    const error = validator(value)

    if (error) {
      return error
    }
  }

  return undefined
}
