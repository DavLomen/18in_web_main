<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container text-center">
      <div class="mt-3">
        <h6 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold fs-5">Our Mining Plan</span></h6>
        <h2 class="text-lh pt-2">JAMINING Cloud Mining Contract</h2>
        <h5 class="text-ls pt-2" style="line-height: 1.8;">We offer a variety of contract models to help you achieve your financial goals and select the one that best suits your needs for investment and returns.</h5>
      </div>
      <div class="row mt-4">
        <div class="col-lg-4 p-3" v-for="(item,index) in listData" :key="index">
          <div class="light-border p-3" style="--x: 88.84803921568627%;">
            <div class="staking-plan-img">
              <img  :src="InitData.setting.up_url + item.icon" alt="" class="img-fluid rounded-3">
            </div>
            <div class="mt-2">
              <h4 class="fw-bold">{{item.title}}</h4>
              <span class=" text-z-fs fw-bold" v-if="item.type==1">Payout rewards every 24 hours</span>
              <span class=" text-z-fs fw-bold" v-else>Return after expiry</span>
            </div>
            <div class="separator-animated mt-4 mb-3"></div>
            <div class="row justify-content-around">
              <div class="bg-ls px-4 py-2 rounded-3 col-5">
                <h6 class="text-dhs">Contract Amount</h6>
                <h6>${{item.amount}}</h6>
              </div>
              <div class="bg-ls px-4 py-2 rounded-3 col-5">
                <h6 class="text-dhs">Contract Duration</h6>
                <h6>{{item.cycle}} Days</h6>
              </div>
            </div>
            <div class="row justify-content-around mt-3">
              <div class="bg-ls px-3 py-2 rounded-3 col-5">
                <h6 class="text-dhs">Daily Earnings</h6>
                <h6>${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*1).toFixed(2))}}</h6>
              </div>
              <div class="bg-ls py-2 rounded-3 col-5">
                <h6 class="text-dhs px-3">Total Earnings</h6>
                <h6>${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*item.cycle).toFixed(2))}}</h6>
              </div>
            </div>
            <div class="mt-3">
              <div class="progress" role="progressbar" aria-label="Example with label" :aria-valuenow="item.progress" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar progress-bar-striped progress-bar-animated " :style="`width: ${item.progress}%; background-color: rgba(111, 100, 233, 0.6);`">{{item.progress}}%</div>
              </div>
            </div>

            <div class="mt-4 row row-cols-3 justify-content-center">
              <div class="text-center" v-for="(aa,i) in item.affiliate_bonus">
                <div class="border border-2 border-fs rounded-pill d-flex align-items-center justify-content-center mx-3" style="width: 4rem; height: 4rem;">
                  <span class="mx-auto">{{aa}}%</span>
                </div>
                <div class=" d-flex align-items-center  mx-3 " style="width: 4rem; height: 2rem;">
                  <span class="text-center  mt-1 " style="width: 100%;">Level {{(i+1)}}</span>
                </div>
              </div>

            </div>
            <div class="mt-3 border border-0 rounded-3 p-2 bg-ls d-flex justify-content-between">
              <div>
                <button class="btn"><span class="text-z-fs fw-bold">Price ${{item.amount}}</span></button>
              </div>
              <div>
                <a @click="goDetail(item)" type="button" href="javascript:;" class="btn staking-btn" style="padding: 0.5rem 1.5rem;"><span> Invest Now </span></a>
              </div>
            </div>
            <div v-if="item.progress>=100" class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style="z-index: 2;">
              <img :src="'./static/images/img/out.png'" alt="Image" class="img-fluid" style="max-width: 90%; max-height: 90%; object-fit: contain;">
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


