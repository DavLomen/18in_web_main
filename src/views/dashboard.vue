<template>
  <div class="HomePage" id="app">
    <Header></Header>
    <section>
      <div class="container">
        <div class="el-row">
          <div class="el-col el-col-5">
            <UserHeader></UserHeader>
          </div>
          <div class="el-col el-col-18 el-col-xs-24 el-col-lg-18 el-col-xl-18">
            <div  class="overview">
              <div class="pc1" style="padding-top: 40px;width: 100%;">
                <div class="mt-2 pt-0" style="max-width: 960px;margin: 1rem 15px;">
                  <div class="infos">
                    <div>{{UserInfo.username}}</div>
                    <div>{{$t('affiliates[13]')}}: <span style="font-weight: bolder;font-size: 1.5rem;color: yellow">{{UserInfo.useridentity}}</span></div>
                    <div>{{$t('affiliates[4]')}}: {{UserInfo.idcode}}</div>
                  </div>
                </div>
              </div>
              <section  class="section pt-0 pc" style="padding-bottom: 0px;">
                <div  class="container">
                  <div  class="row">
                    <div  class="col-md-6 mt-2 pt-0">
                      <div style="height: 100%" class="card work-process border-0 rounded shadow bg-light" @click="$router.push('/deposit')">
                        <div  class="card-body"
                             style="background-color: rgb(56, 66, 71); border-radius: 1.5rem; color: white;"><h5
                           class="para"> {{$t('dashboard[1]')}}</h5><h4
                                                                                      class="title notranslate">{{InitData.currency}} {{UserInfo.balance}}</h4>
                          <h5  class="para"> {{$t('product[5]')}}<br ></h5><h4
                             class="notranslate" style="color: yellow;">{{InitData.currency}} {{statisticalData.total_profit}} </h4></div>
                      </div>
                    </div>
                    <div  class="col-md-6 mt-2 pt-0">
                      <div style="height: 100%" class="card work-process border-0 rounded shadow bg-light">
                        <div  class="card-body"
                             style="background-color: rgb(56, 66, 71); border-radius: 1.5rem; color: white;position: relative;"><h5
                           class="para"> {{$t('dashboard[6]')}} <div class="btn btn-warning"  @click="$router.push('/deposit')">{{$t('head[7]')}}</div></h5>
                          <h4  class="title notranslate">{{InitData.currency}} {{statisticalData.total_recharge}}</h4>
                          <h5  class="para"> {{$t('dashboard[7]')}} <div class="btn btn-info"  @click="$router.push('/withdraw')">{{$t('head[8]')}}</div></h5>
                          <h4 class="notranslate">{{InitData.currency}} {{statisticalData.total_withdraw}}</h4>
                        </div>
                      </div>
                    </div>
