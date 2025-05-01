<template>
  <div class="HomePage">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
  export default {
    name: 'Info',
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
      '$route'(to, from) {
        this.$router.go(0)
      }
    },
    created() {
      this.getListData(14);
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
