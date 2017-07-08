import axios from 'axios'

export default async(url = '', data = {}, type = 'GET') => {
  type = type.toUpperCase()
  let sendData = ''
  if (type === 'GET') {
  //
  } else if (type === 'POST') {
    alert(data)
    alert(data.rememberme)
    sendData = JSON.stringify(data)
    alert(sendData)
    axios({
      method: type,
      url: url,
      data: {
        'username': data.username,
        'password': data.password
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    // axios.post(url, sendData)
    // .then(function (response) {
    //   console.log('response*: ' + response)
    // })
    // .catch(function (error) {
    //   console.log('error*: ' + error)
    // })
  }
}
