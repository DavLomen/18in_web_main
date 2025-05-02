<template>
  <div class="HomePage" id="app">
    <Header></Header>
    <div class="d-flex">
      <div class="col-2 border-end border-hhs d-none d-lg-block">
      <Side></Side>
      </div>
      <div v-if="showPrice && siteBank.length>0" class="container col-lg-10 ">

        <div class="text-center" style="position: relative;">
          <div class="close" @click="showPrice = false" style="float: right;">
            <van-icon name="cross" size="30" color="#fff"/>
          </div>
<!--          <h2>Deposit  USDC</h2>-->
          <div class="d-flex justify-content-center text-center">
            <h6>
              {{$t('deposit[0]')}} <span style="color: red">{{InitData.currency}}{{postData.money}}</span>,
              {{$t('deposit[1]')}}
              <span style="color: red">{{parseFloat(parseFloat((postData.money*parseFloat(selectTypes.rate)).toFixed(8)*1000000)/1000000)}} <span v-if="selectTypes.name !='' && selectTypes.name.indexOf('USDT')==0">USDT</span><span v-else>{{selectTypes.name}}</span></span>
              {{$t('deposit[2]')}}
            </h6>
          <!--    <div class="bg-light pt-2 rounded-4 mt-2 mb-5" style="width: 220px; height: 220px;">-->
          <!--        <img id="qlimge" src="https://api.qrserver.com/v1/create-qr-code/?size=200×200&data=0x35E03FB13cF4C44c1ea8d8d172248a6a4E1c61f6" alt="" width="200">-->
          <!--    </div>-->
          </div>
          <!--<h6 style="line-height: 1.8rem;">Please send funds to the specified address or use a QR code for a deposit. Your amount will be deposited in your account.</h6>-->
          <h5 class="mt-3 text-warning " id="workname">
            <span v-if="selectTypes.name !='' && selectTypes.name.indexOf('USDT')==0">USDT</span><span v-else>{{selectTypes.name}}</span>
          </h5>
          <div class=" text-start">
            <h6>{{$t('deposit[10]')}}:</h6>
            <div class="input-group mb-3">
              <input :value="parseFloat(parseFloat((postData.money*parseFloat(selectTypes.rate)).toFixed(8)*1000000)/1000000)" type="text" class="form-control " id="moneyval" disabled="" >
              <button class="btn  bg-zs copy" id="copymoney" :data-clipboard-text="parseFloat(parseFloat((postData.money*parseFloat(selectTypes.rate)).toFixed(8)*1000000)/1000000)" @click="copy"><i class="bi bi-copy text-light"></i></button>
            </div>

            <h6>{{$t('deposit[15]')}}:</h6>
            <div class="input-group mb-3">
              <input type="text" class="form-control " id="address" value="" disabled="" v-model="siteBank[0].rececode">
              <button class="btn  bg-zs copy" :data-clipboard-text="siteBank[0].rececode" @click="copy" id="copyaddress"><i class="bi bi-copy text-light"></i></button>
            </div>
            <div class="mb-3">
              <h6>{{$t('deposit[4]')}}</h6>
              <div class="upload-container">
                <div class="upload-area border border-1 border-secondary rounded-3 p-4 text-center position-relative">
                  <input class="form-control opacity-0 position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" name="successimg">
                  <div class="upload-content">
                    <van-uploader preview-size="7rem" class="upload" v-model="fileList" :max-count="1" :multiple="false" :after-read="afterRead" >
                      <i class="bi bi-cloud-arrow-up fs-1 text-secondary mb-2"></i>
                      <p class="text-secondary mb-0">{{$t('deposit[5]')}}</p>
                    </van-uploader>
                  </div>
                </div>
              </div>
              <h6 class="mt-3 text-warning" style="line-height: 1.2rem;">{{$t('deposit[6]')}}</h6>
              <h6 class="text-warning" style="line-height: 1.2rem;">{{$t('deposit[7]')}}</h6>
            </div>
          </div>
          <div class="border-bshs d-flex justify-content-center">
            <button id="imgtj" type="button" class="btn bg-zs col-8 p-2 text-light fs-5"  @click="onSubmit">{{$t('submit')}}</button>
          </div>
        </div>
      </div>
      <div v-else class="container col-lg-10 ">
        <div class="col-lg-12">
          <div class="border rounded-4 border-0 bg-okh p-3 single-settings-box top-flashlight light-xl leftside" style="position: relative; overflow: visible;">
            <h6 class="mt-4 text-bhs">{{$t('deposit[9]')}}</h6>
            <div class=" mt-4 border rounded-3 border-0" style="line-height: 28px; height: 60px; font-size: 15px; color:#0d6efdb5; background-color: #fff; ">
              <div class="custom-select " style="width:100%; ">
                <div class="select-selected my-2 fs-6 text-hs" @click="showSelect = !showSelect">
                  <img v-if="selectTypes.qrcode !=''" :src="InitData.setting.up_url + selectTypes.qrcode" class="me-3" style="height: 30px;">
                  <span>{{selectTypes.name==''?$t('recharge.placeholder[1]'):selectTypes.name}}</span>
                </div>
                <div class="select-items py-3" v-show="showSelect">
                  <div :value="item.id" v-for="(item,index) in rechargeList" :key="index" @click="chageRecharge(item)" class="py-3">
                    <img :src="InitData.setting.up_url + item.qrcode" class="me-3" style="height: 30px;">{{item.name}}
                  </div>
                </div>
              </div>
            </div>

            <h6 class="mt-4 text-bhs ">{{$t('deposit[10]')}}</h6>
            <input class="w-100 border rounded-3 border-0 ps-3 my-2" id="amount" style="line-height: 28px; height: 60px; font-size: 15px; color:#0d6efdb5; background-color: #fff;" type="number" v-model="postData.money" name="amount" data-sharkid="__0">

