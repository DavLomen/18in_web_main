<template>
  <footer class="footer" ref="foot">
    <div v-if="showF" class="footer-top">
      <div class="container">
        <div class="row justify-content-between g-4">
          <div class="col-md-6 col-lg-2">
            <h4 class="mt-0">{{$t('foot[1]')}}</h4>
            <!-- <div class="link-item" @click="$router.push('/product')">{{$t('foot[2]')}}</div> -->
            <div class="link-item" @click="$router.push('/about')">{{$t('foot[3]')}}</div>
<!--            <div class="link-item" @click="$router.push('/FAQ')">{{$t('foot[4]')}}</div>-->
<!--            <div class="link-item" @click="$router.push('/Bounty')">{{$t('bounty')}}</div>-->
            <div class="link-item" @click="$router.push('/affiliate')">{{$t('foot[5]')}}</div>
            <div class="link-item" @click="$router.push('/blog')">{{$t('foot[6]')}}</div>
<!--            <div class="link-item" @click="$router.push('/contact')">{{$t('foot[7]')}}</div>-->
          </div>
          <div class="col-md-6 col-lg-2">
            <h4 class="mt-0">{{$t('foot[8]')}}</h4>
            <div class="link-item" @click="$router.push('/article/privacy/detail')">{{$t('foot[9]')}}</div>
            <div class="link-item" @click="$router.push('/article/terms/detail')">{{$t('foot[10]')}}</div>
<!--            <div class="link-item" @click="$router.push('/Bounty')">{{$t('bounty')}}</div>-->
            <div class="link-item" @click="$router.push('/article/cryptocurrency/detail')">{{$t('cryptocurrency[0]')}}</div>
            <div class="link-item" @click="$router.push('/article/web3/detail')">{{$t('cryptocurrency[1]')}}</div>
          </div>
          <div class="col-md-6 col-lg-2">
            <h4 class="mt-0">{{$t('foot[7]')}}</h4>
            <div class="link-item"><i class="el-icon-location-information"></i>
              Flat 75 Cheyne Court, London, United Kingdom, SW3 5TT
            </div>
            <div class="link-item"><i class="el-icon-message"></i>
              info@all4mining
            </div>
            <div class="link-item">
              <van-icon name="smile-comment-o" />
              {{$t('contact[10]')}}
            </div>
            <div class="link-item">
              <a href="https://twitter.com/kkminer77" target="_blank" class="icon">
                <img :src="'./static/img/ft1.png'" style="height: 2rem;">
              </a>
<!--              <a href="https://www.youtube.com/channel/UC6K45FIaqQT_x0CrFyN7Oqw" target="_blank" class="icon">-->
<!--                <img :src="'./static/images/ft2.png'" style="height: 2rem;">-->
<!--              </a>-->
              <a href="https://web.facebook.com/non.nandi.9" target="_blank" class="icon">
                <img :src="'./static/img/ft3.png'" style="height: 2rem;">
              </a>

            </div>
<!--            <div class="markss" style="margin-top: 5px">-->
<!--              <a href="javascript:;" @click="downloadApp('andriod')" target="blank_" class="block">-->
<!--                <img :src="'./static/images/download/androidf.png?t=1'"></a>-->
<!--              <a @click="downloadApp('ios')" id="downloadappIos" target="blank_" class="mt-10 block">-->
<!--                <img :src="'./static/images/download/iphonef.png?t=1'" ></a>-->
<!--            </div>-->
          </div>
          <div class="col-md-6 col-lg-6">
            <a href="javascript:;" class="t-link logo">
              <img :src="'./static/img/logo.png?t=2'" style="width: 200px;margin-bottom: 10px">
            </a>
            <p class="t-short-para">
              {{$t('foot[0]',{WT:InitData.setting.web_title})}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-top" v-if="showT">
      <div class="container">
        <div class="col-md-6 col-lg-6">
          <a href="javascript:;" class="t-link logo">
            <img :src="'./static/img/logo.png?t=2'" style="width: 200px;margin-bottom: 10px">
          </a>
          <p class="t-short-para">
            {{$t('foot[0]',{WT:InitData.setting.web_title})}}
          </p>
        </div>
      </div>
    </div>
    <div class="footer-flex footer-copyright">
      <a href="https://find-and-update.company-information.service.gov.uk/company/10401415"><img style="width: 50px" :src="'./static/img/ffabout.png'"></a>
      <div v-html="$t('foot[11]',{WT:InitData.setting.web_title,WS:InitData.setting.reg_url})"></div>
<!--      <img :src="'./static/img/ffsafe.png'">-->
    </div>
  </footer>
</template>

<script>
import tr from "../i18n/tr";

export default {
  name: 'Footer',
  components: {

  },
  props: [],
  data() {
    return {
      canClick:true,
      serviceList:[],
      showF:true,
      showT:false,
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
    if (localStorage.getItem("pageIndex") == '/dashboard') {
      this.showF = false;
    }
    if (localStorage.getItem("pageIndex") == '/setting') {
      this.showF = false;
      this.showT = true;
    }
    if (localStorage.getItem("pageIndex") == '/affiliates') {
      this.showF = false;
    }
    if (localStorage.getItem("pageIndex") == '/MyPackages') {
      this.showF = false;
    }
    if (localStorage.getItem("pageIndex") == '/transactions') {
      this.showF = false;
    }
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
  .footer-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 15px;
    padding-bottom: 2rem;
  }
  .markss {
    display: flex;
  }
  .markss a img{
    display: block;
    width: 100px;
    margin-right: 10px;
  }
  .icon {
    margin-right: 10px;
  }
  .link-item {
    margin-bottom: 5px;
    cursor: pointer;
  }
  .footer-copyright {
    border-top: 1px solid #eff2f7;
    padding-top: 10px;
    margin-top: 10px;
  }
</style>
