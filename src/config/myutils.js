/**
 * 存储localStorage
 */
export const setStorage = (name, value) => {
  if (!name) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  if (typeof (Storage) !== 'undefined') {
    window.sessionStorage.setItem(name, value)
  } else {
    alert('你的浏览器不支持web存储，请更换！')
    console.log('你的浏览器不支持web存储，请更换！')
  }
}

/**
 * 获取localStorage
 */
export const getStorage = name => {
  if (!name) return
  return window.sessionStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStorage = name => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}