<!--                    <div  class="col-md-4 mt-4 pt-2">-->
<!--                      <div  class="card work-process border-0 rounded shadow bg-light">-->
<!--                        <div  class="card-body"-->
<!--                             style="background-color: rgb(56, 66, 71); border-radius: 1.25rem; color: white;"><h5-->
<!--                           class="para"> Total Earned </h5><h4-->
<!--                                                                                 class="title notranslate"> $ 0.00 </h4>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div  class="col-md-4 mt-4 pt-2"><a-->
<!--                                                                          href="javascript:;" class="">-->
<!--                      <div  class="card work-process border-0 rounded shadow bg-light">-->
<!--                        <div  class="card-body"-->
<!--                             style="background-color: rgb(56, 66, 71); border-radius: 1.25rem; color: white;"><h5-->
<!--                           class="para"> Profits </h5><h4  class="title notranslate"-->
<!--                                                                            style="color: greenyellow;"> $ 0.00</h4>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </a></div>-->
<!--                    <div  class="col-md-4 mt-4 pt-2"><a-->
<!--                                                                          href="javascript:;" class="">-->
<!--                      <div  class="card work-process border-0 rounded shadow bg-light">-->
<!--                        <div  class="card-body"-->
<!--                             style="background-color: rgb(56, 66, 71); border-radius: 1.25rem; color: white;"><h5-->
<!--                           class="para"> Referrals </h5><h4-->
<!--                                                                              class="title notranslate">$ 0.00</h4>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </a></div>-->
                  </div>
                </div>
              </section>

                <div class="bal mobile">
                  <img :src="'./static/images/bg-div.png'">
                  <div class="bal-c">
                    <div class="bal-line"></div>
                    <div class="flex-bal">
                      <div class="bal-item">
                        <h4 class="notranslate">{{InitData.currency}} {{UserInfo.balance}}</h4>
                        <p>{{$t('dashboard[1]')}}</p>
                      </div>
                      <div class="bal-item two-sect">
                        <h4 class="notranslate">{{InitData.currency}} {{statisticalData.total_profit}}</h4>
                        <p>{{$t('product[4]')}}</p>
                      </div>
                      <div class="bal-item">
                        <h4 class="notranslate">{{InitData.currency}} {{statisticalData.total_recharge}}</h4>
                        <p>{{$t('dashboard[6]')}}</p>
                      </div>
                      <div class="bal-item two-sect">
                        <h4 class="notranslate">{{InitData.currency}} {{statisticalData.total_withdraw}}</h4>
                        <p>{{$t('dashboard[7]')}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="bal-bg"></div>
                </div>
              <div class="mobile">
                <div class="flex-3">
                  <div class="item-m" @click="$router.push('/deposit')">
                    <div>
                      <div class="bg"><img :src="'./static/images/credit_card.svg'"></div>
                      <div class="div">{{$t('head[7]')}}</div>
                    </div>
                  </div>
                  <div class="item-m" @click="$router.push('/withdraw')">
                    <div>
                      <div class="bg" style="background-color: rgb(23,85,213);"><img :src="'./static/images/arrow_upward.svg'"></div>
                      <div class="div">{{$t('head[8]')}}</div>
                    </div>
                  </div>
                  <div class="item-m" @click="$router.push('/transactions')">
                    <div>
                      <div class="bg" style="background-color: rgb(11,129,184);"><img :src="'./static/images/inventory_2.svg'"></div>
                      <div class="div">{{$t('head[22]')}}</div>
                    </div>
                  </div>
                  <div class="item-m"  @click="$router.push('/MyPackages')">
                    <div>
                      <div class="bg" style="background-color: rgb(110,24,120);"><img :src="'./static/images/receipt_long.svg'"></div>
                      <div class="div">{{$t('head[11]')}}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div   class="row mb-5">
                <div  class="col-md-9 mt-4">
                  <div
                       style="width: 100%; background-color: rgb(56, 66, 71); padding: 30px 0px; border-radius: 1.25rem;">
                    <div  style="width: 90%; margin: 0px auto;"><span
                                                                                        style="color: rgb(232, 232, 255); font-weight: bold; font-size: 24px;"> {{$t('dashboard[10]')}}</span>
                    </div>
                    <div
                         style="width: 90%; background-color: rgb(232, 232, 255); margin: 20px auto 0px; border-radius: 25px; padding: 10px 15px; display: flex; flex-flow: row; justify-content: space-between; box-shadow: white 0px 0px 3px;">
                      <span  class="notranslate"
                            style="color: rgb(10, 10, 26); line-height: 37px; white-space: pre-wrap; overflow-wrap: break-word; word-break: break-all;">{{promoteUrl}}</span>
                      <button  block="" size="sm" class="window copy" @click="copy" :data-clipboard-text="promoteUrl"
                              style="font-size: 18px; width: 100px; border-radius: 30px; background-color: rgb(246, 197, 197); color: black; border: none; padding: 5px 0px;">
                        {{$t('affiliates[16]')}}
                      </button>
                    </div>
                    <div  class="phone" style="text-align: center; margin-top: 20px;">
                      <button  block="" size="sm" class="copy" @click="copy" :data-clipboard-text="promoteUrl"
                              style="font-size: 18px; width: 90%; border-radius: 30px; background-color: rgb(246, 197, 197); color: black; border: none; padding: 10px 0px;">
                        {{$t('affiliates[16]')}}
                      </button>
                    </div>
                  </div>
                </div>
                <div  class="col-md-3 mt-4">
                  <div  class="rank" style="text-align: center; border-radius: 1.25rem;"><h6
                    >{{$t('affiliates[10]')}}</h6><h5 >{{teamNum}}</h5></div>
                </div>
              </div>
              <div  class="el-card box-card mt-4 mb-5 is-always-shadow">
                <div class="el-card__header">
                  <div  class="clearfix"><h4 >{{$t('dashboard[18]')}}</h4></div>
                </div>
                <div class="el-card__body" style="padding: 0px;">
                  <div  class="row">
                    <div  class="col-md-4 mt-4 pt-2"><a  href="javascript:;" @click="$router.push('/MyPackages?status=1')"
                                                                          class="">
                      <div  class="card work-process border-0 rounded shadow bg-light">
                        <div  class="card-body"
                             style="background-color: rgb(56, 66, 71); border-radius: 1.25rem; color: white;"><h5
                           class="para"> {{$t('dashboard[3]')}} </h5><h4  class="title notranslate">
                          {{statisticalData.activity_task}}</h4></div>
                      </div>
                    </a></div>
                    <div  class="col-md-4 mt-4 pt-2"><a  href="javascript:;" @click="$router.push('/MyPackages?status=3')"
                                                                          class="">
                      <div  class="card work-process border-0 rounded shadow bg-light">
                        <div  class="card-body"
                             style="background-color: rgb(56, 66, 71); border-radius: 1.25rem; color: white;"><h5
                           class="para"> {{$t('dashboard[4]')}} </h5><h4
                                                                            class="title notranslate"> {{statisticalData.expired_task }}</h4></div>
                      </div>
                    </a></div>
                    <div  class="col-md-4 mt-4 pt-2"><a  href="javascript:;" @click="$router.push('/MyPackages')"
                                                                          class="">
                      <div  class="card work-process border-0 rounded shadow bg-light">
                        <div  class="card-body"
                             style="background-color: rgb(56, 66, 71); border-radius: 1.25rem; color: white;"><h5
                           class="para"> {{$t('dashboard[5]')}} </h5><h4  class="title notranslate">
                          {{statisticalData.total_task}}</h4></div>
                      </div>
                    </a></div>
                  </div>
                </div>
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
      // let that = this;
      // that.loadData();
      // that.intv = setInterval(function () {
      //   that.loadData();
      // },3000)
      let post = {}
      this.$Model.TeamReport(post, data => {
        if (data.code == 1) {
          this.teamNum = data.teamNumber;
        }
      });
      let that = this;
      that.$Model.HasNewMessage(data=>{
        if (data.data == 1) {
          that.$Dialog.Confirm(that.$t('messageInfo[0]'), () => {
            that.$router.push(`/message`)
          }, that.$t('messageInfo[1]'));
        }
      })

      setInterval(function () {
        that.$Model.HasNewMessage(data=>{
          if (data.data == 1) {
            that.$Dialog.Confirm(that.$t('messageInfo[0]'), () => {
              that.$router.push(`/message`)
            }, that.$t('messageInfo[1]'));
          }
        })
      },300000);
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
  .overview .el-card {
    border: none;
    box-shadow: none;
  }
  .rank {
    background: #384247;
    height: 100%;
    padding: 30px;
    border-radius: 10px;
    position: relative;
    color: #ffffff;
  }

  /* 超小屏幕（手机，小于 768px） */
  @media (max-width: 768px) {
    .mobile {
      display: flex;
    }
    .el-col-md-6 {
      width: 50%;
    }
    .pc {
      display: none;
    }
    .pc1 {
      display: none;
    }
    .bal {
      display: block;
      width: 100%;
      height: 175px;
      border-radius: 10px;
      background-size: cover;
      background-position: center;
      position: relative;
      margin-bottom: 3rem;
    }
  }
  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {
    .mobile {
      display: none;
    }
    .pc {
      display: flex;
    }
    .bal {
      display: none;
      width: 100%;
      height: 175px;
      border-radius: 10px;
      background-size: cover;
      background-position: center;
      position: relative;
      margin-bottom: 3rem;
    }
  }

  .bal-line {
    position: absolute;
    width: 1px;
    height: 105px;
    left: 50%;
    top: 46px;
    opacity: 1;
    -webkit-transition: 1s ease;
    transition: 1s ease;
    -webkit-animation: an 1s ease forwards;
    animation: an 1s ease forwards;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    background: #FFFFFF;
    z-index: 3;
  }
  .dts_pl {
    background-size: cover;
  }
  .flex-bal {
    padding-top: 23px;
    display: flex;
    flex-wrap: wrap;
  }
  .dts_pl::before {

  }
  .bal-bg {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 0;
    opacity: 1;
    height: 175px;
    border-radius: 10px;
    background: linear-gradient(180deg, #f9c046 0%, #8f6e00 100%);
    left: 0;
  }
  .bal-c{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .inf {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    grid-gap: 9px;
  }

  .item-inf {
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    width: 100%;
    height: 88px;
  }

  .item-inf2 {
    background: #F9F2F8;
    border-radius: 10px;
    width: 100%;
    height: 88px;
  }

  .item-inf2 p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    padding-top: 15px;
    padding-left: 12px;


    color: #A22283;
  }

  .item-inf p {
    margin-top: 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
  }

  .item-inf h4, .item-inf2 h4  {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
  }

  .item-inf2 h4 {
    color: black;
  }
  .bal-item {
    width: 50%;
  }
  .two-sect {
    margin-top: 10px;
  }
  .bal-item h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 10px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 0;
  }
  .bal-item p {
    font-family: 'Roboto';
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin: 0;
    line-height: 14px;
    color: #FFFFFF;
  }
  .bal img {
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
  }

  .flex-3 {
    width: 100%;
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 2rem;
  }
  .flex-3 a {
    text-decoration: none;
  }
  .item-m {
    cursor: pointer;
    width: 25%;
  }
  .item-m .bg {
    width: 60px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(253 154 13);
    border-radius: 10px;
    margin: 0 auto;
  }
  .item-m .div {
    font-family: 'Roboto';
    font-style: normal;
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000000;
  }
  .item-m .bg img {
    width: 24px;
    height: 18px;
  }
  .bal {
    margin-top: 1rem;
  }
  .para {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .infos {
    /*width: 100%;*/
    text-align: left;
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    background-color: rgb(56, 66, 71);
    border-radius: 1.5rem;
    color: white;
    padding: 1.5rem 1rem;
  }
  .infos div {
    margin-right: 1rem;
  }
</style>


