<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div class="left"><img :src="'./static/image/whitelogo.png'"
                                                class="footer-img">
        <div class="footer-content">{{$t('foot[0]',{WT:InitData.setting.web_title})}}
        </div>
        <div class="socials">
          <a href="https://web.facebook.com/profile.php?id=61557216611681" target="blank_">
            <img :src="'./static/images/ft3.png'"  class="social-header">
          </a>
          <a href="https://twitter.com/MARmining1" target="blank_">
            <img :src="'./static/images/ft1.png'"  class="social-header">
          </a>
        </div>
      </div>
      <div class="link-box">
        <div class="link-list">
          <div class="label">{{$t('foot[1]')}}</div>
          <div class="link-item" @click="$router.push('/product')">{{$t('foot[2]')}}</div>
          <div class="link-item" @click="$router.push('/about')">{{$t('foot[3]')}}</div>
          <div class="link-item" @click="$router.push('/FAQ')">{{$t('foot[4]')}}</div>
          <div class="link-item" @click="$router.push('/affiliate')">{{$t('foot[5]')}}</div>
<!--          <div class="link-item" @click="$router.push('/blog')">{{$t('foot[6]')}}</div>-->
<!--          <div class="link-item" @click="$router.push('/contact')">{{$t('foot[7]')}}</div>-->
        </div>
        <div class="link-list">
          <div class="label">{{$t('foot[8]')}}</div>
          <div class="link-item" @click="$router.push('/pt/privacy/detail')">{{$t('foot[9]')}}</div>
          <div class="link-item" @click="$router.push('/pt/terms/detail')">{{$t('foot[10]')}}</div>
<!--          <div class="link-item" @click="$router.push('/Bounty')">$1M Bounty</div>-->
<!--          <div class="link-item" @click="$router.push('/article/cryptocurrency/detail')">{{$t('cryptocurrency[0]')}}</div>-->
        </div>
        <div class="link-list">
          <div class="label">{{$t('foot[7]')}}</div>
          <div class="link-item"><i class="el-icon-location-information"></i>
            71-75 Shelton Street Covent Garden, London, United Kingdom
          </div>
          <div class="link-item"><i class="el-icon-message"></i>
            info@marmining.com
          </div>
