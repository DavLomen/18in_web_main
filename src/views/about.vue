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
        <video :src="'./static/img/login_bg.mp4'" :controls="false" autoplay loop style="width: 100%;"></video>
        <!-- <div class="col-lg-6 text-ls">
          <h5>Our Professional Certification</h5>
          <h6 style="line-height: 1.5rem;">As an industry leader, JAMINING is proudly certified by the Financial Conduct Authority (FCA) in the UK, ensuring our platform meets the highest international standards and offers a safe and compliant investment environment.</h6>
          <h5>Technological Advantages</h5>
          <h6 style="line-height: 1.5rem;">Cutting-Edge GPU Technology: Utilizing the latest high-performance GPUs from NVIDIA and AMD, we achieve unparalleled mining efficiency with minimal energy consumption.</h6>
          <h6 style="line-height: 1.5rem;">Global Data Center Network: Over 100 advanced data centers strategically located across Europe, North America, and Asia, ensuring 24/7 seamless operations.</h6>
          <h6 style="line-height: 1.5rem;">Clean Energy Solutions: All mining operations are powered by renewable energy sources such as solar and wind, creating an eco-friendly and sustainable mining ecosystem.</h6>
        </div> -->
        <!-- <div class="col-lg-5">
          <img class="border border-0 rounded-3" :src="'./static/images/img/ab1.jpg'" alt="" width="100%">
        </div> -->
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
          <h5>Our Mission: Building a Sustainable Green Energy Future</h5>
          <h6 style="line-height: 1.5rem;">To drive innovation in the cloud computing industry and transform how humanity utilizes energy.</h6>
          <h6 style="line-height: 1.5rem;">To set the benchmark for green technology and sustainable development, creating long-term value for users.</h6>
          <h6 style="line-height: 1.5rem;">To contribute to global ecological restoration and provide a greener planet for future generations.</h6>
          <h5>Our Vision: Becoming the World’s Leading Cloud Computing Brand</h5>
          <h6 style="line-height: 1.5rem;">Technological Innovation: Leading the way in green cloud mining technology to become the most valuable brand in the industry.</h6>
          <h6 style="line-height: 1.5rem;">User Value: Delivering premium products and services to maximize returns on investments.</h6>
          <h6 style="line-height: 1.5rem;">Millionaire Program: We guarantee that every user’s investment will generate stable returns, empowering users to achieve financial independence and join the ranks of top millionaires in the next decade.</h6>
          <h5>Join JAMINING today and experience the most powerful cloud mining platform in the world!</h5>
        </div>
      </div>
    </div>
    <div class=" w-100">
      <img :src="'./static/images/img/separator-top.svg'" alt="" class="img-fluid w-100">
    </div>
    <div class="mt-5 container">
      <div class="text-center mb-4">
        <h2 class="text-light pb-4">Certificate Of Incorporation</h2>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 col-12 mb-4">
          <div class="certificate-info px-3">
            <h2 class="mb-4">JA FINANCIAL SERVICES LIMITED</h2>
            <div class="info-group mb-4">
              <h6 class="mb-2">Company Number: 05048148</h6>
            </div>
            <div class="info-group mb-4">
              <h6 class="fw-bold mb-2">Registered Address: </h6>
              <h6>11 The Elms, Leek Wootton, Warwick, England, CV35 7RR</h6>
            </div>
            <div class="info-group mb-4">
              <h6 class="fw-bold mb-2">Company type: </h6>
              <h6>Private Limited Company</h6>
            </div>
            <div class="info-group mb-4">
              <h6 class="fw-bold mb-2">Incorporation Date: </h6>
              <h6>18 February 2004</h6>
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

</style>


