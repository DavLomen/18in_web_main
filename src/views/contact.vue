<template>
  <div class="HomePage">
    <Header></Header>
    <div class="app-wrapper">
      <div class="container">
        <div ></div>
        <form class="el-form form el-form--label-top">
          <div class="form-title">{{$t('contact[0]')}}</div>
          <div class="el-row" style="margin-left: -5px; margin-right: -5px;">
            <div class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-12"
                 style="padding-left: 5px; padding-right: 5px;">
              <div class="el-form-item is-required is-no-asterisk"><label for="name"
                                                                          class="el-form-item__label">{{$t('contact[1]')}}</label>
                <div class="el-form-item__content">
                  <div class="el-input"><!----><input type="text" autocomplete="off" placeholder="" v-model="mname"
                                                      class="el-input__inner"><!----><!----><!----><!----></div><!---->
                </div>
              </div>
            </div>
            <div class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-12"
                 style="padding-left: 5px; padding-right: 5px;">
              <div class="el-form-item is-required is-no-asterisk"><label for="email"
                                                                          class="el-form-item__label">{{$t('contact[2]')}}</label>
                <div class="el-form-item__content">
                  <div class="el-input"><!----><input type="text" autocomplete="off" placeholder="" v-model="memail"
                                                      class="el-input__inner"><!----><!----><!----><!----></div><!---->
                </div>
              </div>
            </div>
            <div class="el-col el-col-24" style="padding-left: 5px; padding-right: 5px;">
              <div class="el-form-item is-required is-no-asterisk"><label for="title" class="el-form-item__label">{{$t('contact[3]')}}</label>
                <div class="el-form-item__content">
                  <div class="el-input"><!----><input type="text" autocomplete="off" placeholder="" v-model="title"
                                                      class="el-input__inner"><!----><!----><!----><!----></div><!---->
                </div>
              </div>
            </div>
            <div class="el-col el-col-24" style="padding-left: 5px; padding-right: 5px;">
              <div class="el-form-item is-required is-no-asterisk"><label for="content" class="el-form-item__label">{{$t('contact[4]')}}</label>
                <div class="el-form-item__content">
                  <div class="el-textarea"><textarea autocomplete="off" placeholder="" class="el-textarea__inner" v-model="message"
                                                     style="min-height: 126.6px; height: 126.6px;"></textarea><!---->
                  </div><!----></div>
              </div>
            </div>
            <div class="el-col el-col-24" style="padding-left: 5px; padding-right: 5px;">
              <div class="el-form-item is-required is-no-asterisk"><label for="captcha" class="el-form-item__label">{{$t('contact[5]')}}</label>
                <div class="el-form-item__content">
                  <div class="code-box">
                    <div class="el-input"><!----><input type="text" autocomplete="off" placeholder="" v-model="code"
                                                        class="el-input__inner"><!----><!----><!----><!----></div>
                    <img
                      :src="codeImg" @click="getCode"
                      class="code-img"
                    />

                  </div><!----></div>
              </div>
            </div>
            <div class="el-col el-col-24" style="padding-left: 5px; padding-right: 5px;">
              <div class="el-form-item is-no-asterisk"><!---->
                <div class="el-form-item__content" @click="subimt">
                  <div class="submit-btn" >{{$t('contact[6]')}}</div><!----></div>
              </div>
            </div>
          </div>
        </form>
        <!--        <div class="other">-->
        <!--          <div class="other-item">-->
        <!--            <div class="icon"><i class="el-icon-location-information"></i></div>-->
        <!--            <div class="info">50 Liverpool Street Salford, Manchester, United Kingdom, M5 4LT</div>-->
        <!--          </div>-->
        <!--          <div class="other-item">-->
        <!--            <div class="icon"><i class="el-icon-message"></i></div>-->
        <!--            <div class="info">info@tokencoin.com</div>-->
        <!--          </div>-->
        <!--        </div>-->
        <div style="display:block;margin: 0 auto;">
          <div class="row gy-4 justify-content-center mt-5">
            <div class="col-md-4">
              <div class="contact-item">
                <div class="icon">
                  <img :src="'./static/img/c1.png'" style="width:100%" />
                </div>
                <div class="content">
                  <h5 class="title">{{$t('contact[7]')}}</h5>
                  <p class="caption">{{$t('contact[8]')}}</p>
                  <p class="mt-2"><a href="mailto:info@all4mining">info@all4mining</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-item">
                <div class="icon">
                  <img :src="'./static/img/c2.png'" style="width:100%" />
                </div>
                <div class="content">
                  <h5 class="title">{{$t('contact[9]')}}</h5>
                  <p class="caption">{{$t('contact[10]')}}</p>
                  <p class="mt-2"><a href="tel:0">{{$t('contact[11]')}}</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-item">
                <div class="icon">
                  <!--                  <i class="fas fa-map-marked-alt"></i>-->
                  <img :src="'./static/img/c3.png'" style="width:100%" />
                </div>
                <div class="content">
                  <h5 class="title">{{$t('contact[12]')}}</h5>
                  <p class="caption">{{$t('contact[13]')}}</p>
                  <p class="mt-2">Techspace Aldgate East, 32-38 Leman Street, London, England, E1 8EW</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      <div class="map-area">-->
