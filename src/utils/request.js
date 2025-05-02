// src/utils/request.js
import axios from 'axios'
import {
	Message
} from 'element-ui' // 按需引入UI框架提示组件
import router from '@/router'
import { baseUrl } from '@/api/config.js'
// import {
// 	MessageBox
// } from 'element-ui'; https://HRMiner.com/api/User/Login
// 创建axios实例
// const token = localStorage.getItem("token");
// const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : 'en_us';

const service = axios.create({
	baseURL: baseUrl, // 从环境变量读取API1基础地址
	timeout: 10000, // 请求超时时间
	// params: { // 设置默认的params

	// }
})

var source = axios.CancelToken.source();

// 请求拦截器
service.interceptors.request.use(
	config => {
		// 在发送请求之前做些什么
		// if (token) {
		// 	config.headers['token'] = token
		// }
		// console.log(config.params)
		// console.log(config.data)
		config.cancelToken = source.token;
		config.headers = {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
		const token = localStorage.getItem("token");
		const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : 'en';
		config.params = {
			...config.params,
			lang: lang,
		};
		config.data = {
			...config.data,
			token: token,
		};
		return config
	},
	error => {
		// 对请求错误做些什么
		console.log(error) // for debug
		return Promise.reject(error)
	}
)

// 响应拦截器
service.interceptors.response.use(
	response => {
		const res = response.data
		// 自定义业务状态码处理
		if (res.code !== 1) {
			// 特殊状态码处理
			if (res.code === 401 || res.code === 403 || res.code === 204) {
				Message({
					showClose: true,
					offset: 20,
					message: res.code_dec || 'Error',
					type: 'error',
				})
				router.push('/login')
				// 重新登录
				// MessageBox.confirm('登录状态已过期，请重新登录', '确认登出', {
				//   confirmButtonText: '重新登录',
				//   cancelButtonText: '取消',
				//   type: 'warning'
				// }).then(() => {
				//   store.dispatch('user/resetToken').then(() => {
				//     location.reload()
				//   })
				// })
			} else {
				console.log(res, '报错数据')
				Message({
					showClose: true,
					offset: 20,
					message: res.code_dec,
					type: 'error',
					duration: 3 * 1000,
				})
				return Promise.reject(res)
			}
			// return Promise.reject(new Error(res.code_dec || 'Error'))
		} else {
			return res
		}
	},
	error => {

		console.log('err' + error) // for debug
		Message({
			showClose: true,
			offset: 20,
			message: 'Server error',
			type: 'error',
		})
		return Promise.reject(error)
	}
)

export default service

// // 文件上传
// export function uploadFile(data) {
//   return request({
//     url: '/file/upload',
//     method: 'post',
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     },
//     data
//   })
// }

// // 文件下载
// export function downloadFile(params) {
//   return request({
//     url: '/file/download',
//     method: 'get',
//     params,
//     responseType: 'blob'
//   }).then(response => {
//     const blob = new Blob([response.data])
//     const url = window.URL.createObjectURL(blob)
//     const link = document.createElement('a')
//     link.href = url
//     link.setAttribute('download', params.filename || 'file')
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   })
// }