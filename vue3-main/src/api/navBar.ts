import axios from "@/utils/request";
const VITE_APP_API_BASEURL = import.meta.env.VITE_APP_API_BASEURL;

export interface getMenusBySystemIdParams {
  systemId: string;
}

interface getMenusBySystemIdResult {
  menus: Array<Routes>;
}
interface Routes {
  id: Number;
  level: string;
  path: string;
  url: string;
  children?: Array<Routes>;
}
export function getMenusBySystemId(params: getMenusBySystemIdParams) {
  return axios.get<getMenusBySystemIdResult>(VITE_APP_API_BASEURL + "/menus/menus/",{ params });
}
