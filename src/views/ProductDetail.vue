<template>
  <div class="HomePage">
    <Header></Header>
<!--    <div class="app-wrapper">-->
<!--      <div class="container">-->
<!--        <div class="main">-->
<!--          <div class="top">-->
<!--          <div style="position: relative;" class="image_border">-->
<!--              <img-->
<!--                class="product-img"-->
<!--                :src="InitData.setting.up_url + detailData.icon"-->
<!--              />-->
<!--          </div>-->
<!--          <div class="">-->
<!--            <div class="plan-title">{{detailData.title}}</div>-->
<!--            <div class="pricing">-->
<!--              <h1>${{parseFloat(detailData.amount)}}</h1>-->
<!--              <p>/{{detailData.cycle}} {{$t('product[15]')}}-->
<!--              </p>-->
<!--            </div>-->
<!--            <div class="description">-->
<!--              <p><img :src="'./static/image//Circle_Check.svg'"> {{$t('product[2]')}}: <span class="notranslate">{{detailData.cycle}} {{$t('product[15]')}}-->
<!--                            </span></p>-->
<!--              <p><img :src="'./static/image//Circle_Check.svg'"> {{$t('product[0]')}}: <span class="notranslate">${{detailData.amount}}</span></p>-->
<!--              <p><img :src="'./static/image//Circle_Check.svg'"> {{$t('product[3]')}}: <span class="notranslate">${{parseFloat((parseFloat(detailData.daily_rate)/100*detailData.amount*1).toFixed(2))}}</span></p>-->
<!--              <p><img :src="'./static/image//Circle_Check.svg'"> {{$t('product[4]')}}: <span class="notranslate">${{parseFloat((parseFloat(detailData.daily_rate)/100*detailData.amount*detailData.cycle).toFixed(2))}}</span></p>-->
<!--              <p><img :src="'./static/image//Circle_Check.svg'"> {{$t('settle[0]')}}:<span class="notranslate">{{$t('settle[1]')}}</span></p>-->
<!--            </div>-->
<!--          </div>-->
<!--          </div>-->
<!--          <div class="container-fluid">-->
<!--            <div class="flexc">-->
<!--              <div class="main-btn buy_bt" style="height: 48px; margin-top: 19px;"  @click="orderNow()">{{$t('settle[5]')}}</div>-->
<!--            </div>-->

<!--            <div class="block-input new-collection" style="width: 100%;border-radius: 10px;font-weight: 600;font-size: 18px; margin-top: 21px; height: 61px; margin-bottom: 15px;">Details</div>-->
<!--            <div class="description-block-2">-->
<!--              <pre><div class="ram_detail" style="border-radius: 10px; border: 2px solid var(&#45;&#45;blue-blue-300, #2A92CD); padding: 15px 35px; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; font-family: Helvetica; text-transform: none; white-space: normal;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMzSURBVHgB7VdLUttAEB2NMGyAKDuqQEYu8qmsIk4Qc4LACSAniDkB9gnIDTAnwJwAOAHOKlVJwCqwC5YCwwL06bx2JJCxJY9SUGHBqxp7RurpeTP9mZYQL/jP0PIItyzL8DxvWZfyExFZmqZZ+HfxykW/KdGElAclx3FUdSoRwMJWGASb6C4LNdSlrtdUiIwkcFQsVgXRRjzGjvcxqYHdOhNjY80botfC91+FQtg4hWUSohzLhkS1t+129Z8I8HFTEOwkFH677HZri67rigz8mJmxxgsFJrwWEW52r66W0uZpqYuH4R4m2xg6kmit1G4fiByADhtm20HXyiIhh01me8eL33reUt7FGbB/k+eyDpjGnp6a2hwmN3ACv01zDQ+30HWhYPHD+bmTtgjL6ppGpZOT7TQZNsnE+PghNmT4vr/y/uyskXw/cAJwrp7DwQSVrMU5MpgoHK3+c3bWTpNjHUEQ1LhfKBQ2RRZ4R0emSWgtoQDIbaHtqMgem+Ye626Z5ufk87HkAMexCq/n3VeFAhZOT78IRcAPGjBDOSCqYLibWPMecch5QZDb6UZCyu2ISJ+57ghw2PRIIGSybJ/EcbHY4qYii6jgEHTQjKTP3BGAhxpR1xWK4PuAm1BHk380ovkBArEiHJEjng5utIYxQEBKGe/cEE8EhK3F/3pik3cEdF2PH9riqRDt3CO6GCAg/qZMPgXr0DAe/RQ4cUXpXbzrdJoDBHpeigjg/vTk5Kp4ZCAblvmfr/Pk87484IdhL1ZJvfBQRpziwaCeSgC5mi8KNkUZhUhFjEBkMmeUHKf4KMqcN53OdioBNgN2vx4x3WC7ZSm+uLwsoUhZzJJhHdh97xIaluK1FMZ1vFjlnKBJuZSnyHy4eFTYWBjWh90dQwsShGSFq9xepoOCrOs2Db/m5srx4pzecVLrw+Sya8L7soyhVOnyvJCPmugrj9nrUY6t5KoJ+xQWixsoOqrxmBXiu6CBiPnO3wRwXPf25sZGITqPcV9VDOHqQrtdy9Kv9F3wsNIdBRBpeL6/rnKr5voyYiLwjzJO4CMm2jgZgy8W9B3iFob73evr3VGl+wueFf4Apau8q/LsijQAAAAASUVORK5CYII=" style="width: 32px;" data-filename="info.png">Each account is limited to 1 copy per day.</div></pre>-->

