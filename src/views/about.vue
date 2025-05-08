<template>
  <div class="HomePage">
    <Header></Header>
    <div>
      <section namespace="referral_image">
        <div class="container">
          <video :src="'./static/img/login_bg.mp4'" autoplay :controls="false" loop style="width:100%;max-width: 900px;display: block;margin: 0 auto;"></video>
          <!-- <div class="box7">
            <div class="image_main">
              <img :src="'./static/images/aboutt.png'" style="object-fit:cover">
            </div>
          </div> -->
        </div>
      </section>
      <section namespace="weare">
        <div class="container">
          <div class="box7">
            <h1 class="titled_2" style="text-align: left; color: #7D2483;" v-html="showInfo.title"></h1>
            <jrArticle ref="jrArticle" :data="articleData"></jrArticle>
            <!-- <div class="content" v-html="showInfo.content"></div> -->
          </div>
        </div>
      </section>
<!--      <div class="section&#45;&#45;sm cta-section">-->
<!--        <div class="container">-->
<!--          <div class="box7 box71" style="justify-content: space-between">-->
<!--            <div class="col-md-7 col-xl-6">-->
<!--              <p class="t-short-para">-->
<!--                KSD FINANCE LTD-->
<!--              </p>-->
<!--              <p class="t-short-para">-->
<!--                {{$t('about[1]')}}：09651110-->
<!--              </p>-->
<!--              <p class="t-short-para">-->
<!--                {{$t('about[2]')}}：{{$t('about[3]')}}-->
<!--              </p>-->
<!--              <p class="t-short-para">-->
<!--                Amba House 3rd Floor, 15 College Road, Harrow, Middlesex, United Kingdom, HA1 1BA-->
<!--              </p>-->
<!--              <p class="t-short-para">-->
<!--                {{$t('about[4]')}}：22 June 2015-->
<!--              </p>-->
<!--              &lt;!&ndash;            <a href="javascript:;" @click="$router.push('register')" class="btn btn&#45;&#45;xxl btn&#45;&#45;base mt-3">&ndash;&gt;-->
<!--              &lt;!&ndash;              {{$t('about[9]')}}&ndash;&gt;-->
<!--              &lt;!&ndash;            </a>&ndash;&gt;-->
<!--              <div>-->
<!--                <a target="_blank" style="margin-right:1rem;color:#ffffff;background:linear-gradient(to right, #00f785, #410093) !important;margin-top: 1rem;" href="https://find-and-update.company-information.service.gov.uk/company/09651110" class="btn main-btn mt-4">{{$t('about[5]')}}</a>-->
<!--                <a target="_blank" href="./static/companies_house_document.pdf?t=1"  style="color:#ffffff;background: linear-gradient(to right, #00f785, #410093);margin-top: 1rem;" class="btn main-btn mt-4">{{$t('about[6]')}}</a>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="col-md-5 col-xl-6">-->
<!--              <div class="col-md-12 col-xl-12" style="display: flex">-->
<!--                <img :src="'./static/image/cccc1.png?t=2'" style="width: 50%;display: inline-block" class="img-fluid cta-section__img">-->
<!--                <img :src="'./static/image/cccc2.png?t=2'" style="width: 50%;display: inline-block;margin-left: 5px;" class="img-fluid cta-section__img">-->
<!--              </div>-->
<!--              &lt;!&ndash;            <img :src="'./static/images/frontend/cta/6561b5d4d82711700902356.png'" class="img-fluid cta-section__img">&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

      <!-- <section id="featured1" class="featured featured-1 bg-overlay bg-overlay-dark2 bg-parallax bg-section" style="background-image: url('./static/image/aboutss.png');">

        <div class="container max960">
          <div class="row">

            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="heading heading-6">
                <h2 class="heading--title text-white">{{$t('about1[11]')}}</h2>
                <p class="heading--desc text-gray mb-20">
                  {{$t('about1[12]')}}
                </p>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-4">
                  <div class="feature-card">
                    <div class="feature-card-icon">
                      <img :src="'./static/image/BitcoinIcon1.png'" alt="Bitcoin Icon">
                    </div>
                    <div class="feature-card-content">
                      <h3 class="feature-card-title text-white">{{$t('about1[13]')}}</h3>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4">
                  <div class="feature-card">
                    <div class="feature-card-icon">
                      <img :src="'./static/image/BitcoinIcon2.png'" alt="Bitcoin Icon">
                    </div>
                    <div class="feature-card-content">
                      <h3 class="feature-card-title text-white">{{$t('about1[14]')}}</h3>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4">
                  <div class="feature-card">
                    <div class="feature-card-icon">
                      <img :src="'./static/image/BitcoinIcon3.png'" alt="Bitcoin Icon">
                    </div>
                    <div class="feature-card-content">
                      <h3 class="feature-card-title text-white">{{$t('about1[15]')}}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6" style="display: flex;align-content: center;align-items: center;">
              <div class="featured-img">
                <img :src="'./static/image/65f18b0da62c51710328589.png'" alt="Laptop Mockup">
              </div>
            </div>
          </div>
        </div>
      </section> -->
      <section class="section mt-20 mb-20">
        <div class="container">
          <div class="row justify-content-center">
            <div class="el-col-24 el-col-lg-24 mt-5 mt-sm-0">
              <div class="section-title text-center">
                <h1 class="title font-title-lg">{{$t('home_comment[0]')}}</h1>
                <div class="para-desc videoDiv text-center el-mx-auto-80">
                  <p class="el-content-text-h2">
                    {{$t('home_comment[1]')}}
                  </p>
                </div>
              </div>
            </div>
            </div>
        </div>
        <div class="container">
          <div class="row justify-content-center">
              <div class="el-col-24 el-col-lg-24 mt-5 mt-sm-0">
                <div class="comment_container">
                  <swiper ref="mySwiper" class="swiper" :options="commenSwiperOptions">
                      <swiper-slide v-for="el in Array.from({ length: 10 }, (_, i) => i)" :key="el">
                        <div class="comment_card">
                          <div class="comment_head">
                            <img :src="`./static/img/user/user_${el + 1}.png`" alt="">
                          </div>
                          <div class="msg el-mx-auto-80">
                            <div class="msg el-mx-auto-80">
                            <div class="name el-content-text-h3">{{$t(`commentList[${el}].name`)}}</div>
                            <div class="content">{{$t(`commentList[${el}].text`)}}</div>
                          </div>
                          </div>
                        </div>
                      </swiper-slide>
                  </swiper>
                </div>
              </div>
              <!-- 第二個評論 -->
              <div class="el-col-24 el-col-lg-24 mt-sm-0 mt-20">
                <div class="comment_container">
                  <swiper ref="mySwiper" class="swiper" :options="commenSwiperOptions">
                    <swiper-slide v-for="el in Array.from({ length: 10 }, (_, i) => i + 10)" :key="el">
                        <div class="comment_card">
                          <div class="comment_head">
                            <img :src="`./static/img/user/user_${el + 1}.png`" alt="">
                          </div>
                          <div class="msg el-mx-auto-80">
                            <div class="msg el-mx-auto-80">
                            <div class="name el-content-text-h3">{{$t(`commentList[${el}].name`)}}</div>
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
      <section id="infoCards" class="info-cards">
        <div class="container max960">
