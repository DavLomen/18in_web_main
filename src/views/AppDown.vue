<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container  my-5">
      <div class="download_wrapper__EH9F4" style="color: #000000">
        <div class="download_mainDetail__cSpYA download_bgMobileDark__9WpWW">
          <div class="download_titleWrapper__ur648"><h1 class="download_describe__hLlem">{{$t('appdown[0]')}}
          </h1>
            <p class="download_description__zLotf">{{$t('appdown[1]')}}</p>
          </div>
          <div class="ButtonsWithQRCodeCard_buttons_with_qrcode_card_wrapper__s8gB_">
            <div class="ButtonsWithQRCodeCard_cardWrapper__6d8cM">
              <div class="ButtonsWithQRCodeCard_qrcodeBg__O_iXv">
                <img class="" alt=""
                     :src="'./static/images/img/qrcode.png?t=1'"
                     style="width:100%">
              </div>
              <p class="ButtonsWithQRCodeCard_downloadScanDesc__x54yT">{{$t('appdown[2]')}}</p></div>

            <img class="showmobile hidepc" :src="'./static/images/img/front-app-light-new-v3.png'"  style="width: 100%;height: auto;object-fit: contain;">

            <div style="width: 100%;overflow: hidden;border-radius: 8px;">
              <div class="ButtonsWithQRCodeCard_render_all_buttons_for_web__5P0Or">
                <div class="ant-row" style="margin-left: -20px; margin-right: -20px; row-gap: 20px;">
                  <div class="ant-col ant-col-12" style="padding-left: 20px; padding-right: 20px;color: #000;"><a
                    class="CustomTextButton_custom_text_button__gd8_k" @click="downloadApp('ios')"
                    href="javascript:;"><img class="" alt=""
                                                                 :src="'./static/images/img/downloadios.png'"
                                                                 style="width: 32px; height: 32px;"><span>{{$t('appdown[3]')}}</span></a>
                  </div>
                  <div class="ant-col ant-col-12" style="padding-left: 20px; padding-right: 20px;color: #000;"><a
                    class="CustomTextButton_custom_text_button__gd8_k" @click="downloadApp('google')"
                    href="javascript:;"><img
                    class="" alt="" :src="'./static/images/img/downloadgoogle.png'"
                    style="width: 32px; height: 32px;"><span>{{$t('appdown[4]')}}</span></a></div>
                  <div class="ant-col ant-col-12" style="padding-left: 20px; padding-right: 20px;color: #000;"><a
                    class="CustomTextButton_custom_text_button__gd8_k" @click="downloadApp('andriod')"
                    href="javascript:;"><img class="" alt=""
                                                                      :src="'./static/images/img/downloadandriod.png'"
                                                                      style="width: 32px; height: 32px;"><span>{{$t('appdown[5]')}}</span></a>
                  </div>
