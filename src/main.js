import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
Vue.config.productionTip = false



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueI18n);
const i18n = new VueI18n({
	locale: localStorage.getItem("lang") ||
		"en", // 将要切换的语言，可以通过url拼的参数获取，用户行为select选择获取，本地manifest配置获取等，根据场景动态获取
	messages: {
		'en': require('./assets/languages/en.json'),
		'tw': require('./assets/languages/tw.json'),
		'ja': require('./assets/languages/ja.json'),//日语
		'ko': require('./assets/languages/ko.json'),//韩语
		//翻译成俄语 阿拉伯语 西班牙语 德语 法语
		'ru': require('./assets/languages/ru.json'), //俄语
		'ar': require('./assets/languages/ar.json'), //阿拉伯语
		'es': require('./assets/languages/es.json'), //西班牙语
		'de': require('./assets/languages/de.json'), //德语 
		'fr': require('./assets/languages/fr.json'), //法语
		//翻译成葡萄牙语 荷兰语 意大利语 葡萄牙（巴西） 印地语
		'pt': require('./assets/languages/pt.json'), //葡萄牙语
		'nl': require('./assets/languages/nl.json'), //荷兰语
		'lt': require('./assets/languages/lt.json'), //意大利语
		'br': require('./assets/languages/br.json'), //葡萄牙（巴西）
		'in': require('./assets/languages/in.json'), //印地语


	}
});

router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0);
	next();
});
// router.js
router.beforeEach((to, from, next) => {
	store.commit('setCurrentPath', to); // 更新Vuex中的当前路径
	next();
});

new Vue({
	router,
	store,
	i18n, // 使用 i18n 实例
	render: h => h(App)
}).$mount('#app')