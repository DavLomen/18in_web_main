<template>
  <div class="HomePage" style="overflow-x: hidden">
    <Header></Header>
    <div class="third-wraper third-wraper-en row" style="background:#edeef4;max-width: 100%">
          <div class="col pc">
            <img :src="'./static/image/appapp.png?t=3'" style="width: 100%;object-fit: contain;max-height: 600px">
          </div>
          <div class="third-content-bg col" >
            <div class="third-content" >
              <div class="third-content-tip" >
                <div class="third-content-tip-l" ></div>
                - {{$t('appDown[1]')}} -
                <div class="third-content-tip-r" ></div>
              </div>
              <p class="third-content-title" >{{$t('appDown[2]')}}</p>
              <div class="third-content-erweima" ><img id="a2180f73-ba82-4299-bc3e-122a87b9a521"
                                                       style="display:inline-block;"
                                                       :src="'./static/image/qrcode.jpg?t=5'">
              </div>
              <p class="third-content-desc" >{{$t('appDown[3]')}}</p>
              <div class="third-download" >
                <a @click="downloadApp('google')"
                  id="home__download__google" href="javascript:;"
                  target="_blank" class="third-download-r third-download-item" >
                  <img alt=""  class="lazyLoad isLoaded"  :src="'./static/image/google.png?t=1'"></a>
                <a id="home__download__ios" @click="downloadApp('ios')"
                                              href="javascript:;"
                                              target="_blank" class="third-download-r third-download-item"
              ><img alt=""
                    class="lazyLoad isLoaded"
                    :src="'./static/image/iphone.png?t=1'"></a>

                <a @click="downloadApp('andriod')"
                id="home__download__apk" target="_blank" class="third-download-l third-download-item"
                href="javascript:;"><img alt="" class="lazyLoad isLoaded" :src="'./static/image/android.png?t=1'"></a>
              </div>
            </div>
          </div>
        </div>
    <div class="mt-120 mb-120 cont_std std_2 std">
      <h1 class="title_adp">{{$t('appDown1[2]')}}</h1>
      <div class="grids mt-60">
        <div class="bt_block">
          <img :src="'./static/images/app1.png'" class="bt_round">
          <div class="bt_desc">
            <h3>{{$t('appDown1[3]')}}</h3>
            <p>{{$t('appDown1[4]')}}</p>
          </div>
        </div>
        <div class="bt_block">
          <img :src="'./static/images/app2.png'" class="bt_round">
          <div class="bt_desc">
            <h3>{{$t('appDown1[5]')}}</h3>
            <p>{{$t('appDown1[6]')}}</p>
          </div>
        </div>
        <div class="bt_block">
          <img :src="'./static/images/app3.png'" class="bt_round">
          <div class="bt_desc">
            <h3>{{$t('appDown1[7]')}}</h3>
            <p>{{$t('appDown1[8]')}}</p>
          </div>
        </div>
        <div class="bt_block">
          <img :src="'./static/images/app4.png'" class="bt_round">
          <div class="bt_desc">
            <h3>{{$t('appDown1[9]')}}</h3>
            <p>{{$t('appDown1[10]')}}</p>
          </div>
        </div>
      </div>
    </div>
    <section class="pt-80 pb-80 real-time-wrap">
      <div class="d-flex align-items-center real-time-flex">
        <div class="real-time-left wow bounceInLeft" data-wow-duration="1s" data-wow-delay="0.3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s;">
          <div class="rt-max-width">
            <h3 class="main-heading text-start"><span>{{$t('appDown[4]')}}</span></h3>
            <p class="mt-30">{{$t('appDown[5]')}} </p>
            <div class="row mt-30">
              <div class="col-md-4 col-6 text-center">
                <div class="rt-icon">
                  <img :src="'./static/image/fully-decentralized-system-icon.png'" alt="Cloud mining, crypto currency mining, bitcoin mining">
                </div>
                <p v-html="$t('appDown[6]')"></p>
              </div>
              <div class="col-md-4 col-6 text-center">
                <div class="rt-icon">
                  <img :src="'./static/image/live-monitoring-icon.png'" alt="Cloud mining, crypto currency mining, bitcoin mining">
                </div>
                <p v-html="$t('appDown[7]')"></p>
              </div>
              <div class="col-md-4 col-6 text-center">
                <div class="rt-icon">
                  <img :src="'./static/image/real-time-icon3.png'" alt="Cloud mining, crypto currency mining, bitcoin mining">
                </div>
                <p v-html="$t('appDown[8]')"></p>
              </div>
              <div class="col-md-4 col-6 text-center">
                <div class="rt-icon">
                  <img :src="'./static/image/real-time-icon4.png'" alt="Cloud mining, crypto currency mining, bitcoin mining">
                </div>
                <p v-html="$t('appDown[9]')"></p>
              </div>
              <div class="col-md-4 col-6 text-center">
                <div class="rt-icon">
                  <img :src="'./static/image/real-time-icon5.png'" alt="Cloud mining, crypto currency mining, bitcoin mining">
                </div>
                <p v-html="$t('appDown[10]')"></p>
              </div>
              <div class="col-md-4 col-6 text-center">
                <div class="rt-icon">
                  <img :src="'./static/image/real-time-icon6.png'" alt="Cloud mining, crypto currency mining, bitcoin mining">
                </div>
                <p v-html="$t('appDown[11]')"></p>
              </div>
            </div>
            <div class="mt-30">
              <a href="javascript:;" @click="$router.push('/login')" class="theme-btn lg-btn">{{$t('appDown[12]')}}</a>
            </div>
          </div>
        </div>
        <div class="real-time-right ml-auto wow bounceInRight pc" data-wow-duration="1s" data-wow-delay="0.6s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.6s;">
          <img :src="'./static/image/real-time-img.webp'" alt="Cloud mining, crypto currency mining, bitcoin mining">
        </div>
      </div>
    </section>
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
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 768px){
    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }
  }
  @media (min-width: 992px){
    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
  }
  @media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      margin: 0 auto;
    }
  }
  .col-lg-6 {
    width: 100%;
  }
  @media (min-width: 992px){
    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-lg-6 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  .col {
    flex: 1 0 0%;
  }
  .col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  .oglav p {
    font-family: 'Poppins';
    color: #E94E4E;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 2.88px;
    text-transform: uppercase;
    margin: 0;
  }
  .oglav h1 {
    font-family: 'Poppins';
    color: #18181B;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    margin: 0;
  }
  .feats {
    display: grid;
    gap: 32px;
  }
  .headef {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .headef p {
    font-family: 'Poppins';
    color: #18181B;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0;
  }
  .bodyf p {
    font-family: 'Poppins';
    color: #71717A;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    text-transform: capitalize;
    margin: 16px 0 0 0;
  }
  .d11 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
  }
  .blockd {
    width: 100%;
    height: 318px;
    border-radius: 4px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), #F55;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    z-index: -1;
    position: absolute;
  }

  .third-wraper {
    padding-top: 50px;
    overflow: hidden;
    position: relative
  }

  .third-wraper .third-bk-img {
    bottom: 0;
    height: 100%;
    overflow: hidden;
    position: absolute;
    position: relative;
    width: 100%
  }

  .third-wraper .third-bk-img img,.third-wraper .third-content-bg {
    /*height: 100%;*/
    /*left: 60%;*/
    /*position: absolute;*/
    /*transform: translateX(-60%)*/
  }

  .third-wraper .third-content-bg {
    /*top: 0;*/
    width: 50%;
  }

  .third-wraper .third-content {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center
  }

  .third-wraper .third-content-tip {
    background: linear-gradient(180deg,#f9e6c9,#e2c79d);
    color: #000;
    display: inline-block;
    font-size: 14px;
    height: 28px;
    line-height: 28px;
    padding: 0 20px;
    position: relative
  }

  .third-wraper .third-content-tip-l {
    border-color: transparent transparent transparent #edeef4;
    border-style: solid;
    border-width: 14px 0 14px 7px;
    left: 0;
    position: absolute;
    top: 0
  }

  .third-wraper .third-content-tip-r {
    border-color: transparent #edeef4 transparent transparent;
    border-style: solid;
    border-width: 14px 7px 14px 0;
    position: absolute;
    right: 0;
    top: 0
  }

  .third-wraper .third-content-title {
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 30px;
    margin-top: 23.5px
  }

  .third-wraper .third-content-erweima {
    align-items: center;
    background: linear-gradient(-70deg,#fff,#fff);
    border-radius: 8px;
    display: flex;
    height: 178px;
    justify-content: center;
    margin: 0 auto 20px;
    width: 178px
  }

  .third-wraper .third-content-desc {
    font-size: 16px;
    font-style: italic;
    line-height: 1.3;
    margin: 0 auto;
    text-align: center;
    width: 230px
  }

  .third-wraper .third-content .third-download {
    display: flex;
    justify-content: space-between;
    margin: 45px auto 0;
    width: 100%;
    max-width: 450px;
  }

  .third-wraper .third-content .third-download-item {
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: transform .2s ease-in;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  .third-wraper .third-content .third-download-item img {
    height: 50px
  }

  .third-wraper .third-content .third-download-item:hover {
    transform: scale(.94)
  }
  .third-wraper .third-content .third-download-r {
  }
  .d-flex {
    display: flex !important;
  }
  .align-items-center {
    align-items: center !important;
  }
  .main-heading span:before {
    content: "";
    width: 5px;
    height: 50px;
    background: #3a5bc6;
    left: 0;
    top: 0;
    position: absolute;
  }
  @media (max-width: 1600px) {
    .main-heading span:before {
      height: 45px;
    }
  }
  @media (max-width: 1280px) {
    .main-heading span:before {
      height: 40px;
    }
  }
  @media (max-width: 768px) {
    .main-heading span:before {
      height: 33px;
      width: 4px;
      top: unset;
      bottom: 15px;
    }
  }
  .main-heading span:after {
    content: "";
    width: 60px;
    height: 5px;
    background: #3a5bc6;
    left: 0;
    bottom: 0;
    position: absolute;
  }
  @media (max-width: 768px) {
    .main-heading span:after {
      width: 50px;
      height: 3px;
    }
  }
  @keyframes bounceInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }

    60% {
      opacity: 1;
      -webkit-transform: translateX(30px);
      -ms-transform: translateX(30px);
      transform: translateX(30px);
    }

    80% {
      -webkit-transform: translateX(-10px);
      -ms-transform: translateX(-10px);
      transform: translateX(-10px);
    }

    100% {
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
    }
  }

  .bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    animation-name: bounceInLeft;
  }

  @-webkit-keyframes bounceInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      transform: translateX(2000px);
    }

    60% {
      opacity: 1;
      -webkit-transform: translateX(-30px);
      transform: translateX(-30px);
    }

    80% {
      -webkit-transform: translateX(10px);
      transform: translateX(10px);
    }

    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes bounceInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      transform: translateX(2000px);
    }

    60% {
      opacity: 1;
      -webkit-transform: translateX(-30px);
      -ms-transform: translateX(-30px);
      transform: translateX(-30px);
    }

    80% {
      -webkit-transform: translateX(10px);
      -ms-transform: translateX(10px);
      transform: translateX(10px);
    }

    100% {
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
    }
  }
  .ml-auto {
    margin-left: auto !important;
  }
  .real-time-left, .real-time-right {
    width: 50%;
  }
  .real-time-left, .real-time-right {
    width: 50%;
  }

  .bounceInRight {
    -webkit-animation-name: bounceInRight;
    animation-name: bounceInRight;
  }
  img {
    height: auto;
    max-width: 100%;
  }
  img, svg {
    vertical-align: middle;
  }
  .rt-max-width {
    max-width: 80%;
    float: right;
  }
  .main-heading {
    font-size: 2.3em;
    text-transform: uppercase;
    color: #000;
    font-weight: 500;
    text-align: center;
  }
  @media (max-width: 1280px) {
    .main-heading {
      font-size: 2em;
    }
  }
  .text-start {
    text-align: left !important;
  }
  .real-time-flex .main-heading {
    font-size: 2.1em;
  }
  @media (max-width: 1280px) {
    .real-time-flex .main-heading {
      font-size: 1.8em;
    }
  }
  @media (max-width: 1199px) {
    .real-time-flex .real-time-left .main-heading {
      font-size: 1.6em;
    }
  }
  .mt-30 {
    margin-top: 30px !important;
  }
  .row>* {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
  }
  .col-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  @media (min-width: 768px) {
    .col-md-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
  }

  .text-center {
    text-align: center !important;
  }
  .real-time-left {
    font-size: 1.5rem;
  }
  .lg-btn, .main-heading span, .mining-icon {
    display: inline-block;
  }
  .main-heading span {
    position: relative;
    padding: 2px 18px 12px;
    line-height: 1em;
  }
  .real-time-flex .main-heading span {
    padding: 2px 18px 15px;
  }
  @media (max-width: 1199px) {
    .real-time-flex .real-time-left .main-heading span {
      line-height: 1.1em;
    }
  }
  @media (max-width: 767px) {
    .real-time-flex .real-time-left .main-heading span {
      line-height: 0.8em;
    }
  }
  @media (max-width: 768px) {
    .real-time-right img {
      max-width: 70%;
    }
  }
  @media (max-width: 768px) {
    .main-heading span {
      padding: 2px 13px 10px;
    }
  }
  @media (max-width: 600px) {
    .real-time-flex .real-time-left .main-heading span, .main-heading span {
      line-height: 1.2em;
    }
  }
  .theme-btn {
    background: #3a5bc6;
    border-radius: 25px;
    color: #fff;
    border: 2px solid #3a5bc6;
  }
  .lg-btn {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    visibility: visible;
    box-sizing: border-box;
    text-decoration: none!important;
    transition: .5s ease-in-out;
    box-shadow: 0 0 20px rgba(0, 0, 0 ,0.2);
    cursor: pointer;
    font-weight: 500;
    text-align: center;
    display: inline-block;
    border: 2px solid #3a5bc6;
    border-radius: 65px;
    font-size: 1em;
    padding: 10px 44px;
    outline: 0;
    background: #3a5bc6;
    color: #fff;
  }
  .lg-btn:hover {
    background: #fff;
    color: #3a5bc6;
  }
  .pb-80 {
    padding-bottom: 60px;
  }
  .pt-80 {
    padding-top: 60px;
  }
  @media (max-width: 768px) {
    .pc {
      display: none;
    }
    .real-time-left {
      width: 100%;
    }
    .rt-max-width {
      max-width: 100%;
      text-align: center;
      float: none;
    }
    .real-time-wrap {
      padding-left: 20px;
      padding-right: 20px;
    }
    .pb-80 {
      padding-bottom: 40px !important;
    }
    .pt-80 {
      padding-top: 40px !important;
    }
    .third-wraper .third-content .third-download-item {
      -webkit-transform: scale(.84);
      transform: scale(.84);
    }
    .third-wraper .third-content .third-download-item:hover {
      -webkit-transform: scale(.74);
      transform: scale(.74);
    }
  }

  .bt_block {
    display: flex;
  }

  .bt_round {
    min-width: 72px;
    height: 72px;
    border-radius: 10px;
    background: linear-gradient(135deg,rgba(247,107,28,.1) 2.88%,rgba(251,218,97,.1) 98.13%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bt_round svg {
    width: 32px;
    height: 32px;
  }

  .bt_desc {
    margin-left: 2.5rem;
    line-height: 30px;
  }

  .bt_desc h3 {
    font-size: 20px;
    font-weight: 700;
  }
  .bt_desc p {
    margin-top: 5px;
    font-size: 16px;
  }
  .mt-60 {
    margin-top: 30px;
  }
  .grids {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    row-gap: 40px;
  }
  .mb-120 {
    margin-bottom: 120px;
  }
  .cont_std {
    max-width: 1160px;
    margin: 0 auto;
  }

  @media (max-width: 766px) {
    .std {
      padding: 0 20px;
    }
    .flex_b {
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }
    .qr_code_down {
      display: none;
    }
    .download_window {
      justify-content: center;
    }
    .block {
      display: inline-block;
    }
    .grids {
      grid-template-columns: none;
    }
    .bt_desc h3 {
      font-size: 18px;
    }
    .bt_desc p {
      font-size: 14px;
    }
    .bt_desc {
      margin-left: 1rem;
    }
    .title_adp {
      font-size: 30px;
    }
    .desc_hold p {
      font-size: 14px;
    }
    .std_2 {
      margin-bottom: 30px;
    }
  }


  .image_smart {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .image_smart img {
    width: 100%;
    position: relative;
  }
  .image_smart img:first-child {
    max-width: 482px;
    width: 100%;
    max-height: 494px;
    height: 100%;
    /*margin-top: 120px;*/
    /*margin-left: 70px;*/
  }

  /*.image_smart img:last-child {*/
  /*  position: relative;*/
  /*  max-width: 237px;*/
  /*  width: 100%;*/
  /*  max-height: 480px;*/
  /*  height: 100%;*/
  /*  transform: translateX(-80px);*/
  /*}*/
  .image_smart div {
    position: relative;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 476px) {
    .image_smart img:first-child {
      height: 416px;
      max-height: none;
    }
    .image_smart img:last-child {
      height: 404px;
      max-height: none;
    }
  }

  @media (max-width: 375px) {
    .image_smart img:first-child {
      width: 60%;
      height: auto;
      margin-left: 46px;
    }
    .image_smart img:last-child {
      width: 55%;
      height: calc(100% - 80px);
      transform: translateX(-51px);
    }
  }
  .title_adp {
    font-size: 45px;
    font-weight: 700;
  }

  @media (max-width: 766px) {
    .std {
      padding: 0 20px;
    }
    .flex_b {
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }
    .qr_code_down {
      display: none;
    }
    .download_window {
      justify-content: center;
    }
    .block {
      display: inline-block;
    }
    .grids {
      grid-template-columns: none;
    }
    .bt_desc h3 {
      font-size: 18px;
    }
    .bt_desc p {
      font-size: 14px;
    }
    .bt_desc {
      margin-left: 1rem;
    }
    .title_adp {
      font-size: 30px;
    }
    .desc_hold p {
      font-size: 14px;
    }
    .std_2 {
      margin-bottom: 30px;
    }
  }


  .image_smart {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .image_smart img {
    width: 100%;
    position: relative;
  }
  .image_smart img:first-child {
    max-width: 482px;
    width: 100%;
    max-height: 494px;
    height: 100%;
    /*margin-top: 120px;*/
    /*margin-left: 70px;*/
  }

  /*.image_smart img:last-child {*/
  /*  position: relative;*/
  /*  max-width: 237px;*/
  /*  width: 100%;*/
  /*  max-height: 480px;*/
  /*  height: 100%;*/
  /*  transform: translateX(-80px);*/
  /*}*/
  .image_smart div {
    position: relative;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 476px) {
    .image_smart img:first-child {
      height: 416px;
      max-height: none;
    }
    .image_smart img:last-child {
      height: 404px;
      max-height: none;
    }
  }

  @media (max-width: 375px) {
    .image_smart img:first-child {
      width: 60%;
      height: auto;
      margin-left: 46px;
    }
    .image_smart img:last-child {
      width: 55%;
      height: calc(100% - 80px);
      transform: translateX(-51px);
    }
  }
</style>
