<template>
<!--  <div class="footer">-->
<!--    <div class="footer-wrapper">-->
<!--      <div class="left"><img v-lazy="'./static/image/logo1.png'"-->
<!--                                                class="footer-img">-->
<!--        <div class="footer-content">{{$t('foot[0]',{WT:InitData.setting.web_title})}}-->
<!--        </div>-->
<!--&lt;!&ndash;        <div class="socials">&ndash;&gt;-->
<!--&lt;!&ndash;          <a href="https://www.youtube.com/@ARKMining/" target="blank_"><img src="https://arkmining.com/asset/img/sections/elements/65dc699d68ee41708943773.png" class="social-header"></a>&ndash;&gt;-->
<!--&lt;!&ndash;          <a href="https://twitter.com/ARKMining_" target="blank_"><img src="https://arkmining.com/asset/img/sections/elements/64ea1c5b10cf41693064283.png" class="social-header"></a>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--      </div>-->
<!--      <div class="link-box">-->
<!--        <div class="link-list">-->
<!--          <div class="label">{{$t('about[0]')}}</div>-->
<!--          <div class="link-item" @click="$router.push('/product')">{{$t('foot[2]')}}</div>-->
<!--          <div class="link-item" @click="$router.push('/about')">{{$t('foot[3]')}}</div>-->
<!--          <div class="link-item" @click="$router.push('/FAQ')">{{$t('foot[4]')}}</div>-->
<!--          <div class="link-item" @click="$router.push('/affiliate')">{{$t('foot[5]')}}</div>-->
<!--          <div class="link-item" @click="$router.push('/article/cryptocurrency/detail')">{{$t('cryptocurrency[0]')}}</div>-->
<!--          <div class="link-item" @click="$router.push('/article/web3/detail')">{{$t('cryptocurrency[1]')}}</div>-->
<!--&lt;!&ndash;          <div class="link-item" @click="$router.push('/blog')">{{$t('foot[6]')}}</div>&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="link-item" @click="$router.push('/contact')">{{$t('foot[7]')}}</div>&ndash;&gt;-->
<!--        </div>-->
<!--        <div class="link-list">-->
<!--          <div class="label">{{$t('foot[8]')}}</div>-->
<!--          <div class="link-item" @click="$router.push('/article/privacy/detail')">{{$t('foot[9]')}}</div>-->
<!--          <div class="link-item" @click="$router.push('/article/terms/detail')">{{$t('foot[10]')}}</div>-->
<!--          <div class="link-item" @click="$router.push('/article/cookie/detail')">{{$t('foot[12]')}}</div>-->
<!--          <div class="link-item" @click="$router.push('/blog')">{{$t('foot[6]')}}</div>-->
<!--          <div class="link-item" @click="$router.push('/contact')">{{$t('foot[7]')}}</div>-->
<!--          <div class="link-item" @click="$router.push('/Bounty')">{{$t('bounty')}}</div>-->
<!--&lt;!&ndash;          <div class="link-item" @click="$router.push('/article/cryptocurrency/detail')">{{$t('cryptocurrency[0]')}}</div>&ndash;&gt;-->
<!--        </div>-->
<!--        <div class="link-list">-->
<!--          <div class="label">{{$t('foot[7]')}}</div>-->
<!--          <div class="link-item" style="display: flex;align-items: center;">-->
<!--            <img v-lazy="'./static/image/footconnect.png'" style="border-radius: 5px;width: 30px;margin-right: 10px">-->
<!--            {{$t('appDown[0]')}}-->
<!--          </div>-->
<!--&lt;!&ndash;          <div class="link-item" style="display: flex;align-items: center;">&ndash;&gt;-->
<!--&lt;!&ndash;            <i class="el-icon-phone"></i>+44 7533 766543&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--          <div class="link-item"><i class="el-icon-message"></i>-->
<!--            {{InitData.setting.email}}-->
<!--          </div>-->
<!--          <div class="link-item"><i class="el-icon-message"></i>-->
<!--            {{InitData.setting.email2}}-->
<!--          </div>-->
<!--          <div class="link-item"><i class="el-icon-location-information"></i>-->
<!--            Amba House 3rd Floor, 15 College Road, Harrow, Middlesex, United Kingdom, HA1 1BA-->
<!--          </div>-->

