<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div class="left"><img v-lazy="'./static/image/logo1.png'"
                                                class="footer-img">
        <div class="footer-content">{{$t('foot[0]',{WT:InitData.setting.web_title})}}
        </div>
<!--        <div class="socials">-->
<!--          <a href="https://www.youtube.com/@ARKMining/" target="blank_"><img src="https://arkmining.com/asset/img/sections/elements/65dc699d68ee41708943773.png" class="social-header"></a>-->
<!--          <a href="https://twitter.com/ARKMining_" target="blank_"><img src="https://arkmining.com/asset/img/sections/elements/64ea1c5b10cf41693064283.png" class="social-header"></a>-->
<!--        </div>-->
      </div>
      <div class="link-box">
        <div class="link-list">
          <div class="label">{{$t('about[0]')}}</div>
          <div class="link-item" @click="$router.push('/product')">{{$t('foot[2]')}}</div>
          <div class="link-item" @click="$router.push('/about')">{{$t('foot[3]')}}</div>
          <div class="link-item" @click="$router.push('/FAQ')">{{$t('foot[4]')}}</div>
          <div class="link-item" @click="$router.push('/affiliate')">{{$t('foot[5]')}}</div>
          <div class="link-item" @click="$router.push('/article/cryptocurrency/detail')">{{$t('cryptocurrency[0]')}}</div>
          <div class="link-item" @click="$router.push('/article/web3/detail')">{{$t('cryptocurrency[1]')}}</div>
<!--          <div class="link-item" @click="$router.push('/blog')">{{$t('foot[6]')}}</div>-->
<!--          <div class="link-item" @click="$router.push('/contact')">{{$t('foot[7]')}}</div>-->
        </div>
        <div class="link-list">
          <div class="label">{{$t('foot[8]')}}</div>
          <div class="link-item" @click="$router.push('/article/privacy/detail')">{{$t('foot[9]')}}</div>
          <div class="link-item" @click="$router.push('/article/terms/detail')">{{$t('foot[10]')}}</div>
          <div class="link-item" @click="$router.push('/article/cookie/detail')">{{$t('foot[12]')}}</div>
          <div class="link-item" @click="$router.push('/blog')">{{$t('foot[6]')}}</div>
          <div class="link-item" @click="$router.push('/contact')">{{$t('foot[7]')}}</div>
          <div class="link-item" @click="$router.push('/Bounty')">{{$t('bounty')}}</div>
<!--          <div class="link-item" @click="$router.push('/article/cryptocurrency/detail')">{{$t('cryptocurrency[0]')}}</div>-->
        </div>
        <div class="link-list">
          <div class="label">{{$t('foot[7]')}}</div>
          <div class="link-item" style="display: flex;align-items: center;">
            <img v-lazy="'./static/image/footconnect.png'" style="border-radius: 5px;width: 30px;margin-right: 10px">
            {{$t('appDown[0]')}}
          </div>
<!--          <div class="link-item" style="display: flex;align-items: center;">-->
<!--            <i class="el-icon-phone"></i>+44 7533 766543-->
<!--          </div>-->
          <div v-if="InitData.setting.email!=undefined && InitData.setting.email!=null && InitData.setting.email!=''" class="link-item"><i class="el-icon-message"></i>
            {{InitData.setting.email}}
          </div>
          <div v-if="InitData.setting.email2!=undefined && InitData.setting.email2!=null && InitData.setting.email2!=''" class="link-item"><i class="el-icon-message"></i>
            {{InitData.setting.email2}}
          </div>
          <div class="link-item"><i class="el-icon-location-information"></i>
            Amba House 3rd Floor, 15 College Road, Harrow, Middlesex, United Kingdom, HA1 1BA
          </div>
          <div class="link-item markss" style="margin-top: 5px">
            <a @click="downloadApp('google')" id="google" target="blank_" class="mt-10 block">
              <img v-lazy="'./static/image/google.png?t=1'" style="border-radius: 5px"></a>
            <a @click="downloadApp('ios')" id="downloadappIos" target="blank_" class="mt-10 block">
              <img v-lazy="'./static/image/iphone.png?t=1'" style="border-radius: 5px"></a>
            <a href="javascript:;" @click="downloadApp('andriod')" target="blank_" class="block">
              <img v-lazy="'./static/image/android.png?t=1'" style="border-radius: 5px"></a>
          </div>
          <div class="link-item">
            <div class="shareweb" style="padding: 0">
              <div style="margin-bottom: 5px">Our social media</div>
              <div style="margin-bottom: 5px">There's a lot to see there,too</div>
              <div>

                <a href="https://x.com/KSDMiner" target="_blank">
                  <img v-lazy="'./static/image/share2.png?t=1'" style="width: 30px;margin-right: 5px" />
                </a>
                <a href="https://www.youtube.com/channel/UCgrgNH1uVUg5_XNLILk9_Dg" target="_blank">
                  <img v-lazy="'./static/image/share4.png?t=1'" style="width: 30px;margin-right: 5px" />
                </a>
                <a href="https://t.me/bitcoinminers365" target="_blank">
                  <img v-lazy="'./static/image/share3.png?t=1'" style="width: 30px;" />
                </a>
                <a href="https://web.facebook.com/KSDMiner" target="_blank">
                  <img v-lazy="'./static/image/share1.png?t=1'" style="width: 30px;margin-right: 5px" />
                </a>
              </div>
            </div>
          </div>


<!--          <div class="markss">-->
<!--            <a href="javascript:;" @click="downloadApp('andriod')" target="blank_" class="block">-->
<!--              <img v-lazy="'./static/images/download/androidf.png'"></a>-->
<!--            <a @click="downloadApp('ios')" id="downloadappIos" target="blank_" class="mt-10 block">-->
<!--              <img v-lazy="'./static/images/download/iphonef.png'"></a>-->
<!--          </div>-->
        </div>
      </div>
    </div>
    <div class="copyright">
      <a href="https://find-and-update.company-information.service.gov.uk/company/09651110">
        <img v-lazy="'./static/image/sblogo.png?t=1'" class="aboutf"></a>
      <div style="padding: 0 10px">{{$t('foot[11]',{WT:InitData.setting.web_title})}}</div>
      <img v-lazy="'./static/image/secure.png'">
    </div>
  </div>
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
      else if (app == 'andriod') {
        this.$Util.OpenUrl(this.InitData.setting.app_down_android);
      } else {
        this.$Util.OpenUrl(this.InitData.setting.app_down_google);
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
  .socials {
    display: flex;
    margin-top: 21px;
    align-items: center;
    grid-gap: 10px;
  }
  .socials img {
    width: 27px;
    height: 27px;
    margin-left: 4px;
  }
  .social-header {
    width: 27px;
    height: 27px;
    margin-left: 4px;
    margin-right: 5px;
  }
  .aboutf {
    width: 50px;
  }
  .aboutf:hover {
    background: #ecdc48;
  }
</style>
