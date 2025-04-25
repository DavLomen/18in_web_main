<template>
  <footer class="main-footer">
    <div class="container1">
      <div class="row space-between">
        <div class="footer-col" style="padding-left: 4rem">
          <a href="javascript:;"  @click="$router.push('/')">
            <img :src="'./static/image/dashboard.png?t=2'" style="height: 50px;" alt="footer logo">
          </a>
          <p> {{$t('foot[0]')}}</p>
          <a  class="button button-primary" style="max-width: 225px; margin: 32px 0;background-color:#7c3aed;border: none;" href="javascript:;" @click="$router.push('/register')">{{$t('head[2]')}}</a>
        </div>
        <div class="footer-col" style="text-transform: uppercase;">
          <div style="font-weight: bolder;font-size: 20px">{{$t('foot[1]')}} </div>
          <nav class="menu-footer-product-container"><ul id="menu-footer-product" class="footer-menu-1">
            <li id="menu-item-22232" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22232"><a href="javascript:;" @click="$router.push('/contract')">{{$t('foot[2]')}}</a></li>
            <li id="menu-item-27698" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-27698"><a href="javascript:;" @click="$router.push('/about')">{{$t('foot[3]')}}</a></li>
            <li id="menu-item-7526" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7526"><a href="javascript:;" @click="$router.push('/FAQ')">{{$t('foot[4]')}}</a></li>
            <li id="menu-item-18843" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18843"><a href="javascript:;" @click="$router.push('/affiliate')">{{$t('foot[5]')}}</a></li>
            <li id="menu-item-18844" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18843"><a href="javascript:;" @click="$router.push('/blog')">{{$t('foot[6]')}}</a></li>
          </ul></nav> </div>
        <div class="footer-col" style="text-transform: uppercase;">
          <div style="font-weight: bolder;font-size: 20px">{{$t('foot[8]')}}</div>
          <nav class="menu-footer-resources-container"><ul id="menu-footer-resources" class="footer-menu-2">
            <li id="menu-item-3691" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3691"><a href="javascript:;" @click="$router.push('/pt/privacy/detail')">{{$t('foot[9]')}}</a></li>
            <li id="menu-item-607" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-607"><a href="javascript:;" @click="$router.push('/pt/terms/detail')">{{$t('foot[10]')}}</a></li>
            <li id="menu-item-781" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-781">
              <a href="mailto:info@paladinmining.com" class="link-item">{{$t('foot[7]')}}</a>
            </li>
<!--            <li id="menu-item-770" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-770"><a href="javascript:;">Sitemap</a></li>-->
          </ul></nav> </div>
        <div class="footer-col">
<!--          <div class="mark-wrapper">-->
<!--            <div class="map-mark">-->
<!--              <a class="map-link" target="_blank" href="https://www.google.com/maps/place/ECOS/@40.1763218,44.4944656,15z/data=!4m10!1m2!2m1!1secos+!3m6!1s0x406abd8ee99c93d9:0x13397e18950121bf!8m2!3d40.1763218!4d44.51249!15sCgRlY29zkgEQY29ycG9yYXRlX29mZmljZeABAA!16s%2Fg%2F11rylky0hn?entry=ttu">-->
<!--                <img :src="'./static/images/map-mark.svg'" alt="">-->
<!--              </a>-->
<!--            </div>-->
<!--            <span class="tooltip__map-mark">33 St. Andrew's Square, Surbiton, England, KT6 4EG</span>-->
<!--          </div>-->
<!--          <div>Office</div>-->
<!--          <p>CRYPTO KEY</p>-->
          <div class="contact-wrapper" style="    max-width: 30rem;">
            <div class="t-short-para">
              PALADIN RISK MANAGEMENT LTD
            </div>
            <div class="t-short-para">
              {{$t('about[6]')}}：10356130
            </div>
            <div class="t-short-para">
              {{$t('about[7]')}}：Private company limited by shares
            </div>
            <div class="t-short-para">
              {{$t('about[8]')}}：Suite 4 Castle Farm, Clifton Road, Deddington, United Kingdom
            </div>
            <div class="t-short-para">
              {{$t('about[12]')}}：2 September 2016
            </div>