<!--          <div class="link-item">-->
<!--            <div class="shareweb" style="padding: 0">-->
<!--              <div style="margin-bottom: 5px">Our social media</div>-->
<!--              <div style="margin-bottom: 5px">There's a lot to see there,too</div>-->
<!--              <div>-->

<!--                <a href="https://x.com/KSDMiner" target="_blank">-->
<!--                  <img v-lazy="'./static/image/share2.png?t=1'" style="width: 30px;margin-right: 5px" />-->
<!--                </a>-->
<!--                <a href="https://www.youtube.com/channel/UCgrgNH1uVUg5_XNLILk9_Dg" target="_blank">-->
<!--                  <img v-lazy="'./static/image/share4.png?t=1'" style="width: 30px;margin-right: 5px" />-->
<!--                </a>-->
<!--                <a href="https://t.me/bitcoinminers365" target="_blank">-->
<!--                  <img v-lazy="'./static/image/share3.png?t=1'" style="width: 30px;" />-->
<!--                </a>-->
<!--                <a href="https://web.facebook.com/KSDMiner" target="_blank">-->
<!--                  <img v-lazy="'./static/image/share1.png?t=1'" style="width: 30px;margin-right: 5px" />-->
<!--                </a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->


<!--&lt;!&ndash;          <div class="markss">&ndash;&gt;-->
<!--&lt;!&ndash;            <a href="javascript:;" @click="downloadApp('andriod')" target="blank_" class="block">&ndash;&gt;-->
<!--&lt;!&ndash;              <img v-lazy="'./static/images/download/androidf.png'"></a>&ndash;&gt;-->
<!--&lt;!&ndash;            <a @click="downloadApp('ios')" id="downloadappIos" target="blank_" class="mt-10 block">&ndash;&gt;-->
<!--&lt;!&ndash;              <img v-lazy="'./static/images/download/iphonef.png'"></a>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="copyright">-->
<!--      <a href="https://find-and-update.company-information.service.gov.uk/company/09651110">-->
<!--        <img v-lazy="'./static/image/sblogo.png?t=1'" class="aboutf"></a>-->
<!--      <div style="padding: 0 10px">{{$t('foot[11]',{WT:InitData.setting.web_title})}}</div>-->
<!--&lt;!&ndash;      <img v-lazy="'./static/image/secure.png'">&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->

  <footer class="footer_footer__7PBRV">
    <div class="styles_wrapper__TzxzL">
      <div class="footer_upper_line__SzpRu">
        <div class="footer_wrapperLeftBlock__FPLX3">
          <div class="footer_wrapperMainLogo__p7bja">
            <img alt="Steady Mining photo" title="" v-lazy="'./static/image/logo1.png'"
                 decoding="async" data-nimg="fill"
                 style="width: 100%;box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block;">
          </div>
          <div><p class="text footer_text__qoC0V">
            <img v-lazy="'./static/image/local.png?t=1'" style="border-radius: 5px;width: 20px;margin: 5px;">
            C/O Venture Finance Management, Suite 101, Cotton Exchange, Old Hall Street, Liverpool, England, L3 9LQ</p></div>
        </div>
        <div class="footer_linkBlock__k1gY5">
          <div class="footer_linkColumn__wFHMA"><p class="footer_columnTitle__aoNF3">{{$t('foot[13]')}}</p>
            <a class="text footer_text__qoC0V" href="javascript:" @click="$router.push('/blog')">{{$t('foot[6]')}}</a>
            <a class="text footer_text__qoC0V" href="javascript:" @click="$router.push('/article/energy/detail')">{{$t('foot[14]')}}</a>
            <a class="text footer_text__qoC0V" href="javascript:" @click="$router.push('/article/cryptocurrency/detail')">{{$t('cryptocurrency[0]')}}</a>
            <a class="text footer_text__qoC0V" href="javascript:" @click="$router.push('/article/web3/detail')">{{$t('cryptocurrency[1]')}}</a>
            <a class="text footer_text__qoC0V" href="javascript:" @click="$router.push('/article/bit/detail')">{{$t('foot[16]')}}</a>
            <a class="text footer_text__qoC0V" href="javascript:" @click="$router.push('/article/who/detail')">{{$t('foot[17]')}}</a>
          </div>

          <div class="footer_linkColumn__wFHMA"><p class="footer_columnTitle__aoNF3">{{$t('foot[18]')}}</p>
            <a
                    class="text footer_text__qoC0V" href="javascript:" @click="$router.push('/about')">{{$t('foot[3]')}}</a>
            <a class="text footer_text__qoC0V" href="javascript:" @click="$router.push('/article/terms/detail')">{{$t('foot[10]')}}</a>
            <a class="text footer_text__qoC0V" href="javascript:" @click="$router.push('/article/privacy/detail')">{{$t('foot[9]')}}</a>
            <a class="text footer_text__qoC0V" href="javascript:" @click="$router.push('/FAQ')">{{$t('foot[4]')}}</a>
            <!-- <a class="text footer_text__qoC0V" href="javascript:" @click="$router.push('/contact')">{{$t('foot[7]')}}</a> -->
          </div>
          <div class="footer_emailColumnDesktop__KuLss"><p class="footer_columnTitle__aoNF3 footer_entry__Pf_Xw">
            {{$t('foot[7]')}}</p>
            <div class="footer_entry__Pf_Xw"><p class="text footer_text__qoC0V">
              <img v-lazy="'./static/image/footchat.png?t=1'" style="border-radius: 5px;width: 20px;margin: 5px;">
              {{$t('foot[19]')}}</p>
              <a
              href="mailto:info@cryptominingfirm.com"><img v-lazy="'./static/image/footeamil.png?t=1'" style="border-radius: 5px;width: 20px;margin: 5px;">info@cryptominingfirm.com</a>
            </div>
            <div class="footer_linkColumn__wFHMA">
              <a class="text footer_text__qoC0V" style="margin:10px 0;" href="javascript:" @click="$router.push('/contact')">{{$t('foot[7]')}}</a>
            </div>
            <div class="footer_wrapperSocial__pLVxZ"><a target="_blank" class="footer_socialIcon__w14Es" itemprop="sameAs"
                                                      href="https://web.facebook.com/profile.php?id=100064491949358"><span
            style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
            alt="" aria-hidden="true"
            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"
            style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
            alt="Steady Mining photo" title=""
            :src="'./static/images/c6c1fc07dba42754c230ac275ac652b4.png'" decoding="async"
            data-nimg="intrinsic"
            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span></a><a
            target="_blank" class="footer_socialIcon__w14Es" itemprop="sameAs"
            href="https://t.me/cryptominingfirm2021"><span
            style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
            alt="" aria-hidden="true"
            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"
            style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
            alt="Steady Mining photo" title=""
            :src="'./static/images/442f81792803e8bb8dea81874fcaa733.png'" decoding="async"
            data-nimg="intrinsic"
            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span></a>
            <a
            target="_blank" class="footer_socialIcon__w14Es" itemprop="sameAs"
            href="https://x.com/MININGCRYPTOLTD"><span
            style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
            alt="" aria-hidden="true"
            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"
            style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
            alt="Steady Mining photo" title=""
            :src="'./static/images/1163fcb5f8ae0a88be7dfd110ab04621.png'" decoding="async"
            data-nimg="intrinsic"
            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span></a>
            <a
            target="_blank" class="footer_socialIcon__w14Es" itemprop="sameAs"
            href="https://www.youtube.com/@cryptominingfirm"><span
            style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
            alt="" aria-hidden="true"
            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"
            style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
            alt="Steady Mining photo" title=""
            :src="'./static/images/d3959f4238aa2ea71866d1a732615b01.png'" decoding="async"
            data-nimg="intrinsic"
            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span></a>
            <a
            target="_blank" class="footer_socialIcon__w14Es" itemprop="sameAs"
            href=""><span
            style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
            alt="" aria-hidden="true"
            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"
            style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
            alt="Steady Mining photo" title=""
            :src="'./static/images/IG.png'" decoding="async"
            data-nimg="intrinsic"
            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span></a>
          </div>
            <div class="footer_entry__Pf_Xw">
                        <div class="link-item markss" style="margin-top: 10px">
