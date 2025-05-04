<template>
      <div class="dashboard_section">
        <section>
        <div class="container">
          <div class="el-row">
            <div class="el-col-23 mx-auto">
              <div  class="overview">
                <div class="pc1" style="padding-top: 40px;width: 100%;">
                  <div class="el-col-24 mb-1 pl-2 pr-2">
                    <div class="Credit_Score fs-5 fw-bold">
                      {{ $t('dashboard[19]') }}:
                      <span style="color: #ddb500;">{{UserInfo.credit}}</span>
                    </div>
                    <div class="Membership_level mt-2 fs-5 fw-bold">
                      {{ $t('dashboard[20]') }}:
                      <span style="color: #ddb500;">{{UserInfo.useridentity}}</span>
                    </div>
                    <div class="Membership_level mt-2 fs-5 fw-bold">
                      {{ $t('dashboard[29]') }}:
                      <span style="color: #ddb500;">{{UserInfo.username}}</span>
                    </div>
                    <div class="Membership_level mt-2 fs-5 fw-bold">
                      {{ $t('dashboard[30]') }}:
                      <span style="color: #ddb500;">{{UserInfo.email || ''}}</span>
                    </div>
                  </div>
                  <div class="row cal justify-content-center mt-5">
                    <div class="el-col-lg-6 el-col-sm-12 el-col-xs-12 mb-1 pl-2 pr-2">
                      <div class="pc_color_card" style="background: #20c997; color: #fff;">
                        <div class="amt fs-5 fw-bold">{{InitData.currency}} {{UserInfo.balance}}</div>
                        <div class="label fs-5 fw-bold mt-3">{{ $t("withdraw[0]") }}</div>
                      </div>
                    </div>
                    <div class="el-col-lg-6 el-col-sm-12 el-col-xs-12 mb-1 pl-2 pr-2">
                      <div class="pc_color_card" style="background: rgb(253 195 19); color: #fff;">
                        <div class="amt fs-5 fw-bold">{{InitData.currency}} {{statisticalData.total_investment}}</div>
                        <div class="label fs-5 fw-bold mt-3">{{ $t("dashboard[27]") }}</div>
                      </div>
                    </div>
                    <div class="el-col-lg-6 el-col-sm-12 el-col-xs-12 mb-1 pl-2 pr-2">
                      <div class="pc_color_card" style="background:#17a2b8; color: #fff;">
                        <div class="amt fs-5 fw-bold">{{InitData.currency}} {{statisticalData.total_recharge}}</div>
                        <div class="label fs-5 fw-bold mt-3">{{ $t("withdraw[11]") }}</div>
                      </div>
                    </div>
                    <div class="el-col-lg-6 el-col-sm-12 el-col-xs-12 mb-1 pl-2 pr-2">
                      <div class="pc_color_card" style="background:#28a745; color: #fff;">
                        <div class="amt fs-5 fw-bold">{{InitData.currency}} {{statisticalData.total_withdraw}}</div>
                        <div class="label fs-5 fw-bold mt-3">{{ $t("withdraw[12]") }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row cal justify-content-center mt-1">
                  <div class="el-col-lg-8 el-col-sm-12 el-col-xs-12 mb-1 pl-2 pr-2">
                    <div class="pc_color_card">
                      <div class="label fs-5 fw-bold">{{ $t("withdraw[13]") }}</div>
                      <div class="amt fs-5 fw-bold  mt-4"  style="color: #529945;">+{{statisticalData.today_profit||0}}</div>
                    </div>
                  </div>
                  <div class="el-col-lg-8 el-col-sm-12 el-col-xs-12 mb-1 pl-2 pr-2">
                    <div class="pc_color_card">
                      <div class="label fs-5 fw-bold">{{ $t("withdraw[14]") }}</div>
                      <div class="amt fs-5 fw-bold  mt-4"  style="color: #f14d19;">+{{statisticalData.total_reward||0}}</div>
                    </div>
                  </div>
                  <div class="el-col-lg-8 el-col-sm-24 el-col-xs-24 mb-1 pl-2 pr-2">
                    <div class="pc_color_card">
                      <div class="label fs-5 fw-bold">{{ $t("withdraw[15]") }}</div>
                      <div class="amt fs-5 fw-bold  mt-4"  style="color: #ff8a00;">+{{statisticalData.total_profit||0}}</div>
                    </div>
                  </div>
                </div>
                <!-- My Order -->
                <div class="cal">
                  <div class="el-col-24 mb-2 pl-2 pr-2 dashboard_title">{{ $t('dashboard[18]') }}</div>
                  <div class="row justify-content-center mt-1">
                    <div class="el-col-lg-8 el-col-sm-12 el-col-xs-12 mb-1 pl-2 pr-2">
                      <div class="pc_color_card"  @click="$router.push('/dashboard/MyPackages?status=1')">
                        <div class="label fs-5 fw-bold">{{ $t('dashboard[3]') }}</div>
                        <div class="amt fs-5 fw-bold  mt-4"> {{statisticalData.activity_task}}</div>
                      </div>
                    </div>
                    <div class="el-col-lg-8 el-col-sm-12 el-col-xs-12 mb-1 pl-2 pr-2">
                      <div class="pc_color_card" @click="$router.push('/dashboard/MyPackages?status=3')">
                        <div class="label fs-5 fw-bold">{{ $t("dashboard[4]") }}</div>
                        <div class="amt fs-5 fw-bold  mt-4">{{statisticalData.expired_task }}</div>
                      </div>
                    </div>
                    <div class="el-col-lg-8 el-col-sm-24 el-col-xs-24 mb-1 pl-2 pr-2">
                      <div class="pc_color_card" @click="$router.push('/dashboard/MyPackages')">
                        <div class="label fs-5 fw-bold">{{ $t("dashboard[5]") }}</div>
                        <div class="amt fs-5 fw-bold  mt-4">{{statisticalData.total_task}}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Your Affiliate Link -->
                <div class="cal">
                  <div class="el-col-24 mb-2 pl-2 pr-2 dashboard_title">{{ $t('dashboard[10]') }}</div>
                  <div class="row justify-content-center mt-1">
                    <div class="el-col-lg-12 el-col-sm-12 el-col-xs-24 mb-1 pl-2 pr-2">
                      <div class="pc_link_input mt-2">
                        <div class="label">{{ $t('dashboard[21]') }}</div>
                        <div class="el-input">
                          <input class="mt-2" type="txet" :disabled="true" v-model="UserInfo.username"/>
                        </div>
                      </div>
                    </div>
                    <div class="el-col-lg-12 el-col-sm-12 el-col-xs-24 mb-1 pl-2 pr-2">
                      <div class="pc_link_input mt-2">
                        <div class="label">{{ $t('dashboard[22]') }}</div>
                        <div class="el-input">
                          <input class="mt-2" type="txet" :disabled="true" v-model="UserInfo.idcode"/>
                          <div class="copy_icon mt-2 copy_code" @click="copy('.copy_code')" :data-clipboard-text="UserInfo.idcode">
                            <van-icon name="description" size="25" color="#fff"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="el-col-lg-24 el-col-sm-24 el-col-xs-24 mb-1 pl-2 pr-2">
                      <div class="pc_link_input mt-2">
                        <div class="label">{{ $t('dashboard[23]') }}</div>
                        <div class="el-input">
                          <input class="mt-2" type="txet" :disabled="true" v-model="promoteUrl"/>
                          <div class="copy_icon copy_link mt-2" :data-clipboard-text="promoteUrl" @click="copy('.copy_link')">
                          <van-icon name="description" size="25" color="#fff" />
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 问题跳转 -->
                  <div class="cal">
                      <div class="row justify-content-center mt-1">
                        <div class="el-col-23 mb-1">
                          <div class="dashboard_question">
                            <div class="label">
                              {{ $t('dashboard[24]') }}
                            </div>
                            <div class="text mt-3">
                              {{ $t('dashboard[25]') }}
                            </div>
                            <div class="button" @click="$router.push('/FAQ')">
                              {{ $t('dashboard[26]') }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                <!-- 一下是手机模式显示的内容 -->

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
                        <p>{{$t('dashboard[28]')}}</p>
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
                  <div class="Membership_level mt-2 fs-5 fw-bold">
                    {{ $t('dashboard[29]') }}:
                    <span style="color: #ddb500;">{{UserInfo.username}}</span>
                  </div>
                  <div class="Membership_level mt-2 fs-5 fw-bold">
                    {{ $t('dashboard[30]') }}:
                    <span style="color: #ddb500;">{{UserInfo.email || ''}}</span>
                  </div>
                  <div>
                    <div class="Credit_Score fs-5 fw-bold" style="width: 100%">
                      {{ $t('dashboard[19]') }}:
                      <span style="color: #ddb500;">{{UserInfo.credit}}</span>
                    </div>
                    <div class="Membership_level mt-2 fs-5 fw-bold" style="width: 100%">
                      {{ $t('dashboard[20]') }}:
                      <span style="color: #ddb500;">{{UserInfo.useridentity}}</span>
                    </div>
                  </div>
                </div>
              <div class="mobile">
                <div class="flex-3">
                  <div class="item-m" @click="$router.push('/dashboard/deposit')">
                    <div>
                      <div class="bg"><img :src="'./static/images/credit_card.svg'"></div>
                      <div class="div">{{$t('head[7]')}}</div>
                    </div>
                  </div>
                  <div class="item-m" @click="$router.push('/dashboard/withdraw')">
                    <div>
                      <div class="bg" style="background-color:rgb(253 195 19);"><img :src="'./static/images/arrow_upward.svg'"></div>
                      <div class="div">{{$t('head[8]')}}</div>
                    </div>
                  </div>
                  <div class="item-m" @click="$router.push('/transactions')">
                    <div>
                      <div class="bg" style="background-color:#17a2b8;"><img :src="'./static/images/inventory_2.svg'"></div>
                      <div class="div">{{$t('head[22]')}}</div>
                    </div>
                  </div>
                  <div class="item-m"  @click="$router.push('/dashboard/MyPackages')">
                    <div>
                      <div class="bg" style="background-color: #28a745;"><img :src="'./static/images/receipt_long.svg'"></div>
                      <div class="div">{{$t('head[11]')}}</div>
                    </div>
                  </div>
                </div>
              </div>

                <!-- show_mobile 在手机模式下可见 -->
                <div   class="row mb-5 show_mobile">
                  <div  class="col-md-9 mt-4">
                    <div class="rank1"
                         style="width: 100%;  padding: 30px 0px; border-radius: 1.25rem;">
                      <div  style="width: 90%; margin: 0px auto;"><span
                                                                                          style="font-weight: bold; font-size: 24px;"> {{$t('dashboard[10]')}}</span>
                      </div>
                      <div
                           style="width: 90%; background-color: rgb(232, 232, 255); margin: 20px auto 0px; border-radius: 25px; padding: 10px 15px; display: flex; flex-flow: row; justify-content: space-between; box-shadow: white 0px 0px 3px;">
                        <span  class="notranslate"
                              style="color: rgb(10, 10, 26); line-height: 37px; white-space: pre-wrap; overflow-wrap: break-word; word-break: break-all;">{{promoteUrl}}</span>
                        <button  block="" size="sm" class="window copy " @click="copy" :data-clipboard-text="promoteUrl"
                                style="font-size: 18px; width: 100px; border-radius: 30px; background-color: rgb(246, 197, 197); color: black; border: none; padding: 5px 0px;">
                          {{$t('affiliates[16]')}}
                        </button>
                      </div>
                      <div  class="phone" style="text-align: center; margin-top: 20px;">
                        <button  block="" size="sm" class="copy" @click="copy" :data-clipboard-text="promoteUrl"
                                style="font-size: 18px; width: 90%; border-radius: 30px; background: linear-gradient(90deg, #ddb443, #009d24); color: #fff; border: none; padding: 10px 0px;">
                          {{$t('affiliates[16]')}}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div  class="col-md-3 mt-4">
                    <div  class="rank rank1" style="text-align: center; border-radius: 1.25rem;"><h6
                      >{{$t('affiliates[10]')}}</h6><h5 >{{teamNum}}</h5></div>
                  </div>
                </div>
                <div  class="el-card box-card mt-4 mb-5 is-always-shadow show_mobile">
                  <div class="el-card__body" style="padding: 0px;">
                    <div  class="row">
                      <div  class="col-md-4 mt-4 pt-2"><a  href="javascript:;"
                                                                            class="">
                        <div  class="card work-process border-0 rounded shadow bg-light">
                          <div  class="card-body rank1"
                               style="border-radius: 1.25rem; "><h5
                             class="para"> {{$t('withdraw[13]')}} </h5><h4  class="title notranslate">
                            {{statisticalData.today_profit||0}}</h4></div>
                        </div>
                      </a></div>
                      <div  class="col-md-4 mt-4 pt-2"><a  href="javascript:;"
                                                                            class="">
                        <div  class="card work-process border-0 rounded shadow bg-light">
                          <div  class="card-body rank1"
                               style="border-radius: 1.25rem;"><h5
                             class="para"> {{$t('withdraw[14]')}} </h5><h4
                                                                              class="title notranslate"> {{statisticalData.total_reward }}</h4></div>
                        </div>
                      </a></div>
                      <div  class="col-md-4 mt-4 pt-2"><a  href="javascript:;"
                                                                            class="">
                        <div  class="card work-process border-0 rounded shadow bg-light">
                          <div  class="card-body rank1"
                               style=" border-radius: 1.25rem; "><h5
                             class="para"> {{$t('withdraw[15]')}} </h5><h4  class="title notranslate">
                            {{statisticalData.total_profit}}</h4></div>
                        </div>
                      </a></div>
                    </div>
                  </div>
                </div>
                <div  class="el-card box-card mt-4 mb-5 is-always-shadow show_mobile">
                  <div class="el-card__header">
                    <div  class="clearfix"><h4 >{{$t('dashboard[18]')}}</h4></div>
                  </div>
                  <div class="el-card__body" style="padding: 0px;">
                    <div  class="row">
                      <div  class="col-md-4 mt-4 pt-2"><a  href="javascript:;" @click="$router.push('/dashboard/MyPackages?status=1')"
                                                                            class="">
                        <div  class="card work-process border-0 rounded shadow bg-light">
                          <div  class="card-body rank1"
                               style="border-radius: 1.25rem; "><h5
                             class="para"> {{$t('dashboard[3]')}} </h5><h4  class="title notranslate">
                            {{statisticalData.activity_task}}</h4></div>
                        </div>
                      </a></div>
                      <div  class="col-md-4 mt-4 pt-2"><a  href="javascript:;" @click="$router.push('/dashboard/MyPackages?status=3')"
                                                                            class="">
                        <div  class="card work-process border-0 rounded shadow bg-light">
                          <div  class="card-body rank1"
                               style="border-radius: 1.25rem;"><h5
                             class="para"> {{$t('dashboard[4]')}} </h5><h4
                                                                              class="title notranslate"> {{statisticalData.expired_task }}</h4></div>
                        </div>
                      </a></div>
                      <div  class="col-md-4 mt-4 pt-2"><a  href="javascript:;" @click="$router.push('/dashboard/MyPackages')"
                                                                            class="">
                        <div  class="card work-process border-0 rounded shadow bg-light">
                          <div  class="card-body rank1"
                               style=" border-radius: 1.25rem; "><h5
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
      </div>
  </template>
  <script>
    import Clipboard, { copy } from 'clipboard';
    import UserHeader from '@/components/UserHeader_new'
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

      computed: {},
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
              that.$router.push(`/dashboard/message`)
            }, that.$t('messageInfo[1]'));
          }
        })

        // setInterval(function () {
        //   that.$Model.HasNewMessage(data=>{
        //     if (data.data == 1) {
        //       that.$Dialog.Confirm(that.$t('messageInfo[0]'), () => {
        //         that.$router.push(`/dashboard/message`)
        //       }, that.$t('messageInfo[1]'));
        //     }
        //   })
        // },300000);
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
        copy (className =  '.copy') {
          let that = this;
          var clipboard = new Clipboard(className)
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
    .fs-5{font-size:1.25rem!important}
    .fw-bold{
      font-weight: 700!important;
    }
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
    .rank1 {
      background: rgb(245,242,251);
      color: #000;
    }

    /* 超小屏幕（手机，小于 768px） */
    @media (max-width: 768px) {
      .mobile {
        display: flex;
      }
      .show_mobile{
        display: block;
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
        margin-bottom: 1rem;
      }
      .cal{
        display: none;
      }
    }
    /* 小屏幕（平板，大于等于 768px） */
    @media (min-width: 768px) {
      .mobile {
        display: none;
      }
      .show_mobile{
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
      background: #20c997;
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
      background: #20c997;
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
    .flex_conntainer{
      overflow: hidden;
      height: 100vh;
    }
    .flex_conntainer .right{
      overflow-y: scroll;
    }
    .flex_conntainer .left{
      overflow-y: scroll;
    }
    @media (max-width: 768px) {
      .flex_conntainer {
        overflow: scroll;
      }
    }
    /* 20250423新增 */
    .pc_color_card{
      position: relative;
      width: 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin-bottom: 2rem;
      transition: all .3s ease 0s;
      background-color: #fff;
      -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .15);
      box-shadow: 0 0 10px rgba(0, 0, 0, .15);
      border-radius: 10px;
      text-align: center;
      padding: 40px 17px;
      cursor: pointer;
    }
    .pc_color_card:hover{
      transform: translateY(-5px);
    }
    .dashboard_title{
      color: #20c997;
      font-family: Roboto;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-size: 30px;
    }
    .pc_link_input{
      width: 100%;
      border-radius: 4px;
    }
    .pc_link_input .el-input{
      position: relative;
    }
    .pc_link_input .el-input input{
      height: 2.5rem;
      line-height: 4.5rem;
      padding: 0 1rem;
      font-family: myFont;
      color: #000;
      border: 1px solid #d9d9d9 !important;
      background-color: #efefef !important;
      width: 100%;
      border-radius: 4px;
    }
    .copy_icon{
      position: absolute;
      top:0;
      right: 0;
      height: 2.5rem;
      width: 2.5rem;
      background: #20c997;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .dashboard_question{
      width: 100%;
      padding: 23px 44px;
      border-radius: 10px;
      background: #f0e9f3;
      margin-top: 31px;
      margin-bottom: 60px;
      font-size: 1.5rem;
    }
    .dashboard_question .label{
      color: #20c997;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin: 0;
    }

    .dashboard_question .text{
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin: 0;
      font-size: 1rem;
    }

    .dashboard_question .button{
      display: inline-block;
      font-size: 16px;
      border-radius: 10px;
      border: 1px solid #20c997;
      padding: 13px 32px;
      margin-top: 20px;
      color: #20c997;
      font-family: Roboto;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      cursor: pointer;
    }
  </style>


