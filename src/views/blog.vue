<template>
  <div class="HomePage">
    <Header></Header>
    <section class="pt-120 pb-120">
      <div class="container">
        <div class="mt-3 text-center">
          <h2 class="border border-0 rounded-3 p-2 " style="display: inline-block;"><span class="text-z-fs fw-bold">{{$t('blogs[0]')}}</span></h2>
          <!-- <h2 class="text-lh pt-2">Latest News</h2> -->
        </div>
        <div class="row mt-4">
          <div class="col-lg-4 p-3" v-for="(item,index) in listData" :key="index">
            <div class="light-border p-3" style="--x: 30.024509803921568%;">
              <div class="staking-plan-img">
                <img :src="InitData.setting.up_url +item.cover_img" alt="" class="img-fluid rounded-3">
              </div>
              <div class="mt-2" style="height: 1.5rem;">
                <a href="javascript:;" @click="$router.push(`/blogDetail?id=${item.id}`)">
                  <p class="title-two-lines ">{{item.title}}</p>
                </a>
              </div>
              <div class="separator-animated mt-4 mb-3"></div>

              <a href="javascript:;" @click="$router.push(`/blogDetail?id=${item.id}`)" class=" d-flex justify-content-between text-decoration-none">
                <div class="fs-5 ">{{$t('blogs[1]')}}</div>
                <div><i class="bi bi-arrow-right fs-5 fw-bold "></i></div>
              </a>
            </div>
          </div>

        </div>
        <div  class="text-center mt-4 mt-md-5">
          <div class="VuePagination ">
            <paginate
              :page-count="data_total_page"
              :page-range="3"
              :margin-pages="2"
              :click-handler="changePage"
              :prev-text="'<'"
              :next-text="'>'"
              :container-class="'pagination'"
              :page-class="'page-item'"
              :page-link-class="'page-link'"
              :prev-class="'prev-item'"
              :prev-link-class="'prev-link'"
              :next-class="'prev-item'"
              :next-link-class="'prev-link'"
            >
            </paginate>
          </div>
        </div>
      </div>
    </section>
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
        data_current_page:1,
        data_total_page:1,
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
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
  .separator-animated {
    position: relative;
    overflow: hidden;
    height: 2px;
    width: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(111, 100, 233, 0.6) 50%, rgba(0, 0, 0, 0) 100%);
  }
  .separator-animated.animated-true::before {
    content: "";
    position: absolute;
    width: 3%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%,  rgba(111, 100, 233, 0.6) 50%, rgba(0, 0, 0, 0) 100%);
    backdrop-filter: blur(20px);
    animation: separateline 5s ease-in-out infinite;
  }
  @keyframes separateline {
    0% {
      left: 0;
    }

    100% {
      left: 110%;
    }
  }
  .social-link {
    width: 40px;
    height: 40px;
    border: 1px solid var(--color-border);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center ;
    justify-content: center;
    transition: 300ms ease;
  }
  .social-link:hover i {
    background: linear-gradient(160deg, #12B5DE -30%, #7130C3 30%, #FF3BD4 90%);
    -webkit-background-clip: text;
    color: transparent;
  }
  .title-two-lines {
    color: #000000;
  }
</style>


