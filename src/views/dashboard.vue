<template>
  <div class="HomePage" id="app" style="background: #fff;">
    <Header></Header>
    <section class="user-panel-section" style="padding: 40px 0px;">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="sidebar-head d-flex flex-wrap align-items-center justify-content-between">
              <h3 class="sidebar-head-title"></h3>
            </div>
            <div class="sidebar sidebar-user-mobile">
              <a href="javascript:;" class="icon-btn menu-toggler-user-close">
                <em class="ni ni-cross"></em>
              </a>
              <div class="sidebar-widget">
                <ul class="user-nav">
                  <li class="active">
                    <a aria-current="page" href="javascript:;" @click="$router.push('/dashboard')" class="router-link-active router-link-exact-active">
                      <em class="ni me-2 ni-puzzle"></em>{{$t('header[1]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/transactions')">
                      <em class="ni me-2 ni-file-text"></em>{{$t('header[2]')}}</a>
                  </li>
                  <!--                  <li class="">-->
                  <!--                    <a href="javascript:;" @click="$router.push('/message')">-->
                  <!--                      <em class="ni me-2 ni-file-text"></em>{{$t('head[13]')}}</a>-->
                  <!--                  </li>-->
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/deposit')">
                      <em class="ni me-2 ni-money"></em>{{$t('header[3]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;"  @click="$router.push('/withdraw')">
                      <em class="ni me-2 ni-exchange"></em>{{$t('header[4]')}}</a>
                  </li>
                  <li class=""  v-if="InitData.setting.luckydraw !=undefined && InitData.setting.luckydraw.status ==1">
                    <a href="javascript:;"  @click="$router.push('/lucky')">
                      <em class="ni me-2 ni-gift"></em>{{$t('common[2]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/MyPackages')">
                      <em class="ni me-2 ni-file-text"></em>{{$t('header[5]')}}</a>
                  </li>
                  <!--                  <li class="">-->
                  <!--                    <a href="javascript:;" @click="$router.push('/contracts')">-->
                  <!--                      <em class="ni me-2 ni-puzzle"></em>{{$t('header[6]')}}</a>-->
                  <!--                  </li>-->
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/affiliates')">
                      <em class="ni me-2 ni-money"></em>{{$t('header[7]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/loginPassword')">
                      <em class="ni me-2 ni-account-setting"></em>{{$t('header[8]')}}</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" @click="$router.push('/message')">
                      <em class="ni me-2 ni-megento"></em>{{$t('head[13]')}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-10 ps-xl-5">
            <!--            <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ADOGEUSD%22%2C%22title%22%3A%22Dogecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ALTCUSD%22%2C%22title%22%3A%22Litecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABCHUSD%22%2C%22title%22%3A%22Bitcoin%20Cash%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AADAUSD%22%2C%22title%22%3A%22Cardano%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AXRPUSD%22%2C%22title%22%3A%22XRP%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22white%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22globalecrypto.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22oxminer.com%2F%22%7D" title="ticker tape TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: 74px; width: 100%;"></iframe>-->
            <div  class="dashboard" style="margin-top: 10px">
              <div class="dashboard">
                <section class="wallet-section section-space-b">
                  <div class="container">
                    <div class="mobileflex" style="margin-bottom: 1rem;">
                      <button @click="$router.push('/deposit')" class="btn btn-dark w-100" style="max-width: 300px;border: 1px solid #fff;height: 3rem;
    font-size: 1.25rem;">{{$t('header[3]')}}</button>

                      <button @click="$router.push('/withdraw')" class="btn btn-dark w-100 rightas" style="max-width: 300px;border: 1px solid #fff;height: 3rem;
    font-size: 1.25rem;">{{$t('header[4]')}}</button>
                    </div>
                    <div class="row g-gs">
                      <div class="col-lg-3 col-md-6 text-center">
                        <div class="card1">
                          <div>
                            <img
                              class="mb-4 dash-icon"
                              :src="'./static/images/da/AvailableBalance.png?=t1'"
                              alt="balance">
                          </div>
                          <div>
                            <h3 class="notranslate card-title mb-3 card-num"> {{InitData.currency}} {{UserInfo.balance}}</h3><h4
                            class="card-title mb-3">
                            {{$t('dashboard[1]')}}</h4>
                          </div>
                        </div>
                      </div>
                      <!--                      <div class="col-lg-3 col-md-6 text-center">-->
                      <!--                        <div class="card1">-->
                      <!--                          <div><img-->
                      <!--                            class="mb-4 dash-icon"-->
                      <!--                            :src="'./static/images/da/TrialFunds.png'"-->
                      <!--                            alt="trial"></div>-->
                      <!--                          <div>-->
                      <!--                            <h3 class="notranslate card-title mb-3 card-num"> {{InitData.currency}} {{UserInfo.balance_base}}</h3><h4-->
                      <!--                            class="card-title mb-3">{{$t('dashboard[15]')}}</h4>-->
                      <!--                          </div>-->
                      <!--                        </div>-->
                      <!--                      </div>-->
                      <div class="col-lg-3 col-md-6 text-center">
                        <div class="card1">
                          <div> <img
                            class="mb-4 dash-icon"
                            :src="'./static/images/da/TotalDeposits.png?=t1'"
                            alt="deposit"></div>
                          <div><h3 class="notranslate card-title mb-3 card-num"> {{InitData.currency}} {{statisticalData.total_recharge}}</h3><h4
                            class="card-title mb-3">{{$t('dashboard[6]')}}</h4></div>

                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 text-center">
                        <div class="card1">
                          <div> <img
                            class="mb-4 dash-icon"
                            :src="'./static/images/da/TotalWithdrawals.png?=t1'"
                            alt="withdraw"></div>
                          <div><h3 class="notranslate card-title mb-3 card-num"> - {{InitData.currency}} {{statisticalData.total_withdraw}}</h3><h4
                            class="card-title mb-3">{{$t('dashboard[7]')}}</h4></div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 text-center">
                        <div class="card1">
                          <div><img
                            class="mb-4 dash-icon"
                            :src="'./static/images/da/TotalProfits.png?=t1'"
                            alt="commission"></div>
                          <div><h4
                            class="card-title mb-3">{{$t('dashboard[16]')}}</h4>
                            <h3 class="notranslate card-title mb-3 card-num"> {{InitData.currency}} {{statisticalData.total_profit}}</h3></div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 text-center">
                        <div class="card1">
                          <div> <img
                            class="mb-4 dash-icon"
                            :src="'./static/images/da/TotalCommissions.png?=t1'"
                            alt="commission"></div>
                          <div> <h4
                            class="card-title mb-3">{{$t('dashboard[2]')}}</h4>
                            <h3 class="notranslate card-title mb-3 card-num"> {{InitData.currency}} {{statisticalData.total_revenue}}</h3></div>

                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 text-center">
                        <div class="card1">
                          <div> <img
                            class="mb-4 dash-icon"
                            :src="'./static/images/da/TrialFunds.png?=t1'"
                            alt="commission"></div>
                          <div> <h4
                            class="card-title mb-3">{{$t('dashboard[3]')}}</h4>
                            <h3 class="notranslate card-title mb-3 card-num"> {{statisticalData.activity_task ||0}}</h3></div>

                        </div>
                      </div>
                      <div class="h3">{{$t('credit[0]')}} <span style="margin-left: 3rem">{{UserInfo.credit}}</span></div>
                      <div class="h3">{{$t('dashboard[10]')}} <span style="margin-left: 3rem">{{UserInfo.useridentity}}</span></div>


                      <div class="position-relative " ><input type="text" v-model="promoteUrl"
                                                              class="notranslate form-control form-control-s1"
                                                              placeholder="" disabled="">
                        <a href="javascript:void(0)" @click="copy" :data-clipboard-text="promoteUrl" class="copy-toggle copy" title="Copy Link">
                          <em class="ni ni-copy-fill"></em>
                        </a>
                        <!-- <div class="d-sm-block copy" size="sm" style="margin-left: 5px;" @click="copy" :data-clipboard-text="promoteUrl">  {{$t('dashboard[11]')}}</div> -->
                      </div>
                      <div class="h3">{{$t('dashboard[9]')}}</div>


                      <div class="position-relative " ><input type="text" v-model="UserInfo.idcode"
                                                              class="notranslate form-control form-control-s1"
                                                              placeholder="" disabled="">
                        <a href="javascript:void(0)" @click="copy" :data-clipboard-text="UserInfo.idcode" class="copy-toggle copy" title="Copy Link">
                          <em class="ni ni-copy-fill"></em>
                        </a>
                        <!-- <div class="d-sm-block copy" size="sm" style="margin-left: 5px;" @click="copy" :data-clipboard-text="UserInfo.idcode"></div> -->
                      </div>
                      <div class="col-lg-4 col-md-6 text-center">
                        <div class="card1">
                          <img
                            class="mb-4 dash-icon"
                            :src="'./static/images/da/Partners.png?=t1'"
                            alt="system">
                          <h4
                            class="card-title mb-3">{{$t('dashboard[12]')}}</h4>
                          <h3 class="notranslate card-title mb-3">{{teamNum}}</h3></div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
  import Clipboard from 'clipboard';
  import UserHeader from '@/components/UserHeader'
  export default {
    name: 'dashboard',
    components: {
      UserHeader
    },
    data() {
      return {
        teamNum:0,
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,
        statisticalData:{},
        promoteUrl:'',
        intv:null,
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      this.$Model.GetUserInfo();
      this.$Model.GetStatisticsInfo(data=>{
        if(data.code==1){
          this.statisticalData = data.info;
        }
      })
      this.promoteUrl = `${this.InitData.setting.reg_url}/#/register/${this.UserInfo.idcode}`;
      let post = {}
      if(this.currPid){
        post.pve_id = this.currPid
      }
      this.$Model.TeamReport(post,data=>{
        if(data.code==1){
          this.teamNum = data.teamNumber;
        }
      })
      let that = this;
      that.$Model.HasNewMessage(data=>{
        if (data.data == 1) {
          that.$Dialog.Confirm(that.$t('messageInfo[0]'), () => {
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
            that.coinlist[i].change = (data.tick.close-data.tick.open).toFixed(2);
            that.coinlist[i].rate = parseFloat((data.tick.close-data.tick.open)/data.tick.open*100).toFixed(2);
          });
        }
      },
      copy () {
        let that = this;
        var clipboard = new Clipboard('.copy')
        clipboard.on('success', e => {
          that.$Dialog.Toast(that.$t('dialog[3]'));
          clipboard.destroy();
        })
        clipboard.on('error', e =>{
          // 不支持复制
          // 释放内存
          clipboard.destroy()
        })
      },
    }
  }
</script>
<style scoped>
  .dash-icon {
    width: 80px;
  }
  .copy-toggle {
    position: absolute;
    right: 15px;
    top: 50%;
    padding: .69rem .75rem;
    transform: translateY(-50%);
    cursor: pointer;
    color: #fff;
    font-size: 1.4rem;
    background: #8cbe06;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    display: flex;
    align-items: center;
  }
  .d-block {
    display: block !important;
  }
  .card {
    border: 0;
    border-radius: .375rem;
    transition: all .2s;
    box-shadow: inset 0 0px 20px #0d6efd;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card1 {
    border: 0;
    border-radius: .375rem;
    transition: all .2s;
    box-shadow: inset 0 0px 20px #0d6efd;
    background: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.563rem 1.75rem 1.25rem 1.75rem;
  }
  .form-control:disabled {
    box-shadow: inset 0 0px 20px #0d6efd;
    background: #fff;
    color: #000;
  }
  @media (min-width: 768px) {
    .card-body-s1 {
      padding: 1.563rem 1.75rem 1.75rem 1.75rem;
    }
  }

  .card-title {
    color: #000;
  }
  .card-num {
    color: #000;
  }


  .user-nav li a {
    color: #333;
  }
  .user-nav li a:hover {
    color: #000000;
  }
  .h3 {
    color: #000;
  }
  .position-relative {
    position: relative;
    margin-top: 10px;
  }
  .rightas {
    margin-left: 2rem;
  }

  @media only screen and (max-width: 1024px) {
    .mobileflex {
      display: flex;
    }
  }
  .user-nav li.active a {
    color: #000000;
  }
</style>


