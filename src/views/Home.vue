<template>
  <div class="HomePage">
    <div class="app-wrapper">
      <Header></Header>
      <div class="container hero-wrap ">
        <div
          class="box1 cover first-box-wraper"
          style="position: relative;background: url(./static/images/bg.jpg) no-repeat;background-size: 100% 100%"
        >
<!--          <img :src="'./static/images/bg.jpg'" class="first-box-wraper-img-layer" data-v-27b24e63="">-->
<!--          <div class="video">-->
<!--            <video id="v1" autoplay loop muted playsinline webkit-playsinline="true" style="width: 100%;height: 100%;">-->
<!--              <source :src="'./static/images/bg.mp4?t=15'" type="video/mp4"  />-->
<!--            </video>-->
<!--          </div>-->

          <div class="box-wrapper top-wraper" style="    max-width: 1500px;">
            <div class="box1-inner-area left-info-area" style="overflow-x: hidden">
              <div class="row" style="overflow-x: hidden">
                <div class="col-md-6" >
                  <div class="box1-title" style="padding-right: 20%;color: #198754">{{$t('newhome[0]',{WT:InitData.setting.web_title})}}</div>
                  <div class="box1-desc" style="padding-right: 20%;color: #198754">
                    {{$t('long[0]',{WT:InitData.setting.web_title})}}
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="swiperdiv" style="margin: 0 auto;">
                    <swiper
                      :options="swiperOption0" ref="mySwiper" style="width: 100%;border-radius: 10px"
                      class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events banner-slider swiper-button-s3"
                    >
                      <swiper-slide v-for="(item,index) in InitData.bannerList" :key="index">
                        <div  class="card">
                          <div  class="hero-image">
                            <img :src="InitData.setting.up_url+item"  alt="" style="width: 100%;height: 100%;object-fit: cover;">
                          </div>
                        </div>
                      </swiper-slide>
                    </swiper>
                  </div>
                </div>
              </div>
<!--              <div class="input-relative w-480 mt-5">-->
<!--                <button @click="$router.push('/register')" class="main-btnNew" style="min-width: 200px;">关于Gem Miners</button>-->
<!--                <button @click="$router.push('/register')" class="main-btnNew" style="min-width: 200px;">{{$t('head[2]')}}</button>-->
<!--                <button @click="$router.push('/login')" class="main-btnNew dasbtn" style="min-width: 200px;">{{$t('head[3]')}}</button>-->
<!--              </div>-->
              <div class="btn-area" data-v-56103c20="">
<!--                <div class="btn about-us-btn" style="background-size: 100% 100%;" @click="showVideo">-->
<!--                  <div class="btn-text" style="position:relative;">-->
<!--                    {{$t('newhome[2]')}}-->
<!--                  </div>-->
<!--                  <div class="btn-mask" data-v-56103c20=""></div>-->
<!--                </div>-->
                <div style="display: flex;margin: 10px 0;">
                  <div  class="btn start-btn" @click="$router.push('/register')">{{$t('register.text[4]')}}</div>
                  <div class="btn start-btn" @click="$router.push('/login')">{{$t('head[3]')}}</div>
                </div>
                <div style="display: flex;margin: 10px 0;">
                  <div class="btn start-btn" style="background: #fe9500" @click="$router.push('/deposit')">{{$t('head[7]')}}</div>
                  <div  class="btn start-btn" style="background: #fe9500" @click="$router.push('/withdraw')">{{$t('head[8]')}}</div>
                </div>

                <div style="color:#0a58ca;font-size: 1.75rem;margin: 0;padding-top: 0.5rem;">
                  <p style="color: #198754;font-size: 1.75rem;margin: 0;padding: 0rem;">{{$t('home[1]')}}</p>
                  <p style="color:#198754;font-size: 1.75rem;margin: 0;padding: 0.5rem 0;">{{$t('home[2]')}}</p>
                  <p style="color:#198754;font-size: 1.75rem;margin: 0;padding: 0rem;" v-html="$t('home[3]')"></p>
                </div>

                <div style="display: flex;margin: 10px 0;">
                  <img @click="downloadApp('andriod')" :src="'./static/images/google-play.png'" style="height: 4rem;">
                  <img @click="downloadApp('ios')" :src="'./static/images/apple-store.png'" style="height: 4rem;margin-left: 1rem">
                </div>

              </div>
            </div>

          </div>
        </div>
        <div style="width: 100%;position: sticky;top: 0;">
          <iframe class="iframe" scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ADOGEUSD%22%2C%22title%22%3A%22Dogecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ALTCUSD%22%2C%22title%22%3A%22Litecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABCHUSD%22%2C%22title%22%3A%22Bitcoin%20Cash%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AADAUSD%22%2C%22title%22%3A%22Cardano%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AXRPUSD%22%2C%22title%22%3A%22XRP%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22normal%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22globalecrypto.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22sunminer.com%2F%22%7D" title="ticker tape TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: 58px; width: 100%;"></iframe>
        </div>
        <van-notice-bar color="red" left-icon="volume-o" scrollable :text="InitData.notifications?InitData.notifications[0]:''" />
        <div style="display: flex;justify-content: right;padding-right: 20px;align-items: center;    font-size: 1.5rem;">
          <div> {{$t('dpwd[1]')}}</div>
          <div class="shareweb">
            <div>
              <img @click="handleShare('facebook')" :src="'./static/image/share1.png?t=1'" name="fb" style="width: 40px;" />
              <img @click="handleShare('twitter')" :src="'./static/image/share2.png?t=1'" name="tw" style="width: 40px;" />
              <img @click="handleShare('telegram')" :src="'./static/image/share3.png?t=1'" name="tg" style="width: 40px;margin-right: 5px" />
<!--              <img @click="handleShare('youtube')" :src="'./static/image/share4.png'" name="youtube" style="width: 35px;margin-right: 5px" />-->
              <img @click="handleShare('whatsapp')" :src="'./static/image/share5.png?t=1'" name="whats" style="width: 40px;" />
              <img @click="handleShare('linkin')" :src="'./static/image/share7.png?t=1'" name="whats" style="width: 40px;    border-radius: 100%;" />
              <img onclick="void((function() {var e=document.createElement('script' );e.setAttribute('type','text/javascript' );e.setAttribute('charset','UTF-8' );e.setAttribute('src','//assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)})());" :src="'./static/image/share8.png?t=1'" name="whats" style="width: 40px;    border-radius: 100%;" />
              <img @click="handleShare('reddit')" :src="'./static/image/share9.png?t=1'" name="whats" style="width: 40px;    border-radius: 100%;" />
              <img @click="handleShare('mixit')" :src="'./static/image/share10.png?t=1'" name="whats" style="width: 40px;    border-radius: 100%;" />

            </div>
          </div>
        </div>
        <div class="container box2" style="padding-top: 0 !important;">
          <div class="box-wrapper">
            <div class="box2-title">{{$t('home[4]')}}</div>
            <div class="tab-list">
              <div class="tab-item" @click="$router.push('/register')">
                <img :src="'./static/image/home1.png?t=1'" class="img" />
                <div class="title" >1. {{$t('register.text[0]')}}</div>
                <div class="desc">
                  {{$t('home[5]',{WT:InitData.setting.web_title})}}
                </div>
              </div>
              <div class="tab-item" @click="$router.push('/product')">
                <img :src="'./static/image/home2.png?t=1'" class="img" />
                <div class="title">2. {{$t('home[6]')}}</div>
                <div class="desc">
                  {{$t('home[7]')}}
                </div>
              </div>
              <div class="tab-item" @click="jumper">
                <img  :src="'./static/image/home3.png?t=1'" class="img" />
                <div class="title">3. {{$t('home[8]')}}</div>
                <div class="desc">
                  {{$t('home[9]')}}
                </div>
              </div>
              <div class="tab-item">
                <img  :src="'./static/image/home4.png?t=1'" class="img" />
                <div class="title">4. {{$t('home[23]')}}</div>
                <div class="desc">
                  {{$t('home[24]')}}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section namespace="affiliate">
          <div class="container">
            <div class="box3 box-wrapper">
              <div class="row">
                <div class="col-sm-6" style="color: rgb(22, 28, 45); font-family: Roboto; font-size: 18px;padding-right: 1rem;">
                  {{$t('long[1]')}}
                  <br>{{$t('long[2]')}}
                  <br>{{$t('long[3]')}}
                  <br>
                  <br>{{$t('long[4]')}}
                  <br>{{$t('long[5]')}}
                  <br>{{$t('long[6]')}}
                </div>
                <div class="col-sm-6" style="color: rgb(22, 28, 45); font-family: Roboto; font-size: 18px;padding-right: 1rem;">
                  <img :src="'./static/image/zzz.png'" style="    width: 90%;
    margin: 5%;
    display: block;">
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6" style="color: rgb(22, 28, 45); font-family: Roboto; font-size: 18px;padding-right: 1rem;">
                  <img :src="'./static/image/yyy.png'" style="    width: 90%;
    margin: 5%;
    display: block;">
                </div>
                <div class="col-sm-6" style="color: rgb(22, 28, 45); font-family: Roboto; font-size: 18px;padding-right: 1rem;">
                  <br>{{$t('long[7]')}}
                  <br>{{$t('long[8]')}}
                  <br>{{$t('long[9]')}}
                  <br>{{$t('long[10]')}}
                  <br>
                  <br>{{$t('long[11]')}}
                  <br>{{$t('long[12]')}}
                  <br>{{$t('long[13]')}}
                  <br>{{$t('long[14]')}}
                </div>

              </div>

            </div>
          </div>
        </section>

        <div class="container box3">
          <div class="box-wrapper">
            <div class="box3-title">{{$t('newhome[4]')}}</div>
            <div style="font-size: 1.5rem;padding: 2rem;line-height: 2.5rem;color: #000000;text-align: center;">{{$t('newhome[5]')}}</div>
            <div class="product-list">
              <div class="product-item" v-for="(item,index) in listData" :key="index">
                <div class="img-box">
                  <img
                    :src="InitData.setting.up_url + item.icon"
                    class="img"
                  />
                </div>
                <div class="right">
                  <img v-if="item.progress>=100" :src="'./static/image/out.png'" style="position: absolute;
    right: 1rem;
    bottom: 8rem;
    width: 10rem;">
                  <div class="name">
                    {{item.title}}
                  </div>
                  <div class="bottom">
                    <div class="info-list">
                      <div class="info-item">
                        <div class="label">{{$t('product[0]')}}</div>
                        <div class="value">${{item.amount}}</div>
                      </div>
                      <div class="info-item">
                        <div class="label">{{$t('product[2]')}}</div>
                        <div class="value">{{item.cycle}} {{$t('product[15]')}}</div>
                      </div>
                      <div class="info-item">
                        <div class="label">{{$t('product[3]')}}</div>
                        <div class="value">${{(item.daily_rate/100*item.amount).toFixed(2)}}</div>
                      </div>
                      <div class="info-item">
                        <div class="label">{{$t('product[4]')}}</div>
                        <div class="value">${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*item.cycle).toFixed(2))}}</div>
                      </div>
                      <div class="info-item">
                        <div class="label">{{$t('product[5]')}}</div>
                        <div class="value" style="color: #F9A504">
                          ${{item.amount}} + ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*item.cycle).toFixed(2))}}
                        </div>
                      </div>
                      <div class="info-item">
                        <div class="label">{{$t('product[6]')}}</div>
