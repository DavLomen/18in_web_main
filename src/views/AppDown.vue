<template>
  <div class="HomePage" style="overflow:hidden;">
    <Header></Header>
    <div class="container" style="max-width: 1280px;">
      <div class="box7">
        <div class="box-wrapper">
          <section namespace="referral_image" style="margin-bottom: 1rem;">
            <div class="container">
              <div class="image_main">
                <img :src="'./static/image/apptop.jpg'">
                <div class="white_image_effect"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div style="    display: flex;
    padding:1rem 2rem;
    justify-content: space-around;
    max-width: 750px;
    margin: 0 auto;">
          <img :src="'./static/image/google.png'" @click="downloadApp('google')" style="height: 5rem;">
          <img :src="'./static/image/ios.png'" @click="downloadApp('ios')" style="height: 5rem;margin-left: 1rem;">
      </div>
      <div style="    display: flex;
    padding:1rem 2rem;
    justify-content: space-around;
    max-width: 750px;
    margin: 0 auto;">
          <img :src="'./static/image/andriod.png'" @click="downloadApp('andriod')" style="height: 5rem;">
          <img :src="'./static/image/start.png'" @click="$router.push('/login')" style="height: 5rem;margin-left: 1rem;">
      </div>
    </div>
      <div style="text-align: left;font-size: 2rem;margin: 0 auto;max-width: 750px;padding: 1rem">
        <p>Real-time Quotes ，Trade at any time</p>
        <p>Multiple protection，Asset Security</p>

        <p>Trade Safely and Securely</p>
        <p>Anytime. Anywhere.</p>

        <p>download-page-mobile-title. Become a better investor on the go, right in the app</p>
      </div>
<!--      <div class="row">-->
<!--        <div class="row align-items-center" style="gap: 140px;">-->
<!--          <div class="col">-->
<!--            <div class="oglav">-->
<!--              <h1>{{$t('appDown[0]')}}</h1>-->
<!--            </div>-->
<!--            <div class="feats">-->
<!--              <div class="feat">-->
<!--                <div class="headef">-->
<!--                  <img :src="'./static/image/appicon1.png'" class="screen" style="width: 40px;max-width: 100%;">-->
<!--                  <p>{{$t('appDown[3]')}}</p>-->
<!--                </div>-->
<!--                <div class="bodyf">-->
<!--                  <p>{{$t('appDown[4]')}}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="feat">-->
<!--                <div class="headef">-->
<!--                  <img :src="'./static/image/appicon2.png'" class="screen" style="width: 40px;max-width: 100%;">-->
<!--                  <p>{{$t('appDown[5]')}}</p>-->
<!--                </div>-->
<!--                <div class="bodyf">-->
<!--                  <p>{{$t('appDown[6]')}}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="d-flex" style="gap: 20px;">-->
<!--                <a href="javascript:;" @click="downloadApp('andriod')" target="blank_" class="block">-->
<!--                  <img style="width: 150px" :src="'./static/images/download/android.png?t=3'"></a>-->
<!--                <a @click="downloadApp('ios')" id="downloadappIos" target="blank_" class="mt-10 block">-->
<!--                  <img style="width: 150px" :src="'./static/images/download/iphone.png?t=3'"></a>-->
<!--              </div>-->
<!--              &lt;!&ndash;              <div class="d-flex" style="gap: 20px;">&ndash;&gt;-->
<!--              &lt;!&ndash;                <a href="#">&ndash;&gt;-->
<!--              &lt;!&ndash;                  <img src="https://chart.googleapis.com/chart?chs=300x300&amp;cht=qr&amp;chl=https://arkmining.com/app&amp;choe=UTF-8" class="qr_app">&ndash;&gt;-->
<!--              &lt;!&ndash;                </a>&ndash;&gt;-->
<!--              &lt;!&ndash;              </div>&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col d11">-->
<!--&lt;!&ndash;            <div class="blockd"></div>&ndash;&gt;-->
<!--            <img :src="'./static/image/screen1.png?t=3'" class="screen" style="width: 100%;max-width: 100%;min-width: 10rem;">-->
<!--          </div>-->

<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="container" style="max-width: 1280px; margin-top: 150px; margin-bottom: 100px;">-->
<!--      <div class="row">-->
<!--        <div class="row align-items-center" style="gap: 140px;">-->
<!--          <div class="col d11 dr2">-->
<!--            &lt;!&ndash;            <div class="blockd b2s"></div>&ndash;&gt;-->
<!--            <img :src="'./static/image/screen2.png?t=3'" class="screen" style="width: 100%;">-->
<!--          </div>-->
<!--          <div class="col">-->
<!--            <div class="oglav og2">-->
<!--              <h1>{{$t('appdown1[0]')}}</h1>-->
<!--            </div>-->
<!--            <div class="feats f2">-->
<!--              <div class="feat">-->
<!--                <div class="headef">-->
<!--                  <img :src="'./static/image/appicon3.png'" class="screen" style="width: 40px;max-width: 100%;">-->
<!--                  <p>{{$t('appdown1[1]')}}</p>-->
<!--                </div>-->
<!--                <div class="bodyf">-->
<!--                  <p>{{$t('appdown1[2]')}}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="feat">-->
<!--                <div class="headef">-->
<!--                  <img :src="'./static/image/appicon4.png'" class="screen" style="width: 40px;max-width: 100%;">-->
<!--                  <p>{{$t('appdown1[3]')}}</p>-->
<!--                </div>-->
<!--                <div class="bodyf">-->
<!--                  <p>{{$t('appdown1[4]')}}</p>-->
<!--                </div>-->

<!--              </div>-->
<!--&lt;!&ndash;              <div class="d-flex" style="gap: 20px;">&ndash;&gt;-->
<!--&lt;!&ndash;                <a href="#">&ndash;&gt;-->
<!--&lt;!&ndash;                  <img src="https://chart.googleapis.com/chart?chs=300x300&amp;cht=qr&amp;chl=https://arkmining.com/app&amp;choe=UTF-8" class="qr_app">&ndash;&gt;-->
<!--&lt;!&ndash;                </a>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
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
        else if(app=='google')
        {
          this.$Util.OpenUrl((this.InitData.setting.app_down_google || this.InitData.setting.app_down_android))
        }else
        {
          this.$Util.OpenUrl(this.InitData.setting.app_down_android)
        }
      },
    }
  }
</script>
<style scoped>
  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    margin-right: 0.5rem;;
    margin-left: 0.5rem;;
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
    color: #fff;
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
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0;
  }
  .bodyf p {
    font-family: 'Poppins';
    color: #aaa;
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
.d-flex {
  display: flex;

}

  .image_main {
    width: 100%;
    position: relative;
    max-width: 900px;
    margin: 0 auto;
  }
  .image_main img {
    width: 100%;
    border-radius: 5px;
  }
</style>