<!--                  <div class="ant-col ant-col-12" style="padding-left: 20px; padding-right: 20px;"><a-->
<!--                    class="CustomTextButton_custom_text_button__gd8_k" target="_blank"-->
<!--                    href="https://static.mocortech.com/mexc-static-resource/windows/mexc_setup_2.1.0.exe">-->
<!--                    <svg class="sc-eqUAAy cMqsAc mx-icon CustomTextButton_custom_text_button_icon__fuslC" focusable="false"-->
<!--                         width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"-->
<!--                         data-icon="WindowsOutlined">-->
<!--                      <path-->
<!--                        d="M125.5424 242.3296v221.7984L368.64 455.0656V191.7952l-243.0464 50.4832z m345.3952-78.7968V450.048l428.8512-15.8208V74.496l-428.8512 89.088zM125.5424 560.128v221.7984l243.0464 50.5344v-263.2192l-243.0464-9.1136z m345.3952 14.1312v286.464l428.8512 89.0368v-359.68l-428.8512-15.8208z"></path>-->
<!--                    </svg>-->
<!--                    <span>Windows</span></a></div>-->
                </div>
              </div>
            </div>

            <div class="ButtonsWithQRCodeCard_versionWrapper__xvPtD"><span class="ButtonsWithQRCodeCard_version__b5_VA"
                                                                           dir="rtl">{{$t('appdown[6]')}}:5.5.0</span></div>
          </div>
        </div>
        <img class="showpc hidemobile" :src="'./static/images/img/appapp.png?t=1'"  style="width: 350px;height: auto;object-fit: contain;">
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>

  export default {
    name: 'appDown',
    components: {
    },
    data() {
      return {
        showIndex:-1
      }
    },

    computed: {
    },
    watch: {
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
  .tips-modal_modalTips__4DdmV .tips-modal_downloadTip__9RqNk {
    color: var(--text-primary)
  }

  .tips-modal_modalTips__4DdmV .tips-modal_downloadTip__9RqNk .tips-modal_contact__iKiVt {
    margin-top: 32px
  }

  .tips-modal_modalTips__4DdmV .tips-modal_downloadTip__9RqNk .tips-modal_contact__iKiVt .tips-modal_contactService__m_8V_ {
    cursor: pointer;
    color: var(--primary-blue)
  }

  .tips-modal_modalTips__4DdmV .tips-modal_downloadTip__9RqNk .tips-modal_contact__iKiVt .tips-modal_contactService__m_8V_:hover {
    color: var(--primary-blue-hover)
  }

  .tips-modal_downloadBtn__Sb2Y5 {
    width: 100%
  }

  .CustomTextButton_custom_text_button__gd8_k {
    height: 48px;
    gap: 8px;
    border-radius: 32px;
    color: var(--text-primary);
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px
  }

  .CustomTextButton_custom_text_button__gd8_k:hover {
    color: var(--primary-blue)
  }

  .CustomTextButton_custom_text_button__gd8_k:not(:last-child) {
    -webkit-margin-end: 36px;
    margin-inline-end:36px}

  @media screen and (max-width: 767px) {
    .CustomTextButton_custom_text_button__gd8_k:not(:last-child) {
      -webkit-margin-end:16px;
      margin-inline-end:16px;background: var(--fill-page-button-default)
    }
  }

  .CustomTextButton_custom_text_button__gd8_k .CustomTextButton_custom_text_button_icon__fuslC {
    font-size: 32px;
    font-weight: 500;
    line-height: 36px;
    flex: 0 0 32px
  }

  @media screen and (max-width: 767px) {
    .CustomTextButton_custom_text_button__gd8_k .CustomTextButton_custom_text_button_icon__fuslC {
      font-size:20px;
      flex: 0 0 20px
    }

    .CustomTextButton_custom_text_button__gd8_k {
      background: var(--fill-page-button-default);
      width: 100%;
      max-width: 164px
    }

    .CustomTextButton_custom_text_button__gd8_k:hover {
      background: var(--fill-page-button-hover);
      color: var(--text-primary)
    }
  }

  .CustomGhostButton_custom_ghost_button__hJvob {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    color: var(--text-primary);
    padding: 5px 12px;
    border-radius: 100px;
    border: 1px solid var(--border-opacity)
  }

  .CustomGhostButton_custom_ghost_button__hJvob svg {
    -webkit-margin-end: 6px;
    margin-inline-end:6px}

  .CustomGhostButton_custom_ghost_button__hJvob span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
  }

  .CustomGhostButton_custom_ghost_button__hJvob:hover {
    background-color: var(--fill-modal-button-hover)
  }

  .CustomGhostButton_custom_ghost_button__hJvob .iconfont {
    font-size: 16px
  }

  .ButtonWithDescription_button_with_description_wrapper__wtNAo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px
  }

  .ButtonWithDescription_downloadButtonDescription__VVH4Y {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 192px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px
  }

  .ButtonWithDescription_gradientLine___e9SC {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg,rgba(34,36,41,0),#222429 50%,rgba(34,36,41,0))
  }

  .ButtonWithDescription_buttonWithDescription__frRLX {
    height: 48px;
    gap: 8px;
    border-radius: 32px;
    color: var(--text-primary);
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start
  }

  @media screen and (max-width: 767px) {
    .ButtonWithDescription_buttonWithDescription__frRLX:not(:last-child) {
      background:var(--fill-page-button-default)
    }
  }

  .ButtonWithDescription_buttonWithDescription__frRLX svg {
    font-size: 20px
  }

  .ButtonWithDescription_buttonWithDescription__frRLX .ButtonWithDescription_icon__R8iYy {
    font-size: 32px;
    font-weight: 500;
    line-height: 36px;
    flex: 0 0 32px
  }

  @media screen and (max-width: 767px) {
    .ButtonWithDescription_buttonWithDescription__frRLX .ButtonWithDescription_icon__R8iYy {
      font-size:20px;
      flex: 0 0 20px
    }

    .ButtonWithDescription_buttonWithDescription__frRLX {
      background: var(--fill-page-button-default);
      width: 100%;
      max-width: 164px
    }

    .ButtonWithDescription_buttonWithDescription__frRLX:hover {
      background: var(--fill-page-button-hover);
      color: var(--text-primary)
    }
  }

  .ButtonWithDescription_buttonWrapper__eAZBO .ButtonWithDescription_button__CGVCJ {
    font-size: 12px
  }

  html[data-theme=light] .ButtonWithDescription_gradientLine___e9SC {
    background: linear-gradient(90deg,rgba(235,237,241,0),#ebedf1 50%,rgba(235,237,241,0))
  }

  .ButtonsWithQRCodeCard_buttons_with_qrcode_card_wrapper__s8gB_ {
    margin-top: 24px;
  }

  @media screen and (min-width: 768px)and (max-width:1248px) {
    .ButtonsWithQRCodeCard_buttons_with_qrcode_card_wrapper__s8gB_ {
      width:354px
    }
  }

  .ButtonsWithQRCodeCard_cardWrapper__6d8cM {
    height: 120px;
    padding: 0 16px;
    -webkit-padding-start: 28px;
    padding-inline-start:28px;-webkit-padding-end: 20px;
    padding-inline-end:20px;display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 8px;
    background-color: #fff
  }

  .ButtonsWithQRCodeCard_cardWrapper__6d8cM .ButtonsWithQRCodeCard_qrcodeBg__O_iXv {
    line-height: 0;
    width: 88px;
    height: 88px;
    flex-shrink: 0
  }

  .ButtonsWithQRCodeCard_cardWrapper__6d8cM .ButtonsWithQRCodeCard_downloadScanDesc__x54yT {
    margin-bottom: 0;
    line-height: 20px;
    font-size: 14px;
    font-weight: 600;
    color: #000
  }

  .ButtonsWithQRCodeCard_cardWrapper__6d8cM .ButtonsWithQRCodeCard_downloadScanDesc__x54yT span {
    display: block;
    line-height: 20px;
    font-size: 12px
  }

  @media screen and (min-width: 767px)and (max-width:1247px) {
    .ButtonsWithQRCodeCard_cardWrapper__6d8cM {
    }
  }

  .ButtonsWithQRCodeCard_button_with_description_wrapper__L4yzZ {
    width: 486px;
    background-color: #16171a;
    padding: 30px 24px 24px;
    border-radius: 8px;
    margin-top: 12px
  }

  @media screen and (min-width: 767px)and (max-width:1247px) {
    .ButtonsWithQRCodeCard_button_with_description_wrapper__L4yzZ {
      width:430px
    }
  }

  .ButtonsWithQRCodeCard_buttons_card_wrapper__TW4yt {
    width: 486px;
    margin-top: 12px;
    padding: 24px 0;
    -webkit-padding-start: 8px;
    padding-inline-start:8px;-webkit-padding-end: 20px;
    padding-inline-end:20px;display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-radius: 8px;
    background-color: #16171a
  }

  @media screen and (min-width: 767px)and (max-width:1247px) {
    .ButtonsWithQRCodeCard_buttons_card_wrapper__TW4yt {
      width:430px
    }
  }

  .ButtonsWithQRCodeCard_downloadButton__h9oDs {
    min-width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-primary);
    padding: 5px 12px;
    border-radius: 100px;
    border: 1px solid var(--border-opacity)
  }

  .ButtonsWithQRCodeCard_downloadButton__h9oDs svg {
    -webkit-margin-end: 6px;
    margin-inline-end:6px}

  .ButtonsWithQRCodeCard_downloadButton__h9oDs:hover {
    background-color: var(--fill-modal-button-hover)
  }

  .ButtonsWithQRCodeCard_downloadButton__h9oDs .iconfont {
    font-size: 16px
  }

  .ButtonsWithQRCodeCard_versionWrapper__xvPtD {
    display: flex;
    margin-top: 24px;
    -webkit-padding-start: 28px;
    padding-inline-start:28px}

  .ButtonsWithQRCodeCard_versionWrapper__xvPtD .ButtonsWithQRCodeCard_version__b5_VA {
    display: block;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-tertiary);
    cursor: pointer
  }

  .ButtonsWithQRCodeCard_downloadTextWrapper__rdLNk {
    display: flex;
    flex-direction: column;
    overflow: hidden
  }

  .ButtonsWithQRCodeCard_downloadScanTitle__b2KfJ {
    font-size: 14px;
    color: var(--text-primary);
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 4px
  }

  .ButtonsWithQRCodeCard_downloadScanDescription__88QMQ {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 12px;
    line-height: 16px;
    font-weight: 300;
    color: var(--text-primary);
    margin-bottom: 0
  }

  .ButtonsWithQRCodeCard_text_buttons_wrapper__jCMuG {
    margin-top: 12px;
    -webkit-margin-start: -16px;
    margin-inline-start:-16px;-webkit-margin-end: -16px;
    margin-inline-end:-16px}

  .ButtonsWithQRCodeCard_text_buttons_wrapper__jCMuG a {
    border-radius: 100px
  }

  .ButtonsWithQRCodeCard_text_buttons_wrapper__jCMuG a img {
    width: 16px;
    height: 16px;
    -webkit-margin-end: 6px;
    margin-inline-end:6px}

  .ButtonsWithQRCodeCard_render_all_buttons_for_web__5P0Or {
    margin-top: 12px;
    padding: 24px 0;
    -webkit-padding-start: 8px;
    padding-inline-start:8px;-webkit-padding-end: 20px;
    padding-inline-end:20px;display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-radius: 8px;
    background-color: #fff
  }

  @media screen and (min-width: 767px)and (max-width:1247px) {
    .ButtonsWithQRCodeCard_render_all_buttons_for_web__5P0Or {
    }
  }

  .ButtonsWithQRCodeCard_button__TnVAZ {
    min-width: 130px;
    height: 36px
  }

  .RenderAllButtons_btnOfMobileContainer__Jgxz4 {
    display: flex;
    flex: 1 1
  }

  .RenderAllButtons_btnOfMobileContainer__Jgxz4:not(:last-child) {
    margin-bottom: 12px
  }

  .RenderAllButtons_btnOfMobileContainer__Jgxz4 .RenderAllButtons_btn2__y6FFQ {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1;
    width: 100%;
    height: 48px;
    font-size: 16px;
    border-radius: 53px
  }

  .RenderAllButtons_btnOfMobileContainer__Jgxz4 .RenderAllButtons_btn2__y6FFQ .iconfont {
    font-size: 24px
  }

  .RenderAllButtons_btnOfMobileContainer__Jgxz4 .RenderAllButtons_btn2__y6FFQ svg {
    -webkit-margin-end: 6px;
    margin-inline-end:6px}

  .RenderAllButtons_btnOfMobileContainer__Jgxz4 .RenderAllButtons_btn2__y6FFQ img {
    width: 32px;
    height: 32px;
    -webkit-margin-end: 6px;
    margin-inline-end:6px}

  .RenderAllButtons_btnOfMobileContainer__Jgxz4 .RenderAllButtons_secondary__laBLU {
    color: var(--text-primary)
  }

  .RenderAllButtons_render_all_buttons_for_web__c5jF5 {
    width: 486px;
    margin-top: 12px;
    padding: 24px 0;
    -webkit-padding-start: 8px;
    padding-inline-start:8px;-webkit-padding-end: 20px;
    padding-inline-end:20px;display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-radius: 8px;
    background-color: #16171a
  }

  @media screen and (min-width: 767px)and (max-width:1247px) {
    .RenderAllButtons_render_all_buttons_for_web__c5jF5 {
      width:430px
    }
  }

  .RenderAllButtons_render_all_buttons_for_web__c5jF5 a {
    height: 32px;
    border-radius: 100px
  }

  .RenderAllButtons_render_all_buttons_for_web__c5jF5 a img {
    width: 16px;
    height: 16px;
    -webkit-margin-end: 6px;
    margin-inline-end:6px}

  .RenderAllButtons_downloadButton1__9lyKG {
    min-width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-primary);
    padding: 5px 12px;
    border-radius: 100px;
    border: 1px solid var(--border-opacity)
  }

  .RenderAllButtons_downloadButton1__9lyKG svg {
    -webkit-margin-end: 6px;
    margin-inline-end:6px}

  .RenderAllButtons_downloadButton1__9lyKG:hover {
    background-color: var(--fill-modal-button-hover)
  }

  .RenderAllButtons_downloadButton1__9lyKG .iconfont {
    font-size: 16px
  }

  .RenderAllButtons_descriptionOfButton__IEbng {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: var(--text-primary);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    margin-top: 16px;
    margin-bottom: 20px
  }

  .ButtonsOfMobile_bgWrapper__7x23m {
    margin-top: 40px
  }

  .ButtonsOfMobile_bgWrapper__7x23m img {
    width: 100%;
    height: 100%
  }

  .ButtonsOfMobile_downloadBtns__BJ6px {
    width: 100%;
    background: var(--bg-primary);
    padding: 0 10px;
    margin-top: 20px
  }

  .ButtonsOfMobile_downloadBtns__BJ6px .ButtonsOfMobile_btnContainer__imWpJ {
    display: flex;
    flex: 1 1
  }

  .ButtonsOfMobile_downloadBtns__BJ6px .ButtonsOfMobile_btnContainer__imWpJ .ButtonsOfMobile_btn2__Mvqbj {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1;
    width: 100%;
    height: 48px;
    font-size: 16px;
    border-radius: 53px
  }

  .ButtonsOfMobile_downloadBtns__BJ6px .ButtonsOfMobile_btnContainer__imWpJ .ButtonsOfMobile_btn2__Mvqbj .iconfont {
    font-size: 24px
  }

  .ButtonsOfMobile_downloadBtns__BJ6px .ButtonsOfMobile_btnContainer__imWpJ .ButtonsOfMobile_btn2__Mvqbj svg {
    -webkit-margin-end: 6px;
    margin-inline-end:6px}

  @media(max-width: 767px) {
    .ButtonsOfMobile_bgWrapper__7x23m {
      display:flex;
      justify-content: center;
      align-items: center;
      margin-top: 4px
    }

    .ButtonsOfMobile_bgWrapper__7x23m img {
      width: 69.33vw
    }
  }

  .ButtonsOfMobile_buttonWrapper__5U4HN {
    margin-top: 12px;
    -webkit-margin-start: -6px;
    margin-inline-start:-6px;display: flex;
    justify-content: flex-start;
    flex-wrap: wrap
  }

  .ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX {
    margin: 0;
    display: flex;
    justify-content: center
  }

  .ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX .ButtonsOfMobile_downloadButton1__QQvIa,.ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX a {
    height: 40px;
    border-radius: 53px
  }

  .ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX .ButtonsOfMobile_downloadButton1__QQvIa img,.ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX a img {
    width: 24px;
    height: 24px
  }

  .ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX .ButtonsOfMobile_downloadButton1__QQvIa span,.ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX a span {
    -webkit-margin-start: 4px;
    margin-inline-start:4px;width: 230px
  }

  .ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX .ButtonsOfMobile_downloadButton1__QQvIa {
    min-width: 108px;
    padding: 10px 12px
  }

  .ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX .ButtonsOfMobile_btnContainer__imWpJ {
    height: 48px;
    width: 100%;
    flex: auto;
    margin-top: 16px
  }

  .ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX .ButtonsOfMobile_btnContainer__imWpJ .ButtonsOfMobile_btn2__Mvqbj.ButtonsOfMobile_one__S_QR1 span {
    width: auto
  }

  .ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX .ButtonsOfMobile_btnContainer__imWpJ .ButtonsOfMobile_btn2__Mvqbj .iconfont,.ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX .ButtonsOfMobile_btnContainer__imWpJ .ButtonsOfMobile_btn2__Mvqbj.ButtonsOfMobile_one__S_QR1 img {
    -webkit-margin-end: 0!important;
    margin-inline-end:0!important}

  .ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX .ButtonsOfMobile_btnNew__a0Zqc {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    color: var(--text-primary);
    padding: 5px 12px;
    border-radius: 53px
  }

  .ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX .ButtonsOfMobile_btnNew__a0Zqc .iconfont {
    font-size: 24px!important;
    -webkit-margin-end: 0!important;
    margin-inline-end:0!important}

  .ButtonsOfMobile_buttonWrapper__5U4HN.ButtonsOfMobile_isH5__3elaX .ButtonsOfMobile_btnNew__a0Zqc span {
    -webkit-margin-start: 4px;
    margin-inline-start:4px;width: 230px;
    text-align: center
  }

  .ButtonsOfMobile_buttonWrapper__5U4HN a {
    height: 32px;
    border-radius: 100px;
    margin: 12px 6px 0
  }

  .ButtonsOfMobile_buttonWrapper__5U4HN a img {
    width: 16px;
    height: 16px;
    -webkit-margin-end: 6px;
    margin-inline-end:6px}

  .download_wrapper__EH9F4 {
    position: relative;
    overflow: hidden;
    color: #fff;
    min-height: 500px
  }

  .download_mainDetail__cSpYA {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: 100%;
    background-size: 612px 612px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 74px;
    padding-bottom: 77px
  }

  @media screen and (min-width: 768px)and (max-width:1248px) {
    .download_mainDetail__cSpYA {
      padding-top:48px;
      padding-bottom: 48px;
      -webkit-padding-start: 20px;
      padding-inline-start:20px;-webkit-padding-end: 20px;
      padding-inline-end:20px;background-size: 292px 292px;
      max-width: 350px
    }
  }

  .download_bgMobileDark__9WpWW,.download_bgMobileLight__swNxS {
  }

  html[dir=rtl] .download_mainDetail__cSpYA {
    background-position: 0
  }

  .download_logo__FzqiT {
    width: 140px
  }

  .download_titleWrapper__ur648 .download_describe__hLlem {
    font-size: 54px;
    line-height: 62px;
    font-weight: 600;
    max-width: 588px;
    color: var(--text-primary);
    margin: 0 0 16px
  }

  @media screen and (min-width: 768px)and (max-width:1248px) {
    .download_titleWrapper__ur648 .download_describe__hLlem {
      max-width:460px;
      font-size: 36px;
      line-height: 44px
    }
  }

  .download_titleWrapper__ur648 .download_description__zLotf {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 22px;
    max-width: 460px;
    margin-bottom: 0
  }

  @media screen and (max-width: 768px) {
    .download_titleWrapper__ur648 .download_description__zLotf {
      max-width:276px
    }
  }

  @media screen and (min-width: 1248px) {
    html[lang|=zh] .download_titleWrapper__ur648 .download_describe__hLlem {
      max-width:530px
    }
  }

  .download_downloadWrapper__HnbcE {
    margin-top: 24px;
  }

  @media screen and (min-width: 768px)and (max-width:1248px) {
    .download_downloadWrapper__HnbcE {
      width:354px
    }
  }

  .download_downloadList__MswlQ {
    width: 364px;
    -webkit-margin-end: 30px;
    margin-inline-end:30px}

  .download_downloadList__MswlQ .ant-tabs .ant-tabs-nav {
    margin-bottom: 20px
  }

  .download_downloadList__MswlQ .ant-tabs .ant-tabs-nav:before {
    border: none
  }

  .download_downloadList__MswlQ .ant-tabs .ant-tabs-nav .ant-tabs-tab {
    font-size: 14px;
    line-height: 20px;
    height: 48px
  }

  .download_downloadList__MswlQ .ant-tabs .ant-tabs-tab+.ant-tabs-tab {
    -webkit-margin-start: 24px;
    margin-inline-start:24px}

  .download_phoneDownloadButton__7b0E5 .download_downloadButton__04NKG {
    margin-bottom: 6px
  }

  .download_bgWrapper__kvOjH {
    margin-top: 40px
  }

  .download_bgWrapper__kvOjH img {
    width: 100%;
    height: 100%
  }

  .download_vLine__bFF75 {
    line-height: 24px;
    max-width: 400px
  }

  @media(max-width: 760px) {
    .download_wrapper__EH9F4 {
      padding-top: 0;
      padding-bottom: 32px;

    }

    .download_logo__FzqiT {
      width: 180px
    }

    .download_describe__hLlem {
      font-size: 24px;
      line-height: 1.4
    }

    .download_mainDetail__cSpYA {
      height: auto;
      -webkit-padding-end: 24px;
      padding-inline-end:24px}

    .download_downloadList__MswlQ {
      width: 100%;
      -webkit-margin-end: 0;
      margin-inline-end:0}

    .download_downloadList__MswlQ .download_version__bTc9u {
      margin-top: 0
    }

    .download_downloadGroup__cuc0x {
      margin-bottom: 0
    }

    .download_downloadButton__04NKG,.download_phoneDownloadButton__7b0E5 {
      width: 100%;
      margin-bottom: 30px
    }

    .download_downloadScan__nGhNQ {
      margin: 0 auto
    }

    .download_downloadScan__nGhNQ .download_downloadQrcodeWrapper__4SL3P {
      margin-top: 20px
    }
  }

  .download_downloadQrcodeWrapper__4SL3P {
    margin-top: 68px;
    padding: 16px 30px;
    margin-bottom: 12px;
    border-radius: 1px;
    border: 1px solid var(--border-primary);
    font-size: 0;
    background-color: var(--bg-modal)
  }

  .download_downloadQrcode__pNMXh {
    background-color: #fff
  }

  .download_describe__hLlem {
    color: var(--text-primary)
  }

  .download_wrapper__EH9F4 {
    background: var(--bg-primary)
  }

  .download_wrapper__EH9F4:after {
    background-image: none
  }

  .download_downloadBtns__DhuPm {
    width: 100%;
    background: var(--bg-primary);
    padding: 0 10px;
    margin-top: 20px
  }

  .download_downloadBtns__DhuPm .download_btnContainer__7Hb07 {
    display: flex;
    flex: 1 1
  }

  .download_downloadBtns__DhuPm .download_btnContainer__7Hb07 .download_btn2__0U4_L {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1;
    width: 100%;
    height: 48px;
    font-size: 16px;
    border-radius: 53px
  }

  .download_downloadBtns__DhuPm .download_btnContainer__7Hb07 .download_btn2__0U4_L .iconfont {
    font-size: 24px
  }

  .download_downloadBtns__DhuPm .download_btnContainer__7Hb07 .download_btn2__0U4_L svg {
    -webkit-margin-end: 6px;
    margin-inline-end:6px}

  .download_descriptionWrapper__dQEaI {
    background-color: #16171a;
    padding: 48px 0;
    display: flex;
    justify-content: center;
    align-items: center
  }

  .download_descriptionWrapper__dQEaI .download_container__31GdS {
    max-width: 904px;
    margin: 0 20px
  }

  .download_descriptionWrapper__dQEaI .download_container__31GdS .download_title__ZD_5i {
    font-size: 36px;
    line-height: 44px;
    font-weight: 600;
    text-align: center;
    color: var(--text-primary)
  }

  .download_descriptionWrapper__dQEaI .download_container__31GdS .download_description__zLotf {
    padding-top: 16px;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: var(--text-secondary)
  }

  .download_descriptionWrapper__dQEaI .download_container__31GdS .download_contentWrapper__YLhh4 {
    padding-top: 32px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    gap: 0 32px
  }

  .download_descriptionWrapper__dQEaI .download_container__31GdS .download_contentWrapper__YLhh4 .download_content__9WHT9 {
    max-width: 280px
  }

  .download_descriptionWrapper__dQEaI .download_container__31GdS .download_contentWrapper__YLhh4 .download_content__9WHT9 img {
    width: 150px;
    height: 100px
  }

  .download_descriptionWrapper__dQEaI .download_container__31GdS .download_contentWrapper__YLhh4 .download_content__9WHT9 .download_contentTitle__vdlC9 {
    margin: 12px 0;
    font-size: 20px;
    line-height: 28px;
    color: var(--text-primary)
  }

  .download_descriptionWrapper__dQEaI .download_container__31GdS .download_contentWrapper__YLhh4 .download_content__9WHT9 .download_contentDes__3P6YH {
    font-size: 14px;
    line-height: 22px;
    color: var(--text-secondary)
  }

  @media(max-width: 767px) {
    .download_wrapper__EH9F4 {
      padding-bottom:32px;
      min-height: 0
    }

    .download_mainDetail__cSpYA {
      margin: 0 auto;
      padding: 0;
      min-height: 0
    }

    .download_mainDetail__cSpYA .download_titleWrapper__ur648 {
      margin: 0 20px;
      padding-top: 12px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column
    }

    .download_mainDetail__cSpYA .download_titleWrapper__ur648 .download_describe__hLlem {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 12px;
      max-width: 480px
    }

    .download_mainDetail__cSpYA .download_bgWrapper__kvOjH {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 4px
    }

    .download_mainDetail__cSpYA .download_bgWrapper__kvOjH img {
      width: 69.33vw
    }

    .download_descriptionWrapper__dQEaI,.download_downloadWrapper__HnbcE {
      display: none
    }

    .download_androidBtns__WWWGM {
      display: flex;
      justify-content: space-between;
      align-items: center
    }
  }

  .download_QrcodeWrapper__sz3rU {
    display: flex;
    gap: 21px;
    align-items: center;
    background-color: #16171a;
    padding: 11px 13px;
    border-radius: 8px
  }

  .download_QrcodeWrapper__sz3rU .download_qrcodeBg__1f_Xf {
    line-height: 0;
    width: 92px;
    height: 92px
  }

  .download_QrcodeWrapper__sz3rU .download_downloadScanDesc1__iK2ha {
    margin-bottom: 0;
    line-height: 20px;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary)
  }

  .download_QrcodeWrapper__sz3rU .download_downloadScanDesc1__iK2ha span {
    display: block;
    line-height: 20px;
    font-size: 12px
  }

  .download_buttonWrapper__bB6xF {
    margin-top: 12px;
    -webkit-margin-start: -6px;
    margin-inline-start:-6px;display: flex;
    justify-content: flex-start;
    flex-wrap: wrap
  }

  .download_buttonWrapper__bB6xF.download_isH5__pCltv {
    margin: 0;
    display: flex;
    justify-content: center
  }

  .download_buttonWrapper__bB6xF.download_isH5__pCltv .download_downloadButton1__MLmbR,.download_buttonWrapper__bB6xF.download_isH5__pCltv a {
    height: 40px;
    border-radius: 53px
  }

  .download_buttonWrapper__bB6xF.download_isH5__pCltv .download_downloadButton1__MLmbR img,.download_buttonWrapper__bB6xF.download_isH5__pCltv a img {
    width: 24px;
    height: 24px
  }

  .download_buttonWrapper__bB6xF.download_isH5__pCltv .download_downloadButton1__MLmbR span,.download_buttonWrapper__bB6xF.download_isH5__pCltv a span {
    -webkit-margin-start: 4px;
    margin-inline-start:4px;width: 230px
  }

  .download_buttonWrapper__bB6xF.download_isH5__pCltv .download_downloadButton1__MLmbR {
    min-width: 108px;
    padding: 10px 12px
  }

  .download_buttonWrapper__bB6xF.download_isH5__pCltv .download_btnContainer__7Hb07 {
    height: 48px;
    width: 100%;
    flex: auto;
    margin-top: 16px
  }

  .download_buttonWrapper__bB6xF.download_isH5__pCltv .download_btnContainer__7Hb07 .download_btn2__0U4_L.download_one__wxr7S span {
    width: auto
  }

  .download_buttonWrapper__bB6xF.download_isH5__pCltv .download_btnContainer__7Hb07 .download_btn2__0U4_L .iconfont,.download_buttonWrapper__bB6xF.download_isH5__pCltv .download_btnContainer__7Hb07 .download_btn2__0U4_L.download_one__wxr7S img {
    -webkit-margin-end: 0!important;
    margin-inline-end:0!important}

  .download_buttonWrapper__bB6xF.download_isH5__pCltv .download_btnNew__nl5EF {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    color: var(--text-primary);
    padding: 5px 12px;
    border-radius: 53px
  }

  .download_buttonWrapper__bB6xF.download_isH5__pCltv .download_btnNew__nl5EF .iconfont {
    font-size: 24px!important;
    -webkit-margin-end: 0!important;
    margin-inline-end:0!important}

  .download_buttonWrapper__bB6xF.download_isH5__pCltv .download_btnNew__nl5EF span {
    -webkit-margin-start: 4px;
    margin-inline-start:4px;width: 230px;
    text-align: center
  }

  .download_buttonWrapper__bB6xF a {
    height: 32px;
    border-radius: 100px;
    margin: 12px 6px 0
  }

  .download_buttonWrapper__bB6xF a img {
    width: 16px;
    height: 16px;
    -webkit-margin-end: 6px;
    margin-inline-end:6px}

  .download_downloadTilte__LfWnK {
    color: var(--text-primary);
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 2px
  }

  .download_downloadButton1__MLmbR {
    min-width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-primary);
    padding: 5px 12px;
    border-radius: 100px;
    border: 1px solid var(--border-opacity)
  }

  .download_downloadButton1__MLmbR svg {
    -webkit-margin-end: 6px;
    margin-inline-end:6px}

  .download_downloadButton1__MLmbR:hover {
    background-color: var(--fill-modal-button-hover)
  }

  .download_downloadButton1__MLmbR .iconfont {
    font-size: 16px
  }

  .download_downloadButton__04NKG {
    min-width: 158px;
    height: 48px;
    padding: 12px 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 12px;
    font-size: 14px;
    line-height: 22px
  }

  .download_downloadButton__04NKG .iconfont {
    font-size: 20px
  }

  .download_versionWrapper__ICxSF {
    display: flex;
    margin-top: 24px
  }

  .download_versionWrapper__ICxSF .download_version__bTc9u {
    display: block;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-tertiary);
    cursor: pointer
  }

  .download_guideWrapper__4mqIK {
    max-width: 1442px;
    min-width: 984px;
    margin: auto
  }

  .download_guideWrapper__4mqIK.download_forAndroid__mh7Qw {
    margin-top: 120px
  }

  .download_guideWrapper__4mqIK.download_forIos__nFj1u {
    margin-top: 80px
  }

  .download_guideWrapper__4mqIK h2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    margin-bottom: 32px
  }

  .download_guideWrapper__4mqIK .download_content__9WHT9 {
    background: linear-gradient(180deg,#f7f8fa,rgba(247,248,250,0));
    border: 1px solid;
    border-bottom: none;
    border-radius: 16px;
    border-image-source: linear-gradient(180deg,#ebedf1,rgba(235,237,241,0));
    padding: 60px 48px;
    display: flex;
    flex-direction: column;
    align-items: center
  }

  .download_guideWrapper__4mqIK .download_content__9WHT9 .download_step_title__JzG38 {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 12px
  }

  .download_guideWrapper__4mqIK .download_content__9WHT9 .download_myLink__b8LbC,.download_guideWrapper__4mqIK .download_content__9WHT9 .download_point__liiv2 {
    font-size: 20px;
    line-height: 28px
  }

  .download_guideWrapper__4mqIK .download_content__9WHT9 .download_myLink__b8LbC span,.download_guideWrapper__4mqIK .download_content__9WHT9 .download_point__liiv2 span {
    color: var(--primary-blue);
    cursor: pointer
  }

  .download_guideWrapper__4mqIK .download_content__9WHT9 .download_centerTxt__8NQMs {
    text-align: center
  }

  .download_guideWrapper__4mqIK .download_content__9WHT9 .download_myLink__b8LbC {
    color: var(--primary-blue);
    margin: 24px 0 80px
  }

  .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ {
    margin-top: 46px;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    width: 100%;
    justify-content: center
  }

  .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03 {
    flex: 1 1;
    min-width: 312px;
    display: flex;
    flex-direction: column;
    align-items: center
  }

  .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03 .download_text__fR_KS {
    width: 304px;
    flex: 1 1
  }

  .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03 .download_text__fR_KS .download_icon__HBsjx {
    width: 20px;
    margin: 0 2px;
    position: relative;
    top: -2px
  }

  .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03 .download_guideImg__7jWBZ {
    display: flex;
    justify-content: center
  }

  .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03 .download_guideImg__7jWBZ img {
    margin-top: 40px;
    width: 150px
  }

  .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03 .download_guideImg__7jWBZ img+img {
    -webkit-margin-start: 12px;
    margin-inline-start:12px}

  @media(max-width: 1024px) {
    .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ {
      margin-top:0;
      flex-direction: column
    }

    .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03 {
      margin-top: 60px
    }

    .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03+.download_step_item__irj03 {
      -webkit-margin-start: unset;
      margin-inline-start:unset}

    .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03 .download_text__fR_KS {
      width: 100%;
      font-size: 16px;
      line-height: 24px
    }

    .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03 .download_guideImg__7jWBZ img {
      width: 300px
    }
  }

  @media(max-width: 767px) {
    .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03 .download_guideImg__7jWBZ {
      flex-direction:column
    }

    .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03 .download_guideImg__7jWBZ img {
      margin-top: 24px
    }

    .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03 .download_guideImg__7jWBZ img+img {
      -webkit-margin-start: unset;
      margin-inline-start:unset}

    .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03 .download_text__fR_KS {
      font-size: 14px;
      line-height: 20px
    }
  }

  @media(max-width: 1024px) {
    .download_guideWrapper__4mqIK .download_content__9WHT9 {
      padding:60px 52px
    }
  }

  @media(max-width: 767px) {
    .download_guideWrapper__4mqIK .download_content__9WHT9 {
      padding:50px 16px
    }

    .download_guideWrapper__4mqIK .download_content__9WHT9 .download_step_title__JzG38 {
      font-size: 20px;
      line-height: 28px
    }

    .download_guideWrapper__4mqIK .download_content__9WHT9 .download_myLink__b8LbC,.download_guideWrapper__4mqIK .download_content__9WHT9 .download_point__liiv2 {
      font-size: 16px;
      line-height: 24px
    }

    .download_guideWrapper__4mqIK .download_content__9WHT9 .download_myLink__b8LbC {
      margin-bottom: 60px
    }

    .download_guideWrapper__4mqIK .download_content__9WHT9 .download_stepsWrapper__7qvl_ .download_step_item__irj03 {
      margin-top: 30px
    }
  }

  @media(min-width: 1200px) {
    .download_guideWrapper__4mqIK {
      padding:0 120px
    }
  }

  @media(max-width: 1024px) {
    .download_guideWrapper__4mqIK {
      min-width:unset;
      padding: 0 24px
    }
  }

  @media(max-width: 767px) {
    .download_guideWrapper__4mqIK {
      padding:0 16px
    }

    .download_guideWrapper__4mqIK.download_forAndroid__mh7Qw,.download_guideWrapper__4mqIK.download_forIos__nFj1u {
      margin-top: 60px
    }

    .download_guideWrapper__4mqIK h2 {
      font-size: 24px;
      line-height: 32px
    }
  }

  [data-theme=dark] .download_guideWrapper__4mqIK .download_content__9WHT9 {
    background: linear-gradient(180deg,#16171a,rgba(22,23,26,0));
    border-image-source: linear-gradient(180deg,#222429,rgba(34,36,41,0))
  }

  .download_myGuideWrapper__nk1yl {
    text-align: center;
    padding: 0 24px;
    max-width: 1128px;
    margin: 120px auto;
    font-size: 14px;
    line-height: 20px
  }

  .download_myGuideWrapper__nk1yl h1 {
    font-size: 40px;
    line-height: 48px;
    font-weight: 600;
    margin-bottom: 48px
  }

  @media(max-width: 767px) {
    .download_myGuideWrapper__nk1yl h1 {
      font-size:36px;
      line-height: 44px;
      margin-bottom: 24px
    }
  }

  .download_myGuideWrapper__nk1yl p {
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    margin-bottom: 12px
  }

  @media(max-width: 767px) {
    .download_myGuideWrapper__nk1yl p {
      font-size:20px;
      line-height: 28px;
      margin-bottom: 8px
    }
  }

  .download_myGuideWrapper__nk1yl .download_desc__QaCKo {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 20px
  }

  @media(max-width: 767px) {
    .download_myGuideWrapper__nk1yl .download_desc__QaCKo {
      font-size:12px;
      line-height: 16px;
      margin-bottom: 50px
    }
  }

  .download_myGuideWrapper__nk1yl .download_step_item__irj03 {
    text-align: start;
    margin-top: 60px;
    font-size: 16px;
    line-height: 24px
  }

  .download_myGuideWrapper__nk1yl .download_step_item__irj03 .download_myText__G7CL_ a,.download_myGuideWrapper__nk1yl .download_step_item__irj03 .download_myText__G7CL_ span {
    color: var(--primary-blue);
    cursor: pointer;
    text-decoration: underline
  }

  .download_myGuideWrapper__nk1yl .download_step_item__irj03 .download_myText__G7CL_ img {
    position: relative;
    top: -2px
  }

  .download_myGuideWrapper__nk1yl .download_step_item__irj03 .download_myImg__9BRsP {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 48px
  }

  .download_myGuideWrapper__nk1yl .download_step_item__irj03 .download_myImg__9BRsP img {
    width: 300px
  }

  .download_myGuideWrapper__nk1yl .download_step_item__irj03 .download_myImg__9BRsP img+img {
    -webkit-margin-start: 48px;
    margin-inline-start:48px}

  @media(max-width: 1024px) {
    .download_myGuideWrapper__nk1yl .download_step_item__irj03 .download_mutiImg__0n8Gt img {
      width:208px
    }

  }
  @media(max-width: 767px) {
    .download_myGuideWrapper__nk1yl .download_step_item__irj03 {
      margin-top:30px;
      font-size: 14px;
      line-height: 20px
    }

    .download_myGuideWrapper__nk1yl .download_step_item__irj03 .download_mutiImg__0n8Gt img {
      width: 300px
    }

    .download_myGuideWrapper__nk1yl .download_step_item__irj03 .download_myImg__9BRsP {
      flex-direction: column;
      margin-top: 24px
    }

    .download_myGuideWrapper__nk1yl .download_step_item__irj03 .download_myImg__9BRsP img+img {
      -webkit-margin-start: unset;
      margin-inline-start:unset;margin-top: 24px
    }

    .download_myGuideWrapper__nk1yl {
      padding: 0 16px;
      margin: 60px auto 50px
    }
  }
  .ButtonsWithQRCodeCard_cardWrapper__6d8cM,.ButtonsWithQRCodeCard_render_all_buttons_for_web__5P0Or {
    color: #ffffff;
  }
  .ant-row {
    flex-flow: row wrap;
    min-width: 0;
  }
  .ant-row, .ant-row:after, .ant-row:before {
    display: flex;
  }
  .ant-col {
    position: relative;
    max-width: 100%;
    min-height: 1px;
  }
  .ant-col-12 {
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .download_wrapper__EH9F4 {
    display: flex;
  }
  .hidepc {
    display: none;
  }
  .showpc {
    display: block;
  }
  @media (max-width: 768px) {
    .showmobile {
      display: block !important;
    }
    .hidemobile {
      display: none !important;
    }
  }
  .download_mainDetail__cSpYA {
    width: 475px;
    max-width: 100%;
  }
</style>
