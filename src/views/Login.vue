<template>
  <div class="HomePage">
    <Header></Header>
    <div class="app-wrapper" style="background: url(./static/image/001.jpg?t=9) no-repeat;background-size: 100% 100%;">
      <div class="container" >
        <div class="form-box" style="display: flex;justify-content: right;">
          <form class="el-form form el-form--label-top">
            <div class="form-title">{{$t('loginpage[0]')}}</div>

            <div class="el-row" style="margin-left: -5px; margin-right: -5px">
              <div
                class="el-col el-col-24"
                style="padding-left: 5px; padding-right: 5px"
              >
                <div class="el-form-item is-required">
                  <h6>*{{$t('regLogin[1]')}}</h6>
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
                class="el-col el-col-24"
                style="padding-left: 5px; padding-right: 5px"
              >
                <div class="el-form-item is-required">
                  <h6>*{{$t('regLogin[5]')}}</h6>
                  <div class="el-form-item__content">
                    <div class="el-input el-input--suffix">
                      <input
                      type="password"
                      v-model.trim="postData.password"
                      autocomplete="off"
                      :placeholder="$t('regLogin[6]')"
                      class="el-input__inner"
                    /><span class="el-input__suffix"
                    ><span class="el-input__suffix-inner"
                    ></span
                    ></span
                    >
                    </div>

                  </div>
                </div>
              </div>
              <div v-if="code==3"
                class="el-col el-col-24"
                style="padding-left: 5px; padding-right: 5px"
              >
                <div class="el-form-item is-required">
                  <h6>*F2A</h6>
                  <div class="el-form-item__content">
                    <div class="el-input">
                      <input
                        v-model.trim="postData.verify_code"
                        type="text"
                        autocomplete="off"
                        :placeholder="'F2A'"
                        class="el-input__inner"
                      />
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
                    <div class="other-operate">
