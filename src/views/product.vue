<template>
  <div class="HomePage">
    <Header></Header>
    <div class="app-wrapper">
      <div class="container">
        <div class="box3">
          <div class="box-wrapper">
            <img :src="'./static/images/cont.png'" style="object-fit:cover;width: 100%;margin: 0 auto;display: block;">
            <div class="carousel-container1 info-block">
              <div class="carousel1 info-block">
                <div class="carousel-item1">
<!--                  <img v-lazy="'./static/images/cont.png'" style="width: 100%;height: 100%;">-->
                  <div class="carousel-desc info-block-title">
<!--                    {{$t('product[18]')}}-->
                  </div>
                </div>
              </div>
            </div>
            <div style="font-size: 3.5rem;line-height: 4rem;text-align: center;font-weight: bolder;margin-bottom: 1rem">{{$t('newP[7]')}}</div>
            <div style="font-size: 2rem;line-height: 2.5rem;text-align: center;    padding: 2rem;"> {{$t('newP[8]')}}</div>
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
    top: 8rem;
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
      </div>
    </div>


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
<!--                <div  class="flex-4">-->
<!--                  <label  class="font-weight-bold col-12 input_label">{{$t('settle[7]')}}</label>-->
<!--                  <div  class="col-12">-->
<!--                    <van-stepper v-model="number" input-width="inherit" button-size="40px"/>-->
<!--                  </div>-->
<!--                </div>-->
                <div  class="el-row mb-4">
                  <label  class="font-weight-bold input_label">{{$t('settle[7]')}}</label>
                  <div  class="el-input el-input--large el-input--suffix">
                    <div class="el-input__wrapper" tabindex="-1">
                      <input class="el-input__inner" v-model="money" type="text" autocomplete="off" tabindex="0">
                    </div>
                  </div>
                </div>