<!--                        <div class="label">{{$t('product[6]')}}</div>-->
                        <div class="value rebate">{{item.type==1?$t('product[7]'):$t('product[17]')}}</div>
                      </div>
                                        <div class="info-item">
                                          <div class="label">{{$t('product[9]')}}</div>
                                          <div class="value">{{item.miner}}</div>
                                        </div>
                                        <div class="info-item">
                                          <div class="label">{{$t('bbbx[0]')}}</div>
                                        </div>
                    </div>
                    <div class="right-actions">
                      <div class="bonus" v-if="item.amount!=10">
                        <div class="label">{{$t('product[10]')}}</div>
                        <ul class="plan-referral justify-content-center mb-2">
                          <div class="single-referral" v-for="(aa,i) in item.affiliate_bonus">
                            <span>{{aa}} %</span>
                            <p>{{$t('affiliates[13]')}} {{(i+1)}}</p>
                          </div>
                        </ul>
                      </div>
                      <div class="bonus" v-else>
                        <div class="label">{{$t('product[10]')}}</div>
                        <ul class="plan-referral justify-content-center mb-2">
                          <div class="single-referral" v-for="(aa,i) in item.affiliate_bonus">
                            <span>0 %</span>
                            <p>{{$t('affiliates[13]')}} {{(i+1)}}</p>
                          </div>
                        </ul>
                      </div>
                      <div class="buy-btn disabled-btn" v-if="item.progress>=100">{{$t('product[13]')}}</div>
                      <div class="buy-btn " style="background: rgb(13, 110, 253);" v-else @click="getInfoData(item.id)">{{$t('product[12]')}}</div>
                    </div>
                  </div>

                </div>
                <div class="progress">
                  <div role="progressbar" aria-valuemin="0" aria-valuemax="100" :aria-valuenow="item.progress"
                       class="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                       :style="`min-width: fit-content;width: ${item.progress}%;`"><span><strong v-html="$t('sold[0]',{P:item.progress})"></strong></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container box3">
          <div class="box-wrapper">
            <div class="title-main">
              {{$t('home[10]')}}
            </div>
            <p class="mb-0 mx-auto text-center t-short-para" style="font-size: 16px">
              {{$t('home[25]')}}
            </p>
            <div class="offer-block max960">
              <div  class="row">
                <div  class="col-lg-4 col-md-6 mt-4 ">
                  <div  class="card border-0 text-center features feature-primary feature-clean px-3">
                    <div  class="icons text-center mx-auto"><i
                      class="avatar avatar-md-md rounded-md"><img v-lazy="'./static/image/www1.png'" alt="" class="avatar avatar-md-sm"></i></div>
                    <div  class="content mt-4"><h5  class="fw-semibold">{{$t('home[11]')}}</h5>
                      <p  class="text-muted mb-0">
                        {{$t('home[12]')}}
                      </p></div>
                  </div>
                </div>
                <div  class="col-lg-4 col-md-6 mt-4 ">
                  <div  class="card border-0 text-center features feature-primary feature-clean px-3">
                    <div  class="icons text-center mx-auto"><i
                      class="avatar avatar-md-md rounded-md"><img
                      v-lazy="'./static/image/www2.png'" alt="" class="avatar avatar-md-sm"></i></div>
                    <div  class="content mt-4"><h5  class="fw-semibold">{{$t('home[13]')}}</h5>
                      <p  class="text-muted mb-0">
                        {{$t('home[14]')}}
                      </p></div>
                  </div>
                </div>
                <div  class="col-lg-4 col-md-6 mt-4 ">
                  <div  class="card border-0 text-center features feature-primary feature-clean px-3">
                    <div  class="icons text-center mx-auto"><i
                      class="avatar avatar-md-md rounded-md"><img
                      v-lazy="'./static/image/www3.png'" alt="" class="avatar avatar-md-sm"></i></div>
                    <div  class="content mt-4"><h5  class="fw-semibold">
                      {{$t('home[15]')}}
                    </h5>
                      <p  class="text-muted mb-0">
                        {{$t('home[16]')}}
                      </p></div>
                  </div>
                </div>
                <div  class="col-lg-4 col-md-6 mt-4 ">
                  <div  class="card border-0 text-center features feature-primary feature-clean px-3">
                    <div  class="icons text-center mx-auto"><i
                      class="avatar avatar-md-md rounded-md"><img
                      v-lazy="'./static/image/www4.png'" alt="" class="avatar avatar-md-sm"></i></div>
                    <div  class="content mt-4"><h5  class="fw-semibold">{{$t('home[17]')}}</h5>
                      <p  class="text-muted mb-0">
                        {{$t('home[18]')}}
                      </p></div>
                  </div>
                </div>
                <div  class="col-lg-4 col-md-6 mt-4 ">
                  <div  class="card border-0 text-center features feature-primary feature-clean px-3">
                    <div  class="icons text-center mx-auto"><i
                      class="avatar avatar-md-md rounded-md"><img
                      v-lazy="'./static/image/www5.png'" alt="" class="avatar avatar-md-sm"></i></div>
                    <div  class="content mt-4"><h5  class="fw-semibold">{{$t('home[19]')}}</h5>
                      <p  class="text-muted mb-0">
                        {{$t('home[20]')}}
                      </p></div>
                  </div>
                </div>
                <div  class="col-lg-4 col-md-6 mt-4 ">
                  <div  class="card border-0 text-center features feature-primary feature-clean px-3">
                    <div  class="icons text-center mx-auto"><i
                      class="avatar avatar-md-md rounded-md"><img
                      v-lazy="'./static/image/www6.png'" alt="" class="avatar avatar-md-sm"></i></div>
                    <div  class="content mt-4"><h5  class="fw-semibold">{{$t('home[21]')}}</h5>
                      <p  class="text-muted mb-0">
                        {{$t('home[22]')}}
                      </p></div>
                  </div>
                </div>
                <div  class="col-lg-3 col-md-6 mt-4 ">
                  <div  class="card border-0 text-center features feature-primary feature-clean px-3">
                    <div  class="icons text-center mx-auto"><i
                      class="avatar avatar-md-md rounded-md"><img
                      v-lazy="'./static/image/www7.png'" alt="" class="avatar avatar-md-sm"></i></div>
                    <div  class="content mt-4"><h5  class="fw-semibold">{{$t('home[26]')}}</h5>
                      <p  class="text-muted mb-0">
                        {{$t('home[27]')}}
                      </p></div>
                  </div>
                </div>
                <div  class="col-lg-3 col-md-6 mt-4 ">
                  <div  class="card border-0 text-center features feature-primary feature-clean px-3">
                    <div  class="icons text-center mx-auto"><i
                      class="avatar avatar-md-md rounded-md"><img
                      v-lazy="'./static/image/www8.png'" alt="" class="avatar avatar-md-sm"></i></div>
                    <div  class="content mt-4"><h5  class="fw-semibold">{{$t('home[28]')}}</h5>
                      <p  class="text-muted mb-0">
                        {{$t('home[29]')}}
                      </p></div>
                  </div>
                </div>
                <div  class="col-lg-3 col-md-6 mt-4 ">
                  <div  class="card border-0 text-center features feature-primary feature-clean px-3">
                    <div  class="icons text-center mx-auto"><i
                      class="avatar avatar-md-md rounded-md"><img
                      v-lazy="'./static/image/www9.png'" alt="" class="avatar avatar-md-sm"></i></div>
                    <div  class="content mt-4"><h5  class="fw-semibold">{{$t('home[30]')}}</h5>
                      <p  class="text-muted mb-0">
                        {{$t('home[31]')}}
                      </p></div>
                  </div>
                </div>
                <div  class="col-lg-3 col-md-6 mt-4 ">
                  <div  class="card border-0 text-center features feature-primary feature-clean px-3">
                    <div  class="icons text-center mx-auto"><i
                      class="avatar avatar-md-md rounded-md"><img
                      v-lazy="'./static/image/www10.png'" alt="" class="avatar avatar-md-sm"></i></div>
                    <div  class="content mt-4"><h5  class="fw-semibold">{{$t('home[32]')}}</h5>
                      <p  class="text-muted mb-0">
                        {{$t('home[33]')}}
                      </p></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="figure"></div>
            <div class="section profit-section">
              <div id="particles-2">
              </div>
              <div class="section__head">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-md-8 col-xl-6">
                      <h2 class="mt-0 text-center title-main">{{$t('calculator[0]')}}</h2>
                      <p class="mb-0 mx-auto text-center t-short-para" style="font-size: 16px">
                        {{$t('calculator[1]')}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container" style="max-width: 90%;margin: 0 auto;">
                <div class="row">
                  <div class="col-12">
                    <div class="profit-calculator">
                      <div class="el-row g-3">
                        <div class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-8">
                          <div class="form-group">
                            <label class="d-inline-block mb-2 t-heading-font fw-md">{{$t('calculator[2]')}}</label>
<!--                            <input readonly @click="selcets = !selcets" name="plan_id" class="form-select form&#45;&#45;select form&#45;&#45;control" v-model="selcett" />-->

<!--                            <div v-if="selcets" style="width: 100%" name="plan_id" class="form-select form&#45;&#45;select form&#45;&#45;control">-->
<!--                              <div :value="item.id" v-for="(item,index) in listData" :key="index" @click="handelChange(item)">-->
<!--                                {{item.title}}-->
<!--                              </div>-->
<!--                            </div>-->
                            <select name="plan_id" style="width: 21.5rem;" class="form-select form--select" v-model="selectM" @change="handelChange">
                              <option :value="item.id" v-for="(item,index) in listData" :key="index">
                                {{item.title}}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-8">
                          <div class="form-group">
                            <label class="d-inline-block mb-2 t-heading-font fw-md">{{$t('calculator[3]')}}</label>
                            <input style="width: 20rem" type="text" v-model="selectP.amount" name="amount" class="form-control form--control" autocomplete="off">
                            <code class="limit"></code>
                          </div>
                        </div>
                        <div class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-8">
                          <div class="form-group">
                            <label class="d-inline-block mb-2 t-heading-font fw-md">{{$t('calculator[4]')}}</label>
                            <input style="width: 20rem" v-if="selectP.daily_rate !=''" type="text" v-model="((selectP.daily_rate)/100*selectP.amount*selectP.cycle).toFixed(4)" class="form-control form--control" readonly>
                            <input style="width: 20rem" v-else type="text" class="form-control form--control">
                          </div>
                          <code class="msg">{{$t('calculator[5]')}}: {{selectP.daily_rate}}%</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<!--        <div  class="box6" style="position: relative;margin-top: 2rem;">-->
<!--          <video :poster="'./static/images/homeposter1.jpg'" webkit-playsinline="true" playsinline="true" :src="'./static/KSD1.mp4'" controls style="width:100%;max-width: 960px;display: block;margin: 0 auto;"></video>-->
<!--        </div>-->

        <section class="transaction py-120">
          <div class="container max960">
            <div class="box-wrapper">
              <div class="title-main">{{$t('latest[0]')}}</div>
              <div class="row gy-4">
                <div class="col-lg-4">
                  <h4 class="transaction__title mb-md-4 mb-3 text-center">{{$t('realtime[0]')}}</h4>
                  <div class="transaction__content overflow-x-auto" style="border: 1px solid rgb(13,110,253);border-radius: 10px;width: 95%;margin: 0 auto;">
                    <table class="style-two scroll-table table">
                      <thead>
                      <tr>
                        <th>{{$t('latest[3]')}}</th>
                        <th>{{$t('latest[4]')}}</th>
                        <th>{{$t('latest[5]')}}</th>
                      </tr>
                      </thead>
                    </table>
                    <article class="item-body">
                      <div class="seamless-warp"><!----> <!---->
                        <div>
                          <div style="overflow: hidden;">
                            <swiper
                              :options="swiperOption" ref="mySwiper" style="height: 400px;width: 95%;margin:0 auto;background: rgba(0,0,0,0);border-radius: 1rem">
                              <swiper-slide v-if="item.type==3" v-for="(item,index) in InitData.fundList" :key="index">
                                <div class="card1" style="height: 70px;">
                                  <div class="d-flex align-items-center justify-content-between"
                                       style="padding-top: 2px; padding-bottom: 2px;">
                                    <div class="card__title" style="width: 33.33%">
                                      <div style="word-break:break-word;display: flex;width: 100%;align-items: center;font-size: 12px;">
                                        <img :src="`./static/head/${item.header}`" style="width: 30px;height: 30px;display:block;margin-right: 5px;">
                                        {{item.username}}
                                      </div>
                                    </div>
                                    <div class="card__subtitle" style="font-size:1.8rem;color: #FFC107 !important;padding: 0 5px;text-align: center;display: flex;align-items: center;justify-content: center;">{{item.money}}
                                    </div>
                                    <div class="card__time">{{item.time}}</div>
                                  </div>
                                </div>
                              </swiper-slide>
                            </swiper>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="col-lg-4">
                  <h4 class="transaction__title mb-md-4 mb-3 text-center">{{$t('latest[1]')}}</h4>
                  <div class="transaction__content overflow-x-auto" style="border: 1px solid rgb(13,110,253);border-radius: 10px;width: 95%;margin: 0 auto;">
                    <table class="style-two scroll-table table">
                      <thead>
                      <tr>
                        <th>{{$t('latest[3]')}}</th>
                        <th>{{$t('latest[4]')}}</th>
                        <th>{{$t('latest[5]')}}</th>
                      </tr>
                      </thead>
                    </table>
                    <article class="item-body">
                      <div class="seamless-warp"><!----> <!---->
                        <div>
                          <div style="overflow: hidden;">
                            <swiper
                              :options="swiperOption" ref="mySwiper" style="height: 400px;width: 95%;margin:0 auto;background: rgba(0,0,0,0);border-radius: 1rem">
                              <swiper-slide v-if="item.type==1" v-for="(item,index) in InitData.fundList" :key="index">
                                <div class="card1" style="height: 70px;">
                                  <div class="d-flex align-items-center justify-content-between"
                                       style="padding-top: 2px; padding-bottom: 2px;">
                                    <div class="card__title" style="width: 33.33%">
                                      <div style="word-break:break-word;display: flex;width: 100%;align-items: center;font-size: 12px;">
                                        <img :src="`./static/head/${item.header}`" style="width: 30px;height: 30px;display:block;margin-right: 5px;">
                                        {{item.username}}
                                      </div>
                                    </div>
                                    <div class="card__subtitle" style="font-size:1.8rem;color: #FFC107  !important;padding: 0 5px;text-align: center;display: flex;align-items: center;justify-content: center;">{{item.money}}
                                    </div>
                                    <div class="card__time">{{item.time}}</div>
                                  </div>
                                </div>
                              </swiper-slide>
                            </swiper>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="col-lg-4">
                  <h4 class="transaction__title mb-md-4 mb-3 text-center">{{$t('latest[2]')}}</h4>
                  <div class="transaction__content overflow-x-auto" style="border: 1px solid rgb(13,110,253);border-radius: 10px;width: 95%;margin: 0 auto;">
                    <table class="style-two scroll-table table">
                      <thead>
                      <tr>
                        <th>{{$t('latest[3]')}}</th>
                        <th>{{$t('latest[4]')}}</th>
                        <th>{{$t('latest[5]')}}</th>
                      </tr>
                      </thead>
                    </table>
                    <swiper
                      :options="swiperOption" ref="mySwiper" style="height: 400px;width: 95%;margin:0 auto;background: rgba(0,0,0,0);border-radius: 1rem">
                      <swiper-slide v-if="item.type==2" v-for="(item,index) in InitData.fundList" :key="index">
                        <div class="card1" style="height: 70px">
                          <div class="d-flex align-items-center justify-content-between"
                               style="padding-top: 2px; padding-bottom: 2px;">
                            <div class="card__title" style="width: 33.33%">
                              <div style="word-break:break-word;display: flex;width: 100%;align-items: center;font-size: 12px;align-content: center;">
                                <img :src="`./static/head/${item.header}`" style="width: 30px;height: 30px;display:block;margin-right: 5px;">
                                {{item.username}}
                              </div>
                            </div>
                            <div class="card__subtitle" style="font-size:1.8rem;color: #FFC107 !important;padding: 0 5px;text-align: center;display: flex;align-items: center;justify-content: center;">{{item.money}}
                            </div>
                            <div class="card__time">{{item.time}}</div>
                          </div>
                        </div>
                      </swiper-slide>
                    </swiper>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <div class="section faq-section" style="margin-top: 2rem">
          <div class="container">
            <div class="box7 box-wrapper">
              <div class="">
                <div class="title" style="margin-bottom: 2rem">{{$t('faq[0]')}}</div>
                <div class="section-heading__desc" style="margin-bottom: 1rem">{{$t('faq[1]')}}</div>
                <div class="faq-list">
                  <div class="faq-item" v-if="index<3" v-for="(item,index) in listDataQ" :key="index">
                    <div @click="showIndex = index"  class="faq-title">
                      <div class="name">{{item.title}}</div>
                      <div class="right-icon"><i :class="showIndex==index?'el-icon-minus on':'el-icon-plus'"></i></div>
                    </div>
                    <div class="faq-content" v-show="showIndex==index" v-html="item.content">
                    </div>
                  </div>
                  <div style="text-align: center;font-size: 2rem" v-if="!showMore" @click="showMore =true">
                    {{$t('more')}}<van-icon name="arrow-down" />
                  </div>
                  <div class="faq-item" v-if="showMore && index>=3" v-for="(item,index) in listDataQ" :key="index">
                    <div @click="showIndex = index"  class="faq-title">
                      <div class="name">{{item.title}}</div>
                      <div class="right-icon"><i :class="showIndex==index?'el-icon-minus on':'el-icon-plus'"></i></div>
                    </div>
                    <div class="faq-content" v-show="showIndex==index" v-html="item.content">
                    </div>
                  </div>
                  <div style="text-align: center;font-size: 2rem" v-if="showMore" @click="showMore =false">
                    <van-icon name="arrow-up" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div  class="news container">
          <div  class="box-wrapper">
            <div  class="text-center mb48"><h2 ><strong> {{$t('blog[4]')}}</strong></h2>
              <p style="color: #000;">{{$t('blog[5]')}}</p></div>
            <div  class="row1 articles">
              <div  class="col-sm-4 article-holder" v-for="(item,index) in listDataB" :key="index">
                <div   class="article">
                  <div  class="image" v-lazy:background-image="InitData.setting.up_url + item.cover_img"
                       >
<!--                    <a  href="/blog/tag/press" class="tag">新闻</a>-->
                  </div>
                  <div  class="details">
                    <div  class="row1">
                      <div  class="col-xs-6">
                      </div>
                      <div  class="col-xs-6 text-right">{{item.add_time}}</div>
                    </div>
                    <a href="javascript:" @click="$router.push(`/blogDetail/${item.id}`)"
                       class="">{{item.title}}</a></div>
                </div>
              </div>
            </div>
            <div  class="row">
              <div  class="col-sm-4"></div>
              <div  class="col-sm-4 text-center"><a href="javascript:" @click="$router.push('/blog')"
                                                    class="btn outline primary normal fluid text-center">{{$t('blog[6]')}}</a><br
                >
              </div>
              <div  class="col-sm-4"></div>
            </div>
          </div>
        </div>

        <section class="section-space">
          <div class="container">
            <div class="section-head text-center">
              <h3 class="mb-3" style="color: #000000;font-size: 2rem">{{$t('payment[0]')}}</h3>
              <p v-html="$t('payment[1]',{WT:InitData.setting.web_title})" style="color: #333;font-size: 1.5rem"></p>
            </div>
            <div class="PayJoinSection">
              <div class="wrap">
                <div class="item-box item-box_1">
                  <div class="item">
                    <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
                      <use data-v-cbf2c648="" xlink:href="#icon-BTC"></use>
                    </svg>
                  </div>
                  <div class="item">
                    <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
                      <use data-v-cbf2c648="" xlink:href="#icon-USDT-TRC20"></use>
                    </svg>
                  </div>
                  <div class="item">
                    <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
                      <use data-v-cbf2c648="" xlink:href="#icon-ETH"></use>
                    </svg>
                  </div>
                  <div class="item">
                    <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
                      <use data-v-cbf2c648="" xlink:href="#icon-LTC"></use>
                    </svg>
                  </div>
                  <div class="item">
                    <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
                      <use data-v-cbf2c648="" xlink:href="#icon-binance"></use>
                    </svg>
                  </div>
                  <div class="item">
                    <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
                      <use data-v-cbf2c648="" xlink:href="#icon-arnkm-c389e"></use>
                    </svg>
                  </div>
                  <div class="item">
                    <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
                      <use data-v-cbf2c648="" xlink:href="#icon-coinbase"></use>
                    </svg>
                  </div>
                  <div class="item">
                    <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
                      <use data-v-cbf2c648="" xlink:href="#icon-Kraken"></use>
                    </svg>
                  </div>
                  <div class="item">
                    <img :src="'./static/images/DOGE.png'" class="svg-icon">
                  </div>
                  <div class="item">
                    <img :src="'./static/images/SOL.png'" class="svg-icon">
                  </div>
                  <div class="item">
                    <img :src="'./static/images/XRP.png'" class="svg-icon">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div style="background: #a7cdf3;padding: 2rem 0;">


        <div class="bg-zth py-3 max9601">
          <div class="container  mb-5" style="margin-top: 0px !important;">
            <div class="mt-3  text-center">
              <h6 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;">
                <span class="text-z-fs fw-bold" style="font-size: 2.5rem">{{$t('partners[0]')}}</span></h6>
            </div>
            <div class="row mt-4">
              <div class="col-lg-12">
                <ul class="brand-style-2">
                  <li class="col-lg-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center mt-4">
                    <a target="_blank">
                      <img :src="'./static/images/hz1.webp'" alt="Partner 1" class="img-fluid" style="max-height: 50px; width: 80%;">
                    </a>
                  </li>
                  <li class="col-lg-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center mt-4">
                    <a target="_blank">
                      <img :src="'./static/images/hz2.png'" alt="Partner 1" class="img-fluid " style="max-height: 50px; width: 80%;">
                    </a>
                  </li>
                  <li class="col-lg-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center mt-4">
                    <a target="_blank">
                      <img :src="'./static/images/hz3.png'" alt="Partner 1" class="img-fluid" style="max-height: 50px; width: 80%;">
                    </a>
                  </li>
                  <li class="col-lg-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center mt-4">
                    <a target="_blank">
                      <img :src="'./static/images/hz4.svg'" alt="Partner 1" class="img-fluid" style="max-height: 50px; width: 80%;">
                    </a>
                  </li>
                  <li class="col-lg-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center mt-4">
                    <a target="_blank">
                      <img :src="'./static/images/hz5.webp'" alt="Partner 1" class="img-fluid" style="max-height: 50px; width: 80%;">
                    </a>
                  </li>
                  <li class="col-lg-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center mt-4">
                    <a target="_blank">
                      <img :src="'./static/images/hz6.png'" alt="Partner 1" class="img-fluid" style="max-height: 50px; width: 80%;">
                    </a>
                  </li>
                  <li class="col-lg-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center mt-4">
                    <a target="_blank">
                      <img :src="'./static/images/hz7.svg'" alt="Partner 1" class="img-fluid" style="max-height: 50px; width: 80%;">
                    </a>
                  </li>
                  <li class="col-lg-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center mt-4">
                    <a target="_blank">
                      <img :src="'./static/images/hz8.webp'" alt="Partner 1" class="img-fluid" style="max-height: 50px; width: 80%;">
                    </a>
                  </li>
                  <li class="col-lg-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center mt-4">
                    <a target="_blank">
                      <img :src="'./static/images/hz9.svg'" alt="Partner 1" class="img-fluid" style="max-height: 50px; width: 80%;">
                    </a>
                  </li>
                  <li class="col-lg-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center mt-4">
                    <a target="_blank">
                      <img :src="'./static/images/hz10.svg'" alt="Partner 1" class="img-fluid" style="max-height: 50px; width: 80%;">
                    </a>
                  </li>
                  <li class="col-lg-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center mt-4">
                    <a target="_blank">
                      <img :src="'./static/images/hz11.svg'" alt="Partner 1" class="img-fluid" style="max-height: 50px; width: 80%;">
                    </a>
                  </li>
                  <li class="col-lg-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center mt-4">
                    <a target="_blank">
                      <img :src="'./static/images/hz12.svg'" alt="Partner 1" class="img-fluid" style="max-height: 50px; width: 80%;">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
<!--        <section class="brand-section section-space max960" style="margin-bottom: 2rem">-->
<!--          <div class="container">-->
<!--            <div class="section-head text-center"><h2 class="mb-3" style="color:#000;">{{$t('partners[0]')}}</h2></div>-->
<!--            <div class="row g-gs">-->
<!--              &lt;!&ndash;              <div class="client-logo-item text-center">&ndash;&gt;-->
<!--              &lt;!&ndash;                <img :src="'./static/images/111.png'" alt="" class="img-fluid">&ndash;&gt;-->
<!--              &lt;!&ndash;              </div>&ndash;&gt;-->
<!--              <swiper ref="myswiper1" :options="swiperOption1" class="">-->
<!--                <swiper-slide v-for="(item,index) in 8" :key="index"  >-->
<!--                  <div class="" style="margin-right: 30px;">-->
<!--                    <div class="text-center" style="background: #b1d7fd;border-radius: 10px;">-->
<!--                      <img :src="`./static/images/coop_${item}.png`" alt="" class="img-fluid" style="display: block">-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </swiper-slide>-->
<!--              </swiper>-->
<!--              &lt;!&ndash;              <swiper :options="swiperOption2" class="">&ndash;&gt;-->
<!--              &lt;!&ndash;                <swiper-slide v-for="(item,index) in 7" :key="index" class="language__slider-single swiper-slide-duplicate-next" style="margin-right: 30px;">&ndash;&gt;-->
<!--              &lt;!&ndash;                  <div class="">&ndash;&gt;-->
<!--              &lt;!&ndash;                    <div class="text-center">&ndash;&gt;-->
<!--              &lt;!&ndash;                      <img :src="`./static/images/coop_${item+7}.png`" alt="" class="img-fluid">&ndash;&gt;-->
<!--              &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--              &lt;!&ndash;                  </div>&ndash;&gt;-->
<!--              &lt;!&ndash;                </swiper-slide>&ndash;&gt;-->
<!--              &lt;!&ndash;              </swiper>&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--        </section>-->

      </div>
    </div>


    <div class="mask" v-if="showNotice">
      <div class="modal">
        <div class="modal-header">
          <div class="modal-title">{{msg_title}}</div>
          <div class="close" @click="showNotice = false"><i class="el-icon-close"></i></div>
        </div>
        <div class="modal-body">
          <div class="payment-info" v-html="msg_content">
          </div>
        </div>
        <div class="modal-footer">
          <div class="confirm-btn" @click="showNotice= false">{{$t('confirm')}}</div>
        </div>
      </div>
    </div>
    <div class="mask imageDiv" style="z-index: 111" v-if="showNoticeImg">
      <div style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;justify-items: center;">
        <div style="position: relative;">
          <van-image @click="jumpImg" :src="InitData.setting.up_url + imgnotice.cover_img" fit="widthFix"></van-image>
          <div class="close" @click="showNoticeImg = false" style="position: absolute;right: 0;top: 2rem;z-index: 999;">
            <van-icon name="cross" size="30" color="#fff"/>
          </div>
        </div>
      </div>
    </div>
<!--    <div class="mask" style="z-index: 111;" v-if="showVideoDialog">-->
<!--      <div class="modal" style="width: 920px;max-width: 100%;">-->
<!--        <div class="modal-header">-->
<!--          <div class="modal-title"></div>-->
<!--          <div class="close" @click="showVideoDialog = false"><i class="el-icon-close"></i></div>-->
<!--        </div>-->
<!--        <div class="modal-body">-->
<!--          <div class="content">-->
<!--            <video autoplay muted="muted" preload loop="loop" controls-->
<!--                   class="btn-bg-video lazyLoad isLoading"-->
<!--                   src="/upload/video/20240608/1717833798487117.mp4"-->
<!--                   :poster="'./static/image/poster.jpg?t=2'"></video>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="mask" v-if="showDialog">
      <div class="modal">
        <div class="modal-header">
          <div class="modal-title">{{$t('settle[6]')}}</div>
          <div class="close" @click="showDialog = false"><i class="el-icon-close"></i></div>
        </div>
        <div class="modal-body">
          <div class="plan-title" style="max-width: 100%">{{detailData.title}}</div>
          <div class="buynow" tabindex="-1">
            <div id="el-id-9097-0" class="el-dialog__body">
              <div >
                <div  class="el-row mb-4">
                  <label  class="font-weight-bold input_label">{{$t('settle[7]')}}</label>
                  <div  class="el-input el-input--large el-input--suffix">
                    <div class="el-input__wrapper" tabindex="-1">
                      <input class="el-input__inner" v-model="money" type="text" autocomplete="off" tabindex="0">
                    </div>
                  </div>
                </div>
                <div  class="el-row mb-4">
                  <label  class="font-weight-bold input_label">{{$t('settle[9]')}}
<!--                    <span style="color: #e73329;font-size: 1.5rem">{{$t('tips[4]')}}</span>-->
                  </label>
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
                <div  class="el-row mb-4">
                  <label  class="font-weight-bold input_label">{{$t('coupon[0]')}}</label>
                  <div  class="el-input el-input--large el-input--suffix">
                    <div class="el-input__wrapper" tabindex="-1">
                      <div class="el-select">
                        <div class="el-input el-input--suffix">
                          <select class="el-input__inner" v-model="selectCoupon">
                            <option value="" v-if="couponList.length==0">{{$t('coupon[1]')}}</option>
                            <option value="" v-else>{{$t('coupon[2]')}}</option>
                            <option :value="item.id" v-for="(item,index) in couponList" :key="index">{{item.coupon_name}}</option>
                          </select>
                          <span
                            class="el-input__suffix"><span class="el-input__suffix-inner"><i
                            class="el-select__caret el-input__icon el-icon-arrow-up"></i></span>
                          </span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div  class="el-row mb-4" v-if="selectCoupon !=''">
                  <div style="display: flex;justify-content: space-between">
                    <div  class="el-col el-col-24 font-weight-bold input_label">
                      {{$t('coupon[3]')}}:  -${{couponMoney}}
                    </div>
                  </div>
                </div>
                <div  class="el-row mb-4" v-if="selectCoupon !=''">
                  <div style="display: flex;justify-content: space-between">
                    <div  class="el-col el-col-24 font-weight-bold input_label">
                      {{$t('coupon[4]')}}:  ${{(coupon.discount/100*money).toFixed(2)}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="centered">
            <button @click="buyProduct" class="main-btn modal-submit" style="width: fit-content;min-width: 200px;height: 40px; margin-bottom: 10px; font-weight: 400;" type="submit">{{$t('settle[10]')}}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="showDialogD">
      <div class="modal" style="max-height: 100%;overflow: scroll;position: relative;">
        <div class="modal-header">
          <div class="modal-title">{{$t('productDetail[0]')}}</div>
          <div class="close" @click="showDialogD = false"><i class="el-icon-close"></i></div>
        </div>
        <div class="modal-body">
          <div class="app-wrapper">
            <div class="container">
              <div class="main">
                <div class="top">
                  <div style="position: relative;" class="image_border">
                    <img
                      class="product-img"
                      :src="InitData.setting.up_url + detailData.icon"
                    />
                  </div>
                  <div class="">
                    <div class="plan-title">{{detailData.title}}</div>
<!--                    <div class="pricing">-->
<!--                      <h1>${{parseFloat(detailData.amount)}}</h1>-->
<!--                      <p>/{{detailData.cycle}} {{$t('product[15]')}}-->
<!--                      </p>-->
<!--                    </div>-->
                    <div class="pricing-body mb-1">
                      <div class="d-grid gap-10 mt-10" style="grid-template-columns: repeat(3, 1fr);">
                        <div class="single-settings-box profile-details-box top-flashlight light-xl leftside overflow-hidden m-0 p_plans c_pointer">
                          <p class="medium grayd text-center fw-600">${{parseFloat(detailData.amount)}}</p>
                          <p class="semi text-center">
                            {{$t('newP[5]')}}
                          </p>
                        </div>
                        <div class="single-settings-box profile-details-box top-flashlight light-xl leftside overflow-hidden m-0 p_plans c_pointer">
                          <p class="medium grayd text-center fw-600">{{detailData.cycle}} {{$t('product[15]')}}</p>
                          <p class="semi text-center">
                           {{$t('newP[0]')}}
                          </p>
                        </div>
                        <div class="single-settings-box profile-details-box top-flashlight light-xl leftside overflow-hidden m-0 p_plans c_pointer">
                          <p class="medium grayd text-center fw-600">{{$t('newP[2]')}}</p>
                          <p class="semi text-center">{{$t('newP[1]')}}</p>
                        </div>
                        <div class="single-settings-box profile-details-box top-flashlight light-xl leftside overflow-hidden m-0 p_plans c_pointer">
                          <p class="medium grayd text-center fw-600">${{parseFloat((parseFloat(detailData.daily_rate)/100*detailData.amount*1).toFixed(2))}}</p>
                          <p class="semi text-center">{{$t('newP[3]')}}</p>
                        </div>
                        <div class="single-settings-box profile-details-box top-flashlight light-xl leftside overflow-hidden m-0 p_plans c_pointer">
                          <p class="medium grayd text-center fw-600">${{parseFloat((parseFloat(detailData.daily_rate)/100*detailData.amount*detailData.cycle).toFixed(2))}}</p>
                          <p class="semi text-center">{{$t('newP[4]')}}</p>
                        </div>
                      </div>
                    </div>
<!--                    <div class="description">-->
<!--                      <p><van-icon :name="'./static/image/check.png'" style="margin-right: 0.5rem;"/> {{$t('newP[0]')}}: <span class="notranslate">{{detailData.cycle}} {{$t('product[15]')}}-->
<!--                            </span></p>-->
<!--                      <p><van-icon :name="'./static/image/check.png'" style="margin-right: 0.5rem;"/> {{$t('newP[5]')}}: <span class="notranslate">${{detailData.amount}}</span></p>-->
<!--                      <p><van-icon :name="'./static/image/check.png'" style="margin-right: 0.5rem;"/> {{$t('newP[3]')}}: <span class="notranslate">${{parseFloat((parseFloat(detailData.daily_rate)/100*detailData.amount*1).toFixed(2))}}</span></p>-->
<!--                      <p><van-icon :name="'./static/image/check.png'" style="margin-right: 0.5rem;"/> {{$t('newP[4]')}}: <span class="notranslate">${{parseFloat((parseFloat(detailData.daily_rate)/100*detailData.amount*detailData.cycle).toFixed(2))}}</span></p>-->
<!--                      <p><van-icon :name="'./static/image/check.png'" style="margin-right: 0.5rem;"/> {{$t('settle[0]')}}:<span class="notranslate">{{detailData.type==1?$t('product[7]'):$t('product[17]')}}</span></p>-->
<!--                    </div>-->
                    <div class="bonus" v-if="detailData.amount!=10">
                      <div class="label">{{$t('product[10]')}}</div>
                      <ul class="plan-referral justify-content-center mb-2">
                        <div class="single-referral" v-for="(aa,i) in detailData.affiliate_bonus">
                          <span>{{aa}} %</span>
                          <p>{{$t('affiliates[13]')}} {{(i+1)}}</p>
                        </div>
                      </ul>
                    </div>
                    <div class="bonus" v-else>
                      <div class="label">{{$t('product[10]')}}</div>
                      <ul class="plan-referral justify-content-center mb-2">
                        <div class="single-referral" v-for="(aa,i) in detailData.affiliate_bonus">
                          <span>0 %</span>
                          <p>{{$t('affiliates[13]')}} {{(i+1)}}</p>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
<!--                  <div class="flexc">-->
<!--                    <div class="main-btn buy_bt" style="height: 48px; margin-top: 19px;"  @click="orderNow()">{{$t('settle[5]')}}</div>-->
<!--                  </div>-->
                  <div class="block-input new-collection" style="width: 100%;border-radius: 10px;font-weight: 600;font-size: 18px; margin-top: 21px; height: 61px; margin-bottom: 15px;">{{$t('productDetail[2]')}}</div>
                  <div class="description-block-2">
                    <div>
                      <div v-if="detailData.amount==100 || detailData.amount==10" class="ram_detail" style="border-radius: 10px; border: 2px solid var(--blue-blue-300, #fade88); padding: 15px 35px; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; font-family: Helvetica; text-transform: none; white-space: normal;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMzSURBVHgB7VdLUttAEB2NMGyAKDuqQEYu8qmsIk4Qc4LACSAniDkB9gnIDTAnwJwAOAHOKlVJwCqwC5YCwwL06bx2JJCxJY9SUGHBqxp7RurpeTP9mZYQL/jP0PIItyzL8DxvWZfyExFZmqZZ+HfxykW/KdGElAclx3FUdSoRwMJWGASb6C4LNdSlrtdUiIwkcFQsVgXRRjzGjvcxqYHdOhNjY80botfC91+FQtg4hWUSohzLhkS1t+129Z8I8HFTEOwkFH677HZri67rigz8mJmxxgsFJrwWEW52r66W0uZpqYuH4R4m2xg6kmit1G4fiByADhtm20HXyiIhh01me8eL33reUt7FGbB/k+eyDpjGnp6a2hwmN3ACv01zDQ+30HWhYPHD+bmTtgjL6ppGpZOT7TQZNsnE+PghNmT4vr/y/uyskXw/cAJwrp7DwQSVrMU5MpgoHK3+c3bWTpNjHUEQ1LhfKBQ2RRZ4R0emSWgtoQDIbaHtqMgem+Ye626Z5ufk87HkAMexCq/n3VeFAhZOT78IRcAPGjBDOSCqYLibWPMecch5QZDb6UZCyu2ISJ+57ghw2PRIIGSybJ/EcbHY4qYii6jgEHTQjKTP3BGAhxpR1xWK4PuAm1BHk380ovkBArEiHJEjng5utIYxQEBKGe/cEE8EhK3F/3pik3cEdF2PH9riqRDt3CO6GCAg/qZMPgXr0DAe/RQ4cUXpXbzrdJoDBHpeigjg/vTk5Kp4ZCAblvmfr/Pk87484IdhL1ZJvfBQRpziwaCeSgC5mi8KNkUZhUhFjEBkMmeUHKf4KMqcN53OdioBNgN2vx4x3WC7ZSm+uLwsoUhZzJJhHdh97xIaluK1FMZ1vFjlnKBJuZSnyHy4eFTYWBjWh90dQwsShGSFq9xepoOCrOs2Db/m5srx4pzecVLrw+Sya8L7soyhVOnyvJCPmugrj9nrUY6t5KoJ+xQWixsoOqrxmBXiu6CBiPnO3wRwXPf25sZGITqPcV9VDOHqQrtdy9Kv9F3wsNIdBRBpeL6/rnKr5voyYiLwjzJO4CMm2jgZgy8W9B3iFob73evr3VGl+wueFf4Apau8q/LsijQAAAAASUVORK5CYII=" style="width: 32px;" data-filename="info.png">
                        <span v-if="detailData.amount==100">{{$t('productDetail[4]')}}</span>
                        <span v-else-if="detailData.amount==10">{{$t('productDetail[3]')}}</span>
                      </div>
                      <div v-else class="ram_detail" style="border-radius: 10px; border: 2px solid var(--blue-blue-300, #fade88); padding: 15px 35px; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; font-family: Helvetica; text-transform: none; white-space: normal;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMzSURBVHgB7VdLUttAEB2NMGyAKDuqQEYu8qmsIk4Qc4LACSAniDkB9gnIDTAnwJwAOAHOKlVJwCqwC5YCwwL06bx2JJCxJY9SUGHBqxp7RurpeTP9mZYQL/jP0PIItyzL8DxvWZfyExFZmqZZ+HfxykW/KdGElAclx3FUdSoRwMJWGASb6C4LNdSlrtdUiIwkcFQsVgXRRjzGjvcxqYHdOhNjY80botfC91+FQtg4hWUSohzLhkS1t+129Z8I8HFTEOwkFH677HZri67rigz8mJmxxgsFJrwWEW52r66W0uZpqYuH4R4m2xg6kmit1G4fiByADhtm20HXyiIhh01me8eL33reUt7FGbB/k+eyDpjGnp6a2hwmN3ACv01zDQ+30HWhYPHD+bmTtgjL6ppGpZOT7TQZNsnE+PghNmT4vr/y/uyskXw/cAJwrp7DwQSVrMU5MpgoHK3+c3bWTpNjHUEQ1LhfKBQ2RRZ4R0emSWgtoQDIbaHtqMgem+Ye626Z5ufk87HkAMexCq/n3VeFAhZOT78IRcAPGjBDOSCqYLibWPMecch5QZDb6UZCyu2ISJ+57ghw2PRIIGSybJ/EcbHY4qYii6jgEHTQjKTP3BGAhxpR1xWK4PuAm1BHk380ovkBArEiHJEjng5utIYxQEBKGe/cEE8EhK3F/3pik3cEdF2PH9riqRDt3CO6GCAg/qZMPgXr0DAe/RQ4cUXpXbzrdJoDBHpeigjg/vTk5Kp4ZCAblvmfr/Pk87484IdhL1ZJvfBQRpziwaCeSgC5mi8KNkUZhUhFjEBkMmeUHKf4KMqcN53OdioBNgN2vx4x3WC7ZSm+uLwsoUhZzJJhHdh97xIaluK1FMZ1vFjlnKBJuZSnyHy4eFTYWBjWh90dQwsShGSFq9xepoOCrOs2Db/m5srx4pzecVLrw+Sya8L7soyhVOnyvJCPmugrj9nrUY6t5KoJ+xQWixsoOqrxmBXiu6CBiPnO3wRwXPf25sZGITqPcV9VDOHqQrtdy9Kv9F3wsNIdBRBpeL6/rnKr5voyYiLwjzJO4CMm2jgZgy8W9B3iFob73evr3VGl+wueFf4Apau8q/LsijQAAAAASUVORK5CYII=" style="width: 32px;" data-filename="info.png">
                        <span >{{$t('productDetail[5]')}}</span>
                      </div>
                    </div>
                    <h6 v-html="$t('productDetail[6]')"></h6>
                    <h6 v-html="$t('productDetailL[0]')"></h6>
                    <h6 v-html="$t('productDetailL[1]')"></h6>
                    <h6 v-html="$t('productDetailL[2]')"></h6>
                    <h6 v-html="$t('productDetailL[3]')"></h6>
                    <h6 v-html="$t('productDetailL[4]')"></h6>
                    <h6 v-html="$t('productDetailL[5]')"></h6>
<!--                    <h6 v-html="$t('productDetail[7]')"></h6>-->
<!--                    <h6 v-html="$t('productDetail[8]')"></h6>-->
                    <h6 v-html="$t('productDetail[9]')"></h6>
                    <div style="font-size: 16px;overflow-x: scroll;">
                      <table border="1px" style="width: 100%;text-align: center">
                        <tr>
                          <td>{{$t('tables[0]')}}</td>
                          <td>{{$t('tables[1]')}}</td>
                          <td>{{$t('tables[2]')}}</td>
                          <td>{{$t('tables[3]')}}</td>
                          <td>{{$t('tables[4]')}}</td>
                          <td>{{$t('tables[5]')}}</td>
                          <td>{{$t('tables[6]')}}</td>
                        </tr>
                        <tr>
                          <td>{{$t('tables[7]')}}</td>
                          <td>{{detailData.title}}</td>
                          <td>{{detailData.amount}}USD</td>
                          <td>{{detailData.cycle}} {{$t('product[15]')}}</td>
                          <td>{{detailData.daily_rate}}%</td>
                          <td>${{parseFloat((parseFloat(detailData.daily_rate)/100*money*1).toFixed(2))}}USD</td>
                          <td>${{parseFloat((parseFloat(detailData.daily_rate)/100*money*detailData.cycle).toFixed(2))}}USD</td>
                        </tr>
                        <tr>
                          <td>{{$t('tables[8]')}}</td>
                          <td colspan="6">{{$t('tables[9]')}}</td>
                        </tr>
                        <tr>
                          <td>{{$t('tables[10]')}}</td>
                          <td>BTC</td>
                          <td>ETH</td>
                          <td>BCH</td>
                          <td>LTC</td>
                          <td>USDC</td>
                          <td>USDT</td>
                        </tr>
                      </table>
                    </div>
                    <h6 v-html="$t('productDetail[11]')"></h6>
                    <h6 v-html="$t('productDetail[12]')"></h6>
                    <h6 v-html="$t('productDetail[13]')"></h6>
                    <h6 v-html="$t('productDetail[14]')"></h6>
                    <h6 v-html="$t('productDetail[15]')"></h6>
                    <h6 v-html="$t('productDetail[16]')"></h6>
                    <h6 v-html="$t('productDetail[17]')"></h6>
                    <h6 v-html="$t('productDetail[18]')"></h6>
                    <h6 v-html="$t('productDetail[19]')"></h6>
                    <h6 v-html="$t('productDetail[20]')"></h6>
                    <h6 v-html="$t('productDetail[21]')"></h6>
                    <h6 v-html="$t('productDetail[22]')"></h6>
                    <h6 v-html="$t('productDetail[23]')"></h6>
                    <h6 v-html="$t('productDetail[24]')"></h6>
                    <h6 v-html="$t('productDetail[25]')"></h6>
<!--                    <h6 v-html="$t('productDetail[21]')"></h6>-->
                    <h6 v-if="detailData.agreement && detailData.agreement !=''" v-html="detailData.agreement">
                    </h6>
                    <h6>{{$t('productDetail[26]')}}</h6>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="diaf" >
          <div class="buttons">
            <a href="javascript:" class="w-100" @click="showDialogD = false"><div class="main-btn ed w-100">{{$t('close')}}</div></a>
            <div class="main-btn buy_bt" @click="orderNow(detailData)">{{$t('newP[6]')}}</div>
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
  // import VueSlickCarousel from 'vue-slick-carousel'
  // import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
  export default {
    name: 'Home',
    inject: ['reloadHtml'],
    components: {
      swiper, swiperSlide
    },

    data() {
      return {
        selcets:'',
        selcett:'',
        selectM:'',
        selectP:{
          daily_rate:''
        },
        index:0,
        showMask:false,
        showMobileLan: false,
        showPcLan: false,
        showDialogD:false,
        email:'',
        number:1,
        detailData:{},
        showDialog:false,
        showVideoDialog:false,
        password:'',
        money:'',
        showPass: false,
        youtube:'',
        date:'',
        showNotice:false,
        msg_title:'',
        msg_content:'',
        listData:[],
        swiperOption0: {
          loop: true,  // 是否循环轮播
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          },
        },
        swiperOption: {
          loop: true,  // 是否循环轮播
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          },
          direction:'vertical',
          slidesPerView: 8,  // 可是区域内可展示多少个块
          // spaceBetween: 10,  // 块之间间隔距离
          // initialSlide:7,  // 默认初始显示块
          // freeMode: false,
          // effect : 'coverflow',
          // 显示分页
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true
          // },
          // 设置点击箭头
          // navigation: {
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev",
          // },
        },
        swiperOption1: {
          loop: true,  // 是否循环轮播
          speed:10000,
          autoplay: {
            disableOnInteraction:false,
            delay: 2000,
            revertDirection:true,
          },
          autoplayDisableOnInteraction:false,
          slidesPerView:4,
          observer:true,
          observeParents:true,
          roundLengths:true,
          on:{
            slideChangeTransitionEnd: function () {
              this.autoplay.start();
            }
          }
        },
        settings:{
          "dots": true,
          "autoplay": true,
          "focusOnSelect": true,
          "infinite": true,
          "speed": 1000,
          "slidesToShow": 3,
          "slidesToScroll": 1,
          // "centerPadding":'50px',
          // "centerMode":true,
        },
        intv:null,
        showNoticeImg:false,
        imgnotice:{
          cover_img:""
        },
        showIndex:-1,
        listDataQ: [],
        isLoad: false,
        isFinished: false,
        isRefresh: false,
        showMore: false,
        pageNo: 1,
        data_current_page:"1",
        data_total_page:"1",
        slickList:[//Eunice Allen,Donna Clark
          {name:'Adiratna',head:''},
          {name:'Emmett Stewart',head:''},
          {name:'Agnes Davis',head:''},
          {name:'Colleen Anderson',head:''},
          {name:'Eleanor Diaz',head:''},
          {name:'Miki',head:''},
          {name:'Mario Allen',head:''},
          {name:'Linda Mitchell',head:''},
          {name:'Lev Jackson',head:''},
          {name:'Annmarie Garcia',head:''},
          {name:'Alexander Wilson',head:''},
          {name:'Crétia James',head:''},
          {name:'Edna Flores',head:''},
          {name:'David Smith',head:''},
          {name:'Elias Walker',head:''},
          {name:'Daniel Johnson',head:''},
          {name:'Erin Hernandez',head:''},
          {name:'Bastian Harris',head:''},
          {name:'Abigail Taylor',head:''},
          {name:'Ruth Carter',head:''},
          {name:'Cosmo Richardson',head:''},
          {name:'Sayuri',head:''},
          {name:'Victor Williams',head:''},
          {name:'Noah Phillips',head:''},
          {name:'Leon Anderson',head:''},
          {name:'Aiden Davis',head:''},
          {name:'Edith Johnson',head:''},
          {name:'Anna Campbell',head:''},
          {name:'Lucas Roberts',head:''},
          {name:'Maria',head:''},
          {name:'Bridget Collins',head:''},
          {name:'Gabriel Thompson',head:''},
          {name:'Keiko',head:''},
          {name:'Collins Kelly',head:''},
          {name:'Susannah Smith',head:''},
          {name:'Agatha Reyes',head:''},
          {name:'George Lopez',head:''},
          {name:'Donna Clark',head:''},
          {name:'Eunice Allen',head:''},
          {name:'Hanzō',head:''},
          // {name:'Paul Adams',head:''},
        ],
        listDataB:[],
        couponList:[],
        selectCoupon:'',
        couponMoney:0,
        coupon:{
          id:'',
        },
      }
    },

    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      },
    },
    watch: {
      'number'() {
        this.money=this.number*this.detailData.amount
      },
      'selectM': function () {
        console.log("www:"+this.selectM)
      },
      'selectCoupon'() {
        let that = this;
        if (that.selectCoupon != '') {
          that.coupon = this.couponList.filter(item => item.id == that.selectCoupon)[0];
          this.couponMoney = parseFloat(that.money-(that.coupon.discount/100*that.money).toFixed(2));
        } else {
          this.couponMoney = 0;
        }
      },
      'money'() {
        let that = this;
        if (that.selectCoupon != '') {
          that.coupon = this.couponList.filter(item => item.id == that.selectCoupon)[0];
          this.couponMoney = parseFloat(that.money-(that.coupon.discount/100*that.money).toFixed(2));
        } else {
          this.couponMoney = 0;
        }

      },
    },
    created() {
      let that = this;
      // let tmpUrl = "https://www.youtube.com/watch?v=eeGRe0B6M10".replace('https:','');
      // tmpUrl = tmpUrl.replace('watch?v=','embed/')+'?wmode=transparent'
      // that.youtube = tmpUrl;
      this.loadProudcutList();
      this.loadBlog();

      if (this.UserInfo) {
        this.$Model.MYCOUPON({status:1}, function (data) {
          if (data.code == 1) {
            that.couponList = data.data
          }
        });
        // let email = SHA256(that.UserInfo.username).toString();
        // let phone = SHA256(that.UserInfo.phone).toString();
        // ttq.identify({
        //   "email": email, // string. The email of the customer if available. It must be hashed with SHA-256 on the client side.
        //   "phone_number": phone, // string. The phone number of the customer if available. It must be hashed with SHA-256 on the client side.
        //   "external_id": that.UserInfo.userid// string. Any unique identifier, such as loyalty membership IDs, user IDs, and external cookie IDs.It must be hashed with SHA-256 on the client side.
        // });
        //
        // ttq.track('ViewContent', {
        //   "contents": [
        //     {
        //       "content_id": "CQ2LBGJC77UFDPAMG3DG", // string. ID of the product. Example: "1077218".
        //       "content_type": "home", // string. Either product or product_group.
        //       "content_name": "home" // string. The name of the page or product. Example: "shirt".
        //     }
        //   ],
        //   "value": "100", // number. Value of the order or items sold. Example: 100.
        //   "currency": "USD" // string. The 4217 currency code. Example: "USD".
        // });
      }else{
        // ttq.track('ViewContent', {
        //   "contents": [
        //     {
        //       "content_id": "CQ2LBGJC77UFDPAMG3DG", // string. ID of the product. Example: "1077218".
        //       "content_type": "home", // string. Either product or product_group.
        //       "content_name": "home" // string. The name of the page or product. Example: "shirt".
        //     }
        //   ],
        //   "value": "100", // number. Value of the order or items sold. Example: 100.
        //   "currency": "USD" // string. The 4217 currency code. Example: "USD".
        // });
      }

      this.intv=setInterval(function () {
        that.$Model.GetBackData(function (data) {
          if (data.noticelist && data.noticelist.length > 0) {
            that.msg_title = data.noticelist[0].title;
            that.msg_content = data.noticelist[0].content;
            that.showNotice = true;
          }
          if (data.imgnoticeList && data.imgnoticeList.length > 0) {
            that.imgnotice = data.imgnoticeList[0];
            that.showNoticeImg = true;
          }
        });
      },300000);
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
      that.$Model.GetBackData(function (data) {
        if (data.noticelist && data.noticelist.length > 0) {
          that.msg_title = data.noticelist[0].title;
          that.msg_content = data.noticelist[0].content;
          that.showNotice = true;
        }
        if (data.imgnoticeList && data.imgnoticeList.length > 0) {
          that.imgnotice = data.imgnoticeList[0];
          that.showNoticeImg = true;
        }
      });
      // var date = new Date();
      // var nowMonth = date.getMonth() + 1;
      // var strDate = date.getDate();
      // var seperator = "-";
      // if (nowMonth >= 1 && nowMonth <= 9) {
      //   nowMonth = "0" + nowMonth;
      // }
      // if (strDate >= 0 && strDate <= 9) {
      //   strDate = "0" + strDate;
      // }
      // var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
      // this.date = nowDate;
      // that.loadData();
      // that.intv = setInterval(function () {
      //   that.loadData();
      // },3000)
      this.getListData('init');


    },
    mounted() {
      let that = this;
      let ww = window.innerWidth;
      if (ww < 750) {
        this.settings = {
          "dots": true,
          "autoplay": true,
          "focusOnSelect": true,
          "infinite": true,
          "speed": 3000,
          "slidesToShow": 1,
          "slidesToScroll": 1,
        }
        // this.$refs.slick.reInit();
      }
      window.onresize = () => {
        that.resize();
      };
      const video = document.getElementById("v1");
      video.addEventListener("click",function (e) {
        e.preventDefault()
      },false)
    },
    activated() {

    },
    destroyed() {
      clearInterval(this.intv)
    },
    methods: {
      showVideo() {
        this.showVideoDialog = true;
      },
      downloadApp (app) {
        if(app == 'ios')
        {
          this.$Util.OpenUrl(this.InitData.setting.app_down_ios)
        }
        else if (app == 'andriod') {
          this.$Util.OpenUrl(this.InitData.setting.app_down_android);
        } else {
          this.$Util.OpenUrl(this.InitData.setting.app_down_google);
        }
      },
      handleShare (index) {
        if (index == 'reddit') {
          let _href = "http://reddit.com/submit?url=";
          const text = this.InitData.setting.web_title;
          const link = location.href // 分享的页面
          _href += encodeURIComponent(link);//分享链接
          var name = '';
          var iWidth=500;                         //弹出窗口的宽度;
          var iHeight=570;                        //弹出窗口的高度;
          //window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
          var iTop = (window.screen.height-30-iHeight)/2;       //获得窗口的垂直位置;
          var iLeft = (window.screen.width-10-iWidth)/2;        //获得窗口的水平位置;
          window.open(_href,name,'height='+iHeight+',innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizable=no,location=no,status=no');
        }
        if (index == 'mixit') {
          let _href = "https://mix.com/mixit?url=";
          const text = this.InitData.setting.web_title;
          const link = location.href // 分享的页面
          _href += encodeURIComponent(link);//分享链接
          var name = '';
          var iWidth=500;                         //弹出窗口的宽度;
          var iHeight=570;                        //弹出窗口的高度;
          //window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
          var iTop = (window.screen.height-30-iHeight)/2;       //获得窗口的垂直位置;
          var iLeft = (window.screen.width-10-iWidth)/2;        //获得窗口的水平位置;
          window.open(_href,name,'height='+iHeight+',innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizable=no,location=no,status=no');
        }
        if (index == 'linkin') {
          let _href = "https://www.linkedin.com/shareArticle?mini=true";
          const text = this.InitData.setting.web_title;
          const link = location.href // 分享的页面
          _href += "&title=" + text;//分享标题
          _href += "&url=" + encodeURIComponent(link);//分享链接
          var name = '';
          var iWidth=500;                         //弹出窗口的宽度;
          var iHeight=570;                        //弹出窗口的高度;
          //window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
          var iTop = (window.screen.height-30-iHeight)/2;       //获得窗口的垂直位置;
          var iLeft = (window.screen.width-10-iWidth)/2;        //获得窗口的水平位置;
          window.open(_href,name,'height='+iHeight+',innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizable=no,location=no,status=no');
        }
        if (index == 'twitter') {
          const link = location.href // 分享的页面
          var name = '';
          var iWidth=500;                         //弹出窗口的宽度;
          var iHeight=570;                        //弹出窗口的高度;
          //window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
          var iTop = (window.screen.height-30-iHeight)/2;       //获得窗口的垂直位置;
          var iLeft = (window.screen.width-10-iWidth)/2;        //获得窗口的水平位置;
          window.open(`https://twitter.com/intent/tweet?text=` + encodeURIComponent(link),name,'height='+iHeight+',innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizable=no,location=no,status=no');
        }
        if (index == 'telegram') {
          const link = location.href // 分享的页面
          var name = '';
          var iWidth=500;                         //弹出窗口的宽度;
          var iHeight=570;                        //弹出窗口的高度;
          //window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
          var iTop = (window.screen.height-30-iHeight)/2;       //获得窗口的垂直位置;
          var iLeft = (window.screen.width-10-iWidth)/2;        //获得窗口的水平位置;
          const text = this.InitData.setting.web_title||'';
          window.open(`https://telegram.me/share/url?url=${encodeURIComponent(link)}&text=${text}`,name,'height='+iHeight+',innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizable=no,location=no,status=no');
        }
        if (index == 'whatsapp') {
          let _href = "https://api.whatsapp.com/send?";
          const text = this.InitData.setting.web_title||'';
          const link = location.href // 分享的页面
          _href += "&text=" + text;//标题
          _href += "&url=" + encodeURIComponent(link);//链接
          window.open(_href);
        }
        if (index == 'facebook') {
          const link = location.href // 分享的页面
          FB.ui({
            method: 'share',
            href: link
          }, function(response){});
        }
        if (index == 'youtube') {
          const link = location.href // 分享的页面

        }
      },
      handelChange() {
        let id = this.selectM;
        this.selectP = this.listData.filter(item=>item.id==id)[0];
      },
      resize() {
        let that = this;
        let w = window.innerWidth;
        if (w < 750) {
          that.settings = {
            "dots": true,
            "autoplay": true,
            "focusOnSelect": true,
            "infinite": true,
            "speed": 3000,
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "touchThreshold": 1,
          };
          // that.$refs.slick.reInit();
        } else {
          that.settings = {
            "dots": true,
            "autoplay": true,
            "focusOnSelect": true,
            "infinite": true,
            "speed": 3000,
            "slidesToShow": 3,
            "slidesToScroll": 1,
          };
          // that.$refs.slick.reInit();
        }
      },
      jumpReg() {
        this.$router.push(`/register?name=${this.email}`)
      },
      getListData(type) {
        this.isLoad = true
        this.isRefresh = false
        if(type=='load'){
          this.pageNo += 1;
        }else{
          this.pageNo = 1;
          this.isFinished = false
        }
        this.$Model.noticeList({gropid: 9,page_no: this.pageNo,page_size:100},data=>{
          this.isLoad = false
          if(data.code==1){
            if(data.info.length<=0){
              this.listDataQ =[];
              this.isFinished = true
            }else {
              this.data_current_page = data.data_current_page;
              this.data_total_page = data.data_total_page;
              if(type=='load'){
                this.listDataQ = this.listData.concat(data.info);
              }else{
                this.listDataQ = data.info;
              }
            }
            if(data.data_total_nums ==0 || this.pageNo == data.data_total_page){
              this.isFinished = true
            }else{
              this.isFinished = false
            }
          }else{
            this.listDataQ = []
            this.isFinished = true
          }
        })
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
        data.coupon_id = this.coupon.id;
        this.$Model.ProductBuy(data, data => {
          if(data.code==1){
            this.$router.push("/MyPackages")
          }
        });
      },
      getInfoData(id) {
        this.$Dialog.Loading(this.$t('dialog[6]'));
        this.$Model.ProductDetail(id, data => {
          this.$Dialog.Close();
          this.detailData = data.data;
          this.showDialogD = true;
        });
      },
      orderNow(item) {
        this.showDialogD = false;
        this.detailData = item;
        this.showDialog = true;
      },
      jumper() {
        if (this.UserInfo) {
          this.$router.push('/earnings');
        } else {
          this.$router.push('/login');
        }
      },
      jumpImg() {
        let that = this;
        that.showNoticeImg = false;
        this.$Util.OpenUrl(that.imgnotice.url);
      },
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
      loadProudcutList(){
        this.$Model.ProductList({}, data => {
          this.listData = data.data;
        });
      },
      loadBlog() {
        this.$Model.noticeList({gropid: 10,page_no: this.pageNo,page_size:3},data=>{
          if(data.code==1) {
            this.listDataB = data.info;
          }
        });
      }
    }
  }
