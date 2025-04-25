<template>
  <div class="HomePage" id="app">
    <Header></Header>
    <div class="d-flex">
      <div class="col-2 border-end border-hhs d-none d-lg-block">
        <Side></Side>
      </div>
      <div class="container col-lg-10 ">
        <div class="col-lg-9">
          <div class="p-3  mx-3 my-4 border border-0 border-muted rounded-3 shadow shadow-md bg-okh single-settings-box top-flashlight light-xl leftside">
            <h6 v-if="UserInfo.is_fund_password==1" class="text-bhs pt-3">{{$t('password[0]')}}</h6>
            <input v-if="UserInfo.is_fund_password==1" v-model.trim="postData.o_payword" class="w-100 border rounded-3 border-0 ps-3 my-3" id="oldpassword" style="line-height: 28px; height: 60px; font-size: 15px; color: #0d6efdb5;; background-color: #fff; " type="password" placeholder="" aria-label="default input example" >
            <h6 class="text-bhs">{{$t('password[1]')}}</h6>
            <input v-model.trim="postData.n_payword" class="w-100 border rounded-3 border-0 ps-3 my-3" id="newpassword" style="line-height: 28px; height: 60px; font-size: 15px; color: #0d6efdb5;; background-color: #fff; " type="password" placeholder="" aria-label="default input example" >
            <h6 class="text-bhs">{{$t('password[2]')}}</h6>
            <input v-model.trim="postData.r_payword" class="w-100 border rounded-3 border-0 ps-3 my-3" id="Confirmpassword" style="line-height: 28px; height: 60px; font-size: 15px; color: #0d6efdb5;; background-color: #fff; " type="password" placeholder="" aria-label="default input example" >
          </div>
          <div class="text-center pt-4">
            <button @click="setUserInfo" type="button" id="Submit_p" class="btn bg-zs rounded-3 p-3 text-light fw-bold fs-5 col-11">{{$t('password[3]')}}</button>
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
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,
        postData: {

        },
        passwords:true,
        re_passwords:true,
        ce_passwords:true,
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      setUserInfo() {
        let that = this;
        this.$Model.SetUserInfo(this.postData,data=>{
          if(data.code==1){
            this.postData = {}
            that.$Model.GetUserInfo();
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


