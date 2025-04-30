<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container mt-lg-7">
      <div class="row">
        <!-- 左侧图片列 - 添加d-flex和align-items-center实现垂直居中 -->
        <div class="col-12 col-lg-6 d-flex align-items-center">
          <img :src="InitData.setting.up_url + detailData.icon" alt="Image" class="border rounded-3 border-0"
               style="width: 100%;">
        </div>

        <!-- 右侧内容列 -->
        <div class="col-12 col-lg-6">
          <!-- <div class="pt-5 pt-lg-3">
              <h3 class="fw-bold mb-3">LTC Classic Miner</h3>
              <h1 class="fw-bold"><sup>$</sup>200.00 USD</h1>
          </div> -->
<!-- ----------PT3-------------------- -->
          <!-- <div class="pt-3"> -->
            <!-- <div class="mt-2 text-center">
              <h4 class="fw-bold">{{detailData.title}}</h4>
              <span class="text-dhs" v-if="detailData.type==1">{{$t('productInfo[0]')}}</span>
              <span class="text-dhs" v-else>{{$t('productInfo[1]')}}</span>
            </div>
            <div class="separator-animated mt-4 mb-3"></div>
            <div class="row justify-content-around text-center">
              <div class="bg-ls px-3 py-2 rounded-3 col-5">
                <h6 class="text-dhs">{{$t('productInfo[2]')}}</h6>
                <h6>${{detailData.amount}}</h6>
              </div>
              <div class="bg-ls px-3 py-2 rounded-3 col-5">
                <h6 class="text-dhs">{{$t('productInfo[3]')}}</h6>
                <h6>{{detailData.cycle}} {{$t('productInfo[4]')}}</h6>
              </div>
            </div>
            <div class="row justify-content-around mt-3 text-center">
              <div class="bg-ls px-3 py-2 rounded-3 col-5">
                <h6 class="text-dhs">{{$t('productInfo[5]')}}</h6>
                <h6>${{(detailData.daily_rate/100*detailData.amount).toFixed(2)}}</h6>
              </div>
              <div class="bg-ls px-3 py-2 rounded-3 col-5">
                <h6 class="text-dhs">{{$t('productInfo[6]')}}</h6>
                <h6>
                  ${{parseFloat((parseFloat(detailData.daily_rate)/100*detailData.amount*detailData.cycle).toFixed(2))}}</h6>
              </div>
            </div> -->
            <!-- 原本注释内容 -->
            <!--<div class="mt-3">-->
            <!--    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">-->
            <!--        <div class="progress-bar progress-bar-striped progress-bar-animated " style="width: 0%; background-color: rgba(111, 100, 233, 0.6);">0%</div>-->
            <!--    </div>-->
            <!--</div>-->
            <!-- 原本注释内容 -->
            <div class="">
            <div class="plan-title el-content-label mb-3">{{detailData.title}}</div>
            <div class="pricing data-flex align-items-center">
              <p class="el-content-label">${{parseFloat(detailData.amount)}}</p>
              <p>/{{detailData.cycle}} {{$t('product[15]')}}
              </p>
            </div>
            <div class="description">
              <p><img :src="'./static/images/checked_new.png'"> {{$t('product[2]')}}: <span class="notranslate el-content-tip-text">{{detailData.cycle}} {{$t('product[15]')}}
                            </span></p>
              <p><img :src="'./static/images/checked_new.png'"> {{$t('product[0]')}}: <span class="notranslate el-content-tip-text">${{detailData.amount}}</span></p>
              <p><img :src="'./static/images/checked_new.png'"> {{$t('settle[2]')}}: <span class="notranslate el-content-tip-text">${{parseFloat((parseFloat(detailData.daily_rate)/100*detailData.amount*1).toFixed(2))}}</span></p>
              <p><img :src="'./static/images/checked_new.png'"> {{$t('settle[3]')}}: <span class="notranslate el-content-tip-text">${{detailData.amount}} + ${{parseFloat((parseFloat(detailData.daily_rate)/100*detailData.amount*detailData.cycle).toFixed(2))}}</span></p>
              <p><img :src="'./static/images/checked_new.png'"> {{$t('settle[0]')}}:<span class="notranslate el-content-tip-text">{{$t('settle[1]')}}</span></p>
            </div>
          </div>
             <!-- 以上是修改后的内容 -->
            <div class="mt-3">
              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25"
                   aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar progress-bar-striped progress-bar-animated "
                     :style="`width: ${detailData.progress}%; background-color: rgba(111, 100, 233, 0.6);`">
                  {{detailData.progress}}%
                </div>
              </div>
            </div>
          <!-- </div> -->