<!--                          <a @click="downloadApp('google')" id="google" target="blank_" class="mt-10 block">-->
<!--                            <img v-lazy="'./static/image/google.png?t=1'" style="border-radius: 5px"></a>-->
                          <a @click="downloadApp('ios')" id="downloadappIos" target="blank_" class="mt-10 block">
                            <img v-lazy="'./static/image/iphone.png?t=1'" style="border-radius: 5px"></a>
                          <a href="javascript:" @click="downloadApp('andriod')" target="blank_" class="block">
                            <img v-lazy="'./static/image/android.png?t=1'" style="border-radius: 5px"></a>
                        </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_lower_line__6vj6_ text-center"><p class="text footer_text__qoC0V">{{$t('foot[11]')}}</p>
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


  .footer_footer__7PBRV {
    background-color: #373737;
    position: relative;
    z-index: 2;
    border-top: 6px solid #f7b40d;
    padding: 50px 0
  }

  .footer_footer__7PBRV .footer_text__qoC0V {
    font-size: 16px;
    color: #b3b3b3;
    margin-bottom: 0
  }

  .footer_footer__7PBRV .footer_wrapperLeftBlock__FPLX3 {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 0 1 500px
  }

  @media(max-width: 1024px) {
    .footer_footer__7PBRV .footer_wrapperLeftBlock__FPLX3 {
      flex:none
    }
  }

  .footer_footer__7PBRV .footer_wrapperLeftBlock__FPLX3 .footer_wrapperMainLogo__p7bja {
    position: relative;
    margin-bottom: 7px;
    width: 25rem;
  }

  .footer_footer__7PBRV .footer_wrapperLeftBlock__FPLX3 .footer_wrapperSocial__pLVxZ {
    margin-top: 13px;
    display: flex
  }
  .footer_wrapperSocial__pLVxZ .footer_socialIcon__w14Es {
    margin-right: 20px
  }

  .footer_footer__7PBRV .footer_wrapperLeftBlock__FPLX3 .footer_wrapperSocial__pLVxZ .footer_socialIcon__w14Es:last-child {
    margin-right: 0
  }

  .footer_footer__7PBRV .footer_wrapperLeftBlock__FPLX3 .footer_wrapperSocial__pLVxZ .footer_socialIcon__w14Es svg {
    fill: #b3b3b3
  }

  .footer_footer__7PBRV .footer_wrapperLeftBlock__FPLX3 .footer_wrapperSocial__pLVxZ .footer_socialIcon__w14Es:hover svg {
    fill: #fff
  }

  @media(max-width: 1024px) {
    .footer_footer__7PBRV .footer_wrapperLeftBlock__FPLX3 {
      padding-bottom:30px
    }
  }

  .footer_footer__7PBRV .footer_linkBlock__k1gY5 {
    display: grid;
    grid-template-columns: repeat(3,auto);
    grid-gap: 30px;
    gap: 30px;
    flex: 1 1;
    justify-content: space-between
  }

  .footer_footer__7PBRV .footer_linkBlock__k1gY5 .footer_emailColumnDesktop__KuLss,.footer_footer__7PBRV .footer_linkBlock__k1gY5 .footer_emailColumnMobile__tUWyN,.footer_footer__7PBRV .footer_linkBlock__k1gY5 .footer_linkColumn__wFHMA {
    display: flex;
    flex-direction: column;
    gap: 10px
  }

  .footer_footer__7PBRV .footer_linkBlock__k1gY5 .footer_emailColumnDesktop__KuLss {
    display: inline;
    display: initial
  }

  @media(max-width: 1024px) {
    .footer_footer__7PBRV .footer_linkBlock__k1gY5 .footer_emailColumnDesktop__KuLss {
      display:none
    }

    .footer_footer__7PBRV .footer_linkBlock__k1gY5 {
      padding-top: 30px;
      border-top: 1px solid hsla(0,0%,100%,.15);
      gap: 32px;
      grid-template-columns: repeat(2,1fr)
    }
  }

  @media(max-width: 375px) {
    .footer_footer__7PBRV .footer_linkBlock__k1gY5 {
      grid-template-columns:1fr
    }
  }

  .footer_footer__7PBRV .footer_emailColumnMobile__tUWyN {
    display: none
  }

  @media(max-width: 1024px) {
    .footer_footer__7PBRV .footer_emailColumnMobile__tUWyN {
      display:flex;
      justify-content: space-between;
      margin-top: 32px;
      gap: 32px
    }

    .footer_footer__7PBRV .footer_emailColumnMobile__tUWyN .footer_entry__Pf_Xw {
      flex: 1 1
    }
  }

  @media(max-width: 1024px)and (max-width:375px) {
    .footer_footer__7PBRV .footer_emailColumnMobile__tUWyN {
      flex-direction:column;
      gap: 0
    }
  }

  .footer_footer__7PBRV .footer_addressWrapper__TTHwj {
    display: flex;
    flex-direction: column;
    gap: 10px
  }

  .footer_footer__7PBRV a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
  }

  .footer_footer__7PBRV a:hover {
    color: #fff;
    text-decoration: underline
  }

  .footer_footer__7PBRV .footer_columnTitle__aoNF3 {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    margin: 0 0 16px
  }

  .footer_upper_line__SzpRu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 42px;
    gap: 60px
  }

  @media(max-width: 1024px) {
    .footer_upper_line__SzpRu {
      flex-direction:column;
      gap: 0
    }
  }

  .footer_lower_line__6vj6_ {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid hsla(0,0%,100%,.15);
    padding-top: 20px
  }

  @media(max-width: 800px) {
    .footer_lower_line__6vj6_ {
      flex-direction:column;
      align-items: center;
      gap: 16px
    }
  }

  .footer_lower_line__6vj6_ .footer_review_row__Gy2tI {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center
  }

  .footer_lower_line__6vj6_ .footer_review_row__Gy2tI .footer_review__uqsO4 {
    max-width: 128px;
    cursor: pointer
  }

  .footer_lower_line__6vj6_ .footer_review_row__Gy2tI .footer_review__uqsO4 img {
    width: 100%;
    -o-object-fit: contain;
    object-fit: contain
  }

  .footer_lower_line__6vj6_ .footer_payment_icons__l5a_A {
    display: flex;
    flex-direction: row;
    gap: 8px
  }

  .footer_lower_line__6vj6_ .footer_payment_icons__l5a_A img {
    height: 20px
  }

  .styles_container__AD565 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px
  }

  @media(max-width: 1280px) {
    .styles_container__AD565 {
      gap:10px
    }
  }

  .styles_separator__OObQ1 {
    height: 50%;
    width: 1px;
    border: none;
    border-right: 1px solid #c9c9c9
  }

  button.styles_extraButtonStyling__1WEX1 {
    padding: 13px 20px;
    width: -moz-fit-content;
    width: fit-content;
    white-space: nowrap
  }

  button.styles_extraButtonStyling__1WEX1.styles_login__2Le9m {
    padding: 13px 0
  }

  @media(max-width: 1280px) {
    button.styles_extraButtonStyling__1WEX1 {
      padding:8px 10px
    }
  }

  .selectComponent_customLabel__5Km5q {
    font-size: 14px;
    color: #373737;
    line-height: 120%;
    margin-bottom: 0
  }

  .selectComponent_selectImage__Z4VRJ {
    display: flex;
    min-width: 20px;
    max-width: 20px;
    min-height: 20px;
    max-height: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden
  }

  .selectComponent_selectImage__Z4VRJ span {
    min-width: 140%;
    max-width: 140%;
    min-height: 140%;
    max-height: 140%
  }

  .selectComponent_customLabelIsInput__DjnUN {
    color: #373737;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 0
  }

  .selectComponent_arrowRotate__fjbRr {
    transform: rotate(180deg)
  }

  .selectComponent_optionContainer__ZqVOr {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center
  }

  .selectComponent_optionContainer__ZqVOr p {
    margin: 0;
    color: #000
  }

  .selectComponent_singleValueContainer__99Tr1 {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    height: 100%
  }

  .selectComponent_singleValueContainer__99Tr1 p {
    margin-bottom: 0;
    color: #000
  }

  .selectComponent_controlContainer__cx2x1 {
    border: none;
    background: none
  }

  .styles_wrapper__MA9yJ {
    position: fixed;
    top: 38px;
    left: 0;
    right: 0;
    height: 0;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    background: #fff;
    z-index: 10;
    transition: all .2s ease-in-out
  }

  .styles_wrapper__MA9yJ[data-opened=true] {
    height: 100vh;
    max-height: 100vh;
    overflow: auto;
    opacity: 1
  }

  .styles_wrapper__MA9yJ[data-header-stuck=true] {
    top: -1px
  }

  .styles_container__nz6PT {
    padding-bottom: 60px
  }

  .styles_header__WFu6B {
    padding: 0 25px 0 20px;
    border-bottom: 1px solid #ececec;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px
  }

  .styles_header__actions__ey8Sd {
    display: flex;
    align-items: center;
    gap: 20px
  }

  button.styles_closeBtn__Rtk6b {
    padding: 0;
    width: -moz-fit-content;
    width: fit-content
  }

  .styles_logo__5ja0n {
    position: relative;
    width: 120px;
    height: 34px;
    flex: none
  }

  @media(max-width: 375px) {
    .styles_logo__5ja0n {
      width:90px;
      height: auto;
      aspect-ratio: 120/34
    }
  }

  .styles_lang__ed8Ze {
    background: #ffc55a;
    padding: 2px 10px;
    border-radius: 8px
  }

  .styles_lang__ed8Ze [class*=customLabel] {
    color: #fff;
    font-size: 14px;
    font-weight: 500
  }

  .styles_lang__ed8Ze [class*=arrowSvg] {
    fill: #fff
  }

  .styles_lang__ed8Ze [class*=indicatorContainer] {
    padding: 0 5px
  }

  .styles_main__JPRKQ {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 70px
  }

  .styles_menuList__dFhG9 {
    padding: 0;
    margin: 0
  }

  .styles_menuItem__UlsSu {
    border-bottom: 1px solid #ececec
  }

  .styles_menuItem__UlsSu:first-child .styles_menuItem__title__6frey {
    color: #815aac;
    font-weight: 700
  }

  .styles_menuItem__link__gi2mN {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px 20px 0
  }

  .styles_menuItem__title__6frey {
    color: #373737;
    font-weight: 500;
    font-size: 18px
  }

  .styles_menuItem__icon__9JUDd {
    width: 7px;
    flex: none;
    color: #5b5b5b;
    transform: rotate(180deg)
  }

  .styles_actions__v4ZBo {
    display: flex;
    flex-direction: column;
    gap: 20px
  }

  .styles_actions__btn__Do0xa[type=button] {
    font-size: 16px;
    font-weight: 600;
    width: 100%
  }

  .styles_actions__btn_login__EGhDJ[type=button] {
    background: #f5f5f5
  }

  @media screen and (max-width: 768px) {
    .style_container__rAyaZ {
      max-width:100%;
      padding: 0
    }
  }

  .style_wrapperSubHeader__D5xWH {
    background-color: #373737;
    padding: 5.5px;
    height: 38px
  }

  .style_wrapperSubHeader__D5xWH .style_wrapper__ulXWr {
    display: flex;
    align-items: center
  }

  .style_wrapperSubHeader__D5xWH .style_wrapper__ulXWr .style_text__YVOwa {
    font-size: 12px;
    color: #b3b3b3;
    line-height: 26px;
    margin-bottom: 0;
    margin-right: 22px
  }

  .style_header__5q4mN {
    height: 72px;
    background-color: #fff;
    border-bottom: 1px solid #ececec;
    display: flex;
    align-items: center;
    position: sticky;
    top: -1px;
    z-index: 1000
  }

  .style_header__5q4mN .style_mainWrapper__syxaZ {
    display: flex;
    justify-content: space-between
  }

  .style_header__5q4mN .style_logoBlock__FRrUP {
    display: inline-flex;
    align-items: center;
    flex: none
  }

  .style_header__5q4mN .style_logoBlock__FRrUP a {
    display: inline-flex
  }

  @media(max-width: 1024px) {
    .style_header__5q4mN .style_logoBlock__FRrUP {
      width:120px;
      height: 34px
    }
  }

  @media(max-width: 375px) {
    .style_header__5q4mN .style_logoBlock__FRrUP {
      width:90px;
      height: auto
    }
  }

  .style_header__5q4mN .style_linkBlock__9dmCs {
    flex: 0 1 700px;
    display: flex
  }
  .styles_wrapper__TzxzL {
    width: 100%;
    max-width: 1300px;
    padding-left: 50px;
    padding-right: 50px;
    margin-right: auto;
    margin-left: auto;
  }


</style>
