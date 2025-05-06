<template>
  <div class="HomePage" id="app">
    <UserHeader></UserHeader>
    <div class="app-wrapper" style="width: calc(100% - 25rem);">
      <div class="page-header">
        <div class="page-title">{{$t('head[7]')}}</div>
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
      <div v-if="showPrice && siteBank.length>0" class="container">
        <div class="box" style="position: relative;">
          <div class="close" @click="showPrice = false" style="position: absolute;right: 5px;top: 5px;z-index: 999;">
            <van-icon name="cross" size="30" color="#000"/>
          </div>
          <div class="title">
            {{$t('deposit[0]')}} <span style="color: #1e45d4">{{InitData.currency}}{{postData.money}}</span>,
            {{$t('deposit[1]')}}
            <span style="color: #1e45d4">{{parseFloat(parseFloat((postData.money*parseFloat(selectTypes.rate)).toFixed(8)*1000000)/1000000)}} <span v-if="selectTypes.name !='' && selectTypes.name.indexOf('USDT')==0">USDT</span><span v-else>{{selectTypes.name}}</span></span>
            {{$t('deposit[2]')}}
          </div>
          <div class="desc">
            {{$t('deposit[3]')}}
          </div>
          <!--          <div-->
          <!--            id="QRCode"-->
          <!--            class="qrcode ewm-img"-->
          <!--          >-->
          <!--          </div>-->
          <div class="info-list">
            <div class="info-item">
              <div class="label">{{$t('walletAddress[0]')}}</div>
              <div class="input-group">
                <input disabled="disabled" v-model="siteBank[0].rececode" class="disabled-input" />
                <div class="copy-btn copy" :data-clipboard-text="siteBank[0].rececode" @click="copy"><i class="el-icon-document-copy"></i></div>
              </div>
            </div>
            <!--            <div class="info-item">-->
            <!--              <div class="label">{{$t('deposit[4]')}}</div>-->
            <!--              <div class="input-group">-->
            <!--                <input v-model.trim="postData.name"-->
            <!--                  :placeholder="$t('deposit[5]')"-->
            <!--                  class="input"-->
            <!--                />-->
            <!--              </div>-->
            <!--            </div>-->
            <div class="info-item">
              <div class="label">{{$t('deposit[6]')}}</div>
              <div class="upload-box">
                <div tabindex="0" class="el-upload el-upload--text">
                  <van-uploader preview-size="25rem" class="upload" v-model="fileList" :max-count="1" :multiple="false" :after-read="afterRead" >
                    <div class="upload"><i class="el-icon-upload"></i></div>
                  </van-uploader>
                </div>
                <div style="padding: 1rem;font-size: 1.5rem;">
                  {{$t('tips[0]')}} <span style="color:#bb2d3b"> {{$t('tips[1]')}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="submit-btn" @click="onSubmit">{{$t('deposit[7]')}}</div>
        </div>
      </div>
      <div v-else class="container">
        <!--        <div class="balance-box">-->
        <!--          <div class="label">{{$t('deposit[8]')}}</div>-->
        <!--          <div class="num">{{InitData.currency}} {{UserInfo.balance}}</div>-->
        <!--        </div>-->
        <div class="user-des">{{$t('loginpage[2]')}}</div>
        <div class="main user-box">
          <form class="el-form form el-form--label-top">
            <div class="el-row">
              <div class="el-col el-col-24">
                <div class="el-form-item is-required is-no-asterisk"><label for="type" class="el-form-item__label">
                  {{$t('deposit[9]')}}</label>
                  <div class="el-form-item__content">
                    <div class="el-select" @click="showSelect = !showSelect">
                      <div class="el-input el-input--suffix">
                        <div  class="el-input__inner">
                          <div>
                            <img v-if="selectTypes.qrcode !=''" :src="InitData.setting.up_url + selectTypes.qrcode" style="width: 20px;vertical-align: middle;display: inline-block;">
                            <span>{{selectTypes.name==''?$t('recharge.placeholder[1]'):selectTypes.name}}</span>
                          </div>
                          <div class="selectShow" v-show="showSelect">
                            <div  :value="item.id" v-for="(item,index) in rechargeList" :key="index" @click="chageRecharge(item)">
                              <img :src="InitData.setting.up_url + item.qrcode" style="width: 20px;vertical-align: middle;display: inline-block;">
                              {{item.name}}
                            </div>
                          </div>
                        </div>
                        <span
                          class="el-input__suffix"><span class="el-input__suffix-inner"><i
                          class="el-select__caret el-input__icon el-icon-arrow-up"></i></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="el-col el-col-24">
                <div class="el-form-item is-required is-no-asterisk"><label for="amount" class="el-form-item__label">{{$t('deposit[10]')}}</label>
                  <div class="el-form-item__content">
                    <div class="input-group">
                      <div class="input el-input"><input type="number" autocomplete="off" v-model="postData.money"
                                                         class="el-input__inner">
                      </div>
                      <div class="sign">{{InitData.currency}}</div>
                    </div></div>
                </div>
              </div>
            </div>
          </form>
          <div style="padding:0 1.2rem;font-size: 1.5rem;color: #e73329">
            {{$t('deposit[26]',{MM:rechargeInfo.minPrice})}}
          </div>
          <div class="info-list">
            <div class="info-item">
              <div class="label">{{$t('deposit[11]')}}</div>
              <div class="value">{{rechargeInfo.minPrice}} {{InitData.currency}} - {{rechargeInfo.maxPrice}} {{InitData.currency}}</div>
            </div>
            <!--            <div class="info-item">-->
            <!--              <div class="label">Reward</div>-->
            <!--              <div class="value">0.00 {{InitData.currency}}</div>-->
            <!--            </div>-->
            <div class="info-item" v-if="rechargeInfo.fee && rechargeInfo.fee>0">
              <div class="label">{{$t('wallet.label[8]')}}</div>
              <div class="value">{{rechargeInfo.fee ||0}}%</div>
            </div>
            <div class="info-item">
              <div class="label">{{$t('deposit[12]')}}</div>
              <div class="value">{{postData.money-parseFloat(postData.money*parseFloat(rechargeInfo.fee)/100)}} {{InitData.currency}}</div>
            </div>
            <div class="info-item">
              <div class="label">{{$t('deposit[22]')}}</div>
              <div class="value">1USD ≈ {{selectTypes.rate}} <span v-if="selectTypes.name !='' && selectTypes.name.indexOf('USDT')==0">USDT</span><span v-else>{{selectTypes.name}}</span></div>
            </div>
            <div class="info-item">
              <div class="label">{{$t('deposit[23]')}}</div>
              <div class="value">{{parseFloat(parseFloat((postData.money*parseFloat(selectTypes.rate)).toFixed(8)*1000000)/1000000)}} <span v-if="selectTypes.name !='' && selectTypes.name.indexOf('USDT')==0">USDT</span><span v-else>{{selectTypes.name}}</span></div>
            </div>
          </div>
          <div class="submit-btn tt" @click="selectType()">{{$t('deposit[13]')}}</div>
        </div>
        <div class="r-table">
          <div class="tr">
            <div class="th">{{$t('deposit[14]')}}</div>
            <div class="th">{{$t('deposit[15]')}}</div>
            <div class="th">{{$t('deposit[16]')}}</div>
            <div class="th">{{$t('deposit[17]')}}</div>
            <div class="th">{{$t('deposit[18]')}}</div>
            <div class="th">{{$t('deposit[19]')}}</div>
          </div>
          <div class="no-data" v-if="listData.length==0">{{$t('vanPull[1]')}}</div>
          <div class="tr" v-for="(item,index) in listData" :key="index">
            <div class="td">{{item.dan}}</div>
            <div class="td">{{item.pay_type}}</div>
            <div class="td">{{InitData.currency}}{{item.money}}</div>
            <div class="td">
              <div class="status-tag" style="background: #00bfff ;" v-if="item.status==3">{{item.status_desc}}</div>
              <div class="status-tag" style="background: rgb(234, 84, 85);" v-else-if="item.status==-1">{{item.status_desc}}</div>
              <div class="status-tag" style="color:#000;" v-else>{{item.status_desc}}</div>
            </div>
            <div class="td">{{item.adddate}}</div>
            <div class="td">
              <div class="detail-btn" @click="showD(item)"><i class="el-icon-monitor"></i></div>
            </div>
          </div>
        </div>
        <div class="pagination-box">
          <!--          <div class="pagination-pc el-pagination is-background">-->
          <!--            <button @click="perPage" type="button" :disabled="data_current_page==1?true:false" class="btn-prev"><i class="el-icon el-icon-arrow-left"></i>-->
          <!--            </button>-->
          <!--            <ul class="el-pager">-->
          <!--              <li @click="changePage(item)" :class="'number '+(item==data_current_page?'active':'')" v-for="item in data_total_page">{{item}}</li>-->
          <!--            </ul>-->
          <!--            <button @click="nextPage" :disabled="data_total_page==data_current_page?true:false" type="button" class="btn-next"><i class="el-icon el-icon-arrow-right"></i></button>-->
          <!--          </div>-->
          <!--          <div class="pagination-h5 el-pagination is-background">-->
          <!--            <button @click="perPage" type="button" :disabled="data_current_page==1?true:false" class="btn-prev"><i class="el-icon el-icon-arrow-left"></i>-->
          <!--            </button>-->
          <!--            <ul class="el-pager">-->
          <!--              <li @click="changePage(item)" :class="'number '+(item==data_current_page?'active':'')" v-for="item in data_total_page">{{item}}</li>-->
          <!--            </ul>-->
          <!--            <button @click="nextPage" :disabled="data_total_page==data_current_page?true:false" type="button" class="btn-next"><i class="el-icon el-icon-arrow-right"></i></button>-->
          <!--          </div>-->
          <div class="VuePagination " v-if="data_total_page>0">
            <paginate
              :page-count="data_total_page"
              :page-range="3"
              :margin-pages="1"
              :click-handler="changePage"
              :prev-text="'◁'"
              :next-text="'▷'"
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
        <div class="mask" v-if="showDetail">
          <div class="modal">
            <div class="modal-header">
              <div class="modal-title">{{$t('deposit[19]')}}</div>
              <div class="close" @click="showDetail = false"><i class="el-icon-close"></i></div>
            </div>
            <div class="modal-body">
              <div class="deposit-info">
                <div class="info">{{$t('deposit[14]')}}: {{detailItem.dan}}</div>
                <div class="info">{{$t('deposit[15]')}}: {{detailItem.pay_type}}</div>
                <div class="info">{{$t('deposit[16]')}}: {{InitData.currency}}{{detailItem.money}}</div>
                <div class="info">{{$t('deposit[17]')}}: {{detailItem.status_desc}}</div>
                <div class="info">{{$t('deposit[18]')}}: {{detailItem.adddate}}</div>
                <!--                <div class="info">{{$t('deposit[20]')}}: $0.00</div>-->
                <!--                <div class="info">{{$t('deposit[21]')}}: $423.00</div>-->
                <!--                <div class="info">{{$t('deposit[22]')}}: 1 USD = 1 USDT-TRC20[Network:Tron]</div>-->
                <!--                <div class="info">{{$t('deposit[23]')}}: 423.00000000 USDT-TRC20[Network:Tron]</div>-->
                <!--                <div class="info">{{$t('deposit[24]')}}: 423.00000000 USDT-TRC20[Network:Tron]</div>-->
              </div>
              <div class="payment-info" v-if="detailItem.screenshots!=''" >
                <div class="title">{{$t('deposit[25]')}}</div>
                <img :src="InitData.setting.up_url+ detailItem.screenshots"
                     class="upload-img">
              </div>
            </div>
            <div class="modal-footer">
              <div class="confirm-btn" @click="showDetail = false">{{$t('confirm')}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import QRCode from "qrcodejs2";
  import Clipboard from 'clipboard';
  import UserHeader from '@/components/UserHeader'
  export default {
    name: 'loginPassword',
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
        data_current_page:1,
        data_total_page:1,
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      this.$Model.GetRechargeType(data=>{
        this.rechargeList = data.info;
        if (data.info.length > 0) {
          this.id = data.info[0].id;
          this.chageRecharge(data.info[0]);
        }
      });
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
        let that = this;
        if(!this.postData.money){
          this.$Dialog.Toast(this.$t('recharge.placeholder[0]'));
          return;
        }
        if(parseFloat(that.postData.money)<parseFloat(that.rechargeInfo.minPrice)){
          this.$Dialog.Toast(this.$t('recharge.placeholder[3]',{min:that.rechargeInfo.minPrice,currency:that.InitData.currency}));
          return;
        }
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
                  // this.$nextTick(() => {
                  //   new QRCode(document.getElementById("QRCode"), {
                  //     text: t,
                  //     width: 100,
                  //     height: 100,
                  //     correctLevel: QRCode.CorrectLevel.H
                  //   });
                  // });
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
    background-color: #00bfff ;
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
    background-color: #00bfff  !important;
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: rgb(0, 0, 0);
    font-family: myFont;
  }

  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
    color: #00bfff  !important;
    background-color: rgb(255, 249, 240) !important;
  }

  .el-pager li {
    font-family: myFont;
  }

  /*.el-pagination.is-background .el-pager li:not(.disabled).active {*/
  /*  background-color: #00bfff  !important;*/
  /*}*/

  /*.el-pagination.is-background .el-pager li:not(.active):hover {*/
  /*  color: #00bfff  !important;*/
  /*}*/

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
    color: #00bfff ;
    background-color: rgb(255, 249, 240) !important;
  }

  .el-menu-item:hover i, .el-submenu__title:hover i {
    color: #00bfff ;
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
    font-size: 1.5rem !important;
  }

  .el-input .el-input__inner {
    height: 4.5rem;
    line-height: 4.5rem;
    padding: 0px 2rem;
    font-family: myFont;
    color: rgb(0, 0, 0);
    border: 1px solid rgb(217, 217, 217) !important;
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
    color: #00bfff ;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #00bfff  !important;
    border-color: #00bfff  !important;
  }

  .el-checkbox__label {
    color: rgb(0, 0, 0);
    font-size: 1.5rem !important;
  }

  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: rgb(0, 0, 0) !important;
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #00bfff  !important;
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
      color: #00bfff ;
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
      background-color: #00bfff ;
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
      border-radius: 10px;
      font-size: 1.7rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(180deg, #00bfff  0%, #00bfff  100%);
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
      background-color: #f4f4f4;
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
      color: #00bfff ;
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
      background-color: #00bfff ;
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
      color: #00bfff ;
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
      background-color: #00bfff ;
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
      background-image: linear-gradient(180deg, #00bfff  0%, #00bfff  100%);
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
      background-color: #f4f4f4;
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
      color: #00bfff ;
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
      background-color: #00bfff ;
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
    background-color: #00bfff ;
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
    background-color: #00bfff  !important;
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: rgb(0, 0, 0);
    font-family: myFont;
  }

  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
    color: #00bfff  !important;
    background-color: rgb(255, 249, 240) !important;
  }

  .el-pager li {
    font-family: myFont;
  }

  /*.el-pagination.is-background .el-pager li:not(.disabled).active {*/
  /*  background-color: #00bfff  !important;*/
  /*}*/

  /*.el-pagination.is-background .el-pager li:not(.active):hover {*/
  /*  color: #00bfff  !important;*/
  /*}*/

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
    color: #00bfff ;
    background-color: rgb(255, 249, 240) !important;
  }

  .el-menu-item:hover i, .el-submenu__title:hover i {
    color: #00bfff ;
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
    font-size: 1.5rem !important;
  }

  .el-input .el-input__inner {
    height: 4.5rem;
    line-height: 4.5rem;
    padding: 0px 2rem;
    font-family: myFont;
    color: rgb(0, 0, 0);
    border: 1px solid rgb(217, 217, 217) !important;
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
    color: #00bfff ;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #00bfff  !important;
    border-color: #00bfff  !important;
  }

  .el-checkbox__label {
    color: rgb(0, 0, 0);
    font-size: 1.5rem !important;
  }

  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: rgb(0, 0, 0) !important;
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #00bfff  !important;
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
      background-color: #00bfff ;
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
      background-color: rgb(252 243 255);
    }

    .container .box .info-list .info-item .upload-box .upload i {
      font-size: 7.2rem;
      color: rgb(168 119 255);
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
      background-image: linear-gradient(180deg, #00bfff  0%, #00bfff  100%);;
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
      background-color: #00bfff ;
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
      background-color: rgb(252 243 255);
    }

    .container .box .info-list .info-item .upload-box .upload i {
      font-size: 7.2rem;
      color: rgb(168 119 255);
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
      background-image: linear-gradient(180deg, #00bfff  0%, #00bfff  100%);;
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
      background-color: #00bfff ;
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
      background-color: #00bfff ;
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
  }
  .user-box {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .user-des {
    color: #fff;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
</style>


