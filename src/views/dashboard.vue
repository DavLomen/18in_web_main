<template>
  <div class="HomePage" id="app">
    <Header></Header>
    <div class="d-flex mbt4">
      <div class="col-2 border-end border-hhs d-none d-lg-block">
        <Side></Side>
      </div>
      <div class="container col-lg-10 ">
        <div class="">
          <div class="row mx-auto align-items-center">
            <div class="col-lg-5 ">
              <div class="border rounded-4 border-0 bg-hs1 text-center p-5 single-settings-box top-flashlight light-xl leftside" style="margin-bottom: 0px !important;">
                <h3 class="fw-bold">{{$t('dash[0]')}}</h3>
                <h2 class="text-zs fw-bold">{{InitData.currency}} {{UserInfo.balance}}</h2>
              </div>
            </div>
            <div class="row mx-auto col-lg-7 p-2 justify-content-center align-items-center">
              <div class="p-1 " style="width: 50%;">
                <div class="border border-0 rounded-3 py-3 px-3 d-flex align-items-center " style="background-color: #410093;">
                  <div class="border border-0 rounded-3 p-2 text-center" style="width: 50px; height: 50px; background-color: #ffffff30;">
                    <i class="bi bi-plus-square fs-5"></i>
                  </div>
                  <div class="ms-2" style="height: 4rem;">
                    <h6 class="fw-bold"> {{$t('dash[1]')}}</h6>
                    <h6 class="fw-bold"> {{InitData.currency}} {{statisticalData.total_recharge}}</h6>
                  </div>
                </div>
              </div>
              <div class="p-1 " style="width: 50%;">
                <div class="border border-0 rounded-3 py-3 px-3 d-flex align-items-center " style="background-color: #4179fe;">
                  <div class="border border-0 rounded-3 p-2 text-center" style="width: 50px; height: 50px; background-color: #ffffff30;">
                    <i class="bi bi-credit-card fs-5"></i>
                  </div>
                  <div class="ms-2" style="height: 4rem;">
                    <h6 class="fw-bold"> {{$t('dash[2]')}}</h6>
                    <h6 class="fw-bold"> {{InitData.currency}} {{statisticalData.total_withdraw}}</h6>
                  </div>
                </div>
              </div>
              <div class="p-1 " style="width: 50%;">
                <div class="border border-0 rounded-3 py-3 px-3 d-flex align-items-center " style="background-color: #7064e9;">
                  <div class="border border-0 rounded-3 p-2 text-center" style="width: 50px; height: 50px; background-color: #ffffff30;">
                    <i class="bi bi-currency-dollar fs-5"></i>
                  </div>
                  <div class="ms-2" style="height: 4rem;">
                    <h6 class="fw-bold"> {{$t('dash[3]')}}</h6>
                    <h6 class="fw-bold"> {{InitData.currency}} {{UserInfo.balance_base}}</h6>
                  </div>
                </div>
              </div>
              <div class="p-1 " style="width: 50%;">
                <div class="border border-0 rounded-3 py-3 px-3 d-flex align-items-center " style="background-color: #7376aa;">
                  <div class="border border-0 rounded-3 p-2 text-center" style="width: 50px; height: 50px; background-color: #ffffff30;">
                    <i class="bi bi-award fs-5"></i>
                  </div>
                  <div class="ms-2" style="height: 4rem;">
                    <h6 class="fw-bold"> {{$t('dash[4]')}}</h6>
                    <h6 class="fw-bold">---</h6>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div class="d-block d-lg-none ">
            <div class="p-3 pt-4 row row-cols-4 ">
              <div class="text-center">
                <a href="javascript:;" @click="$router.push('/deposit')">
                  <div>
                    <img :src="'./static/images/img/red.png'" alt="" height="60px;" class="text-center p-2 mb-2 border rounded-3 border-0" style="background-color: #5F33F7;">
                  </div>
                </a>
                <h6 class="text-bhs">{{$t('dash[5]')}}</h6>
              </div>
              <div class="text-center">
                <a href="javascript:;"  @click="$router.push('/withdraw')">
                  <div>
                    <img :src="'./static/images/img/wit.png'" alt="" height="60px;" class="text-center p-2 mb-2 border rounded-3 border-0" style="background-color: rgb(132 54 230);">
                  </div>
                </a>
                <h6 class="text-bhs">{{$t('dash[6]')}}</h6>
              </div>
              <div class="text-center">
                <a href="javascript:;"  @click="$router.push('/transactions')">
                  <div>
                    <img :src="'./static/images/img/bilss.png'" alt="" height="60px;" class="text-center p-2 mb-2 border rounded-3 border-0" style="background-color: #ED5C2E;">
                  </div>
                </a>
                <h6 class="text-bhs">{{$t('dash[7]')}}</h6>
              </div>
              <div class="text-center"  @click="$router.push('/MyPackages')">
                <a href="javascript:;">
                  <div>
                    <img :src="'./static/images/img/orders.png'" alt="" height="60px;" class="text-center p-2 mb-2 border rounded-3 border-0" style="background-color: rgb(208,147,232);">
                  </div>
                </a>
                <h6 class="text-bhs">{{$t('dash[8]')}}</h6>
              </div>
            </div>
          </div>

          <div class="row">

            <a class="col-lg-6 col-6 p-2 text-light" href="javascript:;">
              <div class="p-3 ps-lg-5 border border-0 rounded-3 bg-okh light-border" style="--x: 3.4382828898368203%;">
                <div class="p-2 border border-0 rounded-3 " style="width: 56px; background-color: #dd00ac40;">
                  <div class="p-2  border border-0 rounded-3 text-center " style="background-color: #dd00ac;">
                    <i class="bi bi-bookmark-star fs-6 fw-bold"></i>
                  </div>
                </div>
                <h6 class="mt-3 fw-bold ">{{$t('dash[9]')}}</h6>
                <h6 class="fw-bold ">{{statisticalData.activity_task}}</h6>
              </div>
            </a>


            <a class="col-lg-6 col-6 p-2 text-light" href="javascript:;">
              <div class="p-3 ps-lg-5 border border-0 rounded-3 bg-okh light-border" style="--x: 30.84027354594082%;">
                <div class="p-2 border border-0 rounded-3 " style="width: 56px; background-color: #4179fe40;">
                  <div class="p-2 border border-0 rounded-3 text-center " style="background-color: #4179fe;">
                    <i class="bi bi-bookmark-dash fs-6 fw-bold"></i>
                  </div>
                </div>
                <h6 class="mt-3 fw-bold ">{{$t('dash[10]')}}</h6>
                <h6 class="fw-bold ">{{statisticalData.total_task}}</h6>
              </div>
            </a>

            <!--<div class="col-lg-3 col-6 p-2 ">-->
            <!--    <div class="p-3 border border-0 rounded-3 bg-okh light-border">-->
            <!--        <div class="p-2 border border-0 rounded-3 " style="width: 56px; background-color: #7064e940;">-->
            <!--            <div class="p-2 border border-0 rounded-3 text-center " style="background-color: #7064e9;">-->
            <!--                <i class="bi bi-currency-dollar fs-6 fw-bold"></i>-->
            <!--            </div>-->
            <!--        </div>-->
            <!--        <h6 class="mt-3 fw-bold ">Total Plans</h6>-->
            <!--        <h6 class="fw-bold ">$0</h6>-->
            <!--    </div>-->
            <!--</div>-->
            <!--<div class="col-lg-3 col-6 p-2  ">-->
            <!--    <div class="p-3 border border-0 rounded-3 bg-okh light-border">-->
            <!--        <div class="p-2 border border-0 rounded-3" style="width: 56px; background-color: #7376aa40;">-->
            <!--            <div class="p-2 border border-0 rounded-3 text-center" style="background-color: #7376aa;">-->
            <!--                <i class="bi bi-currency-dollar fs-6 fw-bold"></i>-->
            <!--            </div>-->
            <!--        </div>-->
            <!--        <h6 class="mt-3 fw-bold ">Total Plans</h6>-->
            <!--        <h6 class="fw-bold ">$0</h6>-->
            <!--    </div>-->
            <!--</div>-->
          </div>

          <div class="py-3 ">
            <!-- <div class="d-flex justify-content-between m-2">
                <h6>My AffiliateLink</h6>

            </div> -->
            <div class="border rounded-3 border-0 bg-okh p-3 text-center  mx-auto my-lg-5 light-border" style="--x: 24.860470433180467%;">
              <input class="w-100 border rounded-3 border-0 ps-3 my-3" style="line-height: 20px; height: 40px; font-size: 15px; color: rgb(163,163,163); background-color: rgb(51, 51, 51);" type="text" v-model="promoteUrl" disabled="" data-sharkid="__0">
              <button @click="copy" :data-clipboard-text="promoteUrl" id="copylink" class="btn btn-primary col-4 p-2 copy">Copy</button>
            </div>
            <div class="border rounded-3 border-0 bg-okh p-3 text-center mt-3  mx-auto my-lg-5 light-border" style="--x: 35.53330553949191%;">
              <h4 class="">{{$t('dash[12]')}}</h4>
              <span class="fs-6 text-lvs">{{teamNum}} </span>
