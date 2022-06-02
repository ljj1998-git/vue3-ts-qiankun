import Home from '../views/Home'
import About from '../views/System'
// 导入路由管理工具
import {RouteConfig} from 'react-router-config'
 
const routes:RouteConfig = [
  {
    path:'/',
    exact:true,
    component:Home
  },
  {
    path:'/about',
    exact:true,
    component:About
  },
]
 
export default routes;