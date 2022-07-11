import axios,{ AxiosResponse, AxiosRequestConfig } from 'axios'
import { Notification } from '@arco-design/web-vue';

const request=axios.create({
  timeout:30000,
})
//请求拦截器
request.interceptors.request.use((config: AxiosRequestConfig) => {
//   if (config.headers) {
//     config.headers.token = sessionStorage.getItem('token') || ''
//   } 
  return config
},(error:any) => {
  return Promise.reject(error)
})
//响应拦截器
request.interceptors.response.use( (response:AxiosResponse) =>{
    console.log(response.data);
    const {status,message} = response.data
    if(status === 500){
        Notification.error({content:message})
        return response.data
    }else{
        return response.data
    }
},(error:any) => {
  return Promise.reject(error)
})
export default request