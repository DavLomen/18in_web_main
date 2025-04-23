<template>
  <div class="HomePage" style="color: rgb(22, 28, 45);">
    <Header></Header>
    <div class="section-head text-center"><h2 class="mb-3 mt-5">{{$t('foot[13]')}}</h2>
    </div>
<!--    <section class="section pt-0" style="margin:0 10px;">-->
<!--      <div class="container" style="border-radius:10px;" v-html="$t('article[0]')">-->
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


