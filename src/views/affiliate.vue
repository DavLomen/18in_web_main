<template>
  <div class="HomePage">
    <Header></Header>

    <section namespace="referral-programm" style="margin-top: 3rem;">
      <div class="container">
        <div class="box7">
          <h1 class="titled_2" style="margin-top: 0px; margin-bottom: 18px;">
            {{$t('affliliate2[0]')}}</h1>
          <h4 style="text-align: center">{{$t('affliliate2[1]')}}</h4>
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
    <div  class="" style="max-width: 960px;margin: 0 auto;">
      <img :src="'./static/images/Our-affiliate.jpg'" style="width: 100%;">
    </div>
<!--    <div  class="join-info">-->
<!--      <div  class="container">-->
<!--        <div  class="row gy-4 align-items-end flex flex-lg-row-reverse" style="align-items: start !important;">-->
<!--          <div  class="col-lg-6">-->
<!--            <div  class="about-content-wrap">-->
<!--              {{$t('affliliate1[0]')}}<br>-->
<!--              {{$t('affliliate1[1]')}}<br>-->
<!--              {{$t('affliliate1[2]')}}<br>-->
<!--              {{$t('affliliate1[3]')}}<br>-->
<!--              {{$t('affliliate1[4]')}}<br>-->
<!--              {{$t('affliliate1[5]')}}<br>-->
<!--              {{$t('affliliate1[6]')}}<br>-->
<!--              {{$t('affliliate1[7]')}}<br>-->
<!--              {{$t('affliliate1[8]')}}<br>-->
<!--              {{$t('affliliate1[9]')}}<br>-->
<!--              {{$t('affliliate1[10]')}}<br>-->
<!--              {{$t('affliliate1[11]')}}<br>-->
<!--              {{$t('affliliate1[12]')}}<br>-->
<!--            </div>-->
<!--            <br >-->

<!--            <div  class="about-content-wrap">{{$t('affliliate[9]')}}</div>-->
<!--            <a data-v-ecb5c96c=""  href="javascript:;" @click="$router.push('/dashboard')"  class="btn btn-dark" style="margin-top: 2.25rem; width: 50%;">{{$t('affliliate[10]')}} &gt;</a></div>-->
<!--          <div  class="col-lg-6 mb-5 mb-lg-0">-->
<!--            <img  :src="'./static/img/r-banner.d3ac92fd.png'" alt="" class="w-100"></div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
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
  .join-info {
    margin-top: 2.5rem;
    margin-bottom: 4.125rem;
  }
  .steps .step {
    display: flex;
    align-items: center;
    background: #f9f9f9;
    border-radius: .5rem;
    padding: 1.625rem 1rem
  }

  .steps .step .img {
    width: 6.875rem
  }

  .steps .step .img img {
    width: 100%;
    height: auto
  }

  .steps .step .info {
    margin-left: 1.5rem;
    width: 0;
    flex: 1
  }

  .steps .step .info .title {
    height: 1.375rem;
    font-size: 1.1rem;
    font-weight: 700;
    color: #1c2a46;
    line-height: 21px
  }

  .steps .step .info .content {
    font-size: .85rem;
    font-weight: 500;
    color: #1c2a46;
    line-height: 1.125rem;
    margin-top: 1rem
  }

  .join-info {
    margin-top: 2.5rem;
    margin-bottom: 4.125rem
  }

  .join-info .about-content-wrap {
    font-size: 1.2rem;
    font-weight: 400;
    color: #1c2a46;
    line-height: 2rem
  }

  @media(min-width: 1200px) {
    .steps .info .title {
      font-size:1.2rem
    }
  }

  @media(min-width: 992px) {
    .join-info .about-content-wrap {
      font-size:1.2rem
    }
  }
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
    background: linear-gradient(180deg, #503ac1 0%, #0bac39 100%);
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
  .carousel-item1>>> img {
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
    .carousel-item1>>> img {
      width: 100%;
      min-width: 100%;
    }
  }
</style>


