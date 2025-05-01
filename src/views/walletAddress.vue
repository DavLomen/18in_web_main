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
            <h6 class="mt-4 text-bhs">{{$t('walletAddress[3]')}}</h6>
            <div class=" mt-4 border rounded-3 border-0" style=" line-height: 28px; height: 60px; font-size: 15px; color: rgb(163,163,163); background-color: rgb(51, 51, 51); ">
              <div class="custom-select " style="width:100%; ">
                <div @click="showSelect = !showSelect" class="select-selected my-2 fs-6 text-hs">
                  <img v-if="selectTypes.qrcode !=''" :src="`./static/images/${selectTypes.bank}.png`" style="width: 20px;vertical-align: middle;display: inline-block;">
                  <span>{{selectTypes.bank==''?$t('wallet.placeholder[0]'):selectTypes.bank}}</span>
                </div>
                <div class="select-items py-3" v-show="showSelect">
                  <div class="py-3" :value="item.id" v-for="(item,index) in InitData.BanksList" :key="index" @click="chageBank(item)">
                    <img :src="`./static/images/${item.bank}.png`" class="me-3" style="height: 30px;">
                    {{item.bank}}
                  </div>
                </div>
              </div>
            </div>
            <input type="hidden" id="selectedNetwork" name="selectedNetwork">
            <h6 class="text-bhs pt-3">{{$t('walletAddress[0]')}}</h6>
            <input class="form-control" v-model.trim="postData.card_no"  id="wallet" type="text" :placeholder="$t('walletAddress[4]')" style="line-height: 28px; height: 60px; font-size: 15px;" aria-label="default input example" data-sharklabel="address">
            <!--<div class="pt-3">-->
            <!--    <i class="bi bi-exclamation-circle-fill text-red"></i>-->
            <!--    <span class="text-red fs-7">It cannot be modified after the setting is completed.</span>-->
            <!--</div>-->
          </div>

          <div class="text-center pt-4" style="margin-bottom:400px;">
            <button @click="onSubmit" type="button" id="Submit_w" class="btn bg-zs rounded-3 p-3 text-light fw-bold fs-5 col-11">{{$t('walletAddress[5]')}}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="rainbow-gradient-circle"></div>
      <div class="rainbow-gradient-circle theme-pink"></div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  export default {
    name: 'loginPassword',
    components: {
    },
    data() {
      return {
        showSelect:false,
        selectTypes:{
          id:"",
          bank:""
        },
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,
        postData: {
          name: '',
          bank_id: '',
          bank_name: '',
          card_no: '',
          // bank_branch_name: ''
        },
        showPicker: false,
        bankList: '',
        showAdd: false,
        isSubmit: false,
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      this.selectTypes = this.InitData.BanksList[0];
      this.postData.bank_id = this.selectTypes.bank_id;
      this.postData.bank_name = this.selectTypes.bank;
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      chageBank(item) {
        this.postData.bank_id = item.bank_id;
        this.postData.bank_name = item.bank;
        this.selectTypes = item;
        this.showSelect = false;
      },
      onSubmit() {
        this.postData.name = this.UserInfo.realname
        if(!this.postData.bank_name){
          this.$Dialog.Toast(this.$t('bankCard.placeholder[0]'));
          return;
        }
        if(!this.postData.card_no){
          this.$Dialog.Toast(this.$t('walletAddress[4]'));
          return;
        }
        this.isSubmit = true;
        this.$Model.AddBankCard(this.postData,data=>{
          this.isSubmit = false;
          if(data.code==1){
            this.postData.card_no = '';
            this.showAdd = false
          }
        })
      },
    }
  }
</script>
<style scoped>
  .carousel-item img {
    height: 200px;
    max-width: 100%;
    object-fit: cover;
  }
  /* 手机端轮播文字样式 */
  @media (max-width: 768px) {
    .mobile-scroll {
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      height: 25px;
      display: flex;
      align-items: center;
    }

    .mobile-notification {
      display: inline-block;
      padding-right: 2rem;
      animation: mobile-scroll 20s linear infinite;
    }

    @keyframes mobile-scroll {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
  }

  /* PC端轮播文字样式 */
  @media (min-width: 769px) {
    .desktop-scroll {
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      height: 25px;
      display: flex;
      align-items: center;
    }

    .desktop-notification {
      display: inline-block;
      padding-right: 2rem;
      animation: desktop-scroll 25s linear infinite;
    }

    @keyframes desktop-scroll {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
  }




  .pop-contauner{
    position: fixed;
    top: 50%;
    left: 150%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: auto;
  }
  .pop-after{
    content: "";
    display: block;
    position: fixed; /* 绝对定位 */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(117, 115, 115, 0.8); /* 白色背景，透明度为0.8 */
    backdrop-filter: blur(5px); /* 背景模糊，模糊半径为5px */
    pointer-events: auto; /* 允许点击穿透到背景下层元素 */
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
  input:focus,textarea:focus {
    border: 1px solid #fff !important;
  }
</style>


