<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container text-center">
      <div class="el-row">
        <div class="el-col-24 font-title text-center">{{ $t("i18nlan.affiliate.label.text1") }}</div>
        <div class="el-col-24 el-content-label text-center">{{ $t("i18nlan.affiliate.label.text2") }}</div>
      </div>
      <div class="el-row mt-5 text-center">
        <div class="el-col-xs-24 el-col-sm-24 el-col-md-7 mx-3 mt-3">
          <div class="af_card el_com_card">
            <div class="image">
              <img :src="'./static/images/img/af_1.png'" alt="">
            </div>
            <div class="contern">
              <div class="el-content-label text-left ms-2 mt-3" style="color: rgb(231, 121, 22)">{{ $t("i18nlan.affiliate.content.text1") }}</div>
              <div class="el-content-text text-left ms-2 mt-3 mb-3">{{ $t("i18nlan.affiliate.content.text2") }}</div>
            </div>
          </div>
        </div>
        <div class="el-col-xs-24 el-col-sm-24 el-col-md-7 mx-3 mt-3">
          <div class="af_card el_com_card">
            <div class="image">
              <img :src="'./static/images/img/af_2.png'" alt="">
            </div>
            <div class="contern">
              <div class="el-content-label text-left ms-2 mt-3" style="color: rgb(188, 41, 41)">{{ $t("i18nlan.affiliate.content.text3") }}</div>
              <div class="el-content-text text-left ms-2 mt-3 mb-3">{{ $t("i18nlan.affiliate.content.text4") }}</div>
            </div>
          </div>
        </div>
        <div class="el-col-xs-24 el-col-sm-24 el-col-md-7 mx-3 mt-3">
          <div class="af_card el_com_card">
            <div class="image">
              <img :src="'./static/images/img/af_3.png'" alt="">
            </div>
            <div class="contern">
              <div class="el-content-label text-left ms-2 mt-3" style="color: rgb(114, 73, 248)">{{ $t("i18nlan.affiliate.content.text5") }}</div>
              <div class="el-content-text text-left ms-2 mt-3 mb-3">{{ $t("i18nlan.affiliate.content.text6") }}</div>
            </div>
          </div>
        </div>
      </div>
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
        showInfo: {
          title: '',
          content:'',
        },
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      this.getListData(17);
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      getListData(type){
        this.$Model.noticeList({gropid: type, page_no: 1}, data => {
          if (data.code == 1 && data.info.length>0) {
            this.showInfo = data.info[0];
          }
        });
      },
      jump() {
        if (this.UserInfo) {
          this.$router.push('/dashboard');
        } else {
          this.$router.push('/register');
        }
      }
    }
  }
</script>
<style scoped>
.af_card{
  border-bottom-right-radius: 50px;
  height: 200px;
}
.af_card .image{
  position: absolute;
  width: 40px;
  height: 40px;
  left: -15px;
  top: -20px;
}

@media (max-width: 1200px){
  .af_card{
    height: 250px;
  }
}

@media (max-width: 992px){
  .af_card{
    margin: 20px 50px 0 50px;
  }
}
</style>
