import axios from "@/api/axios";
const VITE_APP_API_BASEURL = import.meta.env.VITE_APP_API_BASEURL

export interface LoginData {
  tel: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return axios.post<LoginRes>( VITE_APP_API_BASEURL + "/loginRegister/login/", data);
}
//注册
export function registerUser(data: LoginData) {
  return axios.post<LoginRes>( VITE_APP_API_BASEURL + "/loginRegister/register/", data);
}
