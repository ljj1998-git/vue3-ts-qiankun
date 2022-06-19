import service from '../index'

export function toLogin(data) {
  return service({
    url: '/api/user/login',
    method: 'post',
	data
  }) 
}