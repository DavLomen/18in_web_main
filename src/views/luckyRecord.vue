<template>
  <div class="HomePage" id="app">
  </div>
</template>

<script>
export default {
  name: 'FundRecord',
  components: {
  },
  props: ['fundState'],
  data() {
    return {
      showNotice:false,
      showDetail:false,
      showH5nav:false,
      showUserDown:false,
      showMenuDown:false,

      listData: '',
      isLoad: false,
      isFinished: false,
      isRefresh: false,
      pageNo: 1,
      data_current_page:"1",
      data_total_page:"1",
      msg_title:"",
      msg_content:"",
      tabsState: 4,
      tabsIndex: 0,
      taskTabs: [
        {state: 4, text: this.$t('fundRecord.tabs[0]')},
        {state: 3, text: this.$t('fundRecord.tabs[1]')},
        {state: 1, text: this.$t('fundRecord.tabs[2]')}
      ],
    }
  },
  computed: {

  },
  watch: {
    $route(){
      if(this.fundState){
        this.tabsIndex  = this.taskTabs.findIndex(item=>item.state==this.fundState)
        this.tabsState = this.fundState
      }else{
        this.tabsState = 4
        this.tabsIndex = 0
      }
      this.getListData('init')
    }
  },
  created() {
    // this.listData = this.taskTabs.flatMap(item=>[''])
    if(this.fundState){
      this.tabsIndex  = this.taskTabs.findIndex(item=>item.state==this.fundState)
      this.tabsState = this.fundState
    }
    switch(this.fundState){
      case '3':
        this.$parent.navBarTitle = this.$t('fundRecord.default[0]')
        break;
      case '1':
        this.$parent.navBarTitle = this.$t('fundRecord.default[1]')
        break;
      default:
        this.$parent.navBarTitle = this.$t('fundRecord.default[2]')
    }
    this.getListData('init')
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    onLoad() {
      this.getListData('load')
    },
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
        this.pageNo+=1
      }else{
        this.pageNo = 1
        this.isFinished = false
      }
      this.$Model.LuckyRecordList({page_no:this.pageNo},data=>{
        this.isLoad = false
        if(data.code==1){
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
          this.isFinished = true
        }
      })

    },
    onRefresh() {
      this.getListData('init')
    },
  }
}
</script>
<style scoped>
</style>
