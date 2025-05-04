<template>
  <div class="HomePage" id="app">
    <UserHeader></UserHeader>
    <div class="app-wrapper" style="width: calc(100% - 25rem);">
      <div class="page-header">
        <div class="page-title">{{$t('head[10]')}}</div>
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
        <div class="product-list">
          <div class="product-item" v-for="(item,index) in listData" :key="index">
            <div class="img-box">
              <img
                :src="InitData.setting.up_url + item.icon"
                class="img"
              />
            </div>
            <div class="right">
              <div class="name">
                {{item.title}}
              </div>
              <div class="bottom">
                <div class="info-list">
                  <div class="info-item">
                    <div class="label">{{$t('product[0]')}}</div>
                    <div class="value">${{item.amount}}</div>
                  </div>
                  <div class="info-item">
                    <div class="label">{{$t('product[2]')}}</div>
                    <div class="value">{{item.cycle}} {{$t('product[15]')}}</div>
                  </div>
                  <div class="info-item">
                    <div class="label">{{$t('product[3]')}}</div>
                    <div class="value">${{(item.daily_rate/100*item.amount).toFixed(2)}}</div>
                  </div>
                  <div class="info-item">
                    <div class="label">{{$t('product[4]')}}</div>
                    <div class="value">${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*item.cycle).toFixed(2))}}</div>
                  </div>
                  <div class="info-item">
                    <div class="label">{{$t('product[5]')}}</div>
                    <div class="value" style="color: rgb(255, 0, 0)">
                      ${{item.amount}} + ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*item.cycle).toFixed(2))}}
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="label">{{$t('product[6]')}}</div>
                    <div class="value rebate">{{item.type==1?$t('product[7]'):$t('product[17]')}}</div>
                  </div>