<!--          <div  class="box6">-->
<!--            &lt;!&ndash;          <iframe id="ifrId" :src="youtube" frameborder="0" style="display: block; width: 100%; height: 500px;"></iframe>&ndash;&gt;-->
<!--            <video :src="InitData.setting.up_url + '/upload/about.mp4'" autoplay controls style="width:100%;max-width: 900px;display: block;margin: 0 auto;"></video>-->
<!--          </div>-->
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4">
              <div class="info-card">
                <div class="info-card-step">01.</div>
                <div class="info-card-content">
                  <h4 class="info-card-subtitle">{{$t('about1[2]')}}</h4>
                  <h3 class="info-card-title">{{$t('about1[3]')}}</h3>
                  <p class="info-card-desc">
                    {{$t('about1[4]')}}
                  </p>

                </div>
              </div><!-- .info-card end -->
            </div><!-- .col-lg-4 end -->
            <div class="col-sm-12 col-md-12 col-lg-4">
              <div class="info-card">
                <div class="info-card-step">02.</div>
                <div class="info-card-content">
                  <h4 class="info-card-subtitle">{{$t('about1[5]')}}</h4>
                  <h3 class="info-card-title">{{$t('about1[6]')}}</h3>
                  <p class="info-card-desc">
                    {{$t('about1[7]')}}
                  </p>
                </div>
              </div><!-- .info-card end -->
            </div><!-- .col-lg-4 end -->
            <div class="col-sm-12 col-md-12 col-lg-4">
              <div class="info-card">
                <div class="info-card-step">03.</div>
                <div class="info-card-content">
                  <h4 class="info-card-subtitle">{{$t('about1[8]')}}</h4>
                  <h3 class="info-card-title">{{$t('about1[9]')}}</h3>
                  <p class="info-card-desc">
                    {{$t('about1[10]')}}
                  </p>
                </div>
              </div><!-- .info-card end -->
            </div><!-- .col-lg-4 end -->
          </div>
          <!-- .row end -->
        </div>
        <!-- .container end -->
      </section>

<!--      <section id="featured2" class="featured featured-2 pb-50">-->
<!--        <div class="container max960">-->
<!--          <div class="row">-->
<!--            &lt;!&ndash; Feature Card #1 &ndash;&gt;-->
<!--            <div class="col-sm-12 col-md-12 col-lg-3">-->
<!--              <div class="feature-card">-->
<!--                <div class="feature-card-icon">-->
<!--                  <img :src="'./static/image/about1.png?t=1'" style="width: 65px;"/>-->
<!--                </div>-->
<!--                <div class="feature-card-content">-->
<!--                  <h3 class="feature-card-title" v-html="$t('about1[16]')"></h3>-->
<!--                  <p class="feature-card-desc">-->
<!--                    {{$t('about1[17]')}}-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>&lt;!&ndash; .col-lg-4 end &ndash;&gt;-->
<!--            &lt;!&ndash; Feature Card #2 &ndash;&gt;-->
<!--            <div class="col-sm-12 col-md-12 col-lg-3">-->
<!--              <div class="feature-card">-->
<!--                <div class="feature-card-icon">-->
<!--                  <img :src="'./static/image/about2.png?t=1'" style="width: 65px;"/>-->
<!--                </div>-->
<!--                <div class="feature-card-content">-->
<!--                  <h3 class="feature-card-title">{{$t('about1[18]')}}</h3>-->
<!--                  <p class="feature-card-desc">-->
<!--                    {{$t('about1[19]')}}-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>&lt;!&ndash; .col-lg-4 end &ndash;&gt;-->
<!--            &lt;!&ndash; Feature Card #3 &ndash;&gt;-->
<!--            <div class="col-sm-12 col-md-12 col-lg-3">-->
<!--              <div class="feature-card">-->
<!--                <div class="feature-card-icon">-->
<!--                  <img :src="'./static/image/about3.png?t=1'" style="width: 65px;"/>-->
<!--                </div>-->
<!--                <div class="feature-card-content">-->
<!--                  <h3 class="feature-card-title">{{$t('about1[20]')}}</h3>-->
<!--                  <p class="feature-card-desc">-->
<!--                    {{$t('about1[21]')}}-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>&lt;!&ndash; .col-lg-4 end &ndash;&gt;-->
<!--            &lt;!&ndash; Feature Card #6 &ndash;&gt;-->
<!--            <div class="col-sm-12 col-md-12 col-lg-3">-->
<!--              <div class="feature-card">-->
<!--                <div class="feature-card-icon">-->
<!--                  <img :src="'./static/image/about6.png?t=1'" style="width: 65px;"/>-->
<!--                </div>-->
<!--                <div class="feature-card-content">-->
<!--                  <h3 class="feature-card-title">{{$t('about1[22]')}}</h3>-->
<!--                  <p class="feature-card-desc">-->
<!--                    {{$t('about1[23]')}}-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>&lt;!&ndash; .col-lg-4 end &ndash;&gt;-->

