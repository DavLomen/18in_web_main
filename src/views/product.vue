<template>
  <div class="HomePage">
    <Header></Header>
    <section class="section-space trending-section" style="background: rgb(247, 249, 251);">
      <div class="container">
        <div class="section-head text-center">
          <h2 class="mb-3">{{$t('product[19]')}}</h2>
          <p>{{$t('product[20]')}}</p>
        </div>
        <div class="row g-4 gy-md-gs">
          <div class="section">
            <div class="container">
              <div class="row gy-4 gx-3 justify-content-center">
                <div class="col-md-6 col-lg-4" v-for="(item,index) in listData" :key="index">
                  <div class="plan-card" >
                    <div class="img-box">
                      <img
                        :src="InitData.setting.up_url + item.icon"
                        class="img" style="width: 100%"
                      />
                    </div>
                    <div class="plan-card__head">
                      <div class="badge-card mb-3">{{item.title}}</div>
                      <div class="pricing notranslate">
                        <h1>${{parseFloat(item.amount)}}</h1>
                        <p>/ {{item.cycle}}
                          {{$t('product[15]')}}
                        </p>
                      </div>
                      <div class="mt-0  text-left" style="color: #000000;font-weight: normal">
                        <van-icon name="passed" color="green" style="margin-right: 6px;"/>{{$t('product[9]')}}: {{item.miner}}
                      </div>
                      <div class="mt-0  text-left" style="color: #000000;font-weight: normal;">
                        <van-icon name="passed" color="green" style="margin-right: 6px;"/>{{$t('product[2]')}}: {{item.cycle}} {{$t('product[15]')}}
                      </div>

                      <!--                    <div class="mt-0  text-left" style="color: #000000">-->
                      <!--                      <van-icon name="passed" color="green" style="margin-right: 6px;"/>{{$t('product[8]')}}: {{item.hash_power}}-->
                      <!--                    </div>-->
                      <!--                    <div class="mt-0  text-left" style="color: #000000">-->
                      <!--                      <van-icon name="passed" color="green" style="margin-right: 6px;"/>{{item.amount}} {{InitData.currency}}/{{item.cycle}} {{$t('product[15]')}}-->
                      <!--                    </div>-->
                      <div class="mt-0  text-left" style="color: #000000;font-weight: normal;">
                        <van-icon name="passed" color="green" style="margin-right: 6px;"/>{{$t('product[0]')}}: ${{item.amount}}
                      </div>
                    </div>
                    <div class="pt-2 text-left" style="color: red">
                      <div class="mt-0  text-left"><van-icon name="passed" color="green" style="margin-right: 6px;"/> {{$t('settle[2]')}}: ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*1).toFixed(2))}}</div>
                      <div class="mt-0  text-left"><van-icon name="passed" color="green" style="margin-right: 6px;"/> {{$t('settle[3]')}}: ${{item.amount}} + ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*item.cycle).toFixed(2))}}</div>
                    </div>
                    <div class="pt-2 text-left" style="color: #000000">
                      <div class="mt-0  text-left"><van-icon name="passed" color="green" style="margin-right: 6px;"/>{{$t('settle[0]')}}:{{item.type==1?$t('product[7]'):$t('product[17]')}}</div>
                    </div>
                    <div class="bonus" v-if="item.amount!=12">
                      <div class="label">{{$t('product[10]')}}</div>
                      <ul class="plan-referral justify-content-center ">
                        <div class="single-referral" v-for="(aa,i) in item.affiliate_bonus">
                          <span>{{aa}} %</span>
                          <div>{{$t('affiliates[13]')}} {{(i+1)}}</div>
                        </div>
                      </ul>
                    </div>
                    <div v-else style="color:#000;height: 94px;">
                      {{$t('ppp[0]')}}
                    </div>
                    <!--                  <div class="mt-1 text-center">-->
                    <!--                    <div v-if="item.progress>=100" class="t-link btn btn--dark btn--lg rounded-pill investBtn">-->
                    <!--                      {{$t('product[13]')}}-->
                    <!--                    </div>-->
                    <!--                    <a v-else href="javascript:;" @click="$router.push(`/productDetail?id=${item.id}`)" class="t-link btn btn--dark btn--lg rounded-pill investBtn">-->
                    <!--                      {{$t('home[35]')}}-->
                    <!--                    </a>-->
                    <!--                  </div>-->
                    <div class="mt-1 text-center" style="display: flex;justify-content: space-between">
                      <a  href="javascript:;" style="width: 100%;height: fit-content;padding: 10px;margin: 5px;" @click="goDetail(item)" class="t-link btn btn--base btn--lg rounded-pill investBtn">
                        {{$t('settle[4]')}}
                      </a>
                      <div v-if="item.progress>=100" style="width: 100%;height: fit-content;padding: 10px;margin: 5px;" class="t-link btn btn--base btn--lg rounded-pill investBtn">
                        {{$t('product[13]')}}
                      </div>
                      <a v-else href="javascript:;" style="width: 100%;height: fit-content;padding: 10px;margin: 5px;" @click="orderNow(item)" class="t-link btn btn--base btn--lg rounded-pill investBtn">
                        {{$t('buy[0]')}}
                      </a>
                    </div>
                    <div class="mt-2 text-center">
                      <van-progress :percentage="item.progress" stroke-width="8" track-color="#ccc" color="linear-gradient(to right, #23cff1, #00070e)"/>
                    </div>
                    <img v-if="item.progress>=100" :src="'./static/images/out.png'" style="position: absolute;bottom: 3rem;right: 1rem;width: 8rem;">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import 'swiper/dist/css/swiper.css';

  export default {
    name: 'Home',
    inject: ['reloadHtml'],
    components: {
      swiper, swiperSlide,
    },
    data() {
      return {
        showDialog:false,
        detailData:{},
        password:'',
        money:'',
        showPass: false,
        listData:[],
        swiperOption: {
          loop: true,  // 是否循环轮播
          allowTouchMove:false,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          },
          slidesPerView: 3,  // 可是区域内可展示多少个块
          spaceBetween: 10,  // 块之间间隔距离
          initialSlide:0,  // 默认初始显示块
          freeMode: false,
          effect : 'coverflow',
          // 显示分页
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          // 设置点击箭头
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      this.loadProudcutList();

    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      goDetail(item) {
        if(item.progress<100){
          this.$router.push(`/productDetail?id=${item.id}`)
        }
      },
      orderNow(item) {
        this.detailData = item;
        if (item.amount == 10) {
          this.money = item.amount;
        } else {
          this.money = '';
        }
        this.showDialog = true;
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
      loadProudcutList(){
        this.$Model.ProductList({}, data => {
          this.listData = data.data;
        });
      },
    }
  }
</script>
<style scoped>

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
  .pricing {
    display: flex;
    align-items: center;
  }
  .badge-card {
    margin-bottom: 1rem;
  }
  .badge-card {
    color: #000000;
    font-weight: bold;
  }
</style>


