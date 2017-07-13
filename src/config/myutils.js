/**
 * 存储localStorage
 */
export const setLocalStorage = (name, value) => {
  if (!name) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  if (typeof (Storage) !== 'undefined') {
    window.localStorage.setItem(name, value)
  } else {
    alert('你的浏览器不支持web存储，请更换！')
    console.log('你的浏览器不支持web存储，请更换！')
  }
}

/**
 * 获取localStorage
 */
export const getLocalStorage = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeLocalStorage = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
