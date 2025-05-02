<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container text-center">
      <div class="el-row">
        <div class="el-col-24 font-title text-center">{{ $t("i18nlan.affiliate.label.text1") }}</div>
        <div class="el-col-24 el-content-label text-center">{{ $t("i18nlan.affiliate.label.text2") }}</div>
      </div>
      <div class="el-row mt-5" style="text-align: left">
        <div class="el-col-24 mb-4">
          <div class="box align-items-center">
            <img :src="'./static/images/img/af_1.png'" alt="" style="width: 40px">
            <span class="el-content-label text-left " style="color: rgb(231, 121, 22)">{{ $t("i18nlan.affiliate.content.text1") }}</span>
            <span class="el-content-text text-left ms-2">{{ $t("i18nlan.affiliate.content.text2") }}</span>
          </div>
        </div>
        <div class="el-col-24 mb-4">
          <div class="box align-items-center">
              <img :src="'./static/images/img/af_2.png'" alt="" style="width: 40px">
            <span class="el-content-label text-left " style="color: rgb(231, 121, 22)">{{ $t("i18nlan.affiliate.content.text3") }}</span>
            <span class="el-content-text text-left ms-2">{{ $t("i18nlan.affiliate.content.text4") }}</span>
          </div>
        </div>
        <div class="el-col-24 mb-4">
          <div class="box align-items-center">
            <img :src="'./static/images/img/af_3.png'" alt="" style="width: 40px">
            <span class="el-content-label text-left" style="color: rgb(231, 121, 22);">{{ $t("i18nlan.affiliate.content.text5") }}</span>
            <span class="el-content-text text-left ms-2">{{ $t("i18nlan.affiliate.content.text6") }}</span>
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
.box{
  position: relative;
}
.image{
  /*position: absolute;*/
  width: 40px;
  height: 40px;
  /*left: -15px;*/
  /*top: -20px;*/
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