<!--          <div class="link-item">-->
<!--            <van-icon name="smile-comment-o" />-->
<!--            {{$t('about[20]')}}-->
<!--          </div>-->
<!--          <div class="link-item">-->
<!--            <a href="https://twitter.com/ffsdvaw32300" target="_blank" class="icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAWlJREFUOE+t1L9L1WEUx/HXvUE4VGI2JJSkm0NTSyiUiiCCQ46tUX+A2OTkmINBczk0uUQ0iKiLTk7i0JI4FBoEEQ03Ui5iEoee7+XL7f7wC/cs3y/P83ne55zP86Okg1EqwLqEWTxGD7axgCMM4FrAQrSHR/jSAr6Oybr57/iI2xgPWD8O8TWJPzUAPsXrJonOsKxcPg5YH74l4Qle4BV+5Ra/x0yLqjeis8yzLYzmxD/wDgHZx5sGLebZ3ZE8YFdxDyu42ST7KS43mfuDXlQyzyJ7tBiDRSO8Dt9lba5hqigl6T9kfmawwXRuYouLxrPkaa2yAIxhHhMFaD9xC9V8m/Efp/tlAVBI5/Jr6q9TwAJ6kdjBSF7Y6G4O4TmetCB+xjDiOtUiYGWc4wbup8rGW4B2MV0P+udZ15UHqr/f4k6b3sLsRSyl5P/Jszbj+zC9HHdxPVVcwQE2sZoOdtOcRd6ztpvSUdhfbXU+9eXAqNoAAAAASUVORK5CYII=" style="height: 2rem;"></a>-->
<!--            <a href="https://www.youtube.com/@SunMiner." target="_blank" class="icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAtpJREFUSEvFll1IU2EYx593x33vTKcLM+d0TWgDC0oRm11IpomUN5MuWhcRpKBX0baLEGYghErE9MI+iChzXTi9tq0p1HQ3KsOIUU5MCVukW24rtrOPE2c40TDOdgZ6bg6c5//7/9/nOefwvggO8UKHmAVHHoYG9XpBsUgkPCGVFvwiSda004kX8nGh+9tXWFha4oq5XN73ra14lCDi0XickOA4EQiFgrfa2oim+qZQY21V8FhDw2+EELl3crudtTZcuPJh3q0PhcNVGIbhyWSSQ5L7tBlNHCEEQj4/JpNK/bhI9EmjUlnMk5PPKTgVdlGjuTk9N/ciIzcGovbmS/ettne9qKO6mj2+/OVHIBiSMPDJCGHnYfC050EJqiwvP+tdW1vMiMpBVCmXX0O3tVrts4kJaw4+GaFqhaIHnVYqOz+urDymI2QyGajVarDb7XTSA+tqheIlOi6RGHyBwACdg1KpBK/XC6Ojo2A0GsHn89Eh++q4QGBFIh7PFI5EeunIdBil8/v90NfXB0NDQ5BIJOjQVL2spNiOOByOiSCIrMLS7m63G7q6usDlctEGctlsZ05h6QQqcGRkhC7QhXgcjinCsDOPxwPd3d0wMzNDF0TVXUgqEpk2w+Gsxri9vZ16Z2azGWKxWCZBlOY9OiWXGz+vr/fTEekPxGKxgMFggI2NDTrk3/oUaqmp6Zyan6f9z0pLS0GlUoHD4cg2JK1/g+7qdO0Px8bGmTpkwfWjiYFH57TGOwtZQEylOkQuL3MrNOf9az83BUxd6DhqH5MUFspT+9mN5uaO1zbbEzqIab2lvn5wanbWuLtT6662XrfaHPpoNHoGADCmxjsciRCKYBjmaayre/XW6TRTzw868OQDgBAAxDt3PgBwAYBNLQLDMBYuELCSiUS8qKAgdrKsjCzKz4+y8vL+XK6tjS+uroZKxOLgveHhEABE9i76yE9XOU7w//ihdvYXUAIAGM2RtI8AAAAASUVORK5CYII=" style="height: 2rem;"></a>-->
<!--            <a href="https://web.facebook.com/profile.php?id=61551646877387" target="_blank" class="icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAnJJREFUeF7tW71OHDEQnvE+AW1EECiRAlnvtYgi0lGhPEDS0VGlSN4g5Lq8ARUNJTSUiIZT8gL3M5tLCqRIEQpd8gK3E1mAgoLX593Nrby3s7XHM/N5PPY3O0Zo+Yct9x8EAImAliPgvQXiOH6ulIqZOQ4ZM0RMsyxL0zT94mPnTAC01l1m/oiImz4ThjIGET8z83si6rtscgKgtf4AAPuhOFXSjh4RGT+sXy4AWusNAPAKo5KG1SX2Sym1NRqNvtkUugA4A4Cduqycs54DInrjDYDWugMAwzkbVdv0zPw9TdO1IgDsAsBRbRbWo2iFiH78q8q6BQJJfj1m/oqI1zPw6Xom6m3biRAqADtEdO4TGAUWqxkAKKXW8zK2DZBFA+CQiPZ8Vv5uzEIBgIivx+PxSWsBAADrPnUBslARkAeA4SMOEBbqFLBGwC0AF0W2hmVsI04BAcB2WZEIuMkBsgUkB1RDIJgkaEpUvTxfHDkgT6Rxx2CfiLarLeZf6SZehAQAiQDZApIDWp0EXQeAcAHhApZ/eUKGhAwJGxQ6LPUAKYhIRUhKYhVrCMFUhOQq7EBAuIBwAeECDxsbhQwJGRIy1B4y5Dgi67sJJknyipmPK968ghKPomh5OBxeeTVKmrcBpu8+KA+qGXNJRE+9W2XNwCRJPjHzi2p6g5HObb9zdYv/j8QTBALT6fTRZDL5WSgCzODbP69vAWApCE/KGVHuwcSdrk6n8yzLsnfM/BIRV8vZUK+UaY9XSp1GUdQbDAa/Xdpnvhm6L6y1fgwAT+p1p7A2k/AetMXnzVIIgMKmNEBAAGjAIs3VRImAucLbgMn/ADQo+lAzcSCsAAAAAElFTkSuQmCC" style="height: 2rem;"></a>-->
<!--          </div>-->
<!--          <div class="markss">-->
<!--            <a href="javascript:;" @click="downloadApp('andriod')" target="blank_" class="block">-->
<!--              <img :src="'./static/images/download/androidf.png'"></a>-->
<!--            <a @click="downloadApp('ios')" id="downloadappIos" target="blank_" class="mt-10 block">-->
<!--              <img :src="'./static/images/download/iphonef.png'"></a>-->
<!--          </div>-->
        </div>
      </div>
    </div>
    <div class="copyright">
      <a href="https://find-and-update.company-information.service.gov.uk/company/11129715">
        <img :src="'./static/image/about.png'"></a>
      <div style="padding: 0 10px">{{$t('foot[11]',{WT:InitData.setting.web_title})}}</div>
      <img :src="'./static/image/secure.png'">
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
</style>
