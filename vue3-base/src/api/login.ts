import axios from "axios";

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return axios.post<LoginRes>("/vue3_main/aloginRegister/login/", data);
}
