<template>
  <div class="HomePage" id="app">
    <Header></Header>
    <section class="user-panel-section" style="padding: 20px 0px;">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="sidebar-head d-flex flex-wrap align-items-center justify-content-between">
              <h3 class="sidebar-head-title"></h3>
            </div>
            <div class="sidebar sidebar-user-mobile">
              <a href="javascript:;" class="icon-btn menu-toggler-user-close">
                <em class="ni ni-cross"></em>
              </a>
              <div class="sidebar-widget">
                <ul class="user-nav">
                  <li class="">
                    <a aria-current="page" href="javascript:;" @click="$router.push('/dashboard')" class="router-link-active router-link-exact-active">
                      <em class="ni me-2 ni-puzzle"></em>{{$t('header[1]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/transactions')">
                      <em class="ni me-2 ni-file-text"></em>{{$t('header[2]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/deposit')">
                      <em class="ni me-2 ni-money"></em>{{$t('header[3]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;"  @click="$router.push('/withdraw')">
                      <em class="ni me-2 ni-exchange"></em>{{$t('header[4]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/MyPackages')">
                      <em class="ni me-2 ni-file-text"></em>{{$t('header[5]')}}</a>
                  </li>
<!--                  <li class="">-->
<!--                    <a href="javascript:;" @click="$router.push('/contact')">-->
<!--                      <em class="ni me-2 ni-puzzle"></em>{{$t('header[6]')}}</a>-->
<!--                  </li>-->
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/affiliates')">
                      <em class="ni me-2 ni-money"></em>{{$t('header[7]')}}</a>
                  </li>
                  <li class="active">
                    <a href="javascript:;" @click="$router.push('/loginPassword')">
                      <em class="ni me-2 ni-account-setting"></em>{{$t('header[8]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/message')">
                      <em class="ni me-2 ni-megento"></em>{{$t('head[13]')}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-10 ps-xl-5">
            <div  class="Deposit">
              <div class="user-panel-title-box"><h2 >{{$t('head[14]')}}</h2></div>
              <div  class="">
                <ul class="nav nav-tabs nav-tabs-s1 nav-tabs-mobile-size" id="myTab" role="tablist">
                  <li  class="nav-item" role="presentation" @click="$router.push('/loginPassword')"><button  class="nav-link " data-bs-toggle="tab" data-bs-target="#AccountPassword" type="button">
                    {{$t('userInfo.default[10]')}}</button></li>
                  <li  class="nav-item" role="presentation" @click="$router.push('/payPassword')"><button  class="nav-link active" data-bs-toggle="tab" data-bs-target="#AccountPassword" type="button">
                    {{$t('userInfo.default[11]')}}</button></li>
                  <li  class="nav-item" role="presentation" @click="$router.push('/walletAddress')"><button  class="nav-link " data-bs-toggle="tab" data-bs-target="#AccountPassword" type="button">
                    {{$t('usdt[3]')}}</button></li>
                </ul>
                <div id="AccountPasswordUpdateSection" class="profile-setting-panel-wrap mt-4">
                  <div  class="form">
                    <div class="el-col el-col-24" v-if="UserInfo.is_fund_password==1">
                      <div class="el-form-item is-required is-no-asterisk"><label for="originalPassword"
                                                                                  class="el-form-item__label">{{$t('userInfo.label[3]')}}</label>
                        <div class="el-form-item__content">
                          <div class="el-input el-input--suffix">
                            <input type="password" autocomplete="off" placeholder="" id="originalPassword" class="el-input__inner" v-model.trim="postData.o_payword">
                            <span class="el-input__suffix"><span class="el-input__suffix-inner">
                                        </span>
                                    </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="el-col el-col-24">
                      <div class="el-form-item is-required is-no-asterisk"><label for="password" class="el-form-item__label">{{$t('userInfo.label[4]')}}</label>
                        <div class="el-form-item__content">
                          <div class="el-input el-input--suffix">
                            <input type="password" autocomplete="off" placeholder="" id="password" class="el-input__inner" v-model.trim="postData.n_payword">
                            <span class="el-input__suffix"><span class="el-input__suffix-inner">
                                        </span>
                                    </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="el-col el-col-24">
                      <div class="el-form-item is-no-asterisk"><label for="confirmPassword" class="el-form-item__label">{{$t('userInfo.label[5]')}}</label>
                        <div class="el-form-item__content">
                          <div class="el-input el-input--suffix">
                            <input type="password" autocomplete="off" placeholder="" id="confirmPassword" class="el-input__inner" v-model.trim="postData.r_payword">
                            <span class="el-input__suffix"><span class="el-input__suffix-inner">
                                        </span>
                                    </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  class="row gy-3 but-wrap mt-3">
                      <div  class="col-12 col-sm-6 justify-content-lg">
                        <button @click="setUserInfo" class="btn btn-dark w-100" style="max-width: 300px;">{{$t('submit')}}</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
  export default {
    name: 'loginPassword',
    components: {
    },
    data() {
      return {
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,
        postData: {

        }
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      setUserInfo() {
        this.$Model.SetUserInfo(this.postData,data=>{
          if(data.code==1){
            this.postData = {}
          }
        });
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
    background-color: #fbc241
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
    background-color: #fbc241!important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: #fbc241!important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #fbc241!important
  }

  .el-pagination.is-background .el-pager li:not(.active):hover {
    color: #fbc241!important
  }

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
    color: #fbc241;
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: #fbc241
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
    height: 3.5rem;
    line-height: 3.5rem;
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
    color: #fbc241
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #fbc241!important;
    border-color: #fbc241!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #fbc241!important
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
      background-color: #fbc241;
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
      background-image: linear-gradient(90deg,#fe9500,#fade88);
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
      background-color: #fbc241;
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
      background-image: linear-gradient(90deg,#fe9500,#fade88);
      cursor: pointer
    }
  }
  .form{
    background: #f8f9fc !important;
    border-radius: 0.5rem;
    padding: 1.3125rem!important;
  }
  #AccountPasswordUpdateSection {
    background: #f8f9fc;
    border-radius: 8px;
    padding: 1.25rem;
  }
</style>


