<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container" style="max-width: 1280px; margin-top: 80px;">
      <div class="row">
        <div class="row align-items-center" style="gap: 140px;">
          <div class="col d11" style="background-image: url(./static/image/ellipse.png);">
            <div class="blockd"></div>
            <img :src="'./static/image/screen1.png'" class="screen" width="341.87">
          </div>
          <div class="col">
            <div class="oglav">
              <p>features</p>
              <h1>START MINING JOURNEY</h1>
            </div>
            <div class="feats">
              <div class="feat">
                <div class="headef">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 3.33336V16M16 16L27.3333 9.70364M16 16L4.66667 9.70364M16 16V28.6667M27.3333 22.2963L17.036 16.5756C16.6579 16.3655 16.4688 16.2605 16.2686 16.2193C16.0914 16.1829 15.9086 16.1829 15.7314 16.2193C15.5312 16.2605 15.3421 16.3655 14.964 16.5756L4.66667 22.2963M28 21.4114V10.5886C28 10.1318 28 9.90334 27.9327 9.69961C27.8731 9.51937 27.7758 9.35393 27.6472 9.21434C27.5018 9.05656 27.3021 8.94563 26.9027 8.72376L17.036 3.24227C16.6579 3.0322 16.4688 2.92716 16.2686 2.88598C16.0914 2.84953 15.9086 2.84953 15.7314 2.88598C15.5312 2.92716 15.3421 3.0322 14.964 3.24228L5.09729 8.72376C4.69793 8.94563 4.49825 9.05656 4.35284 9.21435C4.22421 9.35393 4.12686 9.51938 4.06731 9.69961C4 9.90334 4 10.1318 4 10.5886V21.4114C4 21.8683 4 22.0967 4.06731 22.3005C4.12686 22.4807 4.22421 22.6461 4.35284 22.7857C4.49825 22.9435 4.69793 23.0544 5.0973 23.2763L14.964 28.7578C15.3421 28.9679 15.5312 29.0729 15.7314 29.1141C15.9086 29.1505 16.0914 29.1505 16.2686 29.1141C16.4688 29.0729 16.6579 28.9679 17.036 28.7578L26.9027 23.2763C27.3021 23.0544 27.5018 22.9435 27.6472 22.7857C27.7758 22.6461 27.8731 22.4807 27.9327 22.3005C28 22.0967 28 21.8683 28 21.4114Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <p>Easy start with mining</p>
                </div>
                <div class="bodyf">
                  <p>We've simplified all the steps you'll need to start with cloud mining on app.</p>
                </div>
              </div>
              <div class="feat">
                <div class="headef">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M27.3333 21.3333H10.6667M10.6667 21.3333V4.66667M10.6667 21.3333L4.66667 27.3333M4.66667 10.6667H21.3333M21.3333 10.6667V27.3333M21.3333 10.6667L27.3333 4.66667M28 20.4497V5.06667C28 4.6933 28 4.50661 27.9273 4.36401C27.8634 4.23856 27.7614 4.13658 27.636 4.07266C27.4934 4 27.3067 4 26.9333 4H11.5503C11.2242 4 11.0611 4 10.9077 4.03684C10.7716 4.0695 10.6416 4.12337 10.5223 4.19648C10.3877 4.27894 10.2724 4.39424 10.0418 4.62484L4.62484 10.0418C4.39424 10.2724 4.27894 10.3877 4.19648 10.5223C4.12337 10.6416 4.0695 10.7716 4.03684 10.9077C4 11.0611 4 11.2242 4 11.5503V26.9333C4 27.3067 4 27.4934 4.07266 27.636C4.13658 27.7614 4.23856 27.8634 4.36401 27.9273C4.50661 28 4.6933 28 5.06667 28H20.4497C20.7758 28 20.9389 28 21.0923 27.9632C21.2284 27.9305 21.3584 27.8766 21.4777 27.8035C21.6123 27.7211 21.7276 27.6058 21.9582 27.3752L27.3752 21.9582C27.6058 21.7276 27.7211 21.6123 27.8035 21.4777C27.8766 21.3584 27.9305 21.2284 27.9632 21.0923C28 20.9389 28 20.7758 28 20.4497Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <p>One-click mining</p>
                </div>
                <div class="bodyf">
                  <p>Effortlessly order long and short-term mining plans with low thresholds and low fees.</p>
                </div>
              </div>
              <div class="d-flex" style="gap: 20px;">
                <a href="javascript:;" @click="downloadApp('andriod')" target="blank_" class="block">
                  <img style="width: 150px" :src="'./static/images/download/android.png?t=1'"></a>
                <a @click="downloadApp('ios')" id="downloadappIos" target="blank_" class="mt-10 block">
                  <img style="width: 150px" :src="'./static/images/download/iphone.png?t=1'"></a>
              </div>
