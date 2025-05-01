<template>
  <div class="HomePage">
    <Header></Header>

    <div class="container col-lg-6 col-11">
      <div class="border border-0 rounded-3 col-lg-8 mx-auto my-5 light-border" style="--x: 3.3090909090909086%;">
        <img :src="'./static/images/img/login-1.png'" class="rounded-top" style="width: 100%;" alt="">
        <div class="separator-animated animated-true"></div>
        <div class="text-center p-4">
          <h3 class="mb-4">{{$t('regpage[0]')}}</h3>
          <div class="form-group mb-3">
            <div class="input-wrapper">
              <i class="bi bi-envelope"></i>
              <input v-model="postData.username" type="email" class="form-control custom-input" name="email" id="email" :placeholder="$t('regpage[1]')" data-sharkid="__0" data-sharklabel="email">
            </div>
          </div>
<!--          <div class="form-group mb-3">-->
<!--            <div class="input-wrapper">-->
<!--              <i class="bi bi-person"></i>-->
<!--              <input type="text" class="form-control custom-input" name="username" id="username" placeholder="Create Username" data-sharkid="__1">-->
<!--            </div>-->
<!--          </div>-->
          <div class="form-group mb-3">
            <div class="input-wrapper">
              <i class="bi bi-lock"></i>
              <input v-model.trim="postData.password"  type="password" class="form-control custom-input" id="password" name="password" :placeholder="$t('regpage[2]')" data-sharkid="__2">
            </div>
          </div>
          <div class="form-group mb-3">
            <div class="input-wrapper">
              <i class="bi bi-lock"></i>
              <input v-model.trim="postData.re_password"  type="password" class="form-control custom-input" id="dpassword" name="dpassword" :placeholder="$t('regpage[3]')" data-sharkid="__3">
            </div>
          </div>
          <div class="form-group mb-3">
            <div class="input-wrapper">
              <i class="bi bi-lock"></i>
              <input v-model.trim="postData.fund_password" type="password" class="form-control custom-input" id="wpass" name="wpass" :placeholder="$t('regpage[4]')" data-sharkid="__4">
            </div>
          </div>
          <div class="form-group mb-3">
            <div class="input-wrapper">
              <i class="bi bi-lock"></i>
              <input v-model.trim="postData.re_fund_password" type="password" class="form-control custom-input" id="rewpass" name="wpass" :placeholder="$t('regpage[5]')" data-sharkid="__4">
            </div>
          </div>
          <div class="form-group mb-3">
            <div class="input-wrapper">
              <i class="bi bi-star"></i>
              <input  v-model.trim="postData.recommend" type="text" class="form-control custom-input" id="invitecode" name="invitecode" :placeholder="$t('regpage[6]')" data-sharkid="__5">
            </div>
          </div>
          <div class="form-group mb-3" style="position: relative;">
            <div class="input-wrapper">
              <i class="bi bi-star"></i>
              <input
                v-model.trim="postData.code"
                type="text"
                id="codes"
                autocomplete="off"
                :placeholder="$t('regpage[7]')"
                class="form-control custom-input"
              />
            </div>
