<template>
  <div class="HomePage" id="app">
    <Header></Header>
    <section class="user-panel-section" style="padding: 20px 0px;">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="sidebar-head d-flex flex-wrap align-items-center justify-content-between">
              <h3 class="sidebar-head-title"></h3>
            </div>
            <div class="sidebar sidebar-user-mobile">
              <a href="javascript:;" class="icon-btn menu-toggler-user-close">
                <em class="ni ni-cross"></em>
              </a>
              <div class="sidebar-widget">
                <ul class="user-nav">
                  <li class="">
                    <a aria-current="page" href="javascript:;" @click="$router.push('/dashboard')" class="router-link-active router-link-exact-active">
                      <em class="ni me-2 ni-puzzle"></em>{{$t('header[1]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/transactions')">
                      <em class="ni me-2 ni-file-text"></em>{{$t('header[2]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/deposit')">
                      <em class="ni me-2 ni-money"></em>{{$t('header[3]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;"  @click="$router.push('/withdraw')">
                      <em class="ni me-2 ni-exchange"></em>{{$t('header[4]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/MyPackages')">
                      <em class="ni me-2 ni-file-text"></em>{{$t('header[5]')}}</a>
                  </li>
<!--                  <li class="">-->
<!--                    <a href="javascript:;" @click="$router.push('/contracts')">-->
<!--                      <em class="ni me-2 ni-puzzle"></em>{{$t('header[6]')}}</a>-->
<!--                  </li>-->
                  <li class="active">
                    <a href="javascript:;" @click="$router.push('/affiliates')">
                      <em class="ni me-2 ni-money"></em>{{$t('header[7]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/loginPassword')">
                      <em class="ni me-2 ni-account-setting"></em>{{$t('header[8]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/message')">
                      <em class="ni me-2 ni-megento"></em>{{$t('head[13]')}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-10 ps-xl-5">
            <div class="referrals">
              <div class="">
                <div class="user-panel-title-box">
                  <h2 class="mb-3">{{$t('affiliates[1]')}}</h2>
                  <p style="margin-top: 4px; line-height: 22px;">{{$t('affiliates[7]')}}</p>
                </div>
                <div class="profile-setting-panel-wrap">
                  <div class="row row-1 gy-4 gx-3">
                    <div class="col-12 col-sm-8">
                      <div class="item">
                        <div class="label">{{$t('affiliates[5]')}}</div>
                        <div class="relink_box" style="margin-top: 6px;">
                          <div class="relink">
                            <div class="path">{{promoteUrl}}</div>
                            <div class="button window d-none d-sm-block copy-btn copy" size="sm" @click="copy" :data-clipboard-text="promoteUrl">{{$t('affiliates[16]')}}</div></div>
                          <div class="copy-but d-block d-sm-none mt-4 text-center copy-btn copy" size="sm" @click="copy" :data-clipboard-text="promoteUrl">{{$t('affiliates[16]')}}</div></div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="item">
                        <div class="label">{{$t('affiliates[10]')}}</div>
                        <div class="value">{{teamNum}}</div></div>
                    </div>
                  </div>
                  <div class="row row-2 mt-gs g-3">
                    <div class="col-12 col-sm-8">
                      <div class="row row-2_1 g-0">
                        <div class="col-12 col-sm-7 my-3">
                          <div class="item">
                            <div class="label">{{$t('affiliates[3]')}}</div>
                            <div class="value">{{UserInfo.username}}</div></div>
                        </div>
                        <div class="col-12 col-sm-5 my-3">
                          <div class="item">
                            <div class="label">{{$t('affiliates[4]')}}</div>
                            <div class="value">{{UserInfo.idcode}}</div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row row-2 mt-gs g-3">
                    <div class="c-table">
                      <div class="tr">
                        <div class="th">{{$t('affiliates[11]')}}</div>
                        <div class="th">{{$t('affiliates[12]')}}</div>
                        <div class="th">{{$t('affiliates[13]')}}</div>
                        <div class="th">{{$t('affiliates[14]')}}</div>
                        <div class="th">{{$t('affiliates[15]')}}</div>
                      </div>
                      <div class="no-data" v-if="listData.length==0">{{$t('vanPull[1]')}}</div>
                      <div class="tr" v-for="(item,index) in listData" :key="index">
                        <div class="td">{{item.trade_time}}</div>
                        <div class="td">{{item.from}}</div>
                        <div class="td">{{item.vip_level}}</div>
                        <div class="td">{{InitData.currency}} {{item.trade_amount}}</div>
                        <div class="td">{{item.remarks}}</div>
                      </div>
                    </div>
                    <div class="pagination-box">
                      <div class="pagination-pc el-pagination is-background">
                        <button @click="perPage" type="button" :disabled="data_current_page==1?true:false" class="btn-prev"><i class="el-icon el-icon-arrow-left"></i>
                        </button>
                        <ul class="el-pager">
                          <li @click="changePage(item)" :class="'number '+(item==data_current_page?'active':'')" v-for="item in data_total_page">{{item}}</li>
                        </ul>
                        <button @click="nextPage" :disabled="data_total_page==data_current_page?true:false" type="button" class="btn-next"><i class="el-icon el-icon-arrow-right"></i></button>
                      </div>
                      <div class="pagination-h5 el-pagination is-background">
                        <button @click="perPage" type="button" :disabled="data_current_page==1?true:false" class="btn-prev"><i class="el-icon el-icon-arrow-left"></i>
                        </button>
                        <ul class="el-pager">
                          <li @click="changePage(item)" :class="'number '+(item==data_current_page?'active':'')" v-for="item in data_total_page">{{item}}</li>
                        </ul>
                        <button @click="nextPage" :disabled="data_total_page==data_current_page?true:false" type="button" class="btn-next"><i class="el-icon el-icon-arrow-right"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  @media only screen and (min-width: 1024px) {
    html {
      font-size:10px
    }
  }

  @media only screen and (max-width: 1024px) {
    html {
      font-size:10px
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 5px
  }

  ::-webkit-scrollbar-corner,::-webkit-scrollbar-track {
    background-color: #e2e2e2
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: #fbc241
  }

  .slide-enter-active,.slide-leave-active {
    transition: all .2s ease
  }

  .slide-enter,.slide-leave-to {
    transform: translateY(10px);
    opacity: 0
  }

  .slide-right-enter-active,.slide-right-leave-active {
    transition: all .2s ease
  }

  .slide-right-enter,.slide-right-leave-to {
    transform: translateX(-10px);
    opacity: 0
  }

  @keyframes tobig-63a9b81e {
    0% {
      transform: scale(1)
    }

    to {
      transform: scale(1.5)
    }
  }

  input::-webkit-inner-spin-button,input::-webkit-outer-spin-button {
    -webkit-appearance: none!important
  }

  input[type=number] {
    -moz-appearance: textfield
  }

  .el-carousel__indicators--outside button {
    background-color: #fbc241!important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: #fbc241!important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #1c2b46!important
  }

  .el-pagination.is-background .el-pager li:not(.active):hover {
    color: #1c2b46!important
  }

  .el-message {
    font-size: 1.6rem
  }

  .el-menu-item {
    padding: 0 2rem;
    font-size: 1.5rem;
    font-weight: 700
  }

  .el-submenu__title {
    font-size: 1.5rem!important;
    font-weight: 700
  }

  .el-menu-item [class^=el-icon-],.el-submenu [class^=el-icon-] {
    font-size: 2rem
  }

  .el-submenu__icon-arrow {
    font-size: 1.4rem!important
  }

  .el-menu-item.is-active,.el-menu-item:hover,.el-submenu__title:hover {
    color: #fbc241;
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: #fbc241
  }

  .lang-item {
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap
  }

  .lang-item .flag {
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-right: .6rem
  }

  .option-label {
    display: flex;
    align-items: center;
    width: 100%
  }

  .option-label .icon {
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-right: .6rem
  }

  .el-input {
    font-size: 1.5rem!important
  }

  .el-input .el-input__inner {
    height: 4.5rem;
    line-height: 4.5rem;
    padding: 0 2rem;
    font-family: myFont;
    color: #000;
    border: 1px solid #d9d9d9!important
  }

  .el-textarea__inner {
    font-size: 1.5rem!important;
    font-family: myFont;
    color: #000!important
  }

  .el-form-item__label {
    padding-bottom: 1rem!important;
    line-height: normal!important;
    font-size: 1.5rem!important;
    color: #000!important;
    word-wrap: break-word
  }

  .el-input.is-disabled .el-input__inner {
    color: #000!important;
    cursor: default!important
  }

  .el-radio {
    color: #000!important
  }

  .el-radio__label {
    font-size: 1.5rem!important
  }

  .el-select {
    width: 100%
  }

  .el-select-dropdown__item {
    font-size: 1.5rem;
    font-family: myFont
  }

  .el-select-dropdown__empty {
    font-size: 1.5rem!important;
    font-family: myFont
  }

  .el-select-dropdown__item.selected {
    color: #fbc241
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #fbc241!important;
    border-color: #fbc241!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #fbc241!important
  }

  @media only screen and (min-width: 1024px) {
    .container {
      width:100%
    }

    .container .box {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 3rem
    }

    .container .box .box-item {
      flex: 1;
      border-radius: 4px;
      background-color: #fff
    }

    .container .box .box-item:not(:last-child) {
      margin-right: 2rem
    }

    .container .box .box-item .title {
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem 2rem;
      border-radius: 4px 4px 0 0;
      font-size: 1.8rem;
      font-weight: 700;
      color: #fff;
      word-wrap: break-word;
      background-color: #fbc241
    }

    .container .box .box-item .user-info {
      width: 100%;
      box-sizing: border-box;
      padding: 4rem
    }

    .container .box .box-item .user-info .info-item1 {
      width: 100%;
      font-size: 1.4rem;
      color: #666;
      word-break: break-all
    }

    .container .box .box-item .user-info .info-item1:not(:last-child) {
      margin-bottom: 1.5rem
    }

    .container .box .box-item .user-info .info-item1 .value {
      margin-left: 6px;
      font-size: 1.6rem;
      font-weight: 700;
      color: #000
    }

    .container .box .box-item .user-info .info-item2 {
      width: 100%;
      margin-bottom: 3rem
    }

    .container .box .box-item .user-info .info-item2 .label {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 1.4rem;
      color: #666;
      word-wrap: break-word
    }

    .container .box .box-item .user-info .info-item2 .input-group {
      display: flex;
      align-items: center;
      width: 100%
    }

    .container .box .box-item .user-info .info-item2 .input-group .el-input.is-disabled .el-input__inner {
      background-color: #efefef!important
    }

    .container .box .box-item .user-info .info-item2 .input-group .input {
      width: 100%
    }

    .container .box .box-item .user-info .info-item2 .input-group .input .el-input__inner {
      border-right: none!important;
      border-radius: 4px 0 0 4px
    }

    .container .box .box-item .user-info .info-item2 .input-group .copy-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0 1.2rem;
      border-radius: 0 4px 4px 0;
      background-color: #fbc241;
      cursor: pointer
    }

    .container .box .box-item .user-info .info-item2 .input-group .copy-btn i {
      font-size: 1.8rem;
      color: #fff;
      white-space: nowrap
    }

    .container .box .box-item .user-info .info-item3 {
      width: 100%;
      line-height: 160%;
      margin-bottom: 2rem;
      font-size: 1.4rem;
      color: #444;
      word-wrap: break-word
    }

    .container .box .box-item .partner-list {
      width: 100%;
      box-sizing: border-box;
      padding: 4rem
    }

    .container .box .box-item .partner-list .cur-title {
      width: 100%;
      margin-bottom: 3rem;
      font-size: 1.6rem;
      font-weight: 700;
      color: #000;
      word-break: break-all
    }

    .container .box .box-item .partner-list .cur-title .num {
      margin-left: 6px;
      font-size: 2rem;
      color: #fbc241
    }

    .container .box .box-item .partner-list .list-item {
      width: 100%;
      font-size: 1.4rem;
      color: #000;
      word-break: break-all
    }

    .container .box .box-item .partner-list .list-item:not(:last-child) {
      margin-bottom: 1.5rem
    }

    .container .box .box-item .partner-list .pagination {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 1.5rem 0 0
    }

    .container .box .box-item .partner-list .pagination .pagination-h5 {
      display: none
    }

    .container .c-table {
      width: 100%
    }

    .container .c-table .tr {
      display: flex;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;
      background-color: #fff
    }


    .container .c-table .tr:last-child {
      border-radius: 0 0 4px 4px
    }

    .container .c-table .tr:not(:last-child) {
      border-bottom: 1px solid #e9e9e9
    }

    .container .c-table .tr .th {
      word-wrap: break-word
    }

    .container .c-table .tr .td,.container .c-table .tr .th {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      box-sizing: border-box;
      padding: 1rem 2rem;
      font-size: 1.2rem;
      color: #000;
      text-align: center
    }

    .container .c-table .tr .td {
      word-break: break-all
    }

    .container .c-table .no-data {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 5rem;
      box-sizing: border-box;
      font-size: 1rem;
      color: #444;
      text-align: center;
      white-space: nowrap;
      background-color: #fff
    }

    .container .pagination-box {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 3rem 0 0
    }

    .container .pagination-box .pagination-h5 {
      display: none
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      width:100%
    }

    .container .box {
      width: 100%;
      margin-bottom: 2rem
    }

    .container .box .box-item {
      width: 100%;
      border-radius: 4px;
      background-color: #fff
    }

    .container .box .box-item:not(:last-child) {
      margin-bottom: 1.5rem
    }

    .container .box .box-item .title {
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem;
      border-radius: 4px 4px 0 0;
      font-size: 1.7rem;
      font-weight: 700;
      color: #fff;
      word-wrap: break-word;
      background-color: #fbc241
    }

    .container .box .box-item .user-info {
      width: 100%;
      box-sizing: border-box;
      padding: 2rem
    }

    .container .box .box-item .user-info .info-item1 {
      width: 100%;
      font-size: 1.4rem;
      color: #666;
      word-break: break-all
    }

    .container .box .box-item .user-info .info-item1:not(:last-child) {
      margin-bottom: 1.5rem
    }

    .container .box .box-item .user-info .info-item1 .value {
      margin-left: 6px;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000
    }

    .container .box .box-item .user-info .info-item2 {
      width: 100%;
      margin-bottom: 2rem
    }

    .container .box .box-item .user-info .info-item2 .label {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 1.4rem;
      color: #666;
      word-wrap: break-word
    }

    .container .box .box-item .user-info .info-item2 .input-group {
      display: flex;
      align-items: center;
      width: 100%
    }

    .container .box .box-item .user-info .info-item2 .input-group .el-input.is-disabled .el-input__inner {
      background-color: #efefef!important
    }

    .container .box .box-item .user-info .info-item2 .input-group .input {
      width: 100%
    }

    .container .box .box-item .user-info .info-item2 .input-group .input .el-input__inner {
      border-right: none!important;
      border-radius: 4px 0 0 4px
    }

    .container .box .box-item .user-info .info-item2 .input-group .copy-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0 1.2rem;
      border-radius: 0 4px 4px 0;
      background-color: #fbc241;
      cursor: pointer
    }

    .container .box .box-item .user-info .info-item2 .input-group .copy-btn i {
      font-size: 1.8rem;
      color: #fff;
      white-space: nowrap
    }

    .container .box .box-item .user-info .info-item3 {
      width: 100%;
      line-height: 160%;
      margin-bottom: 1.5rem;
      font-size: 1.4rem;
      color: #444;
      word-wrap: break-word
    }

    .container .box .box-item .partner-list {
      width: 100%;
      box-sizing: border-box;
      padding: 2rem
    }

    .container .box .box-item .partner-list .cur-title {
      width: 100%;
      margin-bottom: 2rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
      word-break: break-all
    }

    .container .box .box-item .partner-list .cur-title .num {
      margin-left: 5px;
      font-size: 1.8rem;
      color: #fbc241
    }

    .container .box .box-item .partner-list .list-item {
      width: 100%;
      font-size: 1.4rem;
      color: #000;
      word-break: break-all
    }

    .container .box .box-item .partner-list .list-item:not(:last-child) {
      margin-bottom: 1.5rem
    }

    .container .box .box-item .partner-list .pagination {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 1.5rem 0 0
    }

    .container .box .box-item .partner-list .pagination .pagination-pc {
      display: none
    }

    .container .c-table {
      width: 100%
    }

    .container .c-table .tr {
      display: flex;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;
      background-color: #fff
    }

    .container .c-table .tr:last-child {
      border-radius: 0 0 4px 4px
    }

    .container .c-table .tr:not(:last-child) {
      border-bottom: 1px solid #e9e9e9
    }

    .container .c-table .tr .th {
      word-wrap: break-word
    }

    .container .c-table .tr .td,.container .c-table .tr .th {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      box-sizing: border-box;
      padding: .5rem;
      font-size: 1.2rem;
      color: #000;
      text-align: center
    }

    .container .c-table .tr .td {
      word-break: break-all
    }

    .container .c-table .no-data {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 5rem;
      box-sizing: border-box;
      font-size: 1rem;
      color: #444;
      text-align: center;
      white-space: nowrap;
      background-color: #fff
    }

    .container .pagination-box {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 2rem 0 0
    }

    .container .pagination-box .pagination-pc {
      display: none
    }
  }
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
  .btn-prev>>>.el-icon,.btn-next>>>.el-icon {
    width: 100%;
    text-align: center;
  }
</style>