<!--              <span class="fs-6 text-white">/</span><span class="fs-6 text-warning"> 0</span>-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="rainbow-gradient-circle"></div>
      <div class="rainbow-gradient-circle theme-pink"></div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Clipboard from 'clipboard';

  export default {
    name: 'dashboard',
    components: {
    },
    data() {
      return {
        teamNum:0,
        showH5nav: false,
        showUserDown: false,
        showMenuDown: false,
        statisticalData: {},
        promoteUrl: '',
        intv: null,
      }
    },

    computed: {},
    watch: {},
    created() {
      let that = this;
      this.$Model.GetUserInfo();
      this.$Model.GetStatisticsInfo(data => {
        if (data.code == 1) {
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
      this.$Model.TeamReport(post,data=>{
        if(data.code==1){
          this.teamNum = data.teamNumber;
        }
      })
      this.$Model.HasNewMessage(data=>{
        // this.noReadNum = data.data==null?0:1;
        if(data.data!=null &&data.data>0){
          that.$Dialog.Confirm1(that.$t('messageInfo[0]'), () => {
            that.$router.push(`/message`)
          }, that.$t('messageInfo[1]'));
        }
      })
    },
    mounted() {
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
            that.coinlist[i].change = (data.tick.close - data.tick.open).toFixed(2);
            that.coinlist[i].rate = parseFloat((data.tick.close - data.tick.open) / data.tick.open * 100).toFixed(2);
          });
        }
      },
      copy() {
        let that = this;
        var clipboard = new Clipboard('.copy')
        clipboard.on('success', e => {
          that.$Dialog.Toast(that.$t('dialog[3]'));
          clipboard.destroy();
        })
        clipboard.on('error', e => {
          // 不支持复制
          // 释放内存
          clipboard.destroy()
        })
      },
    }
  }
</script>
<style scoped>
  @media only screen and (max-width: 992px) {
    .mbt4 {
      padding-bottom: 4rem;
    }
  }
</style>



