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
                  <li class="active">
                    <a href="javascript:;" @click="$router.push('/message')">
                      <em class="ni me-2 ni-file-text"></em>{{$t('head[13]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/deposit')">
                      <em class="ni me-2 ni-money"></em>{{$t('header[3]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;"  @click="$router.push('/withdraw')">
                      <em class="ni me-2 ni-exchange"></em>{{$t('header[4]')}}</a>
                  </li>
                  <li class=""  v-if="InitData.setting.luckydraw !=undefined && InitData.setting.luckydraw.status ==1">
                    <a href="javascript:;"  @click="$router.push('/lucky')">
                      <em class="ni me-2 ni-gift"></em>{{$t('common[2]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/MyPackages')">
                      <em class="ni me-2 ni-file-text"></em>{{$t('header[5]')}}</a>
                  </li>
<!--                  <li class="">-->
<!--                    <a href="javascript:;" @click="$router.push('/contracts')">-->
<!--                      <em class="ni me-2 ni-puzzle"></em>{{$t('header[6]')}}</a>-->
<!--                  </li>-->
                  <li class="">
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
            <div class="my-order">
              <div class="user-panel-title-box">
                <h2 data-v-353dc8c4="">{{$t('head[13]')}}</h2></div>
              <div class="profile-setting-panel-wrap">
                <div class="table-responsive">
                  <table class="table mb-0 table-s2">
                    <thead class="fs-14">
                    <tr>
                      <th scope="col" class="text-center">{{$t('messageInfo[3]')}}</th>
                      <th scope="col" class="text-center">{{$t('messageInfo[4]')}}</th>
                      <th scope="col" class="text-center">{{$t('messageInfo[5]')}}</th>
                    </tr>
                    </thead>
                    <tbody class="fs-13">
                    <tr v-for="(item,index) in listData" :key="index">
                      <td class="text-center small" style="font-size: 12px;">{{item.createtime}}</td>
                      <td class="text-center small" style="font-size: 12px;">{{item.title}}</td>
                      <td class="text-center small" style="font-size: 12px;display: flex;justify-content: center;">
                        <div class="detail-btn" v-if="item.read==0" @click="clkItem(item,index)"><i class="el-icon-monitor"></i></div>
                        <div class="detail-btn-read" v-else @click="clkItem(item,index)"><i class="el-icon-monitor"></i></div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="text-center mt-4 mt-md-5">
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
    </section>
    <div class="mask" v-if="showNotice">
      <div class="modal">
        <div class="modal-header">
          <div class="modal-title">{{msg_title}}</div>
          <div class="close" @click="showNotice = false"><i class="el-icon-close"></i></div>
        </div>
        <div class="modal-body">
          <div class="payment-info" v-html="msg_content">
          </div>
        </div>
        <div class="modal-footer">
          <div class="confirm-btn" @click="showNotice= false">{{$t('confirm')}}</div>
        </div>
      </div>
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
        data_total_page:"1",
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

  @keyframes tobig-9afe708e {
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
    background-color: #fbc241!important
  }

  .el-pagination.is-background .el-pager li:not(.active):hover {
    color: #fbc241!important
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
    .container .t-table,.container {
      width:100%
    }

    .container .t-table .tr {
      display: flex;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;
      background-color: #fff
    }

    .container .t-table .tr:first-child {
      border-bottom: none!important;
      border-radius: 4px 4px 0 0;
      background-color: #fbc241
    }

    .container .t-table .tr:last-child {
      border-radius: 0 0 4px 4px
    }

    .container .t-table .tr:not(:last-child) {
      border-bottom: 1px solid #e9e9e9
    }

    .container .t-table .tr .th {
      word-wrap: break-word
    }

    .container .t-table .tr .td,.container .t-table .tr .th {
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

    .container .t-table .tr .td {
      word-break: break-all
    }

    .container .t-table .no-data {
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
    .container .t-table,.container {
      width:100%
    }

    .container .t-table .tr {
      display: flex;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;
      background-color: #fff
    }

    .container .t-table .tr:first-child {
      border-bottom: none!important;
      border-radius: 4px 4px 0 0;
      background-color: #fbc241
    }

    .container .t-table .tr:last-child {
      border-radius: 0 0 4px 4px
    }

    .container .t-table .tr:not(:last-child) {
      border-bottom: 1px solid #e9e9e9
    }

    .container .t-table .tr .th {
      word-wrap: break-word
    }

    .container .t-table .tr .td,.container .t-table .tr .th {
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

    .container .t-table .tr .td {
      word-break: break-all
    }

    .container .t-table .no-data {
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
  .detail-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 4.5rem;
    max-width: 4.5rem;
    height: 3.5rem;
    border-radius: 4px;
    background-color: rgb(251, 194, 65);
    cursor: pointer;
  }
  .detail-btn-read {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 4.5rem;
    max-width: 4.5rem;
    height: 3.5rem;
    border-radius: 4px;
    background-color: #eee;
    cursor: pointer;
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
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
      display: block;
      margin: 0 auto;
      margin-left: 10%;
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
      overflow-y: scroll;
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
      padding: 0px 1.2rem;
      border-radius: 4px;
      font-size: 1.2rem;
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
      display: block;
      margin: 0 auto;
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
      overflow-y: scroll;
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
      padding: 0px 1.2rem;
      border-radius: 4px;
      font-size: 1.2rem;
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
  }
  .payment-info img {
    width: 100%;
  }
</style>
