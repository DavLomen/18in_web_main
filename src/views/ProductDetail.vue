<template>
  <div class="HomePage">
    <Header></Header>
    <section  class="item-detail-section section-space">
      <div  class="container">
        <div  class="row">
          <div  class="el-col-24 el-col-md-11">
            <div  class="item-detail-content">
              <div  class="item-detail-img-container">
                <div v-if="detailData.progress>=100" class="sell_out"><img  :src="'./static/img/sold-out.49599a59.png'" alt=""></div>
                <img  class="product-img-top w-100 rounded-3" alt="" title=""
                     :src="InitData.setting.up_url + detailData.icon">
              </div>
            </div>
          </div>
          <div  class="el-col-24 el-col-md-12">
            <div  class="item-detail-content mt-4 mt-lg-0">
              <h1  class="item-detail-title">{{detailData.title}}</h1>
              <br >
              <div  class="item-detail-meta mb-3">
                <div  class="row g-0">
                  <div  class="el-col-10 value-item">
                    <div  class="label">{{$t('product[2]')}}</div>
                    <div  class="value">{{detailData.cycle}} {{$t('product[18]')}}</div></div>
                  <div  class="el-col-10 value-item">
                    <div  class="label">{{$t('product[0]')}}</div>
                    <div  class="value">$ {{detailData.amount}}</div></div>
                  <div  class="el-col-10 value-item">
                    <div  class="label">{{$t('product[3]')}}</div>
                    <div  class="value">
                      ${{(detailData.daily_rate/100*detailData.amount).toFixed(2)}}
                    </div></div>
                  <div  class="col-12 value-item">
                    <div  class="label">{{detailData.cycle}} {{$t('product[21]')}}</div>
                    <div  class="value">
                      ${{detailData.amount}} + ${{parseFloat((parseFloat(detailData.daily_rate)/100*detailData.amount*detailData.cycle).toFixed(2))}}
                    </div></div>
                  <div  class="col-12">
                    <div  class="col-12 progress-wrap">
                      <div  class="left">{{$t('product[22]')}}</div>
                      <div  class="right">
                        <div  class="progress-box">
                          <div  class="progress" role="progressbar" aria-label="Animated striped example" aria-valuemin="0" aria-valuemax="100" :aria-valuenow="detailData.progress">
                            <div  :class="'progress-bar progress-bar-striped progress-bar-animated '+(detailData.progress>=100?'bar-color_over':'bar-color_proceed')" :style="'width: '+detailData.progress+'%'">{{detailData.progress}}%</div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div  class="col-12" v-if="detailData.progress<100">
                    <div  class="item-detail-btns mt-5">
                      <ul  class="btns-group d-flex">
                        <li  class="flex-grow-1" style="max-width: 300px;">
                          <a  href="javascript:;" @click="showDialog=true" class="btn btn-dark d-block">{{$t('buy[0]')}}</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  class="row mt-4">
          <div  class="item-detail-tab">
