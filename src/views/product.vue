<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container text-center">
      <div class="mt-3">
        <img :src="'./static/images/img/producttop.png?t=1'" style="width: 100%">
      </div>
      <div class="section">
        <div class="" style="margin-top: 20px">
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
                  <div class="mt-0 mb-2 text-center text--danger">{{item.title}}</div>
                  <div class="mt-0 mb-2 text-left" style="color: #000000;font-weight: bold">
                    <img :src="'./static/images/checked.png?t=1'" style="width: 1.75rem;">{{$t('product[0]')}}: {{item.miner}}
                  </div>
                  <div class="mt-0 mb-2 text-left" style="color: #000000;font-weight: bold">
                    <img :src="'./static/images/checked.png?t=1'" style="width: 1.75rem;">{{$t('product[1]')}}: {{item.hash_power}}
                  </div>
                  <div class="mt-0 mb-2 text-left" style="color: #000000;font-weight: bold">
                    <img :src="'./static/images/checked.png?t=1'" style="width: 1.75rem;">{{item.amount}} {{InitData.currency}}/{{item.cycle}} {{$t('product[2]')}}
                  </div>
                  <div class="mt-0 mb-2 text-left" style="color: #000000;font-weight: bold">
                    <img :src="'./static/images/checked.png?t=1'" style="width: 1.75rem;">{{$t('product[3]')}}: {{item.cycle}} {{$t('product[2]')}}
                  </div>
                  <div class="mt-0 mb-2 text-left" style="color: #000000;font-weight: bold">
                    <img :src="'./static/images/checked.png?t=1'" style="width: 1.75rem;">{{$t('product[4]')}}: {{item.amount}} {{InitData.currency}}
                  </div>
                </div>
                <div class="text-left" style="color: #000000;font-weight: bold">
                  <h6 class="mt-0 mb-2 text-left" style="font-weight: bold;"><img :src="'./static/images/checked.png?t=1'" style="width: 1.75rem;">{{$t('product[5]')}}: ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*1).toFixed(2))}}</h6>
                  <h6 class="mt-0 mb-2 text-left" style="color: red !important;font-weight: bold;"><img :src="'./static/images/checked.png?t=1'" style="width: 1.75rem;">{{$t('product[6]')}}: ${{item.amount}} + ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*item.cycle).toFixed(2))}}</h6>
                </div>
                <div class="text-left" style="color: #000000;font-weight: bold">
                  <h6 class="mt-0 mb-2 text-left" style="font-weight: bold;"><img :src="'./static/images/checked.png?t=1'" style="width: 1.75rem;">{{$t('product[7]')}}: {{item.type==1?$t('settletype[0]'):$t('settletype[1]')}}</h6>
                </div>
                <div class="bonus" v-if="item.amount !=10">
                  <div class="label">{{$t('product[8]')}}</div>
                  <ul class="plan-referral justify-content-center mb-2">
                    <div class="single-referral" v-for="(aa,i) in item.affiliate_bonus">
                      <span>{{aa}} %</span>
                      <div>{{$t('product[9]')}}  {{(i+1)}}</div>
                    </div>
                  </ul>
                </div>
                <div class="bonus"  v-else>
                  <div class="label">{{$t('product[8]')}}</div>
                  <ul class="plan-referral justify-content-center mb-2">
                    <div class="single-referral" v-for="(aa,i) in item.affiliate_bonus">
                      <span>0 %</span>
                      <div>{{$t('product[9]')}} {{(i+1)}}</div>
                    </div>
                  </ul>
                </div>
                <div class="mt-1 text-center">
                  <div v-if="item.progress>=100" tyle="width: 100%" class="t-link btn btn--base btn--lg rounded-pill investBtn">
                    {{$t('product[10]')}}
                  </div>
                  <a v-else href="javascript:;" style="width: 100%" @click="$router.push(`/productDetail?id=${item.id}`)" class="t-link btn btn--base btn--lg rounded-pill investBtn">
                    {{$t('product[11]')}}
                  </a>
                </div>
                <div class="mt-2 text-center">
                  <van-progress :percentage="item.progress" stroke-width="8" track-color="#ccc" color="linear-gradient(to right, #aaa, #15bf6f)"/>
                </div>
              </div>
            </div>
          </div>
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
      goDetail(item) {
        // if(item.progress<100){
        this.$router.push(`/productDetail?id=${item.id}`)
        // }
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
      orderNow(item) {
        this.detailData = item;
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
  .separator-animated {
    position: relative;
    overflow: hidden;
    height: 2px;
    width: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(111, 100, 233, 0.6) 50%, rgba(0, 0, 0, 0) 100%);
  }
  .separator-animated.animated-true::before {
    content: "";
    position: absolute;
    width: 3%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%,  rgba(111, 100, 233, 0.6) 50%, rgba(0, 0, 0, 0) 100%);
    backdrop-filter: blur(20px);
    animation: separateline 5s ease-in-out infinite;
  }
  @keyframes separateline {
    0% {
      left: 0;
    }

    100% {
      left: 110%;
    }
  }
  .social-link {
    width: 40px;
    height: 40px;
    border: 1px solid var(--color-border);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center ;
    justify-content: center;
    transition: 300ms ease;
  }
  .social-link:hover i {
    background: linear-gradient(160deg, #12B5DE -30%, #7130C3 30%, #FF3BD4 90%);
    -webkit-background-clip: text;
    color: transparent;
  }
</style>


