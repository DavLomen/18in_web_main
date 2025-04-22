// import 'jquery'
import Vue from 'vue'

import App from '@/App.vue'

import router from '@/router'

import store from '@/store'
import Vant,{Locale,ImagePreview} from 'vant'
import Model from '@/common/Model'
import Dialog from '@/common/Dialog'
import Util from '@/common/Util'
import i18n,{SetLanguage} from './i18n'
import '@/assets/css/style.css'
import 'vant/lib/index.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-awesome.css'
import '@/assets/css/line-awesome.css'
import '@/assets/css/slick.css'
import '@/assets/css/custom.css'
// import '@/assets/css/color.css'
import '@/assets/css/default.css'
import '@/assets/css/media.css'
import "babel-polyfill";

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
/*APP*/
import Toasted from 'vue-toasted';

// import particles from 'particles.js'
// Vue.use(particles)

Vue.use(Vant)
Vue.use(Toasted)

Vue.prototype.$SetLanguage = SetLanguage

Vue.prototype.$ImagePreview = ImagePreview

Vue.prototype.$Model = Model

Vue.prototype.$Dialog = Dialog

Vue.prototype.$Util = Util

Vue.prototype.$AppInit = false

Vue.prototype.$domWidth = document.documentElement.clientWidth

Vue.prototype.$langList = langList

Vue.config.productionTip = false



Vue.config.devtools = false;



import Footer from '@/components/Footer'



Vue.component('Footer', Footer)
import Header from '@/components/Header'
Vue.component('Header', Header)

//Model.GetLanguage()

Model.GetBackData()

router.beforeEach((to, from, next) => {

  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  if(from.name=='line'){

    Model.GetBackData()
  }

  if(from.name!='login'&&from.name!='register'){

    localStorage['FromPage'] = from.fullPath;

  }else{

    localStorage.removeItem('FromPage');

  }

  if (to.name!='login'&&!localStorage['Token']&&to.matched.some(record => record.meta.requiresAuth)) {

    next('/login');

  } else {

    next();

  }

})



new Vue({

  router,

  store,

  i18n,

  render: h => h(App)

}).$mount('#app')

