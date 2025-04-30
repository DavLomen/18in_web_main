<template>
  <div class="HomePage" style="overflow: hidden;">
    <Header></Header>
    <header class="has-header-main">
      <div  class="hero-wrap hero-wrap-2 section-space" style="position: relative;">
        <!--        <video id="v1" autoplay loop muted>-->
        <!--          <source :src="'./static/images/bg.mp4?t=1'" type="video/mp4"  />-->
        <!--        </video>-->
        <div style="background: url(./static/images/bg.gif) no-repeat;background-size: 100% 100%">
          <div  class="container">
            <div  class="row align-items-center flex-md-row-reverse justify-content-between">
              <div  class="col-lg-6 col-md-6">
                <swiper v-if="InitData.bannerList && InitData.bannerList.length>0"
                        :options="swiperOption" ref="mySwiper"
                        class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events banner-slider swiper-button-s3"
                >
                  <swiper-slide v-for="(item,index) in InitData.bannerList" :key="index">
                    <div  class="card">
                      <div  class="hero-image">
                        <img :src="InitData.setting.up_url+item" alt="" class="w-100"></div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
              <div  class="col-lg-6 col-md-6" style="    color: #fff;">
                <div  class="hero-content pb-0 pt-md-0 pe-lg-4" >
                  <h1  class="hero-title mb-4" >
                    {{$t('home[0]')}}
                  </h1>
                  <p  class="hero-text mb-4 pb-1" style="color:#fff;font-size: 1rem;">
                    {{$t('home[1]')}}
                  </p>
                  <ul class="btns-group hero-btns justify-content-md-start justify-content-center mb-3">
                    <li>
                      <a href="javascript:;" class="btn btn-lg btn_common btn_common_a fw-600" @click="$router.push('/register')">{{$t('home[2]')}}</a>
                      <a href="javascript:;" style="margin-left: 10px;" class="btn btn-lg btn_common btn_common_a fw-600" @click="$router.push('/login')">{{$t('home[3]')}}</a>
                    </li>
                  </ul>
                  <ul  class="btns-group hero-btns justify-content-md-start justify-content-center mb-3">
                    <li>
                      <a href="javascript:;" style="background: #FE9500" class="btn btn-lg btn_common btn-dark fw-600" @click="$router.push('/register')">{{$t('home[4]')}}</a>
                      <a href="javascript:;" style="background: #B62283; margin-left: 10px;" class="btn btn-lg btn_common btn-dark fw-600" @click="$router.push('/login')">{{$t('home[5]')}}</a>
                    </li>
                  </ul>
                  <p  class="hero-text pb-1" style="color:#f0b603;font-size: 1.2rem;">{{$t('home[6]')}}</p>
                  <p  class="hero-text pb-1" style="color:#f0b603;font-size: 1.2rem;">{{$t('home[7]')}}</p>
                  <p  class="hero-text pb-1" style="color:#f0b603;font-size: 1.2rem;">{{$t('home[8]')}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 100%;">
            <iframe class="iframe" scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ADOGEUSD%22%2C%22title%22%3A%22Dogecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ALTCUSD%22%2C%22title%22%3A%22Litecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABCHUSD%22%2C%22title%22%3A%22Bitcoin%20Cash%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AADAUSD%22%2C%22title%22%3A%22Cardano%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AXRPUSD%22%2C%22title%22%3A%22XRP%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22white%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22globalecrypto.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22Miner.com%2F%22%7D" title="ticker tape TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: 74px; width: 100%;"></iframe>
          </div>
          <van-notice-bar color="red" left-icon="volume-o" scrollable :text="InitData.notifications?InitData.notifications[0]:''" />
      </div>
    </header>
    <!-- HOW TO WORK MODULE -->
    <div class="el-row" style="padding: 20px 0;">
      <div class="el-col-24 text-center mb-5">
        <h1 class="font-title">{{ $t("i18nlan.Home.HTW.text1") }}</h1>
        <div class="font-intr">{{ $t("i18nlan.Home.HTW.text2") }}</div>
        <div class="el-common-link" style="background: linear-gradient(90deg,#00f785,#410093);"></div>
      </div>
      <div class="el-row mt-5">
        <div class="el-col-xs-24 el-col-md-8 mt-3">
          <div class="el-image-intr text-center mb-3">
            <img :src="'./static/images/htw1.png'" alt="">
          </div>
          <div class="el-content-label text-center">{{ $t("i18nlan.Home.HTW.text3") }}</div>
          <div class="el-content-text text-center max-width-300 mt-2 el-content-text-color">{{ $t("i18nlan.Home.HTW.text4") }}</div>
        </div>
        <div class="el-col-xs-24 el-col-md-8 mt-3">
          <div class="el-image-intr text-center mb-3">
            <img :src="'./static/images/htw2.png'" alt="">
          </div>
          <div class="el-content-label text-center">{{ $t("i18nlan.Home.HTW.text5") }}</div>
          <div class="el-content-text text-center max-width-300 mt-2 el-content-text-color">{{ $t("i18nlan.Home.HTW.text6") }}</div>
        </div>
        <div class="el-col-xs-24 el-col-md-8 mt-3">
          <div class="el-image-intr text-center mb-3">
            <img :src="'./static/images/htw3.png'" alt="">
          </div>
          <div class="el-content-label text-center">{{ $t("i18nlan.Home.HTW.text7") }}</div>
          <div class="el-content-text text-center max-width-300 mt-2 el-content-text-color">{{ $t("i18nlan.Home.HTW.text8") }}</div>
        </div>
      </div>
    </div>
    <!-- <section class="Cosmi GTPZ Righleftc minelooking owningeco work py-100" >
      <div class="Cosmi GTPZ Righleftc minelooking owningeco container">
        <div class="Cosmi GTPZ Righleftc minelooking owningeco row justify-content-center">
          <div class="Cosmi GTPZ Righleftc minelooking owningeco col-lg-8">
            <div class="Cosmi GTPZ Righleftc minelooking owningeco section-heading">
              <h3 class="Cosmi GTPZ Righleftc minelooking owningeco section-heading__title">

              </h3>
              <p class="Cosmi GTPZ Righleftc minelooking owningeco section-heading__desc">
                {{$t('how[1]')}}
              </p>
            </div>
          </div>
        </div>
        <div class="Cosmi GTPZ Righleftc minelooking owningeco row gy-4">
          <div @click="$router.push('/register')" class="Cosmi GTPZ Righleftc minelooking owningeco col-xl-3 col-sm-6">
            <div class="Cosmi GTPZ Righleftc minelooking owningeco work-item">
							<span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__border">
							</span>
              <span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__number">
								1
							</span>
              <span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__icon">
                <img :src="'./static/images/img/hh11.png'" class="Cosmi GTPZ Righleftc minelooking owningeco " style="width: 55px;">
							</span>
              <h4 class="Cosmi GTPZ Righleftc minelooking owningeco work-item__title">
                {{$t('how[2]')}}
              </h4>
              <p class="Cosmi GTPZ Righleftc minelooking owningeco work-item__desc">
                {{$t('how[3]')}}
              </p>
            </div>
          </div>
          <div @click="$router.push('/contracts')" class="Cosmi GTPZ Righleftc minelooking owningeco col-xl-3 col-sm-6">
            <div class="Cosmi GTPZ Righleftc minelooking owningeco work-item">
							<span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__border">
							</span>
              <span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__number">
								2
							</span>
              <span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__icon">
                                <img :src="'./static/images/img/hh22.png'" class="Cosmi GTPZ Righleftc minelooking owningeco " style="width: 55px;">

							</span>
              <h4 class="Cosmi GTPZ Righleftc minelooking owningeco work-item__title">
                {{$t('how[4]')}}
              </h4>
              <p class="Cosmi GTPZ Righleftc minelooking owningeco work-item__desc">
                {{$t('how[5]')}}
              </p>
            </div>
          </div>
          <div @click="$router.push('/contracts')" class="Cosmi GTPZ Righleftc minelooking owningeco col-xl-3 col-sm-6">
            <div class="Cosmi GTPZ Righleftc minelooking owningeco work-item">
							<span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__border">
							</span>
              <span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__number">
								3
							</span>
              <span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__icon">
                                <img :src="'./static/images/img/hh33.png'" class="Cosmi GTPZ Righleftc minelooking owningeco " style="width: 55px;">

							</span>
              <h4 class="Cosmi GTPZ Righleftc minelooking owningeco work-item__title">
                {{$t('how[6]')}}
              </h4>
              <p class="Cosmi GTPZ Righleftc minelooking owningeco work-item__desc">
                {{$t('how[7]')}}
              </p>
            </div>
          </div>
          <div @click="$router.push('/login')" class="Cosmi GTPZ Righleftc minelooking owningeco col-xl-3 col-sm-6">
            <div class="Cosmi GTPZ Righleftc minelooking owningeco work-item">
							<span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__border">
							</span>
              <span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__number">
								4
							</span>
              <span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__icon">
                                <img :src="'./static/images/img/hh44.png'" class="Cosmi GTPZ Righleftc minelooking owningeco " style="width: 55px;">

							</span>
              <h4 class="Cosmi GTPZ Righleftc minelooking owningeco work-item__title">
                {{$t('how[8]')}}
              </h4>
              <p class="Cosmi GTPZ Righleftc minelooking owningeco work-item__desc">
                {{$t('how[9]')}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

   <!-- <div class=" w-100">
     <img :src="'./static/images/img/separator-bottom.svg'" alt="" class="img-fluid w-100">
   </div> -->
    <div class="section">
      <div class="container">
        <div class="el-col-24 text-center mb-5">
          <h1 class="font-title">{{ $t("i18nlan.Home.CONTRACT.text1") }}</h1>
          <div class="font-intr">{{ $t("i18nlan.Home.CONTRACT.text2") }}</div>
        </div>
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
                  <img :src="'./static/images/checked_new.png?t=1'" style="width: 1.75rem;">{{$t('product[0]')}}: {{item.miner}}
                </div>
                <div class="mt-0 mb-2 text-left" style="color: #000000;font-weight: bold">
                  <img :src="'./static/images/checked_new.png?t=1'" style="width: 1.75rem;">{{$t('product[1]')}}: {{item.hash_power}}
                </div>
                <div class="mt-0 mb-2 text-left" style="color: #000000;font-weight: bold">
                  <img :src="'./static/images/checked_new.png?t=1'" style="width: 1.75rem;">{{item.amount}} {{InitData.currency}}/{{item.cycle}} {{$t('product[2]')}}
                </div>
                <div class="mt-0 mb-2 text-left" style="color: #000000;font-weight: bold">
                  <img :src="'./static/images/checked_new.png?t=1'" style="width: 1.75rem;">{{$t('product[3]')}}: {{item.cycle}} {{$t('product[2]')}}
                </div>
                <div class="mt-0 mb-2 text-left" style="color: #000000;font-weight: bold">
                  <img :src="'./static/images/checked_new.png?t=1'" style="width: 1.75rem;">{{$t('product[4]')}}: {{item.amount}} {{InitData.currency}}
                </div>
              </div>
              <div class="text-left" style="color: #000000;font-weight: bold">
                <h6 class="mt-0 mb-2 text-left" style="font-weight: bold;"><img :src="'./static/images/checked_new.png?t=1'" style="width: 1.75rem;">{{$t('product[5]')}}: ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*1).toFixed(2))}}</h6>
                <h6 class="mt-0 mb-2 text-left" style="color: red !important;font-weight: bold;"><img :src="'./static/images/checked_new.png?t=1'" style="width: 1.75rem;">{{$t('product[6]')}}: ${{item.amount}} + ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*item.cycle).toFixed(2))}}</h6>
              </div>
              <div class="text-left" style="color: #000000;font-weight: bold">
                <h6 class="mt-0 mb-2 text-left" style="font-weight: bold;"><img :src="'./static/images/checked_new.png?t=1'" style="width: 1.75rem;">{{$t('product[7]')}}: {{item.type==1?$t('settletype[0]'):$t('settletype[1]')}}</h6>
              </div>
              <div class="bonus" v-if="item.amount !=10">
                <div class="label">{{$t('product[8]')}}</div>
                <ul class="plan-referral justify-content-center mb-2 data-flex">
                  <div class="single-referral justify-content-center data-flex align-items-center" v-for="(aa,i) in item.affiliate_bonus" style="margin-right: 5px;">
                    <div style="margin-right: 2px;">{{$t('product[9]')}}  {{(i+1)}}:</div>
                    <span class="fw-bold text-white" style="background: #4988fd;">{{aa}}%</span>
                  </div>
                </ul>
              </div>
              <div class="bonus"  v-else>
                <div class="label">{{$t('product[8]')}}</div>
                <ul class="plan-referral justify-content-center mb-2" style="margin-right: 5px;">
                  <div class="single-referral" v-for="(aa,i) in item.affiliate_bonus">
                    <span>0 %</span>
                    <div>{{$t('product[9]')}} {{(i+1)}}</div>
                  </div>
                </ul>
              </div>
              <div class="el-row justify-content-between data-flex">
                <div class="mt-1 text-center el-col-10">
                  <div v-if="item.progress>=100" tyle="width: 100%" class="t-link btn btn--base btn--lg rounded-pill investBtn">
                    {{$t('product[10]')}}
                  </div>
                  <a v-else href="javascript:;" style="width: 100%" @click="$router.push(`/productDetail?id=${item.id}`)" class="t-link btn btn--base btn--lg btn_style_ksd">
                    {{$t('product[12]')}}
                  </a>
                </div>
              <div class="mt-1 text-center el-col-10 ml-3">
                <div v-if="item.progress>=100" tyle="width: 100%" class="t-link btn btn--base btn--lg rounded-pill investBtn">
                  {{$t('product[10]')}}
                </div>
                <a v-else href="javascript:;" style="width: 100%" @click="$router.push(`/productDetail?id=${item.id}`)" class="t-link btn btn--base btn--lg btn_style_ksd">
                  {{$t('product[11]')}}
                </a>
              </div>
              </div>
              <div class="mt-3 text-center">
                <van-progress :percentage="item.progress" stroke-width="8" track-color="#ccc" color="linear-gradient(to right, #aaa, #15bf6f)"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="container" style="max-width: 90%;margin: 0 auto;">
        <div class="row justify-content-center">
          <div class="col-md-8 col-xl-6">
            <h2 class="mt-0 text-center title-main">{{$t('calculator[0]')}}</h2>
            <p class="mb-0 mx-auto text-center t-short-para" style="font-size: 16px;color: #000000">
              {{$t('calculator[1]')}}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="profit-calculator" style="display:table;margin: 0 auto;">
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
<!--    <div class=" w-100">-->
<!--      <img :src="'./static/images/img/separator-bottom.svg'" alt="" class="img-fluid w-100">-->
<!--    </div>-->
<!--    <div class=" w-100">-->
<!--      <img :src="'./static/images/img/separator-top.svg'" alt="" class="img-fluid w-100">-->
<!--    </div>-->
    <div class="container text-center my-5">
      <div class="mt-3">
        <h2 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold">{{$t('why[0]')}}</span></h2>
        <h6 class=" pt-2" style="color: #2962b7;">{{$t('why[1]')}}</h6>
      </div>
      <div class="row mt-4">
        <div class="col-lg-4 mt-3">
          <div class="light-border p-3 bg-white" style="min-height: 21rem; --x: 26.08173076923077%;">
            <img :src="'./static/images/img/aq11.png?t=1'" alt="" class="img-fluid my-4" style="width: 80px; height: 80px;">
            <h5 class="fw-bold mb-3">{{$t('why[2]')}}</h5>
            <h6 class="text-ls" style="line-height: 1.8;">
              {{$t('why[3]')}}
            </h6>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="light-border p-3 bg-white" style="min-height: 21rem;">
            <img :src="'./static/images/img/aq22.png?t=1'" alt="" class="img-fluid my-4" style="width: 80px; height: 80px;">
            <h5 class="fw-bold mb-3">{{$t('why[4]')}}</h5>
            <h6 class="text-ls" style="line-height: 1.8;">
              {{$t('why[5]')}}
            </h6>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="light-border p-3 bg-white" style="min-height: 21rem;">
            <img :src="'./static/images/img/aq33.png?t=1'" alt="" class="img-fluid my-4" style="width: 80px; height: 80px;">
            <h5 class="fw-bold mb-3">{{$t('why[6]')}}</h5>
            <h6 class="text-ls" style="line-height: 1.8;">
              {{$t('why[7]')}}
            </h6>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="light-border p-3 bg-white" style="min-height: 21rem;">
            <img :src="'./static/images/img/aq44.png?t=1'" alt="" class="img-fluid my-4" style="width: 80px; height: 80px;">
            <h5 class="fw-bold mb-3">{{$t('why[8]')}}</h5>
            <h6 class="text-ls" style="line-height: 1.8;">
              {{$t('why[9]')}}
            </h6>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="light-border p-3 bg-white" style="min-height: 21rem;">
            <img :src="'./static/images/img/aq55.png?t=1'" alt="" class="img-fluid my-4" style="width: 80px; height: 80px;">
            <h5 class="fw-bold mb-3">{{$t('why[10]')}}</h5>
            <h6 class="text-ls" style="line-height: 1.8;">
              {{$t('why[11]')}}
            </h6>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="light-border p-3 bg-white" style="min-height: 21rem;">
            <img :src="'./static/images/img/aq66.png?t=1'" alt="" class="img-fluid my-4" style="width: 80px; height: 80px;">
            <h5 class="fw-bold mb-3">{{$t('why[12]')}}</h5>
            <h6 class="text-ls" style="line-height: 1.8;">
              {{$t('why[13]')}}
            </h6>
          </div>
        </div>
      </div>
    </div>