<!--              <h3><b>Purchase instructions</b></h3><h6>Please understand the product carefully before placing an order. If you have any questions, please consult customer service. After placing an order, the mining contract takes effect immediately upon confirmation of payment. All purchases are final and non-refundable unless otherwise required by applicable law or a specific offer.</h6><h3><br></h3><h3>Describe</h3><p><span style="color: rgb(79, 79, 79); font-size: 16px; font-weight: 600; text-transform: capitalize;">This Project Is A Free Trial Project, You Can Use 50 Trial Credits To Purchase It. Profits Can Be Withdrawn Or Used To Purchase Other Investment Plans</span><br></p><h3><b><br></b></h3><h3><b>Calculate output</b></h3><h6>For calculation of mining income, please refer to Enthusiasts pool: https://gemminers.com/xml/index.html#/product</h6><p><br></p><h3><b>Output settlement</b></h3><h6>After the contract expires, the mining machine will stop running, and the system will settle the principal and profit for you; users can only withdraw money if they meet the minimum amount requirement set by the platform.</h6><p><br></p><h3><b>Termination of contract</b></h3><h6>The contract will be automatically terminated upon expiration. No refunds will be given for early termination. Thank you for your understanding.</h6><p><br></p><h3><b>Risk warning</b></h3><h6>Neither party is responsible for power outages or damage to mines or mining machines caused by natural disasters (floods, mudslides, earthquakes, hurricanes, etc.), policy impacts (national publications and documents, etc.), war, political unrest, etc. Other force majeure events.</h6>            </div>-->

<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="mask" v-if="showDialog">-->
<!--      <div class="modal">-->
<!--        <div class="modal-header">-->
<!--          <div class="modal-title">{{$t('settle[6]')}}</div>-->
<!--          <div class="close" @click="showDialog = false"><i class="el-icon-close"></i></div>-->
<!--        </div>-->
<!--        <div class="modal-body">-->
<!--          <div class="buynow" tabindex="-1">-->
<!--            <div id="el-id-9097-0" class="el-dialog__body">-->
<!--              <div >-->
<!--                <div  class="flex-4">-->
<!--                  <label  class="font-weight-bold col-12 input_label">{{$t('settle[7]')}}</label>-->
<!--                  <div  class="col-12">-->
<!--                    <van-stepper v-model="number" input-width="inherit" button-size="40px"/>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div  class="el-row mb-4">-->
<!--                  <label  class="font-weight-bold input_label">{{$t('settle[8]')}}</label>-->
<!--                  <div  class="el-input el-input&#45;&#45;large el-input&#45;&#45;suffix">-->
<!--                    <div class="el-input__wrapper" tabindex="-1">-->
<!--                      <input class="el-input__inner" v-model="money" readonly type="text" autocomplete="off" tabindex="0">-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div  class="el-row mb-4">-->
<!--                  <label  class="font-weight-bold input_label">{{$t('settle[9]')}}</label>-->
<!--                  <div  class="el-input el-input&#45;&#45;large el-input&#45;&#45;suffix">-->
<!--                    <div class="el-input__wrapper" tabindex="-1">-->
<!--                      <input class="el-input__inner" v-model="password" :type="showPass?'text':'password'" autocomplete="off" tabindex="0" id="el-id-9097-3">-->
<!--                      <span class="el-input__suffix" @click="showPass= !showPass"><span class="el-input__suffix-inner">-->
<!--                      <i v-if="!showPass" class="el-icon el-input__icon el-input__password"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"></path><path fill="currentColor" d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"></path></svg></i>-->
<!--                      <i v-else class="el-icon el-input__icon el-input__password"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"></path></svg></i>-->
<!--                    </span></span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="centered">-->
<!--            <button @click="buyProduct" class="main-btn modal-submit" style="width: fit-content;min-width: 200px;height: 40px; margin-bottom: 10px; font-weight: 400;" type="submit">{{$t('settle[10]')}}</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <Footer></Footer>
  </div>
