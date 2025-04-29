<template>
  <div class="HomePage">
    <Header></Header>
    <div data-v-473dd3c9="" data-v-46027133="" class="homeBanner home-banner">
      <section data-v-473dd3c9="" class="hero__slider--section style2" style="position: relative;">
        <div class="video">
          <video id="v1" autoplay loop muted playsinline webkit-playsinline="true" style="width: 100%;height: 100%;">
            <source :src="'./static/images/bg.mp4'" type="video/mp4"  />
          </video>
        </div>
        <div data-v-473dd3c9="" class="hometop" style="position: relative;">
          <!-- 移动手机屏幕时展示 -->
          <div class="el-row new_bg" style="color:#fff">
            <div class="right right_top el-col-xs-24  el-col-sm-12">
              <swiper :options="swiperOption1"  class="carousel slide" style="width: 100%;margin: 0 auto 5px;border-radius: 12px;">
                <swiper-slide v-for="(item,index) in InitData.bannerList" :key="index">
                  <img @click="jumper" :src="InitData.setting.up_url+item" style="width: 100%;height: 100%;">
                </swiper-slide>
              </swiper>
            </div>
            <div class="left el-col-xs-24 el-col-sm-12 el-col-md-12">
              <h1 class="fw-bold" style="color: #000">{{ $t('head-bg[0]') }}</h1>
              <p style="font-size: 1.3rem;color: #fff">{{ $t('head-bg[1]') }}</p>
              <div class=" header__account">
                <ul v-if="!UserInfo"  class="d-flex align-items-center">
                  <li  class="right-extend_items header__account--items login-but_box" style="display: flex;justify-content: space-between;">
                    <a href="javascript:;" @click="$router.push('/login')" class="but but_signup btn-dark"> {{$t('head[3]')}} </a>
                    <a  href="javascript:;" @click="$router.push('/register')" class="but but_signup btn-dark">{{$t('head[2]')}} </a>
                  </li>
                </ul>
                <ul  class="d-flex align-items-center">
                  <li  class="right-extend_items header__account--items login-but_box" style="display: flex;justify-content: space-between;">
                    <a href="javascript:;" style="background: linear-gradient(90deg, #2ed7c1, #009d24)" @click="$router.push('/deposit')" class="but but_signup btn-dark" > {{$t('head[7]')}} </a>
                    <a  href="javascript:;" style="background: linear-gradient(90deg, #2ed7c1, #009d24)" @click="$router.push('/withdraw')" class="but but_signup btn-dark" >{{$t('head[8]')}} </a>
                  </li>
                </ul>
              </div>
              <div style="color: #04F220;">
                <p>{{ $t('head-bg[2]') }}</p>
                <p>{{ $t('head-bg[3]') }}</p>
                <p>{{ $t('head-bg[4]') }}</p>
              </div>
            </div>
            <!-- 大屏时展示 -->
            <div class="right right_down el-col-xs-24  el-col-sm-12">
              <swiper :options="swiperOption1"  class="carousel slide" style="width: 100%;margin: 0 auto 5px;border-radius: 12px;">
                <swiper-slide v-for="(item,index) in InitData.bannerList" :key="index">
                  <img @click="jumper" :src="InitData.setting.up_url+item" style="width: 100%;height: 100%;">
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
    <iframe class="iframe" scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ADOGEUSD%22%2C%22title%22%3A%22Dogecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ALTCUSD%22%2C%22title%22%3A%22Litecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABCHUSD%22%2C%22title%22%3A%22Bitcoin%20Cash%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AADAUSD%22%2C%22title%22%3A%22Cardano%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AXRPUSD%22%2C%22title%22%3A%22XRP%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22globalecrypto.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22kkminer.top%2F%22%7D" title="ticker tape TradingView widget" lang="en" style="z-index99;user-select: none; box-sizing: border-box; display: block; height: 50px; width: 100%;"></iframe>
    <van-notice-bar color="red" left-icon="volume-o" scrollable :text="InitData.notifications?InitData.notifications[0]:''" />

    <div class="section featured-section">
      <div class="section__head">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-24 col-xl-12 pl-0 pr-0">
