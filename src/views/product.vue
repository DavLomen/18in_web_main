<template>
  <div class="HomePage">
    <Header></Header>
    <div class="banner">
      <div class="banner__content">
        <div class="container">
          <div class="row g-3 justify-content-center">
            <div class="col-lg-10 text-center">
              <h1 class="m-0 banner-title">{{$t('power[0]')}}</h1>
              <h5 class="m-0">{{$t('power[1]')}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section  class="section pt-0">
      <div  class="container" style="margin-top: 10px; padding-top: 10px;">
        <div  class="el-row">
          <div   class="plan-div" type="plans">
            <div  class="plan-row el-row is-justify-center el-row--flex"
                 style="margin-left: -10px; margin-right: -10px;">
              <div  class="mt-4 el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-12 el-col-lg-8" v-for="(item,index) in listData" :key="index"
                   style="padding-left: 10px; padding-right: 10px;">
                <div class="card">
                  <div class=" card-body" >
                    <div class="img-box">
                      <img
                        :src="InitData.setting.up_url + item.icon"
                        class="img" style="width: 100%"
                      />
                    </div>
                    <div class="plan-card__head">
                      <div class="mt-0 mb-2 text-center text--danger">{{item.title}}</div>
                      <!--                    <div class="mt-0 mb-2 text-left" style="color: #000000;font-weight: bold">-->
                      <!--                      <van-icon name="passed" color="green" style="margin-right: 0.5rem;"/>{{$t('product[9]')}}: {{item.miner}}-->
                      <!--                    </div>-->
                      <!--                    <div class="mt-0 mb-2 text-left" style="color: #000000;font-weight: bold">-->
                      <!--                      <van-icon name="passed" color="green" style="margin-right: 0.5rem;"/>{{$t('product[8]')}}: {{item.hash_power}}-->
                      <!--                    </div>-->
                      <div class="mt-0 mb-2 text-left" style="color: #000000;font-weight: bold">
                        <van-icon name="passed" color="green" style="margin-right: 0.5rem;"/>{{item.amount}} {{InitData.currency}}/{{item.cycle}} {{$t('product[15]')}}
                      </div>
                      <div class="mt-0 mb-2 text-left" style="color: #000000;font-weight: bold">
                        <van-icon name="passed" color="green" style="margin-right: 0.5rem;"/>{{$t('product[2]')}}: {{item.cycle}} {{$t('product[15]')}}
                      </div>
                      <div class="mt-0 mb-2 text-left" style="color: #000000;font-weight: bold">
                        <van-icon name="passed" color="green" style="margin-right: 0.5rem;"/>{{$t('product[0]')}}: {{item.amount}} {{InitData.currency}}
                      </div>
                    </div>
                    <div class="text-left" style="color: #000000;font-weight: bold">
                      <h6 class="mt-0 mb-2 text-left" style="font-weight: bold;"><van-icon name="passed" color="green" style="margin-right: 0.5rem;"/>{{$t('product[4]')}}: ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*1).toFixed(2))}}</h6>
                      <h6 class="mt-0 mb-2 text-left" style="color: #196F3D !important;font-weight: bold;"><van-icon name="passed" color="green" style="margin-right: 0.5rem;"/>{{$t('home[34]')}}: ${{item.amount}} + ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*item.cycle).toFixed(2))}}</h6>
                    </div>
                    <div class="text-left" style="color: #000000;font-weight: bold">
                      <h6 class="mt-0 mb-2 text-left" style="font-weight: bold;"><van-icon name="passed" color="green" style="margin-right: 0.5rem;"/>{{$t('product[21]')}}: ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*item.cycle).toFixed(2))}}</h6>
                    </div>
                    <div class="text-left" style="color: #000000;font-weight: bold">
                      <h6 class="mt-0 mb-2 text-left" style="font-weight: bold;"><van-icon name="passed" color="green" style="margin-right: 0.5rem;"/>{{$t('product[22]')}}: $ {{item.amount}}</h6>
                    </div>
                    <div class="text-left" style="color: #000000;font-weight: bold">
                      <h6 class="mt-0 mb-2 text-left" style="font-weight: bold;"><van-icon name="passed" color="green" style="margin-right: 0.5rem;"/>{{$t('settle[0]')}}: {{item.type==1?$t('product[7]'):$t('product[17]')}}</h6>
                    </div>
                    <div class="bonus" v-if="item.amount!=15">
                      <div class="label">{{$t('product[10]')}}</div>
                      <ul class="plan-referral justify-content-center mb-2">
                        <div class="single-referral" v-for="(aa,i) in item.affiliate_bonus">
                          <span>{{aa}} %</span>
                          <div>{{$t('affiliates[13]')}} {{(i+1)}}</div>
                        </div>
                      </ul>
                    </div>
                    <div class="bonus" v-else>
                      <div class="label">{{$t('product[10]')}}</div>
                      <ul class="plan-referral justify-content-center mb-2">
                        <div class="single-referral" v-for="(aa,i) in item.affiliate_bonus">
                          <span>0 %</span>
                          <div>{{$t('affiliates[13]')}} {{(i+1)}}</div>
                        </div>
                      </ul>
                    </div>
                    <div  class="btn-box">
                      <button  class="btn btn1" v-if="item.progress<100" @click="$router.push(`/productDetail?id=${item.id}`)">{{$t('settle[4]')}}</button>
                      <button  class="btn btn2 disable" disable v-if="item.progress>=100">{{$t('product[13]')}}</button>
                      <button  class="btn btn2" v-else @click="orderNow(item)">{{$t('settle[5]')}}</button>
                    </div>
                    <div  class="mt-2 el-row">
                      <div  class="sold-out-text">{{$t('newHome[2]')}}</div>
                      <div  class="progress">
                        <div  role="progressbar" aria-valuemin="0" aria-valuemax="100"
                              :aria-valuenow="item.progress"
                              class="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                              :style="`width: ${item.progress}%;`"><span ><strong >{{item.progress}}%</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div  ></div>
          </div>
        </div>
      </div>
    </section>
    <div v-if="showDialog" id="__BVID__247___BV_modal_outer_" style="position: absolute; z-index: 1040;">
      <div id="__BVID__247" role="dialog" aria-labelledby="__BVID__247___BV_modal_title_"
           aria-describedby="__BVID__247___BV_modal_body_" class="modal fade show" aria-modal="true"
           style="display: block;">
        <div class="modal-dialog modal-md modal-dialog-centered"><span tabindex="0"></span>
          <div id="__BVID__247___BV_modal_content_" tabindex="-1" class="modal-content">
            <header id="__BVID__247___BV_modal_header_" class="modal-header"><h5 id="__BVID__247___BV_modal_title_"
                                                                                 class="modal-title">{{$t('settle[6]')}}</h5>
              <button type="button" aria-label="Close" class="close" @click="showDialog = false">×</button>
            </header>
            <div id="__BVID__247___BV_modal_body_" class="modal-body">
              <div ><!---->
                <div  class="mb-3 el-row"><label  class="font-weight-bold mb-0"
                                                                   style="font-size: 14px;">{{$t('settle[7]')}}</label>
                  <div >
                    <van-stepper :disabled="detailData.id==12 || detailData.id==13" v-model="number" input-width="inherit" button-size="40px"/>
                  </div>
                </div>
                <div  class="mb-3 el-row"><label  class="font-weight-bold mb-0"
                                                                   style="font-size: 14px;">{{$t('settle[8]')}}</label>
                  <div  class="el-input is-disabled el-input-group el-input-group--append">
                    <!----><input type="text" disabled="disabled" readonly v-model="money" autocomplete="off" placeholder="Please input"
                                  class="el-input__inner"><!----><!---->
                    <div class="el-input-group__append">
                      <svg  width="36" height="36" viewBox="0 0 36 36" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                              d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
                              fill="#00A478"></path>
                        <path
                              d="M15.9894 17.4429V13.3308H10.4715V9.72632H25.8894V13.3812H20.3715V17.4429H15.9894Z"
                              fill="white"></path>
                        <path  fill-rule="evenodd" clip-rule="evenodd"
                              d="M8.1 17.7921C8.1 16.4808 12.5118 15.4125 18 15.4125C23.4882 15.4125 27.9 16.4808 27.9 17.7921C27.9 19.1034 23.4882 20.1717 18 20.1717C12.5118 20.1717 8.1 19.1034 8.1 17.7921ZM27.0792 17.7921C26.7201 17.3061 23.7447 15.8013 18 15.8013C12.2553 15.8013 9.2799 17.2575 8.9208 17.7921C9.2799 18.2772 12.2553 19.0062 18 19.0062C23.796 19.0062 26.7201 18.2772 27.0792 17.7921Z"
                              fill="white"></path>
                        <path
                              d="M20.3715 18.7127V15.8696C19.6497 15.8183 18.8766 15.7679 18.1035 15.7679C17.3817 15.7679 16.6608 15.7679 15.9903 15.8183V18.6614C16.6248 18.7613 17.3898 18.7802 18.1035 18.7802C18.8163 18.7802 19.6497 18.7631 20.3715 18.7127ZM18 20.3777C17.2782 20.3777 16.659 20.3579 15.9894 20.3075V27.9017H20.3202V20.2859C19.5984 20.3372 18.7731 20.3777 18 20.3777Z"
                              fill="white"></path>
                      </svg>
                    </div><!----></div>
                </div>
                <div  class="mb-3 el-row"><label  class="font-weight-bold mb-0"
                                                                   style="font-size: 14px;">{{$t('settle[9]')}}</label>
                  <div  class="el-input el-input--suffix">
                    <div class="el-input__wrapper" tabindex="-1">
                      <input class="el-input__inner" v-model="password" :type="showPass?'text':'password'" autocomplete="off" tabindex="0" id="el-id-9097-3">
                      <span class="el-input__suffix" @click="showPass= !showPass"><span class="el-input__suffix-inner">
                      <i v-if="!showPass" class="el-icon el-input__icon el-input__password"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"></path><path fill="currentColor" d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"></path></svg></i>
                      <i v-else class="el-icon el-input__icon el-input__password"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"></path></svg></i>
                    </span></span>
                    </div>
                  </div>
                </div><!----></div>
            </div>
            <footer id="__BVID__247___BV_modal_footer_" class="modal-footer">
              <div  class="w-100">
                <button @click="buyProduct" type="button" class="btn float-left ml-2 btn-primary">{{$t('settle[10]')}}</button>
              </div>
            </footer>
          </div>
          <span tabindex="0"></span></div>
      </div>
      <div id="__BVID__247___BV_modal_backdrop_" class="modal-backdrop"></div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import 'swiper/dist/css/swiper.css';

  export default {
    name: 'Product',
    inject: ['reloadHtml'],
    components: {
      swiper, swiperSlide,
    },
    data() {
      return {
        number:1,
        detailData:{},
        showDialog:false,
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
      'number'() {
        this.money=this.number*this.detailData.amount
      }
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
      orderNow(item) {
        this.detailData = item;
        this.number = 1;
        this.money = this.detailData.amount;
        this.showDialog = true;
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
  .plan-div .card:hover .plan-referral {
    /*color: #fff;*/
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .plan-div .card:hover  .single-referral {
    text-align: center;
    padding: 7px 5px;
  }
  .plan-div .card:hover .single-referral span {
    width: 45px;
    height: 45px;
    border: 1px solid rgb(13,110,253);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.05);
    font-size: 15px;
  }
  .plan-div .card:hover .bonus .label {
    width: 100%;
    margin-bottom: .8rem;
    font-size: 1.2rem;
    text-align: center;
    word-wrap: break-word;
    /*color: #fff;*/
  }
  .plan-div .card:hover .bonus .value {
    width: 100%;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    word-break: break-all
  }
  .plan-row {
    flex-wrap: wrap
  }

  .plan-div .card {
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.08);
    cursor: pointer;
    transition: all .5s ease
  }

  .plan-div .card:hover {
    background: #eee;
  }

  .plan-div .card:hover .card-body .price,.plan-div .card:hover .card-body .title {
    /*color: #fff*/
  }

  .plan-div .card:hover .card-body .desc-box .p {
    font-size: 16px;
    /*color: #fff*/
  }

  .plan-div .card:hover .card-body .btn-box .btn1 {
    text-shadow: 0 2px 4px rgba(0,0,0,.08);
    background: linear-gradient(90deg, #ddb443, #009d24)!important;
    color: #fff!important;
    border: 1px solid #000
  }

  /*.plan-div .card:hover .card-body .btn-box .btn2 {*/
  /*  text-shadow: 0 2px 4px rgba(0,0,0,.08);*/
  /*  background: #0a0a1a!important;*/
  /*  color: #fff!important*/
  /*}*/

  /*.plan-div .card:hover .card-body .card-img img {*/
  /*  transform: scale(1.1)*/
  /*}*/

  /*.plan-div .card:hover .card-body .sold-out-text {*/
  /*  color: #fff!important*/
  /*}*/

  .plan-div .card .card-body {
    display: flex;
    flex-direction: column;
    /*color: #fff;*/
    text-align: center;
    padding: 10px
  }

  .plan-div .card .card-body .card-img {
    width: 100%;
    overflow: hidden
  }

  .plan-div .card .card-body .card-img img {
    width: 100%;
    height: 100%;
    transition: all .3s ease
  }

  .plan-div .card .card-body .sold-out-text {
    font-size: 16px;
    font-weight: 700;
    color: #000
  }

  .plan-div .card .card-body .title {
    font-size: 28px;
    color: #0a0a1a;
    font-weight: 400;
    margin: 20px auto 0;
    display: inline-block
  }

  .plan-div .card .card-body .price {
    font-size: 24px;
    font-weight: 400;
    color: #273444;
    line-height: 40px;
    text-shadow: 0 2px 4px rgba(0,0,0,.08);
    margin: 12px auto 19px;
    text-align: center
  }

  .plan-div .card .card-body .split_line {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg,rgba(239,242,247,0),#eff2f7 50%,rgba(239,242,247,0));
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.08);
    opacity: .8
  }

  .plan-div .card .card-body .desc-box {
    text-align: center;
    padding: 16px 5px
  }

  .plan-div .card .card-body .desc-box .p {
    font-size: 16px;
    font-weight: 400;
    color: #0a0a0a;
    line-height: 20px;
    text-shadow: 0 2px 4px rgba(0,0,0,.08);
    margin: 13px 0;
    position: relative
  }

  .plan-div .card .card-body .desc-box .p .p_show {
    position: absolute;
    top: -200%;
    left: 0;
    font-size: 14px;
    font-weight: 400;
    color: #8492a6;
    line-height: 20px;
    text-shadow: 0 2px 4px rgba(0,0,0,.08);
    margin: 13px 0;
    display: none;
    border-radius: 8px;
    padding: 8px;
    transition: all .5s ease;
    background-color: rgba(0,0,0,.8)
  }

  .plan-div .card .card-body .desc-box .p .p_show:after {
    position: absolute;
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border: 6px solid rgba(0,0,0,.8);
    border-top-color: rgba(0,0,0,.8);
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%)
  }

  .plan-div .card .card-body .desc-box .p:last-child:hover .p_show {
    display: block
  }

  .plan-div .card .card-body .btn-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 5px;
    margin-top: auto
  }

  .plan-div .card .card-body .btn-box .btn {
    width: 87px;
    height: 39px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.08);
    border-radius: 8px;
    line-height: 39px;
    padding: 0
  }

  .plan-div .card .card-body .btn-box .btn.btn1 {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0,0,0,.08);
    background: linear-gradient(90deg, #ddb443, #009d24)
  }

  .plan-div .card .card-body .btn-box .btn.btn2 {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0,0,0,.08);
    background: linear-gradient(90deg, #ddb443, #009d24);
    border: 1px solid #000
  }

  .plan-div .progress-bar {
    background-color: #384247
  }

  .page-next-level .page-next[data-v-265f59b7] {
    z-index: 9
  }
  .mb-3>>>.van-stepper {
    width: 100%;
    font-size: 1rem;
    display: flex;
  }
  .van-stepper>>>.van-stepper__input {
    font-size: 1rem;
  }

  .bg-danger {
    background: linear-gradient(90deg, #ddb443, #009d24) !important;
  }
</style>