</script>
<style scoped>
  .row1 .col-sm-4 {
    width: 100%;
    padding: 0 10px;
  }
  .container {
    overflow: hidden;
  }
  @media only screen and (min-width: 1024px) {
    html {
      font-size:10px
    }
    .iframe {
      height: 54px !important;
    }
  }
  .col-md-4{flex:0 0 auto;width:33.33333333%}
  @media only screen and (max-width: 1024px) {
    html {
      font-size:10px
    }
    .cover{
      background-size: cover !important;
      background-position: center;
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 5px
  }

  ::-webkit-scrollbar-corner,::-webkit-scrollbar-track {
    background-color: #e2e2e2
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: #662282
  }

  .slide-enter-active,.slide-leave-active {
    /*transition: all .2s ease*/
  }

  .slide-enter,.slide-leave-to {
    transform: translateY(10px);
    opacity: 0
  }

  .slide-right-enter-active,.slide-right-leave-active {
    /*transition: all .2s ease*/
  }

  .slide-right-enter,.slide-right-leave-to {
    transform: translateX(-10px);
    opacity: 0
  }

  @keyframes tobig-17e61fa8 {
    0% {
      transform: scale(1)
    }

    to {
      transform: scale(1.5)
    }
  }

  input::-webkit-inner-spin-button,input::-webkit-outer-spin-button {
    -webkit-appearance: none!important
  }

  input[type=number] {
    -moz-appearance: textfield
  }

  .el-carousel__indicators--outside button {
    background-color: #662282!important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: #662282!important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  /*.el-pagination.is-background .el-pager li:not(.disabled).active {*/
  /*  background-color: #662282!important*/
  /*}*/

  /*.el-pagination.is-background .el-pager li:not(.active):hover {*/
  /*  color: #662282!important*/
  /*}*/

  .el-message {
    font-size: 1.6rem
  }

  .el-menu-item {
    padding: 0 2rem;
    font-size: 1.5rem;
    font-weight: 700
  }

  .el-submenu__title {
    font-size: 1.5rem!important;
    font-weight: 700
  }

  .el-menu-item [class^=el-icon-],.el-submenu [class^=el-icon-] {
    font-size: 2rem
  }

  .el-submenu__icon-arrow {
    font-size: 1.4rem!important
  }

  .el-menu-item.is-active,.el-menu-item:hover,.el-submenu__title:hover {
    color: #662282;
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: #662282
  }

  .lang-item {
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap
  }

  .lang-item .flag {
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-right: .6rem
  }

  .option-label {
    display: flex;
    align-items: center;
    width: 100%
  }

  .option-label .icon {
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-right: .6rem
  }

  .el-input {
    font-size: 1.5rem!important
  }

  .el-input .el-input__inner {
    height: 4.5rem;
    line-height: 4.5rem;
    padding: 0 2rem;
    font-family: myFont;
    color: #000;
    border: 1px solid #d9d9d9!important
  }

  .el-textarea__inner {
    font-size: 1.5rem!important;
    font-family: myFont;
    color: #000!important
  }

  .el-form-item__label {
    padding-bottom: 1rem!important;
    line-height: normal!important;
    font-size: 1.5rem!important;
    color: #000!important;
    word-wrap: break-word
  }

  .el-input.is-disabled .el-input__inner {
    color: #000!important;
    cursor: default!important
  }

  .el-radio {
    color: #000!important
  }

  .el-radio__label {
    font-size: 1.5rem!important
  }

  .el-select {
    width: 100%
  }

  .el-select-dropdown__item {
    font-size: 1.5rem;
    font-family: myFont
  }

  .el-select-dropdown__empty {
    font-size: 1.5rem!important;
    font-family: myFont
  }

  .el-select-dropdown__item.selected {
    color: #662282
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #662282!important;
    border-color: #662282!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #662282!important
  }
  .container .box3 .product-list .product-item {
    position: relative;
  }
  .container .box-wrapper {
    position: relative;
    max-width: 1300px;
    z-index: 2;
    color: #000000;
  }
  @media only screen and (min-width: 1024px) {

    .container .mask {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 99;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
      padding: 4rem 0;
      background-color: rgba(0,0,0,.5);
      overflow: auto
    }

    .container .mask .modal {
      position: relative;
      width: 50rem;
      box-sizing: border-box;
      padding: .5rem 1.2rem 1.2rem;
      margin-bottom: 2rem;
      border-radius: 1rem;
      background-color: #fff
    }

    .container .mask .modal .auto-close-time {
      position: absolute;
      top: -2.2rem;
      right: -2.2rem;
      width: 3.8rem;
      height: 3.8rem;
      line-height: 3.8rem;
      box-sizing: border-box;
      border-radius: 50%;
      font-size: 1.5rem;
      color: #000;
      text-align: center;
      white-space: nowrap;
      background-color: #ddd
    }

    .container .mask .modal .modal-content {
      width: 100%;
      min-height: 10rem;
      max-height: 70rem;
      overflow: auto
    }

    .container .mask .close-icon {
      font-size: 4.8rem;
      color: #fff;
      white-space: nowrap;
      cursor: pointer
    }

    .container .box-wrapper {
      width: 100%;
      /*max-width: 1300px;*/
      margin: 0 auto;
    }

    .container .box1 {
      display: flex;
      align-items: center;
      width: 100%;
      /*height: 70rem;*/
      box-sizing: border-box;
      padding: 2rem 3rem 3rem 3rem
    }

    .container .box1 .box1-inner-area {
      /*min-width: 70rem;*/
      /*width: 33.33%*/
    }

    .container .box1 .box1-inner-area .box1-title {
      line-height: 110%;
      font-size: 4rem;
      font-weight: 700;
      word-wrap: break-word;
      /*-webkit-text-fill-color: transparent;*/
      /*background: linear-gradient(90deg, #f8e4c7, #e1af61);*/
      /*-webkit-background-clip: text;*/
      /*color: #f8f8f8;*/
      color: #fe9500;
    }

    .container .box1 .box1-inner-area .box1-desc {
      margin: 3rem 0 2.5rem;
      line-height: 160%;
      font-size: 1.85rem;
      color: #ff7d10;
      font-weight: bolder;
      word-wrap: break-word
    }

    .container .box1 .box1-inner-area .reward-info {
      width: 100%
    }

    .container .box1 .box1-inner-area .reward-info .info-item {
      width: 100%;
      font-size: 1.6rem;
      font-weight: 700;
      color: red;
      word-wrap: break-word
    }

    .container .box1 .box1-inner-area .reward-info .info-item:not(:last-child) {
      margin-bottom: 1rem
    }

    .container .box1 .box1-inner-area .action-btns {
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 5rem
    }

    .container .box1 .box1-inner-area .action-btns .btn {
      /*height: 4.5rem;*/
      /*line-height: 4.5rem;*/
      padding: 1.3rem 1.5rem;
      min-width: 12rem;
      box-sizing: border-box;
      /*padding: 0 2.5rem;*/
      border-radius: .5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-color: red;
      cursor: pointer
    }

    .container .box1 .box1-inner-area .action-btns .btn:not(:last-child) {
      margin-right: 1.6rem
    }

    .container .box2 {
      width: 100%;
      box-sizing: border-box;
      padding: 8rem 3rem
    }

    .container .box2 .box2-title {
      position: relative;
      width: 100%;
      margin-bottom: 2rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box2 .tab-list {
      display: flex;
      justify-content: space-between;
      width: 100%
    }

    .container .box2 .tab-list .tab-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1;
      box-sizing: border-box;
      cursor: pointer;
      box-shadow: 0 1px 10px rgba(24, 24, 24, .07);
      padding: 10px 20px;
      border-radius: 10px;
      /*border: 1px solid #662282;*/
      margin: 0 1rem;
    }

    .container .box2 .tab-list .tab-item .img {
      min-width: 80px;
      max-width: 80px;
      height: 80px;
      margin: 0 auto;
    }

    .container .box2 .tab-list .tab-item .line {
      width: 8rem;
      height: 2px;
      margin: 2rem 0;
      border-radius: 2px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box2 .tab-list .tab-item .title {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 2.4rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word;
      margin-top: 10px;
    }

    .container .box2 .tab-list .tab-item .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.5rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box3 {
      width: 100%;
      box-sizing: border-box;
      padding: 2rem 3rem
    }

    .container .box3 .box3-title {
      position: relative;
      width: 100%;
      margin-bottom: 1rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box3 .product-list {
      width: 100%
    }

    .container .box3 .product-list .product-item {
      display: flex;
      width: 100%
    }
    .container .box3 .product-list .product-item .progress {
      position: absolute;
      left: 44rem;
      bottom: 1rem;
      width: calc(100% - 46rem);
    }
    .container .box3 .product-list .product-item:not(:last-child) {
      margin-bottom: 3rem
    }

    .container .box3 .product-list .product-item .img-box {
      position: relative;
      min-width: 40rem;
      max-width: 40rem;
      height: 26rem;
      overflow: hidden
    }

    .container .box3 .product-list .product-item .img-box .img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: fill;
    }

    .container .box3 .product-list .product-item .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 26rem;
      box-sizing: border-box;
      padding: 0 3rem;
      background-color: #efefef
    }

    .container .box3 .product-list .product-item .right .name {
      width: 100%;
      margin-bottom: 0.5rem;
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box3 .product-list .product-item .right .name .countdown {
      font-size: 1.8rem;
      color: #28c76f
    }

    .container .box3 .product-list .product-item .right .name .countdown i {
      margin-right: 2px;
      font-size: 1.9rem;
      font-weight: 700
    }

    .container .box3 .product-list .product-item .right .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%
    }

    .container .box3 .product-list .product-item .right .bottom .info-list {
      display: flex;
      flex-wrap: wrap;
      width: 100%
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item {
      width: 25%;
      box-sizing: border-box;
      padding-right: 2rem
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item:nth-child(n+5) {
      margin-top: 2.5rem
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item .label {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 1.5rem;
      color: #333;
      word-wrap: break-word
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item .value {
      width: 100%;
      font-size: 1.6rem;
      font-weight: 700;
      color: #000;
      word-break: break-all
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item .rebate {
      word-break: keep-all
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions {
      display: flex;
      flex-direction: column;
      align-items: center
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .bonus {
      min-width: 20rem;
      max-width: 20rem;
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .bonus .label {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 1.5rem;
      color: #333;
      text-align: center;
      word-wrap: break-word
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .bonus .value {
      width: 100%;
      font-size: 1.6rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-break: break-all
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .buy-btn {
      height: 5rem;
      line-height: 5rem;
      box-sizing: border-box;
      padding: 0 2.5rem;
      border-radius: 5rem;
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg,#fe9500,#fade88);
      cursor: pointer
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .disabled-btn {
      color: #333!important;
      background-image: linear-gradient(90deg,#c5c5c5,#c5c5c5)
    }

    .container .box4,.container .box5 {
      width: 100%;
      box-sizing: border-box;
      padding: 10rem 3rem
    }

    .container .box4 .box-wrapper,.container .box5 .box-wrapper {
      display: flex;
      align-items: center
    }

    .container .box4 .box-wrapper .left,.container .box4 .box-wrapper .right,.container .box5 .box-wrapper .left,.container .box5 .box-wrapper .right {
      width: 100%
    }

    .container .box4 .box-wrapper .left .title,.container .box4 .box-wrapper .right .title,.container .box5 .box-wrapper .left .title,.container .box5 .box-wrapper .right .title {
      position: relative;
      width: 100%;
      margin-bottom: 6rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box4 .box-wrapper .left .title:after,.container .box4 .box-wrapper .right .title:after,.container .box5 .box-wrapper .left .title:after,.container .box5 .box-wrapper .right .title:after {
      position: absolute;
      bottom: -2rem;
      left: 0;
      content: "";
      width: 16rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box4 .box-wrapper .left .desc,.container .box4 .box-wrapper .right .desc,.container .box5 .box-wrapper .left .desc,.container .box5 .box-wrapper .right .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.8rem;
      color: #000;
      word-wrap: break-word
    }

    .container .box4 .box-wrapper .left,.container .box5 .box-wrapper .left {
      margin-right: 5rem
    }

    .container .box4 .box-wrapper .right,.container .box5 .box-wrapper .right {
      margin-left: 5rem
    }

    .container .box4 .box-wrapper .img,.container .box5 .box-wrapper .img {
      min-width: 50rem;
      max-width: 50rem
    }

    .container .box6 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 3rem 0rem
    }

    .container .box6 .box6-title {
      position: relative;
      width: 100%;
      margin-bottom: 2rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box6 .t-table {
      width: 100%
    }

    .container .box6 .t-table .tr {
      display: flex;
      justify-content: space-between;
      width: 98%;
      height: 5rem;
      margin: 0 auto;
      box-sizing: border-box;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }

    .container .box6 .t-table .tr:not(:last-child) {
      margin-bottom: 1.5rem
    }

    .container .box6 .t-table .tr .th {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      box-sizing: border-box;
      padding: 0 2rem;
      font-size: 1.6rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box6 .t-table .tr .th:last-child {
      flex: 3
    }

    .container .box6 .t-table .tr .td {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      box-sizing: border-box;
      padding: 0 2rem;
      font-size: 1.6rem;
      color: #000;
      text-align: center;
      word-break: break-all
    }

    .container .box6 .t-table .tr .td:last-child {
      flex: 3
    }

    .container .box7 {
      width: 100%;
      box-sizing: border-box;
      padding: 0
    }

    .container .box7 .box-wrapper {
      display: flex;
      align-items: center
    }

    .container .box7 .box-wrapper .img {
      min-width: 50rem;
      max-width: 50rem
    }

    .container .box7 .box-wrapper .right {
      width: 100%;
      margin-left: 5rem
    }

    .container .box7 .box-wrapper .right .title {
      position: relative;
      width: 100%;
      margin-bottom: 6rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box7 .box-wrapper .right .title:after {
      position: absolute;
      bottom: -2rem;
      left: 0;
      content: "";
      width: 16rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box7 .box-wrapper .right .faq-list {
      width: 100%
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item {
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem 2rem;
      border-radius: 6px;
      background-color: #efefef;
      /*transition: all .3s*/
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item:not(:last-child) {
      margin-bottom: 2.5rem
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      cursor: pointer
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .name {
      max-width: 100%;
      font-size: 1.8rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .right-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 3.8rem;
      max-width: 3.8rem;
      height: 3.8rem;
      margin-left: 3rem;
      border-radius: 50%;
      background-color: #662282
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .right-icon i {
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      /*transition: all .3s ease*/
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .right-icon .on {
      transform: rotate(180deg)
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-content {
      width: 100%;
      margin-top: 2rem
    }

    .container .box8 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 3rem 8rem
    }

    .container .box8 .box8-title {
      position: relative;
      width: 100%;
      margin-bottom: 10rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .box8-title:after {
      position: absolute;
      bottom: -2rem;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 16rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box8 .customer-list {
      width: 100%
    }

    .container .box8 .customer-list .customer-item {
      /*display: flex;*/
      /*flex-direction: column;*/
      /*align-items: center;*/
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 1rem 2rem;
      height: fit-content;
      min-height: 300px;
    }

    .container .box8 .customer-list .customer-item .avatar {
      min-width: 8rem;
      max-width: 8rem;
      height: 8rem;
      margin-bottom: .5rem
    }

    .container .box8 .customer-list .customer-item .name {
      width: 100%;
      font-size: 2.4rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .customer-item .position {
      width: 100%;
      margin: 1rem 0;
      font-size: 1.5rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .customer-item .content {
      width: 100%;
      line-height: 160%;
      font-size: 1.5rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .active {
      background-color: #662282
    }
  }

  @media only screen and (max-width: 1024px) {

    .container .mask {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 99;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
      padding: 3rem 1.5rem;
      background-color: rgba(0,0,0,.4);
      overflow: auto
    }

    .container .mask .modal {
      position: relative;
      width: 100%;
      box-sizing: border-box;
      padding: .5rem 1rem 1rem;
      margin-bottom: 2rem;
      border-radius: .8rem;
      background-color: #fff
    }

    .container .mask .modal .auto-close-time {
      position: absolute;
      top: -1.8rem;
      right: -1rem;
      width: 3rem;
      height: 3rem;
      line-height: 3rem;
      box-sizing: border-box;
      border-radius: 50%;
      font-size: 1.4rem;
      color: #000;
      text-align: center;
      white-space: nowrap;
      background-color: #ddd
    }

    .container .mask .modal .modal-content {
      width: 100%;
      min-height: 10rem;
      max-height: 50rem;
      overflow: auto
    }

    .container .mask .close-icon {
      font-size: 4rem;
      color: #fff;
      white-space: nowrap;
      cursor: pointer
    }

    .container .box-wrapper {
      width: 100%
    }

    .container .box1 {
      display: flex;
      align-items: center;
      width: 100%;
      /*height: 55rem;*/
      box-sizing: border-box;
      padding: 2rem 1rem 1rem 1rem;
      /*background: url(../img/top-img.2fb775d8.png) no-repeat;*/
      /*background-size: auto 100%;*/
      background-position: 0;
    }

    .container .box1 .box1-inner-area {
      /*max-width: 70rem*/
    }

    .container .box1 .box1-inner-area .box1-title {
      line-height: 110%;
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
      word-wrap: break-word;
      /*-webkit-text-fill-color: transparent;*/
      /*background: linear-gradient(90deg, #f8e4c7, #e1af61);*/
      /*-webkit-background-clip: text;*/
      /*color: #f8f8f8;*/
      color: #fe9500;
    }

    .container .box1 .box1-inner-area .box1-desc {
      margin: 3.5rem 0 1.5rem;
      line-height: 160%;
      font-size: 1.85rem;
      color: #ff7d10;
      font-weight: bolder;
      word-wrap: break-word
    }

    .container .box1 .box1-inner-area .reward-info {
      width: 100%
    }

    .container .box1 .box1-inner-area .reward-info .info-item {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 700;
      color: red;
      word-wrap: break-word
    }

    .container .box1 .box1-inner-area .reward-info .info-item:not(:last-child) {
      margin-bottom: .8rem
    }

    .container .box1 .box1-inner-area .action-btns {
      display: flex;
      /*justify-content: center;*/
      align-items: center;
      width: 100%;
      margin-top: 3rem;
      padding-left: 2rem;
    }

    .container .box1 .box1-inner-area .action-btns .btn {
      /*height: 4.2rem;*/
      /*line-height: 4.2rem;*/
      min-width: 12rem;
      box-sizing: border-box;
      padding: 1.3rem 1.5rem;
      border-radius: 4px;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-color: red;
      cursor: pointer
    }

    .container .box1 .box1-inner-area .action-btns .btn:not(:last-child) {
      margin-right: 1.2rem
    }

    .container .box2 {
      width: 100%;
      box-sizing: border-box;
      padding: 3rem 1rem
    }

    .container .box2 .box2-title {
      position: relative;
      width: 100%;
      margin-bottom: 1rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box2 .tab-list {
      width: 100%
    }

    .container .box2 .tab-list .tab-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      cursor: pointer;
      box-shadow: 0 1px 10px rgba(24, 24, 24, .07);
      padding: 10px 20px;
      border-radius: 10px;
      /*border: 1px solid #662282;*/
      margin: 0 1rem;
    }

    .container .box2 .tab-list .tab-item:not(:last-child) {
      margin-bottom: 2rem
    }

    .container .box2 .tab-list .tab-item .img {
      min-width: 80px;
      max-width: 80px;
      height: 80px;
      margin: 0 auto;
    }

    .container .box2 .tab-list .tab-item .line {
      width: 8rem;
      height: 2px;
      margin: 1.5rem 0;
      border-radius: 2px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box2 .tab-list .tab-item .title {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word;
      margin-top: 10px;
    }

    .container .box2 .tab-list .tab-item .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.5rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box3 {
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 1rem
    }

    .container .box3 .box3-title {
      position: relative;
      width: 100%;
      margin-bottom: 0.5rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box3 .product-list .product-item,.container .box3 .product-list {
      width: 100%
    }

    .container .box3 .product-list .product-item:not(:last-child) {
      margin-bottom: 2rem
    }

    .container .box3 .product-list .product-item .img-box {
      position: relative;
      width: 100%
    }

    .container .box3 .product-list .product-item .img-box .img {
      display: block;
      width: 100%
    }

    .container .box3 .product-list .product-item .right {
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 1rem 1.5rem;
      background-color: #efefef
    }

    .container .box3 .product-list .product-item .right .name {
      width: 100%;
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box3 .product-list .product-item .right .name .countdown {
      display: block;
      font-size: 1.5rem;
      color: #28c76f
    }

    .container .box3 .product-list .product-item .right .name .countdown i {
      margin-right: 2px;
      font-size: 1.6rem;
      font-weight: 700
    }

    .container .box3 .product-list .product-item .right .bottom {
      width: 100%
    }

    .container .box3 .product-list .product-item .right .bottom .info-list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: 2rem
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item {
      width: 50%;
      box-sizing: border-box;
      padding-right: 1rem
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item:nth-child(n+3) {
      margin-top: 1.2rem
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item .label {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 1.5rem;
      color: #333;
      word-wrap: break-word
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item .value {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
      word-break: break-all
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .bonus {
      width: 100%;
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .bonus .label {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 1.5rem;
      color: #333;
      word-wrap: break-word
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .bonus .value {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
      word-break: break-all
    }
    .container .box3 .product-list .product-item .progress {
      /*手机*/
      position: absolute;
      left: 2rem;
      bottom: 7rem;
      width: calc(100% - 4rem);
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .buy-btn {
      margin-top: 2rem;
      width: 100%;
      height: 4.5rem;
      line-height: 4.5rem;
      box-sizing: border-box;
      padding: 0 2rem;
      border-radius: 4.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg,#fe9500,#fade88);
      cursor: pointer
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .disabled-btn {
      color: #333!important;
      background-image: linear-gradient(90deg,#c5c5c5,#c5c5c5)
    }

    .container .box4,.container .box5 {
      width: 100%;
      box-sizing: border-box;
      padding: 4rem 1rem
    }

    .container .box4 .box-wrapper,.container .box5 .box-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center
    }

    .container .box4 .box-wrapper .left,.container .box4 .box-wrapper .right,.container .box5 .box-wrapper .left,.container .box5 .box-wrapper .right {
      width: 100%
    }

    .container .box4 .box-wrapper .left .title,.container .box4 .box-wrapper .right .title,.container .box5 .box-wrapper .left .title,.container .box5 .box-wrapper .right .title {
      position: relative;
      width: 100%;
      margin-bottom: 4.5rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box4 .box-wrapper .left .title:after,.container .box4 .box-wrapper .right .title:after,.container .box5 .box-wrapper .left .title:after,.container .box5 .box-wrapper .right .title:after {
      position: absolute;
      bottom: -1.5rem;
      left: 0;
      content: "";
      width: 10rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box4 .box-wrapper .left .desc,.container .box4 .box-wrapper .right .desc,.container .box5 .box-wrapper .left .desc,.container .box5 .box-wrapper .right .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.6rem;
      color: #000;
      word-wrap: break-word
    }

    .container .box4 .box-wrapper .left,.container .box5 .box-wrapper .left {
      margin-bottom: 1rem
    }

    .container .box4 .box-wrapper .right,.container .box5 .box-wrapper .right {
      margin-top: 1rem
    }

    .container .box4 .box-wrapper .img,.container .box5 .box-wrapper .img {
      width: 100%
    }

    .container .box6 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 1rem 3rem
    }

    .container .box6 .box6-title {
      position: relative;
      width: 100%;
      margin-bottom:1rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box6 .t-table {
      width: 100%
    }

    .container .box6 .t-table .tr {
      display: flex;
      justify-content: space-between;
      width: 98%;
      margin: 0 auto;
      min-height: 4.5rem;
      box-sizing: border-box;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }


    .container .box6 .t-table .tr:not(:last-child) {
      margin-bottom: .5rem
    }

    .container .box6 .t-table .tr .th {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      box-sizing: border-box;
      padding: .5rem;
      font-size: 1.3rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box6 .t-table .tr .th:last-child {
      flex: 3
    }

    .container .box6 .t-table .tr .td {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      box-sizing: border-box;
      padding: .5rem;
      font-size: 1.2rem;
      color: #000;
      text-align: center;
      word-break: break-all
    }

    .container .box6 .t-table .tr .td:last-child {
      flex: 3
    }

    .container .box7 {
      width: 100%;
      box-sizing: border-box;
      padding: 0
    }

    .container .box7 .box-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center
    }

    .container .box7 .box-wrapper .img {
      width: 100%
    }

    .container .box7 .box-wrapper .right {
      width: 100%;
      margin-top: 1rem
    }

    .container .box7 .box-wrapper .right .title {
      position: relative;
      width: 100%;
      margin-bottom: 4.5rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box7 .box-wrapper .right .title:after {
      position: absolute;
      bottom: -1.5rem;
      left: 0;
      content: "";
      width: 10rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box7 .box-wrapper .right .faq-list {
      width: 100%
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item {
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 1.5rem;
      border-radius: 6px;
      background-color: #efefef;
      /*transition: all .3s*/
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item:not(:last-child) {
      margin-bottom: 1.5rem
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      cursor: pointer
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .name {
      max-width: 100%;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .right-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 3.2rem;
      max-width: 3.2rem;
      height: 3.2rem;
      margin-left: 1.5rem;
      border-radius: 50%;
      background-color: #662282
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .right-icon i {
      font-size: 1.4rem;
      font-weight: 700;
      color: #fff;
      /*transition: all .3s ease*/
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .right-icon .on {
      transform: rotate(180deg)
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-content {
      width: 100%;
      margin-top: 1rem
    }

    .container .box8 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 1rem 3rem
    }

    .container .box8 .box8-title {
      position: relative;
      width: 100%;
      margin-bottom: 4.5rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .box8-title:after {
      position: absolute;
      bottom: -1.5rem;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 10rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box8 .customer-list {
      width: 100%
    }

    .container .box8 .customer-list .customer-item {
      /*display: flex;*/
      /*flex-direction: column;*/
      /*align-items: center;*/
      width: 100%;
      box-sizing: border-box;
      padding: .8rem .8rem 1.5rem;
      height: fit-content;
      min-height: 300px;
    }

    .container .box8 .customer-list .customer-item .avatar {
      min-width: 6rem;
      max-width: 6rem;
      height: 6rem;
      margin-bottom: .5rem
    }

    .container .box8 .customer-list .customer-item .name {
      width: 100%;
      font-size: 1.8rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .customer-item .position {
      width: 100%;
      margin: 1rem 0;
      font-size: 1.4rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .customer-item .content {
      width: 100%;
      line-height: 160%;
      font-size: 1.3rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .active {
      background-color: #662282
    }
  }
  .mySwiper>>>.swiper-slide-next {
    background-color: #662282 !important;
  }
  .customer-item img {
    margin: 0 auto;
    display: block;
  }
  @media only screen and (min-width: 1024px) {
    .mask {
      position: fixed;
      bottom: 0px;
      left: 0px;
      z-index: 99;
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
      padding: 4rem 0px;
      background-color: rgba(0, 0, 0, 0.3);
      overflow: auto;
    }

    .mask .modal {
      width: 80%;
      margin: 0px auto;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
    }

    .mask .modal .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 2rem;
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-header .modal-title {
      max-width: 100%;
      font-size: 1.8rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .mask .modal .modal-header .close {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 4rem;
      max-width: 4rem;
      height: 3.2rem;
      margin-left: 4rem;
      border-radius: 4px;
      background-color: rgb(234, 84, 85);
      cursor: pointer;
    }

    .mask .modal .modal-header .close i {
      font-size: 1.7rem;
      color: rgb(255, 255, 255);
    }

    .mask .modal .modal-body {
      width: 100%;
      min-height: 8rem;
      box-sizing: border-box;
      padding: 2rem;
    }

    .mask .modal .modal-footer {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      box-sizing: border-box;
      padding: 2rem;
      border-top: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-footer .confirm-btn {
      height: 3.5rem;
      line-height: 3.5rem;
      box-sizing: border-box;
      padding: 0px 1.6rem;
      border-radius: 4px;
      font-size: 1.6rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      background-color: rgb(251, 194, 65);
      cursor: pointer;
    }
  }

  .s-content {
    font-size: 16px;
    line-height: 1.5
  }
  .svg-icon {
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .wrap {
    width: 100%;
    padding: 10px
  }

  .wrap .item-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap
  }

  .wrap .item {
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 24px 8px rgba(0,0,0,.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px;
    cursor: pointer;
    font-size: 29px;
    /*transition: all .3s ease;*/
    padding: 15px
  }

  .wrap .item img {
    width: 43.5px;
    height: 43.5px
  }

  .wrap .item .svg-icon {
    /*transition: all .3s ease*/
  }

  .wrap .item:hover {
    box-shadow: 0 0 24px 8px rgba(0,0,0,.2)
  }
  @media only screen and (max-width: 1024px) {
    .mask {
      position: fixed;
      bottom: 0px;
      left: 0px;
      z-index: 99;
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
      padding: 2rem 1rem;
      background-color: rgba(0, 0, 0, 0.3);
      overflow: auto;
    }

    .mask .modal {
      width: 100%;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
    }

    .mask .modal .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem;
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-header .modal-title {
      max-width: 100%;
      font-size: 1.7rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .mask .modal .modal-header .close {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 3.6rem;
      max-width: 3.6rem;
      height: 2.8rem;
      margin-left: 2rem;
      border-radius: 4px;
      background-color: rgb(234, 84, 85);
      cursor: pointer;
    }

    .mask .modal .modal-header .close i {
      font-size: 1.7rem;
      color: rgb(255, 255, 255);
    }

    .mask .modal .modal-body {
      width: 100%;
      min-height: 8rem;
      box-sizing: border-box;
      padding: 1.5rem;
    }

    .mask .modal .modal-footer {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem;
      border-top: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-footer .confirm-btn {
      height: 3.5rem;
      line-height: 3.5rem;
      box-sizing: border-box;
      padding: 0px 1.6rem;
      border-radius: 4px;
      font-size: 1.5rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      background-color: rgb(251, 194, 65);
      cursor: pointer;
    }
  }
  .payment-info {
    font-size: 1.2rem;
  }
  .payment-info img {
    width: 100%;
  }

  @media only screen and (min-width: 1024px) {
    .container {
      width: 100%
    }

    .container .quotes {
      width: 100%;
      height: 5rem;
      box-sizing: border-box;
      background-color: #fff9f0;
      overflow: hidden;
      margin-bottom: 0;
      border-radius: 0;
    }

    .container .quotes .coin-list {
      position: relative;
      display: flex;
      align-items: center;
      width: -moz-fit-content;
      width: fit-content;
      height: 100%;
      animation: mymove-1409c966 60s infinite;
      animation-timing-function: linear;
      -webkit-animation: mymove-1409c966 60s infinite;
      -webkit-animation-timing-function: linear
    }

    .container .quotes .coin-list .coin-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 27rem;
      max-width: 27rem;
      height: inherit
    }

    .container .quotes .coin-list .coin-item:not(:last-child):after {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      content: "";
      width: 1px;
      height: 2.5rem;
      background-color: #e9e9e9
    }

    .container .quotes .coin-list .coin-item .icon {
      min-width: 2.5rem;
      max-width: 2.5rem;
      height: 2.5rem
    }

    .container .quotes .coin-list .coin-item .name {
      margin: 0 1.2rem 0 .6rem;
      font-size: 1.7rem;
      font-weight: 700;
      color: #000;
      white-space: nowrap
    }

    .container .quotes .coin-list .coin-item .price {
      margin-right: 1.2rem;
      font-size: 1.7rem;
      color: #000;
      white-space: nowrap
    }

    .container .quotes .coin-list .coin-item .change {
      font-size: 1.6rem;
      white-space: nowrap
    }
  }
  @media only screen and (max-width: 1024px) {

    .container .quotes {
      width: 100%;
      height: 4.5rem;
      box-sizing: border-box;
      background-color: #fff9f0;
      overflow: hidden;
      margin-bottom: 0;
      border-radius: 0;
    }

    .container .quotes .coin-list {
      position: relative;
      display: flex;
      align-items: center;
      width: -moz-fit-content;
      width: fit-content;
      height: 100%;
      animation: mymove-1409c966 60s infinite;
      animation-timing-function: linear;
      -webkit-animation: mymove-1409c966 60s infinite;
      -webkit-animation-timing-function: linear
    }

    .container .quotes .coin-list .coin-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 27rem;
      max-width: 27rem;
      height: inherit
    }

    .container .quotes .coin-list .coin-item:not(:last-child):after {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      content: "";
      width: 1px;
      height: 2.5rem;
      background-color: #e9e9e9
    }

    .container .quotes .coin-list .coin-item .icon {
      min-width: 2.5rem;
      max-width: 2.5rem;
      height: 2.5rem
    }

    .container .quotes .coin-list .coin-item .name {
      margin: 0 1.2rem 0 .6rem;
      font-size: 1.7rem;
      font-weight: 700;
      color: #000;
      white-space: nowrap
    }

    .container .quotes .coin-list .coin-item .price {
      margin-right: 1.2rem;
      font-size: 1.7rem;
      color: #000;
      white-space: nowrap
    }

    .container .quotes .coin-list .coin-item .change {
      font-size: 1.6rem;
      white-space: nowrap
    }
  }
  .modal-body>>>img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
  .imageDiv img{
    display: block; margin: 5rem auto;max-width: 70%;
  }

  .t-heading-font {
    display: block;
    width: 100%;
  }

  /* 超小屏幕（手机，小于 768px） */
  @media (max-width: 768px) {
    .wrap .item {
      font-size: 1.5rem !important;
    }
    .t-heading-font {
      display: flex;
      width: 100%;
    }
    .title-main {
      font-size: 2.5rem !important;
    }
    .col-md-6 {
      width: 100%;
    }
    .box1-title,.box1-desc {
      padding-right: 0px !important;
    }
    .box1-inner-area {
      padding: 35px 8px 0px;
    }
    .banner__image {
      position: absolute;
      background-position: top right!important;
      right: 0px;
      top: 0px;
      width: 80%;
      height: 200px;
      background-size: 100% auto !important;
    }
    .banner_inp {
      width: 100%;
      padding: 9px 0px 9px 8px;
      font-size: 14px;
      height: auto;
      border-radius: 14px;
      max-width: 300px;
      border: 1px solid #B32283;
    }
    .menu-btn {
      width: 100%;
      height: 53px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(to right, #00f785, #410093);
      border-radius: 10px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #FFFFFF;
    }
    .button_home {
      display: inline-block;
      text-align: center;
      outline: none;
      border: none;
      width: auto;
      padding: 10px 25px;
      height: auto;
      min-width: 150px;
      margin-top: 10px;
    }
  }

  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {

    .columnd {
      width: 25%;
    }
    .box1-inner-area {
      padding: 30px 16px 0px;
    }
    .banner__image {
      position: absolute;
      background-position: top right!important;
      right: 0px;
      top: 0px;
      width: 50%;
      height: 679px;
      background-size: 100% auto !important;
    }
  }

  /* 中等屏幕（桌面显示器，大于等于 992px） */
  @media (min-width:769px) {

    .input-relative {
      width: calc(100% - 187px);
      position: relative;
    }
    .nav-btn {
      display: inline-block;
      cursor: pointer;
      color: #FFF;
      font-family: 'Poppins';
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.18px;
      padding: 10.5px 0 10.5px 0;
      width: 135px;
      text-align: center;
    }
    .input-main {
      background: rgba(255, 255, 255, 0.08);
      border: 0.5px solid #CDCDCD;
      border-radius: 10px;
      width: 100%;
      height: 48px;
      padding: 0px 10px 0px 10px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: rgba(0, 0, 0, 0.7);
    }
    .pass-input {
      height: 56px;
      padding: 0px 16px 0px 16px;
    }
    .newinput {
      height: 65px!important;
      border-radius: 20px;
    }
    .banner_inp {
      border-radius: 30px;
      width: -webkit-fill-available;
      border: 1px solid #662282;
    }
    .box1-inner-area {
      padding:30px 16px 0px;
    }
    .banner__image {
      position: absolute;
      background-position: top right!important;
      right: 0px;
      bottom: -10%;
      width: 55%;
      height: 542px;
      background-size: 100% auto !important;
    }
    .button_send {
      position: absolute;
      right: 1px;
      border-radius: 20px;
      line-height: 41px;
      top: 1px;
      height: 97%;
      cursor: pointer;
    }
    .br-30 {
      border-radius: 30px;
    }
    .signup {
      background: #F0E9F3;
      color: #662282;
      border: none;
    }
  }

  /* 大屏幕（大桌面显示器，大于等于 1200px） */
  @media (min-width: 1200px) {
    .input-relative {
      width: calc(100% - 187px);
      position: relative;
    }
    .nav-btn {
      display: inline-block;
      cursor: pointer;
      color: #FFF;
      font-family: 'Poppins';
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.18px;
      padding: 10.5px 0 10.5px 0;
      width: 135px;
      text-align: center;
    }
    .input-main {
      background: rgba(255, 255, 255, 0.08);
      border: 0.5px solid #CDCDCD;
      border-radius: 10px;
      width: 100%;
      height: 48px;
      padding: 0px 10px 0px 10px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: rgba(0, 0, 0, 0.7);
    }
    .pass-input {
      height: 56px;
      padding: 0px 16px 0px 16px;
    }
    .newinput {
      height: 65px!important;
      border-radius: 20px;
    }
    .banner_inp {
      border-radius: 30px;
      width: -webkit-fill-available;
      border: 1px solid #662282;
    }
    .box1-inner-area {
      padding: 30px 16px 0px;
    }
    .banner__image {
      position: absolute;
      background-position: top right!important;
      right: 0px;
      bottom: -10%;
      width: 55%;
      height: 542px;
      background-size: 100% auto !important;
    }
    .button_send {
      position: absolute;
      right: 1px;
      border-radius: 20px;
      line-height: 41px;
      top: 1px;
      height: 97%;
      cursor: pointer;
    }
    .br-30 {
      border-radius: 30px;
    }
    .signup {
      background: #F0E9F3;
      color: #662282;
      border: none;
    }
  }
  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    margin-right: 0.5rem;;
    margin-left: 0.5rem;;
  }
  @media (min-width: 768px){
    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }
  }
  .col-lg-4 {
    width: 100%;
  }
  @media (min-width: 992px){
    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
  }
  @media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      margin: 0 auto;
    }
  }
  .col-lg-6 {
    width: 100%;
  }
  @media (min-width: 992px){
    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-lg-6 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  @media (max-width: 992px){
    .page-banner {
      visibility: hidden;
      height: 10px;
      padding-top: 0.25rem!important;
    }
    .col-6 {
      width: 50%;
    }
  }
  .plan-card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    border: 1px solid #2d3651;
    text-align: center;
    /*-webkit-transition: all 0.3s ease;*/
    /*transition: all 0.3s ease;*/
    z-index: 1;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 20px;
    -webkit-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    margin: 1rem;
    height: 100%;
  }

  .plan-card:hover {
    -webkit-box-shadow: 0 0 30px #000;
    box-shadow: 0 0 30px #000;
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }

  .plan-card__badge {
    display: inline-block;
    padding: 3px 10px;
    font-size: 14px;
    border-radius: 15px;
  }

  .plan-card__badge--primary {
    background: #33BDFF;
  }

  .plan-card__badge--success {
    background: #0ea76c;
  }

  .plan-card__badge--warning {
    background: #ff9f43;
  }

  .plan-card__badge--danger {
    background: #f01313;
  }

  .plan-card__body {
    min-height: 120px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #000;
  }

  .plan-card__footer {
    margin-top: auto;
  }
  .text-left {
    text-align: left;
  }
  .plan-card__head {
    padding: 0 20px;
    font-size: 1.5rem;
  }
  .pt-2 {
    padding: 0 20px;
    font-size: 1.5rem;
  }
  .mb-2 {
    margin-bottom: 10px;
  }
  .badge-card {
    width: fit-content;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.04em;
    color: #E86969;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pricing {
    display: flex;
    align-items: center;
    grid-gap: 8px;
  }
  .pricing h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 60px;
    letter-spacing: -0.02em;
    color: #070A13;
    margin: 0;
  }
  .pricing p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #64748B;
    margin: 0;
  }
  .bonus {
    color: #000;
  }
  .main-btn {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    border: none;
    outline: none;
    background: linear-gradient(to right, #00f785, #410093);
    border-radius: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
    /*transition: .2s ease;*/
  }

  .buttons {
    width: 90%;
    display: flex;
    grid-gap: 16px;
    margin: 15px auto;
  }

  .buttons div {
    width: 48%;
    min-height: 36px;
    font-weight: 400;
  }
  .buttons .ed {
    background: none;
    border: 1px solid #2cab42;
    color: #2cab42;
  }
  .w-100 {
    width: 100%!important;
  }
  .flex-4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .gr-block {
    width: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
  .mb-4 {
    margin-top: 1rem;
  }
  .input_label {
    line-height: 3rem;
  }
  .col-12 >>>.van-stepper__input {
    width: 12rem !important;
  }
  .col-12 >>>.van-stepper__minus, .col-12 >>>.van-stepper__plus {
    background-color: #662282 !important;
    color: #ffffff !important;
  }
  .centered {
    display: flex;
    justify-content: center;
  }
  .title-main {
    color: #343A40;
    font-family: 'Roboto';
    font-size: 4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120.5%;
    text-align: center;
    margin-bottom: 2rem;
  }
  .block_of {
    position: relative;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 30px;
    background: rgb(255, 255, 255);
    border-radius: 24px;
    /*transition: all 260ms cubic-bezier(0.42, 0, 0.58, 1) 0s;*/
    border: 1px solid #662282;
    margin-bottom: 2rem;
  }
  .block_of img {
    position: absolute;
    right: 16px;
    bottom: 23px;
    height: 70px;
  }
  .block_of p {
    margin-top: 12px;
    font-size: 16px;
    line-height: 150%;
    height: 4.5em;
    color: rgba(29, 29, 29, 0.6);
  }
  .justify-content-sm-between{
    justify-content: space-evenly;
  }
  .wd {
    width: 90%;
  }
  .figure {
    display: inline-block;
  }
  .figure {
    position: absolute;
    width: 100%;
    height: 542px;
    transform: rotate(7.042deg) translateX(-150px);
    flex-shrink: 0;
    background: #FDF9FF;
    border-radius: 150px;
    z-index: -1;
  }
  .trusteds {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .itemd {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 126px;
    margin: 2rem 5px;
    border: 1px solid #238fe3;
    border-radius: 5px;
  }
  .main-btnNew {
    height: 4.8rem;
    line-height: 3.8rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: rgb(13,110,253);
    cursor: pointer;
    border: none;
    border-radius: 30px;
  }
  .dasbtn {
    background: linear-gradient(180deg, #329ae8 0%, #1e45d4 100%) !important;
  }
  .main-btnNew1 {
    display: inline-block;
    border-radius: 10px;
    background: linear-gradient(to right, #00f785, #410093);
    padding: 14px 30px 14px 30px;
    text-align: center;
    color: #fff;
    font-family: 'Poppins';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  .text, .descriptiond {
    padding: 5px;
  }
  .text {
    color: #662282;
    text-align: center;
    font-family: Roboto;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 129.7%;
    text-transform: capitalize;
  }
  .descriptiond {
    color: #273444;
    text-align: center;
    font-family: 'Roboto';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-transform: capitalize;
    width: 230px;
    margin-top: 20px;
    margin-bottom: 0px;
  }
  .text, .descriptiond {
    padding: 5px;
  }
  .bg_img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px 0 0 10px;
  }
  .r_right {
    border-radius: 0 10px 10px 0;
  }
  .contact-form-wrapper {
    background-color: #F3F3F3;
    border-radius: 0 10px 10px 0;
  }
  .r_left {
    border-radius: 10px 0 0 10px;
  }
  .recth1 {
    color: #000;
    text-align: center;
    font-family: 'Roboto';
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    width: 800px;
    line-height: 54px;
    margin-bottom: 21px;
  }
  .new-collection {
    background: #F0E9F3;
    border-radius: 0px 10px 10px 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #662282;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 43px;
  }
  /*.grid-part {*/
  /*  margin-top: 25px;*/
  /*  display: grid;*/
  /*  grid-template-columns: repeat(auto-fit, minmax(238px, 1fr));*/
  /*}*/
  .grid-part img {
    cursor: pointer;
    /*transition: .2s ease;*/
    width: 100%;
    max-width: 25rem;
  }
  .grid-part {
    margin-top: 8px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  .g-4, .gy-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-3, .gx-3 {
    --bs-gutter-x: 1rem;
  }
  /*.row>* {*/
  /*  flex-shrink: 0;*/
  /*  width: 100%;*/
  /*  max-width: 100%;*/
  /*  padding-right: calc(var(--bs-gutter-x) * .5);*/
  /*  padding-left: calc(var(--bs-gutter-x) * .5);*/
  /*  margin-top: var(--bs-gutter-y);*/
  /*}*/
  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .text-center {
    text-align: center!important;
  }
  h4 {
    font-size: 2rem;
  }
  .style-two {
    width: 100%;
    font-size: 1.4rem;
  }
  .style-two tbody {
    border: 0 !important;
  }
  .style-two thead {
    font-size: 1.3rem;
  }
  .style-two tbody, .style-two td, .style-two tfoot, .style-two th {
    width: 33.3%;
    text-align: center;
    /*padding: 13px 34px;*/
    font-size: 1.5rem;
    word-break: break-word;
  }
  .style-two tbody, .style-two td, .style-two tfoot, .style-two th, .style-two thead, .style-two tr {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    font-size: 1.5rem;
    width: 33.3%;
  }

  .style-two tbody tr td {
    text-align: left;
    vertical-align: middle;
    padding: 15px 34px;
    font-weight: 500;
    border-width: 0;
    font-size:1.2rem;
  }
  .style-two tbody>>> tr {
    border-bottom: 1px solid #333;
    width: 100%;
  }
  .style-two tbody tr td {
    font-size: 1.2rem;
    text-align: center;
  }
  @media screen and (max-width: 1199px){
    .style-two tbody tr td {
      padding: 15px 24px;
    }
  }
.van-swipe-item {
  width: 100%;
}
  .transaction .col-item .item-body .card1 {
    border-bottom: 1px solid rgb(13,110,253);
    padding: 7px 13px;
  }
  .transaction .col-item .item-body {
    height: 450px;
    /*background: #1B2030;*/
    box-shadow: 0 2px 8px 0 rgb(13,110,253);
    border-radius: 0 0 6px 6px
  }
  .d-flex {
    display: flex!important
  }
  .justify-content-between {
    -webkit-box-pack: justify!important;
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
  }
  .hero-wrap>>>.video{
    position: absolute;
    left: 0px;
    bottom: 0px;
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
    /*加滤镜*/
    /*filter: blur(15px); //背景模糊设置 */
    /*-webkit-filter: grayscale(100%);*/
    /*filter:grayscale(100%); //背景灰度设置*/
    /*z-index:-11*/

  }
  .video video>>>source{
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
  }
  .box-wrapper {
    color: #ffffff;
  }
  .feature-card {
    padding: 30px 15px;
    position: relative;
    border: 1px solid rgb(109,151,200);
    border-radius: 20px;
    background-color: #fff;
    /*-webkit-transition: all 0.3s ease;*/
    /*transition: all 0.3s ease;*/
    z-index: 1;
  }
  .feature-card {
    border: 1px solid rgb(109,151,200);
  }
  .feature-card:hover {
    -webkit-box-shadow: 0 3px 10px rgb(109,151,200);
    box-shadow: 0 3px 10px rgb(109,151,200);
  }
  .icon {
    position: relative;
    display: inline-block;
  }
  .icon--sqr {
    border-radius: 5px;
    text-align: center;
  }
  .icon--md {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 32px;
  }
  .feature-card__icon {
    background: #f01313;
    color: #fff;
  }
  .feature-card__icon {
    background: linear-gradient(180deg, #579de5 0%, #0d6efd 100%);
  }
  .feature-card__icon-float {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: clamp(4rem, 8vw + 1rem, 8rem);
    line-height: 1;
    opacity: 0.05;
    z-index: -1;
  }
  .mb-0 {
    font-size: 1.2rem;
    color: #000000 !important;
  }


  :root {
    /* Font Family */
    --heading-font: "Chakra Petch", sans-serif;
    --body-font: "Lato", sans-serif;
    /* ========================= Color Variables Start =========================== */
    --white: 0 0% 100%;
    --light-h: 0;
    --light-s: 0%;
    --light-l: 71%;
    --light: var(--light-h) var(--light-s) var(--light-l);
    --black-h: 225;
    --black-s: 31%;
    --black-l: 10%;
    --black: var(--black-h) var(--black-s) var(--black-l);
    --heading-color: var(--white);
    --body-color: var(--light);
    --border-color: 0 0% 88%;
    --section-bg: 226 28% 15%;
    /* ================================ Box Shadow Start =============================== */
    --header-box-shadow: 0px -1px 15px 3px hsl(var(--black) /.3);
    --mobile-box-shadow: 0px -1px 5px 0px hsl(var(--black) /.92);
    --box-shadow: 0px 2px 15px hsl(var(--black) /.05);
    /* ================================ Box Shadow End =============================== */
    /* ========================= Base Color ============================= */

    --base-h: 59;
    --base-s: 90%;
    --base-l: 77%;
    --base: 59 90% 77%;
    /* Base Darken  */
    --base-d-100: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.1);
    --base-d-200: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.2);
    --base-d-300: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.3);
    --base-d-400: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.4);
    --base-d-500: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.5);
    --base-d-600: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.6);
    --base-d-700: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.7);
    --base-d-700: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.7);
    --base-d-800: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.8);
    --base-d-800: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.8);
    --base-d-900: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.9);
    /* Base Lighten */
    --base-l-100: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.1);
    --base-l-200: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.2);
    --base-l-300: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.3);
    --base-l-400: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.4);
    --base-l-500: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.5);
    --base-l-600: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.6);
    --base-l-700: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.7);
    --base-l-800: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.8);
    --base-l-900: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.9);
    --base-gradient: linear-gradient(180deg, hsl(var(--base-two)) 2.95%, hsl(var(--base)) 54.04%, hsl(var(--base-two)) 105.51%);
    --base-gradient-reverse: linear-gradient(180deg, hsl(var(--base)) -10.95%, hsl(var(--base-two)) 50.04%, hsl(var(--base)) 130.51%);
    /* ========================= Base Color ============================= */
    --base-two-h: 31;
    --base-two-s: 68%;
    --base-two-l: 38%;
    --base-two: 31 68% 38%;
    /* Base Darken  */
    --base-two-d-100: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.1);
    --base-two-d-200: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.2);
    --base-two-d-300: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.3);
    --base-two-d-400: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.4);
    --base-two-d-500: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.5);
    --base-two-d-600: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.6);
    --base-two-d-700: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.7);
    --base-two-d-700: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.7);
    --base-two-d-800: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.8);
    --base-two-d-800: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.8);
    --base-two-d-900: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.9);
    /* Base Lighten */
    --base-two-l-100: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.1);
    --base-two-l-200: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.2);
    --base-two-l-300: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.3);
    --base-two-l-400: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.4);
    --base-two-l-500: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.5);
    --base-two-l-600: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.6);
    --base-two-l-700: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.7);
    --base-two-l-800: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.8);
    --base-two-l-900: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.9);
    /* ============================== Bootstrap Modifier Start ============================== */
    /* Primary Color */
    --primary-h: 211;
    --primary-s: 100%;
    --primary-l: 50%;
    --primary: var(--primary-h) var(--primary-s) var(--primary-l);
    /* Primary Darken */
    --primary-d-100: var(--primary-h) var(--primary-s) calc(var(--primary-l) - var(--primary-l) * 0.1);
    --primary-d-200: var(--primary-h) var(--primary-s) calc(var(--primary-l) - var(--primary-l) * 0.2);
    --primary-d-300: var(--primary-h) var(--primary-s) calc(var(--primary-l) - var(--primary-l) * 0.3);
    --primary-d-400: var(--primary-h) var(--primary-s) calc(var(--primary-l) - var(--primary-l) * 0.4);
    --primary-d-500: var(--primary-h) var(--primary-s) calc(var(--primary-l) - var(--primary-l) * 0.5);
    /* primary Lighten */
    --primary-l-100: var(--primary-h) calc(var(--primary-s)) calc(var(--primary-l) + (100% - var(--primary-l)) * 0.1);
    --primary-l-200: var(--primary-h) calc(var(--primary-s)) calc(var(--primary-l) + (100% - var(--primary-l)) * 0.2);
    --primary-l-300: var(--primary-h) calc(var(--primary-s)) calc(var(--primary-l) + (100% - var(--primary-l)) * 0.3);
    --primary-l-400: var(--primary-h) calc(var(--primary-s)) calc(var(--primary-l) + (100% - var(--primary-l)) * 0.4);
    --primary-l-500: var(--primary-h) calc(var(--primary-s)) calc(var(--primary-l) + (100% - var(--primary-l)) * 0.5);
    --primary-l-600: var(--primary-h) calc(var(--primary-s)) calc(var(--primary-l) + (100% - var(--primary-l)) * 0.6);
    /* Secondary Color */
    --secondary-h: 208;
    --secondary-s: 7%;
    --secondary-l: 46%;
    --secondary: var(--secondary-h) var(--secondary-s) var(--secondary-l);
    /* Secondary Darken */
    --secondary-d-100: var(--secondary-h) var(--secondary-s) calc(var(--secondary-l) - var(--secondary-l) * 0.1);
    --secondary-d-200: var(--secondary-h) var(--secondary-s) calc(var(--secondary-l) - var(--secondary-l) * 0.2);
    --secondary-d-300: var(--secondary-h) var(--secondary-s) calc(var(--secondary-l) - var(--secondary-l) * 0.3);
    --secondary-d-400: var(--secondary-h) var(--secondary-s) calc(var(--secondary-l) - var(--secondary-l) * 0.4);
    --secondary-d-500: var(--secondary-h) var(--secondary-s) calc(var(--secondary-l) - var(--secondary-l) * 0.5);
    /* secondary Lighten */
    --secondary-l-100: var(--secondary-h) calc(var(--secondary-s)) calc(var(--secondary-l) + (100% - var(--secondary-l)) * 0.1);
    --secondary-l-200: var(--secondary-h) calc(var(--secondary-s)) calc(var(--secondary-l) + (100% - var(--secondary-l)) * 0.2);
    --secondary-l-300: var(--secondary-h) calc(var(--secondary-s)) calc(var(--secondary-l) + (100% - var(--secondary-l)) * 0.3);
    --secondary-l-400: var(--secondary-h) calc(var(--secondary-s)) calc(var(--secondary-l) + (100% - var(--secondary-l)) * 0.4);
    --secondary-l-500: var(--secondary-h) calc(var(--secondary-s)) calc(var(--secondary-l) + (100% - var(--secondary-l)) * 0.5);
    --secondary-l-600: var(--secondary-h) calc(var(--secondary-s)) calc(var(--secondary-l) + (100% - var(--secondary-l)) * 0.6);
    /* Success Color */
    --success-h: 115;
    --success-s: 99%;
    --success-l: 41%;
    --success: var(--success-h) var(--success-s) var(--success-l);
    /* Success Darken */
    --success-d-100: var(--success-h) var(--success-s) calc(var(--success-l) - var(--success-l) * 0.1);
    --success-d-200: var(--success-h) var(--success-s) calc(var(--success-l) - var(--success-l) * 0.2);
    --success-d-300: var(--success-h) var(--success-s) calc(var(--success-l) - var(--success-l) * 0.3);
    --success-d-400: var(--success-h) var(--success-s) calc(var(--success-l) - var(--success-l) * 0.4);
    --success-d-500: var(--success-h) var(--success-s) calc(var(--success-l) - var(--success-l) * 0.5);
    /* Success Lighten */
    --success-l-100: var(--success-h) calc(var(--success-s)) calc(var(--success-l) + (100% - var(--success-l)) * 0.1);
    --success-l-200: var(--success-h) calc(var(--success-s)) calc(var(--success-l) + (100% - var(--success-l)) * 0.2);
    --success-l-300: var(--success-h) calc(var(--success-s)) calc(var(--success-l) + (100% - var(--success-l)) * 0.3);
    --success-l-400: var(--success-h) calc(var(--success-s)) calc(var(--success-l) + (100% - var(--success-l)) * 0.4);
    --success-l-500: var(--success-h) calc(var(--success-s)) calc(var(--success-l) + (100% - var(--success-l)) * 0.5);
    --success-l-600: var(--success-h) calc(var(--success-s)) calc(var(--success-l) + (100% - var(--success-l)) * 0.6);
    /* Danger Color */
    --danger-h: 0;
    --danger-s: 96%;
    --danger-l: 63%;
    --danger: var(--danger-h) var(--danger-s) var(--danger-l);
    /* Danger Darken */
    --danger-d-100: var(--danger-h) var(--danger-s) calc(var(--danger-l) - var(--danger-l) * 0.1);
    --danger-d-200: var(--danger-h) var(--danger-s) calc(var(--danger-l) - var(--danger-l) * 0.2);
    --danger-d-300: var(--danger-h) var(--danger-s) calc(var(--danger-l) - var(--danger-l) * 0.3);
    --danger-d-400: var(--danger-h) var(--danger-s) calc(var(--danger-l) - var(--danger-l) * 0.4);
    --danger-d-500: var(--danger-h) var(--danger-s) calc(var(--danger-l) - var(--danger-l) * 0.5);
    /* danger Lighten */
    --danger-l-100: var(--danger-h) calc(var(--danger-s)) calc(var(--danger-l) + (100% - var(--danger-l)) * 0.1);
    --danger-l-200: var(--danger-h) calc(var(--danger-s)) calc(var(--danger-l) + (100% - var(--danger-l)) * 0.2);
    --danger-l-300: var(--danger-h) calc(var(--danger-s)) calc(var(--danger-l) + (100% - var(--danger-l)) * 0.3);
    --danger-l-400: var(--danger-h) calc(var(--danger-s)) calc(var(--danger-l) + (100% - var(--danger-l)) * 0.4);
    --danger-l-500: var(--danger-h) calc(var(--danger-s)) calc(var(--danger-l) + (100% - var(--danger-l)) * 0.5);
    --danger-l-600: var(--danger-h) calc(var(--danger-s)) calc(var(--danger-l) + (100% - var(--danger-l)) * 0.6);
    /* Warning Color */
    --warning-h: 38;
    --warning-s: 100%;
    --warning-l: 55%;
    --warning: var(--warning-h) var(--warning-s) var(--warning-l);
    /* Warning Darken */
    --warning-d-100: var(--warning-h) var(--warning-s) calc(var(--warning-l) - var(--warning-l) * 0.1);
    --warning-d-200: var(--warning-h) var(--warning-s) calc(var(--warning-l) - var(--warning-l) * 0.2);
    --warning-d-300: var(--warning-h) var(--warning-s) calc(var(--warning-l) - var(--warning-l) * 0.3);
    --warning-d-400: var(--warning-h) var(--warning-s) calc(var(--warning-l) - var(--warning-l) * 0.4);
    --warning-d-500: var(--warning-h) var(--warning-s) calc(var(--warning-l) - var(--warning-l) * 0.5);
    /* Warning Lighten */
    --warning-l-100: var(--warning-h) calc(var(--warning-s)) calc(var(--warning-l) + (100% - var(--warning-l)) * 0.1);
    --warning-l-200: var(--warning-h) calc(var(--warning-s)) calc(var(--warning-l) + (100% - var(--warning-l)) * 0.2);
    --warning-l-300: var(--warning-h) calc(var(--warning-s)) calc(var(--warning-l) + (100% - var(--warning-l)) * 0.3);
    --warning-l-400: var(--warning-h) calc(var(--warning-s)) calc(var(--warning-l) + (100% - var(--warning-l)) * 0.4);
    --warning-l-500: var(--warning-h) calc(var(--warning-s)) calc(var(--warning-l) + (100% - var(--warning-l)) * 0.5);
    --warning-l-600: var(--warning-h) calc(var(--warning-s)) calc(var(--warning-l) + (100% - var(--warning-l)) * 0.6);
    /* Info Color */
    --info-h: 196;
    --info-s: 100%;
    --info-l: 50%;
    --info: var(--info-h) var(--info-s) var(--info-l);
    /* Info Darken */
    --info-d-100: var(--info-h) var(--info-s) calc(var(--info-l) - var(--info-l) * 0.1);
    --info-d-200: var(--info-h) var(--info-s) calc(var(--info-l) - var(--info-l) * 0.2);
    --info-d-300: var(--info-h) var(--info-s) calc(var(--info-l) - var(--info-l) * 0.3);
    --info-d-400: var(--info-h) var(--info-s) calc(var(--info-l) - var(--info-l) * 0.4);
    --info-d-500: var(--info-h) var(--info-s) calc(var(--info-l) - var(--info-l) * 0.5);
    --info-l-100: var(--info-h) calc(var(--info-s)) calc(var(--info-l) + (100% - var(--info-l)) * 0.1);
    --info-l-200: var(--info-h) calc(var(--info-s)) calc(var(--info-l) + (100% - var(--info-l)) * 0.2);
    --info-l-300: var(--info-h) calc(var(--info-s)) calc(var(--info-l) + (100% - var(--info-l)) * 0.3);
    --info-l-400: var(--info-h) calc(var(--info-s)) calc(var(--info-l) + (100% - var(--info-l)) * 0.4);
    --info-l-500: var(--info-h) calc(var(--info-s)) calc(var(--info-l) + (100% - var(--info-l)) * 0.5);
    --info-l-600: var(--info-h) calc(var(--info-s)) calc(var(--info-l) + (100% - var(--info-l)) * 0.6);
    /* ============================== Bootstrap Modifier End ============================== */
  }

  .flex-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .pa-extend, .contact-item__icon::before, .contact-item__icon::after, .about-item__icon::before, .about-item__icon::after, .how-work-item__content::before, .how-work-item__number::before, .how-work-item__number::after, .calculator-content::before, .social-list__link::before, .footer-menu__item::before, .alert__link::before, .pagination .page-item .page-link::before, .before-shadow::before, .before-shadow::after {
    position: absolute;
    content: "";
  }
  .how-work-item {
    text-align: center;
    padding: 0 25px;
    flex-direction: column;
  }


  .how-work-item__number {
    position: relative;
    width: 90px;
    height: 94px;
    border-radius: 20px;
    display: inline-flex;
    margin-bottom: 40px;
  }

  .how-work-item__number::before,
  .how-work-item__number::after {
    left: 0;
    top: 0;
    background: linear-gradient(180deg, #329ae8 0%, #1e45d4 100%);
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transform: rotate(130deg) skew(0deg, 14deg);
    z-index: -1;
  }

  .how-work-item__number::after {
    background: var(--base-gradient);
    background: linear-gradient(180deg, #1e45d4 0%, #1e45d4 100%);
    z-index: -2;
    top: 6px;
  }

  .how-work-item__number .text {
    color: #ffffff;
    font-size: 2rem;
  }

  .how-work-item__hexagon {
    position: absolute;
    width: 128px;
    height: 136px;
    bottom: -65px;
    -webkit-mask: url(data:image/png;base64,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) no-repeat 50% 50%;
    mask: url(data:image/png;base64,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) no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
    z-index: -3;
    background: linear-gradient(0deg, #eeeeee 0%, rgba(63, 23, 172, 0.64) 75.24%);
  }

  .how-work-item__content {
    background-color: #eee;
    padding: 32px 24px;
    border-radius: 10px;
    position: relative;
  }

  @media screen and (max-width: 1199px) {
    .how-work-item__content {
      padding: 24px;
    }
  }

  @media screen and (max-width: 575px) {
    .how-work-item__content {
      padding: 24px 16px;
    }
  }

  .how-work-item__content::before {
    top: -11px;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 0px;
    transform: translateX(-50%) rotate(135deg);
    z-index: -1;
    border: 12px solid #eee;
  }

  @media screen and (max-width: 1199px) {
    .how-work-item__title {
      margin-bottom: 12px;
      font-size: 1.4rem;
    }
  }

  .how-work-item__desc {
    font-size: 1.4rem;
    color: #000000 !important;
  }

  @media screen and (max-width: 1199px) {
    .how-work-item__desc {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 992px) {
    .how-work-item__content h5 {
      font-size: 2em;
      margin-top: 1rem;
    }
    .how-work-item-wrapper div[class*=col]:nth-child(even) .how-work-item__content {
      margin-bottom: 36px;
    }
    .how-work-item-wrapper div[class*=col]:nth-child(even) .how-work-item {
      flex-direction: column-reverse;
    }
    .how-work-item-wrapper div[class*=col]:nth-child(even) .how-work-item__content::before {
      top: auto;
      bottom: -11px;
    }
  }
  .justify-content-center {
    justify-content: center!important;
  }
  .section-heading__title {
    font-size: 2rem;
    margin: 0 0 15px 0;
    text-align: center;
  }
  .section-heading__desc {
    max-width: 625px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.25rem;
    color: #000000 !important;
  }
  @media (min-width: 576px){
    .col-sm-6 {
      flex: 0 0 auto;
      width: 50%;
    }
  }
  @media screen and (min-width: 425px) and (max-width: 575px){
    .col-xsm-6 {
      width: 50%;
    }
  }
  @media (min-width: 992px){
    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .section-heading__title {
      font-size: 3rem;
    }
    .section-heading__desc {
      font-size: 1.5rem;
    }
  }
.how-work-item {
  margin-top: 1rem;
}
  .how-work {
    margin-top: 2rem;
  }
  .hero-text {
    font-size: 1.5rem;
    color: #e73329;
  }


  /* Dots Css End */
  /* ================= Slick Arrow & Dots css Start ================ */
  /* ============================= Blog Sidebar Css Start ============================ */
  .blog-sidebar-wrapper {
    position: sticky;
    top: 100px;
    border-radius: 8px;
    padding: 10px;
    background: linear-gradient(hsl(var(--black)), hsl(var(--black))) padding-box, hsl(var(--white)/0.06) border-box;
    border: 1px solid transparent;
    margin-left: 20px;
  }

  @media screen and (max-width: 1399px) {
    .blog-sidebar-wrapper {
      margin-left: 0;
    }
  }

  .blog-sidebar {
    background-color: hsl(var(--section-bg));
    padding: 20px;
    border-radius: inherit;
  }

  @media screen and (max-width: 1399px) {
    .blog-sidebar {
      padding: 15px 10px;
    }
  }

  /* Latest Blog Css */
  .latest-blog {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 10px;
    border-radius: inherit;
    background: linear-gradient(#323645, #323645) padding-box, var(--base-gradient) border-box;
    border: 1px solid transparent;
    margin-bottom: 20px;
  }

  .latest-blog:last-of-type {
    margin-bottom: 0px;
  }

  .latest-blog__thumb {
    height: 80px;
    width: 92px;
    display: flex;
    border-radius: 5px;
    overflow: hidden;
  }

  @media screen and (max-width: 1399px) {
    .latest-blog__thumb {
      width: 70px;
    }
  }

  .latest-blog__thumb a {
    display: block;
    height: 100%;
    width: 100%;
  }

  .latest-blog__content {
    width: calc(100% - 92px);
    padding-left: 15px;
  }

  @media screen and (max-width: 1399px) {
    .latest-blog__content {
      width: calc(100% - 70px);
      padding-left: 10px;
    }
  }

  .latest-blog__title {
    margin-bottom: 5px;
  }

  .latest-blog__title a {
    color: hsl(var(--heading-color));
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .latest-blog__title a:hover {
    color: hsl(var(--base));
  }

  .blog-meta {
    margin-top: 12px;
    row-gap: 10px;
  }

  .blog-meta__item {
    font-size: 0.8125rem;
    margin-right: 10px;
    padding-right: 10px;
    line-height: 0.7;
    border-style: solid;
    border-image-slice: 1;
    border-width: 1px;
    border-image-source: var(--base-gradient);
    border-top: 0;
    border-left: 0;
    border-bottom: 0;
  }

  @media screen and (max-width: 1399px) {
    .blog-meta__item {
      margin-right: 6px;
      padding-right: 6px;
    }
  }

  .blog-meta__item:last-child {
    border-right: 0;
  }

  .blog-meta__item .icon {
    margin-right: 5px;
  }
  .flex-wrap, .form--check {
    display: flex;
  }
  .testimonial-item {
    background: linear-gradient(#afceed, #3d4355) padding-box, linear-gradient(180deg, hsl(31, 68%, 38%) 2.95%, hsl(59, 90%, 77%) 54.04%, hsl(31, 68%, 38%) 105.51%) border-box;
    border: 2px solid transparent;
    padding: 10px 8px;
    padding-left: 0;
    border-radius: 15px;
    position: relative;
    margin-left: 32px;
  }
.testimonails-card {
  height: 100%;
}
  @media screen and (max-width: 424px) {
    .testimonial-item {
      margin-left: 25px;
    }
  }

  @media screen and (max-width: 575px) {
    .testimonial-item {
      padding: 24px;
      padding-left: 0;
    }
  }

  @media screen and (max-width: 424px) {
    .testimonial-item {
      padding: 24px 16px 24px 0;
    }
  }

  .testimonial-item__thumb {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    background: linear-gradient(hsl(211 ,81.57%, 68.8%), hsl(226, 92.08% ,72.12%)) padding-box, linear-gradient(180deg, hsl(31, 68%, 38%) 2.95%, hsl(59, 90%,77%) 54.04%, hsl(31, 68%, 38%) 105.51%) border-box;
    border: 2px solid transparent;
    margin-left: -32px;
  }

  @media screen and (max-width: 424px) {
    .testimonial-item__thumb {
      width: 50px;
      height: 50px;
    }
  }

  .testimonial-item__content {
    width: calc(100% - 32px);
    padding-left: 20px;
  }

  @media screen and (max-width: 575px) {
    .testimonial-item__content {
      padding-left: 12px;
    }
  }

  @media screen and (max-width: 424px) {
    .testimonial-item__content {
      width: calc(100% - 25px);
    }
  }

  .testimonial-item__info {
    margin-bottom: 16px;
  }

  .testimonial-item__name {
    margin-bottom: 0px;
    font-size: 2rem;
    color: #ffffff;
    margin-top: 0;
  }
  .fit-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .fs-14, .form--control::placeholder, .form--label {
    font-size: 1.4rem;
    color: #eee;
  }
  .fs-16, .latest-blog__title a, .alert__title, p {
    font-size: 1.4rem;
  }
  .py-120 {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .slick-list {
    padding: 0 4rem;
  }
  .mt-2 {
    margin-bottom: 1rem !important;
    margin-top: 1rem;
    /*padding:0 2rem;*/
  }
  .btn:hover {
    transform: scale(.94)
  }
  .first-box-wraper {
    /*background: radial-gradient(circle, #323136 0, #181a22 99%);*/
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .first-box-wraper-img-layer {
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  .top-wraper .left-info-area .btn-area {
    /*align-items: center;*/
    /*display: flex;*/
    /*flex-direction: row;*/
    /*margin-top: 40px*/
  }

  .top-wraper .left-info-area .btn-area .btn {
    align-items: center;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    height: 50px;
    justify-content: center;
    margin-right: 30px;
    overflow: hidden;
    position: relative;
    /*transition: transform .2s ease-in;*/
    min-width: 160px;
    max-width: 210px;
  }

  .top-wraper .left-info-area .btn-area .btn.start-btn {
    background: linear-gradient(to right, #fff, #410093);
    /*background: #4caf50;*/
    color: #fff;
    /*padding: 0 30px;*/
    /*width: 130px;*/
    /*max-width: 300px;*/
    line-height: 50px;
    text-align: center;
  }



  .top-wraper .left-info-area .btn-area .about-us-btn {
    background: linear-gradient(90deg,#707070,#010007);
    border: none;
    overflow: hidden
  }

  .top-wraper .left-info-area .btn-area .about-us-btn .btn-mask {
    background: linear-gradient(90deg, #707070, #010007);
    border-radius: 30px;
    height: 100%;
    left: 0;
    opacity: .4;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    overflow: hidden;
  }

  .top-wraper .left-info-area .btn-area .about-us-btn .btn-text {
    align-items: center;
    border-radius: 30px;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2
  }

  .top-wraper .left-info-area .btn-area .about-us-btn .btn-bg-video {
    width: 210px;
    overflow: hidden;
  }

  .top-wraper .left-info-area .btn-area .start-btn:hover {
    /*background: linear-gradient(94deg, #00f785 10.66%, #7130c3 53.03%, #410093 96.34%, rgba(255, 0, 238, 0.26) 191.41%, rgba(255, 59, 212, 0) 191.43%);*/
    color: #fff;
  }
  .avatar.avatar-md-sm {
    height: 65px;
    width: 65px;
  }
  .mt-4 {
    margin-top: 10px;
  }
  .feature-clean h5 {
    font-size: 20px !important;
  }
  .text-muted {
    color: #8492a6 !important;
    font-size: 16px;
  }
  .feature-primary {
    padding: 0 15px;
    margin-top: 1.5rem;
  }
  .pl-3, .px-3 {
    padding-left: 2rem !important;
  }
  .pr-3, .px-3 {
    padding-right: 2rem !important;
  }
  .buttons .ed:hover {
    background: #2cab42;
    color: #ffffff;
  }


  .image_border {
    border-radius: 10px;
    border: 2px solid #662282;
    padding: 3px;
    max-width: 400px;
    height: fit-content;
    margin-right: 10px;
  }
  .image_border img {
    width: 100%;
  }
  @media (max-width: 768px) {
    .top {
      width: 96%;
      margin: 0 auto;
    }
    .video video {
      position: absolute;
      object-fit: cover;
    }
  }
  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {
    .top {
      display: flex;
      justify-content: space-evenly;
    }
  }

  .plan-title {
    color: #7F2483;
    font-family: 'Roboto';
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    text-align: left;
    line-height: normal;
    max-width: 50rem;
  }
  .flexc {
    display: flex;
    justify-content: center;
  }
  .new-collection {
    background: #F0E9F3;
    border-radius: 0px 10px 10px 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #662282;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pricing p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #64748B;
    margin: 0;
  }
  .description p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #070A13;
    text-align: left;
    margin: 5px 0;
    vertical-align: center;
  }
  .description img {
    display: inline-block !important;

  }
  .diaf {
    position: sticky;
    bottom: 0;
    width: 100%;
    background: #fff;
    left: 0;
    padding: 10px 0;
    border-top: 1px solid #ccc;
  }
  .description-block-2 {
    font-size: 2rem;
  }
  .top-wraper1 {
    display: flex;
    align-items: center;
  }
  .testimonial-item__content {
    height: 15rem;
    overflow: hidden;
  }
  @media only screen and (min-width: 1024px) {
    html {
      font-size:10px
    }
    .top-wraper .left-info-area .btn-area .btn:hover {
      transform: scale(.94)
    }
  }

  @media only screen and (max-width: 1024px) {
    html {
      font-size:10px
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 5px
  }

  ::-webkit-scrollbar-corner,::-webkit-scrollbar-track {
    background-color: #e2e2e2
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: #662282
  }

  .slide-enter-active,.slide-leave-active {
    /*transition: all .2s ease*/
  }

  .slide-enter,.slide-leave-to {
    transform: translateY(10px);
    opacity: 0
  }

  .slide-right-enter-active,.slide-right-leave-active {
    /*transition: all .2s ease*/
  }

  .slide-right-enter,.slide-right-leave-to {
    transform: translateX(-10px);
    opacity: 0
  }

  @keyframes tobig-39d242ba {
    0% {
      transform: scale(1)
    }

    to {
      transform: scale(1.5)
    }
  }

  input::-webkit-inner-spin-button,input::-webkit-outer-spin-button {
    -webkit-appearance: none!important
  }

  input[type=number] {
    -moz-appearance: textfield
  }

  .el-carousel__indicators--outside button {
    background-color: #662282!important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: #662282!important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  /*.el-pagination.is-background .el-pager li:not(.disabled).active {*/
  /*  background-color: #662282!important*/
  /*}*/

  /*.el-pagination.is-background .el-pager li:not(.active):hover {*/
  /*  color: #662282!important*/
  /*}*/

  .el-message {
    font-size: 1.6rem
  }

  .el-menu-item {
    padding: 0 2rem;
    font-size: 1.5rem;
    font-weight: 700
  }

  .el-submenu__title {
    font-size: 1.5rem!important;
    font-weight: 700
  }

  .el-menu-item [class^=el-icon-],.el-submenu [class^=el-icon-] {
    font-size: 2rem
  }

  .el-submenu__icon-arrow {
    font-size: 1.4rem!important
  }

  .el-menu-item.is-active,.el-menu-item:hover,.el-submenu__title:hover {
    color: #662282;
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: #662282
  }

  .lang-item {
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap
  }

  .lang-item .flag {
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-right: .6rem
  }

  .option-label {
    display: flex;
    align-items: center;
    width: 100%
  }

  .option-label .icon {
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-right: .6rem
  }

  .el-input {
    font-size: 1.5rem!important
  }

  .el-input .el-input__inner {
    height: 4.5rem;
    line-height: 4.5rem;
    padding: 0 2rem;
    font-family: myFont;
    color: #000;
    border: 1px solid #d9d9d9!important
  }

  .el-textarea__inner {
    font-size: 1.5rem!important;
    font-family: myFont;
    color: #000!important
  }

  .el-form-item__label {
    padding-bottom: 1rem!important;
    line-height: normal!important;
    font-size: 1.5rem!important;
    color: #000!important;
    word-wrap: break-word
  }

  .el-input.is-disabled .el-input__inner {
    color: #000!important;
    cursor: default!important
  }

  .el-radio {
    color: #000!important
  }

  .el-radio__label {
    font-size: 1.5rem!important
  }

  .el-select {
    width: 100%
  }

  .el-select-dropdown__item {
    font-size: 1.5rem;
    font-family: myFont
  }

  .el-select-dropdown__empty {
    font-size: 1.5rem!important;
    font-family: myFont
  }

  .el-select-dropdown__item.selected {
    color: #662282
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #662282!important;
    border-color: #662282!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #662282!important
  }

  .nav-item {
    position: relative;
  }
  .active .underlined {
    width: 70.2%;
    opacity: 1;
  }
  .nav-item:hover .underlined {
    width: 70.2%;
    opacity: 1;
  }
  .underlined {
    position: absolute;
    border-radius: 5px;
    background: #d89864;
    width: 0%;
    height: 2px;
    margin-top: 2px;
    opacity: 0;
    bottom: -0.5rem;
    /*transition: width 0.3s, opacity 0.3s;*/
  }

  .dasbtn {
    background: linear-gradient(to right, #00f785, #410093) !important;
  }
  .el-dropdown {
    margin-right: 10px;
  }
  .svg-icon {
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .profit-calculator {
    -webkit-box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 768px) {
    .profit-calculator {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      padding: 30px;
      border: 1px solid rgba(240, 19, 19, 0.3);
      border-radius: 15px;
    }
  }

  @media screen and (min-width: 1200px) {
    .profit-calculator {
      padding: 40px 60px 50px;
    }
  }
  .profit-calculator .form--control,.profit-calculator .form-select {
    padding: 5px;
    border-radius: 6px;

  }
  .profit-calculator .form--control[readonly] {
    color: #000;

  }
  .form-group {
    padding: 10px;
    font-size: 1.5rem;
    color: #000000;
  }
.msg {
  padding: 0 10px;
  font-size: 1.5rem;
}

  .articles .article-holder {
    display: flex;
  }
  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
    color: #3a3939;
    margin-bottom: 16px;
  }
  @media only screen and (max-width: 768px) {
    .iframe {
      height: 78px !important;
    }
    .row1 {
      flex-wrap: wrap;
    }
    h2 {
      font-size: 32px;
    }
  }
  @media only screen and (min-width: 769px) {
    .col-sm-4 {
      max-width: 33.3333333333%;
      flex-basis: 33.3333333333%;
    }
  }

  h2 strong {
    color: #fba342;
  }
  .news, .profcalc {
    background: #fafafa;
    padding: 32px 0;
    margin-bottom: 16px;
  }

  .article {
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 1px 5px #3a39391a;
    margin-bottom: 51px;
    cursor: pointer
  }

  .article .image {
    height: 200px;
    background: #eee;
    border-radius: 5px 5px 0 0;
    position: relative;
    padding: 24px;
    background-position: center;
    background-size: cover
  }

  .article .image .video {
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 60px;
    background-color: #fee8d0;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    font-size: 24px;
    color: #fba342;
    opacity: .6
  }

  .article .image .tag {
    border-radius: 5px;
    background-color: #f5f5f5;
    border: solid 1px #cecdcd;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 1px;
    color: #959595;
    padding: 3px 5px;
    opacity: .5;
    margin: 0 8px 8px 0;
    display: inline-block;
    text-transform: uppercase
  }

  .article .image .tag:hover {
    color: #fba342;
    border-color: #fcfcfc;
    opacity: 1
  }

  .article:hover {
    box-shadow: 0 10px 20px #2323231a
  }

  .article:hover .video,.article:hover .tag {
    opacity: 1
  }

  .article .details {
    padding: 24px;
    color: #959595;
    font-size: 12px;
    line-height: 1.5
  }

  .article .details a {
    font-size: 18px;
    line-height: 1.67;
    color: #3a3939;
    margin-top: 16px;
    display: -webkit-box !important;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  @media only screen and (min-width : 769px) {
    .article.large {
      height:416px;
      display: flex
    }

    .article.large .image {
      max-width: calc(66.66667% - 8px);
      flex-basis: calc(66.66667% - 8px);
      height: 100%
    }

    .article.large .details {
      max-width: calc(33.33333% + 8px);
      flex-basis: calc(33.33333% + 8px);
      margin-top: 120px
    }

    .article.large .details a {
      font-size: 24px
    }

  }
  .row1 {
    display: flex;
  }
  .articles .article-holder .article {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .btn.normal {
    padding: 13px 24px 12px;
    font-size: 12px;
    letter-spacing: .5px;
  }
  .btn.fluid {
    width: 100%;
  }
  .btn.outline.primary {
    color: #fba342;
    box-shadow: inset 0 0 0 1px #fba342 !important;
  }
  .btn.outline.normal {
    padding-left: 14px;
    padding-right: 14px;
  }
  .ddcc{
    display: flex;
    align-items: center;
  }
  .about-us-btn video {
    border-radius: 30px;
    overflow: hidden !important;
  }
.img-box {
  max-height: 35rem;
}
  .d3-block {
    flex-wrap: wrap;
    justify-content: center;
  }
  .d3-block {
    display: flex;
    justify-content: space-between;
  }
  .col-lg-4 {
    margin-bottom: 10px;
  }



  .rainbow-pricing {
    margin-top: 40px;
  }
  .bg-flashlight {
    position: relative;
    overflow: hidden;
  }
  .rainbow-pricing .pricing-table-inner {
    padding: 40px;
    position: relative;
    z-index: 2;
    /*border: 2px solid hsla(0, 0%, 100%, 0.1);*/
    border-radius: 10px;
    /*transition: all 0.6s cubic-bezier(0.33, 0.84, 0.31, 0.98);*/
    /*transform-style: preserve-3d;*/
  }
  .rainbow-pricing.style-2 .pricing-table-inner {
    background-color: #dee2e6;
    border-color: transparent !important;
  }
  .separator-animated {
    position: relative;
    overflow: hidden;
    height: 2px;
    width: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(111, 100, 233, 0.6) 50%, rgba(0, 0, 0, 0) 100%);
  }
  .bg-flashlight>* {
    z-index: 2;
    position: relative;
  }
  .rainbow-pricing .pricing-table-inner .pricing-header {
    text-align: center;
  }
  .mt-4 {
    margin-top: 1.5rem !important;
  }
  .mb-5 {
    margin-bottom: 3rem !important;
  }
  .mb--30 {
    margin-bottom: 30px !important;
  }
  .rainbow-pricing .pricing-table-inner .pricing-body {
    text-align: center;
  }
  .single-settings-box {
    margin-bottom: 30px;
    padding: 30px;
    border-radius: 10px;
    background-color: #dee2e6;
    position: relative;
    overflow: hidden;
  }
  .theme-gradient, .counter-style-1 .count-number {
    background: linear-gradient(90deg, #12B5DE -30%, #7130C3 30%, #FF3BD4 90%);
    text-transform: capitalize;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .text-center {
    text-align: center !important;
  }
  a.btn-default, button.btn-default, div.btn-default {
    padding: 0 28px;
    border-style: solid;
    border-width: 0px;
    border-color: transparent;
    border-radius: 8px;
    background-color: transparent;
    background: linear-gradient(94deg, #00f785 10.66%, #7130c3 53.03%, #410093 96.34%, rgba(255, 0, 238, 0.26) 191.41%, rgba(255, 59, 212, 0) 191.43%);
    background-size: 200% auto;
    /*transition-duration: 300ms;*/
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
    display: inline-block;
    height: 50px;
    line-height: 50px;
    letter-spacing: 0.5px;
    width: auto;
    /*transition: 0.4s;*/
  }
  .d-grid {
    display: grid !important;
  }
  .gap-10 {
    gap: 10px;
  }
  .mt-10 {
    margin-top: 10px;
  }
  .single-settings-box {
    margin-bottom: 30px;
    padding: 30px;
    border-radius: 10px;
    background-color: #dee2e6;
    position: relative;
    overflow: hidden;
  }
  .c_pointer {
    cursor: pointer;
  }
  .p_plans {
    padding: 12px 5px;
  }
  .overflow-hidden {
    overflow: hidden !important;
  }
  .fw-600 {
    font-weight: 600 !important;
  }
  .fw-600 {
    font-weight: 600 !important;
  }
  .p_plans .medium {
    font-size: 16px !important;
  }
  .m-0 {
    margin: 0 !important;
  }
  .justify-content-between {
    -webkit-box-pack: justify !important;
    -webkit-justify-content: space-between !important;
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .align-items-center {
    -webkit-box-align: center !important;
    -webkit-align-items: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .rainbow-pricing .pricing-table-inner .pricing-header .pricing1 span.subtitle {
    font-size: 14px;
    color: #7376aa;
  }
  .img-area {
    border-radius: 12px;
    /*max-height: 230px;*/
    width: 100%;
    height: 100%;
    overflow: hidden !important;
    position: relative;
  }
  .top-flashlight {
    background-color: rgb(206,209,230);
  }
  /*.top-flashlight::before {*/
  /*  content: "";*/
  /*  width: 150px;*/
  /*  height: 150px;*/
  /*  background: #7064e9;*/
  /*  position: absolute;*/
  /*  left: 50%;*/
  /*  top: -60px;*/
  /*  transform: translateY(-50%) translateX(-50%);*/
  /*  border-radius: 100%;*/
  /*  filter: blur(70px);*/
  /*}*/
  .top-flashlight.leftside::before {
    left: 0;
    top: 0;
  }
  .top-flashlight.light-xl::before {
    width: 300px;
    /*filter: blur(140px);*/
  }
  @media (min-width: 768px) {
    .row--15 .col-md-6 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 50%;
    }
    .swiperdiv {
      width: 95%;
    }
  }
  @media (min-width: 992px) {
    .row--15 .col-lg-4 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 30%;
    }
    .swiperdiv {
      width: 80%;
    }
  }
  .row--15>[class*=col] {
    padding-left: 15px;
    padding-right: 15px;
  }
  .mb-1 {
    margin-bottom: 1px !important;
  }
  .max960 {
    /*max-width: 1140px;*/
    margin: 0 auto;
  }
  .transaction div{
    color: #000 !important;
  }

  .col-4 {
    width: 33.33%;
    word-break: break-word;
  }
  .text-center {
    text-align: center;
  }
  .rounded-4 {
    border-radius: 1rem !important
  }
  .brand-style-2 {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media(min-width: 576px) {
    .col-sm {
      flex:1 0 0%
    }

    .row-cols-sm-auto>* {
      flex: 0 0 auto;
      width: auto
    }

    .row-cols-sm-1>* {
      flex: 0 0 auto;
      width: 100%
    }

    .row-cols-sm-2>* {
      flex: 0 0 auto;
      width: 50%
    }

    .row-cols-sm-3>* {
      flex: 0 0 auto;
      width: 33.3333333333%
    }

    .row-cols-sm-4>* {
      flex: 0 0 auto;
      width: 25%
    }

    .row-cols-sm-5>* {
      flex: 0 0 auto;
      width: 20%
    }

    .row-cols-sm-6>* {
      flex: 0 0 auto;
      width: 16.6666666667%
    }

    .col-sm-auto {
      flex: 0 0 auto;
      width: auto
    }

    .col-sm-1 {
      flex: 0 0 auto;
      width: 8.33333333%
    }

    .col-sm-2 {
      flex: 0 0 auto;
      width: 16.66666667%
    }

    .col-sm-3 {
      flex: 0 0 auto;
      width: 25%
    }

    .col-sm-4 {
      flex: 0 0 auto;
      width: 33.33333333%
    }

    .col-sm-5 {
      flex: 0 0 auto;
      width: 41.66666667%
    }

    .col-sm-6 {
      flex: 0 0 auto;
      width: 50%
    }

    .col-sm-7 {
      flex: 0 0 auto;
      width: 58.33333333%
    }

    .col-sm-8 {
      flex: 0 0 auto;
      width: 66.66666667%
    }

    .col-sm-9 {
      flex: 0 0 auto;
      width: 75%
    }

    .col-sm-10 {
      flex: 0 0 auto;
      width: 83.33333333%
    }

    .col-sm-11 {
      flex: 0 0 auto;
      width: 91.66666667%
    }

    .col-sm-12 {
      flex: 0 0 auto;
      width: 100%
    }

    .offset-sm-0 {
      margin-left: 0
    }

    .offset-sm-1 {
      margin-left: 8.33333333%
    }

    .offset-sm-2 {
      margin-left: 16.66666667%
    }

    .offset-sm-3 {
      margin-left: 25%
    }

    .offset-sm-4 {
      margin-left: 33.33333333%
    }

    .offset-sm-5 {
      margin-left: 41.66666667%
    }

    .offset-sm-6 {
      margin-left: 50%
    }

    .offset-sm-7 {
      margin-left: 58.33333333%
    }

    .offset-sm-8 {
      margin-left: 66.66666667%
    }

    .offset-sm-9 {
      margin-left: 75%
    }

    .offset-sm-10 {
      margin-left: 83.33333333%
    }

    .offset-sm-11 {
      margin-left: 91.66666667%
    }

    .g-sm-0,.gx-sm-0 {
      --bs-gutter-x: 0
    }

    .g-sm-0,.gy-sm-0 {
      --bs-gutter-y: 0
    }

    .g-sm-1,.gx-sm-1 {
      --bs-gutter-x: 0.25rem
    }

    .g-sm-1,.gy-sm-1 {
      --bs-gutter-y: 0.25rem
    }

    .g-sm-2,.gx-sm-2 {
      --bs-gutter-x: 0.5rem
    }

    .g-sm-2,.gy-sm-2 {
      --bs-gutter-y: 0.5rem
    }

    .g-sm-3,.gx-sm-3 {
      --bs-gutter-x: 1rem
    }

    .g-sm-3,.gy-sm-3 {
      --bs-gutter-y: 1rem
    }

    .g-sm-4,.gx-sm-4 {
      --bs-gutter-x: 1.5rem
    }

    .g-sm-4,.gy-sm-4 {
      --bs-gutter-y: 1.5rem
    }

    .g-sm-5,.gx-sm-5 {
      --bs-gutter-x: 3rem
    }

    .g-sm-5,.gy-sm-5 {
      --bs-gutter-y: 3rem
    }

    .g-sm-gs,.gx-sm-gs {
      --bs-gutter-x: 2rem
    }

    .g-sm-gs,.gy-sm-gs {
      --bs-gutter-y: 2rem
    }
  }

  @media(min-width: 768px) {
    .col-md {
      flex:1 0 0%
    }

    .row-cols-md-auto>* {
      flex: 0 0 auto;
      width: auto
    }

    .row-cols-md-1>* {
      flex: 0 0 auto;
      width: 100%
    }

    .row-cols-md-2>* {
      flex: 0 0 auto;
      width: 50%
    }

    .row-cols-md-3>* {
      flex: 0 0 auto;
      width: 33.3333333333%
    }

    .row-cols-md-4>* {
      flex: 0 0 auto;
      width: 25%
    }

    .row-cols-md-5>* {
      flex: 0 0 auto;
      width: 20%
    }

    .row-cols-md-6>* {
      flex: 0 0 auto;
      width: 16.6666666667%
    }

    .col-md-auto {
      flex: 0 0 auto;
      width: auto
    }

    .col-md-1 {
      flex: 0 0 auto;
      width: 8.33333333%
    }

    .col-md-2 {
      flex: 0 0 auto;
      width: 16.66666667%
    }

    .col-md-3 {
      flex: 0 0 auto;
      width: 25%
    }

    .col-md-4 {
      flex: 0 0 auto;
      width: 33.33333333%
    }

    .col-md-5 {
      flex: 0 0 auto;
      width: 41.66666667%
    }

    .col-md-6 {
      flex: 0 0 auto;
      width: 50%
    }

    .col-md-7 {
      flex: 0 0 auto;
      width: 58.33333333%
    }

    .col-md-8 {
      flex: 0 0 auto;
      width: 66.66666667%
    }

    .col-md-9 {
      flex: 0 0 auto;
      width: 75%
    }

    .col-md-10 {
      flex: 0 0 auto;
      width: 83.33333333%
    }

    .col-md-11 {
      flex: 0 0 auto;
      width: 91.66666667%
    }

    .col-md-12 {
      flex: 0 0 auto;
      width: 100%
    }

    .offset-md-0 {
      margin-left: 0
    }

    .offset-md-1 {
      margin-left: 8.33333333%
    }

    .offset-md-2 {
      margin-left: 16.66666667%
    }

    .offset-md-3 {
      margin-left: 25%
    }

    .offset-md-4 {
      margin-left: 33.33333333%
    }

    .offset-md-5 {
      margin-left: 41.66666667%
    }

    .offset-md-6 {
      margin-left: 50%
    }

    .offset-md-7 {
      margin-left: 58.33333333%
    }

    .offset-md-8 {
      margin-left: 66.66666667%
    }

    .offset-md-9 {
      margin-left: 75%
    }

    .offset-md-10 {
      margin-left: 83.33333333%
    }

    .offset-md-11 {
      margin-left: 91.66666667%
    }

    .g-md-0,.gx-md-0 {
      --bs-gutter-x: 0
    }

    .g-md-0,.gy-md-0 {
      --bs-gutter-y: 0
    }

    .g-md-1,.gx-md-1 {
      --bs-gutter-x: 0.25rem
    }

    .g-md-1,.gy-md-1 {
      --bs-gutter-y: 0.25rem
    }

    .g-md-2,.gx-md-2 {
      --bs-gutter-x: 0.5rem
    }

    .g-md-2,.gy-md-2 {
      --bs-gutter-y: 0.5rem
    }

    .g-md-3,.gx-md-3 {
      --bs-gutter-x: 1rem
    }

    .g-md-3,.gy-md-3 {
      --bs-gutter-y: 1rem
    }

    .g-md-4,.gx-md-4 {
      --bs-gutter-x: 1.5rem
    }

    /*.g-md-4,.gy-md-4 {*/
    /*  --bs-gutter-y: 1.5rem*/
    /*}*/

    .g-md-5,.gx-md-5 {
      --bs-gutter-x: 3rem
    }

    .g-md-5,.gy-md-5 {
      --bs-gutter-y: 3rem
    }

    .g-md-gs,.gx-md-gs {
      --bs-gutter-x: 2rem
    }

    .g-md-gs,.gy-md-gs {
      --bs-gutter-y: 2rem
    }
  }

  @media(min-width: 992px) {
    .col-lg {
      flex:1 0 0%
    }

    .row-cols-lg-auto>* {
      flex: 0 0 auto;
      width: auto
    }

    .row-cols-lg-1>* {
      flex: 0 0 auto;
      width: 100%
    }

    .row-cols-lg-2>* {
      flex: 0 0 auto;
      width: 50%
    }

    .row-cols-lg-3>* {
      flex: 0 0 auto;
      width: 33.3333333333%
    }

    .row-cols-lg-4>* {
      flex: 0 0 auto;
      width: 25%
    }

    .row-cols-lg-5>* {
      flex: 0 0 auto;
      width: 20%
    }

    .row-cols-lg-6>* {
      flex: 0 0 auto;
      width: 16.6666666667%
    }

    .col-lg-auto {
      flex: 0 0 auto;
      width: auto
    }

    .col-lg-1 {
      flex: 0 0 auto;
      width: 8.33333333%
    }

    .col-lg-2 {
      flex: 0 0 auto;
      width: 16.66666667%
    }

    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%
    }

    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.33333333%
    }

    .col-lg-5 {
      flex: 0 0 auto;
      width: 41.66666667%
    }

    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%
    }

    .col-lg-7 {
      flex: 0 0 auto;
      width: 58.33333333%
    }

    .col-lg-8 {
      flex: 0 0 auto;
      width: 66.66666667%
    }

    .col-lg-9 {
      flex: 0 0 auto;
      width: 75%
    }

    .col-lg-10 {
      flex: 0 0 auto;
      width: 83.33333333%
    }

    .col-lg-11 {
      flex: 0 0 auto;
      width: 91.66666667%
    }

    .col-lg-12 {
      flex: 0 0 auto;
      width: 100%
    }

    .offset-lg-0 {
      margin-left: 0
    }

    .offset-lg-1 {
      margin-left: 8.33333333%
    }

    .offset-lg-2 {
      margin-left: 16.66666667%
    }

    .offset-lg-3 {
      margin-left: 25%
    }

    .offset-lg-4 {
      margin-left: 33.33333333%
    }

    .offset-lg-5 {
      margin-left: 41.66666667%
    }

    .offset-lg-6 {
      margin-left: 50%
    }

    .offset-lg-7 {
      margin-left: 58.33333333%
    }

    .offset-lg-8 {
      margin-left: 66.66666667%
    }

    .offset-lg-9 {
      margin-left: 75%
    }

    .offset-lg-10 {
      margin-left: 83.33333333%
    }

    .offset-lg-11 {
      margin-left: 91.66666667%
    }

    .g-lg-0,.gx-lg-0 {
      --bs-gutter-x: 0
    }

    .g-lg-0,.gy-lg-0 {
      --bs-gutter-y: 0
    }

    .g-lg-1,.gx-lg-1 {
      --bs-gutter-x: 0.25rem
    }

    .g-lg-1,.gy-lg-1 {
      --bs-gutter-y: 0.25rem
    }

    .g-lg-2,.gx-lg-2 {
      --bs-gutter-x: 0.5rem
    }

    .g-lg-2,.gy-lg-2 {
      --bs-gutter-y: 0.5rem
    }

    .g-lg-3,.gx-lg-3 {
      --bs-gutter-x: 1rem
    }

    .g-lg-3,.gy-lg-3 {
      --bs-gutter-y: 1rem
    }

    .g-lg-4,.gx-lg-4 {
      --bs-gutter-x: 1.5rem
    }

    .g-lg-4,.gy-lg-4 {
      --bs-gutter-y: 1.5rem
    }

    .g-lg-5,.gx-lg-5 {
      --bs-gutter-x: 3rem
    }

    .g-lg-5,.gy-lg-5 {
      --bs-gutter-y: 3rem
    }

    .g-lg-gs,.gx-lg-gs {
      --bs-gutter-x: 2rem
    }

    .g-lg-gs,.gy-lg-gs {
      --bs-gutter-y: 2rem
    }
  }

  @media(min-width: 1200px) {
    .col-xl {
      flex:1 0 0%
    }

    .row-cols-xl-auto>* {
      flex: 0 0 auto;
      width: auto
    }

    .row-cols-xl-1>* {
      flex: 0 0 auto;
      width: 100%
    }

    .row-cols-xl-2>* {
      flex: 0 0 auto;
      width: 50%
    }

    .row-cols-xl-3>* {
      flex: 0 0 auto;
      width: 33.3333333333%
    }

    .row-cols-xl-4>* {
      flex: 0 0 auto;
      width: 25%
    }

    .row-cols-xl-5>* {
      flex: 0 0 auto;
      width: 20%
    }

    .row-cols-xl-6>* {
      flex: 0 0 auto;
      width: 16.6666666667%
    }

    .col-xl-auto {
      flex: 0 0 auto;
      width: auto
    }

    .col-xl-1 {
      flex: 0 0 auto;
      width: 8.33333333%
    }

    .col-xl-2 {
      flex: 0 0 auto;
      width: 16.66666667%
    }

    .col-xl-3 {
      flex: 0 0 auto;
      width: 25%
    }

    .col-xl-4 {
      flex: 0 0 auto;
      width: 33.33333333%
    }

    .col-xl-5 {
      flex: 0 0 auto;
      width: 41.66666667%
    }

    .col-xl-6 {
      flex: 0 0 auto;
      width: 50%
    }

    .col-xl-7 {
      flex: 0 0 auto;
      width: 58.33333333%
    }

    .col-xl-8 {
      flex: 0 0 auto;
      width: 66.66666667%
    }

    .col-xl-9 {
      flex: 0 0 auto;
      width: 75%
    }

    .col-xl-10 {
      flex: 0 0 auto;
      width: 83.33333333%
    }

    .col-xl-11 {
      flex: 0 0 auto;
      width: 91.66666667%
    }

    .col-xl-12 {
      flex: 0 0 auto;
      width: 100%
    }

    .offset-xl-0 {
      margin-left: 0
    }

    .offset-xl-1 {
      margin-left: 8.33333333%
    }

    .offset-xl-2 {
      margin-left: 16.66666667%
    }

    .offset-xl-3 {
      margin-left: 25%
    }

    .offset-xl-4 {
      margin-left: 33.33333333%
    }

    .offset-xl-5 {
      margin-left: 41.66666667%
    }

    .offset-xl-6 {
      margin-left: 50%
    }

    .offset-xl-7 {
      margin-left: 58.33333333%
    }

    .offset-xl-8 {
      margin-left: 66.66666667%
    }

    .offset-xl-9 {
      margin-left: 75%
    }

    .offset-xl-10 {
      margin-left: 83.33333333%
    }

    .offset-xl-11 {
      margin-left: 91.66666667%
    }

    .g-xl-0,.gx-xl-0 {
      --bs-gutter-x: 0
    }

    .g-xl-0,.gy-xl-0 {
      --bs-gutter-y: 0
    }

    .g-xl-1,.gx-xl-1 {
      --bs-gutter-x: 0.25rem
    }

    .g-xl-1,.gy-xl-1 {
      --bs-gutter-y: 0.25rem
    }

    .g-xl-2,.gx-xl-2 {
      --bs-gutter-x: 0.5rem
    }

    .g-xl-2,.gy-xl-2 {
      --bs-gutter-y: 0.5rem
    }

    .g-xl-3,.gx-xl-3 {
      --bs-gutter-x: 1rem
    }

    .g-xl-3,.gy-xl-3 {
      --bs-gutter-y: 1rem
    }

    .g-xl-4,.gx-xl-4 {
      --bs-gutter-x: 1.5rem
    }

    .g-xl-4,.gy-xl-4 {
      --bs-gutter-y: 1.5rem
    }

    .g-xl-5,.gx-xl-5 {
      --bs-gutter-x: 3rem
    }

    .g-xl-5,.gy-xl-5 {
      --bs-gutter-y: 3rem
    }

    .g-xl-gs,.gx-xl-gs {
      --bs-gutter-x: 2rem
    }

    .g-xl-gs,.gy-xl-gs {
      --bs-gutter-y: 2rem
    }
  }
  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .mt-4 {
    margin-top: 2.5rem !important;
  }
  .max9601 {
    max-width: 1140px;
    margin: 0 auto;
  }
  .bg-hs1{
    background-color: #0f1021 !important;
  }
  .p-2 {
    padding: 1rem !important;
  }
  .text-z-fs{
    background: linear-gradient(90deg, #12B5DE -30%, #7130C3 30%, #FF3BD4 90%);
    -webkit-background-clip: text;
    color: transparent;
  }
  .start-btn {
    border-radius: 0px !important;
    border: 2px solid #fff !important;
  }
</style>


