<template>
  <div class="HomePage" id="app">
    <UserHeader></UserHeader>
    <div class="banner">
      <div class="banner__content">
        <div class="container">
          <div class="row g-3 justify-content-center">
            <div class="col-lg-10 text-center">
              <h2 class="m-0 banner-title">{{$t('head[19]')}}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="table-responsive--md">
          <table class="table custom--table">
            <thead>
            <tr>
              <th>{{$t('deposit[14]')}}</th>
              <th>{{$t('deposit[15]')}}</th>
              <th>{{$t('deposit[16]')}}</th>
              <th>{{$t('deposit[17]')}}</th>
              <th>{{$t('deposit[18]')}}</th>
              <th>{{$t('deposit[19]')}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="listData.length==0">
              <td colspan="100%"  class="text-center">{{$t('vanPull[1]')}}</td>
            </tr>
            <tr v-for="(item,index) in listData" :key="index">
              <td :data-label="$t('deposit[14]')">{{item.dan}}</td>
              <td :data-label="$t('deposit[15]')">{{item.pay_type}}</td>
              <td :data-label="$t('deposit[16]')">
                <strong>{{InitData.currency}}{{item.money}}</strong>
              </td>
              <td :data-label="$t('deposit[17]')">
<!--                <span class="badge badge&#45;&#45;warning">Pending</span>-->
                <div class="badge badge--success" v-if="item.status==3">{{item.status_desc}}</div>
                <div class="badge badge--warning" v-else-if="item.status==-1">{{item.status_desc}}</div>
                <div class="badge badge--info" v-else>{{item.status_desc}}</div>
              </td>
              <td :data-label="$t('deposit[18]')">
                <i class="fa fa-calendar"></i> {{item.adddate}}
              </td>
              <td :data-label="$t('deposit[19]')">
                <button class="btn btn--base btn-sm approveBtn" @click="showD(item)">
                  <i class="fa fa-desktop"></i>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="pagination-box">
          <div class="pagination-pc el-pagination is-background">
            <button @click="perPage" type="button" :disabled="data_current_page==1?true:false" class="btn-prev">
              <i class="fa fa-angle-left"></i>
            </button>
            <ul class="el-pager">
              <li @click="changePage(item)" :class="'number '+(item==data_current_page?'active':'')" v-for="item in data_total_page">{{item}}</li>
            </ul>
            <button @click="nextPage" :disabled="data_total_page==data_current_page?true:false" type="button" class="btn-next">
              <i class="fa fa-angle-right"></i></button>
          </div>
          <div class="pagination-h5 el-pagination is-background">
            <button @click="perPage" type="button" :disabled="data_current_page==1?true:false" class="btn-prev">
              <i class="fa fa-angle-left"></i>
            </button>
            <ul class="el-pager">
              <li @click="changePage(item)" :class="'number '+(item==data_current_page?'active':'')" v-for="item in data_total_page">{{item}}</li>
            </ul>
            <button @click="nextPage" :disabled="data_total_page==data_current_page?true:false" type="button" class="btn-next">
              <i class="fa fa-angle-right"></i></button>
          </div>
        </div>
      </div>
    </section>
    <div id="approveModal" v-if="showDetail" class="modal custom--modal fade show" tabindex="-1" style="display: block; padding-left: 0px;" aria-modal="true" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{$t('deposit[19]')}}</h5>
            <button type="button" class="btn btn--danger text-white" data-bs-dismiss="modal" aria-label="Close" @click="showDetail = false">
              <i class="las la-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <ul class="list-group">
              <li class="list-group-item dark-bg">{{$t('deposit[14]')}} : <span class="withdraw-amount ">{{detailItem.dan}}</span></li>
              <li class="list-group-item dark-bg">{{$t('deposit[15]')}} : <span class="withdraw-charge ">{{detailItem.pay_type}}</span></li>
              <li class="list-group-item dark-bg">{{$t('deposit[16]')}} : <span class="withdraw-after_charge">{{InitData.currency}}{{detailItem.money}}</span></li>
              <li class="list-group-item dark-bg">{{$t('deposit[17]')}} : <span class="withdraw-rate">{{detailItem.status_desc}}</span></li>
              <li class="list-group-item dark-bg">{{$t('deposit[18]')}} : <span class="withdraw-payable">{{detailItem.adddate}}</span></li>
            </ul>
            <ul class="list-group withdraw-detail mt-1"><br><strong class="my-3">{{$t('deposit[27]')}}</strong>  <li class="list-group-item">
              <span class="fw-bold "> {{$t('deposit[25]')}} </span> :