<!-- ----------PT3-------------------- -->
          <!-- <div class="pt-3">
              <div class="rounded-top border border-1 border-bshs d-flex justify-content-between p-3">
                  <span class="fs-6 text-bhs">Contract Terms</span>
                  <span class="fw-bold fs-6">2 Day</span>
              </div>
              <div class=" border border-1 border-top-0 border-bshs d-flex justify-content-between p-3">
                  <span class="fs-6 text-bhs">Daily Rebate</span>
                  <span class="fw-bold fs-6">$ 7</span>
              </div>
              <div class=" border border-1 border-top-0 border-bshs d-flex justify-content-between p-3">
                  <span class="fs-6 text-bhs">Recoverable funds</span>
                  <span class="fw-bold fs-6">$200.00 + $14</span>
              </div>
              <div class=" border border-1 border-top-0 border-bshs d-flex justify-content-between p-3">
                                      <span class="fs-6 text-bhs">Every 24 Hours</span>
                  <span class="fw-bold fs-6">$7</span>
                                  </div>
              <div class="rounded-bottom border border-1 border-top-0 border-bshs d-flex justify-content-between p-3">
                  <span class="fs-6 text-bhs">Principal Refund</span>
                  <span class="fw-bold fs-6">YES</span>
              </div>
          </div> -->
          <div class="mt-4 row row-cols-3 justify-content-center col-lg-8 mx-auto">
            <div v-for="(aa,i) in detailData.affiliate_bonus" :key="i" class="text-center">
              <div class="border border-2 border-fs rounded-pill d-flex align-items-center justify-content-center mx-3"
                   style="width: 4rem; height: 4rem;">
                <span class="mx-auto">{{aa}}%</span>
              </div>
              <div class=" d-flex align-items-center  mx-3 " style="width: 4rem; height: 2rem;">
                <span class="text-center  mt-1 " style="width: 100%;">{{$t('productInfo[7]')}} {{(i+1)}}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <button @click="orderNow()" id=""
              class="btn  staking-btn rounded-3 p-3 my-5 text-light fw-bold fs-5 col-lg-6 offset-lg-3 col-12"
              data-bs-toggle="modal" data-bs-target="#exampleModal">
        {{$t('productInfo[8]')}}
      </button>
      <div class="border border-0 rounded-4 bg-hs p-4">
        <div class="border border-3 rounded-4 p-3 border-primary d-flex justify-content-center align-items-center">
          <i class="bi bi-exclamation-circle text-red fs-1 ps-3"></i>
          <span class="fs-4 ps-3" v-if="detailData.max_investments_num>0">{{$t('limits[0]')}}</span>
          <span class="fs-4 ps-3" v-else-if="detailData.cycle==1">{{$t('limits[1]')}}</span>
          <span class="fs-4 ps-3" v-else>{{$t('limits[2]')}}</span>
        </div>
        <div class="pt-3 fw-bold txt">{{$t('productInfo[9]')}}</div>
        <div :class="'txt txt'+i" v-for="i in 30" >
          <span>{{$t(`productDetail['${i}']`)}}</span>
        </div>
        <div class="txt" v-html="detailData.agreement"></div>
        <div class="txt" >{{$t('productDetail[32]')}}</div>
        </div>
    </div>

    <div class="modal fade p-3 show" v-if="showDialog" aria-modal="true" role="dialog" style="display: block;">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-hs">
          <div class="modal-header border-bshs">
            <h1 class="modal-title fs-5 text-bhs fw-bold" id="exampleModalLabel">{{$t('productInfo[10]')}}</h1>
            <button @click="showDialog = false" type="button" class="btn-close bg-white" data-bs-dismiss="modal"
                    aria-label="Close"></button>
          </div>
          <div class="modal-body text-lvs">
            <div class="d-flex justify-content-between">
              <h6>{{$t('productInfo[11]')}}</h6>
              <h6>{{detailData.title}}</h6>
            </div>
            <div class="d-flex justify-content-between">
              <h6>{{$t('productInfo[12]')}}</h6>
              <h6>${{detailData.amount}}</h6>
            </div>
            <div class="d-flex justify-content-between">
              <h6>{{$t('productInfo[13]')}}</h6>
              <h6>{{detailData.cycle}} {{$t('productInfo[14]')}}</h6>
            </div>
            <div class="d-flex justify-content-between">
              <h6>{{$t('productInfo[15]')}}</h6>
              <h6>${{(detailData.daily_rate/100*detailData.amount).toFixed(2)}}</h6>
            </div>
            <div class="d-flex justify-content-between">
              <h6>{{$t('productInfo[16]')}}</h6>
              <h6>
                ${{parseFloat((parseFloat(detailData.daily_rate)/100*detailData.amount*detailData.cycle).toFixed(2))}}</h6>
            </div>
            <div class="input-group mt-3">
              <div class="col-12">
                <van-stepper v-model="number" input-width="inherit" button-size="40px"/>
              </div>
            </div>
            <div class="form-group mt-2">
              <div class="input-wrapper">
                <input v-model.trim="password" type="password" class="form-control custom-input" id="password"
                       placeholder="Please enter your password" data-sharkid="__1">
              </div>
            </div>
          </div>
          <div class="modal-footer border-bshs justify-content-center">
            <button @click="buyProduct" id="submit" type="button" class="btn staking-btn col-6 p-2 text-light">{{$t('productInfo[17]')}}
            </button>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
  export default {
    name: 'productDetail',
    components: {},
    data() {
      return {
        number: 1,
        showDialog: false,
        money: '',
        password: '',
        showPass: false,
        detailData: {},
        review: '0',
        isAgree: true,
        view: 0,
        agreement: '',
      }
    },

    computed: {},
    watch: {
      'number'() {
        this.money = this.number * this.detailData.amount
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
        // this.agreement = localStorage.getItem("agreement");
      } else {
        // this.agreement = '';
        localStorage.setItem("agreement", "");
      }
      this.getInfoData(id);
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      buyProduct() {
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
          if (data.code == 1) {
            this.$router.push("/MyPackages")
          }
        });
      },
      orderNow() {
        if (!this.UserInfo) {
          this.$router.push("/login");
          return;
        }
        this.money = this.detailData.amount;
        if (this.UserInfo.is_fund_password != 1) {
          this.$Dialog.Alert1(this.$t('wallet.msg[0]'), () => {
            this.$router.push('/payPassword')
          })
          return false;
        }
        this.showDialog = true;
      },
      getInfoData(id) {
        this.$Model.ProductDetail(id, data => {
          this.detailData = data.data;
          // this.money = data.data.min_amount;
          if (localStorage.getItem("agreement")) {
            this.detailData.agreement = this.detailData.agreement + '<br>' + localStorage.getItem("agreement");
          }
        });
      },
      buyProduct() {
        if (!this.UserInfo) {
          this.$router.push("/login");
          return false;
        }
        if (this.UserInfo.is_fund_password != 1) {
          this.$Dialog.Alert(this.$t('wallet.msg[0]'), () => {
            this.$router.push('/payPassword')
          })
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
          if (data.code == 1) {
            this.$router.push("/MyPackages")
          }
        });
      },
    }
  }
</script>
<style scoped>
  .bar-color_proceed {
    background-color: #d77600 !important;
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

  .col-12 >>> .van-stepper {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .col-12 >>> .van-stepper__input {
    background: #fff;
    box-shadow: 0 0 0 1px #dcdfe6 inset;
    margin: 0px;
  }

  .justify-content-center {
    justify-content: center !important;
  }
  .txt {
    font-size: 1rem;
  }
  .txt2 ,.txt8,.txt11,.txt15,.txt18,.txt20,.txt22,.txt25,.txt28,.txt32{
    font-weight: bold;
  }
</style>


