<template>
  <div class="HomePage">
    <Header></Header>
    <header class="has-header-main header-bg" style="background: url('./static/img/header-bg.jpg')">
      <div  class="hero-wrap hero-wrap-2 section-space" style="position: relative;">
<!--        <video id="v1" autoplay loop muted>-->
<!--          <source :src="'./static/images/bg.mp4?t=1'" type="video/mp4"  />-->
<!--        </video>-->
        <div  class="container header_content_bg">
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
<!--                <swiper-slide>-->
<!--                  <div  class="card">-->
<!--                    <div  class="hero-image">-->
<!--                      <img  :src="'./static/img/banner-1.ba628f1c.jpg'" alt="" class="w-100"></div>-->
<!--                  </div>-->
<!--                </swiper-slide>-->
<!--                <swiper-slide>-->
<!--                  <div  class="card">-->
<!--                    <div  class="hero-image">-->
<!--                      <img  :src="'./static/img/banner-2.c91f96b0.jpg'" alt="" class="w-100"></div>-->
<!--                  </div>-->
<!--                </swiper-slide>-->
<!--                <swiper-slide>-->
<!--                  <div  class="card">-->
<!--                    <div  class="hero-image">-->
<!--                      <img  :src="'./static/img/banner-3.dd9813bd.jpg'" alt="" class="w-100"></div>-->
<!--                  </div>-->
<!--                </swiper-slide>-->
<!--                <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" slot="pagination" >-->
<!--                </div>-->
              </swiper>
            </div>
            <div  class="col-lg-6 col-md-6">
              <div  class="hero-content pb-0 pt-md-0 pe-lg-8" >
                <h1  class="hero-title mb-8" >
                  {{$t('home1[0]')}}
                  <span  class="nfts-word">{{$t('home1[1]')}}</span> {{$t('home1[2]')}}</h1>
                <p  class="hero-text mb-4 pb-1" style="color:#000;"> {{$t('home1[3]')}}</p>
                <ul  class="btns-group hero-btns justify-content-md-start justify-content-center">
                  <li>
                    <a href="javascript:;" class="btn btn-lg btn-dark" @click="$router.push('/register')">{{$t('header[14]')}}</a>
                    <a href="javascript:;" class="btn btn-lg btn-dark" @click="$router.push('/login')">{{$t('header[13]')}}</a>
                  </li>
                </ul>
                <p  class="hero-text pb-1" style="color:red;font-size: 1.2rem;">{{$t('home[2]')}}</p>
<!--                <p  class="hero-text mb-4 pb-1" style="color:red;font-size: 1.2rem;">{{$t('home[1]')}}</p>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div style="width: 100%;">
      <iframe class="iframe" scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ADOGEUSD%22%2C%22title%22%3A%22Dogecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ALTCUSD%22%2C%22title%22%3A%22Litecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABCHUSD%22%2C%22title%22%3A%22Bitcoin%20Cash%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AADAUSD%22%2C%22title%22%3A%22Cardano%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AXRPUSD%22%2C%22title%22%3A%22XRP%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22normal%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22globalecrypto.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22oxminer.com%2F%22%7D" title="ticker tape TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: 58px; width: 100%;"></iframe>
    </div>
    <van-notice-bar color="red" left-icon="volume-o" scrollable :text="InitData.notifications?InitData.notifications[0]:''" />
    <!-- <div class="h-[662px] xl:h-[700px]"
         style="background-image: url('./static/images/blockchain_bg.webp'); background-size: cover; background-position: center center;">
      <div class="h-full mx-auto max-w-[1200px] px-5 box-content xl:px-8">
        <div class="flex flex-col h-full max-w-[620px] justify-center"><h3
          class="font-bold font-helvetica text-[#fff] text-[30px] leading-9 xl:text-[45px] xl:leading-[55px]">
          {{$t('newhome[0]')}}</h3>
          <p
            class="font-roboto-regular mt-6 text-[#fff] text-[14px] leading-[22px] xl:mt-12 xl:text-[16px] xl:leading-[30px]">
            {{$t('newhome[1]')}}
          </p></div>
      </div>
    </div> -->
    <div class="wrapper_A-XAV" style="margin-top: 1rem;">
      <div class="scheme1_27wht"><div class="scheme1Item_gE_r4 schemeItem1_1L0vC" @click="$router.push('/register')" style="background-image: url(./static/images/ht1.png);background-size: 50px;">
        {{$t('newhome[2]')}}<br><span style="font-size: 14px;">{{$t('newhome[3]')}}</span>
      </div> <div class="schemeArrow_2y4_o"></div>
        <div class="scheme1Item_gE_r4 schemeItem2_12tqw" @click="$router.push('/contracts')" style="background-image: url(./static/images/ht2.png);background-size: 50px;">
          {{$t('newhome[4]')}}<br><span style="font-size: 14px;">{{$t('newhome[5]')}}</span>
      </div> <div class="schemeArrow_2y4_o"></div>
        <div class="scheme1Item_gE_r4 schemeItem3_2eJTU" style="background-image: url(./static/images/ht3.png);background-size: 50px;">
          {{$t('newhome[6]')}}<br><span style="font-size: 14px;">{{$t('newhome[7]')}}</span>
      </div>
<!--        <div class="schemeArrow_2y4_o"></div>-->
<!--        <div class="scheme1Item_gE_r4 schemeItem4_2VqRj" style="background-image: url(./static/images/schemeItem4.60494d9.svg);">-->
<!--        Get paid in bitcoins every day<br><span style="font-size: 14px;">Choose your mining contract</span>-->
<!--      </div>-->
      </div>
    </div>



