import { baseUrl } from './base'

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
  type = type.toUpperCase()
  url = baseUrl + url

  if (type === 'GET') {
    let dataStr = '' // 数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }

  // alert('url: ' + url)
  // alert('data: ' + data)
  // alert('data2: ' + JSON.stringify(data))
  // alert('type: ' + type)
  // alert('method: ' + method)
  if (window.fetch && method === 'fetch') {
    let requestConfig = {
      credentials: 'include',
      method: type,
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        // 'Content-type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
      },
      mode: 'cors',
      cache: 'force-cache'
    }
    if (type === 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }
    try {
      const response = await fetch(url, requestConfig)
      const responseJson = await response.json()
      alert('responseJson: ' + responseJson)
      return responseJson
    } catch (error) {
      throw new Error(error)
    }
  } else {
    return new Promise((resolve, reject) => {
      let request = null
      if (window.XMLHttpRequest) {
        request = new XMLHttpRequest()
      } else {
        // request = new ActiveXObject('Microsoft.XMLHTTP')
      }
      let sendData = ''
      if (type === 'POST') {
        sendData = JSON.stringify(data)
      }
      // alert('sendData: ' + sendData)
      request.open(type, url, true)
      request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      request.send(sendData)
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 200) {
            let obj = request.response
            console.log('request.response: ' + obj)
            console.log('ajax响应成功: ' + request.responseText)
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            resolve(obj)
          } else {
            console.log('ajax响应失败: ' + request.status)
            reject(request)
          }
        }
      }
    })
    // .then(function (e) {
    //   console.log('e: ' + e)
    // }).catch(function (e) {
    //   console.log('err: ' + e)
    // })
  }
}
