<template>
  <div class="HomePage" id="app">
    <Header></Header>
    <section style="margin-top: 2rem">
      <div class="container">
        <div class="el-row">
          <div class="el-col el-col-5"> <UserHeader></UserHeader></div>
          <div class="el-col el-col-18 el-col-xs-24 el-col-lg-18 el-col-xl-18">
            <div >
              <section  class="section" style="margin-top: -100px;">
                <div >
                  <div class="el-row" style="position: relative; margin-top: 50px;">
                    <button @click="$router.push('/dashboard')" type="button" class="el-button el-button--primary"
                            style="background: rgb(255, 243, 214); color: black; font-weight: 500;"><!----><i
                      class="el-icon-back"></i><span>{{$t('head[4]')}}</span></button>
                  </div>
                </div>
                <br >
                <div  class="container">
<!--                  <div  class="el-row" style="margin-left: -10px; margin-right: -10px;">-->
<!--                    <div  class="el-col el-col-2 el-col-xs-20"-->
<!--                         style="padding-left: 10px; padding-right: 10px;">-->
<!--                      <div >-->
<!--                        <div  id="dropdown-1" class="dropdown b-dropdown m-md-3 btn-group">&lt;!&ndash;&ndash;&gt;-->
<!--                          <button id="dropdown-1__BV_toggle_" aria-haspopup="menu" aria-expanded="false" type="button"-->
<!--                                  class="btn dropdown-toggle btn-secondary btn-medium">Type-->
<!--                          </button>-->
<!--                          <ul role="menu" tabindex="-1" aria-labelledby="dropdown-1__BV_toggle_" class="dropdown-menu">-->
<!--                            <li  role="presentation"><a role="menuitem" href="#" target="_self"-->
<!--                                                                          class="dropdown-item active">All</a></li>-->
<!--                            <li  role="presentation"><a role="menuitem" href="#" target="_self"-->
<!--                                                                          class="dropdown-item">Withdrawal</a></li>-->
<!--                            <li  role="presentation"><a role="menuitem" href="#" target="_self"-->
<!--                                                                          class="dropdown-item">Deposit</a></li>-->
<!--                            <li  role="presentation"><a role="menuitem" href="#" target="_self"-->
<!--                                                                          class="dropdown-item">Capital</a></li>-->
<!--                            <li  role="presentation"><a role="menuitem" href="#" target="_self"-->
<!--                                                                          class="dropdown-item">Buy</a></li>-->
<!--                            <li  role="presentation"><a role="menuitem" href="#" target="_self"-->
<!--                                                                          class="dropdown-item">Referral</a></li>-->
<!--                            <li  role="presentation"><a role="menuitem" href="#" target="_self"-->
<!--                                                                          class="dropdown-item">Reward</a></li>-->
<!--                            <li  role="presentation"><a role="menuitem" href="#" target="_self"-->
<!--                                                                          class="dropdown-item">Trial</a></li>-->
<!--                            <li  role="presentation"><a role="menuitem" href="#" target="_self"-->
<!--                                                                          class="dropdown-item">System</a></li>-->
<!--                          </ul>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
                  <div  class="row">
                    <div  class="col-24" style="width: 100%; padding: 10px;">
                      <div  class="table-responsive bg-white shadow rounded mt-4">
                        <table  class="table mb-6 table-center">
                          <thead  class="bg-light">
                          <tr >
                                          <th scope="col" class="text-center">{{$t('transaction[0]')}}</th>
                                          <th scope="col" class="text-center">{{$t('transaction[1]')}}</th>
                                          <th scope="col" class="text-center">{{$t('transaction[2]')}}</th>
                                          <th scope="col" class="text-center">{{$t('transaction[3]')}}</th>
                                          <th scope="col" class="text-center">{{$t('transaction[4]')}}</th>
                          </tr>
                          </thead>
                          <tbody >
                          <tr v-for="(item,index) in listData" :key="index">
                              <td :data-label="$t('transaction[0]')" class="text-center small" style="font-size: 12px;">
                                <strong>{{item.order_number}}</strong>
                              </td>
                              <td :data-label="$t('transaction[1]')">
                                {{item.trade_time}}
                              </td>
                              <td :data-label="$t('transaction[2]')"  class="text-center small" style="font-size: 12px;">
                                                <span class="font-weight-bold  text--success ">
                                                   {{InitData.currency}} {{item.jj||''}}{{item.trade_amount}}
                                                </span>
                              </td>
                              <td :data-label="$t('transaction[3]')" class="text-center small" style="font-size: 12px;">
                                {{InitData.currency}} {{item.trade_amount}}
                              </td>
                              <td :data-label="$t('transaction[4]')" class="text-center small" style="font-size: 12px;">
                                {{item.remarks}}
                              </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div  class="mt-3 ">
                    <div  style="display: flex; justify-content: center;">
                      <ul  role="menubar" aria-disabled="false" aria-label="Pagination"
                          class="pagination b-pagination pagination-lg">
                        <li role="presentation" aria-hidden="true" class="page-item " @click="changePage(1)">
                          <span role="menuitem" aria-label="Go to first page"  aria-disabled="true" class="page-link">First</span>
                        </li>
                        <li role="presentation" aria-hidden="true" :class="'page-item '+(data_current_page==1?'disabled':'')" @click="perPage"><span role="menuitem"
                                                                                                    aria-label="Go to previous page"
                                                                                                    aria-disabled="true"
                                                                                                    class="page-link">Prev</span>
                        </li>
                        <li role="presentation" class="page-item active">
                          <button role="menuitemradio" type="button" @click="changePage(data_current_page)" :class="'number active'" class="page-link">{{data_current_page}}
                          </button>
                        </li>
                        <li role="presentation" aria-hidden="true" :class="'page-item '+(data_total_page==data_current_page?'disabled':'')" @click="nextPage"><span role="menuitem"
                                                                                                    aria-label="Go to next page"
                                                                                                    aria-disabled="true"
                                                                                                    class="page-link">Next</span>
                        </li>
                        <li role="presentation" aria-hidden="true" class="page-item " @click="changePage(data_total_page)"><span role="menuitem"
                                                                                                    aria-label="Go to last page"
                                                                                                    aria-disabled="true"
                                                                                                    class="page-link">Last</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div  class="mt-3 " v-if="listData.length==0">
                    <div  class="d-grid gap-2">
                      <button  type="button"
                              class="btn btn btn-primary disabled btn-secondary btn-block">{{$t('vanPull[0]')}}
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
  import UserHeader from '@/components/UserHeader'
  export default {
    name: 'transaction',
    components: {
      UserHeader
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
        this.$Model.FundDetails({trade_type: '',page_no:this.pageNo},data=>{
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
