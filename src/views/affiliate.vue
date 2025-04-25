<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container text-center">
      <div class="mt-3">
<!--        <h6 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold">REFERRAL SYSTEM</span></h6>-->
        <h2 class="text-lh pt-2">
          {{showInfo.title}}
        </h2>
      </div>
      <div class="mt-3 text-start Content">
        <div v-html="showInfo.content.replace(/text-wrap: nowrap;/ig,'')">

        </div>
      </div>
      <div class="d-none d-lg-block">
        <div class="rainbow-gradient-circle"></div>
        <div class="rainbow-gradient-circle theme-pink"></div>
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
  .text-start img {
    width: 100%;
    display: block;
    margin: 0 auto;
    max-width: 650px;
  }
  .text-start >>>img {
    width: 100%;
    display: block;
    margin: 0 auto;
    max-width: 650px;
  }


</style>
