<template>
  <footer class="footer-section" style="background:#fff;color: #000;font-size: 1rem;">
    <div class="container">
      <div class="section-space-sm">
        <div class="row">
          <div class="col-lg-3 col-md-9 me-auto">
            <div class="footer-item mb-5 mb-lg-0">
              <a href="javascript:;" @click="$router.push('/')" class="logo-link footer-logo-link">
                <img class="logo-dark logo-img" :src="'./static/images/img/logo.png'" alt="logo">
              </a>
              <p class="my-4 footer-para" v-html="$t('foot[0]')"></p>
              <!--              <ul class="styled-icon">-->
              <!--                <li>-->
              <!--                  <a href="https://twitter.com/simpleminers">-->
              <!--                    <em class="icon ni ni-twitter"></em>-->
              <!--                  </a>-->
              <!--                </li>-->
              <!--                <li>-->
              <!--                  <a href="https://www.facebook.com/simpleminers/">-->
              <!--                    <em class="icon ni ni-facebook-f"></em>-->
              <!--                  </a>-->
              <!--                </li>-->
              <!--                <li>-->
              <!--                  <a href="https://www.instagram.com/simpleminers/">-->
              <!--                    <em class="icon ni ni-instagram"></em>-->
              <!--                  </a>-->
              <!--                </li>-->
              <!--                <li>-->
              <!--                  <a href="mailto:info@simpleminers.com">-->
              <!--                    <em class="icon ni ni-emails"></em>-->
              <!--                  </a>-->
              <!--                </li>-->
              <!--              </ul>-->

            </div>
          </div>
          <div class="col-lg-8">
            <div class="row g-gs">
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="footer-item">
                  <h5 class="mb-4">{{$t('foot[1]')}}</h5>
                  <ul class="list-item list-item-s1">
                    <li>
                      <a href="javascript:;" @click="$router.push('/FAQ')">{{$t('foot[17]')}}</a></li>
                    <li>
                      <a href="javascript:;" @click="$router.push('/affiliate')">{{$t('foot[5]')}}</a></li>
                    <li>
                      <a href="javascript:;" @click="$router.push('/contact')">{{$t('foot[7]')}}</a></li>
                    <li>
                      <a href="javascript:;" @click="$router.push('/article/web3/detail')">{{$t('foot[14]')}}</a></li>
                    <li>
                      <a href="javascript:;" @click="$router.push('/article/cryptocurrency/detail')">{{$t('foot[13]')}}</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="footer-item">
                  <h5 class="mb-4">{{$t('foot[16]')}}</h5>
                  <ul class="list-item list-item-s1">
                    <li>
                      <a href="javascript:;" @click="$router.push('/about')">{{$t('foot[3]')}}</a></li>
                    <li>
                      <a href="javascript:;" @click="$router.push('/article/terms/detail')">{{$t('foot[10]')}}</a></li>
                    <li>
                      <a href="javascript:;" @click="$router.push('/article/cookie/detail')">{{$t('foot[18]')}}</a></li>
                    <li>
                      <a href="javascript:;" @click="$router.push('/welfare')">{{$t('foot[19]')}}</a></li>
                    <li>
                      <a href="javascript:;" @click="$router.push('/article/privacy/detail')">{{$t('foot[9]')}}</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="footer-item">
                  <h5 class="mb-4">{{$t('foot[7]')}}</h5>
                  <ul class="list-item list-item-s1">
                    <li>
                      <img class="" :src="'./static/images/customer_service_icon.png'" alt="location" style="width:30px;">
                      {{$t("i18nlan.aboutUs.text8")}}
                    </li>
                    <li>
                      <img class="" :src="'./static/images/location.ff05dc4d.png'" alt="location" style="width:30px;">
                      {{$t("i18nlan.aboutUs.text5")}}
                    </li>
                    <li>
                      <img class="" :src="'./static/images/mail.jpg'" alt="location" style="width:30px;margin-right:10px;">
                      <a href="mailto:info@sixmining.com">info@sixmining.com</a></li>
                    <li>
                      <ul class="styled-icon mt-2">
                        <li>
                          <a href="https://x.com/sixmining">
                            <img class="s-icon" :src="'./static/images/twitter.6352d995.png'" alt="twitter"></a>
                        </li>
                        <li>
                          <a href="https://web.facebook.com/SIXMining">
                            <img class="s-icon" :src="'./static/images/facebook1.18f06c79.png'" alt="facebook"></a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/@gdmining">
                            <img class="s-icon" :src="'./static/images/youtb.c72e893b.png'" alt="ins"></a>
                        </li>
                        <li>
                          <a href="">
                            <img class="s-icon" :src="'./static/images/Tele.png'" alt="ins"></a>
                        </li>
                      </ul>
                      <ul  class="styled-icon">
                        <li>
                          <div>
                            <img
                              class="s-app" style="display: block !important;" @click="downloadApp('andriod')" :src="'./static/images/d_android.bd8613ec.png'" alt="android-download">
                              <img class="s-app" @click="downloadApp('ios')" :src="'./static/images/d_ios.fc9d4780.png'" alt="ios-download">
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="bg-white-slim my-0">
      <div class="copyright-wrap d-flex flex-wrap py-3 align-items-center justify-content-between">
        <p class="footer-copy-text py-2" style="margin: 0 auto;">
          <a href="https://find-and-update.company-information.service.gov.uk/company/11622909" target="_blank">
            <img :src="'./static/images/img/about.d15e9c77.png'" width="60"></a>{{$t('foot[11]',{WT:InitData.setting.web_title})}}</p>
        <ul class="list-item list-item-s1 list-item-inline"></ul>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    components: {

    },
    props: [],
    data() {
      return {
        canClick:true,
        serviceList:[],
      }
    },
    computed: {
      // messageInfo() {
      //   return this.$store.state.MessageInfo;
      // }
    },
    watch: {
      // 'InitData.serviceList'(data){
      //   if(data){
      //     this.serviceList = this.InitData.serviceList
      //   }
      // },
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
      downloadApp (app) {
        if(app == 'ios')
        {
          this.$Util.OpenUrl(this.InitData.setting.app_down_ios)
        }
        else
        {
          this.$Util.OpenUrl(this.InitData.setting.app_down_android)
        }
      },
    }
  }
</script>
<style scoped>
  .markss {
    display: flex;
  }
  .markss a img{
    display: block;
    width: 100px;
    margin-right: 10px;
  }
  .styled-icon li {
    display: inline-block;
  }
  .s-app{
    width: 8rem;
    margin-bottom: 10px;
  }
  .footer-section a{
    color: #000000;
  }
  .list-item li a:hover {
    color: #000000;
  }
  .s-icon {
    color: #1c2b46;
    width: 2.1rem;
    height: 2.1rem;
    line-height: 2.313rem;
    border-radius: 50%;
    background-color: #fff;
    display: block;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
    text-align: center;
    transition: all .3s;
  }
  .logo-img {
    height: 30px
  }
  @media (min-width: 576px) {
    .logo-img {
      height: 40px;
    }
  }
  .section-space-sm,.section-space-sm-t {
    padding-top: 50px
  }

  .section-space-sm,.section-space-sm-b {
    padding-bottom: 50px
  }
  @media (min-width: 768px) {
    .section-space-sm, .section-space-sm-b {
      padding-bottom: 70px;
    }
  }
  @media (min-width: 768px) {
    .section-space-sm, .section-space-sm-t {
      padding-top: 70px;
    }
  }
  ol, ul {
    padding-left: 0;
  }

</style>