<!--            <div>-->
<!--              <a target="_blank" style="padding: 8px 10px;border-radius: 5px;font-size:15px;color:#ffffff;background: #ef6820;" href="https://find-and-update.company-information.service.gov.uk/company/11630850/filing-history" class="btn main-btn mt-4">{{$t('about[10]')}}</a>-->
<!--              <a target="_blank" style="padding: 8px 10px;border-radius: 5px;font-size:15px;color:#ffffff;margin-left:1rem;background: #ef6820;" href="./static/companies_house_document.pdf?t=2" class="btn main-btn mt-4">{{$t('about[11]')}}</a>-->
<!--            </div>-->
<!--            <a  href="tel:+18889020738" target="_self" class="contact-link" itemprop="url">-->
<!--              <img :src="'./static/images/phone-icon.svg'" alt="phone icon">-->
<!--              <span class="app-footer__support-nav-item-title">-->
<!--+1 (888) 902-0738 </span>-->
<!--            </a>-->
            <a  href="mailto:info@paladinmining.com" target="_self" class="contact-link" itemprop="url">
<!--              <img :src="'./static/images/support-icon.svg'" alt="support icon">-->
              <van-icon name="envelop-o" />
              <span class="app-footer__support-nav-item-title">info@paladinmining.com</span>
            </a>
          </div>
          <div class="social-wrapper">
            <ul>
<!--              <li>-->
<!--                <a  href="https://t.me/EcosCloudMining" target="_blank">-->
<!--                  <img :src="'./static/images/telegram.svg'" alt="telegram">-->
<!--                </a>-->
<!--              </li>-->
              <li>
                <a  href="https://x.com/paladinmining" target="_blank">
                  <img :src="'./static/images/twitter.svg'" alt="">
                </a>
              </li>
<!--              <li>-->
<!--                <a  href="https://www.linkedin.com/company/ecos-am" target="_blank">-->
<!--                  <img :src="'./static/images/linkedin.svg'" alt="linkedin">-->
<!--                </a>-->
<!--              </li>-->
              <li>
                <a  href="https://web.facebook.com/PaladinMining1" target="_blank">
                  <img :src="'./static/images/facebook.svg'" alt="facebook">
                </a>
              </li>
<!--              <li>-->
<!--                <a  href="https://www.instagram.com/ecos_mining" target="_self">-->
<!--                  <img :src="'./static/images/instagram.svg'" alt="instagram">-->
<!--                </a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a  href="https://www.youtube.com/c/ECOS_mining" target="_self">-->
<!--                  <img :src="'./static/images/youtube.svg'" alt="youtube">-->
<!--                </a>-->
<!--              </li>-->
            </ul>
          </div>
          <p>{{$t('getapp[0]')}}</p>
          <div>
            <!--            <a href="javascript:;" @click="downloadApp('ios')" target="_blank" rel="nofollow external noopener noreferrer">-->
            <!--              <img :src="'./static/images/google-play-1.svg'" alt="">-->
            <!--            </a>-->
            <a href="javascript:;" @click="downloadApp('andriod')" target="_blank" rel="nofollow external noopener noreferrer">
              <img :src="'./static/images/download/android.png?t=3'" alt="" style="height: 40px">
            </a>
            <a href="javascript:;" @click="downloadApp('ios')" target="_blank" rel="nofollow external noopener noreferrer">
              <img :src="'./static/images/download/iphone.png?t=3'" alt="" style="height: 40px">
            </a>
          </div>
        </div>
      </div>
      <div class="row space-center footer-bottom">
        <div class="mb-0 text-gray-300 flex">
          <a href="https://find-and-update.company-information.service.gov.uk/company/10356130" target="_blank">
            <img :src="'./static/image/cpinfo.08b24419.png'" width="60" alt="cpinfo"></a>

        <div style="    display: flex;
    align-items: center;margin-left: 5px;">{{$t('foot[11]')}}</div>
       </div>
