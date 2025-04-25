<template>
  <div class="HomePage">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'privacy',
  components: {
  },
  props: ['articleType','articleId'],
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
    let _this = this;
    // if(this.articleType=='video'){
    //   this.showInfo = this.InitData.videovTutorial.find(item=>item.id==this.articleId)
    //   setTimeout(function () {
    //     document.getElementsByTagName('video')[0].play();
    //   },1000)
    // }
    if(this.articleType=='article'){
      _this.$Model.noticeDetail({id:_this.articleId}, data => {
        _this.showInfo.content = data.info.content;
        _this.showInfo.title = data.info.title;
      })
    }
    if(this.articleType=='privacy'){
      this.getListData(11);
    }
    if(this.articleType=='about'){
      this.getListData(6);
    }
    if(this.articleType=='terms'){
      this.getListData(12);
    }
    if(this.articleType=='hash'){
      this.getListData(13);
    }
    if(this.articleType=='cryptocurrency'){
      this.getListData(18);
    }
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    getListData(type){
      let that = this;
      this.$Model.noticeList({gropid: type, page_no: this.pageNo}, data => {
        if (data.code == 1 && data.info.length>0) {
          that.showInfo = data.info[0];
        }
      });
    }
  }
}
</script>
<style scoped>

</style>
