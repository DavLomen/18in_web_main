import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import {
	getInfo,
	BackData,
	// getNewInbox
} from '@/api/common'
Vue.use(Vuex)
import {
	baseImageUrl
} from '@/api/config.js'
export default new Vuex.Store({
	// state: {},
	// getters: {},
	// mutations: {},
	// actions: {},
	// modules: {}
	// 为了不和页面或组件的data中的造成混淆，state中的变量前面建议加上$符号
	state: {
		currentPath: '/',
		currentName: 'home',
		// 用户信息
		loginUserInfo: {},
		loginDefaultUserInfo: {
			token: '',
			username: '立即登录',
			userid: '',
		},
		//系统配置
		BackData: null,
		//站内信
		NewInbox: null,
		onlinePum:'',
	},
	mutations: {
		setUserInfo(state, userInfo) {
			state.loginUserInfo = userInfo
		},
		setBackData(state, BackData) {
			state.BackData = BackData
		},
		setNewInbox(state, NewInbox) {
			state.NewInbox = NewInbox
		},
		setOnlinePum(state, onlinePum) {
			state.onlinePum = onlinePum
		},
		setCurrentPath(state, to) {
			state.currentPath = to.path;
			state.currentName = to.name;
		}
	},
	getters: {
		loginUserInfo(state) {
			if (state.loginUserInfo.userid === undefined) return state.loginDefaultUserInfo
			return state.loginUserInfo
		}
	},

	actions: {
		init({
			dispatch
		}) {
			if (!localStorage.getItem("token")) return dispatch('logout')
			dispatch('getLoginUserInfo')
		},

		async logout({
			state,
			commit
		}) {
			localStorage.removeItem("token")
			commit('setUserInfo', state.loginDefaultUserInfo)
			console.log(state.currentName);
			let page = state.currentName;
			const array = [
				'home',
				'product',
				'affiliate',
				'faq',
				'blog',
				'blogDetail',
				'about',
				'welfare',
				'tutorial',
				'article',
				'app',
				'login',
				'register',
				'contact',
				'privacy',
				'termsService',
			];
			const result = array.find(element => element === page);
			if (result !== undefined) {
				console.log('数组中包含该元素' + result);
			} else {
				router.push('/login').then(() => {
					window.location.reload()
				})
				// router.push('/login')
			}


		},

		async getLoginUserInfo({
			commit,
			dispatch
		}) {
			getInfo(localStorage.getItem("token")).then((res) => {
				console.log(res)
				commit('setUserInfo', res.info)
			}).catch((res) => {
				console.log(res)
				dispatch('logout')
			});
		},

		async getBackData({
			commit
		}) {
			BackData().then((res) => {
				var result = res.info;
				// aaa.yq_url = 1;
				// result.yq_url = result.setting.reg_url + '/#/register?code=';
				result.yq_url = window.location.hostname + '/#/register?code=';
				
				// result.rechargeList.forEach(function(item, index) {
				// 	result.rechargeList[index].qrcode = baseImageUrl + item.qrcode;
				// });
				// result.withdrawList.forEach(function(item, index) {
				// 	result.withdrawList[index].qrcode = baseImageUrl + item.qrcode;
				// });
				// 临时处理语言问题
				result.setting.langs = [
					{
						"code": "en",
						"name": "英语",
						"home_name": "English",
						"image": "/lang_image/en.png"
					},
					{
						"code": "fr",
						"name": "法语",
						"home_name": "Français",
						"image": "/lang_image/fr.png"
					},
					{
						"code": "de",
						"name": "德语",
						"home_name": "Deutsch",
						"image": "/lang_image/de.png"
					},
					{
						"code": "in",
						"name": "印地语",
						"home_name": "हिंदीName",
						"image": "/lang_image/in.png"
					},
					{
						"code": "pt",
						"name": "葡萄牙语",
						"home_name": "Português",
						"image": "/lang_image/pt.png"
					},
					{
						"code": "br",
						"name": "葡萄牙（巴西）",
						"home_name": "BrazilianPortuguese",
						"image": "/lang_image/br.png"
					},
					{
						"code": "lt",
						"name": "意大利语",
						"home_name": "Italiano",
						"image": "/lang_image/lt.png"
					},
					{
						"code": "es",
						"name": "西班牙语",
						"home_name": "Español",
						"image": "/lang_image/es.png"
					},
					{
						"code": "nl",
						"name": "荷兰语",
						"home_name": "Nederlands",
						"image": "/lang_image/nl.png"
					},
					{
						"code": "ar",
						"name": "阿拉伯语",
						"home_name": "بالعربية",
						"image": "/lang_image/ar.png"
					},
					{
						"code": "ru",
						"name": "俄语",
						"home_name": "Русский язык",
						"image": "/lang_image/ru.png"
					},
					{
						"code": "ja",
						"name": "日语",
						"home_name": "日本語",
						"image": "/lang_image/ja.png"
					},
					{
						"code": "ko",
						"name": "韩语",
						"home_name": "한국어",
						"image": "/lang_image/ko.png"
					},
					{
						"code": "tw",
						"name": "繁体中文",
						"home_name": "繁体中文",
						"image": "/lang_image/tw.png"
					}
				],
				result.setting.langs.forEach(function(item, index) {
					result.setting.langs[index].image = baseImageUrl + item.image;
				});
				commit('setBackData', res.info)
				commit('setOnlinePum', res.info.setting.online_num)
			}).catch((res) => {
				console.log(res, '错误的请求')
				// dispatch('logout')
			});
		},
		// async initInbox({
		// 	commit
		// }) {
		// 	setInterval(function() {
		// 		getNewInbox().then((res) => {
		// 			commit('setNewInbox', res)
		// 			commit('setOnlinePum', res.onlinePum)
					
		// 		}).catch(() => {
		// 		});
		// 	}, 3000)




		// },


	}
})