<!--    <section class="section-space trending-section" id="contracts" style="background: rgb(247, 249, 251);">-->
<!--      <div class="container">-->
<!--        <div class="section-head text-center">-->
<!--          <h2 class="mb-3">{{$t('home1[13]')}}</h2>-->
<!--          <p>{{$t('home1[14]')}}</p>-->
<!--        </div>-->
<!--        <div class="row g-4 gy-md-gs">-->
<!--          <div class="col-xl-6 col-lg-6 col-sm-12" v-for="(item,index) in listData" :key="index">-->
<!--            <div  class="product">-->
<!--              <div  class="row g-3 g-md-6">-->
<!--                <div  class="el-col-11_5">-->
<!--                  <div  class="product-image">-->
<!--                    <img  :src="InitData.setting.up_url + item.icon"  class="product-img-top" alt="" title="">-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div  class="el-col-12_5">-->
<!--                  <div  class="row g-2 g-md-4" style="width: 100%; height: 100%;">-->
<!--                    <div  class="col-6 info-item">-->
<!--                      <div  class="price-title">{{$t('product[2]')}}</div>-->
<!--                      <div  class="price-value">{{item.cycle}} {{$t('product[18]')}}</div></div>-->
<!--                    <div  class="col-6 info-item" style="text-align: right;">-->
<!--                      <div  class="price-title">{{$t('product[0]')}}</div>-->
<!--                      <div  class="price-value">${{item.amount}}</div></div>-->
<!--                    <div  class="col-12 info-item">-->
<!--                      <div  class="price-title">{{$t('product[3]')}}</div>-->
<!--                      <div  class="price-value">${{(item.daily_rate/100*item.amount).toFixed(2)}}</div></div>-->
<!--                    <div  class="col-12 info-item">-->
<!--                      <div  class="price-title">{{item.cycle}} {{$t('product[21]')}}</div>-->
<!--                      <div  class="price-value">${{item.amount}} + ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*item.cycle).toFixed(2))}}</div></div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div  class="row g-2 g-md-4">-->
<!--                <div  class="el-col-11_5 product-title">-->
<!--                  <div > {{item.title}}</div>-->
<!--                  <div  class="progress-wrap">-->
<!--                    <div  class="left">{{$t('product[22]')}}</div>-->
<!--                    <div  class="right">-->
<!--                      <div  class="progress-box">-->
<!--                        <div  class="progress" role="progressbar" aria-label="Animated striped example" :aria-valuenow="item.progress" aria-valuemin="0" aria-valuemax="100">-->
<!--                          <div  :class="'progress-bar progress-bar-striped progress-bar-animated '+(item.progress>=100?'bar-color_over':'bar-color_proceed')" :style="'width: '+item.progress+'%'">{{item.progress}}%</div></div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div  class="sold-out-content">{{$t('product[23]')}}</div></div>-->
<!--                <div  class="el-col-12_5">-->
<!--                  <div  class="product-but d-flex align-items-center">-->
<!--                    <button  href="javascript:;" @click="orderNow(item)"  class="btn-dark btn" style="opacity: 1;">{{$t('product[24]')}}</button>-->
<!--                    <button  href="javascript:;" @click="$router.push(`/productDetail?id=${item.id}`)" class="btn-outline-dark btn" style="margin-left: 0.375rem;">{{$t('product[25]')}}</button></div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
    <div class="section">
      <div class="container">
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
                <div class="badge-card">{{item.title}}</div>
                <div class="pricing notranslate">
                  <h1>${{parseFloat(item.amount)}}</h1>
                  <p>/ {{item.cycle}}
                    {{$t('product[15]')}}
                  </p>
                </div>
                <div class="mt-0  text-left" style="color: #000000;font-weight: normal;">
                  <van-icon name="passed" color="green" style="margin-right: 6px;"/>{{$t('product[2]')}}: {{item.cycle}} {{$t('product[15]')}}
                </div>
                <div class="mt-0  text-left" style="color: #000000;font-weight: normal;">
                  <van-icon name="passed" color="green" style="margin-right: 6px;"/>{{$t('product[9]')}}: {{item.miner}}
                </div>
                <!--                    <div class="mt-0  text-left" style="color: #000000">-->
                <!--                      <van-icon name="passed" color="green" style="margin-right: 6px;"/>{{$t('product[8]')}}: {{item.hash_power}}-->
                <!--                    </div>-->
                <!--                    <div class="mt-0  text-left" style="color: #000000">-->
                <!--                      <van-icon name="passed" color="green" style="margin-right: 6px;"/>{{item.amount}} {{InitData.currency}}/{{item.cycle}} {{$t('product[15]')}}-->
                <!--                    </div>-->
                <div class="mt-0  text-left" style="color: #000000;font-weight: normal;">
                  <van-icon name="passed" color="green" style="margin-right: 6px;"/>{{$t('product[0]')}}: ${{item.amount}}
                </div>
              </div>
              <div class="pt-2 text-left" style="color: red">
                <div class="mt-0  text-left"><van-icon name="passed" color="green" style="margin-right: 6px;"/> {{$t('settle[2]')}}: ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*1).toFixed(2))}}</div>
                <div class="mt-0  text-left"><van-icon name="passed" color="green" style="margin-right: 6px;"/> {{$t('settle[3]')}}: ${{item.amount}} + ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*item.cycle).toFixed(2))}}</div>
              </div>
              <div class="pt-2 text-left" style="color: #000000">
                <div class="mt-0  text-left"><van-icon name="passed" color="green" style="margin-right: 6px;"/>{{$t('settle[0]')}}:{{item.type==1?$t('product[7]'):$t('product[17]')}}</div>
              </div>
              <div class="bonus" v-if="item.amount!=12">
                <div class="label">{{$t('product[10]')}}</div>
                <ul class="plan-referral justify-content-center ">
                  <div class="single-referral" v-for="(aa,i) in item.affiliate_bonus">
                    <span>{{aa}} %</span>
                    <div>{{$t('affiliates[13]')}} {{(i+1)}}</div>
                  </div>
                </ul>
              </div>
              <div v-else style="color:#000;height: 94px;">
                {{$t('ppp[0]')}}
              </div>
              <!--                  <div class="mt-1 text-center">-->
              <!--                    <div v-if="item.progress>=100" class="t-link btn btn--dark btn--lg rounded-pill investBtn">-->
              <!--                      {{$t('product[13]')}}-->
              <!--                    </div>-->
              <!--                    <a v-else href="javascript:;" @click="$router.push(`/productDetail?id=${item.id}`)" class="t-link btn btn--dark btn--lg rounded-pill investBtn">-->
              <!--                      {{$t('home[35]')}}-->
              <!--                    </a>-->
              <!--                  </div>-->
              <div class="mt-1 text-center" style="display: flex;justify-content: space-between">
                <a  href="javascript:;" style="width: 100%;height: fit-content;padding: 10px;margin: 5px;background: #23cff1" @click="goDetail(item)" class="t-link btn btn--base btn--lg rounded-pill investBtn">
                  {{$t('settle[4]')}}
                </a>
                <div v-if="item.progress>=100" style="width: 100%;height: fit-content;padding: 10px;margin: 5px;background: #23cff1" class="t-link btn btn--base btn--lg rounded-pill investBtn">
                  {{$t('product[13]')}}
                </div>
                <a v-else href="javascript:;" style="width: 100%;height: fit-content;padding: 10px;margin: 5px;background: #23cff1" @click="orderNow(item)" class="t-link btn btn--base btn--lg rounded-pill investBtn">
                  {{$t('buy[0]')}}
                </a>
              </div>
              <div class="mt-2 text-center">
                <van-progress :percentage="item.progress" stroke-width="8" track-color="#ccc" color="linear-gradient(to right, #eee, #23cff1)"/>
              </div>
              <img v-if="item.progress>=100" :src="'./static/images/out.png'" style="position: absolute;bottom: 3rem;right: 1rem;width: 8rem;">
            </div>
          </div>
        </div>
      </div>
    </div>
    <section style="margin-top: 2rem;">
      <div class="container">
        <div class="text-center">
          <h2 class="mb-3">{{$t('newhome[8]')}}</h2>
          <p>{{$t('newhome[9]')}}</p>
        </div>
      </div>
    </section>
    <div class="uk-cn-actions">
      <div class="uk-grid uk-grid-large uk-child-width-1-3@m" data-uk-grid="">
        <div class="uk-vix-center uk-first-column">
          <div class="uk-vix-top">
            <div class="in-icon-vix">
              <img :src="'./static/images/ys1.png'">
            </div>
          </div>
          <div class="uk-vix-content">
            <h4>{{$t('newhome[10]')}}</h4>
            <p>{{$t('newhome[11]')}}</p>
          </div>
        </div>
        <div class="uk-vix-center">
          <div class="uk-vix-top">
            <div class="in-icon-vix">
              <img :src="'./static/images/ys2.png'">
            </div>
          </div>
          <div class="uk-vix-content">
            <h4>{{$t('newhome[12]')}}</h4>
            <p>{{$t('newhome[13]')}}</p>
          </div>
        </div>
        <div class="uk-vix-center">
          <div class="uk-vix-top">
            <div class="in-icon-vix">
              <img :src="'./static/images/ys3.png'">
            </div>
          </div>
          <div class="uk-vix-content">
            <h4>{{$t('newhome[14]')}}</h4>
            <p>{{$t('newhome[15]')}}</p>
          </div>
        </div>
      </div>
      <div class="uk-grid uk-grid-large uk-child-width-1-3@m" data-uk-grid="">
        <div class="uk-vix-center uk-first-column">
          <div class="uk-vix-top">
            <div class="in-icon-vix">
              <img :src="'./static/images/ys4.png'">
            </div>
          </div>
          <div class="uk-vix-content">
            <h4>{{$t('newhome[16]')}}</h4>
            <p>{{$t('newhome[17]')}}</p>
          </div>
        </div>
        <div class="uk-vix-center">
          <div class="uk-vix-top">
            <div class="in-icon-vix">
              <img :src="'./static/images/ys5.png'">
            </div>
          </div>
          <div class="uk-vix-content">
            <h4>{{$t('newhome[18]')}}</h4>
            <p>{{$t('newhome[19]')}}</p>
          </div>
        </div>
        <div class="uk-vix-center">
          <div class="uk-vix-top">
            <div class="in-icon-vix">
              <img :src="'./static/images/ys6.png'">
            </div>
          </div>
          <div class="uk-vix-content">
            <h4>{{$t('newhome[20]')}}</h4>
            <p>{{$t('newhome[21]')}}</p>
          </div>
        </div>
      </div>
    </div>

