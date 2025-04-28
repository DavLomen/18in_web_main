<template>
  <div class="HomePage">
    <Header></Header>
    <div class="app-wrapper" >

      <div class="container " >
        <div
          class="box1 cover first-box-wraper"
          style="position: relative;"
        >
          <div class="box-wrapper top-wraper" style="    max-width: 1500px;">
            <div class="box1-inner-area left-info-area" style="overflow-x: hidden">
              <div class="row reve" style="overflow-x: hidden">
                <div class="col-md-6">
                  <div class="box1-title hero-title mb-4" v-html="$t('newhome[0]',{WT:InitData.setting.web_title})">

                  </div>
                  <p class="hero-text mb-4 pb-1" v-html="$t('newhome[1]',{WT:InitData.setting.web_title})">

                  </p>
                  <div class="action-btns" style="margin-bottom: 10px">
                    <div class="btn zse" @click="$router.push('/register')">{{$t('head[2]')}}</div>
                    <div class="btn zse" @click="$router.push('/login')">{{$t('head[3]')}}</div>
                  </div>
                  <p class="hero-text mb-4 pb-1" style="padding-left: 1rem;color: red;margin-bottom: 0.5rem" v-html="$t('newhome[2]')">
                  </p>
                  <p class="hero-text mb-4 pb-1" style="padding-left: 1rem;color: red;margin-top: 0.5rem" v-html="$t('adda[1]')">
                  </p>
                  <p class="hero-text mb-4 pb-1" style="padding-left: 1rem;color: red;margin-top: 0.5rem" v-html="$t('adda[2]')">
                  </p>
<!--                  <div style="margin-bottom: 10px;display: flex;">-->
<!--                    <div class="btn" @click="downloadApp('andriod')">-->
<!--                      <img :src="'./static/images/aaa.png?t=1'" style="height: 45px;">-->
<!--                    </div>-->
<!--                    <div class="btn" @click="downloadApp('ios')">-->
<!--                      <img :src="'./static/images/bbb.png?t=1'" style="height: 45px;">-->
<!--                    </div>-->
<!--                  </div>-->
                </div>
                <div class="col-md-6">
                  <div style="width: 100%;">
                    <swiper
                      :options="swiperOption0" style="width: 90%;border-radius: 10px"
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
            </div>
          </div>
          <div style="width: 100%;position: absolute;bottom: 0;left: 0;">
            <iframe class="iframe" scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ADOGEUSD%22%2C%22title%22%3A%22Dogecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ALTCUSD%22%2C%22title%22%3A%22Litecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABCHUSD%22%2C%22title%22%3A%22Bitcoin%20Cash%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AADAUSD%22%2C%22title%22%3A%22Cardano%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AXRPUSD%22%2C%22title%22%3A%22XRP%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22globalecrypto.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22sunMiner%2F%22%7D" title="ticker tape TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: 74px; width: 100%;"></iframe>
            <van-notice-bar color="red" left-icon="volume-o" scrollable :text="InitData.notifications?InitData.notifications[0]:''" />

          </div>
        </div>
        <section class="Cosmi GTPZ Righleftc minelooking owningeco work py-100" >
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
								<i class="Cosmi GTPZ Righleftc minelooking owningeco las la-user-edit">
								</i>
							</span>
                  <h4 class="Cosmi GTPZ Righleftc minelooking owningeco work-item__title">
                    {{$t('how[2]')}}
                  </h4>
                  <p class="Cosmi GTPZ Righleftc minelooking owningeco work-item__desc">
                    {{$t('how[3]')}}
                  </p>
                </div>
              </div>
              <div @click="$router.push('/contract')" class="Cosmi GTPZ Righleftc minelooking owningeco col-xl-3 col-sm-6">
                <div class="Cosmi GTPZ Righleftc minelooking owningeco work-item">
							<span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__border">
							</span>
                  <span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__number">
								2
							</span>
                  <span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__icon">
								<i class="Cosmi GTPZ Righleftc minelooking owningeco las la-coins">
								</i>
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
								3
							</span>
                  <span class="Cosmi GTPZ Righleftc minelooking owningeco work-item__icon">
								<i class="Cosmi GTPZ Righleftc minelooking owningeco las la-wallet">
								</i>
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
        </section>

        <div class="box3 max960">
          <div class="box-wrapper">
            <div class="box3-title">{{$t('newhome[4]')}}</div>
            <div style="font-size: 1.5rem;padding: 1rem;line-height: 2.5rem;">{{$t('newhome[5]')}}</div>
            <div class="row gy-4 gx-3 justify-content-center">
              <div class="col-md-6 col-lg-4" v-for="(item,index) in listData" :key="index">
                <div  class="card card-full card-s3">
                  <div style="position: relative"
                    class="group relative p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 h-fit">
                    <div v-if="item.progress>=100" style="position: absolute;width: 100%;height: 100%;top: 0;left: 0;z-index: 9999;background: rgba(0,0,0,0.1)">
                      <div style="display: flex;width: 100%;height: 100%;align-items: center;justify-content: center;">
                        <img :src="'./static/images/out.png'" style="width: 10rem;">
                      </div>
                    </div>
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg -mt-1 group-hover:-mt-2 -ms-1 group-hover:-ms-2 h-[98%] w-[98%] -z-1 transition-all duration-500"></div>
                    <div class="relative overflow-hidden">
                      <div class="relative overflow-hidden rounded-lg">
                        <img  :src="InitData.setting.up_url + item.icon" class="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                        alt="">
                      </div>
