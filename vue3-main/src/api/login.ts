import axios from "@/utils/request";
const VITE_APP_API_BASEURL = import.meta.env.VITE_APP_API_BASEURL;

export interface LoginData {
  tel: string;
  password: string;
}

interface LoginRes {
  token: string;
  routes: Array<Routes>;
  systems: Array<systems>;
}
interface Routes {
  id: Number;
  level: string;
  path: string;
  url: string;
  children?: Array<Routes>;
}
interface systems {
  id: number;
  name: string;
}
export function login(data: LoginData) {
  return axios.post<LoginRes>(
    VITE_APP_API_BASEURL + "/loginRegister/login/",
    data
  );
}
//注册
export function registerUser(data: LoginData) {
  return axios.post<LoginRes>(
    VITE_APP_API_BASEURL + "/loginRegister/register/",
    data
  );
}
