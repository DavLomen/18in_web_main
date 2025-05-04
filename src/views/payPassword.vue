<template>
  <div class="HomePage" id="app">
    <Header></Header>
    <div class="container">
      <div class="el-row">
        <div class="el-col el-col-5">
          <UserHeader></UserHeader>
        </div>
        <div class="el-col el-col-18 el-col-xs-24 el-col-lg-18 el-col-xl-18">
          <section data-v-19c9d02c="" data-v-23f21a9a="" class="section pt-0" style="padding-bottom: 0px; margin-top: 50px;">
            <div class="row justify-content-center mt-4">
              <div class="col-md-8">
                <div class="card custom--card">
                  <form class="register">
                    <div class="card-body">
                      <div v-if="UserInfo.is_fund_password==1" class="form-group hover-input-popup">
                        <label for="passwordo">{{$t('password[0]')}}</label>
                        <input id="passwordo" type="password" v-model.trim="postData.o_payword" class="form--control form-control"   name="password"   autocomplete="off">
                      </div>
                      <div class="form-group hover-input-popup">
                        <label for="password">{{$t('password[1]')}}</label>
                        <input id="password" v-model.trim="postData.n_payword" type="password" class="form--control form-control"   name="password"   autocomplete="off">
                      </div>
                      <div class="form-group">
                        <label for="password_confirmation">{{$t('password[2]')}}</label>
                        <input id="password_confirmation"  v-model.trim="postData.r_payword" type="password" class="form--control form-control"    autocomplete="off">
                      </div>
                      <!--                <div class="form-group">-->
                      <!--                  <label>Verification Code</label>-->
                      <!--                  <div class="input-group">-->
                      <!--                    <input type="text" name="code" maxlength="6" placeholder="Email verification Code" onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" class="form-control form&#45;&#45;control" autocomplete="off">-->
                      <!--                    <span class="input-group-text get_code"> Get Code </span>-->
                      <!--                  </div>-->
                      <!--                </div>-->
                    </div>
                    <div class="card-footer">
                      <button type="submit" class="btn btn--base  btn-block btn-dark" @click="setUserInfo">{{$t('password[3]')}}</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import UserHeader from '@/components/UserHeader'
  export default {
    name: '/dashboard/loginPassword',
    components: {
      UserHeader
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
            this.postData = {};
            this.$Model.GetUserInfo();
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
    background-color: #1ab5ff!important;
  }

  .el-pagination.is-background .el-pager li:not(.active):hover {
    color: #fff!important
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

</style>