<!--              <div class="d-flex" style="gap: 20px;">-->
<!--                <a href="#">-->
<!--                  <img src="https://chart.googleapis.com/chart?chs=300x300&amp;cht=qr&amp;chl=https://arkmining.com/app&amp;choe=UTF-8" class="qr_app">-->
<!--                </a>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="max-width: 1280px; margin-top: 150px; margin-bottom: 100px;">
      <div class="row">
        <div class="row align-items-center" style="gap: 140px;">
          <div class="col">
            <div class="oglav og2">
              <p>Advantage</p>
              <h1>MINE ANYTIME, ANYWHERE</h1>
            </div>
            <div class="feats f2">
              <div class="feat">
                <div class="headef">
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none"><circle cx="21" cy="21" r="21" fill="#FF5555"></circle><path d="M24.9375 27.5625H31.5L29.656 25.7185C29.1559 25.2184 28.875 24.5402 28.875 23.833V19.6875C28.875 16.2587 26.6836 13.3417 23.625 12.2606V11.8125C23.625 10.3628 22.4497 9.1875 21 9.1875C19.5503 9.1875 18.375 10.3628 18.375 11.8125V12.2606C15.3164 13.3417 13.125 16.2587 13.125 19.6875V23.833C13.125 24.5402 12.8441 25.2184 12.344 25.7185L10.5 27.5625H17.0625M24.9375 27.5625V28.875C24.9375 31.0496 23.1746 32.8125 21 32.8125C18.8254 32.8125 17.0625 31.0496 17.0625 28.875V27.5625M24.9375 27.5625H17.0625" stroke="#FEFEFE" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <p>Track your revenue</p>
                </div>
                <div class="bodyf">
                  <p>Keep track of the hash rate and income of all your mining pools with real-time and historical data for each account.</p>
                </div>
              </div>
              <div class="feat">
                <div class="headef">
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none"><circle cx="21" cy="21" r="21" fill="#FF5555"></circle><path d="M21 11L19.6985 16.206C19.4445 17.2218 19.3176 17.7298 19.0531 18.1431C18.8192 18.5087 18.5087 18.8192 18.1431 19.0531C17.7298 19.3176 17.2218 19.4445 16.206 19.6985L11 21L16.206 22.3015C17.2218 22.5555 17.7298 22.6824 18.1431 22.9469C18.5087 23.1808 18.8192 23.4913 19.0531 23.8569C19.3176 24.2702 19.4445 24.7782 19.6985 25.794L21 31L22.3015 25.794C22.5555 24.7782 22.6824 24.2702 22.9469 23.8569C23.1808 23.4913 23.4913 23.1808 23.8569 22.9469C24.2702 22.6824 24.7782 22.5555 25.794 22.3015L31 21L25.794 19.6985C24.7782 19.4445 24.2702 19.3176 23.8569 19.0531C23.4913 18.8192 23.1808 18.5087 22.9469 18.1431C22.6824 17.7298 22.5555 17.2218 22.3015 16.206L21 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <p>24/7 Chat Support</p>
                </div>
                <div class="bodyf">
                  <p>Contact our customer support with your questions at any time.</p>
                </div>

              </div>
<!--              <div class="d-flex" style="gap: 20px;">-->
<!--                <a href="#">-->
<!--                  <img src="https://chart.googleapis.com/chart?chs=300x300&amp;cht=qr&amp;chl=https://arkmining.com/app&amp;choe=UTF-8" class="qr_app">-->
<!--                </a>-->
<!--              </div>-->
            </div>
          </div>
          <div class="col d11 dr2" style="background-image: url(./static/image/ellipse2.png);">
            <div class="blockd b2s"></div>
            <img :src="'./static/image/screen2.png'" class="screen" width="373.136">
          </div>
        </div>
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
        else
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

</style>
