import { request } from '@/utils/http';

// 调用测试
export function getTest() {
  return request({
    url: '/upms/user/info', // 此处为自己请求地址
    method: 'get',
  });
}
