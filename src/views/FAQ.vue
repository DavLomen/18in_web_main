<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container text-center my-5">
      <div class="mt-3">
<!--        <h6 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold">FAQs</span></h6>-->
        <h2 class="text-lh pt-2">{{$t('faq[0]')}}</h2>
      </div>
      <div class="custom-accordion my-5">
        <div class="accordion" id="faqAccordion">
          <!-- FAQ Item 1 -->
          <div class="accordion-item" v-for="(item,index) in listData" :key="index">
            <div class="light-border">
              <h2 class="accordion-header" @click="showIndex = index" >
                <button class="accordion-button fs-5 collapsed border-0 rounded-3" type="button" >
<!--                  <i class="bi bi-building me-2"></i>-->
                  {{item.title}}                       </button>
              </h2>
              <div id="collapseOne" :class="showIndex==index?'accordion-collapse collapse show':'accordion-collapse collapse'" >
                <div class="accordion-body">
                  <p class="faq-answer" v-html="item.content"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    <section class="section-space section-space-b how-it-work-section   pt-95 pb-70">-->
<!--      <div  class="container">-->
<!--        <div  class="section-head text-center">-->
<!--          <h2 class="mb-3 mt-5" style="color: #ffffff;">{{$t('foot[4]')}}</h2>-->
<!--&lt;!&ndash;          <p>{{$t('faq[1]')}}</p>&ndash;&gt;-->
<!--        </div>-->
<!--        <div  class="list-box">-->
<!--          <div  class="list-item" v-for="(item,index) in listData" :key="index">-->
<!--            <div  class="label">{{index+1}}. {{item.title}}</div>-->
<!--            <div  class="value mt-2" v-html="item.content"></div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
    <Footer></Footer>
  </div>
</template>
<script>
  export default {
    name: 'FAQ',
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
        this.getListData('init');
      },
      perPage(){
        if (parseInt(this.data_current_page) > 1) {
          this.pageNo = parseInt(this.data_current_page) - 1;
          this.getListData('init');
        }
      },
      nextPage(){
        if (parseInt(this.data_current_page) < this.data_total_page) {
          this.pageNo = parseInt(this.data_current_page) + 1;
          this.getListData('init');
        }
      },
      getListData(type) {
        this.isLoad = true
        this.isRefresh = false
        if(type=='load'){
          this.pageNo += 1;
        }else{
          this.pageNo = 1;
          this.isFinished = false
        }
        this.$Model.noticeList({gropid: 9,page_no: this.pageNo,page_size:100},data=>{
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
        })
      },
    }
  }
</script>
<style scoped>
  .faq-answer img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
  .faq-answer {
    word-break: break-word;
    text-align: left;
  }
</style>


