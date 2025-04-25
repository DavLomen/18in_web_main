<template>
  <div class="HomePage" id="app">
    <UserHeader></UserHeader>
    <div class="app-wrapper" style="width: calc(100% - 25rem);">
      <div class="page-header">
        <div class="page-title">{{$t('common[2]')}}</div>
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
        <div class="aaa">
          <div>{{$t('lucky[0]')}}<span style="color: #e73329;">{{this.UserInfo.lucky_times ||0}}</span></div>
          <div class="recordBtn" @click="$router.push('/luckyRecord')">{{$t('lucky[3]')}}</div>
        </div>
        <div style="overflow:hidden;width: 100%;background: url('./static/img/box_bg.jpg') no-repeat;background-size: 100% 100%;padding: 0.5rem 0;margin: 0.5rem auto 0;">
          <div class="box" >
            <img :src="'./static/img/bg.png'" width="100%" class="xz"/>
            <LuckyWheel
              class="luck-draw"
              ref="LuckyWheel"
              width="270px"
              height="270px"
              :blocks="blocks"
              :prizes="prizes"
              :buttons="buttons"
              :default-style="defaultStyle"
              :default-config="defaultConfig"
              @start="startCallBack"
              @end="endCallBack"
            />
          </div>
        </div>
        <!--        <van-cell style="font-weight: bolder" :title="$t('lucky[5]')" :border="false" />-->
        <div class="info" style="padding: 16px 16px 16px;" v-html="InitData.setting.luckydraw.desc">
        </div>
        <van-cell class="Title1" :title="$t('lucky[2]')" :border="false" />
        <div style="width: 100%;padding-bottom: 0.1rem;">
          <van-swipe id="SwipeList1" style="height: 340px;margin: 0 auto;" height="48" vertical autoplay="1500" duration="3000" :show-indicators="false" :touchable="false">
            <van-swipe-item v-for="(item,index) in luckyUserList" :key="index" :index="index">
              <van-cell
                class="topItem"
                :title="item.username"
                :label="$t('lucky[4]')"
                center
              >
                <template slot="right-icon">
              <span class="profit">
<!--                <img :src="`./static/icon/gold.png`" style="height: 1.13rem">-->
                {{item.result_described||''}}
              </span>
                </template>
              </van-cell>
            </van-swipe-item>
          </van-swipe>
        </div>
        <div style="display: none">
          <audio id="bgMusic"  controls="controls">
            <source :src="'./static/voice/bg.mp3'" type="audio/mp3" style="display: none;z-index: -999;">
          </audio>
          <audio id="scMusic"   controls="controls" style="display: none;z-index: -999;">
            <source :src="'./static/voice/scroll.mp3'" type="audio/mp3">
          </audio>
          <audio id="endMusic"  controls="controls" style="display: none;z-index: -999;">
            <source :src="'./static/voice/end.mp3'" type="audio/mp3">
          </audio>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
  import LuckDraw from 'vue-luck-draw';
  import UserHeader from '@/components/UserHeader'
  Vue.use(LuckDraw);
  import firework from '@/components/firework'
  export default {
    components: {
      UserHeader
    },
    data () {
      return {
        showNotice:false,
        showDetail:false,
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,
        luckyUserList:[],
        prizes: [],
        buttons: [{
          radius: '40px',
          imgs: [{ src: './static/img/button.png?t=1', width: '105%', top: '-150%' }]
        }],
        blocks: [
          { padding: '1px', background: '#fa3e3f' },
          { padding: '10px', background: '#f9d400' },
          { padding: '1px', background: '#e76f51' },
        ],
        defaultStyle: {
          fontColor: '#303133',
          fontSize: '14px',
        },
        defaultConfig: {
          gutter: '1px',
        },
        prizeId:'',
        code_dec:'',
        win:0,
        prizeIndex:-1,
      }
    },
    mounted () {
      this.getPrizesList();
      let oAudio = document.getElementById("bgMusic");
      oAudio.onended = function() {
        oAudio.load();
        oAudio.play();
      };
      let sAudio = document.getElementById("scMusic");
      sAudio.onended = function() {
        sAudio.load();
        sAudio.play();
      };
      this.audioAutoPlay();
    },
    created() {
      this.getLuckyUserList();
      this.$Model.GetUserInfo()
    },
    methods: {
      audioAutoPlay() {
        let audio = document.getElementById("bgMusic");
        audio.onended = function() {
          audio.load();
          audio.play();
        };
        audio.play();
        document.removeEventListener("touchstart", this.audioAutoPlay);
      },
      scrollPlay(){
        let audio = document.getElementById("scMusic");
        audio.play();
        document.removeEventListener("touchstart", this.scrollPlay);
      },
      scrollEnd(){
        let audio = document.getElementById("scMusic");
        audio.pause();
        document.removeEventListener("touchstart", this.scrollEnd);
      },
      endPlay(){
        let audio = document.getElementById("endMusic");
        audio.play();
        document.removeEventListener("touchstart", this.endPlay);
      },
      getPrizesList () {
        let that = this;
        this.$Model.LuckyPriceList(null,t=>{
          if(t.code == 1){
            let prizes = []
            t.data.forEach((item, index) => {
              prizes.push({
                id:item.id,
                name: item.prize,
                win:item.prize,
                background: index % 2 ? '#f9e3bb' : '#f8d384',
                fonts: [{ text: item.prize, top: '10%' }],
                imgs:[{ src: item.image==''?'./static/img/wenhao1.png':item.image, width: '30%', top: '35%' }],
              })
            })
            that.prizes = prizes;
          }
        });
      },
      startCallBack () {
        let that = this;
        if(this.UserInfo.lucky_times !=undefined && this.UserInfo.lucky_times<=0){
          that.$Dialog.Alert(that.$t('lucky[8]'),()=>{
          })
        }else{
          this.$Model.LuckyDraw(null,t=>{
            that.$Dialog.Close();
            that.code_dec = t.code_dec;
            if (t.code == 1) {
              that.$refs.LuckyWheel.play();
              that.scrollPlay();
              setTimeout(() => {
                if(that.prizeId !=''){
                  that.$refs.LuckyWheel.stop(that.prizes.findIndex(item=>item.id==that.prizeId));
                }else{
                  that.$refs.LuckyWheel.stop(-1);
                }
              }, 3000)
              that.prizeId = t.data.prize_id;
              that.win = t.data.win;
            } else {
              that.$Dialog.Alert(t.code_dec,()=>{
              })
            }
            that.$Model.GetUserInfo();
          });
        }

      },
      endCallBack (prize) {
        let that = this;
        // that.scrollEnd();
        if(that.prizeId !=''){
          // if(prize.win>0){
            firework.show();
            // that.endPlay();
            that.$Dialog.Alert1(this.$t('lucky[7]')+`${prize.name}`,()=>{
              firework.hide();
            })
          // }else{
            // that.endPlay();
            // that.$Dialog.Alert(that.$t('lucky[1]'),()=>{
            // })
          // }
        }else{
          if(that.code_dec !=''){
            that.$Dialog.Alert(that.code_dec,()=>{
            })
          }
        }
      },
      getLuckyUserList(){
        this.$Model.LuckyWinlog(null,t=>{
          if(t){
            this.luckyUserList = t;
            // if(this.luckyUserList.length>5){
            //   this.$nextTick(()=>{
            //     const data = $('#SwipeList1 .van-swipe-item').slice(0, 5)
            //     for (var i = 0; i < data.length; i++) {
            //       $('#SwipeList1').children().append($(data[i])[0].outerHTML)
            //     }
            //   })
            // }
          }
        })
      },
    },
  }

