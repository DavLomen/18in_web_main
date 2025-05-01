<template>
  <div class="HomePage" id="app">
    <Header></Header>
    <div class="d-flex">
      <div class="col-2 border-end border-hhs d-none d-lg-block">
        <Side></Side>
      </div>
      <div class="container col-lg-10 ">
        <div class="">
          <div class="p-3  mx-3 my-4 border border-0 border-muted rounded-3 shadow shadow-md bg-okh single-settings-box top-flashlight light-xl leftside" style="position: relative; overflow: visible;">
            <h6 class="mt-4 text-bhs">{{$t('withdraw[1]')}}</h6>
            <div class=" mt-4 border rounded-3 border-0" style=" line-height: 28px; height: 60px; font-size: 15px; color: rgb(163,163,163); background-color: rgb(51, 51, 51); ">
              <div class="custom-select " style="width:100%; ">
                <div class="select-selected my-2 fs-6 text-hs" @click="showSelect = !showSelect">
                  <img v-if="selectTypes.bank_name !=''" :src="`./static/images/${selectTypes.bank_name}.png`" style="width: 20px;vertical-align: middle;display: inline-block;">
                  <span>{{selectBank}}</span>
                </div>
                <div class="select-items py-3" v-show="showSelect">
                  <div  :value="item.id" v-for="(item,index) in banklist" :key="index" @click="chageRecharge(item)" class="py-3">
                    <img :src="`./static/images/${item.bank_name}.png`" style="width: 20px;vertical-align: middle;display: inline-block;">
                    {{item.bank_name}} {{item.card_no}}
                  </div>
                </div>
              </div>
            </div>
            <h6 class="text-bhs pt-3">{{$t('withdraw[2]')}}({{InitData.currency}})</h6>
            <input class="form-control" v-model="drawData.draw_money" type="text"  style="line-height: 28px; height: 60px; font-size: 15px;" aria-label="default input example" data-sharkid="__0" data-sharklabel="address">
            <h6 class="text-bhs pt-3">{{$t('withdraw[3]')}}</h6>
            <input class="form-control" type="password" autocomplete="off" v-model="drawData.drawword" style="line-height: 28px; height: 60px; font-size: 15px;" aria-label="default input example" data-sharkid="__0" data-sharklabel="address">
            <!--<div class="pt-3">-->
            <!--    <i class="bi bi-exclamation-circle-fill text-red"></i>-->
            <!--    <span class="text-red fs-7">It cannot be modified after the setting is completed.</span>-->
            <!--</div>-->

            <div class="info-list">
              <!--            <div class="info-item">-->
              <!--              <div class="label">Limit</div>-->
              <!--              <div class="value">0 USD - 0 USD</div>-->
              <!--            </div>-->
              <div class="info-item" v-if="withdraw_handling_fee>0">
                <div class="label">{{$t('wallet.label[8]')}}</div>
                <div class="value">{{withdraw_handling_fee}} {{InitData.currency}}</div>
              </div>
              <div class="info-item">
                <div class="label">{{$t('deposit[22]')}}</div>
                <div class="value">1USD ≈ {{selectTypes.rate}} <span v-if="selectTypes.bank_name !='' && selectTypes.bank_name.indexOf('USDT')==0">USDT</span><span v-else>{{selectTypes.bank_name}}</span></div>
              </div>
              <div class="info-item">
                <div class="label">{{$t('withdraw[4]')}}</div>
                <div class="value">{{parseFloat(parseFloat((drawData.draw_money*parseFloat(selectTypes.rate)).toFixed(8)*1000000)/1000000)}} <span v-if="selectTypes.bank_name !='' && selectTypes.bank_name.indexOf('USDT')==0">USDT</span><span v-else>{{selectTypes.bank_name}}</span></div>
              </div>
            </div>
          </div>

          <div class="text-center pt-4" >
            <button type="button" id="Submit_w" class="btn bg-zs rounded-3 p-3 text-light fw-bold fs-5 col-11" @click="submitDraw">
              {{$t('withdraw[5]')}}
            </button>
          </div>
        </div>

        <div>
          <h4 class="mt-4 text-zs fw-bold">{{$t('wallet.default[4]')}}</h4>
          <table class="w-100 text-bhs text-center mt-3 " id="statusTable">
            <thead class="fs-6 border-bottom border-hhs bg-okh" style="height: 50px;">
            <tr class="border-bottom border-hhs">
              <th  scope="col" class="text-center">{{$t('withdraw[9]')}}</th>
              <th  scope="col-3" class="text-center">{{$t('withdraw[6]')}}</th>
              <th  scope="col-2" class="text-center">{{$t('walletAddress[0]')}}</th>
              <th  scope="col-2" class="text-center">{{$t('withdraw[7]')}}</th>
              <th  scope="col-3" class="text-center">{{$t('withdraw[8]')}}</th>
            </tr>
            </thead>
            <tbody class="fs-7" style="height: 50px; line-height: 1.3rem;">
            <tr v-for="(item,index) in listData" :key="index">
              <td  class="text-center">
                {{item.adddate}}
              </td>
              <td  class="text-center">{{item.dan}}</td>
              <td  class="text-center">
                {{item.bank_no_tail.replace(/^(.{4}).*(.{4})$/, '$1 **** $2')}}
              </td>
              <td  class="text-center">{{InitData.currency}}{{item.money}}</td>
              <td  class="text-center">
                {{item.status_desc}}
              </td>

              <!--                      <td  class="text-center small">-->
              <!--                        <div class="detail-btn" @click="showD(item)"><i class="el-icon-monitor"></i></div>-->
              <!--                      </td>-->
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
    <Footer></Footer>
  </div>
