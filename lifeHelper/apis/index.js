const baseUrl = 'http://192.168.1.193:8000'
export const request = (options = {}) => {
	//异步封装接口，使用Promise处理异步请求
	return new Promise((resolve, reject) => {
		// 发送请求
		uni.request({
			url: baseUrl + options.url || '', //接收请求的API
			method: options.method || 'GET', //接收请求的方式,如果不传默认为GET
			data: options.data || {}, //接收请求的data,不传默认为空
		}).then(data => {
			resolve(data[1].data);
		}).catch(error => {
			console.log(error);
			reject(error);
		})
	})
}