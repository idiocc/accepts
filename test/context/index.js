export function createRequest(charset, name = '') {
  if (name) name = `-${name}`
  return {
    headers: {
      [`accept${name}`]: charset,
    },
  }
}