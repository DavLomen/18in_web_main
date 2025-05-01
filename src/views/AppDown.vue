<template>
  <div class="HomePage" style="overflow-x: hidden">
    <Header></Header>
    <div class="container cont_std">
      <div class="features">
        <div class="features-content">
          <div class="feature-row">
            <div class="feature-content row"><h2 class="h2 mt-4">{{$t('appDown[0]')}}</h2>
              <div class="feature show"><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3Xm4bmV53/Hv3kxyODgBgkBwCJMTGlREIKJGTMTZONdgjM3V1EZStaaapM0ydhCTaIbaNGkuMdFE1LQipiSaqi8aRNFoqhJEMUxxQAGFA3gmzukfzz5hs9nD+75ruJ/1PN/Pdd3XOTGcve+19nr3/VvzApJKtg9wEnAKcDxwHHA4cG9g89J/cyvwA+BbwFeBK4CLgUuBnQP3K0mS5rQ/8BLgw8AWYPectQW4AHjx0teUJEkZOhL4XeBm5h/6a9UPgN8BjhhsaSRJ0roOBv4HsI3uB//K2gq8AzhokCWTJEl3swD8PHAj/Q/+lfU94JVLPUiSpIEcRDrHP/TgX1kXAPfteVklSRLwaOBa4of/nroG+LFel1iSpMo9kX4u8mtbW4Cn9rfYkiTV60zSRXjRw36t2go8rbellySpQo8jPbAneshvVLcDp/a0DiRJqsqDibnSf966AXhgHytCkqRa7ANcQvxQn7UuBfbtYX1IklSF3yZ+mM9bb+1hfUiSVLwTgB3ED/J5ayfwqM7XiiRJBVsEPkP8EG9bF+PTAiVJmtrziB/eXdWzOl43kiQV63PED+6u6rMdrxtJkor0JOKHdtd1eqdrSFJri9ENSLqbn41uoAcvj25A0l15cY6UlwOA7wCboxvp2C3A/UlPCpSUAY8ASHn5Ccob/gD3JJ3akJQJA4CUl5KHZMnLJo2OAUDKS8lDsuRlk0bHawCkfOwN3Ea5z9DfDmwC7ohuRJJHAKScPJhyhz+kZXtgdBOSEgOAlI+joxsYwDHRDUhKDABSPu4d3cAAalhGaRQMAFI+DoxuYAA1LKM0CgYAKR/7RzcwgAOiG5CUGACkfNTweaxhGaVR8MMoSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRVyAAgSVKFDACSJFXIACBJUoUMAJIkVcgAIElShQwAkiRV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"
                alt="download" class="app-icon"> <span
                class="app-content">
                {{$t('appDown[1]')}}
                </span></div>
              <div class="app-img">
                <img :src="'./static/images/qrcode.png?t=1'" >
              </div>
              <div class="app-img">
                <img @click="downloadApp('andriod')" :src="'./static/images/google-play.png'" >
                <img @click="downloadApp('ios')" :src="'./static/images/apple-store.png'" class="apple">
              </div>
              <div class="feature show"><img :src="'./static/images/join.9925b45.png'"
                                             alt="join" class="app-icon"> <span
                class="app-content">
                <b>{{$t('appDown[2]')}}</b>
              </span>
              </div>
            </div>
            <img id="feature-2" :src="'./static/images/feature-bg2.183b2a2.png'" alt=""></div>
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
    <img :src="'./static/image/appcc.png'" alt="" style="margin: 1rem auto;display: block;max-width: 1160px">
    <!--    <section class="pt-80 pb-80 real-time-wrap">-->
    <!--      <div class="d-flex align-items-center real-time-flex">-->
    <!--        <div class=" wow bounceInLeft" data-wow-duration="1s" data-wow-delay="0.3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s;">-->
    <!--          <div class="">-->
    <!--            <h3 class="main-heading text-start"><span>{{$t('appDown[4]')}}</span></h3>-->
    <!--            <p class="mt-30">{{$t('appDown[5]')}} </p>-->
    <!--            <div class="row mt-30">-->
    <!--              <div class="col-md-4 col-6 text-center">-->
    <!--                <div class="rt-icon">-->
    <!--                  <img :src="'./static/images/app21.png'" alt="Cloud mining, crypto currency mining, bitcoin mining">-->
    <!--                </div>-->
    <!--                <p v-html="$t('appDown[6]')"></p>-->
    <!--              </div>-->
    <!--              <div class="col-md-4 col-6 text-center">-->
    <!--                <div class="rt-icon">-->
    <!--                  <img :src="'./static/images/app22.png'" alt="Cloud mining, crypto currency mining, bitcoin mining">-->
    <!--                </div>-->
    <!--                <p v-html="$t('appDown[7]')"></p>-->
    <!--              </div>-->
    <!--              <div class="col-md-4 col-6 text-center">-->
    <!--                <div class="rt-icon">-->
    <!--                  <img :src="'./static/images/app23.png'" alt="Cloud mining, crypto currency mining, bitcoin mining">-->
    <!--                </div>-->
    <!--                <p v-html="$t('appDown[8]')"></p>-->
    <!--              </div>-->
    <!--              <div class="col-md-4 col-6 text-center">-->
    <!--                <div class="rt-icon">-->
    <!--                  <img :src="'./static/images/app24.png'" alt="Cloud mining, crypto currency mining, bitcoin mining">-->
    <!--                </div>-->
    <!--                <p v-html="$t('appDown[9]')"></p>-->
    <!--              </div>-->
    <!--              <div class="col-md-4 col-6 text-center">-->
    <!--                <div class="rt-icon">-->
    <!--                  <img :src="'./static/images/app25.png'" alt="Cloud mining, crypto currency mining, bitcoin mining">-->
    <!--                </div>-->
    <!--                <p v-html="$t('appDown[10]')"></p>-->
    <!--              </div>-->
    <!--              <div class="col-md-4 col-6 text-center">-->
    <!--                <div class="rt-icon">-->
    <!--                  <img :src="'./static/images/app26.png'" alt="Cloud mining, crypto currency mining, bitcoin mining">-->
    <!--                </div>-->
    <!--                <p v-html="$t('appDown[11]')"></p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="mt-30">-->
    <!--              <a href="javascript:;" @click="$router.push('/login')" class="theme-btn lg-btn">{{$t('appDown[12]')}}</a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--&lt;!&ndash;        <div class="real-time-right ml-auto wow bounceInRight pc" data-wow-duration="1s" data-wow-delay="0.6s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.6s;">&ndash;&gt;-->
    <!--&lt;!&ndash;          <img :src="'./static/image/real-time-img.webp'" alt="Cloud mining, crypto currency mining, bitcoin mining">&ndash;&gt;-->
    <!--&lt;!&ndash;        </div>&ndash;&gt;-->
    <!--      </div>-->
    <!--    </section>-->
    <Footer></Footer>
  </div>