<!--            <div class="info-item">-->
<!--              <div class="label">{{$t('deposit[12]')}}</div>-->
<!--              <div class="value">{{postData.money-parseFloat(postData.money*parseFloat(rechargeInfo.fee)/100)}} {{InitData.currency}}</div>-->
<!--            </div>-->
<!--            &lt;!&ndash;                <div class="info-item">&ndash;&gt;-->
<!--            &lt;!&ndash;                  <div class="label">{{$t('deposit[22]')}}</div>&ndash;&gt;-->
<!--            &lt;!&ndash;                  <div class="value">1USD ≈ {{selectTypes.rate}} <span v-if="selectTypes.name !='' && selectTypes.name.indexOf('USDT')==0">USDT</span><span v-else>{{selectTypes.name}}</span></div>&ndash;&gt;-->
<!--            &lt;!&ndash;                </div>&ndash;&gt;-->
<!--            <div class="info-item">-->
<!--              <div class="label">{{$t('deposit[23]')}}</div>-->
<!--              <div class="value">{{parseFloat(parseFloat((postData.money*parseFloat(selectTypes.rate)).toFixed(8)*1000000)/1000000)}} <span v-if="selectTypes.name !='' && selectTypes.name.indexOf('USDT')==0">USDT</span><span v-else>{{selectTypes.name}}</span></div>-->
<!--            </div>-->

            <div class="text-center py-4">
              <button @click="selectType()" type="button" id="deposit" class="btn bg-zs rounded-3 p-3 text-light fw-bold fs-5 col-11" data-bs-toggle="">{{$t('deposit[13]')}}</button>
            </div>
          </div>
          <div>
            <h4 class="mt-4 text-zs fw-bold">{{$t('deposit[26]')}}</h4>
            <div class="table-responsive--md">
              <table class="table custom--table">
                <thead>
                <tr>
                  <th>{{$t('deposit[18]')}}</th>
                  <th>{{$t('deposit[14]')}}</th>
                  <th>{{$t('deposit[9]')}}</th>
                  <th>{{$t('deposit[16]')}}</th>
                  <th>{{$t('deposit[17]')}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-if="listData.length==0">
                  <td colspan="100%"  class="text-center">{{$t('vanPull[1]')}}</td>
                </tr>
                <tr v-for="(item,index) in listData" :key="index">
                  <td :data-label="$t('deposit[18]')">{{item.adddate}}</td>
                  <td :data-label="$t('deposit[14]')">{{item.dan}}</td>
                  <td :data-label="$t('deposit[9]')">
                    {{item.pay_type}}
                  </td>
                  <td :data-label="$t('deposit[16]')">
                    {{InitData.currency}}{{item.money}}
                  </td>
                  <td :data-label="$t('deposit[17]')">
                    <!--                <span class="badge badge&#45;&#45;warning">Pending</span>-->
                    <div class="badge badge--success" style="color: #000;" v-if="item.status==3">{{item.status_desc}}</div>
                    <div class="badge badge--warning" style="color: #000;" v-else-if="item.status==-1">{{item.status_desc}}</div>
                    <div class="badge badge--info" style="color: #000;" v-else>{{item.status_desc}}</div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
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
    </div>


<!--    <div class="d-none d-lg-block">-->
<!--      <div class="rainbow-gradient-circle"></div>-->
<!--      <div class="rainbow-gradient-circle theme-pink"></div>-->
<!--    </div>-->
    <Footer></Footer>
  </div>
</template>
<script>
  import QRCode from "qrcodejs2";
  import Clipboard from 'clipboard';
  import Side from '@/components/Side'
  export default {
    name: 'loginPassword',
    components: {
      Side
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
        qrcode:'',
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
        this.showSelect = false;
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
        let typeid = this.id;
        if(!this.postData.money){
          this.$Dialog.Toast(this.$t('recharge.placeholder[0]'));
          return;
        }
        if(parseFloat(this.postData.money)<parseFloat(this.rechargeInfo.minPrice)){
          this.$Dialog.Toast(this.$t('recharge.placeholder[3]',{currency:this.InitData.currency,min:this.rechargeInfo.minPrice}));
          return;
        }
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
                  that.$nextTick(() => {
                    document.getElementById("QRCode").innerHTML = "";
                    that.qrcode = new QRCode(document.getElementById("QRCode"), {
                      text: t,
                      width: 100,
                      height: 100,
                      correctLevel: QRCode.CorrectLevel.H
                    });

                  });
                } else {
                  that.$Dialog.Toast('no config');
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
        console.log(file)
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
  .custom-select {
    position: relative;
    display: inline-block;
  }
  .select-items div, .select-selected {
    color:#0d6efdb5;
    padding: 8px 16px;
    text-decoration: none;
    display: block;
    font-size: 14px;
    cursor: pointer;
  }
  .select-items {
    margin-top: 10px;
    position: absolute;
    background-color: rgb(51, 51, 51);
    /* border: 1px solid #ced4da; */
    border-radius: var(--bs-border-radius-lg) !important;
    line-height: 28px;
    font-size: 15px;
    z-index: 99;
    width: 100%;
    list-style-type: none;
    overflow-y: auto;
    max-height: auto;
  }
  input:focus,textarea:focus {
    border: 1px solid #fff !important;
  }

  .custom-select {
    position: relative;
    display: inline-block;
  }

  .select-selected {
    /* background-color: #fff; */
    /* border: 1px solid #ced4da;
    padding: 8px 16px; */
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
  }

  .select-items div,.select-selected {
    color:#0d6efdb5;
    padding: 8px 16px;
    text-decoration: none;
    display: block;
    font-size: 14px;
    cursor: pointer;
  }

  .select-items {
    margin-top: 10px;
    position: absolute;
    background: #eee;
    /* border: 1px solid #ced4da; */
    border-radius: var(--bs-border-radius-lg) !important;
    line-height: 28px;
    font-size: 15px;
    z-index: 99;
    width: 100%;
    list-style-type: none;
    overflow-y: auto;
    max-height: auto;
  }

  .select-hide {
    display: none;
  }
  .modal-dialog{
    pointer-events:all !important;
  }

  /* 新增表格样式 */
  #statusTable {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    margin: 1rem 0;
    border-radius: 8px;
    overflow: hidden;
  }

  #statusTable thead {
    background: rgba(30, 26, 37, 0.8);
    border-radius: 8px 8px 0 0;
  }

  #statusTable thead th {
    padding: 1rem;
    font-weight: 600;
    border-bottom: 1px solid rgba(139, 42, 184, 0.2);
  }

  #statusTable thead th:first-child {
    border-top-left-radius: 8px;
  }

  #statusTable thead th:last-child {
    border-top-right-radius: 8px;
  }

  #statusTable tbody tr {
    background: rgba(30, 26, 37, 0.4);
    transition: all 0.3s ease;
  }

  #statusTable tbody tr:hover {
    background: rgba(30, 26, 37, 0.6);
  }

  #statusTable tbody td {
    padding: 1rem;
    border-bottom: 1px solid rgba(139, 42, 184, 0.1);
  }

  #statusTable tbody tr:last-child td {
    border-bottom: none;
  }

  #statusTable tbody tr:last-child td:first-child {
    border-bottom-left-radius: 8px;
  }

  #statusTable tbody tr:last-child td:last-child {
    border-bottom-right-radius: 8px;
  }

  /* 按钮样式优化 */
  .bg-zs {
    /*background: linear-gradient(90deg, #8B2AB8 0%, #E535AB 100%) !important;*/
    /*border: none !important;*/
    /*transition: all 0.3s ease !important;*/
  }

  .bg-zs:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(229, 53, 171, 0.3);
  }

  /* 状态文本颜色 */
  .text-lvs {
    color: #4CAF50 !important;
  }

  .text-red {
    color: #FF5252 !important;
  }

  /* 响应式调整 */
  @media (max-width: 768px) {
    #statusTable {
      font-size: 0.9rem;
    }

    #statusTable thead th,
    #statusTable tbody td {
      padding: 0.75rem 0.5rem;
    }
  }


</style>