</template>
<script>
  export default {
    name: 'productDetail',
    components: {
    },
    data() {
      return {
        number:1,
        showDialog:false,
        money:'',
        password:'',
        showPass: false,
        detailData:{},
        review:'0',
        isAgree:true,
        view:0,
        agreement:'',
      }
    },

    computed: {
    },
    watch: {
      'number'() {
        this.money=this.number*this.detailData.amount
      }
      // 'money': function (val) {
      //   if (val == "") {
      //     val = 0;
      //   }
      //   this.review = val + "+("+val+"*"+this.detailData.daily_rate+"*"+this.detailData.cycle+")="+(parseFloat(val)+(parseFloat(val)*parseFloat(this.detailData.daily_rate)/100*parseFloat(this.detailData.cycle)));
      // }
    },
    created() {
      let id = this.$route.query.id;
      let view = this.$route.query.view;
      if (view != undefined && view != '' && view == '1') {
        this.view = 1;
        this.agreement = localStorage.getItem("agreement");
      } else {
        localStorage.setItem("agreement","");
        this.agreement = '';
      }
      this.getInfoData(id);

      // ttq.track('ViewContent', {
      //   "contents": [
      //     {
      //       "content_id": id, // string. ID of the product. Example: "1077218".
      //       "content_type": "product", // string. Either product or product_group.
      //       "content_name": "product" // string. The name of the page or product. Example: "shirt".
      //     }
      //   ],
      //   "value": "999", // number. Value of the order or items sold. Example: 100.
      //   "currency": "USD" // string. The 4217 currency code. Example: "USD".
      // });
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      buyProduct(){
        if (!this.UserInfo) {
          this.$router.push("/login");
          return false;
        }
        if (this.money == '') {
          this.$Dialog.Toast(this.$t('placehoder[0]'))
          return false;
        }
        if (this.password == '') {
          this.$Dialog.Toast(this.$t('placehoder[1]'))
          return false;
        }
        let data = {};
        data.pid = this.detailData.id;
        data.amount = this.money;
        data.fund_password = this.password;
        this.$Model.ProductBuy(data, data => {
          if(data.code==1){
            this.$router.push("/MyPackages")
          }
        });
      },
      orderNow() {
        this.money = this.detailData.amount;
        this.showDialog = true;
      },
      getInfoData(id) {
        this.$Model.ProductDetail(id, data => {
          this.detailData = data.data;
          // this.money = data.data.min_amount;
        });
      },
      buyProduct(){
        if (!this.UserInfo) {
          this.$router.push("/login");
          return false;
        }
        if (this.money == '') {
          this.$Dialog.Toast(this.$t('placehoder[0]'))
          return false;
        }
        if (this.password == '') {
          this.$Dialog.Toast(this.$t('placehoder[1]'))
          return false;
        }
        let data = {};
        data.pid = this.detailData.id;
        data.amount = this.money;
        data.fund_password = this.password;
        this.$Model.ProductBuy(data, data => {
          if(data.code==1){
            this.$router.push("/MyPackages")
          }
        });
      },
    }
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

  @keyframes tobig-0100368d {
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

    .container .main {
      width: 100%;
      box-sizing: border-box;
      padding: 8rem 3rem
    }

    .container .main .main-wrapper {
      width: 100%;
      max-width: 86rem;
      margin: 0 auto
    }

    .container .main .main-wrapper .box1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 4rem;
      border-radius: 1rem;
      margin-bottom: 2rem;
      background-color: #efefef
    }

    .container .main .main-wrapper .box1 .product-img {
      width: 30rem;
      margin-bottom: 3rem
    }

    .container .main .main-wrapper .box1 .product-name {
      width: 100%;
      margin-bottom: 2.5rem;
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .main .main-wrapper .box1 .form-item {
      width: 100%;
      margin-bottom: 3rem
    }

    .container .main .main-wrapper .box1 .form-item .label {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      color: #000;
      word-wrap: break-word
    }

    .container .main .main-wrapper .box1 .form-item .input-group {
      display: flex;
      align-items: center;
      width: 100%
    }

    .container .main .main-wrapper .box1 .form-item .input-group .input {
      width: 100%;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0 2rem;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      outline: none;
      font-size: 1.6rem;
      font-family: myFont;
      font-weight: 700;
      color: #000;
      background-color: #fff
    }

    .container .main .main-wrapper .box1 .form-item .input-group .price-input {
      border-right: none;
      border-radius: 4px 0 0 4px
    }

    .container .main .main-wrapper .box1 .form-item .input-group .sign {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0 1.2rem;
      border-radius: 0 4px 4px 0;
      font-size: 1.5rem;
      color: #fff;
      white-space: nowrap;
      background-color: #662282
    }

    .container .main .main-wrapper .box1 .info-list {
      width: 100%;
      margin-bottom: 4rem;
      border-radius: 5px;
      background-color: #fff
    }

    .container .main .main-wrapper .box1 .info-list .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 1.2rem 2rem
    }

    .container .main .main-wrapper .box1 .info-list .info-item:not(:last-child) {
      border-bottom: 1px dashed #e9e9e9
    }

    .container .main .main-wrapper .box1 .info-list .info-item .label {
      max-width: 48%;
      font-size: 1.5rem;
      color: #000;
      word-wrap: break-word
    }

    .container .main .main-wrapper .box1 .info-list .info-item .value {
      max-width: 48%;
      font-size: 1.6rem;
      font-weight: 700;
      color: #000;
      word-break: break-all
    }

    .container .main .main-wrapper .box1 .agree-box {
      width: 100%;
      margin-bottom: 2rem
    }

    .container .main .main-wrapper .box1 .agree-box .agree {
      color: #ff9d02;
      cursor: pointer
    }

    .container .main .main-wrapper .box1 .buy-btn {
      width: 100%;
      height: 5rem;
      line-height: 5rem;
      box-sizing: border-box;
      padding: 0 2rem;
      border-radius: 4px;
      font-size: 1.7rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg,#fe9500,#fade88);
      cursor: pointer
    }

    .container .main .main-wrapper .box2 {
      width: 100%;
      box-sizing: border-box;
      padding: 4rem;
      border-radius: 1rem;
      background-color: #efefef
    }

    .container .main .main-wrapper .box2 .title {
      width: 100%;
      margin-bottom: 4rem;
      font-size: 2.4rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .main .main-wrapper .box2 .content {
      width: 100%
    }
  }

  @media only screen and (max-width: 1024px) {

    .container .main {
      width: 100%;
      box-sizing: border-box;
      padding: 3rem 1rem
    }

    .container .main .main-wrapper {
      width: 100%
    }

    .container .main .main-wrapper .box1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 1rem 1.5rem;
      border-radius: .8rem;
      margin-bottom: 1.5rem;
      background-color: #efefef
    }

    .container .main .main-wrapper .box1 .product-img {
      width: 100%;
      margin-bottom: 2rem
    }

    .container .main .main-wrapper .box1 .product-name {
      width: 100%;
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .main .main-wrapper .box1 .form-item {
      width: 100%;
      margin-bottom: 2rem
    }

    .container .main .main-wrapper .box1 .form-item .label {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 1.5rem;
      color: #000;
      word-wrap: break-word
    }

    .container .main .main-wrapper .box1 .form-item .input-group {
      display: flex;
      align-items: center;
      width: 100%
    }

    .container .main .main-wrapper .box1 .form-item .input-group .input {
      width: 100%;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0 2rem;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      outline: none;
      font-size: 1.5rem;
      font-family: myFont;
      font-weight: 700;
      color: #000;
      background-color: #fff
    }

    .container .main .main-wrapper .box1 .form-item .input-group .price-input {
      border-right: none;
      border-radius: 4px 0 0 4px
    }

    .container .main .main-wrapper .box1 .form-item .input-group .sign {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0 1.2rem;
      border-radius: 0 4px 4px 0;
      font-size: 1.5rem;
      color: #fff;
      white-space: nowrap;
      background-color: #662282
    }

    .container .main .main-wrapper .box1 .info-list {
      width: 100%;
      margin-bottom: 2.5rem;
      border-radius: 4px;
      background-color: #fff
    }

    .container .main .main-wrapper .box1 .info-list .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 1.5rem
    }

    .container .main .main-wrapper .box1 .info-list .info-item:not(:last-child) {
      border-bottom: 1px dashed #e9e9e9
    }

    .container .main .main-wrapper .box1 .info-list .info-item .label {
      max-width: 48%;
      font-size: 1.5rem;
      color: #000;
      word-wrap: break-word
    }

    .container .main .main-wrapper .box1 .info-list .info-item .value {
      max-width: 48%;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
      word-break: break-all
    }

    .container .main .main-wrapper .box1 .agree-box {
      width: 100%;
      margin-bottom: 1.5rem
    }

    .container .main .main-wrapper .box1 .agree-box .agree {
      color: #ff9d02;
      cursor: pointer
    }

    .container .main .main-wrapper .box1 .buy-btn {
      width: 100%;
      height: 4.6rem;
      line-height: 4.6rem;
      box-sizing: border-box;
      padding: 0 2rem;
      border-radius: 4px;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg,#fe9500,#fade88);
      cursor: pointer
    }

    .container .main .main-wrapper .box2 {
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 1rem 1.5rem;
      border-radius: .8rem;
      background-color: #efefef
    }

    .container .main .main-wrapper .box2 .title {
      width: 100%;
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .main .main-wrapper .box2 .content {
      width: 100%
    }
  }
  .pricing {
    display: flex;
    align-items: center;
    grid-gap: 8px;
  }
  .pricing h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 60px;
    letter-spacing: -0.02em;
    color: #070A13;
    margin: 0;
  }
  .pricing p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #64748B;
    margin: 0;
  }
  .description p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #070A13;
    display: flex;
    align-items: center;
    grid-gap: 11px;
    margin-bottom: 15px;
  }
  .main-btn {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: fit-content;
    padding: 0.5rem 5rem;
    border: none;
    outline: none;
    background: linear-gradient(180deg, #B92183 0%, #662282 100%);
    border-radius: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    text-align: center;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
    transition: .2s ease;
  }
  .description-block-2 {
    font-size: 2rem;
  }
  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
  }
  h6 {
    font-size: 1.5rem;
  }
  .image_border {
    border-radius: 10px;
    border: 2px solid #662282;
    padding: 3px;
    max-width: 400px;
    height: fit-content;
  }
  .image_border img {
    width: 100%;
  }
  @media (max-width: 768px) {
    .top {
      width: 96%;
      margin: 0 auto;
    }
  }
  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {
    .top {
      display: flex;
      justify-content: space-evenly;
    }
  }


  .plan-title {
    color: #7F2483;
    font-family: 'Roboto';
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    text-align: left;
    margin-bottom: 20px;
    line-height: normal;
    max-width: 50rem;
  }
  .flexc {
    display: flex;
    justify-content: center;
  }
  .new-collection {
    background: #F0E9F3;
    border-radius: 0px 10px 10px 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #662282;
    display: flex;
    align-items: center;
    justify-content: center;
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
  .w-100 {
    width: 100%!important;
  }
  .flex-4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .gr-block {
    width: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
  .mb-4 {
    margin-top: 1rem;
  }
  .input_label {
    line-height: 3rem;
  }
  .col-12 >>>.van-stepper__input {
    width: 12rem !important;
  }
  .col-12 >>>.van-stepper__minus, .col-12 >>>.van-stepper__plus {
    background-color: #662282 !important;
    color: #ffffff !important;
  }
  .centered {
    display: flex;
    justify-content: center;
  }

</style>


