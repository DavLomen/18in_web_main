import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Toast,Dialog } from 'vant'
import i18n from '@/i18n'

var instance = axios.create({
  baseURL: (localStorage['CurrLine']||ApiUrl)+'/api/',
  headers: {
    'Content-Type':'application/x-www-form-urlencoded'
  }
})

var source = axios.CancelToken.source();

instance.interceptors.request.use(
  config => {
    if(!config.diyApi){
      config.baseURL = (localStorage['CurrLine']||ApiUrl)+'/api/';
    }else{
      config.baseURL = 'https://api-aws.huobi.pro/';
    }
    config.cancelToken = source.token;
    config.data = config.data || {};
    config.data.lang = localStorage['Language']|| Language;
    if(!config.noLogin){
      config.data.token = localStorage['Token'];
    }
    if(!config.fromData){
      config.data = $.param(config.data);
    }
    return config;
  },
  error => {
  return Promise.reject(error);
  }
)

instance.interceptors.response.use(
  response => {
    var Api = response.request.responseURL.slice(response.request.responseURL.lastIndexOf('\/'));
    if (response.data.code > 200 && response.data.code < 206) {
      localStorage.removeItem('Token');
      localStorage.removeItem('UserInfo');
      localStorage.removeItem('BankCardList');
      store.dispatch('UpdateUserInfo', '');
      store.dispatch('UpdateBankCardList', []);
      Toast.clear();
      if(router.history.current.name=='vip'){
        return response
      }
      source.cancel();
      Dialog.alert({
        title: i18n.t('dialog[0]'),
        message: response.data.code_dec,
        closeOnPopstate: true,
      }).then(() => {
        router.push('/login');
        source = axios.CancelToken.source();
      }).catch(()=>{
        router.push('/login');
        source = axios.CancelToken.source();
      });
    }
    return response;
  },
  error => {
    const err = /<h1>(.*?)<\/h1>/ig.exec(error.response.data)[1];
    Toast({message: err});
    // const config = error.config;
    // if (!config || !config.retry) return Promise.reject(error);
    // config.__retryCount = config.__retryCount || 0;
    // if (config.__retryCount >= config.retry) {
    //     return Promise.reject(error);
    // }
    // config.__retryCount += 1;
    // const backoff = new Promise(function(resolve) {
    //   setTimeout(function() {
    //       resolve();
    //   }, 2000);
    // });
    // return backoff.then(function() {
    //   return axios(config);
    // });
  }
)

export default instance
