export interface AppState {
  isLogin: Boolean; // true/登陆 false/注册
  systems: Array<any>;
  [key: string]: unknown;
}