<!--    <div class=" w-100">-->
<!--      <img :src="'./static/images/img/separator-bottom.svg'" alt="" class="img-fluid w-100">-->
<!--    </div>-->
<!--    <div class="container text-center my-5">-->
<!--      <div class="mt-3">-->
<!--        <h2 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold">Crypto Price</span></h2>-->
<!--        &lt;!&ndash; <h2 class="text-lh pt-2">Crypto Price</h2> &ndash;&gt;-->
<!--      </div>-->
<!--      <div class="crypto_box mt-5"><div class="row g-3"><div class="col-lg-4 col-md-6 col-sm-12"><div class="light-border p-3"><div class="d-flex align-items-center gap-10"><img src="/uploads/20241117/BTC.png'" width="32" height="32" style="border-radius: 4px;"><div><h5 class="crypto_name mb-0">BTC/USDT</h5><p class="crypto_name_full grayd mb-0">Bitcoin / Tetherus</p></div></div><div class="d-flex align-items-center gap-15 mt-2"><h5 class="crypto_price mb-0">96549.92</h5><h6 class="text-lvs pt-2">+1.58%</h6></div></div></div><div class="col-lg-4 col-md-6 col-sm-12"><div class="light-border p-3"><div class="d-flex align-items-center gap-10"><img src="/uploads/20241117/ETH.png'" width="32" height="32" style="border-radius: 4px;"><div><h5 class="crypto_name mb-0">ETH/USDT</h5><p class="crypto_name_full grayd mb-0">Ethereum / U.S Dollar</p></div></div><div class="d-flex align-items-center gap-15 mt-2"><h5 class="crypto_price mb-0">2745.07</h5><h6 class="text-red pt-2">-0.77%</h6></div></div></div><div class="col-lg-4 col-md-6 col-sm-12"><div class="light-border p-3"><div class="d-flex align-items-center gap-10"><img src="/uploads/20241117/XRP.png'" width="32" height="32" style="border-radius: 4px;"><div><h5 class="crypto_name mb-0">XRP/USDT</h5><p class="crypto_name_full grayd mb-0">XRP / U.S Dollar</p></div></div><div class="d-flex align-items-center gap-15 mt-2"><h5 class="crypto_price mb-0">2.5827</h5><h6 class="text-lvs pt-2">+1.23%</h6></div></div></div><div class="col-lg-4 col-md-6 col-sm-12"><div class="light-border p-3"><div class="d-flex align-items-center gap-10"><img src="/uploads/20241117/DOGE.png'" width="32" height="32" style="border-radius: 4px;"><div><h5 class="crypto_name mb-0">DOGE/USDT</h5><p class="crypto_name_full grayd mb-0">Dogecoin / U.S Dollar</p></div></div><div class="d-flex align-items-center gap-15 mt-2"><h5 class="crypto_price mb-0">0.24487</h5><h6 class="text-lvs pt-2">+3.02%</h6></div></div></div><div class="col-lg-4 col-md-6 col-sm-12"><div class="light-border p-3"><div class="d-flex align-items-center gap-10"><img src="/uploads/20241117/TRX.png'" width="32" height="32" style="border-radius: 4px;"><div><h5 class="crypto_name mb-0">TRX/USDT</h5><p class="crypto_name_full grayd mb-0">TRX / U.S Dollar</p></div></div><div class="d-flex align-items-center gap-15 mt-2"><h5 class="crypto_price mb-0">0.2358</h5><h6 class="text-lvs pt-2">+3.40%</h6></div></div></div><div class="col-lg-4 col-md-6 col-sm-12"><div class="light-border p-3"><div class="d-flex align-items-center gap-10"><img src="/uploads/20241117/BCH.png'" width="32" height="32" style="border-radius: 4px;"><div><h5 class="crypto_name mb-0">BCH/USDT</h5><p class="crypto_name_full grayd mb-0">Bitcoin Cash / U.S Dollar</p></div></div><div class="d-flex align-items-center gap-15 mt-2"><h5 class="crypto_price mb-0">319.5</h5><h6 class="text-lvs pt-2">+1.46%</h6></div></div></div></div></div>-->
<!--    </div>-->



