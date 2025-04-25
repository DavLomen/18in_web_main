<template>
  <div class="HomePage" id="app">
    <UserHeader></UserHeader>
    <div class="app-wrapper" style="width: calc(100% - 25rem);max-width: 100%;overflow: hidden">
      <div class="page-header">
        <div class="page-title">Security</div>
        <div class="el-dropdown">
          <div @click="showUserDown = !showUserDown" class="right-icon el-dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-8265" role="button" tabindex="0" x-placement="bottom-end"><i class="el-icon-user"></i></div>
          <ul class="el-dropdown-menu el-popper" id="dropdown-menu-8265" v-show="showUserDown">
            <li tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$router.push('/walletAddress')"><i class="el-icon-wallet"></i> {{$t('walletAddress[0]')}} </li>
            <li tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$router.push('/loginPassword')"><i class="el-icon-lock"></i> {{$t('walletAddress[1]')}} </li>
            <li tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$router.push('/payPassword')"><i class="el-icon-lock"></i> {{$t('walletAddress[2]')}} </li>
            <li  tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$Model.Logout()"><i class="el-icon-switch-button"></i> {{$t('head[5]')}} </li>
            <div x-arrow="" class="popper__arrow" style="left: 142.5px;"></div>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="container-fluid">
          <div class="block-part block-sec">
            <div class="block_sec_flex">
              <div>
                <h2 class="sec_title">Two-Factor Authentication
                  <span style="padding-left: 1rem;font-size: 14px;">Not mandatory, users can freely choose whether to bind</span>
                </h2>
                <h3 class="sec_desc_1">Setup two-factor Authentication</h3>
              </div>
              <div class="switcher switchfunc tw-fct" data-bs-toggle="modal" data-bs-target="#two-fact-enabled">
                <van-switch :value="checked" @input="onInput"  active-color="#0C8AFF" inactive-color="#ccc"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mask" v-if="showNotice">
      <div class="modal">
        <div class="modal-header">
          <div class="modal-title"></div>
          <div class="close" @click="showNotice = false"><i class="el-icon-close"></i></div>
        </div>
        <div class="modal-body">
          <div style="padding: 1.5rem">
            <h4 class="center purple">Deactivate</h4>
            <h3 class="sec_desc_1 text-center mb-2">Enter the verification code</h3>
            <div class="flex-ver justify-content-center" style="margin-top: 0px;">
<!--              <input type="text" v-model="item.val" class="input-verify input-verify-new" @keyup="nextFocus($event,index)" v-for="(item,index) in inputList"-->
<!--                     @keydown="changeValue(index)">-->
              <div  class="el-col el-col-24">
                <div  class="el-form-item is-required is-no-asterisk">
                  <div class="el-form-item__content">
                    <div  class="el-input"><input type="text" autocomplete="off" v-model.trim="postData.keycode"
                                                  :placeholder="'Please enter verification code'"
                                                  class="el-input__inner">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="centered" style="gap: 10px;">
              <button @click="submitBind" class="main-btnNew submit-b3 longbtn" style="font-size: 16px; cursor: pointer; margin-top: 15px;">Submit</button>
              <button @click="showNotice= false" class="main-btnNew main-btnNew1 submit-b3 longbtn outlined" style="font-size: 16px; cursor: pointer; margin-top: 15px;" type="button" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-show="showBind">
      <div class="modal">
        <div class="modal-header">
          <div class="modal-title">Two-Factor Authentication
            <br><span style="font-size: 14px;font-weight: normal;">Setup Two-factor authentication</span>
          </div>
          <div class="close" @click="showBind = false"><i class="el-icon-close"></i></div>
        </div>
        <div class="modal-body">
          <div style="padding: 1.5rem">
            <p class="und">To be able to authorize transactions you need to scan this QR Code with your Google Authentication App and enter the verification code below.</p>
            <div class="centered">
              <div class="qr-mest " id="QRCode">
                <img :src="url">
              </div>
            </div>
           <div style="text-align: center;margin: 1rem 0">
             <p class="verf">Verification Code</p>
           </div>
            <div class="flex-between" style="justify-content: space-between;max-width: 300px;margin: 0 auto;">
