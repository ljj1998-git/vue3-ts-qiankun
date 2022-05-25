import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { showMessage } from './status';
import { IResponse } from './type';

// 如果请求话费了超过 `timeout` 的时间，请求将被中断
axios.defaults.timeout = 5000;

console.log(import.meta.env.BASE_URL);

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.BASE_URL}`,
});

// axios实例拦截响应
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response;
    }
    showMessage(response.status);
    return response;
  },
  // 请求失败
  (error: any) => {
    const { response } = error;
    if (response) {
      showMessage(response.status);
      return Promise.reject(response.data);
    }
    showMessage('网络连接异常,请稍后再试!');
  },
);

// axios实例拦截请求
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => config,
  (error: any) => Promise.reject(error),
);

const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const conf = config;
  return new Promise((resolve) => {
    axiosInstance
      .request<any, AxiosResponse<IResponse>>(conf)
      .then((res: AxiosResponse<IResponse>) => {
        const { data: { result } } = res;
        resolve(result as T);
      });
  });
};

export function get<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'GET' });
}

export function post<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'POST' });
}

export default request;
export type { AxiosInstance, AxiosResponse };
