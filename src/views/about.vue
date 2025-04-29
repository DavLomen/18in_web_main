<template>
  <div>
    <Header></Header>
    <div class="banner">
      <div class="banner__content">
        <div class="container">
          <div class="row g-3 justify-content-center">
            <div class="col-lg-10 text-center">
              <h1 class="m-0 ">{{$t('about[0]')}}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section" style="margin-top: -60px;">
      <div class="container">
        <div class="container mt-60 mt-60">
          <div class="row mt-5">
            <div class="col-lg-6 col-md-5" style="overflow: hidden;">
              <div class="position-relative">
                <div class="text-center text-md-left"><img :src="'./static/img/location.1704fed8_new.png'" alt="" width="95%"
                                                           class="img-fluid" style="border-radius: 30px;"></div>
              </div>
            </div>
            <div class="col-lg-6 col-md-7 mt-5 mt-sm-0">
              <div class="section-title">
<!--                <h1 class="title"><br>{{showInfo.title}}</h1>-->
                <div class="para-desc videoDiv" style="font-size: 1.25rem" v-html="showInfo.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<!--    <section class="d-table w-100 pb-0">-->
<!--      <div class="row justify-content-center">-->
<!--        <div class="col-12 text-center">-->
<!--          <div class="section-title mb-4 pb-2"><h4 class="title mb-4">{{$t('aboutf[4]')}}</h4>-->
<!--            <p class="text-muted mx-auto mb-0"> {{$t('aboutf[5]')}} </p></div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section class="d-table w-100 pb-0">-->
<!--      <div class="row justify-content-center container" style="margin: 0 auto;">-->
<!--        <div class="flex-wrap el-row el-row&#45;&#45;flex" style="margin-left: -10px; margin-right: -10px;">-->
<!--          <div class="mt-4 el-col el-col-8 el-col-xs-24" style="padding-left: 10px; padding-right: 10px;">-->
<!--            <div class="card work-process border-0 rounded shadow">-->
<!--              <div class="card-body text-center"><h6 class="title">{{$t('aboutf[6]')}}</h6>-->
<!--                <p style="font-size: 13px;"> {{$t('aboutf[7]')}} </p>-->
<!--                <p><img :src="'./static/img/img1.png?t=1'" class="img_inner"></p></div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="mt-4 el-col el-col-8 el-col-xs-24" style="padding-left: 10px; padding-right: 10px;">-->
<!--            <div class="card work-process border-0 rounded shadow">-->
<!--              <div class="card-body text-center"><h6 class="title">{{$t('aboutf[8]')}}</h6>-->
<!--                <p style="font-size: 13px;"> {{$t('aboutf[9]')}} </p>-->
<!--                <p><img :src="'./static/img/img2.png?t=1'" class="img_inner"></p></div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="mt-4 el-col el-col-8 el-col-xs-24" style="padding-left: 10px; padding-right: 10px;">-->
<!--            <div class="card work-process border-0 rounded shadow">-->
<!--              <div class="card-body text-center"><h6 class="title">{{$t('aboutf[10]')}}</h6>-->
<!--                <p style="font-size: 13px;"> {{$t('aboutf[11]')}} </p>-->
<!--                <p><img :src="'./static/img/img3.png?t=1'" class="img_inner"></p></div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section class="d-table w-100 pb-0">-->
<!--      <div class="row justify-content-center container" style="margin: 0 auto;">-->
<!--        <div class="flex-wrap el-row el-row&#45;&#45;flex" style="margin-left: -10px; margin-right: -10px;">-->
<!--          <div class="mt-4 el-col el-col-8 el-col-xs-24" style="padding-left: 10px; padding-right: 10px;">-->
<!--            <div class="card work-process border-0 rounded shadow">-->
<!--              <div class="card-body text-center"><h6 class="title">{{$t('aboutf[12]')}}</h6>-->
<!--                <p style="font-size: 13px;"> {{$t('aboutf[13]')}} </p>-->
<!--                <p><img :src="'./static/img/img4.png?t=1'" class="img_inner"></p></div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="mt-4 el-col el-col-8 el-col-xs-24" style="padding-left: 10px; padding-right: 10px;">-->
<!--            <div class="card work-process border-0 rounded shadow">-->
<!--              <div class="card-body text-center"><h6 class="title">{{$t('aboutf[14]')}}</h6>-->
<!--                <p style="font-size: 13px;"> {{$t('aboutf[15]')}} </p>-->
<!--                <p><img :src="'./static/img/img5.png?t=1'" class="img_inner"></p></div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="mt-4 el-col el-col-8 el-col-xs-24" style="padding-left: 10px; padding-right: 10px;">-->
<!--            <div class="card work-process border-0 rounded shadow">-->
<!--              <div class="card-body text-center"><h6 class="title">{{$t('aboutf[16]')}}</h6>-->
<!--                <p style="font-size: 13px;"> {{$t('aboutf[17]')}} </p>-->
<!--                <p><img :src="'./static/img/img6.png?t=1'" class="img_inner"></p></div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
    <section class="about-section sp_pt_60 sp_pb_120 overflow-hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 text-center">
            <div class="sp_site_header  wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s" style="visibility: visible; animation-duration: 0.3s; animation-delay: 0.3s; animation-name: fadeInUp;">
              <h2 class="sp_site_title">{{$t('about[6]')}}</h2>
            </div>
          </div>
        </div>

        <div class="row gy-5 align-items-center justify-content-between">
          <div class="col-lg-6 col-md-10">
            <p class="fs-lg mt-3">
            </p><h3 style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;">CHEYNE INVESTMENTS LIMITED</h3><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;"><br></p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;">{{$t('about[7]')}} <b>11799205</b></p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;"><b><br></b></p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;"><br></p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;">{{$t('about[12]')}}</p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;"><br></p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;"><b>Flat 75 Cheyne Court, London, United Kingdom, SW3 5TT
          </b><br></p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;"><b><br></b></p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;"><br></p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;">{{$t('about[8]')}}</p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;"><br></p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;"><b>Private limited Company</b></p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;"><b><br></b></p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;"><br></p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;">{{$t('about[9]')}}</p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;"><br></p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;"><b>31 January 2019</b><br></p><p style="border: none; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; line-height: 1.04167; overflow-wrap: break-word;"><br></p><p></p>            <p></p>
            <a target="_blank" style="background: linear-gradient(90deg, #ddb443, #009d24);color:#fff;" href="https://find-and-update.company-information.service.gov.uk/company/11799205" class="btn main-btn mt-4">{{$t('about[10]')}}</a>
            <a target="_blank" href="./static/companies_house_document.pdf" style="background: linear-gradient(90deg, #ddb443, #009d24);color:#fff;" class="btn main-btn mt-4">{{$t('about[11]')}}</a>
          </div>
          <div class="col-lg-6 ps-xl-5 p-lg-4 about-content wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s" style="visibility: visible; animation-duration: 0.5s; animation-delay: 0.5s; animation-name: fadeInUp;">
            <p class="fs-lg mt-3">
            </p><p style="display: flex;">
            <img :src="'./static/img/ccc1.png'" data-filename="companies_house_document.jpg" style="width: 50%;">
            <img :src="'./static/img/ccc2.png'" data-filename="companies_house_document.jpg" style="width: 50%;">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br></p>            <p></p>
          </div>
        </div>
      </div>
    </section>
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
  .img_inner {
    width: 100%;
    height: 180px;
  }

  .about-stats {
    display: flex;
    justify-content: space-between;
    grid-gap: 8px;
    margin-top: 7px;
  }

  .about-data {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 13px;
    margin-top: 10px;
  }


  .about-item {
    width: 100%;
    height: 88px;

    background: #529945;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-item-data {
    width: 100%;
    padding: 9px 9px 9px 9px;

    border: 1px solid #DFDFDF;
    border-radius: 10px;
  }

  .about-item-data img {
    width: 100%;
    min-height: 175px;
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
    font-size: 22px !important;
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

  .ac1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin-top: 15px;
    line-height: 130%;
    margin-bottom: 4px;
    /* identical to box height, or 21px */

    letter-spacing: -0.01em;

    color: #000000;
  }

  .ac2 {
    font-family: 'Roboto';
    font-style: normal;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
    /* identical to box height, or 18px */

    color: #717171;
  }

  .typed {
    background: hsl(282deg 29.41% 93.33%);
    padding: 8px 11px 8px 11px;
    opacity: 1;
    width: 70px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    margin-right: 12px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    /* identical to box height, or 14px */


    color: #662282;
  }
  .stats {
    overflow: hidden;
  }
  @media (max-width: 768px) {
    .about-data {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
  .main-btn {
    border-radius: 10px;
    border: 1px solid #ccc;
  }
</style>