<!--    fundlist-->
    <section class="transaction py-120" style="margin-top: 4rem;">
      <div class="container max960">
        <div class="box-wrapper">
          <div class="title-main">{{$t('latest[0]')}}</div>
          <div class="row gy-4">
            <div class="col-lg-6">
              <h4 class="transaction__title mb-md-4 mb-3 text-center">{{$t('latest[1]')}}</h4>
              <div class="transaction__content overflow-x-auto" style="border: 1px solid rgb(13,110,253);border-radius: 10px;width: 90%;margin: 0 auto;">
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
                        <van-swipe id="SwipeList2" style="height: 400px;width: 95%;margin:0 auto;background: rgba(0,0,0,0);border-radius: 1rem" height="60" vertical autoplay="3000" :show-indicators="false" :touchable="false">
                          <van-swipe-item v-if="item.type==1" v-for="(item,index) in InitData.fundList" :key="index" :index="index">
                            <div class="card1">
                              <div class="aaa3 d-flex align-items-center justify-content-between"
                                   style="padding-top: 2px; padding-bottom: 2px;">
                                <div class="card__title">
                                  <div style="display: flex;width: 100%;align-items: center;font-size: 12px;">
                                    <img :src="`./static/head/${item.header}`" style="width: 30px;height: 30px;display:block;margin-right: 5px;">
                                    {{item.username}}
                                  </div>
                                </div>
                                <div class="card__subtitle" style="color: rgb(13,110,253);padding: 0 5px;text-align: center;display: flex;align-items: center;justify-content: center;">{{item.money}} {{item.currency}}
                                </div>
                                <div class="card__time">{{item.time}}</div>
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
            <div class="col-lg-6">
              <h4 class="transaction__title mb-md-4 mb-3 text-center">{{$t('latest[2]')}}</h4>
              <div class="transaction__content overflow-x-auto" style="border: 1px solid rgb(13,110,253);border-radius: 10px;width: 90%;margin: 0 auto;">
                <table class="style-two scroll-table table">
                  <thead>
                  <tr>
                    <th>{{$t('latest[3]')}}</th>
                    <th>{{$t('latest[4]')}}</th>
                    <th>{{$t('latest[5]')}}</th>
                  </tr>
                  </thead>
                </table>
                <van-swipe id="SwipeList1" style="width:95%;height: 400px;margin:0 auto;background: rgba(0,0,0,0);border-radius: 1rem" height="60" vertical autoplay="3000" :show-indicators="false" :touchable="false">
                  <van-swipe-item v-if="item.type==2" v-for="(item,index) in InitData.fundList" :key="index" :index="index">
                    <div class="card1">
                      <div class="aaa3 d-flex align-items-center justify-content-between"
                           style="padding-top: 2px; padding-bottom: 2px;">
                        <div class="card__title">
                          <div style="display: flex;width: 100%;align-items: center;font-size: 12px;align-content: center;">
                            <img :src="`./static/head/${item.header}`" style="width: 30px;height: 30px;display:block;margin-right: 5px;">
                            {{item.username}}
                          </div>
                        </div>
                        <div class="card__subtitle" style="color: rgb(13,110,253);padding: 0 5px;text-align: center;display: flex;align-items: center;justify-content: center;">{{item.money}} {{item.currency}}
                        </div>
                        <div class="card__time">{{item.time}}</div>
                      </div>
                    </div>
                  </van-swipe-item>
                </van-swipe>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


    <div class="section faq-section" style="margin-top: 2rem">
      <div class="container max960">
        <div class="box7">
          <div class="">
            <div class="title">{{$t('faq[0]')}}</div>
            <div class="faq-list">
              <div class="faq-item" v-for="(item,index) in listDataQ" :key="index" v-if="index<3">
                <div @click="showIndex = index"  class="faq-title">
                  <div class="name">{{item.title}}</div>
                  <div class="right-icon"><i :class="showIndex==index?'el-icon-minus on':'el-icon-plus'"></i></div>
                </div>
                <div class="faq-content" v-show="showIndex==index" v-html="item.content">
                </div>
              </div>
              <div class="faq-item" v-if="showMore && index>=3" v-for="(item,index) in listDataQ" :key="index">
                <div @click="showIndex = index"  class="faq-title">
                  <div class="name">{{item.title}}</div>
                  <div class="right-icon"><i :class="showIndex==index?'el-icon-minus on':'el-icon-plus'"></i></div>
                </div>
                <div class="faq-content" v-show="showIndex==index" v-html="item.content">
                </div>
              </div>

            </div>
            <div class="text-center" style="font-size: 1.6rem;margin-top: 2rem;color: #000;" v-if="!showMore" @click="showMore =true">
              {{$t('clickmore[0]')}}<van-icon name="arrow-down" />
            </div>
            <div style="text-align: center;font-size: 2rem;margin-top: 2rem;" v-if="showMore" @click="showMore =false">
              <van-icon name="arrow-up" />
            </div>
          </div>

        </div>
      </div>
    </div>
    <section style="margin-top: 2rem;">
      <div class="container">
        <div class="text-center">
          <h2 class="mb-3">{{$t('newhome[22]')}}</h2>
          <div style="color: #000;">{{$t('newhome[23]')}}</div>
          <div style="color: #000;">{{$t('newhome[24]')}}</div>
          <div style="color: #000;">{{$t('newhome[25]')}}</div>
          <div style="color: #000;">{{$t('newhome[26]')}}</div>
          <img :src="'./static/images/tmp2.png?t=1'" style="width: 100%;">
        </div>
      </div>
    </section>
    <section class="section-space">
      <div class="container">
        <div class="section-head text-center">
          <h2 class="mb-3">{{$t('home1[25]')}}</h2>
          <p v-html="$t('home1[26]',{WT:InitData.setting.web_title})"></p>
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
                <img :src="'./static/images/DOGE.png'" class="svg-icon">
              </div>
              <div class="item">
                <img :src="'./static/images/SOL.png'" class="svg-icon">
              </div>
              <div class="item">
                <img :src="'./static/images/XRP.png'" class="svg-icon">
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
      </div>
    </section>
