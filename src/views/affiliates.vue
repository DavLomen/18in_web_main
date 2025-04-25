<template>
  <div class="HomePage" id="app">
    <UserHeader></UserHeader>
    <div class="app-wrapper" style="width: calc(100% - 25rem);">
      <div class="page-header">
        <div class="page-title">{{$t('affiliates[0]')}}</div>
        <div class="el-dropdown">
          <div @click="showUserDown = !showUserDown" class="right-icon el-dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-8265" role="button" tabindex="0" x-placement="bottom-end"><i class="el-icon-user"></i></div>
          <ul class="el-dropdown-menu el-popper" id="dropdown-menu-8265" v-show="showUserDown">
            <li tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$router.push('/walletAddress')"><i class="el-icon-wallet"></i> {{$t('walletAddress[0]')}} </li>
            <li tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$router.push('/loginPassword')"><i class="el-icon-lock"></i> {{$t('walletAddress[1]')}} </li>
            <li tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$router.push('/payPassword')"><i class="el-icon-lock"></i> {{$t('walletAddress[2]')}} </li>
            <li  tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$Model.Logout()"><i class="el-icon-switch-button"></i> {{$t('head[5]')}} </li>
            <div x-arrow="" class="popper__arrow" style="left: 142.5px;"></div>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="box">
          <div class="box-item">
            <div class="title">{{$t('affiliates[1]')}}</div>
            <div class="user-info">
              <div class="info-item1">
                {{$t('affiliates[2]')}}: <span class="value">{{UserInfo.email}}</span>
              </div>
              <div class="info-item1">
                {{$t('affiliates[3]')}}: <span class="value">{{UserInfo.username}}</span>
              </div>
              <div class="info-item1">
                {{$t('affiliates[4]')}}: <span class="value">{{UserInfo.idcode}}</span>
              </div>
              <div class="info-item2">
                <div class="label">{{$t('affiliates[5]')}}</div>
                <div class="input-group">
                  <div class="input el-input is-disabled">
                    <input
                      v-model="promoteUrl"
                    type="text"
                    disabled="disabled"
                    autocomplete="off"
                    placeholder=""
                    class="el-input__inner"
                  />
                  </div>
                  <div class="copy-btn copy" @click="copy" :data-clipboard-text="promoteUrl"><i class="el-icon-document-copy"></i></div>
                </div>
              </div>
              <div class="info-item1">
                <i class="el-icon-coin" style="margin-right: 4px"></i>{{$t('affiliates[6]')}}
              </div>
              <div class="info-item3" v-html="$t('affiliates[7]')">

              </div>
              <div
                class="info-item1" @click="$router.push('/affiliate')"
                style="color: #5a90ff; cursor: pointer"
              >
                {{$t('affiliates[8]')}}
              </div>
            </div>
          </div>
          <div class="box-item">
            <div class="title">{{$t('affiliates[9]')}}</div>
            <div class="partner-list" style="height: 50rem;overflow-y: scroll;">
              <div class="cur-title">{{$t('affiliates[10]')}}: <span class="num">{{teamNum}}</span></div>
              <div class="list-item" v-for="(item,index) in reportData" :key="index">
                {{item.username}}
              </div>
              <div class="pagination"></div>
            </div>
          </div>
        </div>
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
    background-color: rgb(124 58 237)
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
    background-color: rgb(124 58 237) !important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: rgb(124 58 237) !important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  /*.el-pagination.is-background .el-pager li:not(.disabled).active {*/
  /*  background-color: rgb(124 58 237) !important*/
  /*}*/

  /*.el-pagination.is-background .el-pager li:not(.active):hover {*/
  /*  color: rgb(124 58 237) !important*/
  /*}*/

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
    color: rgb(124 58 237) ;
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: rgb(124 58 237)
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
    color: rgb(124 58 237)
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: rgb(124 58 237) !important;
    border-color: rgb(124 58 237) !important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: rgb(124 58 237) !important
  }

  @media only screen and (min-width: 1024px) {

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
      background-color: rgb(124 58 237)
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
      background-color: rgb(124 58 237) ;
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
      color: rgb(124 58 237)
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

    .container .c-table .tr:first-child {
      border-bottom: none!important;
      border-radius: 4px 4px 0 0;
      background-color: rgb(124 58 237)
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
      font-size: 1.4rem;
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
      font-size: 1.5rem;
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
      background-color: rgb(124 58 237)
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
      background-color: rgb(124 58 237) ;
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
      color: rgb(124 58 237)
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

    .container .c-table .tr:first-child {
      border-bottom: none!important;
      border-radius: 4px 4px 0 0;
      background-color: rgb(124 58 237)
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
      font-size: 1.4rem;
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

</style>
