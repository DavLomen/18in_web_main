<template>
  <div class="HomePage">
    <Header></Header>
    <div  class="app-wrapper register" style="font-size:10px;background: url(./static/images/login.jpg) no-repeat;background-position: 100% 100%;max-width: 100%;">
      <div class="container" >
        <div class="form-box">
          <div class="mt-9 px-4 lg:mt-[60px] lg:mr-[90px] lg:pr-0 lg:pl-10" style="max-width: 500px">

            <!--            <p-->
            <!--              class="bg-clip-text font-helve text-sm mb-0 text-[#1b1b1b] text-opacity-[0.64] leading-[22px] lg:text-base lg:leading-[30px]">-->
            <!--              {{$t('regLogin[15]')}}</p>-->
          </div>
          <form class="el-form form el-form--label-top">
            <h2  class="mb-2" style="width: 100%;text-align: center;">{{$t('regLogin[11]')}}</h2>
            <div class="el-row" style="margin-left: -5px; margin-right: -5px">
              <div
                class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-12"
                style="padding-left: 5px; padding-right: 5px"
              >
                <div class="el-form-item is-required">
                  <label for="nickname" class="el-form-item__label">{{$t('regLogin[1]')}}</label>
                  <div class="el-form-item__content">
                    <div class="el-input">
                      <input
                        v-model.trim="postData.username"
                        type="text"
                        autocomplete="off"
                        :placeholder="$t('regLogin[2]')"
                        class="el-input__inner"
                      />
                    </div>

                  </div>
                </div>
              </div>
              <div
                class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-12"
                style="padding-left: 5px; padding-right: 5px"
              >
                <div class="el-form-item is-required">
                  <label for="phone" class="el-form-item__label">{{$t('regLogin[3]')}}</label>
                  <div class="el-form-item__content">
                    <div class="el-input">
                      <input
                        v-model.trim="postData.email"
                        type="text"
                        autocomplete="off"
                        :placeholder="$t('reg[0]')"
                        class="el-input__inner"
                      />
                    </div>

                  </div>
                </div>
              </div>
              <div
                class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-12"
                style="padding-left: 5px; padding-right: 5px"
              >
                <div class="el-form-item is-required">
                  <label for="password" class="el-form-item__label">{{$t('regLogin[5]')}}</label>
                  <div class="el-form-item__content">
                    <div class="el-input el-input--suffix">
                      <input
                        :type="passwords?'password':'text'"
                        v-model.trim="postData.password"
                        autocomplete="off"
                        :placeholder="$t('regLogin[6]')"
                        class="el-input__inner"
                      /><span class="el-input__suffix"
                    ><span class="el-input__suffix-inner">
                      <van-icon v-if="passwords" name="closed-eye" @click="passwords = !passwords"/>
                      <van-icon v-else name="eye-o" @click="passwords = !passwords"/>
                    </span>
                    </span>
                    </div>

                  </div>
                </div>
              </div>
              <div
                class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-12"
                style="padding-left: 5px; padding-right: 5px"
              >
                <div class="el-form-item is-required">
                  <label for="confirmPassword" class="el-form-item__label"
                  >{{$t('regLogin[7]')}}</label
                  >
                  <div class="el-form-item__content">
                    <div class="el-input el-input--suffix">
                      <input
                        :type="re_passwords?'password':'text'"
                        v-model.trim="postData.re_password"
                        autocomplete="off"
                        placeholder=""
                        class="el-input__inner"
                      /><span class="el-input__suffix"
                    ><span class="el-input__suffix-inner"
                    >
                      <van-icon v-if="re_passwords" name="closed-eye" @click="re_passwords = !re_passwords"/>
                      <van-icon v-else name="eye-o" @click="re_passwords = !re_passwords"/>
                    </span
                    ></span
                    >
                    </div>

                  </div>
                </div>
              </div>
              <div
                class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-12"
                style="padding-left: 5px; padding-right: 5px"
              >
                <div class="el-form-item is-required">
                  <label class="el-form-item__label">{{$t('withdraw[3]')}}</label>
                  <div class="el-form-item__content">
                    <div class="el-input el-input--suffix">
                      <input
                        :type="fund_passwords?'password':'text'"
                        v-model.trim="postData.fund_password"
                        autocomplete="off"
                        :placeholder="$t('placehoder[1]')"
                        class="el-input__inner"
                      /><span class="el-input__suffix"
                    ><span class="el-input__suffix-inner"
                    >
                      <van-icon v-if="fund_passwords" name="closed-eye" @click="fund_passwords = !fund_passwords"/>
                      <van-icon v-else name="eye-o" @click="fund_passwords = !fund_passwords"/>
                    </span
                    ></span>
                    </div>

                  </div>
                </div>
              </div>
              <div
                class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-12"
                style="padding-left: 5px; padding-right: 5px"
              >
                <div class="el-form-item is-required">
                  <label class="el-form-item__label"
                  >{{$t('confirm')}} {{$t('withdraw[3]')}}</label
                  >
                  <div class="el-form-item__content">
                    <div class="el-input el-input--suffix">
                      <input
                        :type="re_fund_passwords?'password':'text'"
                        v-model.trim="postData.re_fund_password"
                        autocomplete="off"
                        placeholder=""
                        class="el-input__inner"
                      /><span class="el-input__suffix"
                    ><span class="el-input__suffix-inner"
                    >
                      <van-icon v-if="re_fund_passwords" name="closed-eye" @click="re_fund_passwords = !re_fund_passwords"/>
                      <van-icon v-else name="eye-o" @click="re_fund_passwords = !re_fund_passwords"/>
                    </span
                    ></span
                    >
                    </div>

                  </div>
                </div>
              </div>
              <!--              <div-->
              <!--                style="width:100%;padding-left: 5px; padding-right: 5px;margin-bottom: 10px;color: #ff4d51;font-size: 1.5rem"-->
              <!--              >-->
              <!--                *{{$t('placehoder[2]')}}-->
              <!--              </div>-->
              <div
                class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-12"
                style="padding-left: 5px; padding-right: 5px"
              >
                <div class="el-form-item">
                  <label for="invite_code" class="el-form-item__label"
                  >{{$t('regLogin[8]')}}</label
                  >
                  <div class="el-form-item__content">
                    <div class="el-input">
                      <input
                        v-model.trim="postData.recommend"
                        type="text"
                        autocomplete="off"
                        placeholder=""
                        class="el-input__inner"
                      />
                    </div>

                  </div>
                </div>
              </div>
              <div
                class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-12"
                style="padding-left: 5px; padding-right: 5px"
              >
                <div class="el-form-item is-required">
                  <label for="captcha" class="el-form-item__label"
                  >{{$t('regLogin[9]')}}</label
                  >
                  <div class="el-form-item__content">
                    <div class="code-box">
                      <div class="el-input">
                        <input
                          v-model.trim="postData.code"
                          type="text"
                          autocomplete="off"
                          placeholder=""
                          class="el-input__inner"
                        />
                      </div>
                      <div  class="code-img" @click="getCodes">
                        <SIdentify :identifyCode="identifyCode" >
                        </SIdentify>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div
                class="el-col el-col-24"
                style="padding-left: 5px; padding-right: 5px"
              >
                <div class="el-form-item">

                  <div class="el-form-item__content" style="display: flex;align-items: center">
                    <van-checkbox style="display: flex;" v-model="isAgree" checked-color="red" icon-size="20" shape="square">
                      {{$t('regLogin[15]')}}
                    </van-checkbox>
                    <div style="display: inline-block">
                      <a  href="javascript:;" @click="$router.push('/article/privacy/detail')" style="font-weight: bold;">{{$t('regLogin[16]')}}</a> {{$t('regLogin[17]')}}
                      <a  href="javascript:;" @click="$router.push('/article/terms/detail')" style="font-weight: bold;">{{$t('regLogin[18]')}}</a>

                    </div>
                  </div>
                </div>
              </div>
              <div
                class="el-col el-col-24"
                style="padding-left: 5px; padding-right: 5px"
              >
                <div class="el-form-item">

                  <div class="el-form-item__content">
                    <div class="submit-btn btn-dark" style="background: linear-gradient(to right, #2777ed, #00070e);" @click="onSubmit">{{$t('regLogin[19]')}}</div>

                  </div>
                </div>
              </div>
            </div>
            <div class="login-link">
              {{$t('regLogin[0]')}} <span class="link" @click="$router.push('/login')">{{$t('head[3]')}}</span>
            </div>
          </form>

        </div>
      </div>
    </div>
    <div class="pc">
      <Footer/>
    </div>
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
        this.postData.code_rand = new Date().getTime()
        this.codeImg = this.ApiUrl+'/api/Account/code?code_rand='+this.postData.code_rand
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
          this.$Dialog.Toast(this.$t('regLogin[2]'))
          return
        }
        if(!this.postData.email){
          this.$Dialog.Toast(this.$t('regLogin[4]'))
          return
        }
        // if(!this.postData.recommend){
        //   this.$Dialog.Toast(this.$t('register.placeholder[4]'))
        //   return
        // }
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
        if(!this.postData.fund_password){
          this.$Dialog.Toast(this.$t('placehoder[1]'))
          return
        }
        if(!this.postData.re_fund_password){
          this.$Dialog.Toast(this.$t('placehoder[1]'))
          return
        }
        if(this.postData.fund_password!=this.postData.re_fund_password){
          this.$Dialog.Toast(this.$t('placehoder[1]'))
          return
        }

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
          this.getCode()
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

  ::-webkit-scrollbar {
    width: 4px;
    height: 5px
  }::-webkit-scrollbar-corner,::-webkit-scrollbar-track {
     background-color: #e2e2e2
   }::-webkit-scrollbar-thumb {
      border-radius: 0;
      background-color: rgb(13,110,253)
    }

  .slide-enter-active,.slide-leave-active {
    transition: all .2s ease
  }

  .slide-enter,.slide-leave-to {
    transform: translateY(10px);
    opacity: 0
  }

  .slide-right-enter-active,.slide-right-leave-active {
    transition: all .2s ease
  }

  .slide-right-enter,.slide-right-leave-to {
    transform: translateX(-10px);
    opacity: 0
  }

  @keyframes tobig-795b2cdc {
    0% {
      transform: scale(1)
    }

    to {
      transform: scale(1.5)
    }
  }

  input::-webkit-inner-spin-button,input::-webkit-outer-spin-button {
    -webkit-appearance: none!important
  }

  input[type=number] {
    -moz-appearance: textfield
  }

  .el-carousel__indicators--outside button {
    background-color: rgb(13,110,253)!important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: rgb(13,110,253)!important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  /*.el-pagination.is-background .el-pager li:not(.disabled).active {*/
  /*  background-color: rgb(13,110,253)!important*/
  /*}*/

  /*.el-pagination.is-background .el-pager li:not(.active):hover {*/
  /*  color: rgb(13,110,253)!important*/
  /*}*/

  .el-message {
    font-size: 1.6rem
  }

  .el-menu-item {
    padding: 0 2rem;
    font-size: 1.5rem;
    font-weight: 700
  }

  .el-submenu__title {
    font-size: 1.5rem!important;
    font-weight: 700
  }

  .el-menu-item [class^=el-icon-],.el-submenu [class^=el-icon-] {
    font-size: 2rem
  }

  .el-submenu__icon-arrow {
    font-size: 1.4rem!important
  }

  .el-menu-item.is-active,.el-menu-item:hover,.el-submenu__title:hover {
    color: rgb(13,110,253);
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: rgb(13,110,253)
  }

  .lang-item {
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap
  }

  .lang-item .flag {
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-right: .6rem
  }

  .option-label {
    display: flex;
    align-items: center;
    width: 100%
  }

  .option-label .icon {
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-right: .6rem
  }

  .el-input {
    font-size: 1.5rem!important
  }

  .el-input .el-input__inner {
    height: 2.5rem;
    line-height: 2.5rem;
    padding: 0 0.5rem;
    color: #000;
    font-size: 1rem;
    border: 1px solid #d9d9d9 !important
  }

  .el-textarea__inner {
    font-size: 1rem!important;
    color: #000!important
  }

  .el-form-item__label {
    padding-bottom: 0.5rem!important;
    line-height: normal!important;
    font-size: 1rem!important;
    color: #000000;
    /*background: linear-gradient(180deg, #B32283 0%, #6C2383 100%);*/
    /*-webkit-background-clip: text;*/
    /*-webkit-text-fill-color: transparent;*/
    /*background-clip: text;*/
    /*-webkit-text-fill-color: transparent;*/
    word-wrap: break-word
  }

  .el-input.is-disabled .el-input__inner {
    color: #000!important;
    cursor: default!important
  }

  .el-radio {
    color: #000!important
  }

  .el-radio__label {
    font-size: 1.5rem!important
  }

  .el-select {
    width: 100%
  }

  .el-select-dropdown__item {
    font-size: 1.5rem;
    font-family: myFont
  }

  .el-select-dropdown__empty {
    font-size: 1.5rem!important;
    font-family: myFont
  }

  .el-select-dropdown__item.selected {
    color: rgb(13,110,253)
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: rgb(13,110,253)!important;
    border-color: rgb(13,110,253)!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: rgb(13,110,253)!important
  }

  @media only screen and (min-width:1024px) {
    .container {
      width: 100%;
      box-sizing: border-box;
      padding: 3rem 3rem;
    }
    .mt-9 {
      padding-left: 5rem;
    }
    .container .form-box {
      width: 100%;
      max-width: 1300px;
      margin: 0 auto;
      display: flex;justify-content: space-between;
    }

    .container .form-box .form {
      width: 38rem;
      box-sizing: border-box;
      padding: 1rem;
      border-radius: 0.5rem;
      background-color: #eee
    }

    .form-title {
      width: 100%;
      margin-bottom: 1.5rem;
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
      text-align: left;
      word-wrap: break-word
    }
    .bg-clip-text {
      font-size: 2rem;
      color: #000;
    }
    .container .form-box .form .login-link {
      width: 100%;
      margin-bottom: 1rem;
      line-height: 160%;
      font-size: 1rem;
      color: #000;
      text-align: left;
      word-wrap: break-word
    }

    .container .form-box .form .login-link .link {
      color: #1a9ede;
      cursor: pointer
    }

    .container .form-box .form .el-form-item {
      margin-bottom: 0.5rem
    }

    .container .form-box .form .el-input.is-disabled .el-input__inner {
      background-color: #fff!important
    }

    .container .form-box .form .code-box {
      display: flex;
      align-items: center;
      width: 100%
    }

    .container .form-box .form .code-box .code-img {
      height: 2.5rem;
      margin-left:0.5rem;
      cursor: pointer
    }

    .container .form-box .form .agree-box {
      width: 100%
    }

    .container .form-box .form .agree-box .agree {
      color: #A22283;
      cursor: pointer
    }

    .container .form-box .form .submit-btn {
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      box-sizing: border-box;
      padding: 0 1rem;
      margin-top: 1rem;
      border-radius: 4px;
      font-size: 1.2rem;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg,#ef991e,#00070e);
      cursor: pointer
    }
  }

  @media only screen and (max-width:1024px) {
    .container {
      width: 100%;
      box-sizing: border-box;
      padding: 3rem 1rem;
    }

    .container .form-box {
      width: 100%
    }

    .container .form-box .form {
      width: 100%;
      box-sizing: border-box;
      padding: 2rem;
      border-radius: .8rem;
      background-color: #eee
    }

    .form-title {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #fff;
      text-align: left;
      word-wrap: break-word
    }
    .bg-clip-text {
      font-size: 1.3rem;
      color: #000;
    }
    .container .form-box .form .login-link {
      width: 100%;
      margin-bottom: 1rem;
      line-height: 160%;
      font-size: 1rem;
      color: #000;
      text-align: left;
      word-wrap: break-word;
    }

    .container .form-box .form .login-link .link {
      color: #1a9ede;
      cursor: pointer
    }

    .container .form-box .form .el-form-item {
      margin-bottom: 0.5rem
    }

    .container .form-box .form .el-input.is-disabled .el-input__inner {
      background-color: #fff!important
    }

    .container .form-box .form .code-box {
      display: flex;
      align-items: center;
      width: 100%
    }

    .container .form-box .form .code-box .code-img {
      height: 3rem;
      margin-left: 0.5rem;
      cursor: pointer
    }

    .container .form-box .form .agree-box {
      width: 100%
    }

    .container .form-box .form .agree-box .agree {
      color: #A22283;
      cursor: pointer
    }

    .container .form-box .form .submit-btn {
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      box-sizing: border-box;
      padding: 0 1rem;
      border-radius: 4px;
      font-size: 1rem;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg,#ef991e,#00070e);
      cursor: pointer
    }
  }
  .el-input__suffix-inner {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    .pc {
      display: none;
    }
  }
  .el-form-item__content {
    line-height: 1rem;
  }
</style>
