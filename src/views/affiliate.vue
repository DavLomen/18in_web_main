<template>
  <div class="HomePage">
    <Header></Header>
    <div  class="app-wrapper">
      <section namespace="referral_image">
        <div class="container">
          <div class="box3">
            <div class="box-wrapper">
              <div class="carousel-container1 info-block">
                <div class="carousel1 info-block">
                  <div class="carousel-item1">
                    <img v-lazy="'./static/image/aaa.jpg?t=2'" style="object-fit:cover">
                    <div class="carousel-desc info-block-title">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section namespace="referral-programm">
        <div class="container">
          <div class="box7">
            <h1 class="titled_2" style="margin-top: 0px; margin-bottom: 18px;">{{$t('about[0]')}} {{$t('foot[5]')}}</h1>
            <h2 style="text-align: center">{{$t('affliliate[0]')}}</h2>
            <div class="d3-block">
              <div class="item-3">
                <div class="box" style="background: #E77916;">01</div>
                <h1 style="color: #E77916;">{{$t('affliliate[1]')}}</h1>
                <p>{{$t('affliliate[2]')}}</p>
              </div>
              <div class="item-3">
                <div class="box" style="background: hsl(0, 64%, 45%);">02</div>
                <h1 style="color: hsl(0, 64%, 45%);">{{$t('affliliate[3]')}}</h1>
                <p>{{$t('affliliate[4]')}}</p>
              </div>
              <div class="item-3">
                <div class="box" style="background: hsl(254, 93%, 63%);">03</div>
                <h1 style="color: hsl(254, 93%, 63%);">{{$t('affliliate[5]')}}</h1>
                <p>{{$t('affliliate[6]')}}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section namespace="referral_image">
        <div class="container">
          <div class="box3">
            <div class="box-wrapper">
              <div class="carousel-container1 info-block">
                <div class="carousel1 info-block">
                  <div class="carousel-item1" style="max-height: 100%;">
                    <img v-lazy="`./static/image/AffiliateProgram_${$i18n.locale}.jpg?t=5`" style="">
                    <div class="carousel-desc info-block-title">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="centered" style="margin-top: 28px;"><a href="javascript:;" @click="$router.push('/login')"><div class="main-btnNew" style="font-weight: 500;">{{$t('affliliate[7]')}}</div></a></div>

    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  export default {
    name: 'affiliate',
    components: {
    },
    data() {
      return {
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
    }
  }
</script>
<style scoped>
  .d3-block {
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 10px;
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
    height: 100%;
    object-fit: contain;
    max-height:350px ;
  }
  .white_image_effect {
    width: 100%;
    position: absolute;
    height: 284px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
    bottom: 0;
  }
  .titled_2 {
    color: #000;
    text-align: center;
    font-family: 'Roboto';
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .item-3 {
    width: 100%;
    padding-top: 18px;
    padding-bottom: 18px;
    padding-right: 18px;
    left: calc(50% - 343px/2 + 4.5px);
    top: 356px;
    margin-top: 23px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 60px 0px;
  }
  .item-3 {
    width: 280px;
    position: relative;
    left: auto;
    top: auto;
  }
  .d3-block {
    padding: 10px;
  }
  .d3-block {
    display: flex;
    justify-content: space-between;
  }
  .box {
    width: 100px;
    position: absolute;
    height: 90px;
    background-color: #dd4f39;
    border-top-left-radius: 10px;
    transform: translateY(-30px);
    left: 11px;
    clip-path: polygon(94% 0%, 40% 61%, 1% 100%, 0 100%, 0 53%, 0% 0%);
    padding-left: 16px;
    padding-top: 18px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
  }
  .box {
    left: -9px;
  }
  .item-3 h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    padding-left: 70px;
    margin-bottom: 6px;
    line-height: 21px;
    text-align: left;
    color: #FE9F44;
  }
  .item-3 p {
    font-family: 'Roboto';
    font-style: normal;
    padding-left: 70px;
    font-weight: 400;
    margin: 0;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    color: #000000;
  }
  .rect {
    border-radius: 10px;
    background: #FAF9F9;
    padding: 10px;
    margin-top: 54px;
    font-size: 1.5rem;
  }
  .centered {
    display: flex;
    justify-content: center;
  }
  .main-btnNew {
    display: inline-block;
    border-radius: 10px;
    background: linear-gradient(to right, #00f785, #410093);
    padding: 14px 30px 14px 30px;
    text-align: center;
    color: #fff;
    font-family: 'Poppins';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  .carousel-container1 {
    overflow: hidden;
    margin-top: 10px;
    width: 100%;
    border-radius: 26px;
    padding: 2rem 0;
  }
  .carousel1 {
    display: flex;
    flex-direction: column;
    transition: transform 0.5s ease;
  }
  .carousel-item1 {
    position: relative;
    border-radius: 26px;
    max-width: 900px;
    margin: 0 auto;
    max-height: 350px;
    overflow: hidden;

  }
  .info-block-title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #FFF;
    font-family: 'Roboto';
    font-size: 4rem;
    font-style: normal;
    font-weight: 800;
    line-height: 95.836%;
    z-index: 999;
  }
  .carousel-item1 img {
    width: 100%;
    position: relative;
    border-radius: 26px;
    z-index: 2;
    min-width: 900px;
  }
  @media only screen and (max-width: 1024px) {
    .container .box3 {
      width: 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 1rem 1rem;
    }
  }
  @media (max-width: 768px) {
    .carousel-item1 img {
      width: 100%;
      min-width: 100%;
    }
  }
</style>
