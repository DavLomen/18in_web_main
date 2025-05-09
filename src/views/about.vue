<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container mb-5">
      <div class="mt-3 text-center">
        <h6 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold">{{ $t('i18n.AboutUs.text1') }}</span></h6>
        <h2 class="text-lh pt-2">{{ $t('i18n.AboutUs.text2') }}</h2>
        <h6 class="text-ls pt-2" style="line-height: 1.8;">{{ $t('i18n.AboutUs.text3') }}</h6>
      </div>
      <div class="row mt-5 p-3" style="gap:100px;">
        <div class="col-lg-6 text-ls">
          <h5>{{ $t('i18n.AboutUs.text4') }}</h5>
          <h6 style="line-height: 1.5rem;" v-html="$t('i18n.AboutUs.text5')"></h6>
          <h5>{{ $t('i18n.AboutUs.text6') }}</h5>
          <h6 style="line-height: 1.5rem;" v-html="$t('i18n.AboutUs.text7')"></h6>
        </div>
        <div class="col-lg-5">
          <video :src="'./static/img/login_bg.mp4'" :controls="false" autoplay loop style="width: 100%;"></video>
          <!-- <img class="border border-0 rounded-3" :src="'./static/images/img/ab1.jpg'" alt="" width="100%"> -->
        </div>
      </div>
    </div>
    <div class=" w-100">
      <img :src="'./static/images/img/separator-bottom.svg'" alt="" class="img-fluid w-100">
    </div>
    <div class="container mb-5">

      <div class="row mt-5 p-3" style="gap:100px;">
        <div class="col-lg-5">
          <img class="border border-0 rounded-3" :src="'./static/images/img/ab2.png'" alt="" width="100%">
        </div>
        <div class="col-lg-6 text-ls">
          <h5>{{ $t('i18n.AboutUs.text8') }}</h5>
          <h6 style="line-height: 1.5rem;" v-html="$t('i18n.AboutUs.text9')"></h6>
          <h5>{{ $t('i18n.AboutUs.text10') }}</h5>
          <h6 style="line-height: 1.5rem;" v-html="$t('i18n.AboutUs.text11')"></h6>
        </div>
      </div>
    </div>
    <div class=" w-100">
      <img :src="'./static/images/img/separator-top.svg'" alt="" class="img-fluid w-100">
    </div>
    <div class="mt-5 container">
      <div class="text-center mb-4">
        <h2 class="text-light pb-4">{{ $t('i18n.AboutUs.text17') }}</h2>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 col-12 mb-4">
          <div class="certificate-info px-3">
            <div class="info-group mb-4">
              <h2 class="mb-4 border_ad_box">{{ $t('i18n.AboutUs.text12') }}</h2>
            </div>
            <div class="info-group mb-4 ">
              <h6 class="mb-2 border_ad_box">{{ $t('i18n.AboutUs.text13') }}</h6>
            </div>
            <div class="info-group mb-4">
              <h6 class="border_ad_box">{{ $t('i18n.AboutUs.text14') }}</h6>
            </div>
            <div class="info-group mb-4">
              <h6 class="border_ad_box">{{ $t('i18n.AboutUs.text15') }}</h6>
            </div>
            <div class="info-group mb-4">
              <h6 class="border_ad_box">{{ $t('i18n.AboutUs.text16') }}</h6>
            </div>
            <div class="mt-4">
              <a href="https://find-and-update.company-information.service.gov.uk/company/05048148" target="_blank" class="btn btn-primary me-3 mb-3">Check Online</a>
              <a href="javascript:;" target="_blank" class="btn btn-primary mb-3">Download PDF</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <img :src="'./static/images/img/pdf.jpg'" alt="" class="img-fluid">
        </div>
      </div>
    </div>
    <div class="row el-mx-auto-90 mt-20 mb-20">
      <JrRollingData
        cloName="el-col-xs-24 el-col-sm-24 el-col-md-12 el-col-lg-6"
        :listData="listData"
        ref="JrRollingData">
      </JrRollingData>
    </div>
    <div class="row el-mx-auto-90 mt-20 mb-20">
      <jrArticleHover
        :showTitle="true"
        :listData="jrArticleHoverData"
        ref="jrArticleHover">
      </jrArticleHover>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import JrRollingData from '../components/common/jr_rolling_data.vue';
import jrArticleHover from '../components/common/jr_article_hover.vue';
  export default {
    name: 'about',
    components: {
      JrRollingData,
      jrArticleHover
    },
    data() {
      return {
        showInfo:{
          title: '',
          content:'',
        },
        jrArticleHoverData: [
          { imageUrl: require('../../static/images/img/aaa5.png'), label: 'Data Center Location', content: 'Our mining data centers are located in the United States, Canada and Kazakhstan, among others.' },
          { imageUrl: require('../../static/images/img/aaa5.png'), label: 'Data Center Location', content: 'Our mining data centers are located in the United States, Canada and Kazakhstan, among others.' },
          { imageUrl: require('../../static/images/img/aaa5.png'), label: 'Data Center Location', content: 'Our mining data centers are located in the United States, Canada and Kazakhstan, among others.' },
          { imageUrl: require('../../static/images/img/aaa5.png'), label: 'Data Center Location', content: 'Our mining data centers are located in the United States, Canada and Kazakhstan, among others.' },
          { imageUrl: require('../../static/images/img/aaa5.png'), label: 'Data Center Location', content: 'Our mining data centers are located in the United States, Canada and Kazakhstan, among others.' },
          { imageUrl: require('../../static/images/img/aaa5.png'), label: 'Data Center Location', content: 'Our mining data centers are located in the United States, Canada and Kazakhstan, among others.' },
          { imageUrl: require('../../static/images/img/aaa5.png'), label: 'Data Center Location', content: 'Our mining data centers are located in the United States, Canada and Kazakhstan, among others.' },
          { imageUrl: require('../../static/images/img/aaa5.png'), label: 'Data Center Location', content: 'Our mining data centers are located in the United States, Canada and Kazakhstan, among others.' },
        ],
        listData: [
            { count: 8000000, cardColor: '#529945', text: this.$t('i18n.AboutUs.text18'), baseNumber: 500  },
            { count: 190, cardColor: '#ed5c2e', text: this.$t('i18n.AboutUs.text19'), baseNumber: 1  },
            { count: 80, cardColor: '#ff971e', text: this.$t('i18n.AboutUs.text20'), baseNumber: 1  },
            { count: 16000000, cardColor: '#0d9cff', text: this.$t('i18n.AboutUs.text21'), baseNumber: 500  },
          ],
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

</style>


