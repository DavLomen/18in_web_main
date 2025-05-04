<template>
  <div class="HomePage">
    <Header></Header>
    <div>
      <main id="main" class="main-img">
        <section id="page-title" class="page-title bg-overlay bg-overlay-dark bg-parallax bg-section" style="background-image: url('./static/image/5.jpg');">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="title title-6 text-center">
                  <div class="title--heading">
                    <h1>{{$t('about[0]')}}</h1>
                  </div>
                  <div class="clearfix"></div>
                  <ol class="breadcrumb">
                    <li><a href="javascript:;">{{$t('about[1]')}}</a></li>
                    <li>{{$t('about[0]')}}</li>
                  </ol>
                </div><!-- .title end -->
              </div><!-- .col-lg-12 end -->
            </div><!-- .row end -->
          </div><!-- .container end -->
        </section>
        <section id="infoCards" class="info-cards">
          <div class="container">
            <div  class="box6">
              <!--          <iframe id="ifrId" :src="youtube" frameborder="0" style="display: block; width: 100%; height: 500px;"></iframe>-->
              <video :src="InitData.setting.up_url + '/upload/about.mp4'" autoplay controls style="width:100%;max-width: 900px;display: block;margin: 0 auto;"></video>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-4">
                <div class="info-card">
                  <div class="info-card-step">01.</div>
                  <div class="info-card-content">
                    <h4 class="info-card-subtitle">{{$t('about[2]')}}</h4>
                    <h3 class="info-card-title">{{$t('about[3]')}}</h3>
                    <p class="info-card-desc">
                      {{$t('about[4]')}}
                    </p>

                  </div>
                </div><!-- .info-card end -->
              </div><!-- .col-lg-4 end -->
              <div class="col-sm-12 col-md-12 col-lg-4">
                <div class="info-card">
                  <div class="info-card-step">02.</div>
                  <div class="info-card-content">
                    <h4 class="info-card-subtitle">{{$t('about[5]')}}</h4>
                    <h3 class="info-card-title">{{$t('about[6]')}}</h3>
                    <p class="info-card-desc">
                      {{$t('about[7]')}}
                    </p>
                  </div>
                </div><!-- .info-card end -->
              </div><!-- .col-lg-4 end -->
              <div class="col-sm-12 col-md-12 col-lg-4">
                <div class="info-card">
                  <div class="info-card-step">03.</div>
                  <div class="info-card-content">
                    <h4 class="info-card-subtitle">{{$t('about[8]')}}</h4>
                    <h3 class="info-card-title">{{$t('about[9]')}}</h3>
                    <p class="info-card-desc">
                      {{$t('about[10]')}}
                    </p>
                  </div>
                </div><!-- .info-card end -->
              </div><!-- .col-lg-4 end -->
            </div>
            <!-- .row end -->
          </div>
          <!-- .container end -->
        </section>
        <!-- #infoCards end -->

        <!-- Featured #1
        ============================================= -->
        <section id="featured1" class="featured featured-1 bg-overlay bg-overlay-dark2 bg-parallax bg-section" style="background-image: url('./static/image/1.jpg');">

          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6" style="display: flex;align-content: center;align-items: center;">
                <div class="featured-img">
                  <img :src="'./static/image/65f18b0da62c51710328589.png'" alt="Laptop Mockup">
                </div>
              </div><!-- .col-lg-5 end -->
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="heading heading-6">
                  <h2 class="heading--title text-white">{{$t('about[11]')}}</h2>
                  <p class="heading--desc text-gray mb-20">
                    {{$t('about[12]')}}
                  </p>
                </div><!-- .heading end -->
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-4">
                    <div class="feature-card">
                      <div class="feature-card-icon">
                        <img :src="'./static/image/BitcoinIcon1.png'" alt="Bitcoin Icon">
                      </div>
                      <div class="feature-card-content">
                        <h3 class="feature-card-title text-white">{{$t('about[13]')}}</h3>
                      </div>
                    </div>
                  </div><!-- .col-lg-4 end -->
                  <div class="col-sm-12 col-md-12 col-lg-4">
                    <div class="feature-card">
                      <div class="feature-card-icon">
                        <img :src="'./static/image/BitcoinIcon2.png'" alt="Bitcoin Icon">
                      </div>
                      <div class="feature-card-content">
                        <h3 class="feature-card-title text-white">{{$t('about[14]')}}</h3>
                      </div>
                    </div>
                  </div><!-- .col-lg-4 end -->
                  <div class="col-sm-12 col-md-12 col-lg-4">
                    <div class="feature-card">
                      <div class="feature-card-icon">
                        <img :src="'./static/image/BitcoinIcon3.png'" alt="Bitcoin Icon">
                      </div>
                      <div class="feature-card-content">
                        <h3 class="feature-card-title text-white">{{$t('about[15]')}}</h3>
                      </div>
                    </div>
                  </div><!-- .col-lg-4 end -->
                </div><!-- .row end -->
              </div><!-- .col-lg-5 end -->
            </div>
            <!-- .row end -->
          </div>
          <!-- .container end -->
        </section>
        <!-- #featured1 end -->

        <!-- Featured #2
        ============================================= -->
        <section id="featured2" class="featured featured-2 pb-50">
          <div class="container">
            <div class="row">
              <!-- Feature Card #1 -->
              <div class="col-sm-12 col-md-12 col-lg-3">
                <div class="feature-card">
                  <div class="feature-card-icon">
                    <img :src="'./static/image/about1.png?t=1'" style="width: 65px;"/>
                  </div>
                  <div class="feature-card-content">
                    <h3 class="feature-card-title" v-html="$t('about[16]')"></h3>
                    <p class="feature-card-desc">
                      {{$t('about[17]')}}
                    </p>
                  </div>
                </div>
              </div><!-- .col-lg-4 end -->
              <!-- Feature Card #2 -->
              <div class="col-sm-12 col-md-12 col-lg-3">
                <div class="feature-card">
                  <div class="feature-card-icon">
                    <img :src="'./static/image/about2.png?t=1'" style="width: 65px;"/>
                  </div>
                  <div class="feature-card-content">
                    <h3 class="feature-card-title">{{$t('about[18]')}}</h3>
                    <p class="feature-card-desc">
                      {{$t('about[19]')}}
                    </p>
                  </div>
                </div>
              </div><!-- .col-lg-4 end -->
              <!-- Feature Card #3 -->
              <div class="col-sm-12 col-md-12 col-lg-3">
                <div class="feature-card">
                  <div class="feature-card-icon">
                    <img :src="'./static/image/about3.png?t=1'" style="width: 65px;"/>
                  </div>
                  <div class="feature-card-content">
                    <h3 class="feature-card-title">{{$t('about[20]')}}</h3>
                    <p class="feature-card-desc">
                      {{$t('about[21]')}}
                    </p>
                  </div>
                </div>
              </div><!-- .col-lg-4 end -->
              <!-- Feature Card #6 -->
              <div class="col-sm-12 col-md-12 col-lg-3">
                <div class="feature-card">
                  <div class="feature-card-icon">
                    <img :src="'./static/image/about6.png?t=1'" style="width: 65px;"/>
                  </div>
                  <div class="feature-card-content">
                    <h3 class="feature-card-title">{{$t('about[22]')}}</h3>
                    <p class="feature-card-desc">
                      {{$t('about[23]')}}
                    </p>
                  </div>
                </div>
              </div><!-- .col-lg-4 end -->

            </div>
            <!-- .row end -->
          </div>
          <!-- .container end -->
        </section>
        <!-- #featured2 end -->


        <section class="" style="background-color: #9bbad86b;padding-bottom: 2rem">
          <div class="container" style="margin-top:2rem">
            <div class="row gy-5 align-items-center justify-content-between">

              <div class="col-lg-6 ps-xl-5 p-lg-4 about-content wow fadeInUp" data-wow-duration="0.5s"
                   data-wow-delay="0.5s">
                <h2 class="sp_site_title">{{$t('about[24]')}}</h2>
                <p class="fs-lg mt-3">
                </p>
                <p>MAR Mining</p>
                <p><span >Company number 11129715</span></p>
                <p><span >Registered office address</span></p>
                <p>71-75 Shelton Street Covent Garden, London, United Kingdom<br></p>
                <p><span >Type of company</span></p>
                <p><span >private limited company</span></p>
                <p><span >Merged with</span></p>
                <p>January 2, 2018<br></p>
                <p></p>
