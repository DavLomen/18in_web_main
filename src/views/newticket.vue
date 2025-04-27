<template>
  <div class="HomePage" id="app">
    <UserHeader></UserHeader>
    <div class="banner">
      <div class="banner__content">
        <div class="container">
          <div class="row g-3 justify-content-center">
            <div class="col-lg-10 text-center">
              <h2 class="m-0 banner-title">{{$t("i18nLan.newticket.text1")}}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="text-end mb-3">
          <a href="javascript:;" class="btn btn-sm btn--base">
            {{$t("i18nLan.newticket.text2")}}           </a>
        </div>
        <div class="card custom--card">
          <form>
            <div class="card-body">
              <input type="hidden" name="_token" value="QjzuzsPyvUssFZayawjTuq6pGpAVqHnm4dQr6YZT">                    <div class="row">
              <div class="form-group col-md-6">
                <label for="name">{{$t("i18nLan.newticket.text3")}}</label>
                <input type="text" name="name" value="aa123123" class="form-control form--control" placeholder="Enter your name" readonly="">
              </div>
              <div class="form-group col-md-6">
                <label for="email">{{$t("i18nLan.newticket.text4")}}</label>
                <input type="email" name="email" value="132123456@qq.com" class="form-control form--control" placeholder="Enter your email" readonly="">
              </div>

              <div class="form-group col-md-6">
                <label for="website">{{$t("i18nLan.newticket.text5")}}</label>
                <input type="text" name="subject" value="" class="form-control form--control">
              </div>
              <div class="form-group col-md-6">
                <label for="priority">{{$t("i18nLan.newticket.text9")}}</label>
                <select name="priority" class="form-select form--select">
                  <option value="3">{{$t("i18nLan.newticket.text6")}}</option>
                  <option value="2">{{$t("i18nLan.newticket.text7")}}</option>
                  <option value="1">{{$t("i18nLan.newticket.text8")}}</option>
                </select>
              </div>
              <div class="col-12 form-group">
                <label for="inputMessage">{{$t("i18nLan.newticket.text10")}}</label>
                <textarea name="message" id="inputMessage" rows="6" class="form-control form--control-textarea "></textarea>
              </div>
            </div>
              <div class="file-upload">
                <div class="d-flex justify-content-between mb-3 align-items-center">
                  <label for="inputAttachments">{{$t("i18nLan.newticket.text11")}}</label>

                  <button type="button" class="btn btn--base btn-sm addFile d-block">
                    <i class="fa fa-plus"></i> {{$t("i18nLan.newticket.text12")}} </button>
                </div>
                <input type="file" name="attachments[]" id="inputAttachments" accept=".jpg, .jpeg, .png, .pdf, .doc, .docx" class="form--control form-control mb-2">
                <div id="fileUploadsContainer"></div>
                <p class="ticket-attachments-message text-muted">
                  {{$t("i18nLan.newticket.text13")}}                       </p>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn--base btn-block" type="submit">{{$t("i18nLan.newticket.text14")}}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
  import UserHeader from '@/components/UserHeader'
    export default {
        name: "withdraw",
      components: {
        UserHeader
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
          data_current_page:"1",
          data_total_page:"1",
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
        this.$Model.GetUserInfo();
        if(this.UserInfo.is_fund_password!=1){
          this.$Dialog.Alert(this.$t('wallet.msg[0]'),()=>{
            this.$router.push('/payPassword')
          })
        }
        this.$Model.GetBankCardList(rep=>{
          if(rep.code == 0){
            this.$Dialog.Confirm(this.$t('wallet.msg[1]'),()=>{
              this.$router.push('/walletAddress')
            })
          }else{
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
    color: # !important;
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
      padding: 0px 2rem 0px 1rem;
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
      min-width:12rem;
      word-break: break-word;
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
      padding: 0px 2rem 0px 1rem;
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
  }
</style>