<!--                <div  class="el-row mb-4">-->
<!--                  <label  class="font-weight-bold input_label">{{$t('settle[8]')}}</label>-->
<!--                  <div  class="el-input el-input&#45;&#45;large el-input&#45;&#45;suffix">-->
<!--                    <div class="el-input__wrapper" tabindex="-1">-->
<!--                      <input class="el-input__inner" v-model="detailData.amount" readonly type="text" autocomplete="off" tabindex="0">-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
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
                      v-lazy="InitData.setting.up_url + detailData.icon"
                    />
                  </div>
                  <div class="">
                    <div class="plan-title">{{detailData.title}}</div>
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
<!--                    <div class="pricing">-->
<!--                      <h1>${{parseFloat(detailData.amount)}}</h1>-->
<!--                      <p>/{{detailData.cycle}} {{$t('product[15]')}}-->
<!--                      </p>-->
<!--                    </div>-->
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
                      <table border="1px" style="width: 100%;text-align: center;">
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
          <!--          <div class="centered">-->
          <!--            <button @click="buyProduct" class="main-btn modal-submit" style="width: fit-content;min-width: 200px;height: 40px; margin-bottom: 10px; font-weight: 400;" type="submit">{{$t('settle[10]')}}</button>-->
          <!--          </div>-->
        </div>
        <div class="diaf" >
          <div class="buttons">
            <a href="javascript:" class="w-100" @click="showDialogD = false"><div class="main-btn ed w-100">{{$t('close')}}</div></a>
            <!--                    <a href="javascript:;"  class="w-100" @click="$router.push(`/productDetail?id=${item.id}`)"><div class="main-btn ed w-100">{{$t('settle[4]')}}</div></a>-->
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

  export default {
    name: 'Product',
    inject: ['reloadHtml'],
    components: {
      swiper, swiperSlide,
    },
    data() {
      return {
        number:1,
        detailData:{},
        showDialog:false,
        password:'',
        money:'',
        showPass: false,
        listData:[],
        swiperOption: {
          loop: true,  // 是否循环轮播
          allowTouchMove:false,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          },
          slidesPerView: 3,  // 可是区域内可展示多少个块
          spaceBetween: 10,  // 块之间间隔距离
          initialSlide:0,  // 默认初始显示块
          freeMode: false,
          effect : 'coverflow',
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
        detailData:{},
        showDialogD:false,
        couponList:[],
        selectCoupon:'',
        couponMoney:0,
        coupon:{
          id:'',
        },
      }
    },

    computed: {
    },
    watch: {
      'number'() {
        let that = this;
        this.money = this.number * this.detailData.amount;
        if (that.selectCoupon != '') {
          that.coupon = this.couponList.filter(item => item.id == that.selectCoupon)[0];
          this.couponMoney = parseFloat(that.money-(that.coupon.discount/100*that.money).toFixed(2));
        } else {
          this.couponMoney = 0;
        }
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
      this.loadProudcutList();
      let that = this;
      if (this.UserInfo) {
        this.$Model.MYCOUPON({status:1}, function (data) {
          if (data.code == 1) {
            that.couponList = data.data
          }
        });
      }

    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
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
          this.selectCoupon='';
          this.showDialogD = true;
        });
      },
      orderNow(item) {
        this.showDialogD = false;
        this.detailData = item;
        // this.money = this.detailData.amount;
        this.showDialog = true;
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
  h4{
    font-size: 2rem;
  }
  .fs-16, .latest-blog__title a, .alert__title, p {
    font-size: 1.4rem;
  }
  .d-flex div, tbody, td, tfoot, th {
    text-align: center;
    /* padding: 13px 34px; */
    font-size: 1.5rem;
    word-break: break-word;
    padding: 0.5rem;
  }
  .carousel-container1 {
    overflow: hidden;
    margin-top: 10px;
    width: 100%;
    border-radius: 26px;
    padding: 2rem 0;
  }
  .carousel1 {
    display: flex;
    flex-direction: column;
    transition: transform 0.5s ease;
  }
  .carousel-item1 {
    position: relative;
    border-radius: 26px;
    margin: 0 auto;
    max-height: 350px;
    overflow: hidden;
  }
  .info-block-title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #FFF;
    font-family: 'Roboto';
    font-size: 4rem;
    font-style: normal;
    font-weight: 800;
    line-height: 95.836%;
    z-index: 999;
  }
  .carousel-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    line-height: 95.84%;
    background: linear-gradient(98.57deg, #ce048b -4.59%, #4c0a8e 101.92%);
    border-radius: 26px;
  }
  .carousel-item1 img {
    width: 100%;
    position: relative;
    border-radius: 26px;
    z-index: 2;
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
      min-width: 70rem;
      width: 33.33%
    }

    .container .box1 .box1-inner-area .box1-title {
      width: 100%;
      line-height: 110%;
      font-size: 5.4rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box1 .box1-inner-area .box1-desc {
      width: 100%;
      margin: 3rem 0 2.5rem;
      line-height: 160%;
      font-size: 1.6rem;
      color: #000;
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
      box-shadow: rgba(102, 34, 130, 0.33) 0px 0px 5px 0px;
      padding: 10px 20px;
      border-radius: 10px;
      border: 1px solid #662282;
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
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box2 .tab-list .tab-item .title {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 2.4rem;
      font-weight: 700;
      color: #000;
      text-align: left;
      word-wrap: break-word;
      margin-top: 10px;
    }

    .container .box2 .tab-list .tab-item .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.5rem;
      color: #000;
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
      padding: 0 3rem 8rem
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
      padding: 0 3rem 2rem
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
      padding: 2rem 1rem 10rem 1rem;
      /*background: url(../img/top-img.2fb775d8.png) no-repeat;*/
      /*background-size: auto 100%;*/
      background-position: 0;
    }

    .container .box1 .box1-inner-area {
      width: 100%;
      max-width: 56rem
    }

    .container .box1 .box1-inner-area .box1-title {
      width: 100%;
      line-height: 110%;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box1 .box1-inner-area .box1-desc {
      width: 100%;
      margin: 2rem 0 1.5rem;
      line-height: 160%;
      font-size: 1.5rem;
      color: #000;
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
      box-shadow: rgba(102, 34, 130, 0.33) 0px 0px 5px 0px;
      padding: 10px 20px;
      border-radius: 10px;
      border: 1px solid #662282;
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
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box2 .tab-list .tab-item .title {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      text-align: left;
      word-wrap: break-word;
      margin-top: 10px;
    }

    .container .box2 .tab-list .tab-item .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.5rem;
      color: #000;
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
      padding: 0 1rem 1rem
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



  /* 超小屏幕（手机，小于 768px） */
  @media (max-width: 768px) {
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
    .info-block-title {
      font-size: 2rem !important;
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
      border: 1px solid #662282;
    }
    .box1-inner-area {
      padding: 140px 32px 0px;
    }
    .banner__image {
      position: absolute;
      background-position: top right!important;
      right: 0px;
      bottom: -10%;
      width: 55%;
      height: 542px;
      background-size: cover !important;
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
      padding: 140px 32px 0px;
    }
    .banner__image {
      position: absolute;
      background-position: top right!important;
      right: 0px;
      bottom: -10%;
      width: 55%;
      height: 542px;
      background-size: cover !important;
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
  @media (min-width: 992px){
    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
  }
  @media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      /*max-width: 1140px;*/
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
    position: relative;
    overflow: hidden;
    border: 1px solid #2d3651;
    text-align: center;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
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
    height: 56px;
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
    transition: all 260ms cubic-bezier(0.42, 0, 0.58, 1) 0s;
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
    margin: 2rem 0px;
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
  .top-wraper {
    display: flex;
    align-items: center;
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
    border: 2px solid hsla(0, 0%, 100%, 0.1);
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
    transition-duration: 300ms;
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
    transition: 0.4s;
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
  /*.top-flashlight.leftside::before {*/
  /*  left: 0;*/
  /*  top: 0;*/
  /*}*/
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
  }
  @media (min-width: 992px) {
    .row--15 .col-lg-4 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 30%;
    }
  }
  .row--15>[class*=col] {
    padding-left: 15px;
    padding-right: 15px;
  }
  .mb-1 {
    margin-bottom: 1px !important;
  }
  .d-flex {
    display: flex!important
  }
  .justify-content-between {
    -webkit-box-pack: justify!important;
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
  }
  .mt-2 {
    margin-bottom: 1rem !important;
    margin-top: 1rem;
    /*padding:0 2rem;*/
  }
</style>