<!--                      <div-->
<!--                        class="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">-->
<!--                        <a aria-current="page" href="javascript:;"-->
<!--                           class="router-link-active router-link-exact-active btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white">-->
<!--&lt;!&ndash;                          <i class="mdi mdi-lightning-bolt"></i>&ndash;&gt;-->
<!--                          {{$t('home[35]')}}</a></div>-->
                    </div>
                    <div class="mt-3">
                      <div class="my-3">
                        <div class="font-semibold hover:text-sky-300">{{item.title}}
                        </div>
                      </div>
                      <div
                        class="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                        <div><span
                          class="text-[16px] font-medium text-slate-400 block">{{$t('product[0]')}}</span><span
                          class="text-[18px] font-semibold block">${{item.amount}}</span></div>
                        <div><span
                          class="text-[16px] font-medium text-slate-400 block">{{$t('product[2]')}}</span><span
                          class="text-[18px] font-semibold block"><i
                          class="mdi mdi-timer"></i>{{item.cycle}} {{$t('product[15]')}}</span>
                        </div>
                      </div>
                      <div
                        class="flex justify-between mt-1 p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                        <div><span
                          class="text-[16px] font-medium text-slate-400 block">{{$t('settle[2]')}}</span><span
                          class="text-[18px] font-semibold block">${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*1).toFixed(2))}}</span></div>
                        <div><span
                          class="text-[16px] font-medium text-slate-400 block">{{$t('product[20]')}}</span><span
                          class="text-[18px] font-semibold block"><i
                          class="mdi mdi-cash-check"></i> {{$t('product[21]')}}</span>
                        </div>
                      </div>
                      <div
                        class="flex justify-between mt-1 p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                        <div><span
                          class="text-[16px] font-medium text-slate-400 block">{{$t('settle[3]')}}</span><span
                          class="text-[18px] font-semibold block">${{item.amount}} + ${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*item.cycle).toFixed(2))}}</span></div>
                      </div>
                    </div>
                    <div class="text-center" style="margin-top: 10px;">
                      <van-progress :percentage="item.progress" stroke-width="8" track-color="#ccc" text-color="#fff" color="linear-gradient(to right, #9C27B0, #673AB7)"/>
                    </div>
                    <a aria-current="page" href="javascript:;"  v-if="item.progress>=100"
                       class="router-link-active router-link-exact-active btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full mt-5 w-full"><i
                      class="mdi mdi-lightning-bolt"></i>{{$t('product[13]')}}</a>
                    <a v-else aria-current="page" href="javascript:;" @click="$router.push(`/contractDetail?id=${item.id}`)"
                       class="router-link-active router-link-exact-active btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full mt-5 w-full">
                      {{$t('home[35]')}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container max960" data-v-2089527b="">
          <div class="grid grid-cols-1 text-center" data-v-2089527b=""><span class="section-title mb-2"
                                                                             data-v-2089527b="">{{$t('our[0]')}}</span>
            <h3 class="md:text-[30px] text-[26px] font-semibold mb-3" data-v-2089527b="">{{$t('our[1]')}} </h3>
          </div>
          <div class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-10"
               data-v-2089527b="">
            <div
              class="choose-card group relative rounded-xl bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6 text-center mt-10 hover:shadow-md dark:hover:shadow-gray-800 transition-all duration-500"
              data-v-2089527b="">
              <div class="relative -mt-16" data-v-2089527b="">
                <div
                  class="icon flex items-center justify-center bg-white dark:bg-slate-900 size-20 rounded-full shadow-md dark:shadow-gray-800 mx-auto p-3"
                  data-v-2089527b="">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                       data-v-2089527b="">
                    <path
                      d="M32 13.414c0-6.279-1.837-11.373-4.109-11.413 0.009-0 0.018-0.001 0.027-0.001h-2.592c0 0-6.088 4.573-14.851 6.367-0.268 1.415-0.438 3.102-0.438 5.047s0.171 3.631 0.438 5.047c8.763 1.794 14.851 6.367 14.851 6.367h2.592c-0.009 0-0.018-0.001-0.027-0.001 2.272-0.040 4.109-5.134 4.109-11.413zM27.026 23.102c-0.293 0-0.61-0.304-0.773-0.486-0.395-0.439-0.775-1.124-1.1-1.979-0.727-1.913-1.127-4.478-1.127-7.223s0.4-5.309 1.127-7.223c0.325-0.855 0.705-1.54 1.1-1.979 0.163-0.182 0.48-0.486 0.773-0.486s0.61 0.304 0.773 0.486c0.395 0.439 0.775 1.124 1.1 1.979 0.727 1.913 1.127 4.479 1.127 7.223s-0.4 5.309-1.127 7.223c-0.325 0.855-0.705 1.54-1.1 1.979-0.163 0.181-0.48 0.486-0.773 0.486zM7.869 13.414c0-1.623 0.119-3.201 0.345-4.659-1.48 0.205-2.779 0.323-4.386 0.323-2.096 0-2.096 0-2.096 0l-1.733 2.959v2.755l1.733 2.959c0 0 0 0 2.096 0 1.606 0 2.905 0.118 4.386 0.323-0.226-1.458-0.345-3.036-0.345-4.659zM11.505 20.068l-4-0.766 2.558 10.048c0.132 0.52 0.648 0.782 1.146 0.583l3.705-1.483c0.498-0.199 0.698-0.749 0.444-1.221l-3.853-7.161zM27.026 17.148c-0.113 0-0.235-0.117-0.298-0.187-0.152-0.169-0.299-0.433-0.424-0.763-0.28-0.738-0.434-1.726-0.434-2.784s0.154-2.046 0.434-2.784c0.125-0.33 0.272-0.593 0.424-0.763 0.063-0.070 0.185-0.187 0.298-0.187s0.235 0.117 0.298 0.187c0.152 0.169 0.299 0.433 0.424 0.763 0.28 0.737 0.434 1.726 0.434 2.784s-0.154 2.046-0.434 2.784c-0.125 0.33-0.272 0.593-0.424 0.763-0.063 0.070-0.185 0.187-0.298 0.187z"
                      data-v-2089527b=""></path>
                  </svg>
                </div>
                <h5 class="text-lg font-semibold mt-5" data-v-2089527b=""> {{$t('our[2]')}} </h5>
                <p class="text-slate-400 mt-3" data-v-2089527b=""> {{$t('our[3]')}} </p></div>
            </div>
            <div
              class="choose-card group relative rounded-xl bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6 text-center mt-10 hover:shadow-md dark:hover:shadow-gray-800 transition-all duration-500"
              data-v-2089527b="">
              <div class="relative -mt-16" data-v-2089527b="">
                <div
                  class="icon flex items-center justify-center bg-white dark:bg-slate-900 size-20 rounded-full shadow-md dark:shadow-gray-800 mx-auto p-3"
                  data-v-2089527b="">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                       data-v-2089527b="">
                    <path
                      d="M12 0.984l9 4.031v6q0 4.172-2.578 7.617t-6.422 4.383q-3.844-0.938-6.422-4.383t-2.578-7.617v-6zM12 12v8.953q2.766-0.891 4.688-3.352t2.297-5.602h-6.984zM12 12v-8.813l-6.984 3.094v5.719h6.984z"
                      data-v-2089527b=""></path>
                  </svg>
                </div>
                <h5 class="text-lg font-semibold mt-5" data-v-2089527b=""> {{$t('our[4]')}} </h5>
                <p class="text-slate-400 mt-3" data-v-2089527b=""> {{$t('our[5]')}}</p></div>
            </div>
            <div
              class="choose-card group relative rounded-xl bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6 text-center mt-10 hover:shadow-md dark:hover:shadow-gray-800 transition-all duration-500"
              data-v-2089527b="">
              <div class="relative -mt-16" data-v-2089527b="">
                <div
                  class="icon flex items-center justify-center bg-white dark:bg-slate-900 size-20 rounded-full shadow-md dark:shadow-gray-800 mx-auto p-3"
                  data-v-2089527b="">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                       data-v-2089527b="">
                    <path
                      d="M28.5 23h-12.246c0.359-0.619 0.634-1.29 0.816-2h11.43c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 20h-11.236c0.041-0.328 0.069-0.661 0.069-1 0-0.34-0.028-0.672-0.069-1h11.236c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 17h-11.43c-0.183-0.71-0.457-1.381-0.816-2h12.246c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 14h-12.928c-0.65-0.811-1.453-1.493-2.369-2h15.297c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 11h-16c-0.553 0-1-0.448-1-1 0-0.553 0.447-1 1-1h16c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 8h-16c-0.553 0-1-0.448-1-1 0-0.553 0.447-1 1-1h16c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM16.5 19c0 3.866-3.135 7-7 7s-7-3.134-7-7 3.134-7 7-7c3.865 0 7 3.134 7 7zM11.978 19.761c-0.101-0.239-0.231-0.447-0.394-0.624s-0.348-0.329-0.556-0.456c-0.208-0.127-0.42-0.24-0.637-0.341-0.217-0.1-0.429-0.194-0.637-0.284-0.208-0.089-0.395-0.185-0.559-0.287s-0.296-0.219-0.394-0.35-0.147-0.286-0.147-0.466c0-0.12 0.022-0.234 0.065-0.342 0.044-0.107 0.11-0.2 0.2-0.277 0.089-0.076 0.201-0.137 0.334-0.18 0.133-0.044 0.29-0.065 0.469-0.065 0.229 0 0.439 0.027 0.631 0.083 0.191 0.057 0.36 0.118 0.506 0.187 0.146 0.068 0.269 0.131 0.369 0.189s0.173 0.086 0.219 0.086 0.082-0.012 0.109-0.037c0.026-0.025 0.048-0.064 0.062-0.119 0.015-0.054 0.024-0.123 0.031-0.206 0.006-0.084 0.009-0.187 0.009-0.308 0-0.108-0.002-0.199-0.006-0.271s-0.012-0.134-0.021-0.182c-0.011-0.048-0.023-0.087-0.037-0.116-0.016-0.029-0.043-0.064-0.085-0.105s-0.127-0.094-0.256-0.155c-0.129-0.062-0.277-0.118-0.443-0.167-0.167-0.050-0.346-0.089-0.537-0.118-0.039-0.006-0.079-0.004-0.118-0.009v-1.034h-0.984v1.034c-0.181 0.024-0.356 0.060-0.526 0.109-0.331 0.096-0.618 0.24-0.862 0.434s-0.438 0.438-0.581 0.73c-0.144 0.294-0.215 0.634-0.215 1.021 0 0.337 0.050 0.627 0.149 0.868s0.23 0.451 0.391 0.628 0.342 0.328 0.546 0.455c0.204 0.128 0.415 0.241 0.631 0.341s0.427 0.194 0.631 0.284 0.386 0.186 0.546 0.287c0.161 0.103 0.291 0.219 0.391 0.35 0.1 0.132 0.15 0.289 0.15 0.472 0 0.159-0.029 0.303-0.087 0.433s-0.143 0.237-0.253 0.325-0.244 0.155-0.402 0.203c-0.159 0.048-0.337 0.072-0.538 0.072-0.304 0-0.572-0.034-0.803-0.103s-0.43-0.145-0.597-0.229c-0.167-0.083-0.303-0.158-0.409-0.228-0.106-0.068-0.188-0.103-0.247-0.103-0.042 0-0.079 0.012-0.109 0.034-0.032 0.023-0.057 0.062-0.075 0.116-0.019 0.055-0.032 0.125-0.041 0.213s-0.013 0.196-0.013 0.325c0 0.192 0.012 0.339 0.034 0.441 0.023 0.103 0.062 0.181 0.116 0.234s0.142 0.115 0.265 0.186 0.276 0.137 0.459 0.201c0.183 0.063 0.395 0.118 0.634 0.164 0.239 0.045 0.499 0.067 0.778 0.067 0.012 0 0.023-0.002 0.036-0.002v0.963h0.983v-1.092c0.047-0.012 0.097-0.018 0.143-0.031 0.362-0.108 0.679-0.27 0.95-0.484s0.485-0.481 0.644-0.802c0.158-0.321 0.236-0.693 0.236-1.118 0.001-0.323-0.049-0.604-0.148-0.844zM15.572 24h12.928c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1h-15.297c0.916-0.507 1.719-1.189 2.369-2z"
                      data-v-2089527b=""></path>
                  </svg>
                </div>
                <h5 class="text-lg font-semibold mt-5" data-v-2089527b=""> {{$t('our[6]')}} </h5>
                <p class="text-slate-400 mt-3" data-v-2089527b=""> {{$t('our[7]')}} </p></div>
            </div>
            <div
              class="choose-card group relative rounded-xl bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6 text-center mt-10 hover:shadow-md dark:hover:shadow-gray-800 transition-all duration-500"
              data-v-2089527b="">
              <div class="relative -mt-16" data-v-2089527b="">
                <div
                  class="icon flex items-center justify-center bg-white dark:bg-slate-900 size-20 rounded-full shadow-md dark:shadow-gray-800 mx-auto p-3"
                  data-v-2089527b="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       class="feather feather-users stroke-icon" data-v-2089527b="">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-v-2089527b=""></path>
                    <circle cx="9" cy="7" r="4" data-v-2089527b=""></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" data-v-2089527b=""></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" data-v-2089527b=""></path>
                  </svg>
                </div>
                <h5 class="text-lg font-semibold mt-5" data-v-2089527b=""> {{$t('our[8]')}} </h5>
                <p class="text-slate-400 mt-3" data-v-2089527b=""> {{$t('our[9]')}} </p></div>
            </div>
            <div
              class="choose-card group relative rounded-xl bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6 text-center mt-10 hover:shadow-md dark:hover:shadow-gray-800 transition-all duration-500"
              data-v-2089527b="">
              <div class="relative -mt-16" data-v-2089527b="">
                <div
                  class="icon flex items-center justify-center bg-white dark:bg-slate-900 size-20 rounded-full shadow-md dark:shadow-gray-800 mx-auto p-3"
                  data-v-2089527b="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       class="feather feather-tag stroke-icon" data-v-2089527b="">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
                          data-v-2089527b=""></path>
                    <line x1="7" y1="7" x2="7.01" y2="7" data-v-2089527b=""></line>
                  </svg>
                </div>
                <h5 class="text-lg font-semibold mt-5" data-v-2089527b=""> {{$t('our[10]')}} </h5>
                <p class="text-slate-400 mt-3" data-v-2089527b=""> {{$t('our[11]')}} </p></div>
            </div>
            <div
              class="choose-card group relative rounded-xl bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6 text-center mt-10 hover:shadow-md dark:hover:shadow-gray-800 transition-all duration-500"
              data-v-2089527b="">
              <div class="relative -mt-16" data-v-2089527b="">
                <div
                  class="icon flex items-center justify-center bg-white dark:bg-slate-900 size-20 rounded-full shadow-md dark:shadow-gray-800 mx-auto p-3"
                  data-v-2089527b="">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                       data-v-2089527b="">
                    <path
                      d="M32 13.414c0-6.279-1.837-11.373-4.109-11.413 0.009-0 0.018-0.001 0.027-0.001h-2.592c0 0-6.088 4.573-14.851 6.367-0.268 1.415-0.438 3.102-0.438 5.047s0.171 3.631 0.438 5.047c8.763 1.794 14.851 6.367 14.851 6.367h2.592c-0.009 0-0.018-0.001-0.027-0.001 2.272-0.040 4.109-5.134 4.109-11.413zM27.026 23.102c-0.293 0-0.61-0.304-0.773-0.486-0.395-0.439-0.775-1.124-1.1-1.979-0.727-1.913-1.127-4.478-1.127-7.223s0.4-5.309 1.127-7.223c0.325-0.855 0.705-1.54 1.1-1.979 0.163-0.182 0.48-0.486 0.773-0.486s0.61 0.304 0.773 0.486c0.395 0.439 0.775 1.124 1.1 1.979 0.727 1.913 1.127 4.479 1.127 7.223s-0.4 5.309-1.127 7.223c-0.325 0.855-0.705 1.54-1.1 1.979-0.163 0.181-0.48 0.486-0.773 0.486zM7.869 13.414c0-1.623 0.119-3.201 0.345-4.659-1.48 0.205-2.779 0.323-4.386 0.323-2.096 0-2.096 0-2.096 0l-1.733 2.959v2.755l1.733 2.959c0 0 0 0 2.096 0 1.606 0 2.905 0.118 4.386 0.323-0.226-1.458-0.345-3.036-0.345-4.659zM11.505 20.068l-4-0.766 2.558 10.048c0.132 0.52 0.648 0.782 1.146 0.583l3.705-1.483c0.498-0.199 0.698-0.749 0.444-1.221l-3.853-7.161zM27.026 17.148c-0.113 0-0.235-0.117-0.298-0.187-0.152-0.169-0.299-0.433-0.424-0.763-0.28-0.738-0.434-1.726-0.434-2.784s0.154-2.046 0.434-2.784c0.125-0.33 0.272-0.593 0.424-0.763 0.063-0.070 0.185-0.187 0.298-0.187s0.235 0.117 0.298 0.187c0.152 0.169 0.299 0.433 0.424 0.763 0.28 0.737 0.434 1.726 0.434 2.784s-0.154 2.046-0.434 2.784c-0.125 0.33-0.272 0.593-0.424 0.763-0.063 0.070-0.185 0.187-0.298 0.187z"
                      data-v-2089527b=""></path>
                  </svg>
                </div>
                <h5 class="text-lg font-semibold mt-5" data-v-2089527b=""> {{$t('our[12]')}} </h5>
                <p class="text-slate-400 mt-3" data-v-2089527b=""> {{$t('our[13]')}} </p></div>
            </div>
          </div>
        </div>

        <section class="max960 top-creator-section section-space-t bg--theme--overlay bg_fixed pt-120 pb-120 bottom--wave-wrapper top--wave-wrapper bg_img" style="position: relative;">
          <div class="container list">
            <div class="row">
              <div class="col-md-6 col-lg-6">
                <div class="section-head-sm"><h2 class="colorwhite">{{$t('latest[1]')}}</h2></div>
                <div class="row g-gs rowup">
                  <swiper
                    :options="swiperOption2" ref="mySwiper" style="height: 35rem"
                  >
                    <swiper-slide v-if="item.type==1" v-for="(item,index) in InitData.fundList" :key="index" :index="index">
                      <div class="col-lg-12 col-sm-12" style="overflow:hidden;">
                        <div class="card card-creator-s1">
                          <div class="card-body"><img :src="`./static/head/${item.header}?t=2`" alt="avatar" width="46">
                            <div class="flex-grow-1"><span style="margin-left: 5px;">{{item.username}}</span><span
                              class="d-block fw-medium" style="margin-left: 5px; color: rgb(153 0 203);">{{item.money}} {{item.currency}}</span>
                            </div>
                            <!--                        <div style="margin-right: 5px">{{startDate}}</div>-->
                            <div>{{item.time}}</div>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>
              </div>
              <div class="col-md-6 col-lg-6">
                <div class="section-head-sm"><h2 class="colorwhite">{{$t('latest[2]')}}</h2></div>
                <div class="row g-gs">
                  <swiper
                    :options="swiperOption4" ref="mySwiper" style="height: 35rem"
                  >
                    <swiper-slide v-if="item.type==2" v-for="(item,index) in InitData.fundList" :key="index" :index="index">
                      <div class="col-lg-12 col-sm-12" style="overflow:hidden;">
                        <div class="card card-creator-s1">
                          <div class="card-body"><img :src="`./static/head/${item.header}?t=2`" alt="avatar" width="46">
                            <div class="flex-grow-1"><span style="margin-left: 5px;">{{item.username}}</span><span
                              class="d-block fw-medium" style="margin-left: 5px; color: rgb(153 0 203);">{{item.money}} {{item.currency}}</span>
                            </div>
                            <!--                        <div style="margin-right: 5px">{{startDate}}</div>-->
                            <div>{{item.time}}</div>
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

        <div class="box3 max960">
          <div class="box-wrapper">
            <div class="box3-title">{{$t('accept[0]')}}</div>
            <div style="font-size: 1.5rem;padding: 1rem;line-height: 2.5rem;">{{$t('accept[1]')}}</div>
            <div class="el-row data-flex" style="justify-content:space-between;flex-wrap: wrap;">
              <div class="el-col-xs-8 el-col-sm-6 el-col-md-3 mx-auto mb-5 mt-5" v-for="item in coinlist" :key="item.name">
                <div class="el-mx-auto-95 text-center">
                  <img style="width: 50px; object-fit: cover;" :src="`./static/images/${item.name}.png`" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 20250428视频注释 -->
        <!-- <div  class="box6" style="position: relative;">
          <video webkit-playsinline="true" playsinline="true" :src="'./static/pala.mp4'" controls style="width:100%;max-width: 900px;display: block;margin: 0 auto;"></video>
        </div> -->


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
                <div class="text-center" style="font-size: 1.6rem;margin-top: 2rem" v-if="!showMore" @click="showMore =true">
                  {{$t('clickmore[0]')}}<van-icon name="arrow-down" />
                </div>
                <div style="text-align: center;font-size: 2rem;margin-top: 2rem;" v-if="showMore" @click="showMore =false">
                  <van-icon name="arrow-up" />
                </div>
              </div>

            </div>
          </div>
        </div>
        <section class="section-space" >
          <div class="container max960">
            <div class="section-head text-center">
              <h2 class="mb-3" style="font-size: 3rem">{{$t('partners[0]')}}</h2>
              <div style="font-size: 1.5rem">{{$t('partners[1]')}}</div>
            </div>
          </div>
          <div class="brand__logo--section section--padding">
            <div class="container" >
              <swiper
                :options="swiperOption3"
                class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                style="padding-bottom: 4rem">
                <swiper-slide>
                  <div class="row" style="justify-content: center">
                    <div class="col single__brand--logo" style="cursor: pointer;">
                      <img class="logo__light" :src="'./static/img/yahoofinance.147a8959.png'" style="width: 100%;"></div>
                    <div class="col single__brand--logo" style="cursor: pointer;">
                      <img class="logo__light" :src="'./static/img/globe.png'" style="width: 100%;"></div>
                    <div class="col single__brand--logo" style="cursor: pointer;">
                      <img class="logo__light" :src="'./static/img/BINANCE.bcbec122.png'" style="width: 100%;"></div>
                    <div class="col single__brand--logo" style="cursor: pointer;">
                      <img class="logo__light" :src="'./static/img/coingape.png'" style="width: 100%;"></div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="row" style="justify-content: center">
                    <div class="col single__brand--logo" style="cursor: pointer;">
                      <img class="logo__light" :src="'./static/img/globe.png'" style="width: 100%;"></div>
                    <div class="col single__brand--logo" style="cursor: pointer;">
                      <img class="logo__light" :src="'./static/img/BINANCE.bcbec122.png'" style="width: 100%;"></div>
                    <div class="col single__brand--logo" style="cursor: pointer;">
                      <img class="logo__light" :src="'./static/img/coingape.png'" style="width: 100%;"></div>
                    <div class="col single__brand--logo" style="cursor: pointer;">
                      <img class="logo__light" :src="'./static/img/coinpedia.png'" style="width: 100%;"></div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="row" style="justify-content: center">
                    <div class="col single__brand--logo" style="cursor: pointer;">
                      <img class="logo__light" :src="'./static/img/BINANCE.bcbec122.png'" style="width: 100%;"></div>
                    <div class="col single__brand--logo" style="cursor: pointer;">
                      <img class="logo__light" :src="'./static/img/coingape.png'" style="width: 100%;"></div>
                    <div class="col single__brand--logo" style="cursor: pointer;">
                      <img class="logo__light" :src="'./static/img/coinpedia.png'" style="width: 100%;"></div>
                    <div class="col single__brand--logo" style="cursor: pointer;">
                      <img class="logo__light" :src="'./static/img/google.fd73f84b.png'" style="width: 100%;"></div>
                  </div>
                </swiper-slide>
                <div class="swiper-pagination swiper-pagination-horizontal " slot="pagination">
                </div>
              </swiper>
            </div>
          </div>
        </section>


<!--        <section class="section-space max960">-->
<!--          <div class="container">-->
<!--            <div class="section-head text-center">-->
<!--              <h3 class="mb-3" style="font-size: 2rem">{{$t('payment[0]')}}</h3>-->
<!--              <p v-html="$t('payment[1]',{WT:InitData.setting.web_title})" style="font-size: 1.5rem"></p>-->
<!--            </div>-->
<!--            <div class="PayJoinSection">-->
<!--              <div class="wrap">-->
<!--                <div class="item-box item-box_1">-->
<!--                  <div class="item">-->
<!--                    <img class="svg-icon" :src="'./static/images/BTC.png'">-->
<!--                  </div>-->
<!--                  <div class="item">-->
<!--                    <img class="svg-icon" :src="'./static/images/USDT-TRC20.png'">-->
<!--                  </div>-->
<!--                  <div class="item">-->
<!--                    <img class="svg-icon" :src="'./static/images/ETH.png'">-->
<!--                  </div>-->
<!--                  <div class="item">-->
<!--                    <img class="svg-icon" :src="'./static/images/LTC.png'">-->
<!--                  </div>-->
<!--                  <div class="item">-->
<!--                    <img class="svg-icon" :src="'./static/images/BNB.png'">-->
<!--                  </div>-->
<!--                  <div class="item">-->
<!--                    <img class="svg-icon" :src="'./static/images/coinbase.png'">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </section>-->

        <div data-v-2089527b="" class="container md:mt-24 mt-16 max960">
          <div data-v-2089527b="" class="grid grid-cols-1 text-center"><span data-v-2089527b=""
                                                                             class="section-title mb-2">{{$t('say[0]')}}</span>
            <h3 style="margin: 0" class="md:text-[30px] text-[26px] font-semibold mb-3"> {{$t('say[1]')}} </h3></div>
          <div data-v-2089527b="" class="">
            <div data-v-2089527b="" class="md:col-span-5 relative">
              <vue-tiny-slider v-bind="tinySliderOptions">
<!--                <div class="tiny-slide ">-->
<!--                  <div class="m-2 p-3 bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">-->
<!--                    <div class="rating mb-5"></div>-->
<!--                    <div class="mb-4"><p> Reliable and Steady </p>-->
<!--                      <p> Bsvcloud provides consistent returns. No issues with withdrawals, and everything works-->
<!--                        as promised. </p></div>-->
<!--                    <div class="flex items-center gap-2"><img :src="'./static/image/1.dfd8cdbb.png'"-->
<!--                                                              class="rounded-full size-12" alt="user">-->
<!--                      <div class=""><p class="text-[15px] font-medium text-white m-0">Benedict Louis</p></div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
                  <div class="tiny-slide tns-item tns-slide-active" id="tns2-item0">
                    <div class="m-2 p-3 bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                      <div class="rating mb-5"></div>
                      <div class="mb-4"><p> {{$t('say[2]')}} </p>
                        <p> {{$t('say[3]')}} </p></div>
                      <div class="flex items-center gap-2"><img :src="'./static/image/1.dfd8cdbb.png'" class="rounded-full size-12"
                                                                alt="user">
                        <div class=""><p class="text-[15px] font-medium text-white m-0">{{$t('say[4]')}}</p></div>
                      </div>
                    </div>
                  </div>
                  <div class="tiny-slide tns-item" id="tns2-item1" aria-hidden="true" tabindex="-1">
                    <div class="m-2 p-3 bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                      <div class="rating mb-5"></div>
                      <div class="mb-4"><p> {{$t('say[5]')}} </p>
                        <p> {{$t('say[6]')}} </p></div>
                      <div class="flex items-center gap-2"><img :src="'./static/image/2.caef3def.png'" class="rounded-full size-12"
                                                                alt="user">
                        <div class=""><p class="text-[15px] font-medium text-white m-0">{{$t('say[7]')}}</p></div>
                      </div>
                    </div>
                  </div>
                  <div class="tiny-slide tns-item" id="tns2-item2" aria-hidden="true" tabindex="-1">
                    <div class="m-2 p-3 bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                      <div class="rating mb-5"></div>
                      <div class="mb-4"><p> {{$t('say[8]')}} </p>
                        <p> {{$t('say[9]')}} </p>
                      </div>
                      <div class="flex items-center gap-2"><img :src="'./static/image/3.e5bf84e2.png'" class="rounded-full size-12"
                                                                alt="user">
                        <div class=""><p class="text-[15px] font-medium text-white m-0">{{$t('say[10]')}}</p></div>
                      </div>
                    </div>
                  </div>
                  <div class="tiny-slide tns-item" id="tns2-item3" aria-hidden="true" tabindex="-1">
                    <div class="m-2 p-3 bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                      <div class="rating mb-5"></div>
                      <div class="mb-4"><p>{{$t('say[11]')}}</p>
                        <p> {{$t('say[12]')}} </p></div>
                      <div class="flex items-center gap-2"><img :src="'./static/image/4.2b76d810.png'" class="rounded-full size-12"
                                                                alt="user">
                        <div class=""><p class="text-[15px] font-medium text-white m-0">{{$t('say[13]')}}</p></div>
                      </div>
                    </div>
                  </div>
                  <div class="tiny-slide tns-item" id="tns2-item4" aria-hidden="true" tabindex="-1">
                    <div class="m-2 p-3 bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                      <div class="rating mb-5"></div>
                      <div class="mb-4"><p>{{$t('say[14]')}}</p>
                        <p> {{$t('say[15]')}} </p></div>
                      <div class="flex items-center gap-2"><img :src="'./static/image/5.a423c4a8.png'" class="rounded-full size-12"
                                                                alt="user">
                        <div class=""><p class="text-[15px] font-medium text-white m-0">{{$t('say[16]')}}</p></div>
                      </div>
                    </div>
                  </div>
                  <div class="tiny-slide tns-item" id="tns2-item5" aria-hidden="true" tabindex="-1">
                    <div class="m-2 p-3 bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                      <div class="rating mb-5"></div>
                      <div class="mb-4"><p>{{$t('say[17]')}}</p>
                        <p> {{$t('say[18]')}} </p></div>
                      <div class="flex items-center gap-2"><img :src="'./static/image/6.6c1e9e4a.png'" class="rounded-full size-12"
                                                                alt="user">
                        <div class=""><p class="text-[15px] font-medium text-white m-0">{{$t('say[19]')}}</p></div>
                      </div>
                    </div>
                  </div>
              </vue-tiny-slider>

              <div class="overflow-hidden after:content-[''] after:absolute after:h-14 after:w-14 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-top-[50px] after:start-[30%] after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
            </div>
          </div>
        </div>
<!-- Bolg Section -->
      <div class="box3 max960">
        <div class="box-wrapper">
          <div class="box3-title text-center" style="color: #fba342;">{{$t('blog[3]')}}</div>
          <div class="text-center" style="font-size: 1.5rem;padding: 1rem;line-height: 2.5rem;">{{$t('blog[4]')}}</div>
          <div class="el-row data-flex" style="justify-content:space-between;flex-wrap: wrap;">
            <div class="el-col-xs-12 el-col-sm-12 el-col-md-8 mx-auto mb-5 mt-5" v-for="(el, i) in listDataBlog" :key="i">
              <div class="el-mx-auto-95" v-if="i <= 2" @click.stop="$router.push({
                  path: '/blogDetail',
                  query: {
                    id: el.id
                  }
                })">
                <div class="el_com_card_np">
                  <img style="width: 100%; height: 200px; object-fit: cover;border-radius: 12px;" :src="`${ApiUrl}${el.cover_img	}`" alt="">
                  <div class="" style="font-size: 1.5rem;padding: 1rem;line-height: 2.5rem;color: #333;">{{el.title}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="justify-content-between data-flex el-content-text">
          <div class="to-blog el-content-label" @click="$router.push({
            path: '/blog'
          })">{{$t('blog[5]')}}</div>
        </div>
        </div>
      </div>
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
    <div class="mask" v-if="showDialog">
      <div class="modal">
        <div class="modal-header">
          <div class="modal-title">{{$t('settle[6]')}}</div>
          <div class="close" @click="showDialog = false"><i class="el-icon-close"></i></div>
        </div>
        <div class="modal-body">
          <div class="buynow" >
            <div id="el-id-9097-0" class="el-dialog__body">
              <div >
                <div  class="flex-4">
                  <label  class="font-weight-bold  input_label">{{$t('settle[7]')}}</label>
                  <div  class="">
                    <van-stepper :disabled="detailData.amount==10|| detailData.amount==100" v-model="number" input-width="inherit" button-size="40px"/>
                  </div>
                </div>
                <div  class="el-row mb-4">
                  <label  class="font-weight-bold input_label">{{$t('settle[8]')}}</label>
                  <div  class="el-input el-input--large el-input--suffix">
                    <div class="el-input__wrapper" >
                      <input class="el-input__inner" v-model="money" readonly type="text" autocomplete="off" tabindex="0">
                    </div>
                  </div>
                </div>
                <div  class="el-row mb-4">
                  <label  class="font-weight-bold input_label">{{$t('settle[9]')}}</label>
                  <div  class="el-input el-input--large el-input--suffix">
                    <div class="el-input__wrapper" >
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
          </div>
          <div class="centered">
            <button @click="buyProduct" class="main-btn modal-submit" style="width: fit-content;min-width: 200px;height: 40px; margin-bottom: 10px; font-weight: 400;" type="submit">{{$t('settle[10]')}}</button>
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
  import VueTinySlider from 'vue-tiny-slider';
  export default {
    name: 'Home',
    inject: ['reloadHtml'],
    components: {
      swiper, swiperSlide,VueTinySlider
    },

    data() {
      return {
        showMore:false,
        listDataBlog: [],
        coinlist:[
          {
            name:'BTC',
            symbol:'btcusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'ETH',
            symbol:'ethusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'LTC',
            symbol:'ltcusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'ATOM',
            symbol:'atomusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'TRX',
            symbol:'trxusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'CKB',
            symbol:'ckbusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'BCH',
            symbol:'bchusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'KSM',
            symbol:'ksmusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'DOT',
            symbol:'dotusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'FIL',
            symbol:'filusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'USDC',
            symbol:'usdcusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'XTZ',
            symbol:'xtzusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
        ],
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
          loop: true,  // 是否循环轮播
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          },
        },
        swiperOption: {
          loop: true,  // 是否循环轮播
          speed:2000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          },
          effect : 'fade',
          fadeEffect: {
            crossFade: true,
          }
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
          bulletClass :'swiper-pagination-bullet',
          bulletActiveClass:'my-bullet-active',
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
        swiperOption3: {
          loop: true,  // 是否循环轮播
          speed:2000,
          autoplay: {   // 自动轮播
            delay: 3000,
            disableOnInteraction: false,
          },
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
        swiperOption2: {
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
        swiperOption4: {
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
        videoFlag:false,
        tinySliderOptions:{
          "loop": true,
          autoplay: true,
          controls:false,
          autoplayTimeout: 3000,
          nav: false,
          controlsPosition: 'bottom',
          autoplayButtonOutput: false,
          responsive: {
            640: {
              items: 1
            },
            700: {
              items: 1
            },
            900: {
              items: 3
            }
          }
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
      if (this.InitData.bannerList.length == 1) {
        this.swiperOption0.autoplay = false;
      }
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
      // let that = this;
      // let ww = window.innerWidth;
      // if (ww < 750) {
      //   this.settings = {
      //     "dots": true,
      //     "autoplay": true,
      //     "focusOnSelect": true,
      //     "infinite": true,
      //     "speed": 3000,
      //     "slidesToShow": 1,
      //     "slidesToScroll": 1,
      //     "touchThreshold": 1,
      //   }
      //   // this.$refs.slick.reInit();
      // }
      // window.onresize = () => {
      //   that.resize();
      // };
    },
    activated() {

    },
    destroyed() {
      // clearInterval(this.intv)
    },
    methods: {
      downloadApp (app) {
        if(app == 'ios')
        {
          this.$Util.OpenUrl(this.InitData.setting.app_down_ios)
        }
        else
        {
          this.$Util.OpenUrl(this.InitData.setting.app_down_android)
        }
      },
      videoClickPlay() {
        this.$refs.videoPlay.play();
        this.videoFlag = true;
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
            "touchThreshold": 3,
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
        this.$Model.ProductBuy(data, data => {
          if(data.code==1){
            this.$router.push("/MyPackages")
          }
        });
      },
      orderNow(item) {
        this.detailData = item;
        this.money = this.detailData.amount;
        this.number =1;
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
  .work .g-4,  .work .gy-4 {
    --bs-gutter-y: 1.5rem;
  }
  .work .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .work .row>*{
    flex-shrink: 0;
    max-width: 100%;
    width: 100%;
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

  @media only screen and (max-width: 1024px) {
    html {
      font-size:10px
    }
    .cover{
      background-size: cover !important;
      background-position: center;
    }
    .reve {
      flex-direction: column-reverse;
    }
  }

  /*::-webkit-scrollbar {*/
  /*  width: 4px;*/
  /*  height: 5px*/
  /*}*/

  /*::-webkit-scrollbar-corner,::-webkit-scrollbar-track {*/
  /*  background-color: #e2e2e2*/
  /*}*/

  /*::-webkit-scrollbar-thumb {*/
  /*  border-radius: 0;*/
  /*  background-color: rgb(13,110,253)*/
  /*}*/

  .slide-enter-active,.slide-leave-active {
    transition: all .2s ease
  }

  .slide-enter,.slide-leave-to {
    transform: translateY(10px);
    opacity: 0
  }

  .slide-right-enter-active,.slide-right-leave-active {
    transition: all .2s ease
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
    background-color: rgb(13,110,253)!important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;

    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: rgb(13,110,253)!important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  /*.el-pagination.is-background .el-pager li:not(.disabled).active {*/
  /*  background-color: rgb(13,110,253)!important*/
  /*}*/

  /*.el-pagination.is-background .el-pager li:not(.active):hover {*/
  /*  color: rgb(13,110,253)!important*/
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
    color: rgb(13,110,253);
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: rgb(13,110,253)
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

    border: 1px solid #d9d9d9!important
  }

  .el-textarea__inner {
    font-size: 1.5rem!important;
    font-family: myFont;
  }

  .el-form-item__label {
    padding-bottom: 1rem!important;
    line-height: normal!important;
    font-size: 1.5rem!important;
    word-wrap: break-word
  }

  .el-input.is-disabled .el-input__inner {
    cursor: default!important
  }

  .el-radio {
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
    color: rgb(13,110,253)
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: rgb(13,110,253)!important;
    border-color: rgb(13,110,253)!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: rgb(13,110,253)!important
  }
  .container .box3 .product-list .product-item {
    position: relative;
  }
  .container .box-wrapper {
    position: relative;
    z-index: 2;
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
      max-width: 1300px;
      margin: 0 auto;
    }

    .container .box1 {
      display: flex;
      align-items: center;
      width: 100%;
      /*height: 70rem;*/
      box-sizing: border-box;
      padding: 2rem 3rem 10rem 3rem
    }

    .container .box1 .box1-inner-area {
      /*min-width: 70rem;*/
      /*width: 33.33%*/
    }

    .container .box1 .box1-inner-area .box1-title {
      font-size: 4.4rem;
      font-weight: 700;
      word-wrap: break-word;
      line-height: 1.3;
    }

    .container .box1 .box1-inner-area .box1-desc {
      margin: 3rem 0 2.5rem;
      line-height: 160%;
      font-size: 1.6rem;
      /*color: #fff;*/
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
      background-color: rgb(124 58 237);
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
      box-shadow: rgba(102, 34, 130, 0.33) 0px 0px 5px 0px;
      padding: 10px 20px;
      border-radius: 10px;
      border: 1px solid rgb(13,110,253);
      margin: 0 1rem;
    }

    .container .box2 .tab-list .tab-item .img {
      min-width: 32px;
      max-width:32px;
      height: 32px
    }

    .container .box2 .tab-list .tab-item .line {
      width: 8rem;
      height: 2px;
      margin: 2rem 0;
      border-radius: 2px;
      background-image: linear-gradient(90deg, #FFEB3B, #FF9800)
    }

    .container .box2 .tab-list .tab-item .title {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 2.4rem;
      font-weight: 700;

      text-align: left;
      word-wrap: break-word;
      margin-top: 10px;
    }

    .container .box2 .tab-list .tab-item .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.5rem;

      text-align: left;
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
      left: 34rem;
      bottom: 1rem;
      width: calc(100% - 36rem);
    }
    .container .box3 .product-list .product-item:not(:last-child) {
      margin-bottom: 3rem
    }

    .container .box3 .product-list .product-item .img-box {
      position: relative;
      min-width: 30rem;
      max-width: 30rem;
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
      margin-bottom: 2.5rem;
      font-size: 2.4rem;
      font-weight: 700;

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
      min-width: 16rem;
      max-width: 16rem;
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
      background-image: linear-gradient(90deg, #FFEB3B, #FF9800);
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
      background-image: linear-gradient(90deg, #FFEB3B, #FF9800)
    }

    .container .box4 .box-wrapper .left .desc,.container .box4 .box-wrapper .right .desc,.container .box5 .box-wrapper .left .desc,.container .box5 .box-wrapper .right .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.8rem;

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
      padding: 0 3rem 8rem
    }

    .container .box6 .box6-title {
      position: relative;
      width: 100%;
      margin-bottom: 2rem;
      font-size: 3rem;
      font-weight: 700;

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

      text-align: center;
      word-break: break-all
    }

    .container .box6 .t-table .tr .td:last-child {
      flex: 3
    }

    .container .box7 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 3rem 8rem
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
      background-image: linear-gradient(90deg, #FFEB3B, #FF9800)
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
      transition: all .3s
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
      background-color: rgb(13,110,253)
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .right-icon i {
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      transition: all .3s ease
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
      background-image: linear-gradient(90deg, #FFEB3B, #FF9800)
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

      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .customer-item .position {
      width: 100%;
      margin: 1rem 0;
      font-size: 1.5rem;

      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .customer-item .content {
      width: 100%;
      line-height: 160%;
      font-size: 1.5rem;

      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .active {
      background-color: rgb(13,110,253)
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
      padding: 2rem 1rem 10rem 1rem;
      /*background: url(../img/top-img.2fb775d8.png) no-repeat;*/
      /*background-size: auto 100%;*/
      background-position: 0;
    }

    .container .box1 .box1-inner-area {
      /*width: 100%;*/
      /*max-width: 56rem*/
    }

    .container .box1 .box1-inner-area .box1-title {
      width: 100%;
      line-height: 110%;
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
      word-wrap: break-word
    }

    .container .box1 .box1-inner-area .box1-desc {
      width: 100%;
      margin: 2rem 0 1.5rem;
      line-height: 160%;
      font-size: 1.5rem;

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
      background-color: rgb(124 58 237);
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
      box-shadow: rgba(102, 34, 130, 0.33) 0px 0px 5px 0px;
      padding: 10px 20px;
      border-radius: 10px;
      border: 1px solid rgb(13,110,253);
      margin: 0 1rem;
    }

    .container .box2 .tab-list .tab-item:not(:last-child) {
      margin-bottom: 2rem
    }

    .container .box2 .tab-list .tab-item .img {
      min-width: 32px;
      max-width: 32px;
      height: 32px;
    }

    .container .box2 .tab-list .tab-item .line {
      width: 8rem;
      height: 2px;
      margin: 1.5rem 0;
      border-radius: 2px;
      background-image: linear-gradient(90deg, #FFEB3B, #FF9800)
    }

    .container .box2 .tab-list .tab-item .title {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 2rem;
      font-weight: 700;

      text-align: left;
      word-wrap: break-word;
      margin-top: 10px;
    }

    .container .box2 .tab-list .tab-item .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.5rem;

      text-align: left;
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
      background-image: linear-gradient(90deg, #FFEB3B, #FF9800);
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
      background-image: linear-gradient(90deg, #FFEB3B, #FF9800)
    }

    .container .box4 .box-wrapper .left .desc,.container .box4 .box-wrapper .right .desc,.container .box5 .box-wrapper .left .desc,.container .box5 .box-wrapper .right .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.6rem;

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

      text-align: center;
      word-break: break-all
    }

    .container .box6 .t-table .tr .td:last-child {
      flex: 3
    }

    .container .box7 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 1rem 3rem
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
      background-image: linear-gradient(90deg, #FFEB3B, #FF9800)
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
      transition: all .3s
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
      background-color: rgb(13,110,253)
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .right-icon i {
      font-size: 1.4rem;
      font-weight: 700;
      color: #fff;
      transition: all .3s ease
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
      background-image: linear-gradient(90deg, #FFEB3B, #FF9800)
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

      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .customer-item .position {
      width: 100%;
      margin: 1rem 0;
      font-size: 1.4rem;

      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .customer-item .content {
      width: 100%;
      line-height: 160%;
      font-size: 1.3rem;

      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .active {
      background-color: rgb(13,110,253)
    }
  }
  .mySwiper>>>.swiper-slide-next {
    background-color: rgb(13,110,253) !important;
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
      background-color: #5a90ff;
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

      white-space: nowrap
    }

    .container .quotes .coin-list .coin-item .price {
      margin-right: 1.2rem;
      font-size: 1.7rem;

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

      white-space: nowrap
    }

    .container .quotes .coin-list .coin-item .price {
      margin-right: 1.2rem;
      font-size: 1.7rem;

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



  /* 超小屏幕（手机，小于 768px） */
  @media (max-width: 768px) {
    .plan-card {
      min-height: 450px !important;
    }
    .dasbtn {
      margin-top: 10px;
    }
    .d-none {
      display: none;
    }
    .title-main {
      font-size: 2.5rem !important;
    }
    .col-md-6 {
      width: 100%;
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
      background: linear-gradient(180deg, #ffd701 0%, #ffa701 100%);
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
      padding: 70px 16px 0px;
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
      border: 1px solid rgb(13,110,253);
    }
    .box1-inner-area {
      padding: 70px 16px 70px;
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
      color: rgb(13,110,253);
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
      border: 1px solid rgb(13,110,253);
    }
    .box1-inner-area {
      padding: 70px 16px 70px;
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
      color: rgb(13,110,253);
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
  }
  .plan-card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height:500px;
    position: relative;
    overflow: hidden;
    /*border: 1px solid #2d3651;*/
    text-align: center;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    z-index: 1;
    /*background-color: #fff;*/
    /*border: 1px solid rgba(0, 0, 0, .125);*/
    border-radius: 20px;
    -webkit-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    margin: 1rem;
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

  }
  .main-btn {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 56px;
    border: none;
    outline: none;
    background: linear-gradient(180deg, #ffd701 0%, #ffa701 100%);
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
    transition: .2s ease;
  }

  .buttons {
    width: 90%;
    display: flex;
    grid-gap: 16px;
    margin: 15px auto;
  }

  .buttons div {
    width: 48%;
    height: 34px;
    font-weight: 400;
  }
  .buttons .ed {
    background: none;
    border: 1px solid rgb(13,110,253);
    color: rgb(13,110,253);
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
  .buynow >>>.van-stepper__minus, .buynow >>>.van-stepper__plus {
    background-color: #ffd701 !important;
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
    transition: all 260ms cubic-bezier(0.42, 0, 0.58, 1) 0s;
    border: 1px solid rgb(13,110,253);
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

    text-align: center;
    white-space: nowrap;
    background: linear-gradient(110deg,#f7deb9,rgb(124 58 237) 59%,#e4be83);
    cursor: pointer;
    border: none;
  }
  .dasbtn {
    background: linear-gradient(110deg,#f7deb9,rgb(124 58 237) 59%,#e4be83) !important;
  }
  .main-btnNew1 {
    display: inline-block;
    border-radius: 10px;
    background: linear-gradient(110deg,#f7deb9,rgb(124 58 237) 59%,#e4be83);
    padding: 14px 30px 14px 30px;
    text-align: center;

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
    color: rgb(13,110,253);
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
    color: rgb(13,110,253);
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
    transition: .2s ease;
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
  table {
    width: 100%;
    font-size: 1.4rem;
  }
  table tbody {
    border: 0 !important;
  }
  table thead {
    background: #eee;
    font-size: 1.3rem;
  }
  .d-flex div,tbody, td, tfoot, th {
    width: 33.3%;
    text-align: center;
    padding: 13px 34px;
    font-size: 1.5rem;
  }
  tbody, td, tfoot, th, thead, tr {
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
  .box-wrapper {
    color: #ffffff;
  }
  .feature-card {
    padding: 30px 15px;
    position: relative;
    border: 1px solid rgb(109,151,200);
    border-radius: 20px;
    background-color: #fff;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
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
    background: linear-gradient(180deg, #ffd701 0%, #ffa701 100%);
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
    background: linear-gradient(180deg, #ffd701 0%, #ffa701 100%);
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
    /*max-width: 625px;*/
    margin-left: auto;
    margin-right: auto;
    font-size: 1.25rem;
  }
  @media (min-width: 576px){
    .col-sm-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .work .col-sm-6 {
      flex: 0 0 auto;
      width: 50% !important;
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
  @media (min-width: 1200px) {
    .col-xl-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .work .col-xl-3 {
      flex: 0 0 auto;
      width: 25% !important;
    }
  }
.how-work-item {
  margin-top: 1rem;
}
  .how-work {
    margin-top: 2rem;
  }
  .hero-text {
    font-size: 2rem;
    color: rgb(239, 208, 160);
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
    background: linear-gradient(hsl(211 ,81.57%, 68.8%), hsl(226, 92.08% ,72.12%)) padding-box, linear-gradient(180deg, hsl(31, 68%, 38%) 2.95%, hsl(59, 90%,77%) 54.04%, hsl(31, 68%, 38%) 105.51%) border-box;
    border: 2px solid transparent;
    padding: 40px 24px;
    padding-left: 0;
    border-radius: 15px;
    position: relative;
    height: 100%;
    margin-left: 32px;
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
    color: #fff;
  }
  .py-120 {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .slick-list {
    padding: 0 4rem;
  }
  .mt-2 {
    margin-bottom: 1rem;
    padding:0 2rem;
  }

  .swiper-wrapper{
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 0;
    height: 100%;
    width: 100%;
  }
  .swiper-wrapper>>>.swiper-slide div{
    height: 100%;
    width: 100%;
    background-size:cover !important;
    background-position: center center !important;
  }
  .ed:hover {
    background: linear-gradient(90deg, #707070, #010007) !important;
    color: #fff !important;
  }
  .clone .clone__content{padding-left:30px}
  .clone .clone__content ul{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:32px;row-gap:16px;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:35px}
  .clone .clone__content ul li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:18px;font-weight:500;gap:10px;color:#fff}
  .clone .clone__content ul li i{color:#4569e7}
  .clone .clone__thumb{padding:140px 30px;background-repeat:no-repeat;background-size:110px,cover;background-position:left 6% bottom 37%,left center;border-radius:20px;position:relative;z-index:1;overflow:hidden}
  .clone .clone__thumb-single{padding:16px 40px 16px 30px;background:linear-gradient(92.98deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.2) 100%);-webkit-box-shadow:-4px 8px 56px rgba(0,0,0,.1);box-shadow:-4px 8px 56px rgba(0,0,0,.1);-webkit-backdrop-filter:blur(7.5px);backdrop-filter:blur(7.5px);border-radius:16px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:16px;margin-bottom:40px;-webkit-box-shadow:inset 1px 1px 0px 0px #bcbcbc,inset -1px -1px 0px 0px #fff,inset 1px -1px 0px 0px #bcbcbc,inset -1px 1px 0px 0px #bcbcbc;box-shadow:inset 1px 1px 0px 0px #bcbcbc,inset -1px -1px 0px 0px #fff,inset 1px -1px 0px 0px #bcbcbc,inset -1px 1px 0px 0px #bcbcbc;position:relative;text-align:start}
  .clone .clone__thumb-single:nth-last-of-type(1){margin-bottom:0px}
  .clone .clone__thumb-single:nth-last-of-type(1) .tag{background-color:#e0013f;color:#fff}
  .clone .clone__thumb-single .tag{position:absolute;top:100%;left:24px;display:inline-block;padding:8px 16px;line-height:1;background:#8fffec;border-radius:100px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}
  .clone i{color:#fff}
  .clone .thumb{margin-left:20px;border-radius:8px;width:72px;height:72px;min-width:72px}
  .clone .thumb img{width:100%;height:100%;border-radius:8px}
  .clone .content{margin-right:100px}
  .clone .content P{line-height:1}
  .clone .content P:nth-of-type(1){font-weight:600}
  .clone .content P:nth-last-of-type(1){font-weight:400;font-size:14px;margin-top:6px;color:rgba(255,255,255,.5215686275)}
  .clone button{width:72px;min-width:72px;height:72px;border-radius:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:#fff;background:linear-gradient(144.96deg, rgba(245, 245, 245, 0.2) 15.37%, rgba(217, 217, 217, 0.1) 85.91%);mix-blend-mode:normal;-webkit-backdrop-filter:blur(12.1053px);backdrop-filter:blur(12.1053px);margin-left:auto;margin-right:auto;color:#fff;font-size:20px;position:relative;z-index:1;border:none;-webkit-box-shadow:inset 1px 1px 0px 0px #bcbcbc,inset -1px -1px 0px 0px #fff,inset 1px -1px 0px 0px #bcbcbc,inset -1px 1px 0px 0px #bcbcbc;box-shadow:inset 1px 1px 0px 0px #bcbcbc,inset -1px -1px 0px 0px #fff,inset 1px -1px 0px 0px #bcbcbc,inset -1px 1px 0px 0px #bcbcbc}
  .clone button::after{content:"";position:absolute;top:50%;right:20px;width:1.6px;height:20px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background-color:#fff}
  .clone button::before{content:"";position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:-10px;width:32px;min-width:32px;height:32px;border-radius:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:#1aefd5;z-index:-1;-webkit-filter:blur(7.1053px);filter:blur(7.1053px)}
  .clone .anime img{position:absolute;z-index:-1;-webkit-animation:anime 5s linear infinite;animation:anime 5s linear infinite}
  .clone .anime .anime-one{top:24px;left:24px}
  .clone .anime .anime-two{bottom:24px;right:24px;-webkit-animation-delay:.6s;animation-delay:.6s}
  .clone .section__content-cta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:30px;-ms-flex-wrap:wrap;flex-wrap:wrap}
  .section__content .paragraph {
    margin-top: 30px;
  }
  .breadcrumb, .section__content .paragraph p:last-of-type {
    margin-bottom: 0;
  }
  .section__content .paragraph p {
    text-transform: none;
  }
  .clone__thumb img{
    border-radius: 20px;
    width: 100%;
  }
  .items-gap {
    row-gap: 30px;
  }
  .align-items-center {
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .h2 {
    font-size: 45px;
    line-height: 60px;
  }
  .clone__content>>>p{
    font-size: 16px;
    line-height: 30px;
    font-weight: 400;
  }
  .clone .clone__content ul li{
  }

  .language .language__slider{margin:-20px 0px}
  .language .language__slider-single{margin-right: 35px; min-width:fit-content;background-color:#fff;padding:0 14px;-webkit-box-shadow:0px 4px 16px rgba(69,105,231,.15);box-shadow:0px 4px 16px rgba(69,105,231,.15);border-radius:100px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:10px;margin-top:20px;margin-bottom:20px}
  .language .language__slider-single .thumb{width:40px;min-width:40px;height:40px;border-radius:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}
  .language .language__slider-single .thumb img{border-radius:50%}
  .language .language__slider-single p{font-size:18px;color: #000000!important;}
  .language .language__slider-rtl{margin-top:10px;margin-bottom:-20px}
  .language .language__slider-rtl .language__slider-single{direction:ltr}



  .language{
    padding: 100px 0;
  }
  .language__slider-single{
    direction: ltr;
    max-width: 380px;
  }
  .fw-5 {
    text-transform: none;
  }

  .btn_video {
    position:relative;
    display:block;
    margin-top:10px;
  }
  .btn_video_img {
    position:relative;
    z-index:5;
    display:block;
    border-radius: 10px;
    overflow:hidden;
  }
  .btn_video_img img {
    display: block;
    width: 100%;
    height: auto;
  }
  .btn_video_play {
    position:absolute;
    z-index:10;
    top:50%;
    left:50%;
    width:63px;
    height:63px;
    background:#fff;
    border-radius:50%;
    transform: translate(-50%, -50%);
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .btn_video_play svg {
    margin-left:5px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .btn_video_play:before {
    content:'';
    position:absolute;
    top:-10px;
    left:-10px;
    right:-10px;
    bottom:-10px;
    border:1px #fff solid;
    border-radius:50%;
  }
  .btn_video_play:after {
    content:'';
    position:absolute;
    top:-20px;
    left:-20px;
    right:-20px;
    bottom:-20px;
    border:1px #fff solid;
    border-radius:50%;
    opacity:0.4;
  }
  .btn_video:hover svg {
    transform:scale(1.5);
  }
  @-webkit-keyframes pulse {
    0% {
      transform:scale(0.5);
    }
    100% {
      transform:scale(1);
    }
  }
  @keyframes pulse {
    0% {
      transform:scale(0.5);
    }
    100% {
      transform:scale(1);
    }
  }
  @media (min-width: 768px) {
    .col-md-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
  }
  @media (min-width: 768px) {
    .col-md-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
  }
  .font-size-lg {
    font-size: 2.08rem;
  }
  .pl-16, .px-16 {
    padding-left: 4rem !important;
  }
  .display-2, .display-3, .display-4, .display-5 {
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
  }
  .btn-warning{
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    user-select: none;
    border: 1px solid transparent;
    line-height: 1.5;
    border-radius: 0.42rem;
    box-shadow: none;
    margin-right: 1.25rem !important;
    margin-top: 2rem !important;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    padding-right: 2.5rem !important;
    padding-left: 2.5rem !important;
    text-transform: uppercase !important;
    font-weight: 500 !important;
    font-size: 1.5rem !important;
    outline: none !important;
    vertical-align: middle;
    text-decoration: none !important;
    cursor: pointer;
    color: #ffffff;
    background-color: #EE9D01;
    border-color: #EE9D01;
  }
  .font-size-lg p {
    color: #3F4254;
    margin-bottom: 1rem;
    line-height: 2rem;
    font-size: 1.5rem;
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
    background-color: rgb(124 58 237);
    -webkit-transition: .3s linear;
    transition: .3s linear;
  }

  .work-item::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 0;
    background-color: rgb(124 58 237);
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
    color: rgb(124 58 237);
  }

  .work-item:hover .work-item__number {

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
    background-color: rgb(124 58 237);
    -webkit-transition: .3s linear;
    transition: .3s linear;
  }

  .work-item__border::after {
    position: absolute;
    content: "";
    width: 0;
    height: 2px;
    background-color: rgb(124 58 237);
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
  }

  .work-item__icon {
    font-size: 40px;
    color: #fff;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: rgb(124 58 237);
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
    background-color: rgb(124 58 237);
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
    background-color: rgb(124 58 237);
    bottom: -4px;
    z-index: -1;
  }

  .work .section-heading__desc {
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    font-size: 2rem;

    text-align: center;
    font-weight: bolder;
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
  .single__brand--logo {
    width: 33%;
    max-width: 300px;
  }
  .grid {
    display: grid !important;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
  }
  .gap-\[30px\] {
    gap: 30px !important;
  }
  @media (min-width: 768px) {
    .md\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }
  }
  @media (min-width: 1024px) {
    .lg\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    }
  }
  @media (min-width: 1280px) {
    .xl\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    }
  }
  .rounded-xl {
    border-radius: .75rem !important;
  }
  .mt-10 {
    margin-top: 2.5rem !important;
  }

  .choose-card .icon {
    position: relative;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px
  }

  .choose-card .icon:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background: linear-gradient(90deg, #761fe3 0, #d093e8);
    transition: all .5s ease;
    -moz-transition: all .5s ease;
    -webkit-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    opacity: .2
  }

  .choose-card .icon .stroke-icon {
    fill: none;
    stroke: #7c3aed
  }

  .choose-card .icon svg {
    width: 28px;
    height: 28px;
    fill: #7c3aed
  }

  .choose-card .icon .path-ico path {
    fill: #7c3aed
  }

  .choose-card h3 {
    font-size: 20px;
    font-weight: 600
  }
  .p-6 {
    padding: 1.5rem !important;
  }
  .-mt-16 {
    margin-top: -4rem !important;
  }
  .dark\:bg-slate-900:is(.dark *) {
    --tw-bg-opacity: 1 !important;
    background-color: rgb(15 23 42) !important;
  }
  .dark\:shadow-gray-800:is(.dark *) {
    --tw-shadow-color: #1f2937 !important;
    --tw-shadow: var(--tw-shadow-colored) !important;
  }
  .bg-white {
    background-color: rgb(15 23 42) !important;
  }
  .section-title {
    position: relative;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 3px;
    color: #7c3aed;
    display: inline-block;
    text-transform: uppercase;
  }
  .text-\[26px\] {
    font-size: 26px !important;
  }
  @media (min-width: 768px) {
    .md\:text-\[30px\] {
      font-size: 30px !important;
    }
  }
  .mb-3 {
    margin-bottom: .75rem !important;
  }
  .mb-2 {
    margin-bottom: .5rem !important;
  }
  .text-lg {
    font-size: 20px !important;
    line-height: 28px !important;
  }
  .text-slate-400 {
    --tw-text-opacity: 1 !important;
    color: rgb(148 163 184) !important;
    line-height: 1.625;
  }
  .choose-card h5, .choose-card h3{
    margin: 0;
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
    padding: 25px;
    font-size: 1.5rem;
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
    /*width: 98%;*/
    margin: 2% 1%;
    float: left;
    -webkit-box-shadow: 0 0px 11px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 11px rgba(0, 0, 0, 0.1)
  }

  .hosting .card {
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .section-head,.section-head-sm {
    padding-bottom: 24px;
    text-align: center;
    font-size: 1.8rem;
  }

  .section-head-md {
    padding-bottom: 50px
  }

  .section-head br {
    display: none
  }

  .section-meta {
    font-weight: 600;
    letter-spacing: 2px;
    font-size: .938rem
  }

  @media(min-width: 992px) {
    .section-head.text-center {
      padding-bottom:45px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto
    }

    .section-head br {
      display: inline-block
    }
  }
.row >>>.swiper-slide {
  width: 100%;

}
  img, svg {
    vertical-align: middle;
  }
  .single__brand--logo {
    background: #ffffff;
    margin: 10px;
  }
  .m-2 {
    margin: 1rem !important;
  }
  .rounded-lg {
    border-radius: 1rem !important;
  }
  .rounded-lg {
    border-radius: 1rem !important;
  }
  .mb-5 {
    margin-bottom: 2.5rem !important;
  }
  .mb-4 {
    margin-bottom: 2rem !important;
  }
  .gap-2 {
    gap: 1rem !important;
  }
  .items-center {
    align-items: center !important;
  }
  .flex {
    display: flex !important;
  }
  .p-3 {
    padding: 1.5rem !important;
  }

  .size-12 {
    width: 3rem !important;
    height: 3rem !important;
  }
  .faq-content {
    color: #000000;
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