<!--    <section class="section-space" style="background: rgb(247, 249, 251);">-->
<!--      <div class="container">-->
<!--        <div class="section-head text-center">-->
<!--          <h2 class="mb-3" v-html="$t('home1[27]')"></h2>-->
<!--        </div>-->
<!--        <div v-html="$t('home1[28]',{WT:InitData.setting.web_title})">-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
    <div class="mask" style="display:block;" v-if="showNotice">
      <div class="modal" style="display:block;">
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
    <div class="mask imageDiv" style="z-index: 111;display:block;" v-if="showNoticeImg">
      <div style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;justify-items: center;">
        <div style="position: relative;">
          <van-image @click="jumpImg" :src="InitData.setting.up_url + imgnotice.cover_img" fit="widthFix"></van-image>
          <div class="close" @click="showNoticeImg = false" style="position: absolute;right: 0;top: 0;z-index: 999;">
            <van-icon name="cross" size="30" color="#fff"/>
          </div>
        </div>
      </div>
    </div>
    <div class="el-overlay" style="z-index: 2003;" v-if="showDialog">
      <div role="dialog" aria-modal="true" aria-label="Checkout" aria-describedby="el-id-9097-0" class="el-overlay-dialog">
        <div class="el-dialog buynow" tabindex="-1">
          <header class="el-dialog__header">
            <div  class="dialog-title">{{$t('product[26]')}}</div>
            <button @click="showDialog = false" aria-label="Close this dialog" class="el-dialog__headerbtn" type="button">
              <i class="el-icon el-dialog__close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
                </svg>
              </i>
            </button>
          </header>
          <div id="el-id-9097-0" class="el-dialog__body">
            <div >
              <div  class="el-row mb-4">
                <label  class="font-weight-bold col-12 input_label">{{$t('product[27]')}}</label>
                <div  class="col-12">
                  <van-stepper v-model="money" input-width="inherit" button-size="40px" />
                </div>
              </div>
              <div  class="el-row mb-4">
                <label  class="font-weight-bold input_label">{{$t('product[28]')}}</label>
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
            </div>
          </div>
          <footer class="el-dialog__footer">
            <div  class="row d-md-flex align-items-center justify-content-center justify-content-md-between">
              <div  class="col-12 col-md-6">
                <div  class="amount">
                  <div  class="title">{{$t('product[29]')}}</div>
                  <div  class="content">= {{detailData.amount*money}} USDT
                    <svg data-v-cbf2c648=""  class="svg-icon" aria-hidden="true" style="font-size: 19px; margin-left: 12px;">
                      <use data-v-cbf2c648="" xlink:href="#icon-USDT-TRC20"></use></svg>
                  </div>
                </div>
              </div>
              <div  class="col-12 col-md-6 mt-5 mt-md-0 d-flex justify-content-center justify-content-md-end">
                <button  href="javascript:;" class="btn btn-dark" style="width: 211px;" @click="buyProduct">{{$t('buy[0]')}}</button></div>
            </div>
          </footer>
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
  // optional style for arrows & dots
  // import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    name: 'Home',
    inject: ['reloadHtml'],
    components: {
      swiper, swiperSlide
      // ,VueSlickCarousel
    },

    data() {
      return {
        // startDate: this.$Util.DateFormat('DD-MM-YY',new Date(new Date().getTime() - 24*60*60*1000)),
        showMore:false,
        selectM:'',
        selectP:{},
        showIndex:0,
        mouseenter:1,
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
        swiperOption1: {
          loop: true,  // 是否循环轮播
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          bulletClass :'swiper-pagination-bullet',
          bulletActiveClass:'my-bullet-active',
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
        swiperOption0: {
          allowTouchMove: false,
          direction: "vertical", // 竖向滚动
          autoHeight: true, // 自适应高度
          slidesPerView: "auto", // 记得这里写 auto 不要默认写1哦
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          loop: true,
          freeMode: false,
          autoplay: {   // 自动轮播
            delay: 2000,
            disableOnInteraction: false,
          },
        },
        star:5,
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
        slickList:[//Eunice Allen,Donna Clark
          {name:'Henry',head:''},
          {name:'Orion·Wilson',head:''},
          {name:'Tony· Bush',head:''},
          {name:'Millie·Davis',head:''},
          {name:'Kevin·Adams',head:''},
          {name:'Gus·Thompson',head:''},
          {name:'Hank·Thompson',head:''},
          {name:'ちほり',head:''},
          {name:'藤田茂',head:''},
          {name:'Meaning·Edwards',head:''},
          {name:'Amara·Campbell',head:''},
          {name:'Bertha·Green',head:''},
          {name:'Nelson',head:''},
          {name:'Ella·Baker',head:''},
          {name:'Samuel',head:''},
          {name:'Willis·Hill',head:''},
          {name:'Milagros',head:''},
          {name:'Arlo·Hernandez',head:''},
          {name:'Brendan· WALKER',head:''},
          {name:'Paloma ·Scott',head:''}
        ],
        intv:null,
        showNoticeImg:false,
        imgnotice:{
          cover_img:""
        },
        listDataQ: [],
        isLoad: false,
        isFinished: false,
        isRefresh: false,
        pageNo: 1,
        data_current_page:"1",
        data_total_page:"1",
      }
    },

    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      },
    },
    watch: {
    },
    created() {
      let that = this;
      // let tmpUrl = "https://www.youtube.com/watch?v=eeGRe0B6M10".replace('https:','');
      // tmpUrl = tmpUrl.replace('watch?v=','embed/')+'?wmode=transparent'
      // that.youtube = tmpUrl;
      this.loadProudcutList();
      that.$Model.GetBackData(function (data) {
        if (data.noticelist&&data.noticelist.length > 0) {
          that.msg_title = data.noticelist[0].title;
          that.msg_content = data.noticelist[0].content;
          that.showNotice = true;
        }
        if (data.imgnoticeList&&data.imgnoticeList.length > 0) {
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
    },
    activated() {

    },
    destroyed() {
    },
    methods: {
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
      getListData(type) {
        this.isLoad = true
        this.isRefresh = false
        if(type=='load'){
          this.pageNo += 1;
        }else{
          this.pageNo = 1;
          this.isFinished = false
        }
        this.$Model.noticeList({gropid: 9,page_no: this.pageNo,page_size:30},data=>{
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
      goDetail(item) {
        if(item.progress<100){
          this.$router.push(`/productDetail?id=${item.id}`)
        }
      },
      orderNow(item) {
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

  .h-\[662px\] {
    height: 662px;
  }
  @media (min-width: 1200px) {
    .xl\:h-\[700px\] {
      height: 700px;
    }
  }
  @media (min-width: 1200px) {
    .xl\:px-8 {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  .leading-9 {
    line-height: 2.25rem;
  }
  .text-\[30px\] {
    font-size: 30px;
  }
  .mt-6 {
    margin-top: 1.5rem;
  }
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .justify-center {
    justify-content: center;
  }
  .h-full {
    height: 100%;
  }
  .max-w-\[620px\] {
    max-width: 620px;
  }
  .font-bold {
    font-weight: 700;
  }
  .text-\[\#fff\] {
    --tw-text-opacity: 1;
    color: rgb(255 255 255);
  }
  @media (min-width: 1200px) {
    .xl\:text-\[45px\] {
      font-size: 45px;
    }
  }
  @media (min-width: 1200px) {
    .xl\:leading-\[55px\] {
      line-height: 55px;
    }
  }
  .title-main {
    color: #000;
    font-family: 'Roboto';
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120.5%;
    text-align: center;
    margin-bottom: 2rem;
  }
  .header_1X03z {
    margin-top: 0;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    text-align: left
  }

  .wrapper_A-XAV {
    padding: 0 20px 37px
  }

  .withFill_3dLQP {
    padding: 5px 20px 0;
    background: #092c57
  }

  .textSection_2Jl-t {
    font-size: 16px;
    line-height: 19px;
    color: #002133
  }

  .scheme1_27wht,.withFill_3dLQP .textSection_2Jl-t {
    color: #fff
  }

  .scheme1_27wht {
    border-radius: 10px;
    background: linear-gradient(180deg,#1bd17d,#03193f);
    padding: 25px 0
  }

  .scheme1Item_gE_r4 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    background-repeat: no-repeat;
    background-position: top;
    padding: 65px 20px 0
  }

  .schemeArrow_2y4_o {
    width: 16px;
    height: 42px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuMjkzIDQxLjcwN2ExIDEgMCAwMDEuNDE0IDBsNi4zNjQtNi4zNjRhMSAxIDAgMDAtMS40MTQtMS40MTRMOCAzOS41ODZsLTUuNjU3LTUuNjU3QTEgMSAwIDAwLjkzIDM1LjM0M2w2LjM2NCA2LjM2NHpNNyAwdjQxaDJWMEg3eiIgZmlsbD0iIzAyOEVFNiIvPjwvc3ZnPg==) 50% no-repeat;
    margin: 10px auto
  }


  .subheader_1yrF2 {
    padding: 16px 0 10px;
    margin: 0;
    font-weight: 600;
    font-size: 26px;
    line-height: 32px
  }

  .scheme2_3KqRk,.withFill_3dLQP .subheader_1yrF2 {
    color: #fff
  }

  .scheme2_3KqRk {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: linear-gradient(180deg,#de2e3c,#b4000f)
  }

  .scheme2Item_2XDAu {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    background-repeat: no-repeat;
    background-position: top 31px center;
    padding: 105px 20px 0
  }

  .scheme2Item_2XDAu:last-child {
    padding-bottom: 31px
  }


  .badThingsItem5_3u4ex {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNzE5LjI4MUwuMjggMS43MmwxNSAxNSAuNzE5LjY4Ny43MTktLjY4N0wyMCAxMy40MzcgMzEuMjgxIDI0LjcybC43MTkuNjg3LjcxOS0uNjg3TDM2IDIxLjQzNyA0Ni41NjMgMzJINDB2MmgxMFYyM2gtMnY3LjU2M0wzNi43MTkgMTkuMjggMzYgMTguNTk0bC0uNzE5LjY4N0wzMiAyMi41NjMgMjAuNzE5IDExLjI4IDIwIDEwLjU5NGwtLjcxOS42ODdMMTYgMTQuNTYyIDEuNzE5LjI4M3pNMCA4djQyaDJWOEgwem02IDZ2MzZoMlYxNEg2em02IDZ2MzBoMlYyMGgtMnptNiAwdjMwaDJWMjBoLTJ6bTYgNHYyNmgyVjI0aC0yem0xMiA0djIyaDJWMjhoLTJ6bS02IDJ2MjBoMlYzMGgtMnptMTIgOHYxMmgyVjM4aC0yem02IDB2MTJoMlYzOGgtMnoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)
  }

  .goodThings_26slW {
    padding-top: 21px;
    display: flex;
    flex-direction: column
  }

  .goodThingItem_rrXr3 {
    margin: 0 0 20px;
    font-size: 16px;
    line-height: 19px;
    color: #002133;
    text-align: center
  }

  .goodThingItem_rrXr3:before {
    content: "";
    display: block;
    width: 58px;
    height: 58px;
    background-position: top;
    background-repeat: no-repeat;
    margin: 0 auto 10px
  }

  .goodThing7_PSeiG:before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMxIDBhMTkuMDI2IDE5LjAyNiAwIDAwLTEzLjA5NCA1LjE4OGMxLjYwMi0uNSAzLjIwNy0uODk1IDQuOTA3LTEuMDk0QTE3LjE0OCAxNy4xNDggMCAwMTMxIDJjOS4zOTggMCAxNyA3LjYwMiAxNyAxNyAwIDMtLjc5MyA1Ljc5LTIuMDk0IDguMTg4LS4xOTkgMS42OTktLjU5MyAzLjMwNC0xLjA5MyA0LjkwNkExOS4wMjYgMTkuMDI2IDAgMDA1MCAxOUM1MCA4LjUgNDEuNSAwIDMxIDB6bS02IDZhMTkuMDI2IDE5LjAyNiAwIDAwLTEzLjA5NCA1LjE4OGMxLjYwMi0uNSAzLjIwNy0uODk1IDQuOTA2LTEuMDk0QTE3LjE0OCAxNy4xNDggMCAwMTI1IDhjOS4zOTggMCAxNyA3LjYwMiAxNyAxNyAwIDMtLjc5MyA1Ljc5LTIuMDk0IDguMTg4LS4xOTkgMS42OTktLjU5MyAzLjMwNC0xLjA5MyA0LjkwNkExOS4wMjYgMTkuMDI2IDAgMDA0NCAyNWMwLTEwLjUtOC41LTE5LTE5LTE5em0tNiA2QzguNTIgMTIgMCAyMC41MiAwIDMxczguNTIgMTkgMTkgMTkgMTktOC41MiAxOS0xOS04LjUyLTE5LTE5LTE5em0wIDJjOS40MDIgMCAxNyA3LjU5OCAxNyAxNyAwIDkuNDAyLTcuNTk4IDE3LTE3IDE3LTkuNDAyIDAtMTctNy41OTgtMTctMTcgMC05LjQwMiA3LjU5OC0xNyAxNy0xN3oiIGZpbGw9IiMxMkJGMzgiLz48L3N2Zz4=)
  }

  .laptop_6uVzs {
    width: 280px;
    height: 360px;
    position: relative;
    margin: 30px 0 30px auto
  }

  .laptop_6uVzs:before {
    content: "";
    position: absolute;
    display: block;
    width: 320px;
    height: 441px;
    top: 0;
    right: -20px;
  }

  @media (-webkit-min-device-pixel-ratio: 2),(min-resolution:192dpi) {
    .laptop_6uVzs:before {
    }
  }

  .laptop_6uVzs:before {
   background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 320px 441px
  }

  .advantages_1feUI,.algorithm_3YfKU,.listHeader_3AOyV {
    font-size: 16px;
    line-height: 19px;
    color: #fff
  }

  .listHeader_3AOyV {
    font-weight: 700
  }

  .list_3FeHY {
    margin: 0;
    padding: 0
  }

  .listItem_Tc7Ff {
    min-height: 32px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI2Ljg0IDUuNTJhMS4yOCAxLjI4IDAgMDAtMS4wNC42TDEzLjc2IDI0LjU0bC03LjgtNi43NGExLjI3OSAxLjI3OSAwIDEwLTEuNjggMS45Mmw4LjkyIDcuNzJjLjI4LjIzNy42NS4zNDIgMS4wMTMuMjkuMzY1LS4wNTUuNjg3LS4yNjMuODg3LS41N0wyNy45NiA3LjUyYTEuMjc4IDEuMjc4IDAgMDAtMS4xMi0yeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) 0 0 no-repeat;
    background-size: 32;
    list-style-type: none;
    padding-left: 46px;
    margin-bottom: 10px
  }

  .subheader4_2MaYc {
    font-weight: 600;
    font-size: 26px;
    line-height: 32px;
    color: #fff
  }

  .advantagesItem_11FkN {
    text-align: center
  }

  .advantagesList_2IDFI {
    margin: 0;
    padding: 0
  }

  .advantageItem_39nYN {
    background-position: top;
    background-repeat: no-repeat;
    list-style-type: none;
    background-size: 50;
    padding: 60px 0 40px
  }


  .advantages1Item5_NLG94 {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI1IDBjLTIuNDUzIDAtNC41MjMgMS4zNTUtNy41OTQgMi45MzgtMy4wNyAxLjU4Mi03LjE5MSAzLjQ5Mi0xMy42MjUgNC45MDZMMyA4LjAzdi43ODFjMCAxNS4zMiA1LjM3MSAyNS41NiAxMC43NSAzMS45MDcgNS4zNzkgNi4zNDcgMTAuODQ0IDguODc1IDEwLjg0NCA4Ljg3NWwuNDM3LjIxOC40MzgtLjIxOFM0NyAzOC40NjkgNDcgOC44MTJ2LS43OGwtLjc4MS0uMTg4QzM5Ljc4NSA2LjQzIDM1LjY2NCA0LjUyIDMyLjU5NCAyLjkzNyAyOS41MjQgMS4zNTUgMjcuNDU0IDAgMjUgMHptMCAyYzEuNjQ1IDAgMy41NSAxLjEwNSA2LjY4OCAyLjcxOSAyLjk4IDEuNTMxIDcuMTcxIDMuNDEgMTMuMjUgNC44NDMtLjM2OCAyNy4xMTgtMTguNjg0IDM3LjI5LTE5Ljk3IDM3Ljk3LS42Mi0uMzAxLTQuOTQ4LTIuNDY2LTkuNzE4LTguMDk0QzEwLjIyMyAzMy41MDQgNS4yNDYgMjMuOTYgNS4wNjIgOS41NjFjNi4wNzktMS40MzMgMTAuMjctMy4zMTIgMTMuMjUtNC44NDNDMjEuNDUgMy4xMDUgMjMuMzU1IDIgMjUgMnoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)
  }

  .advantages2Item1_2CE4v {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMxLjE4OCAzLjI1YS45OTYuOTk2IDAgMDAtLjYyNS4zNzVMMTEuNSAyNy4zNzVhLjk5NC45OTQgMCAwMC0uMTIxIDEuMDU5Yy4xNjguMzQ3LjUyLjU2Ni45MDIuNTY2SDIyLjc1bC01IDE2LjQzOGEuOTk4Ljk5OCAwIDAwLjQ2MSAxLjI0Mi45OTguOTk4IDAgMDAxLjI4OS0uMzA1bDE5LTIzLjc1Yy4yNDItLjMuMjktLjcxLjEyMS0xLjA1OEExLjAwMiAxLjAwMiAwIDAwMzcuNzIgMjFIMjcuNjI1bDQuNjU2LTE2LjQ2OWMuMDktLjMwOC4wMjgtLjY0NC0uMTcyLS44OThhMS4wMDUgMS4wMDUgMCAwMC0uODI4LS4zODNoLS4wOTN6TTI5LjAzIDguNzJsLTMuNzE4IDEzQTEgMSAwIDAwMjYuMjgyIDIzaDkuMzQzTDIxLjE4NyA0MS4wOTRsMy45MDctMTIuODEzQTEgMSAwIDAwMjQuMTI1IDI3aC05Ljc1TDI5LjAzMSA4LjcyeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==)
  }

  .table th {
    /*background: #000000;*/
    color: #000;
    width: 33.33%;
    text-align: center;
  }
  @media (min-width: 992px) {
    .header_1X03z {
      margin-top:0;
      font-weight: 600;
      font-size: 60px;
      line-height: 64px;
      text-align: center
    }

    .wrapper_A-XAV {
      padding: 0 63px 37px
    }

    .withFill_3dLQP {
      padding: 40px 63px 0;
      background: #092c57
    }

    .textSection_2Jl-t {
      font-size: 20px;
      line-height: 24px;
      color: #002133
    }

    .scheme1_27wht,.withFill_3dLQP .textSection_2Jl-t {
      color: #fff
    }

    .scheme1_27wht {
      display: flex;
      border-radius: 10px;
      background: linear-gradient(180deg,#1bd17d,#03193f);
      justify-content: space-around
    }

    .scheme1Item_gE_r4 {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      background-repeat: no-repeat;
      background-position: top 37px center;
      padding: 105px 20px 40px
    }

    .schemeArrow_2y4_o {
      width: 106px;
      height: 16px;
      margin-top: 50px;
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMDUuNzA3IDguNzA3YTEgMSAwIDAwMC0xLjQxNEw5OS4zNDMuOTI5YTEgMSAwIDEwLTEuNDE0IDEuNDE0TDEwMy41ODYgOGwtNS42NTcgNS42NTdhMSAxIDAgMDAxLjQxNCAxLjQxNGw2LjM2NC02LjM2NHpNMCA5aDEwNVY3SDB2MnoiIGZpbGw9IiMwMjhFRTYiLz48L3N2Zz4=) 50% no-repeat;
      flex-shrink: 0
    }
    .subheader_1yrF2 {
      padding: 16px 0 10px;
      margin: 0;
      font-weight: 600;
      font-size: 36px;
      line-height: 22px;
      letter-spacing: -.864px
    }

    .scheme2_3KqRk,.withFill_3dLQP .subheader_1yrF2 {
      color: #fff
    }

    .scheme2_3KqRk {
      display: flex;
      flex-direction: row;
      border-radius: 10px;
      justify-content: space-around
    }

    .scheme2Item_2XDAu,.scheme2Item_2XDAu:last-child {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      background-repeat: no-repeat;
      background-position: top 37px center;
      padding: 105px 20px 40px
    }

    .badThingsItem5_3u4ex {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNzE5LjI4MUwuMjggMS43MmwxNSAxNSAuNzE5LjY4Ny43MTktLjY4N0wyMCAxMy40MzcgMzEuMjgxIDI0LjcybC43MTkuNjg3LjcxOS0uNjg3TDM2IDIxLjQzNyA0Ni41NjMgMzJINDB2MmgxMFYyM2gtMnY3LjU2M0wzNi43MTkgMTkuMjggMzYgMTguNTk0bC0uNzE5LjY4N0wzMiAyMi41NjMgMjAuNzE5IDExLjI4IDIwIDEwLjU5NGwtLjcxOS42ODdMMTYgMTQuNTYyIDEuNzE5LjI4M3pNMCA4djQyaDJWOEgwem02IDZ2MzZoMlYxNEg2em02IDZ2MzBoMlYyMGgtMnptNiAwdjMwaDJWMjBoLTJ6bTYgNHYyNmgyVjI0aC0yem0xMiA0djIyaDJWMjhoLTJ6bS02IDJ2MjBoMlYzMGgtMnptMTIgOHYxMmgyVjM4aC0yem02IDB2MTJoMlYzOGgtMnoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)
    }

    .scheme2_3KqRk {
      background: linear-gradient(180deg,#de2e3c,#b4000f)
    }

    .goodThings_26slW {
      padding-top: 12px
    }

    .goodThingItem_rrXr3 {
      display: flex;
      font-size: 20px;
      line-height: 24px;
      text-align: left
    }

    .goodThingItem_rrXr3:before {
      flex-shrink: 0;
      margin: 0 16px 0 0
    }


    .goodThing7_PSeiG:before {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMxIDBhMTkuMDI2IDE5LjAyNiAwIDAwLTEzLjA5NCA1LjE4OGMxLjYwMi0uNSAzLjIwNy0uODk1IDQuOTA3LTEuMDk0QTE3LjE0OCAxNy4xNDggMCAwMTMxIDJjOS4zOTggMCAxNyA3LjYwMiAxNyAxNyAwIDMtLjc5MyA1Ljc5LTIuMDk0IDguMTg4LS4xOTkgMS42OTktLjU5MyAzLjMwNC0xLjA5MyA0LjkwNkExOS4wMjYgMTkuMDI2IDAgMDA1MCAxOUM1MCA4LjUgNDEuNSAwIDMxIDB6bS02IDZhMTkuMDI2IDE5LjAyNiAwIDAwLTEzLjA5NCA1LjE4OGMxLjYwMi0uNSAzLjIwNy0uODk1IDQuOTA2LTEuMDk0QTE3LjE0OCAxNy4xNDggMCAwMTI1IDhjOS4zOTggMCAxNyA3LjYwMiAxNyAxNyAwIDMtLjc5MyA1Ljc5LTIuMDk0IDguMTg4LS4xOTkgMS42OTktLjU5MyAzLjMwNC0xLjA5MyA0LjkwNkExOS4wMjYgMTkuMDI2IDAgMDA0NCAyNWMwLTEwLjUtOC41LTE5LTE5LTE5em0tNiA2QzguNTIgMTIgMCAyMC41MiAwIDMxczguNTIgMTkgMTkgMTkgMTktOC41MiAxOS0xOS04LjUyLTE5LTE5LTE5em0wIDJjOS40MDIgMCAxNyA3LjU5OCAxNyAxNyAwIDkuNDAyLTcuNTk4IDE3LTE3IDE3LTkuNDAyIDAtMTctNy41OTgtMTctMTcgMC05LjQwMiA3LjU5OC0xNyAxNy0xN3oiIGZpbGw9IiMxMkJGMzgiLz48L3N2Zz4=)
    }

    .laptop_6uVzs {
      width: 780px;
      height: 410px;
      margin: 40px auto 50px
    }

    .laptop_6uVzs:before {
      position: static;
      width: 799px;
      height: 493px;
    }

    @media (-webkit-min-device-pixel-ratio: 2),(min-resolution:192dpi) {
      .laptop_6uVzs:before {
      }
    }

    .laptop_6uVzs:before {

      background-size: 799px 493px;
      background-position: top
    }

    .advantages_1feUI,.algorithm_3YfKU {
      display: flex;
      font-size: 20px;
      line-height: 24px
    }

    .advantageItem_39nYN:not(:last-child),.algorithmItem_F7ORI:not(:last-child) {
      padding-right: 50px
    }

    .listHeader_3AOyV {
      font-size: 20px;
      line-height: 24px
    }

    .listItem_Tc7Ff {
      min-height: 32px;
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI2Ljg0IDUuNTJhMS4yOCAxLjI4IDAgMDAtMS4wNC42TDEzLjc2IDI0LjU0bC03LjgtNi43NGExLjI3OSAxLjI3OSAwIDEwLTEuNjggMS45Mmw4LjkyIDcuNzJjLjI4LjIzNy42NS4zNDIgMS4wMTMuMjkuMzY1LS4wNTUuNjg3LS4yNjMuODg3LS41N0wyNy45NiA3LjUyYTEuMjc4IDEuMjc4IDAgMDAtMS4xMi0yeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) 0 0 no-repeat;
      background-size: 32;
      padding-left: 46px;
      margin-bottom: 10px
    }

    .subheader4_2MaYc {
      font-size: 36px;
      line-height: 44px
    }

    .advantagesItem_11FkN {
      flex-basis: 50%;
      text-align: left
    }

    .advantageItem_39nYN {
      background-position: 0 0
    }

    .advantages1Item2_1D_tU {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI1IDJDMTIuMzE3IDIgMiAxMi4zMTcgMiAyNXMxMC4zMTcgMjMgMjMgMjMgMjMtMTAuMzE3IDIzLTIzYzAtNC41Ni0xLjM0LTguODEtMy42MzctMTIuMzg5bC0xLjM2OSAxLjYxN0EyMC44NDYgMjAuODQ2IDAgMDE0NiAyNWMwIDExLjU3OS05LjQyMSAyMS0yMSAyMVM0IDM2LjU3OSA0IDI1IDEzLjQyMSA0IDI1IDRjNS40NDMgMCAxMC4zOTQgMi4xIDE0LjEyOSA1LjUxbDEuMzA5LTEuNTQ1QTIyLjkxMiAyMi45MTIgMCAwMDI1IDJ6bTE4LjIzNiA1Ljc1NGwtMTkuMzIyIDIyLjgtOC4xMzMtNy41ODUtMS4zNjMgMS40NjMgOS42NjYgOS4wMTUgMjAuNjgtMjQuNC0xLjUyOC0xLjI5M3oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)
    }

    .advantages1Item5_NLG94 {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI1IDBjLTIuNDUzIDAtNC41MjMgMS4zNTUtNy41OTQgMi45MzgtMy4wNyAxLjU4Mi03LjE5MSAzLjQ5Mi0xMy42MjUgNC45MDZMMyA4LjAzdi43ODFjMCAxNS4zMiA1LjM3MSAyNS41NiAxMC43NSAzMS45MDcgNS4zNzkgNi4zNDcgMTAuODQ0IDguODc1IDEwLjg0NCA4Ljg3NWwuNDM3LjIxOC40MzgtLjIxOFM0NyAzOC40NjkgNDcgOC44MTJ2LS43OGwtLjc4MS0uMTg4QzM5Ljc4NSA2LjQzIDM1LjY2NCA0LjUyIDMyLjU5NCAyLjkzNyAyOS41MjQgMS4zNTUgMjcuNDU0IDAgMjUgMHptMCAyYzEuNjQ1IDAgMy41NSAxLjEwNSA2LjY4OCAyLjcxOSAyLjk4IDEuNTMxIDcuMTcxIDMuNDEgMTMuMjUgNC44NDMtLjM2OCAyNy4xMTgtMTguNjg0IDM3LjI5LTE5Ljk3IDM3Ljk3LS42Mi0uMzAxLTQuOTQ4LTIuNDY2LTkuNzE4LTguMDk0QzEwLjIyMyAzMy41MDQgNS4yNDYgMjMuOTYgNS4wNjIgOS41NjFjNi4wNzktMS40MzMgMTAuMjctMy4zMTIgMTMuMjUtNC44NDNDMjEuNDUgMy4xMDUgMjMuMzU1IDIgMjUgMnoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)
    }

    .advantages2Item1_2CE4v {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMxLjE4OCAzLjI1YS45OTYuOTk2IDAgMDAtLjYyNS4zNzVMMTEuNSAyNy4zNzVhLjk5NC45OTQgMCAwMC0uMTIxIDEuMDU5Yy4xNjguMzQ3LjUyLjU2Ni45MDIuNTY2SDIyLjc1bC01IDE2LjQzOGEuOTk4Ljk5OCAwIDAwLjQ2MSAxLjI0Mi45OTguOTk4IDAgMDAxLjI4OS0uMzA1bDE5LTIzLjc1Yy4yNDItLjMuMjktLjcxLjEyMS0xLjA1OEExLjAwMiAxLjAwMiAwIDAwMzcuNzIgMjFIMjcuNjI1bDQuNjU2LTE2LjQ2OWMuMDktLjMwOC4wMjgtLjY0NC0uMTcyLS44OThhMS4wMDUgMS4wMDUgMCAwMC0uODI4LS4zODNoLS4wOTN6TTI5LjAzIDguNzJsLTMuNzE4IDEzQTEgMSAwIDAwMjYuMjgyIDIzaDkuMzQzTDIxLjE4NyA0MS4wOTRsMy45MDctMTIuODEzQTEgMSAwIDAwMjQuMTI1IDI3aC05Ljc1TDI5LjAzMSA4LjcyeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==)
    }

  }
  .uk-grid {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    justify-content: center;
  }
  @media (min-width: 960px) {
    .uk-child-width-1-3\@m > * {
      width: calc(100%* 1 / 4.001);
    }
  }
  .in-icon-vix img {
    max-width: initial;
    width: 65px;
  }
  .uk-vix-content {
    padding: 10px;
  }
  .uk-cn-actions {
    margin-top: 1rem;
  }
  /* 20250424新增 */
  .header-bg{
    background-repeat:no-repeat !important;
    background-size:100% 100% !important;
  }

  .hero-wrap >>> .header_content_bg{
    background: #fff;
  }
  .pricing {
    display: flex;
  }
</style>
