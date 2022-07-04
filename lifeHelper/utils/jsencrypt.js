import jsencrypt from '@/components/jsencrypt/jsencrypt.vue'

// 加密公钥
let key = 
'-----BEGIN PUBLIC KEY-----' + 
'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDFsxg7ZzQ9wo5fxyDEEVslzk01dIHzHKdT2TeE7EP8Dpod10KraSDIJymp5KDqwLMLbZonbD30zA0na9g/mUNHkbiX8smTdlxX0r1sjvcCsG2+KktdxeqMsOoH20Tn/6wSrlooT6hjjL79DcD1v9sP8xxhD7G5WvIyED3pB1gYKwIDAQAB' +
'-----END PUBLIC KEY-----'
// 加密
// 此加密公钥不能含有 '_' '-'字符串 参考：https://www.codenong.com/jsc71374f48fb3/
 
export function rsaEncrypt(msg) {
  var encryptMsg = jsencrypt.setEncrypt(key, msg)
  return encryptMsg
}