<template>
  <footer class="footer-section bg-cus on-dark" style="margin-top: 4rem">
    <div class="d-none d-lg-block">
      <div class=" w-100">
        <img :src="'./static/images/img/separator-top.svg'" alt="" class="img-fluid w-100">
      </div>
      <div class="container" v-if="$route.path !== '/register'">
        <div class="row mt-4 justify-content-around">
          <div class="col-24">
            <div class="box el-mx-auto-90 data-flex">
              <div class="left flex-1 text-center">
                <div class="label el-content-text-h1 fw-600">{{ $t("i18n.Footer.text1") }}</div>
                <div class="option_button_12 mtb-10 el-content-text-s1" style="background: rgba(11, 110, 253, 1);" @click="$router.push('/register')">{{ $t("i18n.Footer.text2") }}</div>
              </div>
              <div class="flex-1">
                <img class="img-fluid" :src="'./static/images/to_register.png'" alt="">
              </div>
            </div>
          </div>
          <!-- <div class="col-lg-3 col-md-6 col-sm-12">
              <h6>Newsletter</h6>
              <p class="col-6 mt-4" style="line-height: 1.8;">2000+ Our clients are subscribe Around the World</p>

          </div> -->
          <div class="data-flex">
            <div class="flex-1">
              <div class="">
                <div class="row">
                  <div>
                    <img style="width: 100px;object-fit: contain;" :src="'./static/images/img/logo.png'" alt="" class="img-fluid col-lg-2 col-5">
                  </div>
                  <h6 class="text-ls" style="line-height: 1.8;">{{ $t('i18n.Footer.text3') }}</h6>
                </div>
                <div class="separator-animated animated-true mt-5"></div>
              </div>
            </div>
          <div class="row text-center" style="flex: 3;">
            <div class="col-lg-3  col-md-6 col-sm-12 ">
              <div>
                <h5>Explore</h5>
              </div>
              <div class="fs-7">
                <div class="mt-2">
                  <a href="javascript:;" @click="$router.push(`/contracts`)" class="text-ls fw-bold">Contracts</a>
                </div>
                <div class="mt-2">
                  <a href="javascript:;" @click="$router.push(`/about`)" class="text-ls fw-bold">About</a>
                </div>
                <div class="mt-2">
                  <a href="javascript:;" @click="$router.push(`/FAQ`)" class="text-ls fw-bold">FAQs</a>
                </div>
                <div class="mt-2">
                  <a href="javascript:;" @click="$router.push(`/affiliate`)" class="text-ls fw-bold">Affiliate</a>
                </div>
                <div class="mt-2">
                  <a href="javascript:;" @click="$router.push(`/blog`)" class="text-ls fw-bold">Blogs</a>
                </div>
                <div class="mt-2">
                  <a href="javascript:;" @click="$router.push(`/teach`)" class="text-ls fw-bold">Tutorial</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div>
                <h5>Useful Links</h5>
              </div>
              <div>
                <div class="mt-2 fs-7">
                  <a href="javascript:;" @click="$router.push(`/article/privacy/detail`)" class="text-ls fw-bold">Privacy and Policy</a>
                </div>
                <div class="mt-2 fs-7">
                  <a href="javascript:;" @click="$router.push(`/article/terms/detail`)" class="text-ls fw-bold">Terms of Services</a>
                </div>
                <div class="mt-2 fs-7">
                  <a href="javascript:;" class="text-ls fw-bold">AML Policy</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div>
                <h5>Contact</h5>
              </div>
              <div>
                <div class="mt-2 fs-7 data-flex">
                  <i class="bi bi-envelope fs-6 me-2"></i><span class="text-ls fw-bold">info@RIMining.com</span>
                </div>
                <div class="mt-2 fs-7 data-flex">
                  <i class="bi bi-geo-alt fs-6 me-2"></i><p class="text-ls fw-bold"> 9 Redwood Close Gretton, Cheltenham, Gloucester, Gloucestershire GL54 5JW</p>
                </div>
                <div class="d-flex mt-2">
                  <!--<a href="/" target="_blank">-->
                  <!--    <div class="social-link">-->
                  <!--        <i class="bi bi-linkedin fs-4 text-dhs"></i>-->
                  <!--    </div>-->
                  <!--</a>-->
                  <a href="https://www.facebook.com/xxx" target="_blank">
                    <div class="social-link">
                      <i class="bi bi-facebook fs-4 text-dhs"></i>
                    </div>
                  </a>
                  <!--<a href="/" target="_blank">-->
                  <!--    <div class="social-link">-->
                  <!--        <i class="bi bi-instagram fs-4 text-dhs"></i>-->
                  <!--    </div>-->
                  <!--</a>-->
                  <a href="https://x.com/xxx" target="_blank">
                    <div class="social-link">
                      <i class="bi bi-twitter-x fs-4 text-dhs"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div class=" col-12 border-top border-hhs mt-5">
        <div class="contract text-center mt-4 data-flex" style="align-items: center;">
          <a href="https://find-and-update.company-information.service.gov.uk/company/09261900">
            <div style="width: 50px; height: 50px;cursor: pointer;"></div>
          </a>
          <p class="text-bhs fw-bold">© 2014-2025 RIMining All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    components: {},
    props: [],
    data() {
      return {
        canClick: true,
        serviceList: [],
        showTop:true,
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
      if (localStorage.getItem("pageIndex") == '/FAQ') {
        this.showTop = false;
      }else if (localStorage.getItem("pageIndex") == '/login') {
        this.showTop = false;
      }else if (localStorage.getItem("pageIndex") == '/register') {
        this.showTop = false;
      }
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      downloadApp() {
        var ua = navigator.userAgent;
        if (/(iPod|iPhone|iPad)/.test(ua)) {
          this.$Util.OpenUrl(this.InitData.setting.app_down_ios);
        } else {
          this.$Util.OpenUrl(this.InitData.setting.app_down_android);
        }
      },
    }
  }
</script>
<style scoped>
  .separator-animated {
    position: relative;
    overflow: hidden;
    height: 2px;
    width: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(111, 100, 233, 0.6) 50%, rgba(0, 0, 0, 0) 100%);
  }
  .separator-animated.animated-true::before {
    content: "";
    position: absolute;
    width: 3%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%,  rgba(111, 100, 233, 0.6) 50%, rgba(0, 0, 0, 0) 100%);
    backdrop-filter: blur(20px);
    animation: separateline 5s ease-in-out infinite;
  }
  @keyframes separateline {
    0% {
      left: 0;
    }

    100% {
      left: 110%;
    }
  }
  .social-link {
    width: 40px;
    height: 40px;
    border: 1px solid var(--color-border);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center ;
    justify-content: center;
    transition: 300ms ease;
  }
  .social-link:hover i {
    background: linear-gradient(160deg, #12B5DE -30%, #7130C3 30%, #FF3BD4 90%);
    -webkit-background-clip: text;
    color: transparent;
  }
  .container .box{
    background: rgba(198, 166, 98, 1);
    padding: 100px 40px;
    border-radius: 12px;
    margin: 40px auto 100px auto;
    position: relative;
  }
  .box .img-fluid{
    position: absolute;
    width: 35%;
    object-fit: contain;
    top: 0;
  }
</style>