<!--                      <div class="reset-link">Forgot Password?</div>-->
                      <van-checkbox shape="square" v-model="keepUser" @change="changeKeepUser" checked-color="#A22283"  icon-size="14">{{$t('login.text[0]')}}</van-checkbox>
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
                    <div class="submit-btn" @click="onSubmit">{{$t('head[3]')}}</div>

                  </div>
                </div>
              </div>
            </div>
            <div class="register-link">
              {{$t('regLogin[12]')}} <span class="link" @click="$router.push('/register')">{{$t('regLogin[11]')}}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {

  },
  props: [],
  data() {
    return {
      postData: {
      	username: localStorage['UserName']||'',
      	password: localStorage['PassWord']||'',
        verify_code:'',
      },
      keepUser: localStorage['KeepUser']=='1'?true:false,
      isSubmit: false,
      showPass: false,
      docTitle: document.title,
      areaList: areaList,
      areaCode: areaList[0].id,
      code:0,
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$Model.SmsCode((data) => {
      this.areaList = data
      this.areaCode = data[0].id
    });

    // ttq.track('ViewContent', {
    //   "contents": [
    //     {
    //       "content_id": "CQ2LBGJC77UFDPAMG3DG", // string. ID of the product. Example: "1077218".
    //       "content_type": "login", // string. Either product or product_group.
    //       "content_name": "login" // string. The name of the page or product. Example: "shirt".
    //     }
    //   ],
    //   "value": "100", // number. Value of the order or items sold. Example: 100.
    //   "currency": "USD" // string. The 4217 currency code. Example: "USD".
    // });
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    onSubmit() {
    	if(!this.postData.username){
        this.$Dialog.Toast(this.$t('regLogin[2]'))
        return;
      }
      if(!this.postData.password){
        this.$Dialog.Toast(this.$t('login.placeholder[1]'));
        return;
      }
      this.isSubmit = true;
    	this.$Model.Login(this.postData,(data)=>{
        this.isSubmit = false;
        if(this.keepUser){
          localStorage['UserName'] = this.postData.username;
          localStorage['PassWord'] = this.postData.password;
        }else{
          localStorage.removeItem('UserName');
          localStorage.removeItem('PassWord');
        }
        this.code = data.code;
    	})
    },
    changeKeepUser() {
    	if(this.keepUser){
    		localStorage['KeepUser'] = 1;
    	}else{
    		localStorage.removeItem('KeepUser');
    	}
    }
  }
}
</script>
<style scoped>
  @media only screen and (min-width:1024px) {
    html {
      font-size: 10px
    }
  }

  @media only screen and (max-width:1024px) {
    html {
      font-size: 10px
    }
  }::-webkit-scrollbar {
    width: 4px;
    height: 5px
  }::-webkit-scrollbar-corner,::-webkit-scrollbar-track {
     background-color: #e2e2e2
   }::-webkit-scrollbar-thumb {
      border-radius: 0;
      background-color: #662282
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

  @keyframes tobig-35c614a0 {
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
    background-color: #662282!important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: #662282!important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  /*.el-pagination.is-background .el-pager li:not(.disabled).active {*/
  /*  background-color: #662282!important*/
  /*}*/

  /*.el-pagination.is-background .el-pager li:not(.active):hover {*/
  /*  color: #662282!important*/
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
    color: #662282;
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: #662282
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
    height: 4.5rem;
    line-height: 4.5rem;
    padding: 0 2rem;
    font-family: myFont;
    color: #000;
    border: 1px solid #d9d9d9!important
  }

  .el-textarea__inner {
    font-size: 1.5rem!important;
    font-family: myFont;
    color: #000!important
  }

  .el-form-item__label {
    padding-bottom: 1rem!important;
    line-height: normal!important;
    font-size: 1.5rem!important;
    color: #000!important;
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
    color: #662282
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #662282!important;
    border-color: #662282!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #662282!important
  }

  @media only screen and (min-width:1024px) {
    .container {
      width: 100%;
      box-sizing: border-box;
      padding: 8rem 3rem;
    }

    .container .form-box {
      width: 100%;
      max-width: 1300px;
      margin: 0 auto
    }

    .container .form-box .form {
      width: 58rem;
      box-sizing: border-box;
      padding: 4rem;
      border-radius: 1rem;
      background-color: #fff
    }

    .container .form-box .form .form-title {
      width: 100%;
      margin-bottom: 1.5rem;
      font-size: 4rem;
      font-weight: 700;
      color: #000;
      text-align: left;
      word-wrap: break-word
    }

    .container .form-box .form .register-link {
      width: 100%;
      margin-bottom: 5rem;
      line-height: 160%;
      font-size: 1.5rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .form-box .form .register-link .link {
      color: #A22283;
      cursor: pointer
    }

    .container .form-box .form .el-form-item {
      margin-bottom: 2.5rem
    }

    .container .form-box .form .other-operate {
      display: flex;
      justify-content: flex-end;
      width: 100%
    }

    .container .form-box .form .other-operate .reset-link {
      max-width: 100%;
      font-size: 1.5rem;
      color: #A22283;
      word-wrap: break-word;
      cursor: pointer
    }

    .container .form-box .form .submit-btn {
      width: 100%;
      height: 5rem;
      line-height: 5rem;
      box-sizing: border-box;
      padding: 0 2rem;
      margin-top: 1rem;
      border-radius: 10px;
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(to right, #00f785, #410093);
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
      background-color: rgba(255,255,255,0.7)
    }

    .container .form-box .form .form-title {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      text-align: left;
      word-wrap: break-word
    }

    .container .form-box .form .register-link {
      width: 100%;
      margin-bottom: 3.6rem;
      line-height: 160%;
      font-size: 1.5rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .form-box .form .register-link .link {
      color: #A22283;
      cursor: pointer
    }

    .container .form-box .form .el-form-item {
      margin-bottom: 2.2rem
    }

    .container .form-box .form .other-operate {
      display: flex;
      justify-content: flex-end;
      width: 100%
    }

    .container .form-box .form .other-operate .reset-link {
      max-width: 100%;
      font-size: 1.5rem;
      color: #A22283;
      word-wrap: break-word;
      cursor: pointer
    }

    .container .form-box .form .submit-btn {
      width: 100%;
      height: 4.6rem;
      line-height: 4.6rem;
      box-sizing: border-box;
      padding: 0 2rem;
      border-radius: 10px;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(to right, #00f785, #410093);
      cursor: pointer
    }
  }
  .form-box h6 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 10px;
    margin-top: 20px;
    padding-left: 7px;
    text-align: left;
    background: linear-gradient(180deg, #B32283 0%, #6C2383 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .van-checkbox>>>.van-icon {
    border: 1px solid #000;
    background: #fff;
  }
</style>