<!--              <img src="./static/images/verify/dashboard/deposit//2024/01/18/65aa20cbd50171705648331.png" alt="Image" class="w-100">-->
              <img  v-if="detailItem.screenshots!=''" :src="InitData.setting.up_url+ detailItem.screenshots"
                   class="w-100">
            </li></ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" @click="showDetail = false" data-bs-dismiss="modal">{{$t('deposit[28]')}}</button>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import QRCode from "qrcodejs2";
  import Clipboard from 'clipboard';
  import UserHeader from '@/components/UserHeader'
  export default {
    name: 'depositList',
    components: {
      UserHeader
    },
    data() {
      return {
        id:'',
        detailItem:{},
        showDetail:false,
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,
        canSubmit:true,
        amountMoney: this.$route.query.amount||'',
        postData: {
          money: this.$route.query.amount||'',
          recharge_id: '',
          name: '',
          screenshots: ''
        },
        showSelect:false,
        selectTypes: {
          id:'',
          qrcode:'',
          name:'',
          rate:0,
        },
        rechargeList: '',
        pickerList: '',
        showPicker: false,
        isSubmit: false,
        rechargeData: '',
        rechargeInfo: '',
        showPrice: false,
        pickerName: '',
        jumpData: {
          result: {
            bid: ''
          }
        },
        fileList: [],
        upiData: {
          pay_name: '',
          pay_mobile: '',
          pay_account: '',
          pay_email: ''
        },
        siteBank: '',

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
      showD(item) {
        this.detailItem = item;
        this.showDetail = true
      },
      chageRecharge(item) {
        this.selectTypes= item;
        this.postData.recharge_id= item.id;
        this.id = item.id;
        let typeid = item.id;
        this.rechargeInfo = this.rechargeList.find(item => item.id == typeid);
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
        this.$Model.GetRechargeRecord({page_no:this.pageNo},data=>{
          this.isLoad = false
          if(data.code==1){
            this.data_current_page=data.data_current_page;
            this.data_total_page=data.data_total_page;
            if(type=='load'){
              this.listData = this.listData.concat(data.info);
            }else{
              this.listData = data.info
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
      selectType() {
        let typeid = this.id;
        this.fileList = []
        this.siteBank = ''
        this.postData.recharge_id= typeid;
        this.rechargeInfo = this.rechargeList.find(item => item.id == typeid);
        if (this.rechargeInfo.bankList.length > 0) {
          let val =  this.rechargeInfo.bankList[0].id;
          switch(this.rechargeInfo.mode) {
            case "wap":
            case "scan":
              this.jumpData.result.scanType = this.rechargeInfo.bankList.find(item=>item.id==val).bank_code
              break;
            case "online":
            case "quick":
            case "upi":
              this.jumpData.result.bank_code = this.rechargeInfo.bankList.find(item=>item.id==val).bank_code
              break;
            case "upi":
              this.jumpData.result.bank_code = this.rechargeInfo.bankList.find(item=>item.id==val).bank_code
              break;
          }
          this.jumpData.result.bid = this.rechargeInfo.bankList[0].id;
        }
        this.showPrice = true
        if(this.rechargeInfo.bankList){
          this.pickerList = this.rechargeInfo.bankList
        }else{
          this.pickerList = ''
        }
        switch(this.rechargeInfo.mode) {
          case "wap":
          case "scan":
            this.jumpData.url = this.rechargeInfo.submitUrl
            this.jumpData.typeid = typeid
            this.jumpData.uid = this.UserInfo.userid
            break;
          case "online":
          case "quick":
            this.jumpData.url = this.rechargeInfo.submitUrl
            this.jumpData.typeid = typeid
            this.jumpData.uid = this.UserInfo.userid
            break;
          case "turn":
          case "turn_alipay":
          case "turn_wx":
            this.$Model.GetPayBank({pay_id:typeid},data=>{
              if(data.code==1){
                this.siteBank = data.data;
                if (data.data.length > 0) {
                  let t = data.data[0].rececode;
                  data.data[0].rececode = t;
                  this.$nextTick(() => {
                    new QRCode(document.getElementById("QRCode"), {
                      text: t,
                      width: 100,
                      height: 100,
                      correctLevel: QRCode.CorrectLevel.H
                    });
                  });
                } else {
                  this.$Dialog.Toast('no config');
                }
              }
            })
            break;
          case "upi":
            this.jumpData.url = this.rechargeInfo.submitUrl
            this.jumpData.result.typeid = typeid;
            this.jumpData.result.uid = this.UserInfo.userid;
            break;
        }
        if(!this.postData.money){
          this.$Dialog.Toast(this.$t('recharge.placeholder[0]'));
          return;
        }
        // if(Number(this.postData.money)<Number(this.rechargeInfo.minPrice)){
        //   this.$Dialog.Toast(this.$t('recharge.placeholder[3]',{currency: this.InitData.currency,min:this.rechargeInfo.minPrice}));
        //   return;
        // }
        // if(Number(this.postData.money)>Number(this.rechargeInfo.maxPrice)){
        //   this.$Dialog.Toast(this.$t('recharge.placeholder[4]',{currency: this.InitData.currency,max:this.rechargeInfo.maxPrice}));
        //   return;
        // }
        if (this.rechargeInfo.mode == 'upi') {
          this.jumpData.result.pay_name = this.upiData.pay_name
          this.jumpData.result.pay_mobile = this.upiData.pay_mobile
          this.jumpData.result.pay_account = this.upiData.pay_account
          this.jumpData.result.pay_email = this.upiData.pay_email
        }
        this.jumpData.result.price = this.postData.money;
        if (this.rechargeInfo.mode == 'wap') {
          this.onSubmit();
        }
      },
      onSubmit() {
        // if(!this.UserInfo.phone){
        //   this.$Dialog.Alert(this.$t('phone[2]'),()=>{
        //     this.$router.push('set/phone')
        //   })
        //   return;
        // }
        if(!this.postData.money){
          this.$Dialog.Toast(this.$t('recharge.placeholder[0]'));
          return;
        }
        // if(Number(this.postData.money)<Number(this.rechargeInfo.minPrice)){
        //   this.$Dialog.Toast(this.$t('recharge.placeholder[3]',{currency: this.InitData.currency,min:this.rechargeInfo.minPrice}));
        //   return;
        // }
        // if(Number(this.postData.money)>Number(this.rechargeInfo.maxPrice)){
        //   this.$Dialog.Toast(this.$t('recharge.placeholder[4]',{currency: this.InitData.currency,max:this.rechargeInfo.maxPrice}));
        //   return;
        // }
        switch(this.rechargeInfo.mode) {
          case "wap":
          case "scan":
          case "online":
          case "quick":
          case "upi":
            if(!this.jumpData.result.bid){
              this.$Dialog.Toast(this.$t('recharge.placeholder[1]'));
              return;
            }
            if(this.rechargeInfo.mode=='upi'){
              if(!this.upiData.pay_name){
                this.$Dialog.Toast(this.$t('recharge.placeholder[5]'));
                return;
              }
              if(!this.upiData.pay_mobile){
                this.$Dialog.Toast(this.$t('recharge.placeholder[6]'));
                return;
              }
              if(!this.upiData.pay_account){
                this.$Dialog.Toast(this.$t('recharge.placeholder[7]'));
                return;
              }
              if(!this.upiData.pay_email){
                this.$Dialog.Toast(this.$t('recharge.placeholder[8]'));
                return;
              }
              this.jumpData.result.pay_name = this.upiData.pay_name
              this.jumpData.result.pay_mobile = this.upiData.pay_mobile
              this.jumpData.result.pay_account = this.upiData.pay_account
              this.jumpData.result.pay_email = this.upiData.pay_email
            }
            this.jumpData.result.price = this.postData.money
            const url = this.jumpData.url + '?' + $.param(this.jumpData.result)
            if(this.canSubmit){
              this.canSubmit = false;
              let that = this;
              setTimeout(function () {
                that.canSubmit = true;
              },5000)
              this.$Util.OpenUrl(url)
            }
            break;
          default:
            // if(!this.postData.name){
            //   this.$Dialog.Toast("Transaction ID / Hash number");
            //   return;
            // }
            if(!this.fileList.length){
              this.$Dialog.Toast(this.$t('recharge.tips[7]'))
              return
            }
            this.postData.screenshots = this.fileList.flatMap(item=>item.url.replace(this.InitData.setting.up_url,''))
            this.isSubmit = true;
            let that = this;
            if(this.canSubmit){
              this.canSubmit = false;
              this.$Model.RechargeOrder(this.postData,data=>{
                this.isSubmit = false;
                if(data.code==1){
                  this.showPrice = false;
                  this.getListData('init');
                  setTimeout(function () {
                    that.canSubmit = true;
                  }, 3000);
                }else{
                  that.canSubmit = true;
                }
              })
            }
        }
      },
      afterRead(file) {
        file.status = 'uploading'
        file.message = this.$t('upload[0]')
        this.uploadImgs(file)
      },
      compressImg(file) {
        // this.$Util.CompressImg(file.file.type,file.content,750,(image)=>{
          let param = new FormData();
          param.append('token',localStorage['Token']);
          param.append('type',4);
          param.append('image',file.file,file.file.name);
          this.$Model.UploadImg(param,(data)=>{
            if(data.code==1){
              file.message = this.$t('upload[2]')
              file.status = 'success'
              file.url = data.url
            }else{
              file.status = 'failed'
              file.message = this.$t('upload[3]')
            }
          });
        // })
      },
      uploadImgs(file){
        if(file.length){
          file.forEach(item=>{
            if (!item.file.type.match(/image/)){
              item.status = 'failed'
              item.message = this.$t('upload[1]')
              return;
            }
            this.compressImg(item)
          })
        }else{
          if (!file.file.type.match(/image/)){
            file.status = 'failed'
            file.message = this.$t('upload[1]')
            return;
          }
          this.compressImg(file)
        }
      },
    }
  }
</script>
<style scoped>
  @media only screen and (min-width: 1024px) {
    html {
      font-size: 10px;
    }
  }

  @media only screen and (max-width: 1024px) {
    html {
      font-size: 10px;
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 5px;
  }

  ::-webkit-scrollbar-corner, ::-webkit-scrollbar-track {
    background-color: rgb(226, 226, 226);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background-color: rgb(251, 194, 65);
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 0.2s ease 0s;
  }

  .slide-enter, .slide-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }

  .slide-right-enter-active, .slide-right-leave-active {
    transition: all 0.2s ease 0s;
  }

  .slide-right-enter, .slide-right-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }

  @keyframes tobig-7326e234 {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.5);
    }
  }

  input::-webkit-inner-spin-button, input::-webkit-outer-spin-button {
    appearance: none !important;
  }

  input[type="number"] {
  }

  .el-carousel__indicators--outside button {
    background-color: rgb(251, 194, 65) !important;
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: rgb(0, 0, 0);
    font-family: myFont;
  }

  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
    color: rgb(251, 194, 65) !important;
    background-color: rgb(255, 249, 240) !important;
  }

  .el-pager li {
    font-family: myFont;
  }

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #1ab5ff!important;
  }

  .el-pagination.is-background .el-pager li:not(.active):hover {
    color: #fff !important;
  }

  .el-message {
    font-size: 1.6rem;
  }

  .el-menu-item {
    padding: 0px 2rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .el-submenu__title {
    font-weight: 700;
    font-size: 1.5rem !important;
  }

  .el-menu-item [class^="el-icon-"], .el-submenu [class^="el-icon-"] {
    font-size: 2rem;
  }

  .el-submenu__icon-arrow {
    font-size: 1.4rem !important;
  }

  .el-menu-item.is-active, .el-menu-item:hover, .el-submenu__title:hover {
    color: rgb(251, 194, 65);
    background-color: rgb(255, 249, 240) !important;
  }

  .el-menu-item:hover i, .el-submenu__title:hover i {
    color: rgb(251, 194, 65);
  }

  .lang-item {
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap;
  }

  .lang-item .flag {
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.6rem;
  }

  .option-label {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .option-label .icon {
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.6rem;
  }

  .el-input {
    font-size: 1rem !important;
  }

  .el-input .el-input__inner {
    height: 50px;
    line-height: 50px;
    padding: 0px 1.5rem;
    font-family: myFont;
    color: #fff;
    border: 1px solid #374161 !important;
  }

  .el-textarea__inner {
    font-family: myFont;
    font-size: 1.5rem !important;
    color: rgb(0, 0, 0) !important;
  }

  .el-form-item__label {
    overflow-wrap: break-word;
    padding-bottom: 1rem !important;
    line-height: normal !important;
    font-size: 1.5rem !important;
    color: rgb(0, 0, 0) !important;
  }

  .el-input.is-disabled .el-input__inner {
    color: rgb(0, 0, 0) !important;
    cursor: default !important;
  }

  .el-radio {
    color: rgb(0, 0, 0) !important;
  }

  .el-radio__label {
    font-size: 1.5rem !important;
  }

  .el-select {
    width: 100%;
  }

  .el-select-dropdown__item {
    font-size: 1.5rem;
    font-family: myFont;
  }

  .el-select-dropdown__empty {
    font-family: myFont;
    font-size: 1.5rem !important;
  }

  .el-select-dropdown__item.selected {
    color: rgb(251, 194, 65);
  }

  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: rgb(251, 194, 65) !important;
    border-color: rgb(251, 194, 65) !important;
  }

  .el-checkbox__label {
    color: rgb(0, 0, 0);
    font-size: 1.5rem !important;
  }

  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: rgb(0, 0, 0) !important;
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: rgb(251, 194, 65) !important;
  }

  @media only screen and (min-width: 1024px) {
    .container {
      width: 100%;
    }

    .container .balance-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      box-sizing: border-box;
      padding: 2.5rem 4rem;
      margin-bottom: 3rem;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
    }

    .container .balance-box .label {
      width: 100%;
      margin-bottom: 4px;
      font-size: 1.6rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .container .balance-box .num {
      width: 100%;
      font-size: 2rem;
      font-weight: 700;
      color: rgb(251, 194, 65);
      word-break: break-all;
    }

    .container .main {
      width: 100%;
      box-sizing: border-box;
      padding: 4rem;
      margin-bottom: 3rem;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
    }

    .container .main .form {
      width: 100%;
    }

    .container .main .form .el-form-item {
      margin-bottom: 2.5rem;
    }

    .container .main .form .el-input__prefix {
      left: 1rem;
    }

    .container .main .form .el-select .el-input__inner {
      /*padding: 0px 2rem 0px 4rem;*/
    }

    .container .main .form .logo {
      position: absolute;
      top: 50%;
      transform: translateY(-55%);
      min-width: 2.5rem;
      max-width: 2.5rem;
      height: 2.5rem;
    }

    .container .main .form .input-group {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .container .main .form .input-group .input {
      width: 100%;
    }

    .container .main .form .input-group .input .el-input__inner {
      border-radius: 4px 0px 0px 4px;
      border-right: none !important;
    }

    .container .main .form .input-group .sign {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0px 1.2rem;
      border-radius: 0px 4px 4px 0px;
      font-size: 1.5rem;
      color: rgb(255, 255, 255);
      white-space: nowrap;
      background-color: rgb(251, 194, 65);
    }

    .container .main .info-list {
      width: 100%;
      margin-bottom: 4rem;
    }

    .container .main .info-list .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 1.2rem;
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    .container .main .info-list .info-item .label {
      max-width: 48%;
      font-size: 1.5rem;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .container .main .info-list .info-item .value {
      max-width: 48%;
      font-size: 1.6rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      word-break: break-all;
    }

    .container .main .submit-btn {
      width: 100%;
      height: 5rem;
      line-height: 5rem;
      box-sizing: border-box;
      padding: 0px 2rem;
      border-radius: 4px;
      font-size: 1.7rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg, rgb(254, 149, 0), rgb(250, 222, 136));
      cursor: pointer;
    }

    .container .r-table {
      width: 100%;
    }

    .container .r-table .tr {
      display: flex;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;
      background-color: rgb(255, 255, 255);
    }

    .container .r-table .tr:first-child {
      border-radius: 4px 4px 0px 0px;
      background-color: rgb(251, 194, 65);
      border-bottom: none !important;
    }

    .container .r-table .tr:last-child {
      border-radius: 0px 0px 4px 4px;
    }

    .container .r-table .tr:not(:last-child) {
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    .container .r-table .tr .th {
      overflow-wrap: break-word;
    }

    .container .r-table .tr .td, .container .r-table .tr .th {
      flex: 1 1 0%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      box-sizing: border-box;
      padding: 1rem 2rem;
      font-size: 1.4rem;
      color: rgb(0, 0, 0);
      text-align: center;
    }

    .container .r-table .tr .td {
      word-break: break-all;
    }

    .container .r-table .tr .td .status-tag {
      /*height: 2.6rem;*/
      line-height: 2.6rem;
      box-sizing: border-box;
      padding: 0px 1rem;
      border-radius: 4px;
      font-size: 1.2rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      /*white-space: nowrap;*/
      word-break: break-word;
      min-width: 12rem;
    }

    .container .r-table .tr .td .el-icon-info {
      margin-left: 5px;
      font-size: 2.5rem;
      color: rgb(251, 194, 65);
      white-space: nowrap;
      cursor: pointer;
    }

    .container .r-table .tr .td .detail-btn {
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

    .container .r-table .tr .td .detail-btn i {
      font-size: 1.7rem;
      color: rgb(255, 255, 255);
    }

    .container .r-table .no-data {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 5rem;
      box-sizing: border-box;
      font-size: 1.5rem;
      color: rgb(68, 68, 68);
      text-align: center;
      white-space: nowrap;
      background-color: rgb(255, 255, 255);
    }

    .container .pagination-box {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 3rem 0px 0px;
    }

    .container .pagination-box .pagination-h5 {
      display: none;
    }

    .container .deposit-detail {
      width: 100%;
      font-size: 1.5rem;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .container .deposit-info {
      width: 100%;
      margin-bottom: 3rem;
      border: 1px solid rgb(233, 233, 233);
      border-radius: 4px;
    }

    .container .deposit-info .info {
      width: 100%;
      box-sizing: border-box;
      padding: 1.2rem;
      font-size: 1.5rem;
      color: rgb(0, 0, 0);
      word-break: break-all;
    }

    .container .deposit-info .info:not(:last-child) {
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    .container .payment-info {
      width: 100%;
    }

    .container .payment-info .title {
      width: 100%;
      margin-bottom: 2rem;
      font-size: 1.6rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .container .payment-info .upload-img {
      display: block;
      width: 100%;
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      width: 100%;
    }

    .container .balance-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem 2rem;
      margin-bottom: 2rem;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
    }

    .container .balance-box .label {
      width: 100%;
      margin-bottom: 4px;
      font-size: 1.5rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .container .balance-box .num {
      width: 100%;
      font-size: 1.8rem;
      font-weight: 700;
      color: rgb(251, 194, 65);
      word-break: break-all;
    }

    .container .main {
      width: 100%;
      box-sizing: border-box;
      padding: 2rem;
      margin-bottom: 2rem;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
    }

    .container .main .form {
      width: 100%;
    }

    .container .main .form .el-form-item {
      margin-bottom: 2.2rem;
    }

    .container .main .form .el-input__prefix {
      left: 1rem;
    }

    .container .main .form .el-select .el-input__inner {
      /*padding: 0px 2rem 0px 4rem;*/
    }

    .container .main .form .logo {
      position: absolute;
      top: 50%;
      transform: translateY(-55%);
      min-width: 2.5rem;
      max-width: 2.5rem;
      height: 2.5rem;
    }

    .container .main .form .input-group {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .container .main .form .input-group .input {
      width: 100%;
    }

    .container .main .form .input-group .input .el-input__inner {
      border-radius: 4px 0px 0px 4px;
      border-right: none !important;
    }

    .container .main .form .input-group .sign {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0px 1.2rem;
      border-radius: 0px 4px 4px 0px;
      font-size: 1.5rem;
      color: rgb(255, 255, 255);
      white-space: nowrap;
      background-color: rgb(251, 194, 65);
    }

    .container .main .info-list {
      width: 100%;
      margin-bottom: 3rem;
    }

    .container .main .info-list .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 1.2rem 1rem;
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    .container .main .info-list .info-item .label {
      max-width: 48%;
      font-size: 1.5rem;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .container .main .info-list .info-item .value {
      max-width: 48%;
      font-size: 1.5rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      word-break: break-all;
    }

    .container .main .submit-btn {
      width: 100%;
      height: 4.6rem;
      line-height: 4.6rem;
      box-sizing: border-box;
      padding: 0px 2rem;
      border-radius: 4px;
      font-size: 1.5rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg, rgb(254, 149, 0), rgb(250, 222, 136));
      cursor: pointer;
    }

    .container .r-table {
      width: 100%;
    }

    .container .r-table .tr {
      display: flex;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;
      background-color: rgb(255, 255, 255);
    }

    .container .r-table .tr:first-child {
      border-radius: 4px 4px 0px 0px;
      background-color: rgb(251, 194, 65);
      border-bottom: none !important;
    }

    .container .r-table .tr:last-child {
      border-radius: 0px 0px 4px 4px;
    }

    .container .r-table .tr:not(:last-child) {
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    .container .r-table .tr .th {
      overflow-wrap: break-word;
    }

    .container .r-table .tr .td, .container .r-table .tr .th {
      flex: 1 1 0%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      box-sizing: border-box;
      padding: 0.5rem;
      font-size: 1.2rem;
      color: rgb(0, 0, 0);
      text-align: center;
    }

    .container .r-table .tr .td {
      flex-direction: column;
      word-break: break-all;
    }

    .container .r-table .tr .td .status-tag {
      /*height: 2.2rem;*/
      line-height: 2.2rem;
      box-sizing: border-box;
      padding: 0px 0.5rem;
      border-radius: 4px;
      font-size: 1.2rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      /*white-space: nowrap;*/
      min-width: 12rem;
      word-break: break-word;
    }

    .container .r-table .tr .td .el-icon-info {
      margin-top: 2px;
      font-size: 2.2rem;
      color: rgb(251, 194, 65);
      white-space: nowrap;
      cursor: pointer;
    }

    .container .r-table .tr .td .detail-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 3.8rem;
      max-width: 3.8rem;
      height: 2.8rem;
      border-radius: 4px;
      background-color: rgb(251, 194, 65);
      cursor: pointer;
    }

    .container .r-table .tr .td .detail-btn i {
      font-size: 1.5rem;
      color: rgb(255, 255, 255);
    }

    .container .r-table .no-data {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 5rem;
      box-sizing: border-box;
      font-size: 1.4rem;
      color: rgb(68, 68, 68);
      text-align: center;
      white-space: nowrap;
      background-color: rgb(255, 255, 255);
    }

    .container .pagination-box {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 2rem 0px 0px;
    }

    .container .pagination-box .pagination-pc {
      display: none;
    }

    .container .deposit-detail {
      width: 100%;
      font-size: 1.5rem;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .container .deposit-info {
      width: 100%;
      margin-bottom: 2rem;
      border: 1px solid rgb(233, 233, 233);
      border-radius: 4px;
    }

    .container .deposit-info .info {
      width: 100%;
      box-sizing: border-box;
      padding: 1.2rem 1rem;
      font-size: 1.4rem;
      color: rgb(0, 0, 0);
      word-break: break-all;
    }

    .container .deposit-info .info:not(:last-child) {
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    .container .payment-info {
      width: 100%;
    }

    .container .payment-info .title {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .container .payment-info .upload-img {
      display: block;
      width: 100%;
    }
  }


  @media only screen and (min-width: 1024px) {
    html {
      font-size: 10px;
    }
  }

  @media only screen and (max-width: 1024px) {
    html {
      font-size: 10px;
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 5px;
  }

  ::-webkit-scrollbar-corner, ::-webkit-scrollbar-track {
    background-color: rgb(226, 226, 226);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background-color: rgb(251, 194, 65);
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 0.2s ease 0s;
  }

  .slide-enter, .slide-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }

  .slide-right-enter-active, .slide-right-leave-active {
    transition: all 0.2s ease 0s;
  }

  .slide-right-enter, .slide-right-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }

  @keyframes tobig-bc13a2b6 {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.5);
    }
  }

  input::-webkit-inner-spin-button, input::-webkit-outer-spin-button {
    appearance: none !important;
  }

  input[type="number"] {
  }

  .el-carousel__indicators--outside button {
    background-color: rgb(251, 194, 65) !important;
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: rgb(0, 0, 0);
    font-family: myFont;
  }

  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
    color: rgb(251, 194, 65) !important;
    background-color: rgb(255, 249, 240) !important;
  }

  .el-pager li {
    font-family: myFont;
  }

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #1ab5ff!important;
    color: #eeeeee!important;
  }

  .el-pagination.is-background .el-pager li:not(.active):hover {
    color: #fff !important;
  }

  .el-message {
    font-size: 1.6rem;
  }

  .el-menu-item {
    padding: 0px 2rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .el-submenu__title {
    font-weight: 700;
    font-size: 1.5rem !important;
  }

  .el-menu-item [class^="el-icon-"], .el-submenu [class^="el-icon-"] {
    font-size: 2rem;
  }

  .el-submenu__icon-arrow {
    font-size: 1.4rem !important;
  }

  .el-menu-item.is-active, .el-menu-item:hover, .el-submenu__title:hover {
    color: rgb(251, 194, 65);
    background-color: rgb(255, 249, 240) !important;
  }

  .el-menu-item:hover i, .el-submenu__title:hover i {
    color: rgb(251, 194, 65);
  }

  .lang-item {
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap;
  }

  .lang-item .flag {
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.6rem;
  }

  .option-label {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .option-label .icon {
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.6rem;
  }

  .el-input {
    font-size: 1rem !important;
    color: #ffffff;
  }

  .el-input .el-input__inner {
    height: 50px;
    line-height: 50px;
    padding: 0px 1.5rem;
    font-family: myFont;
    color: #fff;
    border: 1px solid #374161 !important;
  }

  .el-textarea__inner {
    font-family: myFont;
    font-size: 1.1rem !important;
    color: rgb(0, 0, 0) !important;
  }

  .el-form-item__label {
    overflow-wrap: break-word;
    padding-bottom: 1rem !important;
    line-height: normal !important;
    font-size: 1.5rem !important;
    color: rgb(0, 0, 0) !important;
  }

  .el-input.is-disabled .el-input__inner {
    color: rgb(0, 0, 0) !important;
    cursor: default !important;
  }

  .el-radio {
    color: rgb(0, 0, 0) !important;
  }

  .el-radio__label {
    font-size: 1.5rem !important;
  }

  .el-select {
    width: 100%;
  }

  .el-select-dropdown__item {
    font-size: 1.5rem;
    font-family: myFont;
  }

  .el-select-dropdown__empty {
    font-family: myFont;
    font-size: 1.5rem !important;
  }

  .el-select-dropdown__item.selected {
    color: rgb(251, 194, 65);
  }

  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: rgb(251, 194, 65) !important;
    border-color: rgb(251, 194, 65) !important;
  }

  .el-checkbox__label {
    color: rgb(0, 0, 0);
    font-size: 1.5rem !important;
  }

  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: rgb(0, 0, 0) !important;
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: rgb(251, 194, 65) !important;
  }

  @media only screen and (min-width: 1024px) {
    .container {
      width: 100%;
    }

    .container .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 4rem;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
    }

    .container .box .title {
      width: 100%;
      font-size: 2rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      text-align: center;
      overflow-wrap: break-word;
    }

    .container .box .desc {
      width: 100%;
      margin: 3rem 0px 4rem;
      font-size: 1.5rem;
      color: rgb(68, 68, 68);
      text-align: center;
      overflow-wrap: break-word;
    }

    .container .box .ewm-img {
      margin-bottom: 4rem;
    }

    .container .box .info-list {
      width: 100%;
      margin-bottom: 4rem;
    }

    .container .box .info-list .info-item {
      width: 100%;
    }

    .container .box .info-list .info-item:not(:last-child) {
      margin-bottom: 2.5rem;
    }

    .container .box .info-list .info-item .label {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .container .box .info-list .info-item .input-group {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .container .box .info-list .info-item .input-group .disabled-input {
      width: 100%;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0px 2rem;
      border-top: 1px solid rgb(217, 217, 217);
      border-bottom: 1px solid rgb(217, 217, 217);
      border-left: 1px solid rgb(217, 217, 217);
      border-image: initial;
      border-right: none;
      border-radius: 4px 0px 0px 4px;
      outline: none;
      font-size: 1.6rem;
      font-family: myFont;
      font-weight: 700;
      color: rgb(0, 0, 0);
      background-color: rgb(255, 255, 255);
    }

    .container .box .info-list .info-item .input-group .input {
      width: 100%;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0px 2rem;
      border: 1px solid rgb(217, 217, 217);
      border-radius: 4px;
      outline: none;
      font-size: 1.6rem;
      font-family: myFont;
      color: rgb(0, 0, 0);
      background-color: rgb(255, 255, 255);
    }

    .container .box .info-list .info-item .input-group .copy-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0px 1.2rem;
      border-radius: 0px 4px 4px 0px;
      background-color: rgb(251, 194, 65);
      cursor: pointer;
    }

    .container .box .info-list .info-item .input-group .copy-btn i {
      font-size: 1.8rem;
      color: rgb(255, 255, 255);
      white-space: nowrap;
    }

    .container .box .info-list .info-item .upload-box {
      width: 100%;
      display: flex;
    }

    .container .box .info-list .info-item .upload-box .upload {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25rem;
      min-height: 25rem;
      border-radius: 4px;
      background-color: rgb(239, 239, 239);
    }

    .container .box .info-list .info-item .upload-box .upload i {
      font-size: 7.2rem;
      color: rgb(119, 119, 119);
      white-space: nowrap;
    }

    .container .box .info-list .info-item .upload-box .upload-img {
      display: block;
      width: 25rem;
    }

    .container .box .submit-btn {
      width: 100%;
      height: 5rem;
      line-height: 5rem;
      box-sizing: border-box;
      padding: 0px 2rem;
      border-radius: 4px;
      font-size: 1.7rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg, rgb(254, 149, 0), rgb(250, 222, 136));
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      width: 100%;
    }

    .container .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 2rem;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
    }

    .container .box .title {
      width: 100%;
      font-size: 1.8rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      text-align: center;
      overflow-wrap: break-word;
    }

    .container .box .desc {
      width: 100%;
      margin: 2rem 0px 3rem;
      font-size: 1.4rem;
      color: rgb(68, 68, 68);
      text-align: center;
      overflow-wrap: break-word;
    }

    .container .box .ewm-img {
      margin-bottom: 3rem;
    }

    .container .box .info-list {
      width: 100%;
      margin-bottom: 3rem;
    }

    .container .box .info-list .info-item {
      width: 100%;
    }

    .container .box .info-list .info-item:not(:last-child) {
      margin-bottom: 2.2rem;
    }

    .container .box .info-list .info-item .label {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .container .box .info-list .info-item .input-group {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .container .box .info-list .info-item .input-group .disabled-input {
      width: 100%;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0px 2rem;
      border-top: 1px solid rgb(217, 217, 217);
      border-bottom: 1px solid rgb(217, 217, 217);
      border-left: 1px solid rgb(217, 217, 217);
      border-image: initial;
      border-right: none;
      border-radius: 4px 0px 0px 4px;
      outline: none;
      font-size: 1.5rem;
      font-family: myFont;
      font-weight: 700;
      color: rgb(0, 0, 0);
      background-color: rgb(255, 255, 255);
    }

    .container .box .info-list .info-item .input-group .input {
      width: 100%;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0px 2rem;
      border: 1px solid rgb(217, 217, 217);
      border-radius: 4px;
      outline: none;
      font-size: 1.5rem;
      font-family: myFont;
      color: rgb(0, 0, 0);
      background-color: rgb(255, 255, 255);
    }

    .container .box .info-list .info-item .input-group .copy-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0px 1.2rem;
      border-radius: 0px 4px 4px 0px;
      background-color: rgb(251, 194, 65);
      cursor: pointer;
    }

    .container .box .info-list .info-item .input-group .copy-btn i {
      font-size: 1.8rem;
      color: rgb(255, 255, 255);
      white-space: nowrap;
    }

    .container .box .info-list .info-item .upload-box {
      width: 100%;
    }

    .container .box .info-list .info-item .upload-box .upload {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25rem;
      min-height: 25rem;
      border-radius: 4px;
      background-color: rgb(239, 239, 239);
    }

    .container .box .info-list .info-item .upload-box .upload i {
      font-size: 7.2rem;
      color: rgb(119, 119, 119);
      white-space: nowrap;
    }

    .container .box .info-list .info-item .upload-box .upload-img {
      display: block;
      width: 25rem;
    }

    .container .box .submit-btn {
      width: 100%;
      height: 4.6rem;
      line-height: 4.6rem;
      box-sizing: border-box;
      padding: 0px 2rem;
      border-radius: 4px;
      font-size: 1.5rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg, rgb(254, 149, 0), rgb(250, 222, 136));
      cursor: pointer;
    }
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
      width: 50rem;
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
.selectShow {
  position: absolute;
  top: 5rem;
  left: 0px;
  width: -webkit-fill-available;
  background: #fff;
  z-index: 999;
  padding: 0 2rem;
  border: 1px solid #ccc;
  color: #000000;
}
.qrcode {
  display: flex;
  justify-items: center;
  justify-content: center;
}
.qrcode>>>img,.qrcode>>>canvas {
    width: 40% !important;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    padding: 5%;
    background: #fff;
  }
  .van-uploader {
    display: block;
    width: 100%;
  }
  .badge {
    display: block;
    white-space: normal;
  }
</style>