</script>

<style scoped>
  .box {
    position: relative;
    width: 310px;
    height: 310px;
    margin: 1rem auto 0;

  }
  .luck-draw {
    width: 270px;
    height: 270px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }
.tip1{
  padding: 0.5rem;
  color: #000000;
  text-align: left;
}
  .topItem {
    line-height: 1;
    /*background-color: #fff !important;*/
    /*color: #000;*/
  }
  .topItem .van-cell__left-icon{
    height: 46px;
    width: 46px;
    background-color: #EBEBED;
    border-radius: 100%;
    overflow: hidden;
    margin-right:1rem;
  }
  .topItem .van-icon__image{
    width: 100%;
    height: 100%;
  }
  .topItem .van-cell__label{
    line-height: 1.2rem;
    margin-top: 0.25rem;
    color: #88879A;
  }
  .topItem .profit{
    /*background-color: rgba(255, 255, 255, .5);*/
    /*border-radius: 100px;*/
    display: flex;
    align-items: center;
    padding: 3px 8px;
    font-size: 2rem;
    color: #662282;
    font-weight: 600;
  }
  .topItem .profit img{
    margin-right: 5px;
  }
  .Title1{
    /*margin-top: 1rem;*/
    font-weight: bolder;
  }
  .recordBtn{
    color: #000000;
    float: right;
    border: 1px solid #361c1c;
    border-radius: 10px;
    padding: 5px 10px;
    /*position: absolute;*/
    /*right: 10px;*/
    /*top: 5px;*/
  }
  .info{
    line-height: 1.5rem;
    color: #333;
    /*background: #fff;*/
  }
  .info p{
    margin-bottom: 5px;
    color: #bbb;
  }

  .xz {
    -webkit-transform: rotate(360deg);
    animation: rotation 10s linear infinite;
    -moz-animation: rotation 10s linear infinite;
    -webkit-animation: rotation 10s linear infinite;
    -o-animation: rotation 10s linear infinite;
  }
  @-webkit-keyframes rotation {from {-webkit-transform: rotate(0deg);}to {-webkit-transform: rotate(360deg);}}

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
    background-color: #662282
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
    background-color: #662282!important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: #662282!important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  /*.el-pagination.is-background .el-pager li:not(.disabled).active {*/
  /*  background-color: #662282!important*/
  /*}*/

  /*.el-pagination.is-background .el-pager li:not(.active):hover {*/
  /*  color: #662282!important*/
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
    color: #662282;
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: #662282
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
    color: #662282
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #662282!important;
    border-color: #662282!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #662282!important
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
      background-color: #662282
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
      background-color: #662282
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
  .payment-info {
    font-size: 1.2rem;
  }
  .payment-info img {
    width: 100%;
  }
  .aaa {
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .info {
    overflow: hidden;
    word-break: break-word;
    font-size: 1.5rem;
  }
  .info p span {
    text-wrap:none !important;
  }
.info img {
  width: 100% !important;
}
.info>>> img {
  width: 100% !important;
}
</style>