<!--              <div class="flex-ver" style="margin-top: 0px;">-->
<!--                <input type="text" v-model="item.val"  class="input-verify input-verify-new" @keyup="nextFocus($event,index)" v-for="(item,index) in inputList"-->
<!--                       @keydown="changeValue(index)">-->
<!--              </div>-->
              <div  class="el-col el-col-24">
                <div  class="el-form-item is-required is-no-asterisk">
                  <div class="el-form-item__content">
                    <div  class="el-input"><input type="text" autocomplete="off" v-model.trim="postData.keycode"
                                                  :placeholder="'Please enter verification code'"
                                                  class="el-input__inner">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="helplink"><a href="/faq">Do you need help?</a></p>
            <div class="centered">
              <button @click="doBind" class="main-btnNew submit-b3 longbtn" style="font-size: 24px; cursor: pointer; margin-top: 15px;">Next</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import UserHeader from '@/components/UserHeader';
  export default {
    name: 'loginPassword',
    components: {
      UserHeader
    },
    data() {
      return {
        inputList: [{val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}],
        checked:false,
        showNotice:false,
        showBind:false,
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,
        postData: {
          keycode:'',
        },
        qrcodes:'',
        url:'',
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      let that = this;
      this.$Model.GetUserInfo(function (data) {
        if (data.info.google_state == 1) {
          that.checked = true
        }
      });
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      doBind() {
        // let a = "";
        let that = this;
        // that.inputList.forEach((item, index) => {
        //   a += item.val;
        // });
        // if (a.length != 6) {
        //   return;
        // }
        if(this.postData.keycode.length != 6) {
          return;
        }
        // console.log(a);
        this.$Model.googleBind({verify_code:this.postData.keycode}, function (data) {
          if (data.code == 1) {
            that.checked = true;
            that.showBind = false
          }
        });
      },
      onInput() {
        let that = this;
        if (that.checked == false) {
          this.$Model.googleQrcode({}, function (data) {
            if (data.code == 1) {
              that.url = data.data.url;
              that.postData.keycode = '';
              that.showBind = true;
              that.inputList = [{val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}];
            }
          });
          // this.checked = true;
        } else {
          this.showNotice = true;

        }

      },
      submitBind() {
        let a = "";
        let that = this;
        // that.inputList.forEach((item, index) => {
        //   a += item.val;
        // });
        // if (a.length != 6) {
        //   return;
        // }
        // console.log(a);
        if(this.postData.keycode.length != 6) {
          return;
        }
        this.$Model.googleUnbind({verify_code:this.postData.keycode},function (data) {
          if (data.code == 1) {
            that.showNotice = false;
            that.checked = false;
          }
        });
      },
      nextFocus(el,index) {
        var dom = document.getElementsByClassName("input-verify"),
          currInput = dom[index],
          nextInput = dom[index + 1],
          lastInput = dom[index - 1];
        /*这里的keyCode 根据不同的平台或许不同,安卓就是不是8*/
        // this.value=this.value.replace(/\D/g,'')
        console.log(el.keyCode)

        if (el.keyCode>=48 && el.keyCode<=57) {
          if (index < (this.inputList.length - 1)) {
            nextInput.focus();
          } else {
            currInput.blur();
          }
        }else{
          if (el.keyCode == 8) {
            if (index != 0) {
              lastInput.focus();
            }
          } else {
            this.inputList[index].val = '';
          }
        }

      },
      /*当键盘按下的时候清空原有的数*/
      changeValue(index) {
        this.inputList[index].val = "";
      },
      setUserInfo() {
        this.$Model.SetUserInfo(this.postData,data=>{
          if(data.code==1){
            this.postData = {}
          }
        })
      },
    }
  }
</script>
<style scoped>
  @media only screen and (min-width: 1024px) {
    html {
      font-size:10px
    }
  }

  @media only screen and (max-width: 1024px) {
    html {
      font-size:10px
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 5px
  }

  ::-webkit-scrollbar-corner,::-webkit-scrollbar-track {
    background-color: #e2e2e2
  }

  ::-webkit-scrollbar-thumb {
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

  @keyframes tobig-4195c79e {
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

  @media only screen and (min-width: 1024px) {
    .container {
      width:100%
    }

    .container .form {
      width: 100%;
      box-sizing: border-box;
      padding: 4rem;
      border-radius: 4px;
      background-color: #fff
    }

    .container .form .el-form-item {
      margin-bottom: 2.5rem
    }

    .container .form .input-group {
      display: flex;
      align-items: center;
      width: 100%
    }

    .container .form .input-group .input {
      width: 100%
    }

    .container .form .input-group .input .el-input__inner {
      border-right: none!important;
      border-radius: 4px 0 0 4px
    }

    .container .form .input-group .send-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0 1.2rem;
      border-radius: 0 4px 4px 0;
      font-size: 1.5rem;
      color: #fff;
      white-space: nowrap;
      background-color: #662282;
      cursor: pointer
    }

    .container .form .input-group .disabled-btn {
      color: #464646!important;
      background-color: #e2e2e2!important
    }

    .container .form .submit-btn {
      width: 100%;
      height: 5rem;
      line-height: 5rem;
      box-sizing: border-box;
      padding: 0 2rem;
      margin-top: 2rem;
      border-radius: 4px;
      font-size: 1.7rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(180deg, #B62283 0%, #722283 100%);
      cursor: pointer
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      width:100%
    }

    .container .form {
      width: 100%;
      box-sizing: border-box;
      padding: 2rem;
      border-radius: 4px;
      background-color: #fff
    }

    .container .form .el-form-item {
      margin-bottom: 2.2rem
    }

    .container .form .input-group {
      display: flex;
      align-items: center;
      width: 100%
    }

    .container .form .input-group .input {
      width: 100%
    }

    .container .form .input-group .input .el-input__inner {
      border-right: none!important;
      border-radius: 4px 0 0 4px
    }

    .container .form .input-group .send-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0 1.2rem;
      border-radius: 0 4px 4px 0;
      font-size: 1.5rem;
      color: #fff;
      white-space: nowrap;
      background-color: #662282;
      cursor: pointer
    }

    .container .form .input-group .disabled-btn {
      color: #464646!important;
      background-color: #e2e2e2!important
    }

    .container .form .submit-btn {
      width: 100%;
      height: 4.6rem;
      line-height: 4.6rem;
      box-sizing: border-box;
      padding: 0 2rem;
      margin-top: 1rem;
      border-radius: 4px;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(180deg, #B62283 0%, #722283 100%);
      cursor: pointer
    }
  }
  .user-title {
    color: #662282;
    font-family: 'Roboto';
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 32px;
    margin-bottom: 32px;
  }

  .block-part {
    margin-top: 20px;
    width: 113px;
    min-height: 88px;
    padding: 20px 0 20px 0;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }

  .footer-menu {
    position: fixed;
    max-width: 600px;
    width: 100%;
    height: 87px;
    bottom: 0px;
    left: 0px;
    z-index: 999;
    padding: 22px 20px 11px 20px;

    background: #FFFFFF;
    box-shadow: 0px -20px 77px -15px rgba(0, 0, 0, 0.13);
    border-radius: 40px 40px 0px 0px;
  }

  .footer-mest {
    margin-top: 100px;
  }

  .block-part p {
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    margin-bottom: 7px;

    color: #020202;
  }

  .block-part h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    text-align: center;
    line-height: 26px;


    color: #45863A;
  }

  .footer-items {
    display: flex;
    justify-content: space-between;
  }
  .footer-items a {
    text-decoration: none;
  }
  .footer-items .item {
    height: 54px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }


  .footer-items .item svg {
    width: 22px;
    height: 22px;
    display: block;
    margin: 0 auto;
  }

  .footer-items .item p {
    font-family: 'Roboto';
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 0;
    text-align: center;
    margin-top: 13px;

    color: #A9A7A7;
  }

  .block-sec {
    width:80%;
    padding: 30px 55px 30px 55px;
  }
  .container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x)* .5);
    padding-left: calc(var(--bs-gutter-x)* .5);
    margin-right: auto;
    margin-left: auto;
  }
  .container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .block_sec_flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .switcher {
    width: 40px;
    height: 21px;
    background: #D9D9D9;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 20px;
    transition: .2s ease;
  }
  .switcher {
    width: 53px;
    height: 27px;
  }
  @media only screen and (min-width: 1024px) {
    .mask {
      position: fixed;
      bottom: 0px;
      left: 0px;
      z-index: 99;
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
      padding: 4rem 0px;
      background-color: rgba(0, 0, 0, 0.3);
      overflow: auto;
    }

    .mask .modal {
      width: 50%;
      margin: 0px auto;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
    }

    .mask .modal .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 2rem;
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-header .modal-title {
      max-width: 100%;
      font-size: 1.8rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .mask .modal .modal-header .close {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 4rem;
      max-width: 4rem;
      height: 3.2rem;
      margin-left: 4rem;
      border-radius: 4px;
      background-color: rgb(234, 84, 85);
      cursor: pointer;
    }

    .mask .modal .modal-header .close i {
      font-size: 1.7rem;
      color: rgb(255, 255, 255);
    }

    .mask .modal .modal-body {
      min-height: 8rem;
      box-sizing: border-box;
    }

    .mask .modal .modal-footer {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      box-sizing: border-box;
      padding: 2rem;
      border-top: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-footer .confirm-btn {
      height: 3.5rem;
      line-height: 3.5rem;
      box-sizing: border-box;
      padding: 0px 1.6rem;
      border-radius: 4px;
      font-size: 1.6rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      background-color: rgb(251, 194, 65);
      cursor: pointer;
    }
  }

  .s-content {
    font-size: 16px;
    line-height: 1.5
  }
  .svg-icon {
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .wrap {
    width: 100%;
    padding: 10px
  }

  .wrap .item-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap
  }

  .wrap .item {
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 24px 8px rgba(0, 0, 0, .1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px;
    cursor: pointer;
    font-size: 29px;
    transition: all .3s ease;
    padding: 15px;
    min-width: fit-content;
  }

  .wrap .item img {
    width: 43.5px;
    height: 43.5px
  }

  .wrap .item .svg-icon {
    transition: all .3s ease
  }

  .wrap .item:hover {
    box-shadow: 0 0 24px 8px rgba(0,0,0,.2)
  }
  @media only screen and (max-width: 1024px) {
    .mask {
      position: fixed;
      bottom: 0px;
      left: 0px;
      z-index: 99;
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
      padding: 2rem 1rem;
      background-color: rgba(0, 0, 0, 0.3);
      overflow: auto;
    }

    .mask .modal {
      width: 50%;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
      margin: 0 auto;
      min-width: fit-content;
    }

    .mask .modal .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem;
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-header .modal-title {
      max-width: 100%;
      font-size: 1.7rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .mask .modal .modal-header .close {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 3.6rem;
      max-width: 3.6rem;
      height: 2.8rem;
      margin-left: 2rem;
      border-radius: 4px;
      background-color: rgb(234, 84, 85);
      cursor: pointer;
    }

    .mask .modal .modal-header .close i {
      font-size: 1.7rem;
      color: rgb(255, 255, 255);
    }

    .mask .modal .modal-body {
      min-height: 8rem;
      box-sizing: border-box;
    }

    .mask .modal .modal-footer {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem;
      border-top: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-footer .confirm-btn {
      height: 3.5rem;
      line-height: 3.5rem;
      box-sizing: border-box;
      padding: 0px 1.6rem;
      border-radius: 4px;
      font-size: 1.5rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      background-color: rgb(251, 194, 65);
      cursor: pointer;
    }
  }
  .justify-content-center {
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .flex-ver {
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
  }
  .flex-ver {
    grid-gap: 13px;
  }
  .input-verify-new {
    border-radius: 10px;
    border: 0.5px solid #CDCDCD;
    color: #000;
    font-style: normal;
    font-weight: 500;
    line-height: 125%;
    align-items: flex-end;
    text-align: center;
    display: flex;
    appearance: textfield;
    width: 15%;
    max-width: 40px;
  }
  .purple {
    color: #662282;
    font-size: 2rem;
    padding: 0;
    margin: 0;
  }
  .center {
    text-align: center;
  }
  .sec_desc_1 {
    color: rgba(0, 0, 0, 0.70);
    font-family: 'Roboto';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    margin-top: 15px;
    text-align: center;
    margin-bottom: 1rem;
  }
  .input-verify-new {
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 125%;
  }
  .centered {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .main-btnNew {
    pointer-events: auto;
    box-sizing: border-box;
    margin: 0;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    display: inline-block;
    border-radius: 10px;
    background: linear-gradient(180deg, #B62283 0%, #722283 100%);
    padding: 14px 30px 14px 30px;
    text-align: center;
    color: #fff;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin-top: 15px;
  }
  .outlined:hover {
    background: linear-gradient(180deg, #B62283 0%, #722283 100%) !important;
    color: #fff !important;
  }
  .main-btnNew1 {
    background:#fff;
    color: #B62283;
    border: 1px solid #B62283;
  }
  .input-verify:focus {
    border: 1px solid #B32283;
    outline: none;
  }
  .und {
    color: #000;
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 97.222%;
    margin: 0;
  }
  .qr-mest {
    width: 176px;
    height: 156px;
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 23px;
    background: #F2F2F2;
    border-radius: 10px;
  }
  .flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .verf {
    color: #000;
    font-family: 'Roboto';
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 97.222%;
    margin: 0;
  }
  .helplink a {
    color: #0C8AFF;
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 97.222%;
    text-align: right;
  }
  @media only screen and (max-width: 768px) {
    .block-sec {
      width: 80%;
      padding: 15px 25px 15px 25px;
    }
  }

</style>



