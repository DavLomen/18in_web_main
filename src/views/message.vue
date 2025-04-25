<template>
  <div class="HomePage" id="app">
    <Header></Header>

    <div class="d-flex">
      <div class="col-2 border-end border-hhs d-none d-lg-block">
        <Side></Side>
      </div>
      <div class="container col-lg-10 ">
        <div>
          <table class="w-100 text-bhs text-center mt-3 " id="statusTable">
            <thead class="fs-6 border-bottom border-hhs bg-okh" style="height: 50px;">
            <tr class="border-bottom border-hhs">
              <th  scope="col" class="text-center">{{$t('messageInfo[3]')}}</th>
              <th  scope="col-4" class="text-center">{{$t('messageInfo[4]')}}</th>
              <th  scope="col-4" class="text-center">{{$t('messageInfo[5]')}}</th>
            </tr>
            </thead>
            <tbody class="fs-7" style="height: 50px; line-height: 1.3rem;">
            <tr v-for="(item,index) in listData" :key="index">
              <td  class="text-center">
                <strong>{{item.createtime}}</strong>
              </td>
              <td  class="text-center"><strong>{{item.title}}</strong></td>
              <td  class="text-center">
                <button v-if="item.read==1" class="btn btn--base btn-sm approveBtn" @click="clkItem(item,index)">
                  <van-icon name="envelop-o" />
                </button>
                <button v-else style="background: red" class="btn btn--base btn-sm approveBtn" @click="clkItem(item,index)">
                  <van-icon name="envelop-o" />
                </button>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="mt-4" style="margin-bottom:150px;">
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
    <div class="d-none d-lg-block">
      <div class="rainbow-gradient-circle"></div>
      <div class="rainbow-gradient-circle theme-pink"></div>
    </div>

<!--    <section  class="user-panel-section" style="padding: 20px 0px;">-->
<!--      <div  class="row">-->
<!--        <div class="col-lg-2">-->
<!--          <Side></Side>-->
<!--        </div>-->
<!--        <div  class="col-lg-10 ps-xl-5">-->
<!--          <div   class="my-order">-->
<!--            <div  class="user-panel-title-box">-->
<!--              <h2 >{{$t('contact[4]')}}</h2></div>-->
<!--            <div  class="profile-setting-panel-wrap">-->
<!--              <div  class="table-responsive">-->
<!--                <table  class="table mb-0 table-s2">-->
<!--                  <thead  class="fs-14">-->
<!--                  <tr >-->
<!--                    <th scope="col" class="text-center">{{$t('messageInfo[3]')}}</th>-->
<!--                    <th scope="col" class="text-center">{{$t('messageInfo[4]')}}</th>-->
<!--                    <th scope="col" class="text-center">{{$t('messageInfo[5]')}}</th>-->
<!--                  </tr>-->
<!--                  </thead>-->
<!--                  <tbody  class="table-fs">-->
<!--                  <tr v-if="listData.length==0">-->
<!--                    <td colspan="100%" class="text-center">{{$t('vanPull[1]')}}</td>-->
<!--                  </tr>-->
<!--                  <tr v-for="(item,index) in listData" :key="index">-->
<!--                    <td class="text-center small" :data-label="$t('messageInfo[3]')">-->
<!--                      <strong>{{item.createtime}}</strong>-->
<!--                    </td>-->

<!--                    <td class="text-center small" :data-label="$t('messageInfo[4]')">-->
<!--                      <strong>{{item.title}}</strong>-->
<!--                    </td>-->

<!--                    <td class="text-center small" :data-label="$t('messageInfo[5]')">-->
<!--                      <button v-if="item.read==1" class="btn btn&#45;&#45;base btn-sm approveBtn" @click="clkItem(item,index)">-->
<!--                        <i class="fa fa-desktop"></i>-->
<!--                      </button>-->
<!--                      <button v-else style="background: red" class="btn btn&#45;&#45;base btn-sm approveBtn" @click="clkItem(item,index)">-->
<!--                        <i class="fa fa-desktop"></i>-->
<!--                      </button>-->
<!--                    </td>-->

<!--                  </tr>-->
<!--                  </tbody>-->
<!--                </table>-->
<!--              </div>-->
<!--              <div  class="text-center mt-4 mt-md-5">-->
<!--                <div class="VuePagination ">-->
<!--                  <paginate-->
<!--                    :page-count="data_total_page"-->
<!--                    :page-range="3"-->
<!--                    :margin-pages="2"-->
<!--                    :click-handler="changePage"-->
<!--                    :prev-text="'<'"-->
<!--                    :next-text="'>'"-->
<!--                    :container-class="'pagination'"-->
<!--                    :page-class="'page-item'"-->
<!--                    :page-link-class="'page-link'"-->
<!--                    :prev-class="'prev-item'"-->
<!--                    :prev-link-class="'prev-link'"-->
<!--                    :next-class="'prev-item'"-->
<!--                    :next-link-class="'prev-link'"-->
<!--                  >-->
<!--                  </paginate>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
    <div id="approveModal" v-if="showNotice" class="modal custom--modal fade show" tabindex="-1" style="display: block; padding-left: 0px;" aria-modal="true" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{msg_title}}</h5>
            <button type="button" class="btn btn--danger text-white" data-bs-dismiss="modal" aria-label="Close" @click="showNotice = false">
              <i class="las la-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="payment-info" v-html="msg_content">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" @click="showNotice = false" data-bs-dismiss="modal">{{$t('confirm')}}</button>
          </div>
        </div>
      </div>
    </div>
<!--    -->
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
        showNotice:false,
        showDetail:false,
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,

        listData: [],
        isLoad: false,
        isFinished: false,
        isRefresh: false,
        pageNo: 1,
        data_current_page:"1",
        data_total_page:1,
        msg_title:"",
        msg_content:"",
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
      clkItem(item,index) {
        if (!this.UserInfo) {
          this.$router.push('/login')
          return
        }
        let _this = this;
        _this.$Model.MessageDetail(item.id, data => {
          _this.msg_content = data.data.content;
          _this.msg_title = item.title;
          _this.showNotice= true;
          let list = _this.dataList;
          list[index].read = 1;
          _this.dataList = list;
          let noRead = 0;
          _this.dataList.forEach(function (o,n) {
            if(o.read == 0){
              noRead += 1;
            }
          })
          // localStorage.setItem("noReadNum",noRead);
          _this.$store.dispatch('UpdateMessageInfo', '');
        })
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
          this.pageNo += 1;
        }else if (type == 'init') {
          this.pageNo = 1;
          this.isFinished = false;
        } else {
          this.isFinished = false;
        }
        this.$Model.MessageList({page_no:this.pageNo},data=>{
          this.isLoad = false
          if(data){
            this.data_current_page = data.data.current_page;
            this.data_total_page = data.data.last_page;
            if(type=='load'){
              this.listData = this.listData.concat(data.data.data);
            }else{
              this.listData = data.data.data
            }
            if(this.pageNo==data.data.last_page){
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
.payment-info {
  font-size: 1.2rem;
  max-height: 24rem;
  overflow-y: scroll;
  word-break: break-word;
  color: #000;
}
.payment-info img {
  width: 100%;
}
.modal-title {
  color: #000000;
}
.modal-backdrop {
  background-color: rgba(0,0,0,0.6);
}
</style>
