<template>
  <div class="HomePage" id="app">
    <Header></Header>
    <div class="d-flex">
      <div class="col-2 border-end border-hhs d-none d-lg-block">
        <Side></Side>
      </div>
      <div class="container col-lg-10 ">
        <div class="">
          <div class="p-4 border rounded-3 border-0" style="background: linear-gradient(to left, rgb(247, 156, 224), rgb(105, 12, 160));">
            <h4>Earn Referral Rewards</h4>
            <h6>As an affiliate partner of our website, you have the opportunity to make money by sharing your referral links with friends and family. Even if you don’t invest, you can still start earning up to 5% of each purchase of your recommended users. Just copy and share your unique referral link with your friends and your referral rewards will keep growing. Follow the link above to visit your recommended link and start making money.</h6>
            <div class="mt-4">
              <a href="javascript:;" @click="$router.push('/affiliate')" type="button" class="btn col-6 col-lg-6 p-2 text-light" style="background-color: blueviolet;">Affiliate</a>
            </div>
          </div>
          <div class="py-3">
            <div class="m-2 pb-2">
              <h4 class="text-zs">My Affiliate Link</h4>
            </div>
            <div class="border rounded-3 border-0 bg-okh p-3 text-center">
              <input class="w-100 border rounded-3 border-0 ps-3 my-3" style="line-height: 20px; height: 40px; font-size: 15px; color: rgb(163,163,163); background-color: rgb(51, 51, 51);" type="text" value="http://jamining.io/register?invite=604603" disabled="" data-sharkid="__0">
              <button @click="copy" :data-clipboard-text="promoteUrl" id="copylink" class="btn btn-primary col-4 p-2 copy">Copy</button>
            </div>
            <div class="border rounded-3 border-0 bg-okh p-3 text-center mt-3">
              <h4 class="text-zs">Your Partner</h4>
              <h2>{{teamNum}}</h2>
            </div>
          </div>
          <div class=" ">
            <h4 class="text-zs">Recommended list</h4>

            <table class="w-100 text-bhs text-center ">
              <thead class="fs-5 border-bottom border-hhs bg-okh" style="height: 50px;">
              <tr class="">
                <th class="col-3">Username</th>
                <th class="col-3">Level</th>
                <th class="col-3">Total Deposit</th>
                <th class="col-3">Join Date</th>
              </tr>
              </thead>
              <tbody class="fs-7" style="height: 50px; line-height: 30px;">
              <tr v-for="(item,index) in reportData" :key="index">
                <th class="col-3">{{item.from}}</th>
                <th class="col-3">{{item.vip_level}}</th>
                <th class="col-3">{{InitData.currency}} {{item.trade_amount}}</th>
                <th class="col-3">{{item.trade_time}}</th>
              </tr>

              </tbody>
            </table>
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
    </div>
<!--    <section  class="user-panel-section" style="padding: 20px 0px;">-->
<!--      <div  class="row">-->
<!--        <div   class="col-lg-2">-->
<!--          <Side></Side>-->
<!--        </div>-->
<!--        <div  class="col-lg-10 ps-xl-5">-->
<!--          <div   class="referrals" style="margin-top: 20px">-->
<!--            <div  class="">-->
<!--              <div  class="user-panel-title-box"><h2  class="mb-3">{{$t('affiliates[1]')}}</h2></div>-->
<!--              <div  class="row row-2 mt-gs g-3">-->
<!--                <div  class="col-12 col-sm-8">-->
<!--                  <div  class="row row-2_1 g-0">-->
<!--                    <div  class="col-12 col-sm-7 my-3">-->
<!--                      <div  class="item">-->
<!--                        <div  class="label">{{$t('affiliates[2]')}}</div>-->
<!--                        <div  class="value">{{UserInfo.username}}</div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div  class="col-12 col-sm-5 my-3">-->
<!--                      <div  class="item">-->
<!--                        <div  class="label">{{$t('affiliates[4]')}}</div>-->
<!--                        <div  class="value">{{UserInfo.idcode}}</div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div  class="profile-setting-panel-wrap">-->
<!--                <div  class="row row-1 gy-4 gx-3">-->
<!--                  <div  class="col-12 col-sm-8">-->
<!--                    <div  class="item">-->
<!--                      <div  class="label">{{$t('affiliates[5]')}}</div>-->
<!--                      <div   class="relink_box" style="margin-top: 6px;">-->
<!--                        <div  class="relink">-->
<!--                          <div  class="path">{{promoteUrl}}</div>-->
<!--                          <div  class="button window d-none d-sm-block copy" size="sm" @click="copy" :data-clipboard-text="promoteUrl"> {{$t('affiliates[6]')}}</div>-->
<!--                        </div>-->
<!--                        <div  class="copy-but d-block d-sm-none mt-4 text-center copy" @click="copy" :data-clipboard-text="promoteUrl" size="sm"> {{$t('affiliates[6]')}}-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div  class="col-12 col-sm-4">-->
<!--                    <div  class="item">-->
<!--                      <div  class="label">{{$t('affiliates[7]')}}</div>-->
<!--                      <div  class="value">{{teamNum}}</div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
    <Footer></Footer>
  </div>
</template>
<script>
  import Clipboard from 'clipboard';
  export default {
    name: 'transaction',
    components: {
    },
    data() {
      return {
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
      // this.getListData('init');
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
  .relink_box .relink {
    height: 35px;
    border-radius: 8px;
    opacity: .8;
    border: 1px solid #3a516c;
    display: flex;
    align-items: center
  }

  .relink_box .relink .path {
    flex: 1;
    width: 0;
    font-size: 13px;
    font-weight: 500;
    color: #1c2a46;
    line-height: 18px;
    padding: 0 13px;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-all
  }

  .relink_box .relink .button {
    padding: 0 13px;
    font-size: 14px;
    font-weight: 500;
    color: #00b301;
    line-height: 26px;
    cursor: pointer
  }

  .relink_box .copy-but {
    cursor: pointer;
    margin: 0 auto;
    font-size: 18px;
    width: 90%;
    border-radius: 30px;
    background-color: #00b300;
    color: #fff;
    border: none;
    padding: 7px 0
  }

  .item {
    color: #1c2a46;
    margin: .5rem 0;
    height: 100%;
    font-weight: 600;
    padding: 1.25rem 1rem;
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.08);
    border-radius: 8px
  }

  .item .label {
    font-size: .875rem;
    line-height: 1.25rem
  }

  .item .value {
    font-size: 1.5rem;
    line-height: 2.125rem
  }

  .row-2_1 {
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.08);
    border-radius: 8px
  }

  .row-2_1 .item {
    box-shadow: none
  }

</style>