<!--        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.329109402493!2d-2.272516123296495!3d53.48044917232851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae21723964c3%3A0x94b359f1549c810e!2zNTAgTGl2ZXJwb29sIFN0LiwgU2FsZm9yZCBNNSA0TFToi7Hlm70!5e0!3m2!1szh-CN!2s!4v1696951400991!5m2!1sen!2sus" height="450" style="border:0;width: 100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>-->
<!--      </div>-->
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  export default {
    name: 'contact',
    components: {
    },
    data() {
      return {
        mname:'',
        memail:'',
        title:'',
        message:'',
        code:'',
        code_rand:'',
        codeImg:'',
      }
    },
    computed: {
    },
    watch: {
    },
    created() {
      this.getCode()
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      getCode() {
        this.code_rand = new Date().getTime()
        this.codeImg = this.ApiUrl+'/api/Account/code?code_rand='+this.code_rand
      },
      subimt() {
        let that = this;
        if (that.mname == '') {
          return;
        }
        if (that.memail == '') {
          return;
        }
        if (that.title == '') {
          return;
        }
        if (that.message == '') {
          return;
        }
        if (that.code == '') {
          return;
        }
        this.$Model.makeMessage({mname:that.mname,memail:that.memail,title:that.title,message:that.message,code:that.code,code_rand:that.code_rand}, function (data) {

        });
      }
    }
  }
</script>
<style scoped>


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

  @keyframes tobig-a41390f8 {
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
    padding: 0 1rem;
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
    .container {
      box-sizing: border-box;
      padding: 8rem 3rem
    }

    .container .form {
      box-sizing: border-box;
      padding: 3rem;
      margin: 0 auto;
      border-radius: 1rem;
      background-color: #efefef
    }

    .container .form .form-title {
      width: 100%;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .form .el-form-item {
      margin-bottom: 1.5rem
    }

    .container .form .code-box {
      display: flex;
      align-items: center;
      width: 100%
    }

    .container .form .code-box .code-img {
      min-width: 13.5rem;
      max-width: 13.5rem;
      height: 2.5rem;
      margin-left: 1rem;
      cursor: pointer
    }

    .container .form .submit-btn {
      width: 100%;
      height: 5rem;
      line-height: 5rem;
      box-sizing: border-box;
      padding: 0 2rem;
      margin-top: 1.5rem;
      border-radius: 4px;
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg,#6baaf7,#072f77);
      cursor: pointer
    }

    .container .other {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1300px;
      margin: 4rem auto 0
    }

    .container .other .other-item {
      display: flex;
      align-items: center;
      flex: 1;
      box-sizing: border-box;
      padding: 2rem;
      border-radius: 8px;
      background-color: #efefef
    }

    .container .other .other-item:not(:last-child) {
      margin-right: 2rem
    }

    .container .other .other-item .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 5.5rem;
      max-width: 5.5rem;
      height: 5.5rem;
      margin-right: 2rem;
      border-radius: 50%;
      background-color: red
    }

    .container .other .other-item .icon i {
      font-size: 2.6rem;
      font-weight: 700;
      color: #fff
    }

    .container .other .other-item .info {
      max-width: 100%;
      font-size: 1.5rem;
      color: #000;
      word-wrap: break-word
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      width:100%;
      box-sizing: border-box;
      padding: 3rem 1rem
    }

    .container .form {
      width: 100%;
      box-sizing: border-box;
      padding: 2rem;
      border-radius: .8rem;
      background-color: #efefef
    }

    .container .form .form-title {
      width: 100%;
      margin-bottom: 2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .form .el-form-item {
      margin-bottom: 1.2rem
    }

    .container .form .code-box {
      display: flex;
      align-items: center;
      width: 100%
    }

    .container .form .code-box .code-img {
      min-width: 13.5rem;
      max-width: 13.5rem;
      height: 2.5rem;
      margin-left: 1rem;
      cursor: pointer
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
      background-image: linear-gradient(90deg,#6baaf7,#072f77);
      cursor: pointer
    }

    .container .other {
      width: 100%;
      margin: 3rem 0 0
    }

    .container .other .other-item {
      display: flex;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 1rem;
      border-radius: 6px;
      background-color: #efefef
    }

    .container .other .other-item:not(:last-child) {
      margin-bottom: 1rem
    }

    .container .other .other-item .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 4rem;
      max-width: 4rem;
      height: 4rem;
      margin-right: 1rem;
      border-radius: 50%;
      background-color: red
    }

    .container .other .other-item .icon i {
      font-weight: 700;
      color: #fff
    }

    .container .other .other-item .info {
      max-width: 100%;
      color: #000;
      word-wrap: break-word
    }
  }
  .mt-5 {
    margin-top: 3rem!important;
  }
  .justify-content-center {
    justify-content: center!important;
  }
  .contact-item {
    background-color: #F8F6FF;
    padding: 1.5625rem;
    border: 1px solid #cbcbcb;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    text-align: center;
    height: 100%;
    font-size: 1.3rem;
  }
  .contact-item h5 {
    font-size: 1.5rem;
    font-weight: bolder;
  }
  .contact-item .content {
    margin-top: 1.25rem;
  }
  .contact-item .icon {
    width: 75px;
    height: 75px;
    margin: 0 auto;
  }
  .d-card i, .contact-item .content a, .blog-btn, .investor-item .investor-content ul li a, .site-nav-tabs .nav-item .nav-link, .ratings i.far, .text-p {
    color: #3b3b3b;
    text-decoration: none;
  }
  .map-area {
    filter: grayscale(1);
  }
</style>