<!--          </div>-->
<!--          &lt;!&ndash; .row end &ndash;&gt;-->
<!--        </div>-->
<!--        &lt;!&ndash; .container end &ndash;&gt;-->
<!--      </section>-->
      <section namespace="platform">
        <div class="font-title-h1 text-center mtb-10">{{ $t('i18n.aboutUs.platform.text1') }}</div>
        <div class="container platform_max mtb-10 max960">
          <!-- pc端展示内容 -->
          <div class="data-flex platform_m_logo_show">
            <div class="el-row flex-1">
              <div class="platform_cbox">
                <div class="c_item data-flex">
                  <div class="c_item_img mlr-5">
                    <img :src="'./static/image/platform/11.png'" alt="" style="width: 80px;min-height: 60px;object-fit: contain;">
                  </div>
                  <div class="content flex-1">
                    <div class="label el-content-label el-content-text-h1">{{ $t('i18n.aboutUs.platform.text2') }}</div>
                    <p class="text font-intr mtb-10 el-content-text-h3 ft_lh-20">{{ $t('i18n.aboutUs.platform.text3') }}</p>
                  </div>
                </div>
              </div>
              <div class="platform_cbox">
                <div class="c_item data-flex">
                  <div class="c_item_img mlr-5">
                    <img :src="'./static/image/platform/22.png'" alt="" style="width: 80px;min-height: 60px;object-fit: contain;">
                  </div>
                  <div class="content flex-1">
                    <div class="label el-content-label el-content-text-h1">{{ $t('i18n.aboutUs.platform.text8') }}</div>
                    <p class="text font-intr mtb-10 el-content-text-h3 ft_lh-20">{{ $t('i18n.aboutUs.platform.text9') }}</p>
                  </div>
                </div>
              </div>
              <div class="platform_cbox">
                <div class="c_item data-flex">
                  <div class="c_item_img mlr-5">
                    <img :src="'./static/image/platform/33.png'" alt="" style="width: 80px;min-height: 60px;object-fit: contain;">
                  </div>
                  <div class="content flex-1">
                    <div class="label el-content-label el-content-text-h1">{{ $t('i18n.aboutUs.platform.text12') }}</div>
                    <p class="text font-intr mtb-10 el-content-text-h3 ft_lh-20">{{ $t('i18n.aboutUs.platform.text13') }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="el-row flex-1">
              <div class="data-flex">
                <img :src="'./static/image/platform/platform_m.png'" alt="" style="width: 100%;object-fit: contain;">
              </div>
            </div>
            <div class="el-row flex-1">
              <div class="platform_cbox">
                <div class="c_item data-flex">
                  <div class="c_item_img mlr-5">
                    <img :src="'./static/image/platform/44.png'" alt="" style="width: 80px;min-height: 60px;object-fit: contain;">
                  </div>
                  <div class="content flex-1">
                    <div class="label el-content-label el-content-text-h1">{{ $t('i18n.aboutUs.platform.text6') }}</div>
                    <p class="text font-intr mtb-10 el-content-text-h3 ft_lh-20">{{ $t('i18n.aboutUs.platform.text7') }}</p>
                  </div>
                </div>
              </div>
              <div class="platform_cbox">
                <div class="c_item data-flex">
                  <div class="c_item_img mlr-5">
                    <img :src="'./static/image/platform/55.png'" alt="" style="width: 80px;min-height: 60px;object-fit: contain;">
                  </div>
                  <div class="content flex-1">
                    <div class="label el-content-label el-content-text-h1">{{ $t('i18n.aboutUs.platform.text10') }}</div>
                    <p class="text font-intr mtb-10 el-content-text-h3 ft_lh-20">{{ $t('i18n.aboutUs.platform.text11') }}</p>
                  </div>
                </div>
              </div>
              <div class="platform_cbox">
                <div class="c_item data-flex">
                  <div class="c_item_img mlr-5">
                    <img :src="'./static/image/platform/66.png'" alt="" style="width: 80px;min-height: 60px;object-fit: contain;">
                  </div>
                  <div class="content flex-1">
                    <div class="label el-content-label el-content-text-h1">{{ $t('i18n.aboutUs.platform.text14') }}</div>
                    <p class="text font-intr mtb-10 el-content-text-h3 ft_lh-20">{{ $t('i18n.aboutUs.platform.text15') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- h5端展示内容 -->
          <div class="platform_m_logo_not_show">
             <div class="el-row">
              <div class="platform_cbox el-col-xs-24 el-col-sm-12 ">
                <div class="c_item data-flex">
                  <div class="c_item_img mlr-5">
                    <img :src="'./static/image/platform/11.png'" alt="" style="width: 80px;min-height: 60px;object-fit: contain;">
                  </div>
                  <div class="content flex-1">
                    <div class="label el-content-label el-content-text-h1">{{ $t('i18n.aboutUs.platform.text2') }}</div>
                    <p class="text font-intr mtb-10 el-content-text-h3">{{ $t('i18n.aboutUs.platform.text3') }}</p>
                    <p class="text font-intr el-content-text-h3">{{ $t('i18n.aboutUs.platform.text4') }}</p>
                    <p class="text font-intr el-content-text-h3">{{ $t('i18n.aboutUs.platform.text5') }}</p>
                  </div>
                </div>
              </div>
              <div class="platform_cbox  el-col-xs-24 el-col-sm-12 ">
                <div class="c_item data-flex">
                  <div class="c_item_img mlr-5">
                    <img :src="'./static/image/platform/22.png'" alt="" style="width: 80px;min-height: 60px;object-fit: contain;">
                  </div>
                  <div class="content flex-1">
                    <div class="label el-content-label el-content-text-h1">{{ $t('i18n.aboutUs.platform.text6') }}</div>
                    <p class="text font-intr mtb-10 el-content-text-h3">{{ $t('i18n.aboutUs.platform.text7') }}</p>
                  </div>
                </div>
              </div>
              <div class="platform_cbox  el-col-xs-24 el-col-sm-12 ">
                <div class="c_item data-flex">
                  <div class="c_item_img mlr-5">
                    <img :src="'./static/image/platform/33.png'" alt="" style="width: 80px;min-height: 60px;object-fit: contain;">
                  </div>
                  <div class="content flex-1">
                    <div class="label el-content-label el-content-text-h1">{{ $t('i18n.aboutUs.platform.text8') }}</div>
                    <p class="text font-intr mtb-10 el-content-text-h3">{{ $t('i18n.aboutUs.platform.text9') }}</p>
                  </div>
                </div>
              </div>
              <div class="platform_cbox  el-col-xs-24 el-col-sm-12 ">
                <div class="c_item data-flex">
                  <div class="c_item_img mlr-5">
                    <img :src="'./static/image/platform/44.png'" alt="" style="width: 80px;min-height: 60px;object-fit: contain;">
                  </div>
                  <div class="content flex-1">
                    <div class="label el-content-label el-content-text-h1">{{ $t('i18n.aboutUs.platform.text10') }}</div>
                    <p class="text font-intr mtb-10 el-content-text-h3">{{ $t('i18n.aboutUs.platform.text11') }}</p>
                  </div>
                </div>
              </div>
              <div class="platform_cbox  el-col-xs-24 el-col-sm-12 ">
                <div class="c_item data-flex">
                  <div class="c_item_img mlr-5">
                    <img :src="'./static/image/platform/55.png'" alt="" style="width: 80px;min-height: 60px;object-fit: contain;">
                  </div>
                  <div class="content flex-1">
                    <div class="label el-content-label el-content-text-h1">{{ $t('i18n.aboutUs.platform.text12') }}</div>
                    <p class="text font-intr mtb-10 el-content-text-h3">{{ $t('i18n.aboutUs.platform.text13') }}</p>
                  </div>
                </div>
              </div>
              <div class="platform_cbox  el-col-xs-24 el-col-sm-12 ">
                <div class="c_item data-flex">
                  <div class="c_item_img mlr-5">
                    <img :src="'./static/image/platform/66.png'" alt="" style="width: 80px;min-height: 60px;object-fit: contain;">
                  </div>
                  <div class="content flex-1">
                    <div class="label el-content-label el-content-text-h1">{{ $t('i18n.aboutUs.platform.text14') }}</div>
                    <p class="text font-intr mtb-10 el-content-text-h3">{{ $t('i18n.aboutUs.platform.text15') }}</p>
                  </div>
                </div>
              </div>
             </div>
          </div>
        </div>
      </section>
      <section namespace="stats">
        <div class="container">
          <div class="box7">
            <div class="about-stats">
              <div class="about-item">
                <div>
                  <h1>100+ </h1>
                  <p>{{$t('about2[0]')}}</p>
                </div>
              </div>
              <div class="about-item" style="background: #ED5C2E;">
                <div>
                  <h1>9,000,000+</h1>
                  <p>{{$t('about2[1]')}}</p>
                </div>
              </div>
              <div class="about-item" style="background: #FF971E;">
                <div>
                  <h1>195+</h1>
                  <p>{{$t('about2[2]')}}</p>
                </div>
              </div>
              <div class="about-item" style="background: #0D9CFF;">
                <div>
                  <h1>4,930,000+</h1>
                  <p>{{$t('about2[3]')}}</p>
                </div>
              </div>
              <div class="about-item" style="background: #0D9CFF;">
                <div>
                  <h1>100％</h1>
                  <p>{{$t('about2[4]')}}</p>
                </div>
              </div>
              <div class="about-item" style="background: #0D9CFF;">
                <div>
                  <h1>100％</h1>
                  <p>{{$t('about2[5]')}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- <section namespace="data_centers">
        <div class="container">
          <div class="box7">
            <h1 class="fontza text-zah">{{$t('about2[6]')}}</h1>
            <h6 class="text-hh mt-4">{{$t('about2[7]')}}</h6>
            <h6 class="text-hh mt-3">{{$t('about2[8]')}}</h6>
            <h6 class="text-hh mt-3">{{$t('about2[9]')}}</h6>
            <h6 class="text-hh mt-3">{{$t('about2[10]')}}</h6>
            <div class="row">
              <div class="col-lg-3 p-3 mt-4">
                <div class="border border-2 border-zah  p-3" style="height: 200px;">
                  <h4 class="fontza text-zah">{{$t('about2[11]')}}</h4>
                  <div style="border-bottom: 2px solid #FF7D10; width: 50px;"></div>
                  <h6 class="text-bhs mt-3">{{$t('about2[12]')}}</h6>
                </div>
              </div>
              <div class="col-lg-3 p-3 mt-4">
                <div class="border border-2 border-zah  p-3" style="height: 200px;">
                  <h4 class="fontza text-zah">{{$t('about2[13]')}}</h4>
                  <div style="border-bottom: 2px solid #FF7D10; width: 50px;"></div>
                  <h6 class="text-bhs mt-3">{{$t('about2[14]')}}</h6>
                </div>
              </div>
              <div class="col-lg-3 p-3 mt-4">
                <div class="border border-2 border-zah  p-3" style="height: 200px;">
                  <h4 class="fontza text-zah">{{$t('about2[15]')}}</h4>
                  <div style="border-bottom: 2px solid #FF7D10; width: 50px;"></div>
                  <h6 class="text-bhs mt-3">{{$t('about2[16]')}}</h6>
                </div>
              </div>
              <div class="col-lg-3 p-3 mt-4">
                <div class="border border-2 border-zah  p-3" style="height: 200px;">
                  <h4 class="fontza text-zah">{{$t('about2[17]')}}</h4>
                  <div style="border-bottom: 2px solid #FF7D10; width: 50px;"></div>
                  <h6 class="text-bhs mt-3">{{$t('about2[18]')}}</h6>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section> -->

      <section namespace="data_centers">
        <div class="container">
          <div class="box7">
            <div class="">
              <h1 class="fontza text-zah">{{$t('about2[19]')}}</h1>
              <div class="row mt-4">
                <div class="col-lg-6">
                  <img :src="'./static/images/commpp.png'" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6">
                  <div style="padding-left: 1rem">
                    <h2 class="fontza text-zah mt-4">COOKE CAPITAL LIMITED</h2>
                    <h6 class="text-hh p-3 border border-2 border-zah rounded-3 mt-4 col-lg-10">{{$t('about[1]')}}: 13219561</h6>
                    <h6 class="text-hh p-3 border border-2 border-zah rounded-3 mt-3 col-lg-10">{{$t('about[3]')}}: C/O Venture Finance Management, Suite 101, Cotton Exchange, Old Hall Street, Liverpool, England, L3 9LQ</h6>
                    <h6 class="text-hh p-3 border border-2 border-zah rounded-3 mt-3 col-lg-10">{{$t('about[2]')}}: Private Limited Company</h6>
                    <h6 class="text-hh p-3 border border-2 border-zah rounded-3 mt-3 col-lg-10">{{$t('about[4]')}}: 23 February 2021</h6>
                    <div class="d-flex">
                      <div class="text-center mt-3 col-lg-3 col-6">
                        <a href="https://find-and-update.company-information.service.gov.uk/company/11880006" target="_blank" type="button" class="btn-join p-3 text-hh fw-bold  fs-6">{{$t('about2[20]')}}</a>
                      </div>
                      <div class="text-center mt-3 col-lg-3 col-6">
                        <a href="./static/companies_house_document.pdf?t=1" target="_blank" type="button" class="btn-join p-3 text-hh fw-bold  fs-6">{{$t('about2[21]')}}</a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <div class="figure"></div>
      <section namespace="data_centers">
        <div class="container ">
          <div class="box7">
            <h1 class="titled_2" style="text-align: left; font-size: 30px; margin-top: 0px;">{{$t('about[12]')}}</h1>
            <p class="mini_desc" style="margin-bottom: 27px;">{{$t('about[13]')}}</p>
            <div class="about-data">
              <div class="about-item-data">
                <img :src="'./static/image/aaa1.jpg'">
                <div class="about-item-text">
                  <h1>{{$t('about[14]')}}</h1>
                  <p>{{$t('about[15]')}}</p>
                </div>
              </div>
              <div class="about-item-data">
                <img :src="'./static/image/aaa2.jpg'">
                <div class="about-item-text">
                  <h1>{{$t('about[16]')}}</h1>
                  <p>{{$t('about[17]')}}</p>
                </div>
              </div>
              <div class="about-item-data">
                <img :src="'./static/image/aaa3.jpg'">
                <div class="about-item-text">
                  <h1>{{$t('about[18]')}}</h1>
                  <p>{{$t('about[19]')}}</p>
                </div>
              </div>
              <div class="about-item-data">
                <img :src="'./static/image/aaa4.jpg'">
                <div class="about-item-text">
                  <h1>{{$t('about[20]')}}</h1>
                  <p>{{$t('about[21]')}}</p>
                </div>
              </div>

              <div class="about-item-data">
                <img :src="'./static/image/aaa5.jpg'">
                <div class="about-item-text">
                  <h1>{{$t('about[22]')}}</h1>
                  <p>{{$t('about[23]')}}</p>
                </div>
              </div>
              <div class="about-item-data">
                <img :src="'./static/image/aaa6.jpg'">
                <div class="about-item-text">
                  <h1>{{$t('about[24]')}}</h1>
                  <p>{{$t('about[25]')}}</p>
                </div>
              </div>
              <div class="about-item-data">
                <img :src="'./static/image/aaa7.jpg'">
                <div class="about-item-text">
                  <h1>{{$t('about[26]')}}</h1>
                  <p>{{$t('about[27]')}}</p>
                </div>
              </div>
              <div class="about-item-data">
                <img :src="'./static/image/aaa8.jpg'">
                <div class="about-item-text">
                  <h1>{{$t('about[28]')}}</h1>
                  <p>{{$t('about[29]')}}</p>
                </div>
              </div>
              <div class="about-item-data">
                <img :src="'./static/image/aaa9.jpg'">
                <div class="about-item-text">
                  <h1>{{$t('about[30]')}}</h1>
                  <p>{{$t('about[31]')}}</p>
                </div>
              </div>
              <div class="about-item-data">
                <img :src="'./static/image/aaa10.jpg'">
                <div class="about-item-text">
                  <h1>{{$t('about[32]')}}</h1>
                  <p>{{$t('about[33]')}}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- <div  class="section choice-section max960"
           style="background-image: url('./static/images/frontend/choose_us/61f237c71bfe21643263943.jpg');">
        <div  class="section__head">
          <div  class="container">
            <div  class="row justify-content-center">
              <div  class="col-md-8 col-xl-6"><h2  class="mt-0 text-center">{{$t('why[0]')}}</h2>
                <p  class="mb-0 el-mx-auto-80 text-center t-short-para">
                  {{$t('why[1]')}}
                </p></div>
            </div>
          </div>
        </div>
        <div  class="container">
          <div  class="row g-3">
            <div  class="col-md-6 col-lg-4">
              <div  class="feature-card bg--alpha text-center">
                <div  class="feature-card__icon-float"><img
                                                                              :src="'./static/images/abouti1.png'"
                                                                              style="width: 5rem; display: block;">
                </div>
                <div  class="icon icon--md icon--sqr feature-card__icon"><img
                                                                                                :src="'./static/images/abouti1.png'"
                                                                                                style="width: 100%; height: 100%; display: block;">
                </div>
                <h4 >{{$t('why[2]')}}</h4>
                <p  class="mb-0">
                  {{$t('why[3]')}}
                </p></div>
            </div>
            <div  class="col-md-6 col-lg-4">
              <div  class="feature-card bg--alpha text-center">
                <div  class="feature-card__icon-float"><img
                                                                              :src="'./static/images/abouti2.png'"
                                                                              style="width: 5rem; display: block;">
                </div>
                <div  class="icon icon--md icon--sqr feature-card__icon" style="overflow: hidden;">
                  <img  :src="'./static/images/abouti2.png'"
                       style="width: 100%; height: 100%; display: block;"></div>
                <h4 >{{$t('why[4]')}}</h4>
                <p  class="mb-0">
                  {{$t('why[5]')}}
                </p></div>
            </div>
            <div  class="col-md-6 col-lg-4">
              <div  class="feature-card bg--alpha text-center">
                <div  class="feature-card__icon-float"><img
                                                                              :src="'./static/images/abouti3.png'"
                                                                              style="width: 5rem; display: block;">
                </div>
                <div  class="icon icon--md icon--sqr feature-card__icon" style="overflow: hidden;">
                  <img  :src="'./static/images/abouti3.png'"
                       style="width: 100%; height: 100%; display: block;"></div>
                <h4 >{{$t('why[6]')}}</h4>
                <p  class="mb-0">
                  {{$t('why[7]')}}
                </p></div>
            </div>
            <div  class="col-md-6 col-lg-4">
              <div  class="feature-card bg--alpha text-center">
                <div  class="feature-card__icon-float"><img
                                                                              :src="'./static/images/abouti4.png'"
                                                                              style="width: 5rem; display: block;">
                </div>
                <div  class="icon icon--md icon--sqr feature-card__icon"><img
                                                                                                :src="'./static/images/abouti4.png'"
                                                                                                style="width: 100%; height: 100%; display: block;">
                </div>
                <h4 >{{$t('why[8]')}}</h4>
                <p  class="mb-0">
                  {{$t('why[9]')}}
                </p></div>
            </div>
            <div  class="col-md-6 col-lg-4">
              <div  class="feature-card bg--alpha text-center">
                <div  class="feature-card__icon-float"><img
                                                                              :src="'./static/images/abouti5.png'"
                                                                              style="width: 5rem; display: block;">
                </div>
                <div  class="icon icon--md icon--sqr feature-card__icon"><img
                                                                                                :src="'./static/images/abouti5.png'"
                                                                                                style="width: 100%; height: 100%; display: block;">
                </div>
                <h4 >{{$t('why[10]')}}</h4>
                <p  class="mb-0">
                  {{$t('why[11]')}}
                </p></div>
            </div>
            <div  class="col-md-6 col-lg-4">
              <div  class="feature-card bg--alpha text-center">
                <div  class="feature-card__icon-float"><img
                                                                              :src="'./static/images/abouti6.png'"
                                                                              style="width: 5rem; display: block;">
                </div>
                <div  class="icon icon--md icon--sqr feature-card__icon" style="overflow: hidden;">
                  <img  :src="'./static/images/abouti6.png'"
                       style="width: 100%; height: 100%; display: block;"></div>
                <h4 >{{$t('why[12]')}}</h4>
                <p  class="mb-0">
                  {{$t('why[13]')}}
                </p></div>
            </div>
          </div>
        </div>
      </div> -->

    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import jrArticle from '@/components/common/jr_article.vue';
import 'swiper/dist/css/swiper.css';
  export default {
    name: 'about',
    components: {
      jrArticle,
      swiper,
      swiperSlide,
    },
    data() {
      return {
        showInfo:{
          title: '',
          content:'',
        },
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
        },
        articleData: {
          content_1: {
            align: 'TM',
            list: [
              { type: 'title', text: this.$t('i18n.aboutUs.article.text1') },
              { type: 'content', text: this.$t('i18n.aboutUs.article.text2') },
              { type: 'title', text: this.$t('i18n.aboutUs.article.text3') },
              { type: 'content', text: this.$t('i18n.aboutUs.article.text4') },
              { type: 'title', text: this.$t('i18n.aboutUs.article.text5') },
              { type: 'content', text: this.$t('i18n.aboutUs.article.text6') },
            ],
            image: {
              type: 'video',
              url: require('../../static/img/login_bg.mp4'),
            },
          },
          content_2: {
            align: 'MT',
            list: [
              { type: 'title', text: this.$t('i18n.aboutUs.article.text7') },
              { type: 'content', text: this.$t('i18n.aboutUs.article.text8') },
              { type: 'title', text: this.$t('i18n.aboutUs.article.text9') },
              { type: 'content', text: this.$t('i18n.aboutUs.article.text10') },
              { type: 'title', text: this.$t('i18n.aboutUs.article.text11') },
              { type: 'content', text: this.$t('i18n.aboutUs.article.text12') },
            ],
            image: {
              type: 'img',
              url: require('../../static/img/location.1704fed8_new.png'),
            },
          },
        },
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      this.getListData(6);
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      getListData(type){
        this.$Model.noticeList({gropid: type, page_no: this.pageNo}, data => {
          if (data.code == 1 && data.info.length>0) {
            this.showInfo = data.info[0];
          }
        });
      }
    }
  }
</script>
<style scoped>
  .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
  }
  .container .box71 {
    display: flex;
  }
  .image_main {
    width: 100%;
    position: relative;
    margin: 0 auto;
  }
  .image_main img {
    width: 100%;
    border-radius: 5px;
  }
  .white_image_effect {
    width: 100%;
    position: absolute;
    height: 284px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
    bottom: 0;
  }
  .titled_2 {
    color: #000;
    text-align: center;
    font-family: 'Roboto';
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .mini_desc {
    color: rgba(0, 0, 0, 0.70);
    font-family: 'Roboto';
    font-size: 20px;
    margin-top: 7px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 0px;
    line-height: 125%;
  }
  .full_desc {
    margin-top: 33px;
    word-wrap: break-word;
    color: #000;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
  .about-stats {
    display: flex;
    justify-content: space-between;
    grid-gap: 8px;
    margin-top: 7px;
    overflow-x: auto;
  }

  /* Background Image */
  .bg-section {
    position: relative;
    overflow: hidden;
    z-index: 1;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -ms-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    /*background-attachment: fixed;*/
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
  }
  .bg-parallax {
    background-attachment: fixed;
  }
  .bg-overlay:before {
    content: "";
    display: inline-block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  .bg-overlay-light:before {
    background-color: #ffffff;
    opacity: 0.8;
  }
  .bg-overlay-dark:before {
    background-image: -webkit-linear-gradient(to bottom, rgba(27, 26, 26, 0.5) 0%, rgba(27, 26, 26, 0) 31%, rgba(27, 26, 26, 0) 82%);
    background-image: -moz-linear-gradient(to bottom, rgba(27, 26, 26, 0.5) 0%, rgba(27, 26, 26, 0) 31%, rgba(27, 26, 26, 0) 82%);
    background-image: -o-linear-gradient(to bottom, rgba(27, 26, 26, 0.5) 0%, rgba(27, 26, 26, 0) 31%, rgba(27, 26, 26, 0) 82%);
    background-image: linear-gradient(to bottom, rgba(27, 26, 26, 0.5) 0%, rgba(27, 26, 26, 0) 31%, rgba(27, 26, 26, 0) 82%);
    background-color: #1b1a1a;
    opacity: .6;
  }
  .bg-overlay-dark2:before {
    background-color: rgba(0,0,0,0.3);
    opacity: .97;
  }
  .bg-overlay-dark3:before {
    background-image: -webkit-linear-gradient(to bottom, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 69%, #f9f9f9 96%);
    background-image: -moz-linear-gradient(to bottom, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 69%, #f9f9f9 96%);
    background-image: -o-linear-gradient(to bottom, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 69%, #f9f9f9 96%);
    background-image: linear-gradient(to bottom, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 69%, #f9f9f9 96%);
    background-color: #1b1a1a;
    opacity: .96;
  }
  .bg-overlay-dark4:before {
    background-image: -webkit-linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 69%, #ffffff 92%);
    background-image: -moz-linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 69%, #ffffff 92%);
    background-image: -o-linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 69%, #ffffff 92%);
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 69%, #ffffff 92%);
    background-color: #1b1a1a;
    opacity: .96;
  }
  .bg-overlay-dark5:before {
    background-color: #1b1a1a;
    opacity: .94;
  }
  .bg-overlay-dark6:before {
    background-color: #1b1a1a;
    opacity: .95;
  }
  .bg-overlay-dark7:before {
    background-color: #1b1a1a;
    opacity: .75;
  }
  .bg-overlay-dark8:before {
    background-color: #1b1a1a;
    opacity: .8;
  }
  .bg-overlay-dark9:before {
    background-color: #1b1a1a;
    opacity: .9;
  }
  .bg-overlay-dark10:before {
    background-image: -moz-linear-gradient(90deg, #1b1a1a 0%, rgba(27, 26, 26, 0.11) 82%, #1b1a1a 92%);
    background-image: -webkit-linear-gradient(90deg, #1b1a1a 0%, rgba(27, 26, 26, 0.11) 82%, #1b1a1a 92%);
    background-image: -ms-linear-gradient(90deg, #1b1a1a 0%, rgba(27, 26, 26, 0.11) 82%, #1b1a1a 92%);
    background-image: linear-gradient(90deg, #1b1a1a 0%, rgba(27, 26, 26, 0.11) 82%, #1b1a1a 92%);
  }
  .bg-overlay-theme:before {
    background-color: #3773f4;
    opacity: .85;
  }
  .bg-overlay-theme2:before {
    background-image: -webkit-linear-gradient(to top, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 45%, #f9f9f9 92%);
    background-image: -moz-linear-gradient(to top, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 45%, #f9f9f9 92%);
    background-image: -o-linear-gradient(to top, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 45%, #f9f9f9 92%);
    background-image: linear-gradient(to top, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0) 45%, #f9f9f9 92%);
    background-color: #3773f4;
    opacity: .96;
  }
  .bg-overlay-theme2:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background: linear-gradient(to top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 1%, #ffffff 35%);
    height: 150px;
    width: 100%;
    z-index: -1;
  }
  .bg-overlay-theme3:before {
    background-color: #3773f4;
    opacity: .9;
  }
  .text-center {
    text-align: center!important;
  }

  .about-item {
    width: 100%;
    padding: 20px 0;
    background: #529945;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 15rem;
  }

  .about-item-data {
    padding: 9px 9px 9px 9px;
    margin: 0.5rem;
    border: 1px solid #DFDFDF;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
  }

  .about-item-data .about-item-text {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.70);
    color: #fff;
    padding: 10px 0;
    opacity: 0;
    transition: all 1s ease;
    height: 100%;
    overflow: hidden;
  }

  .about-item-data p {
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    height: 70px;

  }

  .about-item-data:hover .about-item-text{
    opacity: 1;
    display: block;
  }


  .about-item-data img {
    width: 100%;
    object-fit: cover;
    height: 14rem;
  }

  .about-item-data h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 148%;
    margin-top: 11px;
    margin-bottom: 6px;
    /* or 21px */

    text-align: center;
  }

  .about-item-data p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 133%;
    /* or 13px */
    margin-bottom: 3px;
    text-align: center;
  }

  .about-item div h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    margin-bottom: 7px;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    /* identical to box height */


    color: #FFFFFF;
  }

  .about-item div p {
    font-family: 'Roboto';
    font-style: normal;
    margin: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    /* identical to box height */


    color: #FFFFFF;
  }

  .about-data {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin-top: 10px;
  }
  /* 超小屏幕（手机，小于 768px） */
  @media (max-width: 768px) {

    .about-data {
      display: grid;
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 0px !important;
      margin-top: 10px;
    }
    .container .box71 {
      display: block;
    }
    .col-xl-6 {
      margin-top: 1rem;
    }
  }
  @media (min-width: 768px) {

    .about-data {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      margin-top: 10px;
    }
  }
  section {
    width: 100%;
    overflow: hidden;
  }
  .content {
    font-size: 1.5rem;
  }
  .content img {
   width: 100%;
  }

  .cta-section {
    position: relative;
    /*background-image: url(../img/cta-bg.png);*/
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
  }

  .cta-section::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  @media screen and (min-width: 1920px) {
    .cta-section__img {
      width: 800px;
      max-width: 800px;
    }
  }
  .t-short-para {
    /*max-width: 48ch;*/
    font-size: 1.5rem;
  }
  .g-4, .gy-4 {
    --bs-gutter-y: 1.5rem;
  }
  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  /*.row>* {*/
  /*  padding-right: 1rem;*/
  /*  padding-left: 1rem;*/
  /*}*/
  .align-items-center {
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  @media (min-width: 768px) {
    .col-md-7 {
      width: 58.33333333%;
    }
    .col-md-7, .col-md-8 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
    }
    .col-md-5 {
      width: 41.66666667%;
    }
    .col-md-5, .col-md-6 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
    }
  }
  .btn {
    display: inline-block;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .8rem 1.4rem;
    font-family: Josefin Sans, sans-serif;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    border-radius: 3px;
  }
  .featured-1 .featured-img img {
    margin-left:0;
    width: 100%;
    height: 100%;
  }

  .about-content p{
    color: #212529;
    font-size: 14px;
    font-weight: bold;
  }


  /* Info Card */
  .info-card {
    position: relative;
  }
  .info-card .info-card-step {
    position: absolute;
    left: 0;
    top: 10px;
    font-family: 'Work Sans', sans-serif;
    color: #e8e8e8;
    font-size: 52px;
    font-style: normal;
    line-height: 29px;
  }
  .info-card .info-card-content {
    padding-left: 100px;
  }
  .info-card .info-card-subtitle {
    color: #9b9b9b;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    margin-bottom: 0;
  }
  .info-card .info-card-title {
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
    margin-bottom: 17px;
  }
  .info-card .info-card-desc {
    font-size: 15px;
    font-weight: 400;
    line-height: 23px;
    margin-bottom: 15px;
  }
  .info-card .info-card-links {
    color: #3773f4;
    font-size: 14px;
    font-weight: 700;
    line-height: 29px;
  }
  .info-card .info-card-links i {
    margin-right: 7px;
  }
  .info-card .info-card-links:hover {
    color: #282828;
  }
  /* Custom, iPhone Retina */
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .info-card {
      margin-bottom: 30px;
    }
  }
  /* Custom Retina */
  @media only screen and (min-width: 320px) and (max-width: 400px) {
    .info-card .info-card-content {
      padding-left: 75px;
    }
    .info-card .info-card-step {
      font-size: 40px;
    }
  }
  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .info-card {
      text-align: center;
      max-width: 500px;
      margin: 0 auto 30px;
    }
    .info-card .info-card-content {
      padding-left: 0;
    }
    .info-card .info-card-step {
      position: static;
    }
  }


  @media (max-width: 991px) {
    .plan_btn{
      border-radius: 10px;
      width: 130px;
      height: 40px;
      line-height: 40px;
      margin-bottom: 20px;
    }
  }
  .heading .heading--title {
    font-family: 'Work Sans', sans-serif;
    font-size: 36px;
    font-weight: 700;
    font-style: normal;
    line-height: 45px;
    margin-bottom: 18px;
  }
  .featured-1 .heading .heading--title {
    margin-bottom: 37px;
  }
  .heading .heading--desc {
    color: #9b9b9b;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 0;
  }
  .text-white {
    color: #ffffff !important;
  }
  .text-gray {
    color: #f9f9f9 !important;
  }
  .mb-20 {
    margin-bottom: 20px !important;
  }
  .feature-card .feature-card-title {
    font-size: 18px;
    line-height: 29px;
    font-weight: 600;
    font-style: normal;
    margin-bottom: 16px;
  }
  .feature-card {
    position: relative;
  }
  .feature-card .feature-card-icon {
    margin-bottom: 22px;
  }
  .feature-card .feature-card-icon img {
    max-width: 100%;
    height: auto;
  }
  .feature-card .feature-card-icon i {
    font-size: 64px;
    color: #3773f4;
    font-weight: 400;
  }
  .feature-card .feature-card-title {
    color: #222;
    font-size: 18px;
    line-height: 29px;
    font-weight: 600;
    font-style: normal;
    margin-bottom: 16px;
  }
  .feature-card .feature-card-desc {
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
  }
  /* Featured #1 */
  .featured-1 .heading {
    margin-bottom: 47px;
  }
  .featured-1 .heading .heading--title {
    margin-bottom: 37px;
  }
  .featured-1 .col-content {
    padding: 0 !important;
  }
  .featured-1 .feature-card-content {
    padding-right: 15px;
  }
  /* featured #2 */
  .featured-2 .feature-card {
    margin-bottom: 50px;
  }
  .featured-2 .feature-card .feature-card-icon {
    position: relative;
    border-radius: 50%;
    display: inline-block;
  }
  .featured-2 .feature-card .feature-card-icon i {
    z-index: 1;
    position: relative;
    -webkit-transition: 1s ease;
    -moz-transition: 1s ease;
    -ms-transition: 1s ease;
    transition: 1s ease;
  }
  .featured-2 .feature-card .feature-card-icon:hover i {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
  .featured-2 .feature-card .feature-card-title {
    font-size: 20px;
  }
  .featured-2 .feature-card-content {
    padding-right: 20px;
  }
  /* featured #3 */
  .featured-3 .feature-card {
    margin-bottom: 40px;
  }
  .featured-3 .feature-card-icon {
    position: absolute;
    top: 55px;
    left: 32px;
  }
  .featured-3 .feature-card-icon i {
    font-size: 32px;
    color: #f9f9f9;
    font-weight: 400;
  }
  .featured-3 .feature-card-content {
    padding-left: 100px;
  }
  .featured-3 .feature-card-title {
    color: #fff;
  }
  .featured-3 .read--more {
    display: block;
    font-size: 14px;
    font-weight: 700;
    text-transform: capitalize;
    line-height: 29px;
  }
  .featured-3 .read--more i {
    margin-right: 7px;
  }
  .featured-3 .feature-card:hover .read--more {
    color: #fff;
  }
  .featured-3 .video-button {
    margin-top: 36px;
  }
  .featured-3 .video--button {
    height: 439px;
  }
  /* featured #4 */
  .featured-4 .feature-card {
    margin-bottom: 46px;
  }
  .featured-4 .feature-card-icon {
    top: 10px;
    left: 0;
  }
  .featured-4 .feature-card-content {
    padding-left: 80px;
  }
  .featured-4 .feature-card .feature-card-desc {
    padding-right: 50px;
  }
  /* featured #5 */
  .featured-5 {
    overflow: visible;
  }
  .featured-5 .feature-card {
    margin-bottom: 50px;
  }
  .featured-5 .bitcoin-calculator {
    margin-top: -260px;
  }
  /* featured #6 */
  .featured-6 .feature-card .feature-card-title {
    color: #282828;
  }
  .featured-6 .heading {
    margin-bottom: 48px;
  }
  .featured-6 .heading .heading--title {
    font-size: 33px;
  }
  .featured-6 .featured-img img {
    width: 800px;
    height: 513px;
    -webkit-transform: translateX(-90px);
    transform: translateX(-90px);
    max-width: none;
  }
  /* featured #7 */
  .featured-7 .feature-card .feature-card-icon {
    margin-bottom: 33px;
  }
  .featured-7 .feature-card .feature-card-title {
    font-size: 20px;
  }
  /* featured #8 */
  .featured-8 .heading {
    margin-top: 36px;
  }
  .featured-8 .heading--desc {
    font-size: 17px;
    line-height: 26px;
    font-weight: 400;
    padding: 0 100px;
    margin-bottom: 43px;
  }
  .featured-8 .heading--title {
    margin-bottom: 31px;
  }
  .featured-8 .btn {
    width: 270px;
    text-transform: capitalize;
  }
  /* Custom, iPhone Retina */
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .featured-1 .container-fluid {
      padding-right: 15px !important;
      padding-left: 15px !important;
    }
    .featured-1 .col-content {
      padding: 30px !important;
    }
    .featured-1 .featured-img img {
      margin: 0;
      height: auto;
      max-width: 100%;
    }
    .featured-4 .container-fluid {
      padding-left: 15px;
    }
    .featured-4 .feature-card .feature-card-desc {
      padding-right: 0;
    }
    .featured-6 .pl-100 {
      padding-left: 15px !important;
    }
    .featured-6 .featured-img img {
      width: auto;
      height: auto;
      -webkit-transform: translateX(0);
      transform: translateX(0);
      max-width: 100%;
    }
    .featured-7 .feature-card {
      margin-bottom: 30px;
    }
    .featured-8 .heading--desc {
      padding: 0 15px;
    }
  }
  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .featured-1 .col-content {
      padding: 30px !important;
    }
    .featured-1 .container-fluid {
      padding-right: 15px !important;
      padding-left: 15px !important;
    }
    .featured-1 .featured-img img {
      margin-left: 0;
      height: auto;
      max-width: 100%;
    }
    .featured-6 .pl-100 {
      padding-left: 15px !important;
    }
    .featured-6 .featured-img img {
      width: auto;
      height: auto;
      -webkit-transform: translateX(0);
      transform: translateX(0);
      max-width: 100%;
    }
    .featured-7 .feature-card {
      margin-bottom: 30px;
    }
  }
  .pb-50 {
    padding-top: 50px !important;
  }
  address, blockquote, dd, dl, fieldset, form, ol, p, pre, table, ul {
    margin-bottom: 20px;
  }
  .h2, h2 {
    font-size: 42px;
  }
  .btn {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    position: relative;
    z-index: 2;
    font-size: 14px;
    font-weight: 700;
    text-transform: capitalize;
    text-align: center;
    border-radius: 0;
    padding: 0;
    line-height: 48px;
    width: 170px;
    height: 50px;
    letter-spacing: 0.26px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .btn--primary {
    background-color: #3773f4;
    color: #ffffff;
    border: 2px solid #3773f4;
  }
  .btn--rounded {
    border-radius: 50px;
  }
  .btn--primary:active, .btn--primary:focus, .btn--primary:hover {
    background-color: transparent;
    color: #3773f4;
  }

  /* 超小屏幕（手机，小于 768px） */
  @media (max-width: 768px) {
    .ps-xl-5 {
      padding: 10px;
    }
    .col-sm-12 {
      padding: 15px;
    }
    .about-data {
      display: grid;
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 0px !important;
      margin-top: 10px;
    }
  }
  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {

    .about-data {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      margin-top: 10px;
    }
  }
  /* Custom, iPhone Retina */
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .info-card {
      margin-bottom: 30px;
    }
  }
  /* Custom Retina */
  @media only screen and (min-width: 320px) and (max-width: 400px) {
    .info-card .info-card-content {
      padding-left: 75px;
    }
    .info-card .info-card-step {
      font-size: 40px;
    }
  }
  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .info-card {
      text-align: center;
      max-width: 500px;
      margin: 0 auto 30px;
    }
    .info-card .info-card-content {
      padding-left: 0;
    }
    .info-card .info-card-step {
      position: static;
    }
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    /*margin-right: -15px;*/
    /*margin-left: -15px;*/
  }
  @media (min-width: 576px){
    .col-sm-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (min-width: 768px){
    .col-md-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (min-width: 992px){
    .col-lg-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-lg-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  @media (min-width: 992px){
    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%;
    }
  }
  .featured-1 .featured-img img {
    margin-left:0;
    width: 100%;
    height: 100%;
  }

  .about-content p{
    color: #212529;
    font-size: 14px;
    font-weight: bold;
  }


  @media (max-width: 991px) {
    .plan_btn{
      border-radius: 10px;
      width: 130px;
      height: 40px;
      line-height: 40px;
      margin-bottom: 20px;
    }
  }
  /* 超小屏幕（手机，小于 768px） */
  @media (max-width: 768px) {
    .ps-xl-5 {
      padding: 10px;
    }
    .col-sm-12 {
      padding: 15px;
    }
    .about-data {
      display: grid;
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 0px !important;
      margin-top: 10px;
    }
  }
  .max960 {
    max-width: 1140px;
    margin: 0 auto;
  }
  .fontza {
    font-family: 'Poppins' !important;
  }
  .text-zah {
    background: linear-gradient(0deg, #FED504 -30%, #f0cd0b 30%, #FF7D10 90%);
    -webkit-background-clip: text;
    color: transparent;
  }
  .border-zah {
    border: 1px solid #FF7D10;
  }
  .p-3 {
    padding: 1rem !important;
  }
  .border-2 {
    border-width: 2px !important;
  }
  .text-bhs {
    color: #333;
  }
  .mt-3 {
    margin-top: 1rem !important;
  }
  .text-hh {
    color: #efac45;
    font-size: 1.5rem;
  }
  .mt-4 {
    margin-top: 1.5rem !important;
  }
  .btn-join {
    background: #FED504;
    background: linear-gradient(90deg, #FED504 -30%, #FED504 30%, #FF7D10 90%);
    border: 1px solid #FED504;
    color: #000;
    border-radius: 8px;
  }
  [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
  }
  .d-flex {
    display: flex !important;
  }
  .choice-section {
    margin-bottom: 2rem;
  }
  .choice-section .row>* {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x)* .5);
    padding-left: calc(var(--bs-gutter-x)* .5);
    margin-top: 10px;

  }
  .choice-section .feature-card {
    width: 100%;
    /*height: 100%;*/
    padding: 30px 15px;
    position: relative;
    border: 1px solid #4CAF50;
    border-radius: 20px;
    background-color: #eee;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    z-index: 1;
    /*height: 17rem;*/

  }

  @media screen and (min-width: 1200px) {
    .feature-card {
      padding: 30px;
    }
  }

  .feature-card:hover {
    -webkit-box-shadow: 0 3px 10px rgba(240, 19, 19, 0.5);
    box-shadow: 0 3px 10px rgba(240, 19, 19, 0.5);
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }

  .feature-card__icon {
    color: #fff;
  }

  .feature-card__icon-float {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: var(--d1);
    line-height: 1;
    opacity: 0.05;
    z-index: -1;
  }
  .icon {
    position: relative;
    display: inline-block;
  }
  .icon--md {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 32px;
  }
  .icon--sqr {
    border-radius: 5px;
    text-align: center;
  }
  .choice-section h4 {
   margin: 1.5rem 0 1rem;
   font-family: "Inter", sans-serif;
   font-weight: 700;
   line-height: 1.15;
   color: #000;
 }
  .mb-0 {
    font-size: 1.5rem;
  }

  @media (min-width: 1200px) {
    .platform_m_logo_show{
      display: flex !important;
    }
    .platform_m_logo_not_show{
      display: none !important;
    }
  }
  @media (max-width: 1200px) {
    .platform_m_logo_show{
      display: none !important;
    }
    .platform_cbox{
      height:200px
    }
    .platform_m_logo_not_show{
      display: block;
    }
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
</style>