<!--    <div class=" w-100">-->
<!--      <img :src="'./static/images/img/separator-top.svg'" alt="" class="img-fluid w-100">-->
<!--    </div>-->
    <div class="col-12 mx-auto my-4 d-lg-flex justify-content-around">
      <div class="col-lg-4">
        <div style="padding: 10px;">
          <h2 class="text-center mb-5 text-z-fs">{{$t('latest[0]')}}</h2>
          <div class="border border-1 border-hhs rounded-4 table-wrapper">
            <div class="table-header bg-hs">
              <table class="w-100">
                <thead>
                <tr class="text-bhs text-center" style="height: 73px;">
                  <th class="col-4 fs-6">{{$t('latest[1]')}}</th>
                  <th class="col-4 fs-6">{{$t('latest[2]')}}</th>
                  <th class="col-4 fs-6">{{$t('latest[3]')}}</th>
                </tr>
                </thead>
              </table>
            </div>
            <div class="table-body-wrapper">
              <div class="table-body-content">
                <swiper v-if="InitData.fundList"
                        :options="swiperOption0" ref="mySwiper" style="height: 35rem"
                >
                  <swiper-slide v-if="index<20" v-for="(item,index) in InitData.fundList.filter(item=>item.type==3)" :key="index" :index="index">
                    <div class="table-row text-bhs text-center">
                      <div class="col-4">{{item.username}}</div>
                      <div class="col-4 dmoney">12 USD</div>
                      <div class="col-4 fs-8">{{item.time}}</div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div style="padding: 10px;">
          <h2 class="text-center mb-5 text-z-fs">{{$t('latest[4]')}}</h2>
          <div class="border border-1 border-hhs rounded-4 table-wrapper">
            <div class="table-header bg-hs">
              <table class="w-100">
                <thead>
                <tr class="text-bhs text-center" style="height: 73px;">
                  <th class="col-4 fs-6">{{$t('latest[5]')}}</th>
                  <th class="col-4 fs-6">{{$t('latest[6]')}}</th>
                  <th class="col-4 fs-6">{{$t('latest[7]')}}</th>
                </tr>
                </thead>
              </table>
            </div>
            <div class="table-body-wrapper">
              <div class="table-body-content">
                <swiper v-if="InitData.fundList"
                        :options="swiperOption0" ref="mySwiper" style="height: 35rem"
                >
                  <swiper-slide v-if="index<20" v-for="(item,index) in InitData.fundList.filter(item=>item.type==1)" :key="index" :index="index">
                    <div class="table-row text-bhs text-center">
                      <div class="col-4">{{item.username}}</div>
                      <div class="col-4 dmoney">{{item.money}} {{item.currency}}</div>
                      <div class="col-4 fs-8">{{item.time}}</div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div style="padding: 10px;">
          <h2 class="text-center  my-5 mt-lg-0 text-z-fs">{{$t('latest[8]')}}</h2>
          <div class="border border-1 border-hhs rounded-4 table-wrapper">
            <div class="table-header bg-hs">
              <table class="w-100">
                <thead>
                <tr class="text-bhs text-center" style="height: 73px;">
                  <th class="col-4 fs-6">{{$t('latest[5]')}}</th>
                  <th class="col-4 fs-6">{{$t('latest[6]')}}</th>
                  <th class="col-4 fs-6">{{$t('latest[7]')}}</th>
                </tr>
                </thead>
              </table>
            </div>
            <div class="table-body-wrapper">
              <div class="table-body-content">
                <swiper v-if="InitData.fundList"
                        :options="swiperOption0" ref="mySwiper" style="height: 35rem"
                >
                  <swiper-slide v-if="index<20" v-for="(item,index) in InitData.fundList.filter(item=>item.type==2)" :key="index" :index="index">
                    <div class="table-row text-bhs text-center">
                      <div class="col-4">{{item.username}}</div>
                      <div class="col-4 dmoney">{{item.money}} {{item.currency}}</div>
                      <div class="col-4 fs-8">{{item.time}}</div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    <div class=" w-100">-->
<!--      <img :src="'./static/images/img/separator-top.svg'" alt="" class="img-fluid w-100">-->
<!--    </div>-->
    <section class="section-space">
      <div class="container">
        <div class="section-head text-center" style="color:#000;">
          <h2 class="mb-3">{{$t('accept[0]')}}</h2>
          <p>{{$t('accept[1]')}}</p>
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

    <!-- Bolg Section -->
    <section class="section">
    <div class="container">
        <div class="row justify-content-center data-flex">
          <div class="el-col-24 el-col-lg-24 mt-5 mt-sm-0">
            <div class="section-title text-center">
              <h1 class="title fw-bold font-title" style="color: #fba342;">{{$t('blog[3]')}}</h1>
              <div class="para-desc videoDiv text-center mx-auto font-intr">
                <p>
                  {{$t('blog[4]')}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row blog_list justify-content-between data-flex">
          <div class="el-col-sm-12 el-col-md-8 el-col-xs-24 pl-0 pr-0" v-for="(el, i) in listDataBlog" :key="el.id">
            <div class="blog_card mb-5 mt-3" v-if="i <= 2" @click.stop="$router.push({
              path: '/blogDetail',
              query: {
                id: el.id
              }
            })">
              <div class="image">
                <img :src="`${ApiUrl}${el.cover_img	}`" alt="">
              </div>
              <div class="time">{{el.add_time}}</div>
              <div class="title">{{ el.title }}</div>
            </div>
          </div>
        </div>
        <div class="justify-content-between data-flex el-content-text">
          <div class="to-blog" @click="$router.push({
            path: '/blog'
          })">{{$t('blog[5]')}}</div>
        </div>
      </div>
  </section>

