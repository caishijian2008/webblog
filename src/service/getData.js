import axiosapi from '@/config/axiosapi'

// 用户登录
export const accountLogin = (username, password, rememberme) => axiosapi('http://localhost:8080/blogserv/loginServlet?action=login', {username, password, rememberme}, 'POST')
