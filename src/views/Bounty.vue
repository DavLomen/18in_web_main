<template>
  <div class="HomePage">
    <Header></Header>

    <div class="container mt-lg-7" style="font-size: 1rem;">
      <div class="row mt-lg-7">
        <div class="col-lg-10 mx-auto">
          <h1 class="text-center" style="color: #000000;">{{showInfo.title}}</h1>
        </div>
      </div>
      <div style="color: #000000" class="col-lg-10 mx-auto mt-lg-5" v-html="showInfo.content.replace(/text-wrap: nowrap;/ig,'')">

      </div>
    </div>

    <!--    <div class="section-head text-center"><h2 class="mb-3 mt-5">{{showInfo.title}}</h2>&lt;!&ndash;&ndash;&gt;</div>-->
    <!--    <section class="section pb-5" style="margin:0 10px;" >-->
    <!--      <div class="container" style="border-radius:10px;" v-html="showInfo.content.replace(/text-wrap: nowrap;/ig,'')">-->
    <!--      </div>-->
    <!--    </section>-->
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
      this.getListData(16);
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
      }
    }
  }
</script>
<style scoped>

</style>

