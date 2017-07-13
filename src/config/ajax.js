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

  alert('url: ' + url)
  alert('data: ' + data)
  alert('data2: ' + JSON.stringify(data))
  alert('type: ' + type)
  alert('method: ' + method)
  if (window.fetch && method === 'fetch') {
    let requestConfig = {
      credentials: 'include',
      method: type,
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
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
      alert('sendData: ' + sendData)
      request.open(type, url, true)
      request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      request.send(sendData)
      request.onreadystatechange = () => {
        if (request.readystate === 4) {
          if (request.status === 200) {
            let obj = request.response
            console.log('obj: ' + obj)
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            resolve(obj)
          } else {
            reject(request)
          }
        }
      }
    })
  }
  // let sendData = ''
  // if (type === 'GET') {
  // //
  // } else if (type === 'POST') {
  //   sendData = JSON.stringify(data)
  //   axios({
  //     method: type,
  //     url: url,
  //     data: {
  //       'username': data.username,
  //       'password': data.password
  //     }
  //   })
    // axios.post(url, sendData)
    // .then(function (response) {
    //   console.log('response*: ' + response)
    // })
    // .catch(function (error) {
    //   console.log('error*: ' + error)
    // })
  // }
}
