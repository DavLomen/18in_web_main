<template>
  <div class="HomePage">
    <Header></Header>
      <div class="container">
        <div class="row col-lg-10 mx-auto row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-4 ">

          <div class="col" v-for="(item,index) in InitData.videovTutorial" :key="index">
            <div class="card h-100 shadow-sm bg-dark ">
              <div class="card-img-container p-5 text-center" style="height: 100%;">
                <img :src="InitData.setting.up_url +item.cover_img" class="card-img-top" alt="..." style="width: 60%;">
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold">{{item.title}}</h5>
                <a href="javascript:;" @click="$router.push(`/article/video/${item.id}`)" class="border-top pt-3 d-flex justify-content-between text-decoration-none">
                  <div class="fs-5 ">{{$t('blogs[1]')}}</div>
                  <div><i class="bi bi-arrow-right fs-5 fw-bold "></i></div>
                </a>
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
    name: 'blog',
    components: {
    },
    data() {
      return {
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
    },
    created() {
      // this.getListData('init');
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
        this.$Model.noticeList({gropid: 10,page_no: this.pageNo,page_size:6},data=>{
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
.card{
  background: #b1fdcb6b !important;
}

</style>