<!--        <ul>-->
<!--          <li>-->
<!--            <a  href="javascript:;" target="_self" @click="$router.push('/pt/privacy/detail')">-->
<!--              {{$t('foot[9]')}}</a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a  href="javascript:;" target="_self" @click="$router.push('/pt/terms/detail')">-->
<!--              {{$t('foot[10]')}}</a>-->
<!--          </li>-->
<!--        </ul>-->
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

  footer {
    padding: 64px 0 28px;
    color: #fff;
    z-index: 1
  }

  .footer-col:first-child,.footer-col:last-child {
    display: flex;
    flex-direction: column;
    gap: 12px
  }

  .footer-col ul {
    display: flex;
    flex-direction: column;
    gap: 8px 0;
    margin-bottom: 1rem;
  }

  .footer-col ul li a {
    font-size: 16px;
    /*font-weight: 600;*/
    line-height: 20px;
    color: #fff
  }

  .footer-col p {
    max-width: 320px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px
  }

  .footer-col div {
    margin-bottom: 16px
  }

  footer .contact-wrapper {
    display: flex;
    flex-direction: column
  }

  footer .contact-link {
    display: flex;
    align-items: center;
    background: #344054;
    border: none;
    border-radius: 6px;
    color: inherit;
    font-family: inherit;
    gap: 0 14px;
    padding: 10px 14px;
    text-decoration: none;
    margin-bottom: 16px
  }

  @media(max-width: 767px) {
    footer {
      padding-top:32px
    }
  }

  @media(max-width: 599px) {
    footer .row.space-between {
      flex-direction:column
    }
  }

  .social-wrapper ul {
    display: flex;
    flex-direction: row;
    gap: 16px
  }

  .social-wrapper ul {
    display: flex;
    flex-direction: row;
    padding-left: 0
  }

  .map-mark {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px
  }

  footer .map-mark {
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 10px 10px rgba(0,0,0,.1);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    height: 50px;
    justify-content: center;
    margin: 10px;
    padding: 15px;
    position: absolute;
    transition: all .2s cubic-bezier(.68,-.55,.265,1.55);
    width: 50px
  }

  footer .mark-wrapper {
    align-items: center;
    background: #475467;
    border: 1px solid #344054;
    border-radius: 28px;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
    margin-bottom: 32px;
    position: relative
  }

  footer .mark-wrapper:hover {
    border: 1px solid #fff
  }
  .tooltip__map-mark:hover  {
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    min-width: 350px;
    padding: 8px;
    position: absolute;
    text-align: center;
    top: -45px;
    opacity: 1;
    background-color: #fff;
    color: #101828;
  }
  footer a.map-link {
    display: flex
  }
  .row {
    display: flex;
  }
  .row.space-between {
    justify-content: space-between;
  }
  .tooltip__map-mark {
    opacity: 0;
  }
  .button-primary {
    align-items: center;
    border: none;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(16, 24, 40, .05);
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    gap: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 24px;
    text-align: center;
    padding: 10px 18px;
    position: relative;
    text-decoration: none;
    transition: all .3s ease;
    transition-property: all;
    transition-property: background, color, border;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    white-space: nowrap;
    background: #ef6820;
    border: 1px solid #ef6820;
    color: #fff;
    transition: all .1s ease-in-out;
  }
  .container1 {
    padding-left: 16px;
    padding-right: 16px;
    margin: 0 auto;
    font-size: 16px;
  }

  .footer-bottom {
    /*margin-top: 64px;*/
    /*padding: 32px 0 0;*/
    /*border-top: 1px solid #475467*/
  }

  .footer-bottom ul {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .footer-bottom ul li a {
    color: #fff
  }
.footer-menu-1,.footer-menu-2 {
  text-transform: uppercase;
}
  .space-center {
    justify-content: center;
    align-items: center;
  }
</style>
