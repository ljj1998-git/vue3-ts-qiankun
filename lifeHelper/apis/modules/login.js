import {request} from '../index'

// 注册
export function toRegister(data) {
  return request({
    url: '/api/loginRegister/register/',
    method: 'post',
	data
  }) 
}
// 登录
export function toLogin(data) {
  return request({
    url: '/api/loginRegister/login/',
    method: 'post',
	data
  }) 
}