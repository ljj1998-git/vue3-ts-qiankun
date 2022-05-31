import { request } from '@/utils/http';

// 调用测试
export function getTest(params?:any):any {
  return request({
    url: '/upms/user/info', // 此处为自己请求地址
    method: 'get',
    params,
  });
}