<!--            <ul  class="nav nav-tabs nav-tabs-s1" id="myTab" role="tablist">-->
<!--              <li  class="nav-item" role="presentation">-->
<!--                <button  class="nav-link active" data-bs-toggle="tab" type="button" aria-selected="true" role="tab">{{$t('productDetail[0]')}}</button></li>-->
<!--            </ul>-->
            <div style="color: #e73329" v-if="detailData.amount>100">
              {{$t('ppp[1]')}}
            </div>
            <pre><div v-if="detailData.amount==10 || detailData.amount==100" class="ram_detail" style="border-radius: 10px; border: 2px solid #ffc107; padding: 15px 35px; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; font-family: Helvetica; text-transform: none; white-space: normal;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMzSURBVHgB7VdLUttAEB2NMGyAKDuqQEYu8qmsIk4Qc4LACSAniDkB9gnIDTAnwJwAOAHOKlVJwCqwC5YCwwL06bx2JJCxJY9SUGHBqxp7RurpeTP9mZYQL/jP0PIItyzL8DxvWZfyExFZmqZZ+HfxykW/KdGElAclx3FUdSoRwMJWGASb6C4LNdSlrtdUiIwkcFQsVgXRRjzGjvcxqYHdOhNjY80botfC91+FQtg4hWUSohzLhkS1t+129Z8I8HFTEOwkFH677HZri67rigz8mJmxxgsFJrwWEW52r66W0uZpqYuH4R4m2xg6kmit1G4fiByADhtm20HXyiIhh01me8eL33reUt7FGbB/k+eyDpjGnp6a2hwmN3ACv01zDQ+30HWhYPHD+bmTtgjL6ppGpZOT7TQZNsnE+PghNmT4vr/y/uyskXw/cAJwrp7DwQSVrMU5MpgoHK3+c3bWTpNjHUEQ1LhfKBQ2RRZ4R0emSWgtoQDIbaHtqMgem+Ye626Z5ufk87HkAMexCq/n3VeFAhZOT78IRcAPGjBDOSCqYLibWPMecch5QZDb6UZCyu2ISJ+57ghw2PRIIGSybJ/EcbHY4qYii6jgEHTQjKTP3BGAhxpR1xWK4PuAm1BHk380ovkBArEiHJEjng5utIYxQEBKGe/cEE8EhK3F/3pik3cEdF2PH9riqRDt3CO6GCAg/qZMPgXr0DAe/RQ4cUXpXbzrdJoDBHpeigjg/vTk5Kp4ZCAblvmfr/Pk87484IdhL1ZJvfBQRpziwaCeSgC5mi8KNkUZhUhFjEBkMmeUHKf4KMqcN53OdioBNgN2vx4x3WC7ZSm+uLwsoUhZzJJhHdh97xIaluK1FMZ1vFjlnKBJuZSnyHy4eFTYWBjWh90dQwsShGSFq9xepoOCrOs2Db/m5srx4pzecVLrw+Sya8L7soyhVOnyvJCPmugrj9nrUY6t5KoJ+xQWixsoOqrxmBXiu6CBiPnO3wRwXPf25sZGITqPcV9VDOHqQrtdy9Kv9F3wsNIdBRBpeL6/rnKr5voyYiLwjzJO4CMm2jgZgy8W9B3iFob73evr3VGl+wueFf4Apau8q/LsijQAAAAASUVORK5CYII=" style="width: 32px;" data-filename="info.png">
                <span v-if="detailData.amount==10">{{$t('limits[0]')}}</span>
                <span v-if="detailData.amount==100">{{$t('limits[1]')}}</span>
              </div></pre>
            <div  class="tab-content mt-3" id="myTabContent">
              <div  class="tab-pane fade show active" id="detail" role="tabpanel" aria-labelledby="detail-tab">
                <div  class="item-detail-tab-wrap">
                  <div >
                    <div>{{$t('productDetail[1]')}}
                      <br>
                      <br>{{$t('productDetail[2]')}}
                      <br>
                      <br>{{$t('productDetail[3]')}}
                      <br>
                      <br>{{$t('productDetail[4]')}}
                      <br>
                      <br>{{$t('productDetail[5]')}}
                      <br>
                      <br>{{$t('productDetail[6]')}}
                      <br>
                      <br>{{$t('productDetail[7]')}}
                      <br>
                      <br>{{$t('productDetail[8]')}}
                      <br>
                      <br>{{$t('productDetail[9]')}}
                      <br>
                      <br>{{$t('productDetail[10]')}}
                      <br>
                      <br>{{$t('productDetail[11]')}}
                      <br>
                      <br>{{$t('productDetail[12]')}}
                      <br>
                      <br>{{$t('productDetail[13]')}}
                      <div style="color: #000" v-if="detailData.agreement && detailData.agreement !=''" v-html="detailData.agreement">
                      </div>
<!--                      <br>{{$t('productDetail[14]')}}-->
<!--                      <br>-->
                      <br>{{$t('productDetail[15]')}}
                      <br>
                      <br>{{$t('productDetail[16]')}}
                      <br>
                      <br>{{$t('productDetail[17]')}}
                      <br>
                      <br>{{$t('productDetail[18]')}}
                      <br>
                      <br>{{$t('productDetail[19]')}}
                      <br>
                      <br>{{$t('productDetail[20]')}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<!--    <section   class="related-product-section section-space-b pt-5">-->
<!--      <div  class="container">-->
<!--        <div  class="section-head text-center">-->
<!--          <h2 class="">{{$t('productDetail[12]')}}</h2>-->
<!--          </div>-->
<!--        <div  class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">-->
<!--          <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">-->
<!--            <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>-->
<!--          </div>-->
<!--          <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);"></div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
    <div class="el-overlay" style="z-index: 2003;" v-if="showDialog">
      <div role="dialog" aria-modal="true" aria-label="Checkout" aria-describedby="el-id-9097-0" class="el-overlay-dialog">
        <div class="el-dialog buynow" tabindex="-1">
          <header class="el-dialog__header">
            <div  class="dialog-title">{{$t('product[26]')}}</div>
            <button @click="showDialog = false" aria-label="Close this dialog" class="el-dialog__headerbtn" type="button">
              <i class="el-icon el-dialog__close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
                </svg>
              </i>
            </button>
          </header>
          <div id="el-id-9097-0" class="el-dialog__body">
            <div >
              <div  class="el-row mb-4">
                <label  class="font-weight-bold col-12 input_label">{{$t('buy[1]')}}</label>
<!--                <label  class="font-weight-bold col-12 input_label">{{$t('product[27]')}}</label>-->
                <div  class="col-12">
