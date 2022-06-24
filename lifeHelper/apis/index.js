import Vue from 'vue'
import axios from 'axios'

// create an axios instance
const service = axios.create({
	timeout: 6000, // request timeout
})

// request拦截器,在请求之前做一些处理
service.interceptors.request.use(
    config => {
        // if (store.state.token) {
        //     // 给请求头添加user-token
        //     config.headers["user-token"] = store.state.token;
        // }
        return config;
    },
    error => {
        console.log(error); // for debug
        return Promise.reject(error);
    }
); 

//配置成功后的拦截器
service.interceptors.response.use(res => {
    if (res.data.status== 200) {
        return res.data
    } else {
        return Promise.reject(res.data.msg);
    }
}, error => {
	if (error.response.status) {
		switch (error.response.status) {
			case 401:
				break;
			default:
				break;
		}
	}
    return Promise.reject(error)
})

export default service