<!--    <div class=" w-100">-->
<!--      <img :src="'./static/images/img/separator-bottom.svg'" alt="" class="img-fluid w-100">-->
<!--    </div>-->
    <section class="brand-section section-space">
      <div class="container">
        <div class="section-head text-center"><h2 class="mb-3" style="color:#000;">{{$t('partners[0]')}}</h2></div>
        <div class="row g-gs">
          <!--              <div class="client-logo-item text-center">-->
          <!--                <img :src="'./static/images/111.png'" alt="" class="img-fluid">-->
          <!--              </div>-->
          <swiper ref="myswiper1" :options="swiperOption1" class="">
            <swiper-slide v-for="(item,index) in 8" :key="index"  >
              <div class="" style="margin-right: 30px;">
                <div class="text-center" style="background: #b1d7fd;border-radius: 10px;">
                  <img :src="`./static/images/coop_${item}.png`" alt="" class="img-fluid" style="display: block">
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <!--              <swiper :options="swiperOption2" class="">-->
          <!--                <swiper-slide v-for="(item,index) in 7" :key="index" class="language__slider-single swiper-slide-duplicate-next" style="margin-right: 30px;">-->
          <!--                  <div class="">-->
          <!--                    <div class="text-center">-->
          <!--                      <img :src="`./static/images/coop_${item+7}.png`" alt="" class="img-fluid">-->
          <!--                    </div>-->
          <!--                  </div>-->
          <!--                </swiper-slide>-->
          <!--              </swiper>-->
        </div>
      </div>
    </section>

    <Footer></Footer>
    <div v-if="showNotice" id="__BVID__247___BV_modal_outer_" style="position: absolute; z-index: 99999999;">
      <div id="__BVID__247" role="dialog" aria-labelledby="__BVID__247___BV_modal_title_"
           aria-describedby="__BVID__247___BV_modal_body_" class="modal fade show" aria-modal="true"
           style="display: block;">
        <div class="modal-dialog modal-md modal-dialog-centered"><span tabindex="0"></span>
          <div id="__BVID__247___BV_modal_content_" tabindex="-1" class="modal-content">
            <header id="__BVID__247___BV_modal_header_" class="modal-header"><h5 id="__BVID__247___BV_modal_title_"
                                                                                 class="modal-title">{{msg_title}}</h5>
              <div class="close" @click="showNotice = false" style="position: absolute;right: 0;top: 0;z-index: 999;">
                <van-icon name="cross" size="30" color="#000"/>
              </div>
            </header>
            <div id="__BVID__247___BV_modal_body_" class="modal-body">
              <div class="payment-info" v-html="msg_content">
              </div>
            </div>
            <footer id="__BVID__247___BV_modal_footer_" class="modal-footer">
              <div  class="w-100" style="text-align: center;">
                <button style="background-color: #5a90ff !important;;border-color: #5a90ff !important;" @click="showNotice = false" type="button" class="btn ml-2 btn-primary">{{$t('confirm')}}</button>
              </div>
            </footer>
          </div>
          <span tabindex="0"></span></div>
      </div>
      <div id="__BVID__247___BV_modal_backdrop_" class="modal-backdrop"></div>
    </div>

    <div class="mask imageDiv" style="z-index: 99999999" v-if="showNoticeImg">
      <div style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;justify-items: center;">
        <div style="position: relative;">
          <van-image @click="jumpImg" :src="InitData.setting.up_url + imgnotice.cover_img" fit="widthFix"></van-image>
          <div class="close" @click="showNoticeImg = false" style="position: absolute;right: 0;top: 0;z-index: 999;background: #aaa;">
            <van-icon name="cross" size="30" color="#fff"/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import 'swiper/dist/css/swiper.css';
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
        email:'',
        number:1,
        detailData:{},
        showDialog:false,
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
          direction: "vertical", // 竖向滚动
          autoHeight: true, // 自适应高度
          slidesPerView: "auto", // 记得这里写 auto 不要默认写1哦
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          loop: true,
          autoplay: {   // 自动轮播
            delay: 2000,
            disableOnInteraction: false,
          },
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
        swiperOption2: {
          loop: true,  // 是否循环轮播
          speed:10000,
          autoplay: {
            disableOnInteraction:false,
            delay: 0,
            revertDirection:false,
          },
          autoplayDisableOnInteraction:false,
          slidesPerView:5,
        },
        swiperOption: {
          loop: true,  // 是否循环轮播
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          },
          // loopedSlides:2,
          // slidesPerView: 2,  // 可是区域内可展示多少个块
          // spaceBetween: 10,  // 块之间间隔距离
          // initialSlide:2,  // 默认初始显示块
          // freeMode: false,
          // effect : 'coverflow',
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
        settings:{
          "dots": true,
          "autoplay": true,
          "focusOnSelect": true,
          "infinite": true,
          "speed": 1000,
          "slidesToShow": 3,
          "slidesToScroll": 1,
          "touchThreshold": 5,
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
        pageNo: 1,
        data_current_page:"1",
        data_total_page:"1",
        listDataB:[],
        affInfo:{},
        listDataBlog: [],
      }
    },

    computed: {
      swiper1() {
        return this.$refs.myswiper1.swiper;
      },
    },
    watch: {
      'number'() {
        this.money=this.number*this.detailData.amount
      }
    },
    created() {
      let that = this;
      this.loadProudcutList();
      this.loadBlog();
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
      // //联盟计划
      // this.$Model.noticeList({gropid: 19,page_no: this.pageNo,page_size:10},data=>{
      //   if(data.code==1 && data.info.length>0) {
      //     that.affInfo = data.info[0];
      //   }
      // });

      this.$Model.HasNewMessage(data => {
        // this.noReadNum = data.data==null?0:1;
        if (data.data != null && data.data > 0) {
          that.$Dialog.Confirm1(that.$t('messageInfo[0]'), () => {
            that.$router.push(`/message`)
          }, that.$t('messageInfo[1]'));
        }
      });
      this.$Model.noticeList({gropid: 10,page_no: this.pageNo,page_size:6},data=>{
          this.isLoad = false
          if(data.code==1){
            if(data.info.length<=0){
              this.listDataBlog =[];
              this.isFinished = true
            }else {
              this.data_current_page = data.data_current_page;
              this.data_total_page = data.data_total_page;
              this.listDataBlog = data.info;
              this.isFinished = true
              if(type=='load'){
                this.listDataBlog = this.listDataBlog.concat(data.info);
              }else{
              }
            }
          }else{
            this.listData = []
            this.isFinished = true
          }
        });
      this.getListData('init');
    },
    mounted() {
      let that = this;
      let ww = window.innerWidth;
      if (ww <= 750) {
        this.swiper1.params.slidesPerView = 2;
        this.settings = {
          "dots": true,
          "autoplay": true,
          "focusOnSelect": true,
          "infinite": true,
          "speed": 3000,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "touchThreshold": 1,
        }
        // this.$refs.slick.reInit();
      }
      window.onresize = () => {
        that.resize();
      };
    },
    activated() {

    },
    destroyed() {
      // clearInterval(this.intv)
    },
    methods: {
      handelChange() {
        let id = this.selectM;
        this.selectP = this.listData.filter(item=>item.id==id)[0];
      },
      goDetail(item) {
        // if(item.progress<100){
          this.$router.push(`/productDetail?id=${item.id}`)
        // }
      },
      resize () {
        let that = this;
        let w = window.innerWidth;
        if (w <= 750) {
          this.swiper1.params.slidesPerView = 2;
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
            "touchThreshold": 3,
          };
          // that.$refs.slick.reInit();
        }
      },
      jumpReg() {
        if (this.UserInfo) {
          this.$router.push('/dashboard')
        } else {
          this.$router.push('/register')
        }
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
        let that = this;
        this.$Model.noticeList({gropid: 10,page_no: this.pageNo,page_size:3},data=>{
          if(data.code==1) {
            that.listDataB = data.info;
          }
        });
      }
    }
  }
