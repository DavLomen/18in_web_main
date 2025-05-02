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
          <div class="el-row blog_list justify-content-between">
          <div class="el-col-sm-12 el-col-md-8 el-col-xs-24 pl-0 pr-0" v-for="(el, i) in listData" :key="el.id">
            <div class="blog_card mb-5 mt-3" @click.stop="$router.push({
              path: '/blogDetail',
              query: {
                id: el.id
              }
            })">
              <div class="image">
                <img :src="`${ApiUrl}${el.cover_img	}`" alt="">
              </div>
              <div class="time">{{el.add_time}}</div>
              <div class="title">{{ el.title }}</div>
            </div>
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
  /* Blog */
.blog_card{
    padding: 20px 10px;
    border-radius:5px;
    background-color: #00d7a361;
    box-shadow: 0 1px 5px rgba(58,57,57,.10196078431372549);
    margin-bottom: 51px;
    cursor: pointer;
    margin: 0 10px;
  }
  .blog_card .image{
    width: 100%;
    height: 200px;
  }
  .blog_card .image img{
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
  .blog_card .time{
    font-size: 1rem;
    color: #959595;
    margin: 10px 0;
  }
  .blog_card .title{
    height: 100px;
    display: -webkit-box; /* 必须结合的属性 */
    -webkit-box-orient: vertical; /* 必须结合的属性 */
    line-clamp:3; /* 限制显示的行数 */
    overflow: hidden; /* 隐藏溢出的内容 */
    text-overflow: ellipsis; /* 显示省略号 */
    word-wrap: break-word; /* 允许在长单词或URL地址内部进行断行 */
    font-size: 1.2rem;
    margin: 20px 0;
  }
</style>


