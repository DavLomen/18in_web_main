<template>
  <div class="HomePage" id="app">
    <div class="flex_conntainer" style="display: flex;">
      <div class="left">
        <UserHeader></UserHeader>
      </div>
      <div class="right" style="flex:1">
        <Header ref="header" :showLogo="false"></Header>
        <router-view></router-view>
    <Footer ref="footElement"></Footer>
    </div>
    </div>
  </div>
</template>
<script>
  import Clipboard, { copy } from 'clipboard';
  import UserHeader from '@/components/UserHeader_new'
  export default {
    name: 'dashboard',
    components: {
      UserHeader
    },
    data() {
      return {
        teamNum:0,
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,
        statisticalData:{},
        promoteUrl:'',
        intv:null,
        headHeight: 0,
      }
    },

    computed: {},
    watch: {
    },
    created() {
      this.$Model.GetUserInfo();
      this.$Model.GetStatisticsInfo(data=>{
        if(data.code==1){
          this.statisticalData = data.info;
        }
      })
      this.promoteUrl = `${this.InitData.setting.reg_url}/#/register/${this.UserInfo.idcode}`;
      // let that = this;
      // that.loadData();
      // that.intv = setInterval(function () {
      //   that.loadData();
      // },3000)
      let post = {}
      this.$Model.TeamReport(post, data => {
        if (data.code == 1) {
          this.teamNum = data.teamNumber;
        }
      });
      let that = this;
      that.$Model.HasNewMessage(data=>{
        if (data.data == 1) {
          that.$Dialog.Confirm(that.$t('messageInfo[0]'), () => {
            that.$router.push(`/dashboard/message`)
          }, that.$t('messageInfo[1]'));
        }
      })

      // setInterval(function () {
      //   that.$Model.HasNewMessage(data=>{
      //     if (data.data == 1) {
      //       that.$Dialog.Confirm(that.$t('messageInfo[0]'), () => {
      //         that.$router.push(`/dashboard/message`)
      //       }, that.$t('messageInfo[1]'));
      //     }
      //   })
      // },300000);
    },
    mounted() {
      this.headHeight = this.$refs.header.$el.offsetHeight
    },
    activated() {

    },
    destroyed() {
      // clearInterval(this.intv)
    },
    methods: {
      loadData() {
        let that = this;
        for (let i = 0; i < that.coinlist.length; i++) {
          that.$Model.merged(that.coinlist[i].symbol, function (data) {
            that.coinlist[i].price = data.tick.ask[0];
            that.coinlist[i].change = (data.tick.close-data.tick.open).toFixed(2);
            that.coinlist[i].rate = parseFloat((data.tick.close-data.tick.open)/data.tick.open*100).toFixed(2);
          });
        }
      },
      copy (className =  '.copy') {
        let that = this;
        var clipboard = new Clipboard(className)
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
    }
  }
</script>
<style scoped>
  .fs-5{font-size:1.25rem!important}
  .fw-bold{
    font-weight: 700!important;
  }
  .overview .el-card {
    border: none;
    box-shadow: none;
  }
  .rank {
    background: #384247;
    height: 100%;
    padding: 30px;
    border-radius: 10px;
    position: relative;
    color: #ffffff;
  }
  .rank1 {
    background: rgb(245,242,251);
    color: #000;
  }

  /* 超小屏幕（手机，小于 768px） */
  @media (max-width: 768px) {
    .mobile {
      display: flex;
    }
    .show_mobile{
      display: block;
    }
    .el-col-md-6 {
      width: 50%;
    }
    .pc {
      display: none;
    }
    .pc1 {
      display: none;
    }
    .bal {
      display: block;
      width: 100%;
      height: 175px;
      border-radius: 10px;
      background-size: cover;
      background-position: center;
      position: relative;
      margin-bottom: 1rem;
    }
    .cal{
      display: none;
    }
  }
  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {
    .mobile {
      display: none;
    }
    .show_mobile{
      display: none;
    }
    .pc {
      display: flex;
    }
    .bal {
      display: none;
      width: 100%;
      height: 175px;
      border-radius: 10px;
      background-size: cover;
      background-position: center;
      position: relative;
      margin-bottom: 3rem;
    }
  }

  .bal-line {
    position: absolute;
    width: 1px;
    height: 105px;
    left: 50%;
    top: 46px;
    opacity: 1;
    -webkit-transition: 1s ease;
    transition: 1s ease;
    -webkit-animation: an 1s ease forwards;
    animation: an 1s ease forwards;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    background: #FFFFFF;
    z-index: 3;
  }
  .dts_pl {
    background-size: cover;
  }
  .flex-bal {
    padding-top: 23px;
    display: flex;
    flex-wrap: wrap;
  }
  .dts_pl::before {

  }
  .bal-bg {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 0;
    opacity: 1;
    height: 175px;
    border-radius: 10px;
    background: #20c997;
    left: 0;
  }
  .bal-c{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .inf {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    grid-gap: 9px;
  }

  .item-inf {
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    width: 100%;
    height: 88px;
  }

  .item-inf2 {
    background: #F9F2F8;
    border-radius: 10px;
    width: 100%;
    height: 88px;
  }

  .item-inf2 p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    padding-top: 15px;
    padding-left: 12px;


    color: #A22283;
  }

  .item-inf p {
    margin-top: 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
  }

  .item-inf h4, .item-inf2 h4  {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
  }

  .item-inf2 h4 {
    color: black;
  }
  .bal-item {
    width: 50%;
  }
  .two-sect {
    margin-top: 10px;
  }
  .bal-item h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 10px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 0;
  }
  .bal-item p {
    font-family: 'Roboto';
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin: 0;
    line-height: 14px;
    color: #FFFFFF;
  }
  .bal img {
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
  }

  .flex-3 {
    width: 100%;
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 2rem;
  }
  .flex-3 a {
    text-decoration: none;
  }
  .item-m {
    cursor: pointer;
    width: 25%;
  }
  .item-m .bg {
    width: 60px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #20c997;
    border-radius: 10px;
    margin: 0 auto;
  }
  .item-m .div {
    font-family: 'Roboto';
    font-style: normal;
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000000;
  }
  .item-m .bg img {
    width: 24px;
    height: 18px;
  }
  .bal {
    margin-top: 1rem;
  }
  .para {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .infos {
    /*width: 100%;*/
    text-align: left;
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    background-color: rgb(56, 66, 71);
    border-radius: 1.5rem;
    color: white;
    padding: 1.5rem 1rem;
  }
  .infos div {
    margin-right: 1rem;
  }
  .flex_conntainer{
    overflow: hidden;
    height: 100vh;
  }
  .flex_conntainer .right{
    overflow-y: scroll;
  }
  .flex_conntainer .left{
    overflow-y: scroll;
  }
  @media (max-width: 768px) {
    .flex_conntainer {
      overflow: scroll;
    }
  }
  /* 20250423新增 */
  .pc_color_card{
    position: relative;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 2rem;
    transition: all .3s ease 0s;
    background-color: #fff;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .15);
    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
    border-radius: 10px;
    text-align: center;
    padding: 40px 17px;
    cursor: pointer;
  }
  .pc_color_card:hover{
    transform: translateY(-5px);
  }
  .dashboard_title{
    color: #20c997;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-size: 30px;
  }
  .pc_link_input{
    width: 100%;
    border-radius: 4px;
  }
  .pc_link_input .el-input{
    position: relative;
  }
  .pc_link_input .el-input input{
    height: 2.5rem;
    line-height: 4.5rem;
    padding: 0 1rem;
    font-family: myFont;
    color: #000;
    border: 1px solid #d9d9d9 !important;
    background-color: #efefef !important;
    width: 100%;
    border-radius: 4px;
  }
  .copy_icon{
    position: absolute;
    top:0;
    right: 0;
    height: 2.5rem;
    width: 2.5rem;
    background: #20c997;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .dashboard_question{
    width: 100%;
    padding: 23px 44px;
    border-radius: 10px;
    background: #f0e9f3;
    margin-top: 31px;
    margin-bottom: 60px;
    font-size: 1.5rem;
  }
  .dashboard_question .label{
    color: #20c997;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
  }

  .dashboard_question .text{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
    font-size: 1rem;
  }

  .dashboard_question .button{
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid #20c997;
    padding: 13px 32px;
    margin-top: 20px;
    color: #20c997;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
  }
</style>