</script>
<style scoped>
  .footer-section::before, .affiliate-wrapper::before, .hover-tab-menu .tab-menu li:nth-child(1) .menu-thumb:after, .hover-tab-menu .tab-menu li:nth-child(3) .menu-thumb:after, .hover-tab-menu::after, .hover-tab-menu::before, .hover-tab-area .tab-area .tab-item, .offer-item .offer-footer::after, .offer-item .offer-body .bal-shape::after, .offer-item .offer-body .bal-shape::before, .offer-item::after, .offer-item::before, .calculate-wrapper::after, .calculate-wrapper::before, .contact-wrapper::before, .contact-wrapper .contact-content a::before {
    position: absolute;
    content: '';
  }
  .preloader, .footer-top, .footer-bottom-area, .footer-top .links, .social-icons, .header-top ul, .header-top ul li, .header-bottom .header-area, .header-bottom .header-area .menu, .menu-item-has-children > a, .banner-content .button-group, .newslater-area, .call-item, .call-button, .call-button .call, .transaction-tab .tab-menu, .transaction-tab .tab-menu li, .affiliate-wrapper, .affiliate-item, .affiliate-item .affiliate-inner, .affiliate-item .affiliate-inner .affiliate-thumb, .feature-item .feature-thumb, .about-item, .counter-item, .counter-item .counter-content .counter-header, .hover-tab-menu .tab-menu li, .ball-group-2, .ball-group-1, .offer-item .offer-header, .offer-item .offer-footer, .offer-item .offer-body, .calculate-wrapper .calculate-area, .calculate-wrapper .calculate-area .calculate-item .tab-menu, .calculate-wrapper .profit-calc, .invest-range-area, .mission-item .mission-thumb, .faq-tab .tab-menu, .why-area, .why-item .why-inner, .how-item .how-thumb-area, .how-item .how-thumb-area .how-thumb, .tot-wrapper, .tot-wrapper .tot-item .counter--item .counter-header {
    display: flex;
    flex-wrap: wrap;
  }
  .hover-tab .tab-item {
    display: none;
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
    -moz-animation-name: fadeInUp;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
  }
  .tab-item.active {
    display: block;
  }
  /*.hero-image img {*/
  /*  border-radius: 20px*/
  /*}*/

  .banner-slider.swiper-container {
    margin: 0
  }

  .banner-slider.swiper-container-space .swiper-wrapper, .banner-slider.swiper-pagination+.swiper-wrapper {
    padding-bottom: 0!important
  }

  .banner-slider .swiper-slide {
    padding: 0
  }

  .banner-slider .swiper-pagination+.swiper-wrapper {
    padding-bottom: 0!important
  }

  .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1
  }

  .author-link {
    z-index: 2;
    position: relative
  }

  @media(max-width: 991px) {
    .hero-wrap-2 {
      padding-top:30px
    }
    .iframe {
      height: 78px !important;
    }
  }

  @media(min-width: 992px) {
    .hero-wrap-2 {
      padding-top:50px
    }
  }
  .modal {
    left: 25% !important;
  }
  .hero-btns {
    width: 100%
  }

  .brand__logo--section img {
    max-width: 100%;
    height: auto;
    display: block;
    transition: all .3s ease 0s
  }

  .brand__logo--section .brand__logo--section {
    background: #f9f9f9
  }

  .brand__logo--section .single__brand--logo:hover img {
    transform: scale(1.05)
  }

  .bullet-icon {
    font-size: 16px;
    margin-right: 10px;
    color: #007bff
  }

  .s-content {
    font-size: 16px;
    line-height: 1.5
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
    transition: all .3s ease;
    padding: 15px
  }

  .wrap .item img, .wrap .item svg {
    width: 43.5px;
    height: 43.5px
  }

  .wrap .item .svg-icon {
    transition: all .3s ease
  }

  .wrap .item:hover {
    box-shadow: 0 0 24px 8px rgba(0,0,0,.2)
  }

  @keyframes float-521ebb54 {
    0% {
      transform: translateY(0)
    }

    50% {
      transform: translateY(-15px)
    }

    to {
      transform: translateY(0)
    }
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
    transition: all .3s ease;
    padding: 15px
  }

  .wrap .item img {
    width: 43.5px;
    height: 43.5px
  }

  .wrap .item .svg-icon {
    transition: all .3s ease
  }

  .wrap .item:hover {
    box-shadow: 0 0 24px 8px rgba(0,0,0,.2)
  }
  #promotions-popup .modal-dialog-centered {
    display: flex;
    justify-content: center;
    align-items: center
  }

  #promotions-popup img {
    max-width: 100%;
    height: auto;
    display: block
  }

  #promotions-popup .my-shark {
    animation: login-shake .8s ease-in 2 forwards
  }
  @keyframes login-shake {
    0% {
      transform: scale(1)
    }

    10%,20% {
      transform: scale(.9) rotate(-3deg)
    }

    30%,50%,70%,90% {
      transform: scale(1.1) rotate(3deg)
    }

    40%,60%,80% {
      transform: scale(1.1) rotate(-3deg)
    }

    to {
      transform: scale(1) rotate(0)
    }
  }
  #promotions-popup .testimonial h2 {
    text-align: center
  }
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
  .hero-wrap>>>video{
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
  .hero-wrap>>>source{
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
  }
  .accordion-body>>>img {
    width: 100% !important;
    max-width: 750px !important;
    height: auto !important;
  }
  .accordion-body img{
    width: 100% !important;
    max-width: 750px !important;
    height: auto !important;
  }
  .section-header .cate {
    font-size: 24px;
    font-weight: 500;
    text-transform: capitalize;
    color: #324fb0;
    display: block;
    margin-top: -5px;
    margin-bottom: 26px;
  }

  /*Counter Section Ends Here*/
  /*How Section Starts Here*/
  .hover-tab-menu {
    position: relative;
    overflow: hidden;
  }

  .hover-tab-menu .tab-menu {
    position: relative;
    z-index: 1;
  }

  .hover-tab-menu .tab-menu li {
    align-items: center;
    padding: 0;
    margin-bottom: 126px;
    cursor: grab;
  }

  .hover-tab-menu .tab-menu li .menu-thumb {
    padding: 5px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 1px solid #bad0fb;
    width: 65px;
    height: 65px;
    background: #fff;
  }

  .hover-tab-menu .tab-menu li .menu-thumb span {
    line-height: 53px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    text-align: center;
    font-size: 36px;
    background-color: #e3ecfd;
    width: 53px;
    display: inline-block;
    color: #33406a;
  }

  .hover-tab-menu .tab-menu li .menu-content {
    width: calc(100% - 65px);
    padding-left: 30px;
  }

  .hover-tab-menu .tab-menu li .menu-content .title {
    text-transform: uppercase;
    margin-bottom: 26px;
  }

  .hover-tab-menu .tab-menu li.active .menu-thumb span {
    background: #324fb0;
    color: #ffffff;
    animation-name: fadeIn;
    -webkit-animation-name: fadeIn;
    -moz-animation-name: fadeIn;
    animation-duration: .5s;
    -webkit-animation-duration: .5s;
    -moz-animation-duration: .5s;
  }

  .hover-tab-menu .tab-menu li:nth-child(2) {
    -webkit-transform: translateX(95px);
    -ms-transform: translateX(95px);
    transform: translateX(95px);
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .hover-tab-menu .tab-menu li:nth-child(2) {
      -webkit-transform: translateX(75px);
      -ms-transform: translateX(75px);
      transform: translateX(75px);
    }

    .hover-tab-menu .tab-menu li:nth-child(2) .menu-content {
      max-width: 320px;
    }
  }

  @media (max-width: 991px) {
    .hover-tab-menu .tab-menu li:nth-child(2) {
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @media (max-width: 991px) {
    .hover-tab-menu .tab-menu li {
      margin-bottom: 50px;
    }
  }

  @media (max-width: 575px) {
    .hover-tab-menu .tab-menu li {
      margin-bottom: 40px;
    }

    .hover-tab-menu .tab-menu li .menu-thumb {
      width: 50px;
      height: 50px;
    }

    .hover-tab-menu .tab-menu li .menu-thumb span {
      width: 38px;
      height: 38px;
      text-align: center;
      line-height: 38px;
      font-size: 24px;
    }

    .hover-tab-menu .tab-menu li .menu-content {
      padding-left: 15px;
      width: calc(100% - 50px);
    }

    .hover-tab-menu .tab-menu li .menu-content .title {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 600;
    }
  }

  .hover-tab-menu .tab-menu li:nth-child(1) .menu-thumb {
    position: relative;
  }

  .hover-tab-menu .tab-menu li:nth-child(1) .menu-thumb:after {
    bottom: 75%;
    right: 75%;
    background: #ffffff;
    width: 50px;
    height: 50px;
    z-index: -1;
  }

  .hover-tab-menu .tab-menu li:nth-child(3) .menu-thumb {
    position: relative;
  }

  .hover-tab-menu .tab-menu li:nth-child(3) .menu-thumb:after {
    top: 75%;
    right: 70%;
    background: #ffffff;
    width: 50px;
    height: 50px;
    z-index: -1;
  }

  .hover-tab-menu .tab-menu li:last-child {
    margin: 3px;
  }

  .hover-tab-menu::after, .hover-tab-menu::before {
    width: 600px;
    height: 600px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    top: -37px;
  }

  @media (max-width: 1199px) and (min-width: 992px) {
    .hover-tab-menu::after, .hover-tab-menu::before {
      width: 680px;
      height: 680px;
      top: -77px;
    }
  }

  @media (max-width: 991px) {
    .hover-tab-menu::after, .hover-tab-menu::before {
      display: none;
    }
  }

  .hover-tab-menu::before {
    right: 75%;
    border: 9px solid #e3ebfc;
  }

  .hover-tab-menu::after {
    border: 2px dashed #324fb0;
    right: calc(75% + 4px);
    animation: rotate2 2s linear infinite;
  }

  .hover-tab-area .tab-area {
    width: 540px;
    height: 540px;
    position: relative;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background-color: rgba(38, 78, 213, 0.102);
    overflow: hidden;
  }

  .hover-tab-area .tab-area::after, .hover-tab-area .tab-area::before {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background-color: rgba(38, 78, 213, 0.102);
  }

  .hover-tab-area .tab-area::before {
    width: 468px;
    height: 468px;
  }

  .hover-tab-area .tab-area::after {
    width: 386px;
    height: 386px;
  }

  .hover-tab-area .tab-area * {
    position: relative;
    z-index: 1;
  }

  .hover-tab-area .tab-area .tab-item {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
  }

  .hover-tab-area .tab-area .tab-item img {
    max-height: 300px;
    max-width: 300px;
    z-index: 99;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    transition: all ease 0.3s;
  }

  .hover-tab-area .tab-area .tab-item.active img {
    visibility: visible;
    opacity: 1;
  }

  .hover-tab-area .tab-area .tab-item.first {
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
    -moz-animation-name: fadeInUp;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
  }

  .hover-tab-area .tab-area .tab-item.second {
    animation-name: fadeInLeft;
    -webkit-animation-name: fadeInLeft;
    -moz-animation-name: fadeInLeft;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
  }

  .hover-tab-area .tab-area .tab-item.third {
    animation-name: fadeInDown;
    -webkit-animation-name: fadeInDown;
    -moz-animation-name: fadeInDown;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
  }

  @keyframes rotate2 {
    0% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }

    100% {
      -webkit-transform: rotate(3600deg);
      -ms-transform: rotate(3600deg);
      transform: rotate(3600deg);
    }
  }

  @-webkit-keyframes rotate2 {
    0% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }

    100% {
      -webkit-transform: rotate(3600deg);
      -ms-transform: rotate(3600deg);
      transform: rotate(3600deg);
    }
  }

  @-o-keyframes rotate2 {
    0% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }

    100% {
      -webkit-transform: rotate(3600deg);
      -ms-transform: rotate(3600deg);
      transform: rotate(3600deg);
    }
  }
  .get-section .title,.feature-section .title{
    margin-bottom: 26px;
    text-align: center;
    text-transform: uppercase;
  }

  @media (min-width: 576px) {
    .get-section h5,.feature-section h5 {
      font-size: 24px;
      line-height: 34px;
      margin-top: -8px;
      color: #33406a;
    }
  }
  .get-section p:last-child {
    margin-bottom: -7px !important;
  }
  .get-section p {
    margin-top: -12px;
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    .get-section .container{
      max-width: 1140px;
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      transform: translateY(20px)
    }

    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0)
    }
  }

  .fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp
  }
  /*How Section Ends Here*/
  /*Feature Section Starts Here*/
  .feature-item {
    text-align: center;
    margin-bottom: 50px;
  }

  .feature-item .feature-thumb {
    width: 120px;
    height: 120px;
    align-items: center;
    justify-content: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin: 0 auto 40px;
    background: #ffffff;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    transition: all ease 0.3s;
    box-shadow: 0 10px 20px rgba(215, 226, 251, 0.7);
  }

  .feature-item .feature-thumb img {
    max-height: 71px;
  }

  .feature-item .feature-content .title {
    text-transform: uppercase;
    margin-bottom: 25px;
  }

  .feature-item:hover .feature-thumb {
    box-shadow: 0 20px 20px #d7e2fb;
  }

  @media (max-width: 575px) {
    .feature-item {
      margin-bottom: 30px;
    }

    .feature-item .feature-thumb {
      margin-bottom: 30px;
      width: 100px;
      height: 100px;
    }

    .feature-item .feature-thumb img {
      max-height: 60px;
    }

    .feature-item .feature-content .title {
      margin-bottom: 20px;
    }
  }

  .feature-wrapper {
    margin-bottom: -30px;
  }

  @media (min-width: 768px) {
    .feature-wrapper {
      margin-bottom: -50px;
    }
  }

  .feature-section {
    position: relative;
  }

  @media (max-width: 991px) {
    .feature-section {
      background-color: #f9fbff;
    }
  }
  div[class*="ball"] {
    position: absolute;
  }

  div[class*="ball"] img {
    max-width: 100%;
  }

  @media (max-width: 767px) {
    div[class*="ball"] {
      display: none;
    }
  }

  .ball-3 {
    top: calc(50% - 100px);
    right: 10px;
  }

  .ball-1 {
    top: calc(50% - 120px);
    left: 10px;
  }

  .ball-2 {
    left: 17%;
    top: 30%;
  }

  @media (max-width: 991px) {
    .ball-1 {
      width: 100px;
    }

    .ball-3 {
      width: 70px;
    }
  }

  /*Feature Section Ends Here*/
  .banner-shape {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: -2px;
  }
  .banner-shape-top {
    position: absolute !important;
    top: -1px;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  .colorwhite {
    color: #e73329;
    padding: 20px 0;
  }
  @media only screen and (min-width: 1024px) {
    .container {
      width: 100%;
    }
    .container .box7 {
      width: 100%;
      box-sizing: border-box;
      padding: 2rem 3rem
    }

    .container .box7 {
      width: 100%;
      max-width: 1300px;
      margin: 0 auto
    }

    .container .box7 .title {
      position: relative;
      width: 100%;
      margin-bottom: 6rem;
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word;
      text-align: center;
    }

    .container .box7 .faq-list {
      width: 100%
    }

    .container .box7 .faq-list .faq-item {
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem 2rem;
      border-radius: 6px;
      background-color: #efefef;
      transition: all .3s
    }

    .container .box7 .faq-list .faq-item:not(:last-child) {
      margin-bottom: 2.5rem
    }

    .container .box7 .faq-list .faq-item .faq-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      cursor: pointer
    }

    .container .box7 .faq-list .faq-item .faq-title .name {
      max-width: 100%;
      font-size: 1.4rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box7 .faq-list .faq-item .faq-title .right-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 2.8rem;
      max-width: 2.8rem;
      height: 2.8rem;
      margin-left: 3rem;
      border-radius: 50%;
      background-color: #efbc16
    }

    .container .box7 .faq-list .faq-item .faq-title .right-icon i {
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      transition: all .3s ease
    }

    .container .box7 .faq-list .faq-item .faq-title .right-icon .on {
      transform: rotate(180deg)
    }

    .container .box7 .faq-list .faq-item .faq-content {
      width: 100%;
      margin-top: 2rem
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      /*width:100%*/
    }

    .container .box7 {
      width: 100%;
      box-sizing: border-box;
      padding: 3rem 1rem
    }

    .container .box7 {
      width: 100%
    }

    .container .box7 .title {
      position: relative;
      width: 100%;
      margin-bottom: 4.5rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word;
      text-align: center;
    }

    .container .box7 .faq-list {
      width: 100%
    }

    .container .box7 .faq-list .faq-item {
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 1.5rem;
      border-radius: 6px;
      background-color: #efefef;
      transition: all .3s
    }

    .container .box7 .faq-list .faq-item:not(:last-child) {
      margin-bottom: 1.5rem
    }

    .container .box7 .faq-list .faq-item .faq-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      cursor: pointer
    }

    .container .box7 .faq-list .faq-item .faq-title .name {
      max-width: 100%;
      font-size: 1.2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box7 .faq-list .faq-item .faq-title .right-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 2.2rem;
      max-width: 2.2rem;
      height: 2.2rem;
      margin-left: 1.5rem;
      border-radius: 50%;
      background-color: #ffa701
    }

    .container .box7 .faq-list .faq-item .faq-title .right-icon i {
      font-size: 1.4rem;
      font-weight: 700;
      color: #fff;
      transition: all .3s ease
    }

    .container .box7 .faq-list .faq-item .faq-title .right-icon .on {
      transform: rotate(180deg)
    }

    .container .box7 .faq-list .faq-item .faq-content {
      width: 100%;
      margin-top: 1rem
    }
  }
  .faq-content>>>img {
    width: 100% !important;
    max-width: 750px !important;
  }
  .slick-slide img {
    height: 100%;
    width: 100%;
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
      width: 50%;
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
      width: 50%;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
      margin: 0 auto;
      min-width: fit-content;
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

  @media only screen and (max-width: 992px) {
    .btns-group .btn-lg {
      padding: 1rem 3rem;
    }
  }


  .adaptor {
    margin: 0 auto;
    max-width: 1440px;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%
  }

  .adaptor>.block {
    margin: 0 auto;
    max-width: 1376px
  }

  .adaptor>.block>.narrow {
    box-sizing: content-box;
    margin: 0 auto;
    max-width: 1040px;
    padding: 0 16px
  }

  .adaptor:not(.transparent)>.block {
    background: #fff
  }

  .adaptor.theme-light {
    padding: 0 16px
  }

  .adaptor.theme-light>.block {
    background: #f8f8f8;
    border-radius: 10px
  }

  .adaptor.theme-dark {
    padding: 0 16px
  }

  .adaptor.theme-dark>.block {
    /*background: linear-gradient(277.09deg,#313545 15.4%,#121118 100.07%);*/
    border-radius: 10px;
    color: #fff
  }

  .adaptor[class*=theme]+.adaptor[class*=theme][class*=theme] {
    margin-top: 16px
  }

  @media only screen and (min-width: 1200px) {
    .adaptor>.block>.narrow {
      padding:0 32px
    }

    .adaptor[class*=theme] {
      padding: 0 32px
    }

    .adaptor[class*=theme]+.adaptor[class*=theme][class*=theme] {
      margin-top: 32px
    }
  }


  @keyframes progress-17e14d0d {
    0% {
      left: 0
    }

    20% {
      left: 140px
    }

    21% {
      left: 148px
    }

    to {
      left: 148px
    }
  }

  @keyframes big-17e14d0d {
    0% {
      transform: scale(1)
    }

    10% {
      transform: scale(1.2)
    }

    20% {
      transform: scale(1)
    }

    to {
      transform: scale(1)
    }
  }
  .steps {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 0 40px;
    max-width: 1440px;
    padding: 40px 0;
    text-align: center;
    width: 100%;
    background: linear-gradient(277.09deg,#313545 15.4%,#121118 100.07%);
  }

  .steps .title {
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 15px
  }

  .steps .list {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center
  }

  .steps .list .step-wrap {
    margin-bottom: 78px;
    position: relative
  }

  .steps .list .step-wrap .txt {
    bottom: -32px;
    color: #fff;
    color: hsla(0,0%,100%,.8);
    font-size: 16px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    white-space: nowrap
  }
  .steps .list .step-wrap .txt1 {
    bottom: -52px;
    color: #fff;
    color: hsla(0,0%,100%,.8);
    font-size: 16px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    white-space: nowrap
  }

  .steps .list .step {
    height: 64px;
    width: 64px
  }

  .steps .start-btn {
    width: 100%
  }

  .steps .start-btn button {
    width: 100%
  }

  @media only screen and (min-width: 1200px) {
    .steps {
      margin: 0 auto 32px;
      padding: 56px 130px;
      background: linear-gradient(277.09deg,#313545 15.4%,#121118 100.07%);
    }

    .steps .title {
      font-size: 45px;
      line-height: 56px
    }

    .steps .list {
      flex-direction: row;
      justify-content: space-between
    }

    .steps .list .step-wrap {
      margin: 0
    }

    .steps .list .step {
      animation: big-17e14d0d;
      animation-duration: 4s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite
    }

    .steps .list .step.step2 {
      animation-delay: 1.6s
    }

    .steps .list .step.step3 {
      animation-delay: 3.2s
    }

    .steps .list .progress {
      height: 8px;
      margin: 0 26px;
      overflow-x: hidden;
      padding-top: 3px;
      position: relative;
      width: 140px;
      background: rgba(0,0,0,0);
    }

    .steps .list .progress .dashline {
      border-top: 2px dashed #353741;
      width: 100%
    }

    .steps .list .progress .ball {
      animation: progress-17e14d0d;
      animation-delay: .8s;
      animation-duration: 4s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      background: #fff;
      border-radius: 8px;
      height: 8px;
      left: -8px;
      position: absolute;
      top: 0;
      width: 8px
    }

    .steps .list .progress.progress2 .ball {
      animation-delay: 2.4s
    }

    .steps .start-btn {
      margin: 80px 0 0;
      width: auto
    }

    .steps .start-btn button {
      width: auto
    }
  }

  .steps:after {
    background: url(data:image/png;base64,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) 100% 0 no-repeat;
    background-size: 420px 534px;
    bottom: 0;
    content: "";
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    z-index: 0
  }
  .button {
    -webkit-font-smoothing: initial;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    font-family: Roboto-Medium;
    font-size: 15px;
    font-style: normal;
    line-height: 16px;
    margin: 0;
    outline: 0;
    padding: 12px 24px;
    position: relative;
    text-align: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    transition: box-shadow .15s cubic-bezier(.4,0,.2,1) 0ms;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    white-space: nowrap;
  }
  .button.primary{
    background: linear-gradient(143.96deg, #36d0ac 22.43%, #60f770 134.97%);
    color: #fff;
  }
  @media only screen and (min-width: 1200px) {
    .button{
      padding-bottom: 16px;
      padding-top: 16px;
    }
  }


  .infodescription {
    min-height: 50px
  }

  #stage .swiper-button-prev,#stage .swiper-button-next {
    display: none
  }

  .product-info .product-info-description .nav-tabs-container > .nav.nav-tabs li {
    padding-right: 35px
  }

  .startslide {
    margin-top: 35px
  }

  .btns {
    border-radius: 7px !important
  }

  .bubble {
    position: absolute;
    top: 35px;
    left: 35px;
    background: #f00;
    color: #fff;
    font-weight: 700;
    padding: 19px 4px;
    width: 80px;
    text-align: center;
    border-radius: 50%;
    height: 80px
  }

  .round {
    border-radius: 7px
  }

  .productlist-viewmode-list .product-container {
    border: 1px solid #e7e7e7;
    margin-bottom: 10px;
    padding: 15px
  }

  .cls-1 {
    fill: transparent !important
  }

  .icon-bar {
    z-index: 999 !important
  }

  .card100 .faq-accordion {
    width: 98% !important
  }

  .card100 .card-wrapper {
    min-height: 10vh
  }

  .card100 .faq-card {
    margin-top: 0
  }

  .card-body .fas,.card-body .ui-datepicker .ui-datepicker-header .ui-datepicker-prev:after,.ui-datepicker .ui-datepicker-header .card-body .ui-datepicker-prev:after,.card-body .ui-datepicker .ui-datepicker-header .ui-datepicker-next:after,.ui-datepicker .ui-datepicker-header .card-body .ui-datepicker-next:after,.card-body #footer .inside .row .footer-col-1 .panel .panel-body li a:before,.card-body #footer .inside .teaser-group-three-squares .footer-col-1 .panel .panel-body li a:before,.card-body #footer .inside .teaser-group-2-cols-big-image .footer-col-1 .panel .panel-body li a:before,#footer .inside .row .footer-col-1 .panel .panel-body li .card-body a:before,.card-body #footer .inside .row .footer-col-3 ul li:before,.card-body #footer .inside .teaser-group-three-squares .footer-col-3 ul li:before,.card-body #footer .inside .teaser-group-2-cols-big-image .footer-col-3 ul li:before,#footer .inside .row .footer-col-3 ul .card-body li:before,.card-body .teaser-group-three-squares .widget-content > div a:before,.teaser-group-three-squares .widget-content > div .card-body a:before,.card-body .fab,.card-body .far {
    float: left;
    position: relative;
    margin-left: 0px;
    top: 5px;
    background: #e5f4fd;
    width: 45px;
    height: 45px;
    padding: 14px;
    border-radius: 50%;
    font-size: 17px;
    color: #5eb9f0
  }

  .card-left img {
    width: 45px
  }

  .card-left {
    float: left
  }

  .hostfac {
    max-width: 1070px;
    margin: 0 auto
  }

  .hostfac .counter {
    float: left;
    margin-top: 10px !important
  }

  .hostfac .mb-1 {
    padding-top: 0
  }

  .hostfac .mb-0 {
    width: 100%;
    float: left
  }

  .card-body {
    padding: 25px
  }

  .card-right {
    padding-left: 75px
  }

  .card-right h3 {
    font-size: 20px !important;
    padding: 0 !important;
    color: #333 !important
  }

  .card {
    width: 98%;
    margin: 2% 1%;
    float: left;
    -webkit-box-shadow: 0 0px 11px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 11px rgba(0, 0, 0, 0.1)
  }

  .hosting .card {
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .rightshadow {
    border: 1px solid #e7e7e7;
    border-radius: 7px;
    -webkit-box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.3);
    box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.3);
    padding: 15px
  }

  .hostinner {
    padding: 25px;
    border-radius: 7px;
    -webkit-box-shadow: 0 0px 11px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 11px rgba(0, 0, 0, 0.1)
  }

  .hostim {
    width: 50px;
    margin: 0 auto
  }

  .hosttxt {
    text-align: center
  }

  .hosttxt span {
    font-size: 35px;
    font-weight: 600
  }

  .hosttitel {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-top: 25px
  }

  .pdnfa .fas,.pdnfa .ui-datepicker .ui-datepicker-header .ui-datepicker-prev:after,.ui-datepicker .ui-datepicker-header .pdnfa .ui-datepicker-prev:after,.pdnfa .ui-datepicker .ui-datepicker-header .ui-datepicker-next:after,.ui-datepicker .ui-datepicker-header .pdnfa .ui-datepicker-next:after,.pdnfa #footer .inside .row .footer-col-1 .panel .panel-body li a:before,.pdnfa #footer .inside .teaser-group-three-squares .footer-col-1 .panel .panel-body li a:before,.pdnfa #footer .inside .teaser-group-2-cols-big-image .footer-col-1 .panel .panel-body li a:before,#footer .inside .row .footer-col-1 .panel .panel-body li .pdnfa a:before,.pdnfa #footer .inside .row .footer-col-3 ul li:before,.pdnfa #footer .inside .teaser-group-three-squares .footer-col-3 ul li:before,.pdnfa #footer .inside .teaser-group-2-cols-big-image .footer-col-3 ul li:before,#footer .inside .row .footer-col-3 ul .pdnfa li:before,.pdnfa .teaser-group-three-squares .widget-content > div a:before,.teaser-group-three-squares .widget-content > div .pdnfa a:before {
    font-size: 20px;
    background: #0c4ead;
    width: 40px;
    height: 40px;
    padding: 8px 0px 0px 9px;
    border-radius: 50%;
    color: #fff
  }

  .mb-1 {
    font-size: 16px;
    padding-top: 25px
  }

  .mb-1 .fas,.mb-1 .ui-datepicker .ui-datepicker-header .ui-datepicker-prev:after,.ui-datepicker .ui-datepicker-header .mb-1 .ui-datepicker-prev:after,.mb-1 .ui-datepicker .ui-datepicker-header .ui-datepicker-next:after,.ui-datepicker .ui-datepicker-header .mb-1 .ui-datepicker-next:after,.mb-1 #footer .inside .row .footer-col-1 .panel .panel-body li a:before,.mb-1 #footer .inside .teaser-group-three-squares .footer-col-1 .panel .panel-body li a:before,.mb-1 #footer .inside .teaser-group-2-cols-big-image .footer-col-1 .panel .panel-body li a:before,#footer .inside .row .footer-col-1 .panel .panel-body li .mb-1 a:before,.mb-1 #footer .inside .row .footer-col-3 ul li:before,.mb-1 #footer .inside .teaser-group-three-squares .footer-col-3 ul li:before,.mb-1 #footer .inside .teaser-group-2-cols-big-image .footer-col-3 ul li:before,#footer .inside .row .footer-col-3 ul .mb-1 li:before,.mb-1 .teaser-group-three-squares .widget-content > div a:before,.teaser-group-three-squares .widget-content > div .mb-1 a:before,.mb-1 .far,.mb-1 .fab {
    float: left;
    font-size: 30px;
    margin-right: 25px
  }

  .centtxt {
    text-align: center;
    width: 100%
  }

  .faq-accordion-title label .fas,.faq-accordion-title label .ui-datepicker .ui-datepicker-header .ui-datepicker-prev:after,.ui-datepicker .ui-datepicker-header .faq-accordion-title label .ui-datepicker-prev:after,.faq-accordion-title label .ui-datepicker .ui-datepicker-header .ui-datepicker-next:after,.ui-datepicker .ui-datepicker-header .faq-accordion-title label .ui-datepicker-next:after,.faq-accordion-title label #footer .inside .row .footer-col-1 .panel .panel-body li a:before,.faq-accordion-title label #footer .inside .teaser-group-three-squares .footer-col-1 .panel .panel-body li a:before,.faq-accordion-title label #footer .inside .teaser-group-2-cols-big-image .footer-col-1 .panel .panel-body li a:before,#footer .inside .row .footer-col-1 .panel .panel-body li .faq-accordion-title label a:before,.faq-accordion-title label #footer .inside .row .footer-col-3 ul li:before,.faq-accordion-title label #footer .inside .teaser-group-three-squares .footer-col-3 ul li:before,.faq-accordion-title label #footer .inside .teaser-group-2-cols-big-image .footer-col-3 ul li:before,#footer .inside .row .footer-col-3 ul .faq-accordion-title label li:before,.faq-accordion-title label .teaser-group-three-squares .widget-content > div a:before,.teaser-group-three-squares .widget-content > div .faq-accordion-title label a:before {
    margin-right: 15px;
    color: #0c4ead
  }
  @media (min-width: 992px) {
    .col-md-4 {
      width: 33.33333%;
      float: left;
    }
  }
  @media (min-width: 768px) {
    .col-md-4 {
      width: 33.33333%;
      float: left;
    }
  }
  .clr {
    clear: both;
  }
  .btn {
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    font-size: 0.95rem;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .brand-style-2 {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .brand-style-2 li a {
    display: block;
  }
  .brand-style-2 li a:hover img {
    opacity: 1;

  }

  .brand-style-2 li a img {
    opacity: 0.6;
    transition: 0.3s;
    max-height: 70px;
  }
  .title-two-lines {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 3rem;
    margin-bottom: 1rem;
  }
  .separator-animated {

    overflow: hidden;
    height: 2px;
    width: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(111, 100, 233, 0.6) 50%, rgba(0, 0, 0, 0) 100%);
  }


  .hero-section {
    background-color: #000;
    overflow: hidden;
  }

  .separator-section {
    margin-top: -2px;
  }

  .coins-section {
    background-color: #0f1021;
    padding-top: 50px;
    position: relative;
    z-index: 1;
  }

  .float-up {
    transition: transform 0.3s ease;
  }

  .float-up:hover {
    transform: translateY(-5px);
  }

  .welcome-bonus {
    background: linear-gradient(100deg, #8B2AB8 0%, #E535AB 100%);
    border: none;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .welcome-bonus:hover {
    transform: translateY(-5px);
    background: linear-gradient(90deg, #8B2AB8 0%, #E535AB 100%);
    color: #fff;
    box-shadow: 0 0 10px #E535AB,
    0 0 30px #E535AB,
    0 0 60px rgba(229, 53, 171, 0.3);
  }


  .staking-img {
    position: relative;
    padding: 20px 20px 0;
    background-color: #0f1021;
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  @media (max-width: 768px) {
    .staking-img {
      padding: 10px 10px 0;
    }
  }


  /* 加密货币价格卡片样式 */
  .crypto_box .chat-box {
    background: #0f1021;  /* 深色背景 */
    border-radius: 8px;
    padding: 16px;
    transition: all 0.3s ease;
  }

  .crypto_box .chat-box:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(139, 42, 184, 0.2);
  }

  /* 加密货币名称样式 */
  .crypto_name {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }

  .crypto_name_full {
    font-size: 12px;
    color: #7376aa;  /* 浅灰色 */
    margin-top: 2px;
  }

  /* 价格样式 */
  .crypto_price {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }

  /* 价格变化百分比 - 红色（跌） */
  .price-down {
    color: #f5465c;
    font-size: 14px;
    font-weight: 500;
  }

  /* 价格变化百分比 - 绿色（涨） */
  .price-up {
    color: #0ecb81;
    font-size: 14px;
    font-weight: 500;
  }

  /* 图标间距 */
  .gap-10 {
    gap: 10px;
  }

  .gap-15 {
    gap: 15px;
  }

  /* 通用内边距 */
  .p_10_20 {
    padding: 16px 20px;
  }

  /* 背景样式 */
  .bg-flashlight {
    background: #0f1021;
    border: 1px solid rgba(139, 42, 184, 0.1);
  }

  /* 鼠标指针样式 */
  .c_pointer {
    cursor: pointer;
  }
  .table-wrapper {
    position: relative;
    overflow: hidden;
  }

  .table-header {
    position: relative;
    z-index: 2;
  }

  .table-body-wrapper {
    height: 500px;
    overflow: hidden;
    position: relative;
  }

  .table-body-content {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }

  .table-row {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    color: #000000;
  }

  .table-row:hover {
    background: rgba(255,255,255,0.05);
  }

  .modal-content {
    color: #000000;
  }
  .faq-answer img,.faq-answer>>>img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
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

    .modal .modal-header .close {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 4rem;
      max-width: 4rem;
      height: 3.2rem;
      margin-left: 4rem;
      border-radius: 4px;
      cursor: pointer;
    }

    .mask .modal .modal-header .close i {
      font-size: 1.7rem;
      color: #000;
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
      background-color: #5a90ff;
      cursor: pointer;
    }
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

    .modal .modal-header .close {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 3.6rem;
      max-width: 3.6rem;
      height: 2.8rem;
      margin-left: 2rem;
      border-radius: 4px;
      cursor: pointer;
    }

    .mask .modal .modal-header .close i {
      font-size: 1.7rem;
      color: #000;
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
      background-color: #5a90ff;
      cursor: pointer;
    }
  }
  ol, ul {
    padding-left: 0;
  }

  .work {
    background-color: rgba(255, 255, 255, 0.01);
    padding-top: 20px;
  }

  .work-item {
    background-color: rgba(255, 255, 255, 0.08);
    padding: 30px 20px;
    text-align: center;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    color: #000;
    margin: 1rem 0.75rem;
  }

  @media (max-width: 991px) {
    .work-item {
      padding: 25px 15px;
    }
  }

  .work-item:hover::before {
    width: 100%;
  }

  .work-item:hover::after {
    height: 100%;
  }

  .work-item:hover .work-item__border::before {
    height: 100%;
  }

  .work-item:hover .work-item__border::after {
    width: 100%;
  }

  .work-item::before {
    position: absolute;
    content: "";
    width: 0;
    height: 2px;
    left: 0;
    top: 0;
    background-color: #e0a958;
    -webkit-transition: .3s linear;
    transition: .3s linear;
  }

  .work-item::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 0;
    background-color: #e0a958;
    -webkit-transition: .3s linear;
    transition: .3s linear;
    top: 0;
    left: 0;
  }
  /*.work-item:hover {*/
  /*  border-bottom: 2px solid rgb(5, 90, 222);*/
  /*  border-right:2px solid rgb(5, 90, 222);*/
  /*}*/
  .work-item:hover .work-item__icon {
    background-color: #fff;
    color: #e0a958;
  }

  .work-item:hover .work-item__number {
    color: #000;
    font-size: 60px;
  }

  .work-item__border {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .work-item__border::before {
    position: absolute;
    content: "";
    width: 2px;
    height: 0px;
    right: 0;
    bottom: 0;
    background-color: #e0a958;
    -webkit-transition: .3s linear;
    transition: .3s linear;
  }

  .work-item__border::after {
    position: absolute;
    content: "";
    width: 0;
    height: 2px;
    background-color: #e0a958;
    -webkit-transition: .3s linear;
    transition: .3s linear;
    bottom: 0;
    right: 0;
  }

  .work-item__number {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 50px;
    font-weight: 700;
    color:#000;
    -webkit-transition: .2s linear;
    transition: .2s linear;
  }

  @media (max-width: 991px) {
    .work-item__number {
      font-size: 40px;
    }
  }

  @media (max-width: 767px) {
    .work-item__number {
      font-size: 30px;
    }
    .work .section-heading__desc {
      font-size: 1.4rem !important;
    }
  }

  .work-item__icon {
    font-size: 40px;
    color: #fff;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    /*background-color: #e0a958;*/
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    -webkit-transition: .2s linear;
    transition: .2s linear;
  }

  @media (max-width: 767px) {
    .work-item__icon {
      font-size: 30px;
      width: 60px;
      height: 60px;
    }
  }

  .work-item__title {
    margin-top: 25px;
    margin-bottom: 15px;
  }

  .section-heading__title {
    position: relative;
    margin-bottom: 5px;
    padding-bottom: 10px;
    color: #ffffff;
  }

  .section-heading__title::before {
    position: absolute;
    content: "";
    width: 60px;
    height: 2px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: #e0a958;
    bottom: 0;
    z-index: -1;
  }

  .section-heading__title::after {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%) rotate(-45deg);
    transform: translateX(-50%) rotate(-45deg);
    background-color: #e0a958;
    bottom: -4px;
    z-index: -1;
  }

  .work .section-heading__desc {
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    font-size: 2rem;
    color: #000;
    text-align: center;
    font-weight: bolder;
  }

  .title-main {
    color: #343a40;
    font-family: Roboto;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120.5%;
    text-align: center;
    margin-bottom: 1rem;
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
  .el-row {
    box-sizing:border-box
  }
  .el-row:after,.el-row:before {
    display:table
  }
  .el-row:after {
    clear:both
  }
  .el-row--flex {
    display:flex
  }
  .el-col-0,.el-row--flex:after,.el-row--flex:before {
    display:none
  }
  .el-row--flex.is-justify-center {
    justify-content:center
  }
  .el-row--flex.is-justify-end {
    justify-content:flex-end
  }
  .el-row--flex.is-justify-space-between {
    justify-content:space-between
  }
  .el-row--flex.is-justify-space-around {
    justify-content:space-around
  }
  .el-row--flex.is-align-top {
    align-items:flex-start
  }
  .el-row--flex.is-align-middle {
    align-items:center
  }
  .el-row--flex.is-align-bottom {
    align-items:flex-end
  }
  [class*=el-col-] {
    float:left;
    box-sizing:border-box
  }
  .form-group{
    padding: 10px;
    font-size: 1.5rem;
    color: #000;
  }
  .msg {
    padding: 0 10px;
    font-size: 1rem;
  }
  .el-col-24 {
    width: 100%;
  }
  .el-row:after, .el-row:before {
    display: table;
  }
  @media only screen and (min-width: 768px) {
    .el-col-sm-24 {
      width: 100%;
    }
  }
  @media only screen and (min-width: 992px) {
    .el-col-md-8 {
      width: 33.33333%;
    }
  }
  .img-fluid {
    width: 540px;
    height: auto;
  }
  .g-gs, .gx-gs {
    --bs-gutter-x: 2rem;
  }
  .g-gs, .gy-gs {
    --bs-gutter-y: 2rem;
  }
.profit-section {
  margin-bottom: 1rem;
  overflow-x: hidden;
}

/* Blog */
.blog_card{
    padding: 20px 10px;
    border-radius:5px;
    background-color: #00d7a361;
    box-shadow: 0 1px 5px rgba(58,57,57,.10196078431372549);
    margin-bottom: 51px;
    cursor: pointer;
    margin: 0 10px;
  }
  .blog_card .image{
    width: 100%;
    height: 200px;
  }
  .blog_card .image img{
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
  .blog_card .time{
    font-size: 1rem;
    color: #959595;
    margin: 10px 0;
  }
  .blog_card .title{
    height: 100px;
    display: -webkit-box; /* 必须结合的属性 */
    -webkit-box-orient: vertical; /* 必须结合的属性 */
    line-clamp:3; /* 限制显示的行数 */
    overflow: hidden; /* 隐藏溢出的内容 */
    text-overflow: ellipsis; /* 显示省略号 */
    word-wrap: break-word; /* 允许在长单词或URL地址内部进行断行 */
    font-size: 1.2rem;
    margin: 20px 0;
  }
  .to-blog{
    width: 150px;
    height: 50px;
    color: #fba342;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0 auto;
  -webkit-box-shadow:
inset 0 0 0 1px #fba342 !important;
  box-shadow: inset 0 0 0 1px #fba342 !important;
  }
</style>


