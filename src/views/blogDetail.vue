<template>
  <div class="HomePage">
    <Header></Header>

    <div class="container mt-lg-7" style="font-size: 1rem;">
      <div class="row mt-lg-7">
        <div class="col-lg-10 mx-auto">
          <h1 class="text-center">{{showInfo.title}}</h1>
        </div>
      </div>
      <div class="col-lg-10 mx-auto mt-lg-5 colorwhite" v-html="showInfo.content.replace(/text-wrap: nowrap;/ig,'')">

      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>

  export default {
    name: 'blogDetail',
    components: {
    },
    data() {
      return {
        showInfo:{
          content:'',
          cover_img:'',
          title:'',
        },
        showIndex:-1,
        listData: [],
        isLoad: false,
        isFinished: false,
        isRefresh: false,
        pageNo: 1,
        data_current_page:"1",
        data_total_page:"1",
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
      _this.showInfo={
        content:'',
          cover_img:'',
          title:'',
      }
      let articleId = this.$route.query.id;
      _this.$Model.noticeDetail({id:articleId}, data => {
        _this.showInfo = data.info;
      })
      this.getListData('init');

    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      changePage(page){
        this.pageNo = page;
        this.getListData('next');
      },
      perPage(){
        if (parseInt(this.data_current_page) > 1) {
          this.pageNo = parseInt(this.data_current_page) - 1;
          this.getListData('next');
        }
      },
      nextPage(){
        if (parseInt(this.data_current_page) < this.data_total_page) {
          this.pageNo = parseInt(this.data_current_page) + 1;
          this.getListData('next');
        }
      },
      getListData(type) {
        this.isLoad = true
        this.isRefresh = false
        if(type=='load'){
          this.pageNo += 1;
        }else if (type == 'init') {
          this.pageNo = 1;
          this.isFinished = false;
        } else {
          this.isFinished = false;
        }
        this.$Model.noticeList({gropid: 10,page_no: this.pageNo,page_size:15},data=>{
          this.isLoad = false
          if(data.code==1){
            if(data.info.length<=0){
              this.listData =[];
              this.isFinished = true
            }else {
              this.data_current_page = data.data_current_page;
              this.data_total_page = data.data_total_page;
              if(type=='load'){
                this.listData = this.listData.concat(data.info);
              }else{
                this.listData = data.info;
              }
            }
            if(data.data_total_nums ==0 || this.pageNo == data.data_total_page){
              this.isFinished = true
            }else{
              this.isFinished = false
            }
          }else{
            this.listData = []
            this.isFinished = true
          }
        });
      },
    }
  }
</script>
<style scoped>

</style>