</template>
<script>

  export default {
    name: 'appDown',
    components: {},
    data() {
      return {
        showIndex: -1
      }
    },

    computed: {},
    watch: {},
    created() {
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      downloadApp(app) {
        if (app == 'ios') {
          this.$Util.OpenUrl(this.InitData.setting.app_down_ios)
        } else if (app == 'andriod') {
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

  @media (min-width: 768px) {
    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }
  }

  @media (min-width: 992px) {
    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
  }

  @media (min-width: 1200px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      margin: 0 auto;
    }
  }

  .col-lg-6 {
    width: 100%;
  }

  @media (min-width: 992px) {
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

  .third-wraper .third-bk-img img, .third-wraper .third-content-bg {
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
    background: linear-gradient(180deg, #f9e6c9, #e2c79d);
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
    background: linear-gradient(-70deg, #fff, #fff);
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
    justify-content: center;
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

  .row > * {
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
    text-decoration: none !important;
    transition: .5s ease-in-out;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
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

  .rt-icon img {
    max-width: 10rem;
  }

  .features {
    padding: 0
  }

  .features .features-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 108px 0 96px
  }

  .features .features-content .feature-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 86px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 auto;
  }

  .features .features-content .feature-row.left-side .feature-content {
    margin-right: auto
  }

  .features .features-content .feature-row:not(.left-side) .feature-content {
    margin-left: auto
  }

  .features .features-content .feature-row .feature-content {
    max-width: 600px
  }

  .features .features-content .feature-row img {
    width: 70%;
    margin: 0 auto;
  }

  .features .features-content .feature-row .feature-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
  }

  .features .features-content .feature-row .feature-content > * + * {
    margin-top: 32px
  }

  .features .features-content .feature-row .feature-content .feature {
    display: grid;
    grid-template-columns: -webkit-max-content 1fr;
    grid-template-columns: max-content 1fr;
    grid-gap: 32px
  }

  .features .features-content .feature-row .features-content .feature .span {
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    color: #000
  }

  .app-img {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .app-img img {
    width: 160px !important;
    height: auto;
    max-width: 160px;
  }

  .features .features-content .feature-row .app-img img {
    width: 160px !important;
    max-width: 160px !important;
  }

  .apple {
    margin-left: 3px;
  }

  .features .features-content .feature-row .app-icon {
    width: 72px;
  }

  .app-content {
    font-size: 18px;
    text-transform: none;
  }

  @media (max-width: 750px) {
    .features {
      padding: 0;
    }
    .features .features-content {
      margin-top: 50px;
    }
    .features .features-content .feature-row {
      grid-template-columns: 1fr;
      grid-gap: 40px;
      margin: 0;
    }
    .features .features-content .feature-row .feature-content > * + * {
      margin-top: 40px
    }
    .features {
      padding: 0
    }
    .features .features-content .feature-row .feature-content, .features .features-content .feature-row.left-side .feature-content {
      margin: 50px 16px 0
    }
    .header {
      background: #f7f9fc
    }
    .form-wrapper .form .title {
      font-size: 16px;
      line-height: 150%;
      color: #4e42d3
    }
    .form-wrapper .form .description {
      font-weight: 600;
      font-size: 14px;
      line-height: 150%
    }
    .form-wrapper .form .footer {
      font-size: 18px;
      line-height: 20px;
      color: #2e3a59
    }
    .form-wrapper {
      margin-top: 100px;
      margin-bottom: 112px;
      padding: 0
    }
    .form-wrapper .form-disclamer {
      width: 100%;
      bottom: -84px
    }
    .form.submit {
      inset: 8px 42px -8px
    }
    .form.submit.done {
      inset: -120px 42px 0
    }
  }
  .container, .row>* {
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
