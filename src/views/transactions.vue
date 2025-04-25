<template>
  <div class="HomePage" id="app">
    <Header></Header>

    <div class="d-flex">
      <div class="col-2 border-end border-hhs d-none d-lg-block">
        <Side></Side>
      </div>
      <div class="container col-lg-10 ">
        <div class="">
          <h4 class="text-zs">{{$t('transaction[5]')}}</h4>
          <div class="table-responsive--md">
            <table class="table custom--table">
              <thead class="fs-5 border-bottom border-hhs bg-okh" style="height: 50px">
              <tr class="">
                <th >{{$t('transaction[0]')}}</th>
                <th >{{$t('transaction[1]')}}</th>
                <th >{{$t('transaction[2]')}}</th>
                <!--              <th class="col-3">{{$t('transaction[3]')}}</th>-->
                <th>{{$t('transaction[4]')}}</th>
              </tr>
              </thead>
              <tbody class="fs-7" style="height: 50px">
              <tr v-if="listData.length==0">
                <td colspan="100%"  class="text-center">{{$t('vanPull[1]')}}</td>
              </tr>
              <tr class="border-bottom border-hhs" v-for="(item,index) in listData" :key="index">
                <td :data-label="$t('transaction[0]')" >
                  {{item.order_number}}
                </td>
                <td :data-label="$t('transaction[1]')" >
                  {{item.trade_time}}
                </td>
                <td :data-label="$t('transaction[2]')" >
                  {{InitData.currency}} {{item.jj||''}}{{item.trade_amount}}
                </td>
                <td :data-label="$t('transaction[4]')" >
                  {{item.remarks}}
                </td>
              </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-4">
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
      </div>
    </div>
    <div class="">
      <div class="rainbow-gradient-circle"></div>
      <div class="rainbow-gradient-circle theme-pink"></div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  export default {
    name: 'transaction',
    components: {
    },
    data() {
      return {
        showDetail:false,
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,

        listData: [],
        isLoad: false,
        isFinished: false,
        isRefresh: false,
        pageNo: 1,
        data_current_page:1,
        data_total_page:1,
        trade_type:'',
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
        this.$Model.FundDetails({trade_type: this.trade_type,page_no:this.pageNo},data=>{
          this.isLoad = false
          if(data.code==1){
            this.data_current_page = data.data_current_page;
            this.data_total_page = data.data_total_page;
            if(type=='load'){
              this.listData = this.listData.concat(data.list);
            }else{
              this.listData = data.list
            }
            if(this.pageNo==data.data_total_page){
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
    },
  }
</script>
<style scoped>

</style>