<!--                <div style="display: flex;justify-content: left;">-->
<!--                  <a href="Https://find-and-update.company-information.service.gov.uk/company/11129715"-->
<!--                     class="btn btn&#45;&#45;primary btn&#45;&#45;rounded text-capitalize plan_btn">{{$t('about[25]')}}</a>-->
<!--                  <a href="./static/companies_house_document.pdf?t=1" style="margin-left: 10px"-->
<!--                     class="btn btn&#45;&#45;primary btn&#45;&#45;rounded text-capitalize plan_btn">{{$t('about[26]')}}</a>-->
<!--                </div>-->
              </div>
              <div class="col-lg-6 col-md-10">
                <img :src="'./static/image/65e0e364b47161709237092.jpg?t=2'" alt="image" style="width:100%">
              </div>
            </div>
          </div>

        </section>
      </main>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  export default {
    name: 'about',
    components: {
    },
    data() {
      return {
        showInfo:{
          title: '',
          content:'',
        }
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      this.getListData(6);
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      getListData(type){
        this.$Model.noticeList({gropid: type, page_no: this.pageNo}, data => {
          if (data.code == 1 && data.info.length>0) {
            this.showInfo = data.info[0];
          }
        });
      }
    }
  }
</script>
<style scoped>
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
  }
  /* Background Image */
  .bg-section {
    position: relative;
    overflow: hidden;
    z-index: 1;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -ms-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    /*background-attachment: fixed;*/
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
  }
  .bg-parallax {
    background-attachment: fixed;
  }
  .bg-overlay:before {
    content: "";
    display: inline-block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  .bg-overlay-light:before {
    background-color: #ffffff;
    opacity: 0.8;
  }
  .bg-overlay-dark:before {
    background-image: -webkit-linear-gradient(to bottom, rgba(27, 26, 26, 0.5) 0%, rgba(27, 26, 26, 0) 31%, rgba(27, 26, 26, 0) 82%);
    background-image: -moz-linear-gradient(to bottom, rgba(27, 26, 26, 0.5) 0%, rgba(27, 26, 26, 0) 31%, rgba(27, 26, 26, 0) 82%);
    background-image: -o-linear-gradient(to bottom, rgba(27, 26, 26, 0.5) 0%, rgba(27, 26, 26, 0) 31%, rgba(27, 26, 26, 0) 82%);
    background-image: linear-gradient(to bottom, rgba(27, 26, 26, 0.5) 0%, rgba(27, 26, 26, 0) 31%, rgba(27, 26, 26, 0) 82%);
    background-color: #1b1a1a;
    opacity: .6;
  }
  .bg-overlay-dark2:before {
    background-color: #1b1a1a;
    opacity: .97;
  }
  .bg-overlay-dark3:before {
    background-image: -webkit-linear-gradient(to bottom, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 69%, #f9f9f9 96%);
    background-image: -moz-linear-gradient(to bottom, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 69%, #f9f9f9 96%);
    background-image: -o-linear-gradient(to bottom, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 69%, #f9f9f9 96%);
    background-image: linear-gradient(to bottom, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 69%, #f9f9f9 96%);
    background-color: #1b1a1a;
    opacity: .96;
  }
  .bg-overlay-dark4:before {
    background-image: -webkit-linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 69%, #ffffff 92%);
    background-image: -moz-linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 69%, #ffffff 92%);
    background-image: -o-linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 69%, #ffffff 92%);
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 69%, #ffffff 92%);
    background-color: #1b1a1a;
    opacity: .96;
  }
  .bg-overlay-dark5:before {
    background-color: #1b1a1a;
    opacity: .94;
  }
  .bg-overlay-dark6:before {
    background-color: #1b1a1a;
    opacity: .95;
  }
  .bg-overlay-dark7:before {
    background-color: #1b1a1a;
    opacity: .75;
  }
  .bg-overlay-dark8:before {
    background-color: #1b1a1a;
    opacity: .8;
  }
  .bg-overlay-dark9:before {
    background-color: #1b1a1a;
    opacity: .9;
  }
  .bg-overlay-dark10:before {
    background-image: -moz-linear-gradient(90deg, #1b1a1a 0%, rgba(27, 26, 26, 0.11) 82%, #1b1a1a 92%);
    background-image: -webkit-linear-gradient(90deg, #1b1a1a 0%, rgba(27, 26, 26, 0.11) 82%, #1b1a1a 92%);
    background-image: -ms-linear-gradient(90deg, #1b1a1a 0%, rgba(27, 26, 26, 0.11) 82%, #1b1a1a 92%);
    background-image: linear-gradient(90deg, #1b1a1a 0%, rgba(27, 26, 26, 0.11) 82%, #1b1a1a 92%);
  }
  .bg-overlay-theme:before {
    background-color: #3773f4;
    opacity: .85;
  }
  .bg-overlay-theme2:before {
    background-image: -webkit-linear-gradient(to top, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 45%, #f9f9f9 92%);
    background-image: -moz-linear-gradient(to top, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 45%, #f9f9f9 92%);
    background-image: -o-linear-gradient(to top, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 45%, #f9f9f9 92%);
    background-image: linear-gradient(to top, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 45%, #f9f9f9 92%);
    background-color: #3773f4;
    opacity: .96;
  }
  .bg-overlay-theme2:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background: linear-gradient(to top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 1%, #ffffff 35%);
    height: 150px;
    width: 100%;
    z-index: -1;
  }
  .bg-overlay-theme3:before {
    background-color: #3773f4;
    opacity: .9;
  }
  .text-center {
    text-align: center!important;
  }
  /* Background Video */
  .bg-video {
    position: relative;
  }
  .bg-video .vidbg {
    min-width: 100%;
    min-height: 100%;
  }
  .bg-vyoutube {
    z-index: 550;
    text-align: center;
    height: 100%;
    min-height: 100%;
    position: relative;
    overflow: hidden;
  }
  .no-shadow {
    box-shadow: none !important;
  }
  /*------------------------------------*\
      #BREADCRUMB
  \*------------------------------------*/
  /* Breadcrumb Style 1 */
  .breadcrumb {
    background-color: transparent;
    margin-bottom: 0;
    padding: 0;
    border-radius: 0;
    color: #e5e4e4;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    text-transform: capitalize;
    display: block;
  }
  .breadcrumb > li {
    display: inline-block;
  }
  .breadcrumb > li + li:before,
  .breadcrumb > li a {
    color: #e5e4e4;
  }
  .breadcrumb > .active {
    color: #f9f9f9;
  }
  .breadcrumb-2 > li + li:before {
    content: "\f101";
    font-family: fontawesome;
  }
  .breadcrumb-3 > li + li:before {
    content: "\f105";
    font-family: fontawesome;
  }
  .breadcrumb > li a:hover {
    color: #3773f4;
  }
  .breadcrumb > li + li:before {
    padding: 0 5px;
    color: #ccc;
    content: "/\00a0";
  }
  .page-title {
    padding: 0;
    max-height: 600px;
  }
  .page-title .title {
    padding: 235px 0 149px 0;
  }
  .page-title .title--heading {
    margin-bottom: 20px;
  }
  .page-title .title--heading h1 {
    color: #ffffff;
    font-size: 60px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0;
    text-transform: capitalize;
    letter-spacing: -0.95px;
    font-style: normal;
  }
  .page-title .title--desc p {
    color: #f9f9f9;
    font-size: 17px;
    margin-bottom: 0;
    font-weight: 400;
  }
  .page-title .breadcrumb,
  .page-title .breadcrumb a {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    background: transparent;
    color: #ffffff;
  }
  .page-title .breadcrumb .active {
    color: #ffffff;
  }
  .page-title .breadcrumb a:hover {
    color: #3773f4;
  }
  .page-title .breadcrumb > li + li:before {
    color: #ffffff;
  }
  /* Title #1 */
  .page-title .title-1 {
    padding-bottom: 110px;
  }
  .title-1 .breadcrumb {
    position: absolute;
    bottom: 30px;
    right: 0;
    left: 0;
  }
  @media only screen and (max-width: 991px) {
    .page-title .title--heading h1 {
      font-size: 40px;
    }
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
  .mini_desc {
    color: rgba(0, 0, 0, 0.70);
    font-family: 'Roboto';
    font-size: 20px;
    margin-top: 7px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 0px;
    line-height: 125%;
  }
  .full_desc {
    margin-top: 33px;
    word-wrap: break-word;
    color: #000;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
  .about-stats {
    display: flex;
    justify-content: space-between;
    grid-gap: 8px;
    margin-top: 7px;
  }



  .about-item {
    width: 100%;
    padding: 20px 0;
    background: #529945;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-item-data {
    padding: 9px 9px 9px 9px;
    margin: 0.5rem;
    border: 1px solid #DFDFDF;
    border-radius: 10px;
  }

  .about-item-data img {
    width: 100%;
  }

  .about-item-data h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 148%;
    margin-top: 11px;
    margin-bottom: 6px;
    /* or 21px */

    text-align: center;
  }

  .about-item-data p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    /*font-size: 10px;*/
    line-height: 133%;
    /* or 13px */
    margin-bottom: 3px;
    text-align: center;
  }

  .about-item div h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    margin-bottom: 7px;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    /* identical to box height */


    color: #FFFFFF;
  }

  .about-item div p {
    font-family: 'Roboto';
    font-style: normal;
    margin: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    /* identical to box height */


    color: #FFFFFF;
  }

  .about-data {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 13px;
    margin-top: 10px;
  }
  /* 超小屏幕（手机，小于 768px） */
  @media (max-width: 768px) {
    .ps-xl-5 {
      padding: 10px;
    }
    .col-sm-12 {
      padding: 15px;
    }
    .about-data {
      display: grid;
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 0px !important;
      margin-top: 10px;
    }
  }
  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {

    .about-data {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 13px;
      margin-top: 10px;
    }
  }
  section {
    overflow: hidden;
  }

  /* Info Card */
  .info-card {
    position: relative;
  }
  .info-card .info-card-step {
    position: absolute;
    left: 0;
    top: 10px;
    font-family: 'Work Sans', sans-serif;
    color: #e8e8e8;
    font-size: 52px;
    font-style: normal;
    line-height: 29px;
  }
  .info-card .info-card-content {
    padding-left: 100px;
  }
  .info-card .info-card-subtitle {
    color: #9b9b9b;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    margin-bottom: 0;
  }
  .info-card .info-card-title {
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
    margin-bottom: 17px;
  }
  .info-card .info-card-desc {
    font-size: 15px;
    font-weight: 400;
    line-height: 23px;
    margin-bottom: 15px;
  }
  .info-card .info-card-links {
    color: #3773f4;
    font-size: 14px;
    font-weight: 700;
    line-height: 29px;
  }
  .info-card .info-card-links i {
    margin-right: 7px;
  }
  .info-card .info-card-links:hover {
    color: #282828;
  }
  /* Custom, iPhone Retina */
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .info-card {
      margin-bottom: 30px;
    }
  }
  /* Custom Retina */
  @media only screen and (min-width: 320px) and (max-width: 400px) {
    .info-card .info-card-content {
      padding-left: 75px;
    }
    .info-card .info-card-step {
      font-size: 40px;
    }
  }
  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .info-card {
      text-align: center;
      max-width: 500px;
      margin: 0 auto 30px;
    }
    .info-card .info-card-content {
      padding-left: 0;
    }
    .info-card .info-card-step {
      position: static;
    }
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  @media (min-width: 576px){
    .col-sm-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (min-width: 768px){
    .col-md-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (min-width: 992px){
    .container {
      max-width: 960px;
    }
    .col-lg-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-lg-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  .featured-1 .featured-img img {
    margin-left:0;
    width: 100%;
    height: 100%;
  }

  .about-content p{
    color: #212529;
    font-size: 14px;
    font-weight: bold;
  }


  @media (max-width: 991px) {
    .plan_btn{
      border-radius: 10px;
      width: 130px;
      height: 40px;
      line-height: 40px;
      margin-bottom: 20px;
    }
  }
  .heading .heading--title {
    font-family: 'Work Sans', sans-serif;
    font-size: 36px;
    font-weight: 700;
    font-style: normal;
    line-height: 45px;
    margin-bottom: 18px;
  }
  .featured-1 .heading .heading--title {
    margin-bottom: 37px;
  }
  .heading .heading--desc {
    color: #9b9b9b;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 0;
  }
  .text-white {
    color: #ffffff !important;
  }
  .text-gray {
    color: #f9f9f9 !important;
  }
  .mb-20 {
    margin-bottom: 20px !important;
  }
  .feature-card .feature-card-title {
    font-size: 18px;
    line-height: 29px;
    font-weight: 600;
    font-style: normal;
    margin-bottom: 16px;
  }
  .feature-card {
    position: relative;
  }
  .feature-card .feature-card-icon {
    margin-bottom: 22px;
  }
  .feature-card .feature-card-icon img {
    max-width: 100%;
    height: auto;
  }
  .feature-card .feature-card-icon i {
    font-size: 64px;
    color: #3773f4;
    font-weight: 400;
  }
  .feature-card .feature-card-title {
    color: #222;
    font-size: 18px;
    line-height: 29px;
    font-weight: 600;
    font-style: normal;
    margin-bottom: 16px;
  }
  .feature-card .feature-card-desc {
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
  }
  /* Featured #1 */
  .featured-1 .heading {
    margin-bottom: 47px;
  }
  .featured-1 .heading .heading--title {
    margin-bottom: 37px;
  }
  .featured-1 .col-content {
    padding: 0 !important;
  }
  .featured-1 .feature-card-content {
    padding-right: 15px;
  }
  /* featured #2 */
  .featured-2 .feature-card {
    margin-bottom: 50px;
  }
  .featured-2 .feature-card .feature-card-icon {
    position: relative;
    border-radius: 50%;
    display: inline-block;
  }
  .featured-2 .feature-card .feature-card-icon i {
    z-index: 1;
    position: relative;
    -webkit-transition: 1s ease;
    -moz-transition: 1s ease;
    -ms-transition: 1s ease;
    transition: 1s ease;
  }
  .featured-2 .feature-card .feature-card-icon:hover i {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
  .featured-2 .feature-card .feature-card-title {
    font-size: 20px;
  }
  .featured-2 .feature-card-content {
    padding-right: 20px;
  }
  /* featured #3 */
  .featured-3 .feature-card {
    margin-bottom: 40px;
  }
  .featured-3 .feature-card-icon {
    position: absolute;
    top: 55px;
    left: 32px;
  }
  .featured-3 .feature-card-icon i {
    font-size: 32px;
    color: #f9f9f9;
    font-weight: 400;
  }
  .featured-3 .feature-card-content {
    padding-left: 100px;
  }
  .featured-3 .feature-card-title {
    color: #fff;
  }
  .featured-3 .read--more {
    display: block;
    font-size: 14px;
    font-weight: 700;
    text-transform: capitalize;
    line-height: 29px;
  }
  .featured-3 .read--more i {
    margin-right: 7px;
  }
  .featured-3 .feature-card:hover .read--more {
    color: #fff;
  }
  .featured-3 .video-button {
    margin-top: 36px;
  }
  .featured-3 .video--button {
    height: 439px;
  }
  /* featured #4 */
  .featured-4 .feature-card {
    margin-bottom: 46px;
  }
  .featured-4 .feature-card-icon {
    top: 10px;
    left: 0;
  }
  .featured-4 .feature-card-content {
    padding-left: 80px;
  }
  .featured-4 .feature-card .feature-card-desc {
    padding-right: 50px;
  }
  /* featured #5 */
  .featured-5 {
    overflow: visible;
  }
  .featured-5 .feature-card {
    margin-bottom: 50px;
  }
  .featured-5 .bitcoin-calculator {
    margin-top: -260px;
  }
  /* featured #6 */
  .featured-6 .feature-card .feature-card-title {
    color: #282828;
  }
  .featured-6 .heading {
    margin-bottom: 48px;
  }
  .featured-6 .heading .heading--title {
    font-size: 33px;
  }
  .featured-6 .featured-img img {
    width: 800px;
    height: 513px;
    -webkit-transform: translateX(-90px);
    transform: translateX(-90px);
    max-width: none;
  }
  /* featured #7 */
  .featured-7 .feature-card .feature-card-icon {
    margin-bottom: 33px;
  }
  .featured-7 .feature-card .feature-card-title {
    font-size: 20px;
  }
  /* featured #8 */
  .featured-8 .heading {
    margin-top: 36px;
  }
  .featured-8 .heading--desc {
    font-size: 17px;
    line-height: 26px;
    font-weight: 400;
    padding: 0 100px;
    margin-bottom: 43px;
  }
  .featured-8 .heading--title {
    margin-bottom: 31px;
  }
  .featured-8 .btn {
    width: 270px;
    text-transform: capitalize;
  }
  /* Custom, iPhone Retina */
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .featured-1 .container-fluid {
      padding-right: 15px !important;
      padding-left: 15px !important;
    }
    .featured-1 .col-content {
      padding: 30px !important;
    }
    .featured-1 .featured-img img {
      margin: 0;
      height: auto;
      max-width: 100%;
    }
    .featured-4 .container-fluid {
      padding-left: 15px;
    }
    .featured-4 .feature-card .feature-card-desc {
      padding-right: 0;
    }
    .featured-6 .pl-100 {
      padding-left: 15px !important;
    }
    .featured-6 .featured-img img {
      width: auto;
      height: auto;
      -webkit-transform: translateX(0);
      transform: translateX(0);
      max-width: 100%;
    }
    .featured-7 .feature-card {
      margin-bottom: 30px;
    }
    .featured-8 .heading--desc {
      padding: 0 15px;
    }
  }
  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .featured-1 .col-content {
      padding: 30px !important;
    }
    .featured-1 .container-fluid {
      padding-right: 15px !important;
      padding-left: 15px !important;
    }
    .featured-1 .featured-img img {
      margin-left: 0;
      height: auto;
      max-width: 100%;
    }
    .featured-6 .pl-100 {
      padding-left: 15px !important;
    }
    .featured-6 .featured-img img {
      width: auto;
      height: auto;
      -webkit-transform: translateX(0);
      transform: translateX(0);
      max-width: 100%;
    }
    .featured-7 .feature-card {
      margin-bottom: 30px;
    }
  }
  .pb-50 {
    padding-top: 50px !important;
  }
  address, blockquote, dd, dl, fieldset, form, ol, p, pre, table, ul {
    margin-bottom: 20px;
  }
  .h2, h2 {
    font-size: 42px;
  }
  .btn {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    position: relative;
    z-index: 2;
    font-size: 14px;
    font-weight: 700;
    text-transform: capitalize;
    text-align: center;
    border-radius: 0;
    padding: 0;
    line-height: 48px;
    width: 170px;
    height: 50px;
    letter-spacing: 0.26px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .btn--primary {
    background-color: #3773f4;
    color: #ffffff;
    border: 2px solid #3773f4;
  }
  .btn--rounded {
    border-radius: 50px;
  }
  .btn--primary:active, .btn--primary:focus, .btn--primary:hover {
    background-color: transparent;
    color: #3773f4;
  }
  @media (min-width: 992px){
    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%;
    }
  }
</style>


