<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container mb-5">
      <div class="mt-3">
        <img :src="'./static/images/img/abouttop.png?t=1'" style="width: 100%">
      </div>
      <div class="row mt-5 p-3">
        <div class="col-lg-6 text-ls">
<!--          <h5>Our Professional Certification</h5>-->
<!--          <h6 style="line-height: 1.5rem;">As an industry leader, JAMINING is proudly certified by the Financial Conduct Authority (FCA) in the UK, ensuring our platform meets the highest international standards and offers a safe and compliant investment environment.</h6>-->
<!--          <h5>Technological Advantages</h5>-->
<!--          <h6 style="line-height: 1.5rem;">Cutting-Edge GPU Technology: Utilizing the latest high-performance GPUs from NVIDIA and AMD, we achieve unparalleled mining efficiency with minimal energy consumption.</h6>-->
<!--          <h6 style="line-height: 1.5rem;">Global Data Center Network: Over 100 advanced data centers strategically located across Europe, North America, and Asia, ensuring 24/7 seamless operations.</h6>-->
<!--          <h6 style="line-height: 1.5rem;">Clean Energy Solutions: All mining operations are powered by renewable energy sources such as solar and wind, creating an eco-friendly and sustainable mining ecosystem.</h6>-->
<!--        -->
          <h5>{{$t('about[0]')}}</h5>
          <h6>
            {{$t('about[1]')}}
          </h6>
          <h5>{{$t('about[2]')}}</h5>
          <h6>
            {{$t('about[3]')}}
          </h6>
          <h5>{{$t('about[4]')}}</h5>
          <h6>{{$t('about[5]')}}</h6>
          <h6>
            {{$t('about[6]')}}
          </h6>
        </div>
        <div class="col-lg-6">
<!--          <img class="border border-0 rounded-3" :src="'./static/images/img/ab1.jpg'" alt="" width="100%">-->
            <video id="v1" autoplay loop muted style="width: 100%;">
              <source :src="'./static/SIX-2_x264.mp4'" type="video/mp4"  />
            </video>
        </div>
      </div>
    </div>
<!--    <div class=" w-100">-->
<!--      <img :src="'./static/images/img/separator-bottom.svg'" alt="" class="img-fluid w-100">-->
<!--    </div>-->
    <div class="container mb-5">

      <div class="row mt-5 p-3 mbrev" style="gap:100px;">
        <div class="col-lg-5">
          <img class="border border-0 rounded-3" :src="'./static/images/img/ab2.jpg?t=1'" alt="" width="100%">
        </div>
        <div class="col-lg-6 text-ls">
          <h6>{{$t('about[7]')}}</h6>
          <h6 style="line-height: 1.5rem;">
            {{$t('about[8]')}}
          </h6>
          <h6 style="line-height: 1.5rem;">
            {{$t('about[9]')}}
          </h6>
          <h6 style="line-height: 1.5rem;">
            {{$t('about[10]')}}
          </h6>
          <h6>
            {{$t('about[11]')}}
          </h6>
        </div>
      </div>
    </div>
<!--    <div class=" w-100">-->
<!--      <img :src="'./static/images/img/separator-top.svg'" alt="" class="img-fluid w-100">-->
<!--    </div>-->
    <div class="mt-5 container">
      <div class="text-center mb-4">
        <h2 class="pb-4">{{$t('about[12]')}}</h2>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 col-12 mb-4">
          <div class="certificate-info px-3">
            <h2 class="mb-4">SIX HILLS INVESTMENTS LIMITED</h2>
            <div class="info-group mb-4">
              <h6 class="mb-2">{{$t('about[13]')}}: 11038906</h6>
            </div>
            <div class="info-group mb-4">
              <h6 class="fw-bold mb-2">{{$t('about[14]')}}: </h6>
              <h6>69 Six Hills Road, Walton On The Wolds, Loughborough, Leicestershire, United Kingdom, LE12 8JF</h6>
            </div>
            <div class="info-group mb-4">
              <h6 class="fw-bold mb-2">{{$t('about[15]')}}: </h6>
              <h6>Private Limited Company</h6>
            </div>
            <div class="info-group mb-4">
              <h6 class="fw-bold mb-2">{{$t('about[16]')}}: </h6>
              <h6>30 October 2017</h6>
            </div>
            <div class="mt-4">
              <a href="https://find-and-update.company-information.service.gov.uk/company/11038906" target="_blank" class="btn btn-primary me-3 mb-3">{{$t('about[17]')}}</a>
              <a target="_blank" href="./static/companies_house_document.pdf"  class="btn btn-primary mb-3">{{$t('about[18]')}}</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <img :src="'./static/images/img/pdf.png'" alt="" class="img-fluid">
        </div>
      </div>
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
  @media (max-width: 768px) {
    .mbrev {
      flex-direction: column-reverse;
    }
  }
</style>