<!--            <img-->
<!--              style="position: absolute;right: 0;top: 0;max-width: 40%;-->
<!--    height: 100%;"-->
<!--              :src="codeImg" @click="getCode"-->
<!--              class="code-img password-toggle"-->
<!--            />-->
            <div  class="code-img password-toggle" style="position: absolute;right: 0;top: 0;max-width: 40%;
    height: 100%;display: flex;align-items: center;" @click="getCodes">
              <SIdentify :identifyCode="identifyCode" >
              </SIdentify>
            </div>
          </div>
          <div class="text-center py-4">
            <button @click="onSubmit" class="login-btn" id="register">
              <span>{{$t('regpage[8]')}}</span>
            </button>
          </div>
          <h6 class="text-bhs">{{$t('regpage[9]')}}<a href="javascript:;" @click="$router.push('/login')" class="fs-6">{{$t('regpage[10]')}}</a></h6>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
  import SIdentify from "@/components/SIdentify";

  export default {
  name: 'Register',
  components: {
    SIdentify
  },
  props: ['recommendId'],
  data() {
    return {
      identifyCode: "", //密码登录图形验证码
      identifyCodes: "1234567890abcdefghizklmnopqrstuvwxyz",
      passwords:true,
      re_passwords:true,
      fund_passwords:true,
      re_fund_passwords:true,
      postData: {
        dest: areaList[0].id,
        username: '',
        password: '',
        re_password: '',
        smscode: '',
        code: '',
        code_rand: '',
        fund_password:'',
        re_fund_password:'',
        recommend: this.recommendId||''
      },
      recommendDis: this.recommendId?true:false,
      areaList: areaList,
      isSendCode: false,
      isSubmit: false,
      codeImg: '',
      showBrowserTips: false,
      downUrl: '',
      isPlus: false,
      isAgree: true,
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    let name = this.$route.query.name;
    if (name) {
      this.postData.username = name;
    }
    let recomm = localStorage.getItem('recomm');
    if (recomm) {
      this.recommendId = recomm;
      this.postData.recommend = recomm;
      this.recommendDis = true;
    }
    if (this.recommendId) {
      localStorage.setItem('recomm',this.recommendId)
    }
    // const lang = localStorage['Language'] || Language
    // this.downUrl = this.InitData.setting.app_down+lang.toUpperCase()
    this.$Model.SmsCode((data) => {
      this.areaList = data
      this.postData.dest = data[0].id
    });

    this.getCodes();


    // this.checkUserAgent();
    if (this.$route.query.activity == '1') {
      localStorage.setItem("act_code", this.recommendId);
      if(localStorage.getItem("Token") !=undefined){
        this.$router.push('/');
      }
    }

  },
  mounted() {
    if(window.plus){
      this.isPlus = true
    }
  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    toDownload () {
      //this.$router.push({path:'/appDown'})
        this.$router.push('/AppDown')
    },
    openArticle() {
      this.$router.push(`/article/terms/${this.InitData.disclaimerList.length?this.InitData.disclaimerList[0].id:''}`)
    },
    getCode() {
      // this.postData.code_rand = new Date().getTime()
      // this.codeImg = this.ApiUrl+'/api/Account/code?code_rand='+this.postData.code_rand
    },
    getCodes() {
      let that = this;
      this.postData.code_rand = new Date().getTime()
      this.$Model.getCode1(that.postData.code_rand,data=>{
        that.identifyCode = data.data;
      });
    },
    onSubmit() {
      if(!this.postData.username){
        this.$Dialog.Toast(this.$t('regLogin[4]'))
        return
      }
      // if(!this.postData.email){
      //   this.$Dialog.Toast(this.$t('regLogin[4]'))
      //   return
      // }
      // if(!this.postData.recommend){
      //   this.$Dialog.Toast(this.$t('register.placeholder[4]'))
      //   return
      // }
      this.postData.email = this.postData.username;
      if(!this.postData.smscode&&this.InitData.setting.is_sms==1){
        this.$Dialog.Toast(this.$t('register.placeholder[1]'))
        return
      }
      if(!this.postData.code&&this.InitData.setting.is_sms==2){
        this.$Dialog.Toast(this.$t('register.placeholder[6]'))
        return
      }
      if(!this.postData.password){
        this.$Dialog.Toast(this.$t('register.placeholder[2]'))
        return
      }
      if(!this.postData.re_password){
        this.$Dialog.Toast(this.$t('register.placeholder[3]'))
        return
      }
      if(this.postData.password!=this.postData.re_password){
        this.$Dialog.Toast(this.$t('register.placeholder[5]'))
        return
      }
      // if(!this.postData.fund_password){
      //   this.$Dialog.Toast(this.$t('placehoder[1]'))
      //   return
      // }
      // if(!this.postData.re_fund_password){
      //   this.$Dialog.Toast(this.$t('placehoder[1]'))
      //   return
      // }
      // if(this.postData.fund_password!=this.postData.re_fund_password){
      //   this.$Dialog.Toast(this.$t('placehoder[1]'))
      //   return
      // }

      let recomand = localStorage.getItem("act_code");
      if(recomand != undefined && recomand !=''){
        this.postData.activity = "1";
      }
     if(!this.isAgree){
        this.$Dialog.Toast(this.$t('register.placeholder[7]'))
        return
      }
      this.isSubmit = true
      this.$Model.UserRegister(this.postData,data=>{
        this.isSubmit = false
        this.getCodes()
      });
    },
    getSmsCode() {
      if(!this.postData.username){
        this.$Dialog.Toast(this.$t('register.placeholder[0]'))
        return
      }
      // if(!this.postData.recommend){
      //   this.$Dialog.Toast(this.$t('register.placeholder[4]'))
      //   return
      // }
      if(!this.postData.code){
        this.$Dialog.Toast(this.$t('register.placeholder[6]'))
        return
      }
      this.isSendCode = true
      this.$Model.GetSMSCode({phone: this.postData.username,dest: this.postData.dest, code: this.postData.code, recommend: this.postData.recommend, code_rand: this.postData.code_rand},(data)=>{
        this.isSendCode = false;
      })
    },
    checkUserAgent(callback) {
      var ua = navigator.userAgent;
      var is_WeiXin = ()=> {
        if (/(MicroMessenger)/.test(ua)) {
          return true;
        }
        return false;
      };
      var is_QQ = ()=> {
        if (/(QQ)/.test(ua)) {
          return true;
        }
        return false;
      };
      var is_Android = ()=> {
        if (/(Android)/.test(ua)) {
          return true;
        }
        return false;
      };
      var is_iOS = ()=> {
        if (/(iPod|iPhone|iPad)/.test(ua)) {
          return true;
        }
        return false;
      };
      if(is_WeiXin()){
        this.showBrowserTips = true;
      }
      if(is_iOS()){
        callback&&callback('IOS');
      }else{
        callback&&callback('Android');
      }
    },
  }
}
</script>

<style scoped>
  .input-wrapper {
    position: relative;
    width: 100%;
  }

  .input-wrapper i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #7376aa;
    font-size: 1.1rem;
  }

  .custom-input {
    width: 100%;
    padding: 12px 15px 12px 45px;
    border: 1px solid rgba(139, 42, 184, 0.2);
    border-radius: 8px;
    background: #0f1021;
    color: #fff;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .custom-input:focus {
    outline: none;
    border-color: #E535AB;
    box-shadow: 0 0 0 3px rgba(229, 53, 171, 0.1);
    background: #0f1021;
    color: #fff;
  }

  .custom-input::placeholder {
    color: #7376aa;
  }

  .form-group {
    margin: 0 auto;
    max-width: 400px;
  }

  .login-btn {
    width: 100%;
    max-width: 400px;
    padding: 15px;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(90deg, #E535AB 0%, #8B2AB8 100%);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .login-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #8B2AB8 0%, #E535AB 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .login-btn:hover::before {
    opacity: 1;
  }

  .login-btn span {
    position: relative;
    z-index: 1;
  }

  .login-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(229, 53, 171, 0.3);
  }

  .login-btn:active {
    transform: translateY(0);
  }
</style>
