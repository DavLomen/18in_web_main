<template>
  <div class="HomePage" id="app">
    <Header></Header>
    <div class="container">
      <div class="el-row">
        <div class="el-col el-col-5">
          <UserHeader></UserHeader>
        </div>
        <div class="el-col el-col-18 el-col-xs-24 el-col-lg-18 el-col-xl-18">
          <div>
            <div >
              <div class="el-row" style="position: relative; margin-top: 50px;">
                <button @click="$router.push('/dashboard')" type="button" class="el-button el-button--primary"
                        style="background: rgb(255, 243, 214); color: black; font-weight: 500;"><!----><i
                  class="el-icon-back"></i><span>{{$t('head[4]')}}</span></button>
              </div>
            </div>
            <section style="margin-top: 20px;">
              <div class="container" style="background-color: whitesmoke; padding: 20px; border-radius: 10px;"><h3>
                {{$t('affiliates[1]')}}</h3>
                <p style="font-size: 18px;">{{$t('affliliate[7]')}}</p></div>
            </section>
            <div  class="row mb-5">
              <div  class="col-md-9 mt-4">
                <div
                     style="width: 100%; background-color: rgb(56, 66, 71); padding: 30px 0px; border-radius: 1.25rem;">
                  <div  style="width: 90%; margin: 0px auto;"><span
                                                                                      style="color: rgb(232, 232, 255); font-weight: bold; font-size: 24px;"> {{$t('affiliates[5]')}}</span>
                  </div>
                  <div
                       style="width: 90%; background-color: rgb(232, 232, 255); margin: 20px auto 0px; border-radius: 25px; padding: 10px 15px; display: flex; flex-flow: row; justify-content: space-between; box-shadow: white 0px 0px 3px;">
                    <span  class="notranslate"
                          style="color: rgb(10, 10, 26); line-height: 37px; white-space: pre-wrap; overflow-wrap: break-word; word-break: break-all;">{{promoteUrl}}</span>
                    <button size="sm" class="window copy btn-dark"
                            style="font-size: 18px; width: 100px; border-radius: 30px; background-color: rgb(246, 197, 197); color: black; border: none; padding: 5px 0px;" @click="copy" :data-clipboard-text="promoteUrl">
                      {{$t('affiliates[16]')}}
                    </button>
                  </div>
                  <div  class="phone" style="text-align: center; margin-top: 20px;">
                    <button size="sm" @click="copy" :data-clipboard-text="promoteUrl" class="copy btn-dark"
                            style="font-size: 18px; width: 90%; border-radius: 30px; background-color: rgb(246, 197, 197); color: black; border: none; padding: 10px 0px;">
                      {{$t('affiliates[16]')}}222
                    </button>
                  </div>
                </div>
              </div>
              <div  class="col-md-3 mt-4">
                <div  class="rank" style="text-align: center; border-radius: 1.25rem;" @click="showNotice = true"><h6
                  >{{$t('affiliates[10]')}}</h6><h5 >{{teamNum}}</h5></div>
              </div>
            </div>
            <section class="section pt-3">
              <div
                style="background-color: whitesmoke; padding: 10px 20px 20px; border-radius: 10px; margin-bottom: 20px;">
                <div>
                  <div><h4>{{$t('affiliates[17]')}}</h4></div>
                  <div class="el-row">
                    <div class="el-col el-col-10"><h6 class="text-primary">{{$t('affiliates[2]')}}</h6></div>
                    <div class="el-col el-col-14"><span> {{UserInfo.email || UserInfo.username}} </span></div>
                  </div>
                </div>
                <div>
                  <div class="el-row">
                    <div class="el-col el-col-10"><h6 class="text-primary">{{$t('affiliates[4]')}}</h6></div>
                    <div class="el-col el-col-14"><span> {{UserInfo.idcode}} </span></div>
                  </div>
                </div>
              </div>
              <div class="container mt-5">
                <div class="el-row" style="margin-left: -10px; margin-right: -10px;">
                  <div class="el-col el-col-22 el-col-xs-24" style="padding-left: 10px; padding-right: 10px;"><h4>
                    {{$t('affiliates[9]')}}</h4></div>
                </div>
                <div class="el-row" style="margin-left: -10px; margin-right: -10px;">
                  <div class="el-col el-col-24 el-col-xs-24" style="padding-left: 10px; padding-right: 10px;">
                    <div class="table-responsive bg-white shadow rounded mt-4">
                      <table class="table mb-0 table-center">
                        <thead class="bg-light">
                        <tr>
                          <th scope="col" class="text-center">{{$t('affiliates[11]')}}</th>
                          <th scope="col" class="text-center">{{$t('affiliates[12]')}}</th>
                          <th scope="col" class="text-center">{{$t('affiliates[13]')}}</th>
                          <th scope="col" class="text-center">{{$t('affiliates[14]')}}</th>
                          <th scope="col" class="text-center">{{$t('affiliates[15]')}}</th>
                        </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in listData" :key="index">
                            <td class="text-center small" style="font-size: 12px;">{{item.trade_time}}</td>
                            <td class="text-center small" style="font-size: 12px;">{{item.from}}</td>
                            <td class="text-center small" style="font-size: 12px;">{{item.vip_level}}</td>
                            <td class="text-center small" style="font-size: 12px;">{{InitData.currency}} {{item.trade_amount}}</td>
                            <td class="text-center small" style="font-size: 12px;">{{item.remarks}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="mt-3 window">
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
                <div class="mt-3 phone" v-if="listData.length==0">
                  <div class="d-grid gap-2">
                    <button type="button"  class="btn btn btn-primary disabled btn-secondary btn-block">{{$t('vanPull[0]')}}</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>

    <div id="approveModal" v-if="showNotice" class="modal custom--modal fade show" tabindex="-1" style="display: block; padding-left: 0px;" aria-modal="true" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{$t('affiliates[9]')}}</h5>
            <button type="button" class="btn btn--danger text-white" data-bs-dismiss="modal" aria-label="Close" @click="showNotice = false">
              <i class="las la-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="payment-info" >
                <div class="box-item">
                  <div class="partner-list" style="min-height: 10rem;height:20rem;overflow-y: scroll;">
                    <div class="list-item" v-for="(item,index) in reportData" :key="index">
                      {{item.username}}
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" @click="showNotice = false" data-bs-dismiss="modal">{{$t('deposit[28]')}}</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import Clipboard from 'clipboard';
  import UserHeader from '@/components/UserHeader'
  export default {
    name: 'transaction',
    components: {
      UserHeader
    },
    data() {
      return {
        showNotice:false,
        teamNum:0,
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
        promoteUrl:'',

        tabsIndex: 0,
        currentDate: '',
        startDate: this.$Util.DateFormat('YY-MM-DD',new Date()),
        endDate: this.$Util.DateFormat('YY-MM-DD',new Date()),
        showDate: false,
        minDate: new Date(2020,0,1),
        pickType: 1,
        reportData: [],
        lowerName: [],
        currPid: '',
        teamActive: 0,
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      this.promoteUrl = `${this.InitData.setting.reg_url}/#/register/${this.UserInfo.idcode}`
      this.$Model.GetUserInfo();
      this.getTeamReport();
      this.getListData('init');
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      getTeamReport() {
        // let post = {startdate: this.startDate,enddate: this.endDate}
        let post = {}
        if(this.currPid){
          post.pve_id = this.currPid
        }
        this.$Model.TeamReport(post,data=>{
          if(data.code==1){
            this.reportData = data.teamList;
            this.teamNum = data.teamNumber;
          }
        })
      },
      copy () {
        let that = this;
        var clipboard = new Clipboard('.copy')
        clipboard.on('success', e => {
          that.$Dialog.Toast(that.$t('dialog[3]'));
          clipboard.destroy();
        })
        clipboard.on('error', e =>{
          // 不支持复制
          // 释放内存
          clipboard.destroy()
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
        this.$Model.FundDetails({trade_type: 8,page_no:this.pageNo},data=>{
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
  .rank {
    background: #384247;
    height: 100%;
    padding: 30px;
    border-radius: 10px;
    position: relative;
    color: #fff;
  }
  @media only screen and (min-width: 1024px) {
    .mask {
      position: fixed;
      bottom: 0px;
      left: 0px;
      z-index: 99;
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
      padding: 4rem 0px;
      background-color: rgba(0, 0, 0, 0.3);
      overflow: auto;
    }

    .mask .modal {
      width: 80%;
      margin: 0px auto;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
    }

    .mask .modal .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 2rem;
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-header .modal-title {
      max-width: 100%;
      font-size: 1.8rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .mask .modal .modal-header .close {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 4rem;
      max-width: 4rem;
      height: 3.2rem;
      margin-left: 4rem;
      border-radius: 4px;
      background-color: rgb(234, 84, 85);
      cursor: pointer;
    }

    .mask .modal .modal-header .close i {
      font-size: 1.7rem;
      color: rgb(255, 255, 255);
    }

    .mask .modal .modal-body {
      width: 100%;
      min-height: 8rem;
      box-sizing: border-box;
      padding: 2rem;
    }

    .mask .modal .modal-footer {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      box-sizing: border-box;
      padding: 2rem;
      border-top: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-footer .confirm-btn {
      height: 3.5rem;
      line-height: 3.5rem;
      box-sizing: border-box;
      padding: 0px 1.6rem;
      border-radius: 4px;
      font-size: 1.6rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      background-color: rgb(251, 194, 65);
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 1024px) {
    .mask {
      position: fixed;
      bottom: 0px;
      left: 0px;
      z-index: 99;
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
      padding: 2rem 1rem;
      background-color: rgba(0, 0, 0, 0.3);
      overflow: auto;
    }

    .mask .modal {
      width: 100%;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
    }

    .mask .modal .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem;
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-header .modal-title {
      max-width: 100%;
      font-size: 1.7rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .mask .modal .modal-header .close {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 3.6rem;
      max-width: 3.6rem;
      height: 2.8rem;
      margin-left: 2rem;
      border-radius: 4px;
      background-color: rgb(234, 84, 85);
      cursor: pointer;
    }

    .mask .modal .modal-header .close i {
      font-size: 1.7rem;
      color: rgb(255, 255, 255);
    }

    .mask .modal .modal-body {
      width: 100%;
      min-height: 8rem;
      box-sizing: border-box;
      padding: 1.5rem;
    }

    .mask .modal .modal-footer {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem;
      border-top: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-footer .confirm-btn {
      height: 3.5rem;
      line-height: 3.5rem;
      box-sizing: border-box;
      padding: 0px 1.6rem;
      border-radius: 4px;
      font-size: 1.5rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      background-color: rgb(251, 194, 65);
      cursor: pointer;
    }
  }
  .payment-info {
    font-size: 1.2rem;
    color: #000;
  }
  .payment-info img {
    width: 100%;
  }
  .modal {
    display: block !important;
  }
  .modal-body {
    color: #000000;
  }
</style>
