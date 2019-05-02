export const commaSeparated = (num: number) => {
  if (!num) return 0
  return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}
