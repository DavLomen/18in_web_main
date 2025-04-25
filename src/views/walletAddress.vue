<template>
  <div class="HomePage" id="app">
    <UserHeader></UserHeader>
    <div class="app-wrapper" style="width: calc(100% - 25rem);">
      <div class="page-header">
        <div class="page-title">{{$t('walletAddress[0]')}}</div>
        <div class="el-dropdown">
          <div class="right-icon el-dropdown-selfdefine   " aria-haspopup="list" aria-controls="dropdown-menu-7800"
               role="button" tabindex="0"><i class="el-icon-user"></i></div>
        </div>
      </div>
      <div  class="container">
        <form  class="el-form form el-form--label-top">
          <div  class="el-row">
<!--            <div  class="el-col el-col-24">-->
<!--              <div  class="el-form-item is-required is-no-asterisk"><label class="el-form-item__label">-->
<!--                {{$t('bankCard.label[0]')}}-->
<!--                </label>-->
<!--                <div class="el-form-item__content">-->
<!--                  <div  class="el-input"><input type="text" autocomplete="off" v-model.trim="UserInfo.realname" :readonly="UserInfo.is_realname==1?true:false"-->
<!--                                                class="el-input__inner">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
            <div  class="el-col el-col-24">
              <div  class="el-form-item is-required is-no-asterisk"><label for="type"
                                                                                             class="el-form-item__label">{{$t('walletAddress[3]')}}</label>
                <div class="el-form-item__content">
<!--                  <div  class="el-select">-->
<!--                    <div class="el-input el-input&#45;&#45;suffix">-->
<!--                      <select class="el-input__inner" v-model="postData.bank_name">-->
<!--                        <option :value="item" v-for="item in bankList" :key="item">{{item}}</option>-->
<!--                      </select>-->
<!--                      <span-->
<!--                      class="el-input__suffix"><span class="el-input__suffix-inner"><i-->
<!--                      class="el-select__caret el-input__icon el-icon-arrow-up"></i>-->
<!--                      </span></span>-->
<!--                    </div>-->
<!--                  </div>-->
                  <div class="el-select" @click="showSelect = !showSelect">
                    <div class="el-input el-input--suffix">
                      <div  class="el-input__inner">
                        <div>
                          <img v-if="selectTypes.qrcode !=''" :src="`./static/images/${selectTypes.bank}.png`" style="width: 20px;vertical-align: middle;display: inline-block;">
                          <span>{{selectTypes.bank==''?$t('wallet.placeholder[0]'):selectTypes.bank}}</span>
                        </div>
                        <div class="selectShow" v-show="showSelect">
                          <div  :value="item.id" v-for="(item,index) in InitData.BanksList" :key="index" @click="chageBank(item)">
                            <img :src="`./static/images/${item.bank}.png`" style="width: 20px;vertical-align: middle;display: inline-block;">
                            {{item.bank}}
                          </div>
                        </div>
                      </div>
                      <span
                        class="el-input__suffix"><span class="el-input__suffix-inner"><i
                        class="el-select__caret el-input__icon el-icon-arrow-up"></i></span>
                        </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div  class="el-col el-col-24">
              <div  class="el-form-item is-required is-no-asterisk"><label for="address" class="el-form-item__label">{{$t('walletAddress[0]')}}</label>
                <div class="el-form-item__content">
                  <div  class="el-input"><input type="text" autocomplete="off" v-model.trim="postData.card_no"
                                                                         :placeholder="$t('walletAddress[4]')"
                                                                         class="el-input__inner">
                    </div>
                </div>
              </div>
            </div>
<!--            <div  class="el-col el-col-24">-->
<!--              <div  class="el-form-item is-required is-no-asterisk"><label for="code"-->
<!--                                                                                             class="el-form-item__label">Verification-->
<!--                Code</label>-->
<!--                <div class="el-form-item__content">-->
<!--                  <div  class="input-group">-->
<!--                    <div  class="input el-input"><input type="text" autocomplete="off"-->
<!--                                                                                 placeholder="Email verification code"-->
<!--                                                                                 class="el-input__inner">-->
<!--                      </div>-->
<!--                    <div  class="send-btn">Get Code</div>-->
<!--                  </div></div>-->
<!--              </div>-->
<!--            </div>-->
            <div  class="el-col el-col-24">
              <div  class="el-form-item is-no-asterisk">
                <div class="el-form-item__content">
                  <div  class="submit-btn" @click="onSubmit">{{$t('walletAddress[5]')}}</div></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import UserHeader from '@/components/UserHeader'
  export default {
    name: 'loginPassword',
    components: {
      UserHeader
    },
    data() {
      return {
        showSelect:false,
        selectTypes:{
          id:"",
          bank:""
        },
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,
        postData: {
          name: '',
          bank_id: '',
          bank_name: '',
          card_no: '',
          // bank_branch_name: ''
        },
        showPicker: false,
        bankList: '',
        showAdd: false,
        isSubmit: false,
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      this.selectTypes = this.InitData.BanksList[0];
      this.postData.bank_id = this.selectTypes.bank_id;
      this.postData.bank_name = this.selectTypes.bank;
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      chageBank(item) {
        this.postData.bank_id = item.bank_id;
        this.postData.bank_name = item.bank;
        this.selectTypes = item;
      },
      onSubmit() {
        this.postData.name = this.UserInfo.realname
        if(!this.postData.bank_name){
          this.$Dialog.Toast(this.$t('bankCard.placeholder[0]'));
          return;
        }
        if(!this.postData.card_no){
          this.$Dialog.Toast(this.$t('walletAddress[4]'));
          return;
        }
        this.isSubmit = true;
        this.$Model.AddBankCard(this.postData,data=>{
          this.isSubmit = false;
          if(data.code==1){
            this.postData.card_no = '';
            this.showAdd = false
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

  @media only screen and (min-width: 1024px) {
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
      background-color: rgb(13,110,253);
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
      border-radius: 10px;
      font-size: 1.7rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background: rgb(124 58 237) ;
      cursor: pointer
    }
  }

  @media only screen and (max-width: 1024px) {
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
      background-color: rgb(13,110,253);
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
      border-radius: 10px;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background: rgb(124 58 237) ;
      cursor: pointer
    }
  }
  .selectShow {
    position: absolute;
    top: 5rem;
    left: 0px;
    width: -webkit-fill-available;
    background: #fff;
    z-index: 999;
    padding: 0 2rem;
    border: 1px solid #ccc;
  }
</style>


