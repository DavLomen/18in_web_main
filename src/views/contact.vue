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
                  <img :src="'./static/images/c1.png?t=1'" style="width:100%" />
                </div>
                <div class="content">
                  <h5 class="title">{{$t('contact[7]')}}</h5>
                  <p class="caption">{{$t('contact[8]')}}</p>
                  <p class="mt-2"><a href="mailto:info@ripplecoinmining.com">info@ripplecoinmining.com</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-item">
                <div class="icon">
                  <img :src="'./static/images/c2.png?t=1'" style="width:100%" />
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
                  <img :src="'./static/images/c3.png?t=1'" style="width:100%" />
                </div>
                <div class="content">
                  <h5 class="title">{{$t('contact[12]')}}</h5>
                  <p class="caption">{{$t('contact[13]')}}</p>
                  <p class="mt-2">Flat 1 27 Bolton Gardens, London, SW5 0AQ, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map-area">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.2309730116544!2d-0.19072102371562522!3d51.490628811928836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f8a79e3fe83%3A0xb2c92463565fa054!2zMjcgQm9sdG9uIEdhcmRlbnMsIExvbmRvbiBTVzUgMEFR6Iux5Zu9!5e0!3m2!1szh-CN!2shk!4v1746636495517!5m2!1sen!2sus" width="600" height="450" style="border:0;width: 100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
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


  @media only screen and (min-width: 1024px) {
    .container {
      width:100%;
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
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .form .code-box {
      display: flex;
      align-items: center;
      width: 100%
    }

    .container .form .code-box .code-img {
      min-width: 7.5rem;
      max-width: 7.5rem;
      height: 2.5rem;
      margin-left: 1rem;
      cursor: pointer
    }

    .container .form .submit-btn {
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      box-sizing: border-box;
      padding: 0 1rem;
      margin-top: 1.3rem;
      border-radius: 4px;
      font-size: 1.3rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background:#fd790d;;
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
      padding: 1rem;
      border-radius: .4rem;
      background-color: #efefef
    }

    .container .form .form-title {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }


    .container .form .code-box {
      display: flex;
      align-items: center;
      width: 100%
    }

    .container .form .code-box .code-img {
      min-width: 7.5rem;
      max-width: 7.5rem;
      height: 2.5rem;
      margin-left: 1rem;
      cursor: pointer
    }

    .container .form .submit-btn {
      width: 100%;
      height: 2.6rem;
      line-height: 2.6rem;
      box-sizing: border-box;
      padding: 0 1rem;
      margin-top: 1rem;
      border-radius: 4px;
      font-size: 1.2rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background:#fd790d;;
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
      font-size: 2rem;
      font-weight: 700;
      color: #fff
    }

    .container .other .other-item .info {
      max-width: 100%;
      font-size: 1.4rem;
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
    padding: 1.2625rem;
    border: 1px solid #cbcbcb;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    text-align: center;
    height: 100%;
    font-size: 1.1rem;
  }
  .contact-item h5 {
    font-size: 1.2rem;
    font-weight: bolder;
  }
  .contact-item .content {
    margin-top: 1rem;
  }
  .contact-item .icon {
    width: 75px;
    height: 75px;
    font-size: 1.25rem;
    margin: 0 auto;
  }
  .d-card i, .contact-item .content a, .blog-btn, .investor-item .investor-content ul li a, .site-nav-tabs .nav-item .nav-link, .ratings i.far, .text-p {
    color: #3b3b3b;
    text-decoration: none;
  }
  .map-area {
    filter: grayscale(1);
  }
  .el-form-item__label {
    font-size: 1.2rem !important;
  }
</style>


