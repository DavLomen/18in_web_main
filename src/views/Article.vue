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
  name: 'Info',
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
    if(this.articleType=='video'){
      this.showInfo = this.InitData.videovTutorial.find(item=>item.id==this.articleId)
      setTimeout(function () {
        document.getElementsByTagName('video')[0].play();
      },1000)
    }
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
    if(this.articleType=='web3'){
      this.getListData(20);
    }
    // if(this.articleType=='company'){
    //   this.getListData(18);
    // }
    // if(this.articleType=='service'){
    //   this.getListData(20);
    // }
    if(this.articleType=='cookie'){
      this.getListData(21);
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
  .container {
    color: #fff;
  }
.container img{
  width: 100%;
}
  .colorwhite,.colorwhite >>>p,.colorwhite >>>span{
    color: #fff !important;
  }
</style>
