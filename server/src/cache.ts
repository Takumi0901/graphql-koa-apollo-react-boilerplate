type inMemoryCache = {
  [key: string]: object | string
}

const inMemoryCache: inMemoryCache = {}

export function get(key: string) {
  return inMemoryCache[key]
}

export function set(key: string, value: string) {
  inMemoryCache[key] = value
}

export function list() {
  return Object.keys(inMemoryCache)
}

export function del(key: string) {
  inMemoryCache[key] = null
}