<!--              <h6 class="mt-0 text-center"> {{$t('home[17]')}}</h6>-->
              <h3 class="mb-0 mx-auto text-center t-short-para miner_work_text">
                  {{$t('home[18]')}}
              </h3>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row justify-content-center">
            <div class="col-md-3 col-xl-24">
              <div class="miner_work_icon mx-auto">
                <div class="number fs-5 fw-bold">01</div>
                <img class="miner_work_image" :src="'./static/img/process1.png'" alt="">
              </div>
              <div class="miner_work_text">
                <h4 class="label">{{ $t('minerWorkText[0]') }}</h4>
                <div class="content mb-5">{{ $t('minerWorkText[1]') }}</div>
              </div>
            </div>
            <div class="col-md-3 col-xl-24">
              <div class="miner_work_icon mx-auto">
                <div class="number fs-5 fw-bold">02</div>
                <img class="miner_work_image" :src="'./static/img/process2.png'" alt="">
              </div>
              <div class="miner_work_text">
                <h4 class="label">{{ $t('minerWorkText[2]') }}</h4>
                <div class="content mb-5">{{ $t('minerWorkText[3]') }}</div>
              </div>
            </div>
            <div class="col-md-3 col-xl-24">
              <div class="miner_work_icon mx-auto">
                <div class="number fs-5 fw-bold">03</div>
                <img class="miner_work_image" :src="'./static/img/process3.png'" alt="">
              </div>
              <div class="miner_work_text">
                <h4 class="label">{{ $t('minerWorkText[4]') }}</h4>
                <div class="content mb-5">{{ $t('minerWorkText[5]') }}</div>
              </div>
            </div>
            <div class="col-md-3 col-xl-24">
              <div class="miner_work_icon mx-auto">
                <div class="number fs-5 fw-bold">04</div>
                <img class="miner_work_image" :src="'./static/img/process4.png'" alt="">
              </div>
              <div class="miner_work_text">
                <h4 class="label">{{ $t('minerWorkText[6]') }}</h4>
                <div class="content mb-5">{{ $t('minerWorkText[7]') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class=" featured-section" style="margin-bottom: 0;">
      <div class="container">
        <div style="text-align: center">
          <div class="h-grid-item" >
            <h2 >{{$t('newss[0]')}}</h2>
            <p style="margin-bottom: 0;">
              {{$t('newss[1]')}}
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="section" style="padding-top: 20px">
      <div class="container ">
        <div   class="plan-div" type="plans">
        <div class="plan-row el-row is-justify-center el-row--flex"
             style="margin-left: -10px; margin-right: -10px;">
          <div  class="mt-4 el-col  el-col-xs-24 el-col-sm-12 el-col-md-12 el-col-lg-8" v-for="(item,index) in listData" :key="index"
                style="padding-left: 10px; padding-right: 10px;">
<!--          <swiper :options="swiperOption" ref="mySwiper1" class="carousel" style="width: 100%;margin: 0 auto 5px;border-radius: 12px;">-->
<!--            <swiper-slide  v-for="(item,index) in listData" :key="index">-->
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
<!--            </swiper-slide>-->
<!--          </swiper>-->
<!--          <div class="swiper-button-prev"></div>&lt;!&ndash;左箭头。如果放置在swiper外面，需要自定义样式。&ndash;&gt;-->
<!--          <div class="swiper-button-next"></div>&lt;!&ndash;右箭头。如果放置在swiper外面，需要自定义样式。&ndash;&gt;-->
<!--          <div class="swiper-pagination"></div>&lt;!&ndash;分页器。如果放置在swiper外面，需要自定义样式。&ndash;&gt;-->
          </div>
        </div>
        </div>
      </div>
    </div>

    <section class="section featured-section">
      <div class="container">
        <div style="text-align: center">
          <div class="h-grid-item" >
            <h2 class="fw-bold">{{$t('newHome[3]')}}</h2>
          </div>
          <div class="el-row">
            <div class="el-col-xs-12 el-col-md-8 choose_us mb-2">
              <div class="image">
                <img :src="'./static/img/choose_us1.png'" alt="">
              </div>
              <div class="text mt-3">
                <h5 class="fw-bold h5">{{ $t('ChooseUs[0]') }}</h5>
                <p>{{ $t('ChooseUs[1]') }}</p>
              </div>
            </div>
            <div class="el-col-xs-12 el-col-md-8 choose_us mb-2">
              <div class="image">
                <img :src="'./static/img/choose_us21.png'" alt="">
              </div>
              <div class="text mt-3">
                <h5 class="fw-bold h5">{{ $t('ChooseUs[2]') }}</h5>
                <p>{{ $t('ChooseUs[3]') }}</p>
              </div>
            </div>
            <div class="el-col-xs-12 el-col-md-8 choose_us mb-2">
              <div class="image">
                <img :src="'./static/img/choose_us3.png'" alt="">
              </div>
              <div class="text mt-3">
                <h5 class="fw-bold h5">{{ $t('ChooseUs[4]') }}</h5>
                <p>{{ $t('ChooseUs[5]') }}</p>
              </div>
            </div>
            <div class="el-col-xs-12 el-col-md-8 choose_us mb-2">
              <div class="image">
                <img :src="'./static/img/choose_us4.png'" alt="">
              </div>
              <div class="text mt-3">
                <h5 class="fw-bold h5">{{ $t('ChooseUs[6]') }}</h5>
                <p>{{ $t('ChooseUs[7]') }}</p>
              </div>
            </div>
            <div class="el-col-xs-12 el-col-md-8 choose_us mb-2">
              <div class="image">
                <img :src="'./static/img/choose_us5.png'" alt="">
              </div>
              <div class="text mt-3">
                <h5 class="fw-bold h5">{{ $t('ChooseUs[8]') }}</h5>
                <p>{{ $t('ChooseUs[9]') }}</p>
              </div>
            </div>
            <div class="el-col-xs-12 el-col-md-8 choose_us mb-2">
              <div class="image">
                <img :src="'./static/img/choose_us6.png'" alt="">
              </div>
              <div class="text mt-3">
                <h5 class="fw-bold h5">{{ $t('ChooseUs[10]') }}</h5>
                <p>{{ $t('ChooseUs[11]') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<!--    <section class="section featured-section">-->
<!--      <div class="container">-->
<!--        <div style="text-align: center">-->
<!--          <div class="h-grid-item" >-->
<!--            <div>-->
<!--&lt;!&ndash;              <img :src="`./static/img/bbb-${$i18n.locale}.png`" style="width: 100%">&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

    <div class="section profit-section">
      <div class="container" style="max-width: 90%;margin: 0 auto;">
        <div class="row justify-content-center">
          <div class="col-md-8 col-xl-6">
            <h2 class="mt-0 text-center title-main">{{$t('calculator[0]')}}</h2>
            <p class="mb-0 mx-auto text-center t-short-para" style="font-size: 16px;">
              {{$t('calculator[1]')}}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="profit-calculator" style="margin: 0 auto;">
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
                    <select name="plan_id" style="width: 100%;" class="form-select form--select" v-model="selectM" @change="handelChange">
                      <option :value="item.id" v-for="(item,index) in listData" :key="index">
                        {{item.title}}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-8">
                  <div class="form-group">
                    <label class="d-inline-block mb-2 t-heading-font fw-md">{{$t('calculator[3]')}}</label>
                    <input style="width:100%" type="text" v-model="selectP.amount" name="amount" class="form-control form--control" autocomplete="off">
                    <code class="limit"></code>
                  </div>
                </div>
                <div class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-8">
                  <div class="form-group">
                    <label class="d-inline-block mb-2 t-heading-font fw-md">{{$t('calculator[4]')}}</label>
                    <input style="width: 100%" v-if="selectP.daily_rate !=''" type="text" v-model="((selectP.daily_rate)/100*selectP.amount*selectP.cycle).toFixed(4)" class="form-control form--control" readonly>
                    <input style="width: 100%" v-else type="text" class="form-control form--control">
                  </div>
                  <code class="msg">{{$t('calculator[5]')}}: {{selectP.daily_rate}}%</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="container">
          <div class="row justify-content-center">
            <!-- <div class="col-lg-6 col-md-5" style="overflow: hidden;">
              <div class="position-relative">
                <div class="text-center text-md-left"><img :src="'./static/images/ourm.jpg'" alt="" width="95%"
                                                           class="img-fluid" style="border-radius: 30px;"></div>
              </div>
            </div> -->
            <div class="el-col-24 el-col-lg-24 mt-5 mt-sm-0">
              <div class="section-title text-center">
                <h1 class="title fw-bold">{{$t('F&Q[0]')}}</h1>
                <div class="para-desc videoDiv text-center mx-auto">
                  <p>
                    {{$t('F&Q[1]')}}
                  </p>
                </div>
              </div>
            </div>
            <div class="el-col-24 el-col-lg-24" v-for="(v,i) in listDataQ" :key="i">
              <div class="problem_container mb-4 mt-sm-0" v-if="i <= 3 || fqShowMore">
                <div class="head mb-3">
                  <div class="left fw-bold">{{ v.title }}</div>
                  <div class="right" @click="fqSelectIndex = i + 1">
                    <van-icon color="#662282" :class="fqSelectIndex == i + 1 ? 'rotate' : ''" :name="fqSelectIndex !== i + 1 ? 'plus' : 'minus'" class="fs-5 fw-bold fq_icon"/>
                  </div>
                </div>
                <div class="content" v-show="fqSelectIndex === i + 1" v-html="v.content"></div>
              </div>
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="el-col-24 el-col-lg-24 mt-5 mt-sm-0 text-center fw-bold" @click="fqShowMore=!fqShowMore">
                    <span class="fs-5"  v-show="!fqShowMore">{{$t('F&Q[2]')}}</span>
                    <van-icon name="arrow-down" v-show="!fqShowMore"/>
                    <van-icon name="arrow-up" v-show="fqShowMore"/>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section  class="testimonial mt-4">
      <div  class="container"><h2 class="mt-0 text-center">{{$t('latest[0]')}}</h2>
        <section  class="section transaction pt-0">
          <div class="container">
               <div class="row is-justify-space-around el-row--flex">
                  <div class="el-col-xs-24 el-col-sm-10">
                    <div class="col-item">
                      <div class="item-head fw-bold fs-5 mx-auto"><span data-v-89578fbc="">{{$t('latest[1]')}}</span></div>
                      <article class="item-body">
                        <div class="seamless-warp">
                          <div>
                            <div style="overflow: hidden;">
                              <div class="title latest-style el-row--flex is-justify-space-between pl-2 pr-2">
                                  <div class="user col-4 text-left">{{ $t("latest[3]") }}</div>
                                  <div class="amt col-4 text-center">{{ $t("latest[4]") }}</div>
                                  <div class="time col-4 text-center">{{ $t("latest[5]") }}</div>
                              </div>
                              <van-swipe id="SwipeList2" style="height: 440px;width: 95%;margin:0 auto;background: rgba(0,0,0,0);border-radius: 1rem" height="90" vertical autoplay="3000" :show-indicators="false" :touchable="false">
                                <van-swipe-item v-if="item.type==1" v-for="(item,index) in InitData.fundList" :key="index" :index="index">
                                  <div class="card1">
                                    <div class="el-row--flex is-justify-space-between">
                                        <div class="user col-4 ">
                                          <img :src="`./static/head/${item.header}`" style="width: 30px;height: 30px;display:block;margin-right: 5px;">
                                          <div class="text-left fl-wap username">{{item.username}}</div>
                                        </div>
                                        <div class="amt col-4 text-center" style="color: #55d6dd;">{{item.money}} {{item.currency}}</div>
                                        <div class="time col-4 text-right">{{item.time}}</div>
                                    </div>
                                  </div>
                                </van-swipe-item>
                              </van-swipe>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div class="el-col-xs-24 el-col-sm-10">
                    <div class="col-item">
                      <div class="item-head fw-bold fs-5 mx-auto"><span data-v-89578fbc="">{{$t('latest[2]')}}</span></div>
                      <article class="item-body">
                        <div class="seamless-warp">
                          <div>
                            <div style="overflow: hidden;">
                              <div class="title latest-style el-row--flex is-justify-space-between pl-2 pr-2">
                                  <div class="user col-4 text-left">{{ $t("latest[3]") }}</div>
                                  <div class="amt col-4 text-center">{{ $t("latest[4]") }}</div>
                                  <div class="time col-4 text-center">{{ $t("latest[5]") }}</div>
                              </div>
                              <van-swipe id="SwipeList2" style="height: 440px;width: 95%;margin:0 auto;background: rgba(0,0,0,0);border-radius: 1rem" height="90" vertical autoplay="3000" :show-indicators="false" :touchable="false">
                                <van-swipe-item v-if="item.type==2" v-for="(item,index) in InitData.fundList" :key="index" :index="index">
                                  <div class="card1">
                                    <div class="el-row--flex is-justify-space-between">
                                        <div class="user col-4 text-left fl-wap">
                                          <img :src="`./static/head/${item.header}`" style="width: 30px;height: 30px;display:block;margin-right: 5px;">
                                          <div class="username">{{item.username}}</div>
                                        </div>
                                        <div class="amt col-4 text-center" style="color: #55d6dd;">{{item.money}} {{item.currency}}</div>
                                        <div class="time col-4 text-right">{{item.time}}</div>
                                    </div>
                                  </div>
                                </van-swipe-item>
                              </van-swipe>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
          </div>
        </section>
      </div>
    </section>
    <section class="section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="el-col-24 el-col-lg-24 mt-5 mt-sm-0">
              <div class="section-title text-center">
                <h1 class="title fw-bold">{{$t('home_comment[0]')}}</h1>
                <div class="para-desc videoDiv text-center mx-auto">
                  <p>
                    {{$t('home_comment[1]')}}
                  </p>
                </div>
              </div>
            </div>
            </div>
        </div>
        <div class="container">
          <div class="row justify-content-center">
              <div class="el-col-24 el-col-lg-24 mt-5 mt-sm-0 mb-5">
                <div class="comment_container">
                  <swiper ref="mySwiper" class="swiper" :options="commenSwiperOptions">
                      <swiper-slide v-for="el in Array.from({ length: 10 }, (_, i) => i)" :key="el">
                        <div class="comment_card">
                          <div class="comment_head">
                            <img :src="`./static/img/user/user_${el + 1}.png`" alt="">
                          </div>
                          <div class="msg mx-auto">
                            <div class="msg mx-auto">
                            <div class="name fw-bold">{{$t(`commentList[${el}].name`)}}</div>
                            <div class="content">{{$t(`commentList[${el}].text`)}}</div>
                          </div>
                          </div>
                        </div>
                      </swiper-slide>
                  </swiper>
                </div>
              </div>
              <!-- 第二個評論 -->
              <div class="el-col-24 el-col-lg-24 mt-5 mt-sm-0 mb-5">
                <div class="comment_container">
                  <swiper ref="mySwiper" class="swiper" :options="commenSwiperOptions">
                    <swiper-slide v-for="el in Array.from({ length: 10 }, (_, i) => i + 10)" :key="el">
                        <div class="comment_card">
                          <div class="comment_head">
                            <img :src="`./static/img/user/user_${el + 1}.png`" alt="">
                          </div>
                          <div class="msg mx-auto">
                            <div class="msg mx-auto">
                            <div class="name fw-bold">{{$t(`commentList[${el}].name`)}}</div>
                            <div class="content">{{$t(`commentList[${el}].text`)}}</div>
                          </div>
                          </div>
                        </div>
                      </swiper-slide>
                  </swiper>
                </div>
              </div>
            </div>
        </div>
      </section>
<!--    <div  class="box6">-->
<!--      <video :src="InitData.setting.up_url + '/upload/KKMiner.mp4?t=2'" muted controls playsinline style="width:100%;max-width: 900px;display: block;margin: 0 auto;"></video>-->
<!--    </div>-->
    <section class="section-space">
      <div class="container">
        <div class="section-head text-center" style="margin-top:2rem">
          <h3 class="mb-3">{{$t('payment[0]')}}</h3>
          <p v-html="$t('payment[1]',{WT:InitData.setting.web_title})"></p>
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
            </div>
          </div>
        </div>
    <!-- Our Partners -->
    <div class="section featured-section">
      <div class="section__head">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-24 col-xl-12 pl-0 pr-0">
              <h6 class="mt-0 text-center miner_work_title"> {{$t('partners[0]')}}</h6>
            </div>
          </div>
          <div class="row partners_list justify-content-between">
            <div class="el-col-md-5 el-col-xs-12 pl-0 pr-0 mb-5 mt-3" v-for="el in 10" :key="el">
              <img class="mx-auto" style="width: 80%;" :src="`./static/img/Partners/parent_${el}.png`" alt="">
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
    <!-- Bolg Section -->
    <section class="section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="el-col-24 el-col-lg-24 mt-5 mt-sm-0">
              <div class="section-title text-center">
                <h1 class="title fw-bold" style="color: #000;">{{$t('blog[3]')}}</h1>
                <div class="para-desc videoDiv text-center mx-auto">
                  <p>
                    {{$t('blog[4]')}}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row blog_list justify-content-between">
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
          <div class="justify-content-between">
            <div class="to-blog" @click="$router.push({
              path: '/blog'
            })">{{$t('blog[5]')}}</div>
          </div>
        </div>
    </section>
    <div v-if="showNotice" id="__BVID__247___BV_modal_outer_" style="position: absolute; z-index: 1040;">
      <div id="__BVID__247" role="dialog" aria-labelledby="__BVID__247___BV_modal_title_"
           aria-describedby="__BVID__247___BV_modal_body_" class="modal fade show" aria-modal="true"
           style="display: block;">
        <div class="modal-dialog modal-md modal-dialog-centered"><span tabindex="0"></span>
          <div id="__BVID__247___BV_modal_content_" tabindex="-1" class="modal-content">
            <header id="__BVID__247___BV_modal_header_" class="modal-header"><h5 id="__BVID__247___BV_modal_title_"
                                                                                 class="modal-title">{{msg_title}}</h5>
              <button type="button" aria-label="Close" class="close" @click="showNotice = false">×</button>
            </header>
            <div id="__BVID__247___BV_modal_body_" class="modal-body">
              <div class="payment-info" v-html="msg_content">
              </div>
            </div>
            <footer id="__BVID__247___BV_modal_footer_" class="modal-footer">
              <div  class="w-100" style="text-align: center;">
                <button @click="showNotice = false" type="button" class="btn ml-2 btn-primary">{{$t('confirm')}}</button>
              </div>
            </footer>
          </div>
          <span tabindex="0"></span></div>
      </div>
      <div id="__BVID__247___BV_modal_backdrop_" class="modal-backdrop"></div>
    </div>
    <div class="mask imageDiv" style="z-index: 111" v-if="showNoticeImg">
      <div style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;justify-items: center;">
        <div style="position: relative;">
          <van-image @click="jumpImg" :src="InitData.setting.up_url + imgnotice.cover_img" fit="widthFix"></van-image>
          <div class="close" @click="showNoticeImg = false" style="position: absolute;right: 0;top: 0rem;z-index: 999;">
            <van-icon name="cross" size="30" color="#000"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showDialog" id="123" style="position: absolute; z-index: 1040;">
      <div id="4325" role="dialog" aria-labelledby="__BVID__247___BV_modal_title_"
           aria-describedby="__BVID__247___BV_modal_body_" class="modal fade show" aria-modal="true"
           style="display: block;">
        <div class="modal-dialog modal-md modal-dialog-centered"><span tabindex="0"></span>
          <div id="43543" tabindex="-1" class="modal-content">
            <header id="435" class="modal-header"><h5 id="54654"
                                                                                 class="modal-title">{{$t('settle[6]')}}</h5>
              <button type="button" aria-label="Close" class="close" @click="showDialog = false">×</button>
            </header>
            <div id="5435" class="modal-body">
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
                    </div>
                  </div>
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
            <footer id="35436" class="modal-footer">
              <div  class="w-100">
                <button @click="buyProduct" type="button" class="btn float-left ml-2 btn-primary">{{$t('settle[10]')}}</button>
              </div>
            </footer>
          </div>
          <span tabindex="0"></span></div>
      </div>
      <div id="65765" class="modal-backdrop"></div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import common from "../mixins/common";
  import 'swiper/dist/css/swiper.css';
  export default {
    name: 'Home',
    mixins: [common],
    inject: ['reloadHtml'],
    components: {
      swiper, swiperSlide,
    },

    data() {
      return {
        selectM:'',
        number:1,
        detailData:{},
        showDialog:false,
        password:'',
        money:'',
        showPass: false,
        showMore:false,
        selectP:{},
        showIndex:0,
        youtube:'',
        date:'',
        showNotice:false,
        msg_title:'',
        msg_content:'',
        listData:[],
        swiperOption: {
          loop: true,  // 是否循环轮播
          loopedSlides:3,
          slidesPerView: 3,  // 可是区域内可展示多少个块
          spaceBetween: 10,  // 块之间间隔距离
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
        swiperOption1: {
          loop: true,  // 是否循环轮播
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          },
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
        intv:null,
        showNoticeImg:false,
        imgnotice:{
          cover_img:""
        },
        listDataQ: [],
        listDataBlog: [],
        isLoad: false,
        isFinished: false,
        isRefresh: false,
        pageNo: 1,
        data_current_page:"1",
        data_total_page:"1",
        // 常见问题选中索引
        fqSelectIndex: 0,
        fqShowMore: false,
        commenSwiperOptions: {
          loop: true,
          speed: 2500,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          },
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            1024: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }
      }
    },

    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      },
      swiper1() {
        return this.$refs.mySwiper.swiper;
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
      var date = new Date();
      var nowMonth = date.getMonth() + 1;
      var strDate = date.getDate();
      var seperator = "-";
      if (nowMonth >= 1 && nowMonth <= 9) {
        nowMonth = "0" + nowMonth;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
      this.date = nowDate;

      this.getListData('init');
    },
    mounted() {
      let that = this;
      that.resize();
      window.onresize = () => {
        that.resize();
      };
    },
    activated() {

    },
    destroyed() {
    },
    methods: {
      handelChange() {
        let id = this.selectM;
        this.selectP = this.listData.filter(item=>item.id==id)[0];
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
        this.number = 1;
        this.money = this.detailData.amount;
        this.showDialog = true;
      },
      resize() {
        let that = this;
        let w = window.innerWidth;
        console.log(w)
        if (w < 750) {
          that.swiper1.params.loopedSlides = 1;
          that.swiper1.params.slidesPerView = 1;
          that.swiper1.params.spaceBetween = 0;
        } else {
          that.swiper1.params.loopedSlides = 3;
          that.swiper1.params.slidesPerView = 3;
          that.swiper1.params.spaceBetween = 10;
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
      },
      jumper() {
        if (this.UserInfo) {
          this.$router.push('/dashboard');
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
    }
  }
</script>
<style scoped>
  .hero-image img {
    border-radius: 20px
  }

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
    iframe {
      height: 78px !important;
    }
    .hero-wrap-2 {
      padding-top:30px
    }
    .feature-card {
      width: 90%;
      margin: 0 auto;
    }
  }

  @media(min-width: 992px) {
    .hero-wrap-2 {
      padding-top:50px
    }
  }

  .hero-btns {
    width: 100%
  }

  .nfts-word {
    color: #0099fa
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
  .card {
    overflow: hidden;
    background: rgba(0,0,0,0);
  }
  .el-col-24 {
    width: 100%;
  }
  .el-row:after, .el-row:before {
    display: table;
  }
  .transaction .col-item .item-head {
    height: 47px;
    /*background-image: linear-gradient(to right, #36e4f5 0%, #096553 100%);*/
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .el-col-10 {
    width: 41.66667%;
  }
  .el-row--flex {
    display: flex;
  }
  .el-row--flex.is-justify-space-around {
    justify-content: space-around;
  }
  .transaction .col-item .item-body .card1 {
    border-bottom: 1px solid #ccc;
    padding: 7px 0;
  }
  .transaction .col-item .item-body {
    height: 480px;
    background: #fff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);

    border-radius: 0 0 6px 6px
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
  .video-box {
    z-index: -1;
  }

  .video-box .video-background {
    position: absolute;
    left: 50%;
    top:  50%;
    /*保证视频内容始终居中*/
    transform: translate(-50%, -50%);
    /*width: 100%;*/
    /*height: 100%;*/
    /*保证视频充满屏幕*/
    object-fit: cover;
  }
  .hero {
    overflow: hidden;
  }
  .plan-card__head {
    margin-top: 0.5rem;
    font-weight: bold;
  }
  .t-link {
    font-size: 1.3rem;
    font-weight: bold;
    color: #0a0a1a;
    text-shadow: 0 2px 4px rgba(0, 0, 0, .08);
    background: #00FFFF;
    border: 1px solid #000;
  }
  .feature-card {
    width: 100%;
    padding: 30px 15px;
    position: relative;
    border: 1px solid rgba(240, 19, 19, .5);
    border-radius: 20px;
    background-color: #fff;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    z-index: 1;
    height: 14rem;
  }
  .feature-card {
    border: 1px solid rgba(21, 171, 191, .5019607843137255);
    margin-top: 10px;
  }
  .rounded {
    border-radius: .25rem !important;
  }
  .stat-card__icon {
    width: 70px;
    height: 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 36px;
    line-height: 1;
    background-color: #f01313;
    color: #fff;
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
  .feature-card__icon, .stat-card__icon {
    background: #fff !important;
  }
  .la, .lab, .lad, .lal, .lar, .las {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      display: inline-block;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      line-height: 1;
    }
  .feature-card__icon-float {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: clamp(4rem,8vw + 1rem,8rem);
    line-height: 1;
    opacity: .05;
    z-index: -1;
  }
  .plan-card {
    padding: 10px;
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
    box-shadow: 0 0 24px 8px rgba(0, 0, 0, .1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px;
    cursor: pointer;
    font-size: 29px;
    transition: all .3s ease;
    padding: 15px;
    min-width: fit-content;
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

  /* 20250421新增 */
  .fw-bold{
    font-weight: 700!important;
  }
  .fs-5{font-size:1.25rem!important}

  @keyframes rotate180 {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(180deg);
            }
    }

  .rotate {
    animation: rotate180 0.5s linear; /* 应用动画，2 秒完成一次旋转，线性变化，无限循环 */

  }

 .fl-wap {
  /*flex-wrap:wrap;*/
  word-wrap: break-word;
   word-break: break-word;
 }


  .justify-content-center .miner_work_title{
    /*background: linear-gradient(90deg, #fffc00 35%, #db36a4 60%);*/
    /*background-clip: text;*/
    /*color: transparent;*/
    font-weight: 700;
    font-size: 2rem !important;
    color: #000000;
  }
  .justify-content-center .miner_work_text{
    width: 100%;
    margin: 20px auto 20px auto;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    padding: 0;
    color: var(--bs-heading-color);
    text-align: center;
  }
  .justify-content-center .miner_work_text.label{

  }
  .justify-content-center .miner_work_icon{
    position: relative;
    background-color: #16141c;
    border-radius: 1rem;
    transition: all 0.3s ease;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55%;
    padding: 25px 10px;
  }
  .justify-content-center .miner_work_icon .number{
    position: absolute;
    width: 40px;
    height: 45px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    top:-25px;
    border-radius: 4px;
    background-color: #242227 !important;
    color: #fabb04;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
  }

  .justify-content-center .miner_work_icon .miner_work_image{
    transition: transform 0.6s ease;
    transform-origin: center center;
    width: 150px !important;
    height: 150px !important;
    object-fit: contain;
    padding: 15px 5px !important;
    transform-style: preserve-3d; /* 保持 3D 变换效果 */
  }

  /* 鼠标悬停时，图片水平翻转 180 度 */
  .justify-content-center .miner_work_icon:hover .miner_work_image {
          transform: rotateY(180deg);
    }

  .problem_container{
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 1.5rem 2rem;
    border-radius: 6px;
    background-color: #efefef;
    -webkit-transition: all .3s;
    transition: all .3s;
  }
  .problem_container .head{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .problem_container .head .right{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-left: 3rem;
    background-color: #ccc;
  }
   .problem_container .head .right .fq_icon{
    color: #662282;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
  }

  .latest-style{
    background: #eee;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.12);
  }
  .choose_us{
    height: 300px;
  }
  .choose_us .image img{
    width: 5rem;
    height: 5rem;
  }
  .choose_us .text{
    max-width: 90%;
    margin: 10px auto;
  }
  .comment_card{
    background: -webkit-gradient(linear, left top, left bottom, from(#afceed), to(#3d4355)) padding-box, -webkit-gradient(linear, left top, left bottom, color-stop(2.95%, #a3631f), color-stop(54.04%, #f9f790), color-stop(105.51%, #a3631f)) border-box;
    background: linear-gradient(#afceed, #3d4355) padding-box, linear-gradient(180deg, #a3631f 2.95%, #f9f790 54.04%, #a3631f 105.51%) border-box;
    border: 2px solid transparent;
    padding: 10px 8px 10px 0;
    border-radius: 15px;
    position: relative;
    margin-left: 32px;
    position: relative;
    height: 200px;
  }
  .comment_card .comment_head{
    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    background: -webkit-gradient(linear, left top, left bottom, from(#6fadf0), to(#7695f9)) padding-box, -webkit-gradient(linear, left top, left bottom, color-stop(2.95%, #a3631f), color-stop(54.04%, #f9f790), color-stop(105.51%, #a3631f)) border-box;
    background: linear-gradient(#6fadf0, #7695f9) padding-box, linear-gradient(180deg, #a3631f 2.95%, #f9f790 54.04%, #a3631f 105.51%) border-box;
    border: 2px solid transparent;
    margin-left: -32px;
    left: 0px;
    top: 10px;
  }
  .comment_card .comment_head img{
    width: 100%;
    height: 100%;
  }
  .comment_card .msg{
    width: 70%;
    height: 100%;
  }
  .comment_card .msg .name{
    color: #fff;
  }
  .comment_card .msg .content{
    height: 150px;
    overflow: hidden;
  }
  /* Blog */
  .blog_card{
    padding: 20px 10px;
    border-radius:5px;
    background-color: #fff;
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
    color: #000;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0 auto;
  -webkit-box-shadow:
inset 0 0 0 1px #18a028 !important;
  box-shadow: inset 0 0 0 1px #18a028 !important;
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
  .video{
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
  .video video {
    min-height: 40rem;
    object-fit: cover;
  }
  .video video>>>source{
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
  }
  .hometop {
    min-height: 38rem;
    /*background: #1f2033;*/
    padding: 50px 80px;
  }
  @media only screen and (max-width: 1024px) {
    .hometop {
      min-height:34rem;
      padding: 1rem;
    }
  }

  @media (min-width: 768px) {
    .right_top{
      display: none;
    }
    .right_down{
      display: block;
    }
  }
  @media (max-width: 768px) {
    .right_top{
      display: block;
    }
    .right_down{
      display: none;
    }
  }

  .user {
    display: flex;
    align-items: center;
  }
  .bg-danger {
    background: linear-gradient(90deg, #ddb443, #009d24) !important;
  }
  .username {
    font-size: 0.75rem;
  }
  @media only screen and (min-width: 992px) {
    .el-col-md-5 {
      width: 20%;
    }
  }
</style>