<!--                  <div class="info-item">-->
<!--                    <div class="label">{{$t('product[9]')}}</div>-->
<!--                    <div class="value">{{item.miner}}</div>-->
<!--                  </div>-->
<!--                  <div class="info-item">-->
<!--                    <div class="label">{{$t('product[8]')}}</div>-->
<!--                    <div class="value">{{item.hash_power}}</div>-->
<!--                  </div>-->
                </div>
                <div class="right-actions">
                  <div class="bonus" v-if="item.amount!=12">
                    <div class="label">{{$t('product[10]')}}</div>
                    <ul class="plan-referral justify-content-center mb-2">
                      <div class="single-referral" v-for="(aa,i) in item.affiliate_bonus">
                        <span>{{aa}} %</span>
                        <p>{{$t('affiliates[13]')}} {{(i+1)}}</p>
                      </div>
                    </ul>
                  </div>
                  <div class="buy-btn disabled-btn" v-if="item.progress>=100">{{$t('product[13]')}}</div>
                  <div class="buy-btn " v-else @click="$router.push(`/productDetail?id=${item.id}`)">{{$t('product[12]')}}</div>
                </div>
              </div>

            </div>
            <div class="progress">
              <van-progress :percentage="item.progress" stroke-width="8" track-color="#ccc" color="linear-gradient(to right, rgb(170, 170, 170), rgb(3 117 235))"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import UserHeader from '@/components/UserHeader'
  export default {
    name: 'transaction',
    components: {
      UserHeader
    },
    data() {
      return {
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
      getListData(type) {
        this.$Model.ProductList({}, data => {
          this.listData = data.data;
        });
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
    background-color: rgb(13,110,253)
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

  @keyframes tobig-f458d49a {
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
    background-color: rgb(13,110,253)!important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: rgb(13,110,253)!important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  /*.el-pagination.is-background .el-pager li:not(.disabled).active {*/
  /*  background-color: rgb(13,110,253)!important*/
  /*}*/

  /*.el-pagination.is-background .el-pager li:not(.active):hover {*/
  /*  color: rgb(13,110,253)!important*/
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
    color: rgb(13,110,253);
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: rgb(13,110,253)
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

  .container .product-list .product-item .progress {
    /*手机*/
    position: absolute;
    left: 2rem;
    bottom: 0rem;
    width: calc(100% - 4rem);
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
    color: rgb(13,110,253)
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: rgb(13,110,253)!important;
    border-color: rgb(13,110,253)!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: rgb(13,110,253)!important
  }

  @media only screen and (min-width: 1024px) {
    .container .product-list,.container {
      width:100%
    }

    .container .product-list .product-item {
      display: flex;
      width: 100%
    }
    .container .product-list .product-item .progress {
      position: absolute;
      left: 34rem;
      bottom: 0rem;
      width: calc(100% - 36rem);
    }
    .container .product-list .product-item:not(:last-child) {
      margin-bottom: 3rem
    }

    .container .product-list .product-item .img-box {
      position: relative;
      min-width: 30rem;
      max-width: 30rem;
      min-height: 26rem;
      overflow: hidden
    }

    .container .product-list .product-item .img-box .img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: fill;
    }

    .container .product-list .product-item .right {
      padding-bottom: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      min-height: 26rem;
      box-sizing: border-box;
      padding: 0 3rem;
      background-color: #fff
    }

    .container .product-list .product-item .right .name {
      width: 100%;
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .product-list .product-item .right .name .countdown {
      font-size: 1.8rem;
      color: #28c76f
    }

    .container .product-list .product-item .right .name .countdown i {
      margin-right: 2px;
      font-size: 1.9rem;
      font-weight: 700
    }

    .container .product-list .product-item .right .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%
    }

    .container .product-list .product-item .right .bottom .info-list {
      display: flex;
      flex-wrap: wrap;
      width: 100%
    }

    .container .product-list .product-item .right .bottom .info-list .info-item {
      width: 25%;
      box-sizing: border-box;
      padding-right: 2rem
    }

    .container .product-list .product-item .right .bottom .info-list .info-item:nth-child(n+5) {
      margin-top: 2rem
    }

    .container .product-list .product-item .right .bottom .info-list .info-item .label {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 1.5rem;
      color: #333;
      word-wrap: break-word
    }

    .container .product-list .product-item .right .bottom .info-list .info-item .value {
      width: 100%;
      font-size: 1.6rem;
      font-weight: 700;
      color: #000;
      word-break: break-all
    }

    .container .product-list .product-item .right .bottom .info-list .info-item .rebate {
      word-break: keep-all
    }

    .container .product-list .product-item .right .bottom .right-actions {
      display: flex;
      flex-direction: column;
      align-items: center
    }

    .container .product-list .product-item .right .bottom .right-actions .bonus {
      min-width: 16rem;
      max-width: 16rem;
    }

    .container .product-list .product-item .right .bottom .right-actions .bonus .label {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 1.5rem;
      color: #333;
      text-align: center;
      word-wrap: break-word
    }

    .container .product-list .product-item .right .bottom .right-actions .bonus .value {
      width: 100%;
      font-size: 1.6rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-break: break-all
    }

    .container .product-list .product-item .right .bottom .right-actions .buy-btn {
      height: 5rem;
      line-height: 5rem;
      box-sizing: border-box;
      padding: 0 2.5rem;
      border-radius: 5rem;
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg,#6baaf7,#072f77);
      cursor: pointer
    }

    .container .product-list .product-item .right .bottom .right-actions .disabled-btn {
      color: #333!important;
      background-image: linear-gradient(90deg,#c5c5c5,#c5c5c5)
    }
  }

  @media only screen and (max-width: 1024px) {
    .container .product-list .product-item,.container .product-list,.container {
      width:100%
    }

    .container .product-list .product-item:not(:last-child) {
      margin-bottom: 2rem
    }

    .container .product-list .product-item .img-box {
      position: relative;
      width: 100%
    }

    .container .product-list .product-item .img-box .img {
      display: block;
      width: 100%
    }

    .container .product-list .product-item .right {
      width: 100%;
      padding-bottom: 2rem;
      box-sizing: border-box;
      padding: 1rem 1rem 1.5rem;
      background-color: #fff
    }

    .container .product-list .product-item .right .name {
      width: 100%;
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .product-list .product-item .right .name .countdown {
      display: block;
      font-size: 1.5rem;
      color: #28c76f
    }

    .container .product-list .product-item .right .name .countdown i {
      margin-right: 2px;
      font-size: 1.6rem;
      font-weight: 700
    }

    .container .product-list .product-item .right .bottom {
      width: 100%
    }

    .container .product-list .product-item .right .bottom .info-list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: 2rem
    }

    .container .product-list .product-item .right .bottom .info-list .info-item {
      width: 50%;
      box-sizing: border-box;
      padding-right: 1rem
    }

    .container .product-list .product-item .right .bottom .info-list .info-item:nth-child(n+3) {
      margin-top: 1.2rem
    }

    .container .product-list .product-item .right .bottom .info-list .info-item .label {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 1.5rem;
      color: #333;
      word-wrap: break-word
    }

    .container .product-list .product-item .right .bottom .info-list .info-item .value {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
      word-break: break-all
    }

    .container .product-list .product-item .right .bottom .right-actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%
    }

    .container .product-list .product-item .right .bottom .right-actions .bonus {
      width: 100%;
    }

    .container .product-list .product-item .right .bottom .right-actions .bonus .label {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 1.5rem;
      color: #333;
      word-wrap: break-word
    }

    .container .product-list .product-item .right .bottom .right-actions .bonus .value {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
      word-break: break-all
    }

    .container .product-list .product-item .right .bottom .right-actions .buy-btn {
      width: 100%;
      margin-top: 2rem;
      height: 4.5rem;
      line-height: 4.5rem;
      box-sizing: border-box;
      padding: 0 2rem;
      border-radius: 4.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg,#6baaf7,#072f77);
      cursor: pointer
    }

    .container .product-list .product-item .right .bottom .right-actions .disabled-btn {
      color: #333!important;
      background-image: linear-gradient(90deg,#c5c5c5,#c5c5c5)
    }
  }
  .container .product-list .product-item {
    position: relative;
  }
  .bottom {
    padding-bottom: 1rem;
  }
</style>
