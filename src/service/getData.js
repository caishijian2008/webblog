import ajax from '@/config/ajax'
// import { setLocalStorage } from '@/config/myutils'

// 用户登录
export const accountLogin = (username, password, rememberme) => ajax('http://localhost:8080/blogserv/loginServlet?action=login', {username, password, rememberme}, 'POST', 'ajax')

// 用户注册
export const userRegister = (email, username, password) => ajax('/user/regist', {email, username, password}, 'POST', 'ajax')
