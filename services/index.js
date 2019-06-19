import axios from 'axios'
import headers from './headers.js'

export default function executeRequest({
  path, data = {}, method = 'GET',
}) {
  function setQueryString(queryStringObj, methodReq) {
    if (methodReq === 'GET') {
      let queryString = ''
      const firstKeyProp = Object.keys(queryStringObj)[0]

      Object.keys(queryStringObj)
        .forEach((prop) => {
          queryString += `${(prop === firstKeyProp) ? '?' : '&'}${prop}=${queryStringObj[prop]}`
        })

      return queryString
    }

    return ''
  }

  const urlRoot = 'https://coding-challenge-api.aerolab.co/'
  const url = `${urlRoot}${path}${setQueryString(data, method)}`

  return axios({ method, url, data, headers })
    .then(res => Promise.resolve(res))
    .catch(error => Promise.reject(error))
}