</template>

<script>
  export default {
    name: "withdraw",
    components: {
    },
    data(){
      return {
        showSelect:false,
        selectTypes:{
          id:'',
          qrcode:'',
          bank_name:'',
          rate:0,
          card_no:'',
        },
        showUserDown:false,
        hidePwd:true,
        showDetail:false,
        password: [],                       // 存储密码的数组
        dispay: false,
        listData: '',
        isLoad: false,
        isFinished: false,
        isRefresh: false,
        pageNo: 1,
        tabsState: 1,
        tabsIndex: 0,
        taskTabs: [
          {type: 1, text: this.$t('wallet.default[3]')},
          // {type: 2, text: '转账记录'},
          {type: 3, text: this.$t('wallet.default[4]')}
        ],
        showTurn: false,
        showDraw: false,
        showPicker: false,
        selectBank: '',
        isSubmit: false,
        turnData: {
          username: '',
          turn_money: '',
          drawword: ''
        },
        drawData: {
          draw_type: 'bank',
          user_bank_id: '',
          draw_money: '',
          // phone: '',
          // email: '',
          ifsc: '',
          drawword: ''
        },
        showBank: false,
        showPixType: false,
        showAccountType: false,
        selectedPixType: '',
        selectedAccountType: '',
        bankList: '',
        bankName: '',
        pixTypeList: [
          'CPF', 'CNPJ', 'PHONE', 'EMAIL', 'EVP'
        ],
        accountTypeList: [
          'Corrente', 'Poupaça', 'Pagamento'
        ],
        data_current_page:1,
        data_total_page:1,
        banklist:[],
      }
    },
    computed: {
      cardList() {
        let data = this.$store.state.BankCardList.flatMap(item=>item.bank_name+' '+item.card_no.replace(/^(.{4}).*(.{4})$/, '$1 **** $2'))
        return data;
      },
      'withdraw_handling_fee': function(){
        if(this.InitData.setting.withdraw_fee && this.InitData.setting.withdraw_fee > 0) {
          return this.drawData.draw_money * this.InitData.setting.withdraw_fee / 100;
        } else {
          return 0;
        }
      }
    },
    watch: {
    },
    created() {
      let that = this;
      this.$Model.GetUserInfo(function (data) {
        if(data.info.is_fund_password!=1){
          that.$Dialog.Alert(that.$t('wallet.msg[0]'),()=>{
            that.$router.push('/payPassword')
          })
        }
      });

      this.$Model.GetBankCardList(rep=>{
        if(rep.code == 0){
          this.$Dialog.Confirm(this.$t('wallet.msg[1]'),()=>{
            this.$router.push('/walletAddress')
          })
        }else{
          this.banklist = rep.data;
          this.chageRecharge(that.BankCardList[0]);
          this.drawData.user_bank_id = this.BankCardList[0].id;
          this.drawData.bank_id = this.BankCardList[0].id;
          this.drawData.pix_value = this.BankCardList[0].card_no;
          this.selectBank = this.BankCardList[0].bank_name + ' ' + this.BankCardList[0].card_no.replace(/^(.{4}).*(.{4})$/, '$1 **** $2');
        }
      })
      // this.bankList = this.InitData.BanksList.flatMap(item => item.bank);
      if (localStorage.getItem("idcard") && localStorage.getItem("idcard") !='' && localStorage.getItem("idcard") !=undefined) {
        this.drawData.ifsc = localStorage.getItem("idcard");
      }
      this.getListData('init')
    },
    methods: {
      chageRecharge(item) {
        this.selectTypes= item;
        this.drawData.user_bank_id = this.selectTypes.id;
        this.drawData.bank_id = this.selectTypes.id;
        this.drawData.pix_value = this.selectTypes.card_no;
        this.selectBank = this.selectTypes.bank_name + ' ' + this.selectTypes.card_no.replace(/^(.{4}).*(.{4})$/, '$1 **** $2');
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
      onConfirmBank(value,index) {
        this.bankName = value
        this.drawData.bank_id = this.InitData.BanksList[index].bank_id;
        this.showBank = false
      },
      onConfirmPixType(value,index) {
        this.selectedPixType = value
        this.showPixType = false
      },
      onConfirmAccountType(value,index) {
        this.selectedAccountType = value
        this.showAccountType = false
      },
      onConfirm(value,index) {
        this.drawData.user_bank_id = this.BankCardList[index].id;
        this.drawData.bank_id = this.BankCardList[index].id;
        this.drawData.pix_value = this.BankCardList[index].card_no
        if (this.InitData.setting.hide_ifsc != 1) {
          this.drawData.ifsc =  this.BankCardList[index].ifsc;
        }
        // this.drawData.ifsc = this.BankCardList[index].bank_branch_name;
        this.selectBank = value;
        this.showPicker = false;
      },
      submitDraw() {
        if(!this.drawData.user_bank_id){
          this.$Dialog.Toast(this.$t('wallet.placeholder[3]'));
          return;
        }
        if(!this.drawData.draw_money){
          this.$Dialog.Toast(this.$t('wallet.placeholder[1]'));
          return;
        }
        // if(!this.drawData.phone){
        //   this.$Dialog.Toast(this.$t('wallet.placeholder[4]'));
        //   return;
        // }
        // if(!this.drawData.email){
        //   this.$Dialog.Toast(this.$t('wallet.placeholder[5]'));
        //   return;
        // }
        // if(!this.drawData.ifsc){
        //   this.$Dialog.Toast(this.$t('idcard[1]'));
        //   return;
        // }
        if(!this.drawData.drawword){
          this.$Dialog.Toast(this.$t('wallet.placeholder[2]'));
          return;
        }
        this.isSubmit = true;

        if(!this.isEmpty(this.selectedPixType)
          || !this.isEmpty(this.drawData.cpf)
          || !this.isEmpty(this.drawData.selectedAccountType)
          || !this.isEmpty(this.drawData.branch_bank_code)
          || !this.isEmpty(this.drawData.pix_value)) {
          let extendJson = {
            cpf: this.drawData.cpf,
            pix_type :  this.selectedPixType,
            pix_value :  this.drawData.pix_value,
            account_type :  this.selectedAccountType,
            branch_bank_code :  this.drawData.branch_bank_code,
          }
          this.drawData.extend = JSON.stringify(extendJson)
        }
        this.$Model.Draw(this.drawData,data=>{
          this.isSubmit = false;
          if(data.code==1){
            localStorage.setItem("idcard", this.drawData.ifsc);
            this.showDraw = false
            this.drawData.draw_type='bank';
            this.drawData.drawword='';
            this.drawData.draw_money= '';
            this.selectedPixType = ''
            this.selectedAccountType = ''
            this.getListData('init')
          }
        })
      },
      // submitTurn() {
      //   if(!this.turnData.username){
      //     this.$Dialog.Toast("请输入转入用户");
      //     return;
      //   }
      //   if(!this.turnData.turn_money){
      //     this.$Dialog.Toast("请输入转账金额");
      //     return;
      //   }
      //   if(!this.turnData.drawword){
      //     this.$Dialog.Toast("请输入支付密码");
      //     return;
      //   }
      //   this.isSubmit = true;
      //   this.$Model.Transfer(this.turnData,data=>{
      //     this.isSubmit = false;
      //     if(data.code==1){
      //       this.showTurn = false
      //       this.turnData = {
      //         username: '',
      //         turn_money: '',
      //         drawword: ''
      //       }
      //       this.getListData('init')
      //     }
      //   })
      // },
      onLoad() {
        this.getListData('load')
      },
      isEmpty(val){
        if(val == null)return true;
        if(val == undefined || val == 'undefined') return true;
        if(val == "") return true;
        if(val.length == 0) return true;
        return false;
      },
      changeTabs(index) {
        this.tabsState = this.taskTabs[index].type
        this.getListData('init')
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
        this.$Model.GetDrawRecord({state: 0,page_no:this.pageNo},data=>{
          this.isLoad = false
          if(data.code==1){
            this.data_current_page = data.data_current_page;
            this.data_total_page = data.data_total_page;
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
      onRefresh() {
        this.getListData('init')
      },
    },
  }
</script>

<style scoped>
  .custom-select {
    position: relative;
    display: inline-block;
  }
  .select-items div, .select-selected {
    color: rgb(247, 243, 243);
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
    color: rgb(247, 243, 243);
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

  .info-list {
    width: 100%;
  }

  .info-list .info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0.6rem;
    border-bottom: 1px solid rgb(233, 233, 233);
  }

  .info-list .info-item .label {
    max-width: 48%;
    font-size: 1rem;
    overflow-wrap: break-word;
  }

  .info-list .info-item .value {
    max-width: 48%;
    font-size: 1rem;
    font-weight: 700;
    word-break: break-all;
  }
</style>