<!--                  <van-stepper v-model="money" input-width="inherit" button-size="40px" />-->
                  <input autocomplete="off" v-model.trim="money" type="text" class="form-control animated">
                </div>
              </div>
              <div  class="el-row mb-4">
                <label  class="font-weight-bold input_label">{{$t('walletAddress[2]')}}</label>
                <div  class="el-input el-input--large el-input--suffix">
                  <div class="el-input__wrapper" tabindex="-1">
                    <input class="el-input__inner" v-model="password" :type="showPass?'text':'password'" autocomplete="off" tabindex="0" id="el-id-9097-3">
                    <span class="el-input__suffix" @click="showPass= !showPass"><span class="el-input__suffix-inner">
                      <i v-if="!showPass" class="el-icon el-input__icon el-input__password"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"></path><path fill="currentColor" d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"></path></svg></i>
                      <i v-else class="el-icon el-input__icon el-input__password"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"></path></svg></i>
                    </span></span>
                  </div>
                </div>
              </div>
              </div>
          </div>
          <footer class="el-dialog__footer">
            <div  class="row d-md-flex align-items-center justify-content-center justify-content-md-between">
              <div  class="col-12 col-md-6">
                <div  class="amount">
<!--                  <div  class="title">{{$t('product[29]')}}</div>-->
<!--                  <div  class="content">= {{money}} USDT-->
<!--                    <svg data-v-cbf2c648=""  class="svg-icon" aria-hidden="true" style="font-size: 19px; margin-left: 12px;">-->
<!--                      <use data-v-cbf2c648="" xlink:href="#icon-USDT-TRC20"></use></svg>-->
<!--                  </div>-->
                </div>
              </div>
              <div  class="col-12 col-md-6 mt-5 mt-md-0 d-flex justify-content-center justify-content-md-end">
                <button  href="javascript:;" class="btn btn-dark" style="width: 211px;" @click="buyProduct">{{$t('buy[0]')}}</button></div>
            </div>
          </footer>
        </div>
      </div>
    </div>
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
        money:'',
        password:'',
        showPass: false,
        detailData:{},
        review:'0',
        isAgree:true,
        showDialog:false,
      }
    },

    computed: {
    },
    watch: {
      // 'money': function (val) {
      //   if (val == "") {
      //     val = 0;
      //   }
      //   this.review = val + "+("+val+"*"+this.detailData.daily_rate+"*"+this.detailData.cycle+")="+(parseFloat(val)+(parseFloat(val)*parseFloat(this.detailData.daily_rate)/100*parseFloat(this.detailData.cycle)));
      // }
    },
    created() {
      let id = this.$route.query.id;
      this.getInfoData(id);
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      getInfoData(id) {
        let that = this;
        this.$Model.ProductDetail(id, data => {
          that.detailData = data.data;
          if (localStorage.getItem("agreement")) {
            that.detailData.agreement = that.detailData.agreement +'<br>'+ localStorage.getItem("agreement");
          }
          if (data.data.amount == 10) {
            that.money = data.data.amount;
          }
          //
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
  .item-detail-img-container{
    position: relative
  }

  .sell_out{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,.5);
    z-index: 2
  }

  .sell_out img{
    height: 8rem;
    z-index: 3
  }

  .item-detail-meta .value-item{
    margin-bottom: .625rem
  }

  .item-detail-meta .value-item .label{
    font-size: 1rem;
    font-weight: 400;
    color: #8492a6;
    line-height: 2rem
  }

  .item-detail-meta .value-item .value{
    font-size: 1.1rem;
    font-weight: 600;
    color: #273444;
    line-height: 2rem
  }

  .item-detail-meta .progress-wrap{
    display: flex;
    align-items: center;
    margin-top: .625rem
  }

  .item-detail-meta .progress-wrap .left{
    font-size: .9rem;
    font-weight: 400;
    color: #8492a6;
    line-height: .8rem
  }

  .item-detail-meta .progress-wrap .right{
    flex: 1;
    width: 0;
    margin-left: .875rem
  }

  .item-detail-meta .progress-wrap .right .progress-box{
    height: 1.1rem;
    position: relative;
    overflow: hidden
  }

  .item-detail-meta .progress-wrap .right .progress-box .progress{
    height: 100%;
    background: #e9ecef
  }

  .item-detail-meta .item-detail-btns{
    padding: .5rem .3rem;
    font-size: .825rem
  }

  @media screen and (min-width: 600px) {
    .sell_out img{
      height:10rem
    }
  }

  .buynow {
    margin-top: 15vh;
    width: 90%;
    max-width: 650px;
  }
  .el-input-number--large .el-input-number__decrease, .el-input-number--large .el-input-number__increase {
    width: 40px;
    font-size: 14px;
  }
  .el-icon {
    --color: inherit;
    height: 1em;
    width: 1em;
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    fill: currentColor;
    color: inherit;
    font-size: inherit;
  }
  .el-input-number .el-input__inner {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    text-align: center;
    line-height: 1;
  }
  .el-icon svg {
    height: 1em;
    width: 1em;
  }
  .el-input__suffix-inner {
    pointer-events: all;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .el-input .el-input__icon {
    height: inherit;
    line-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    margin-left: 8px;
  }
  img, svg {
    vertical-align: middle;
  }
  .col-12>>>.van-stepper {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .col-12>>>.van-stepper__input {
    background: #fff;
    box-shadow: 0 0 0 1px #dcdfe6 inset;
    margin: 0px;
  }
  .item-detail-tab-wrap {
    color: #000000;
  }
</style>


