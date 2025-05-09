<template>
  <div class="HomePage" style="background: #000;">
    <Header></Header>
<!--    <van-notice-bar color="red" v-if="InitData.notifications && InitData.notifications.length>0" left-icon="volume-o" scrollable :text="InitData.notifications?InitData.notifications[0]:''" />-->
    <div class="hero-section position-relative" style="background-image: url(./static/images/img/bg1.png); background-size: cover; background-position: center; background-repeat: no-repeat;">
      <div class="container pt-5 ">
        <div class="text-center text-white">
          <p class="display-2 mb-3 fw-bold text-lh">JAMINING Cloud Mining</p>
          <div class="display-2 fw-bold text-lh">
            <span class="text-z-fs ">Secure and Efficient</span> Easy Profits            </div>
          <h6 class="mt-5 text-ls" style="line-height: 1.8;">JAMINING is dedicated to providing users with secure and reliable cloud mining services, combining top-tier equipment, clean energy, and an easy-to-use experience. With robust security measures to protect assets and eco-friendly, efficient mining operations, JAMINING makes achieving stable returns effortless, simplifying cryptocurrency investments for everyone!</h6>
          <a type="button" href="javascript:;" @click="$router.push('/contracts')" class="btn welcome-bonus mt-5 fw-bold">Start mining</a>
        </div>
      </div>


      <div class="position-relative">
        <div class="mx-auto">
          <div class="col-lg-6 col-11 mx-auto mt-5 float-up frame-image">
            <div class="light-border" style="--x: 28.004216444132112%;">
              <img :src="'./static/images/img/staking.png'" alt="" class="img-fluid border border-0 rounded-top staking-img">
            </div>
          </div>
        </div>

        <div class="separator-section position-absolute bottom-0 start-0 w-100">
          <img :src="'./static/images/img/separator-top.svg'" alt="" class="img-fluid w-100">
        </div>
      </div>
    </div>
    <div class="container text-center">
      <div class="mt-3">
        <h6 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold fs-5">{{ $t("i18n.Home.text1") }}</span></h6>
      </div>
      <div class="col-lg-10 mx-auto my-4">
        <div class="light-border bg-hs1" style="--x: 13.101851851851851%;">
          <div class="row">
            <div class="col-lg-4 py-5" style="padding-left: 0px; padding-right: 0px;">
              <h5>{{ $t("i18n.Home.text2") }}</h5>
              <div class="progress-line d-none d-lg-block" style="width: 50%; left: 50%;">
                <div class="line-inner" style="background-color: #8B2AB8;"></div>
              </div>
              <div class="progress-dot d-none d-lg-block">
                <div class="dot-level">
                  <div class="dot-inner" style="background-color: #8B2AB8;  "></div>
                </div>
              </div>
              <div class="col-6 mx-auto pt-2">
                <span class="text-ls fw-bold fs-6" style="font-size: 13px;">{{ $t("i18n.Home.text3") }}</span>
              </div>
            </div>
            <div class="col-lg-4 py-5" style="padding-left: 0px; padding-right: 0px;">
              <h5>{{ $t("i18n.Home.text4") }}</h5>
              <div class="progress-line d-none d-lg-block" style="width: 100%; ">
                <div class="line-inner" style="background-color: #8B2AB8;"></div>
              </div>
              <div class="progress-dot d-none d-lg-block">
                <div class="dot-level">
                  <div class="dot-inner" style="background-color: #8B2AB8;"></div>
                </div>
              </div>
              <div class="col-6 mx-auto pt-2">
                <span class="text-ls fw-bold fs-6" style="font-size: 13px;">{{ $t("i18n.Home.text5") }}</span>
              </div>
            </div>
            <div class="col-lg-4 py-5" style="padding-left: 0px; padding-right: 0px;">
              <h5>{{ $t("i18n.Home.text6") }}</h5>
              <div class="progress-line d-none d-lg-block" style="width: 50%;">
                <div class="line-inner" style="background-color: #8B2AB8;"></div>
              </div>
              <div class="progress-dot d-none d-lg-block">
                <div class="dot-level">
                  <div class="dot-inner" style="background-color: #8B2AB8;"></div>
                </div>
              </div>
              <div class="col-6 mx-auto pt-2">
                <span class="text-ls fw-bold fs-6" style="font-size: 13px;">{{ $t("i18n.Home.text7") }}</span>
              </div>
            </div>
          </div>
        </div>
        <a type="button" href="javascript:;" @click="$router.push('/login')" class="btn staking-btn mt-5 "><span>Log now</span></a>
      </div>
    </div>
    <div class=" w-100">
      <img :src="'./static/images/img/separator-bottom.svg'" alt="" class="img-fluid w-100">
    </div>
    <div class="text-center container">
      <div class="mt-3">
        <h6 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold fs-5">{{ $t("i18n.Home.text8") }}</span></h6>
        <h2 class="text-lh pt-2 el-mx-auto-70">{{ $t("i18n.Home.text9") }}</h2>
        <h2 class="text-lh pt-2 el-mx-auto-70">{{ $t("i18n.Home.text10") }}</h2>
        <h5 class="text-ls pt-2" style="line-height: 1.8;">{{ $t("i18n.Home.text11") }}</h5>
      </div>
      <div class="row mt-4">
        <div class="col-lg-4 p-3" v-for="(item,index) in listData" :key="index">
          <div class="light-border p-3" style="--x: 88.84803921568627%; height: 53rem">
            <div class="staking-plan-img">
              <img  :src="InitData.setting.up_url + item.icon" alt="" class="img-fluid rounded-3">
            </div>
            <div class="mt-2">
              <h4 class="fw-bold">{{item.title}}</h4>
              <span class=" text-z-fs fw-bold" v-if="item.type==1">Payout rewards every 24 hours</span>
              <span class=" text-z-fs fw-bold" v-else>Return after expiry</span>
            </div>
            <div class="separator-animated mt-4 mb-3"></div>
            <div class="row justify-content-around">
              <div class="bg-ls px-4 py-2 rounded-3 col-5">
                <h6 class="text-dhs">Contract Amount</h6>
                <h6>${{item.amount}}</h6>
              </div>
              <div class="bg-ls px-4 py-2 rounded-3 col-5">
                <h6 class="text-dhs">Contract Duration</h6>
                <h6>{{item.cycle}} Days</h6>
              </div>
            </div>
            <div class="row justify-content-around mt-3">
              <div class="bg-ls px-3 py-2 rounded-3 col-5">
                <h6 class="text-dhs">Daily Earnings</h6>
                <h6>${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*1).toFixed(2))}}</h6>
              </div>
              <div class="bg-ls py-2 rounded-3 col-5">
                <h6 class="text-dhs px-3">Total Earnings</h6>
                <h6>${{parseFloat((parseFloat(item.daily_rate)/100*item.amount*item.cycle).toFixed(2))}}</h6>
              </div>
            </div>
            <div class="mt-3">
              <div class="progress" role="progressbar" aria-label="Example with label" :aria-valuenow="item.progress" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar progress-bar-striped progress-bar-animated " :style="`width: ${item.progress}%; background-color: rgba(111, 100, 233, 0.6);`">{{item.progress}}%</div>
              </div>
            </div>

            <div class="mt-4 row row-cols-3 justify-content-center">
              <div class="text-center" v-for="(aa,i) in item.affiliate_bonus">
                <div class="border border-2 border-fs rounded-pill d-flex align-items-center justify-content-center mx-3" style="width: 4rem; height: 4rem;">
                  <span class="mx-auto">{{aa}}%</span>
                </div>
                <div class=" d-flex align-items-center  mx-3 " style="width: 4rem; height: 2rem;">
                  <span class="text-center  mt-1 " style="width: 100%;">Level {{(i+1)}}</span>
                </div>
              </div>

            </div>
            <div class="mt-3 border border-0 rounded-3 p-2 bg-ls d-flex justify-content-between">
              <div>
                <button class="btn"><span class="text-z-fs fw-bold">Price ${{item.amount}}</span></button>
              </div>
              <div>
                <a @click="goDetail(item)" type="button" href="javascript:;" class="btn staking-btn" style="padding: 0.5rem 1.5rem;"><span> Invest Now </span></a>
              </div>
            </div>
            <div v-if="item.progress>=100" class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style="z-index: 2;">
              <img :src="'./static/images/img/out.png'" alt="Image" class="img-fluid" style="max-width: 90%; max-height: 90%; object-fit: contain;">
            </div>
          </div>
        </div>
      </div>
      <div class="text-center my-5">
        <a href="javascript:;" @click="$router.push('/contracts')" type="button" class="btn staking-btn border border-0  py-3 text-light fw-bold">View All</a>
      </div>
    </div>
    <div class=" w-100">
      <img :src="'./static/images/img/separator-bottom.svg'" alt="" class="img-fluid w-100">
    </div>
    <jrCalculator 
      ref="jrCalculator" 
      :listData="listData"
      :label="[$t('calculator[2]'), $t('calculator[3]'), $t('calculator[4]')]"
      :title='$t("i18n.Home.text12")' 
      :tip='$t("i18n.Home.text13")'>
    </jrCalculator>
    <div class="container mb-5">
      <div class="mt-3 text-center">
        <h6 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold">ABOUT US</span></h6>
        <h2 class="text-lh pt-2">About JAMining</h2>
        <h6 class="text-ls pt-2" style="line-height: 1.8;">JA FINANCIAL SERVICES LIMITED【 JAMINING 】 was founded in 2004 and is headquartered in the UK,is a pioneering leader in the cloud mining industry. With a strong focus on sustainability, we leverage clean energy to power cloud mining and build a secure, compliant, and transparent blockchain infrastructure. Our mission is to provide global users with efficient, intelligent cloud computing and seamless, one-click mining services.</h6>
      </div>
      <div class="row mt-5 p-3" style="gap:100px;">
        <div class="col-lg-6 text-ls">
          <h5>Our Professional Certification</h5>
          <h6 style="line-height: 1.5rem;">As an industry leader, JAMINING is proudly certified by the Financial Conduct Authority (FCA) in the UK, ensuring our platform meets the highest international standards and offers a safe and compliant investment environment.</h6>
          <h5>Technological Advantages</h5>
          <h6 style="line-height: 1.5rem;">Cutting-Edge GPU Technology: Utilizing the latest high-performance GPUs from NVIDIA and AMD, we achieve unparalleled mining efficiency with minimal energy consumption.</h6>
          <h6 style="line-height: 1.5rem;">Global Data Center Network: Over 100 advanced data centers strategically located across Europe, North America, and Asia, ensuring 24/7 seamless operations.</h6>
          <h6 style="line-height: 1.5rem;">Clean Energy Solutions: All mining operations are powered by renewable energy sources such as solar and wind, creating an eco-friendly and sustainable mining ecosystem.</h6>
        </div>
        <div class="col-lg-5">
          <img class="border border-0 rounded-3" :src="'./static/images/img/ab1.jpg'" alt="" width="100%">
        </div>
      </div>
    </div>
    <div class=" w-100">
      <img :src="'./static/images/img/separator-top.svg'" alt="" class="img-fluid w-100">
    </div>
    <div class="container text-center my-5">
      <div class="mt-3">
        <h2 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold">{{ $t('i18n.Home.text30') }}</span></h2>
        <h6 class="text-lh pt-2">{{ $t('i18n.Home.text31') }}</h6>
        <h6 class="text-lh pt-2">{{ $t('i18n.Home.text32') }}</h6>
      </div>
      <div class="row mt-4">
        <div class="col-lg-4 mt-3">
          <div class="light-border p-3" style="height: 21rem; --x: 26.08173076923077%;">
            <img :src="'./static/images/img/aq11.png'" alt="" class="img-fluid my-4" style="width: 80px; height: 80px;">
            <h5 class="fw-bold mb-3">{{ $t('i18n.Home.text18') }}</h5>
            <h6 class="text-ls" style="line-height: 1.8;">{{ $t('i18n.Home.text19') }}</h6>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="light-border p-3" style="height: 21rem;">
            <img :src="'./static/images/img/aq22.png'" alt="" class="img-fluid my-4" style="width: 80px; height: 80px;">
            <h5 class="fw-bold mb-3">{{ $t('i18n.Home.text20') }}</h5>
            <h6 class="text-ls" style="line-height: 1.8;">{{ $t('i18n.Home.text21') }}</h6>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="light-border p-3" style="height: 21rem;">
            <img :src="'./static/images/img/aq33.png'" alt="" class="img-fluid my-4" style="width: 80px; height: 80px;">
            <h5 class="fw-bold mb-3">{{ $t('i18n.Home.text22') }}</h5>
            <h6 class="text-ls" style="line-height: 1.8;">{{ $t('i18n.Home.text23') }}</h6>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="light-border p-3" style="height: 21rem;">
            <img :src="'./static/images/img/aq44.png'" alt="" class="img-fluid my-4" style="width: 80px; height: 80px;">
            <h5 class="fw-bold mb-3">{{ $t('i18n.Home.text24') }}</h5>
            <h6 class="text-ls" style="line-height: 1.8;">{{ $t('i18n.Home.text25') }}</h6>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="light-border p-3" style="height: 21rem;">
            <img :src="'./static/images/img/aq55.png'" alt="" class="img-fluid my-4" style="width: 80px; height: 80px;">
            <h5 class="fw-bold mb-3">{{ $t('i18n.Home.text26') }}</h5>
            <h6 class="text-ls" style="line-height: 1.8;">{{ $t('i18n.Home.text27') }}</h6>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="light-border p-3" style="height: 21rem;">
            <img :src="'./static/images/img/aq66.png'" alt="" class="img-fluid my-4" style="width: 80px; height: 80px;">
            <h5 class="fw-bold mb-3">{{ $t('i18n.Home.text28') }}</h5>
            <h6 class="text-ls" style="line-height: 1.8;">{{ $t('i18n.Home.text29') }}</h6>
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
    <div class=" w-100">
      <img :src="'./static/images/img/separator-top.svg'" alt="" class="img-fluid w-100">
    </div>
    <div class="container text-center my-5">
      <div class="mt-3">
        <h2 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold">FAQs</span></h2>
        <!-- <h2 class="text-lh pt-2">Frequently Asked Questions</h2> -->
      </div>
      <div class="custom-accordion my-5">
        <div class="accordion" id="faqAccordion">
          <!-- FAQ Item 1 -->
          <div class="accordion-item" v-for="(item,index) in listDataQ" :key="index" v-if="index<3">
            <div class="light-border">
              <h2 class="accordion-header" @click="showIndex = index" >
                <button class="accordion-button fs-5 collapsed border-0 rounded-3" type="button" >
                  <i class="bi bi-building me-2"></i>
                  {{item.title}}                       </button>
              </h2>
              <div id="collapseOne" :class="showIndex==index?'accordion-collapse collapse show':'accordion-collapse collapse'" >
                <div class="accordion-body">
                  <p class="faq-answer" v-html="item.content"></p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center my-5">
            <a href="javascript:;" @click="$router.push('/FAQ')" type="button" class="btn staking-btn border border-0  py-3 text-light fw-bold">View All</a>
          </div>
        </div>
      </div>
    </div>
    <div class=" w-100">
      <img :src="'./static/images/img/separator-bottom.svg'" alt="" class="img-fluid w-100">
    </div>
    <div class="col-12 mx-auto my-4 d-lg-flex justify-content-around">
      <div class="col-12">
        <h2 class="text-center mb-5 text-z-fs">{{ $t('i18n.Home.text14') }}</h2>
        <div class="border border-1 border-hhs rounded-4 table-wrapper">
          <div class="table-header bg-hs">
            <table class="w-100">
              <thead>
              <tr class="text-bhs text-center" style="height: 73px;">
                <th class="col-3 fs-6">Username</th>
                <th class="col-3 fs-6">Option</th>
                <th class="col-3 fs-6">Quantity</th>
                <th class="col-3 fs-6">Date</th>
              </tr>
              </thead>
            </table>
          </div>
          <div class="table-body-wrapper">
            <div class="table-body-content">
              <swiper v-if="InitData.fundList"
                      :options="swiperOption0" ref="mySwiper" style="height: 35rem"
              >
                <swiper-slide v-if="index<20" v-for="(item,index) in InitData.fundList" :key="index" :index="index">
                  <div class="table-row text-bhs text-center">
                    <div class="col-3">{{item.username}}</div>
                    <div class="col-3 fs-8">{{ item.type === '1' ? $t('i18n.Home.text34') : $t('i18n.Home.text33') }}</div>
                    <div class="col-3 dmoney">{{item.money}} {{item.currency}}</div>
                    <div class="col-3 fs-8">{{item.time.split(' ')[1]}}</div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" w-100">
      <img :src="'./static/images/img/separator-top.svg'" alt="" class="img-fluid w-100">
    </div>
    <div class="container  my-5">
      <div class="mt-3 text-center">
        <h2 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold">Blog</span></h2>
        <!-- <h2 class="text-lh pt-2">Latest News</h2> -->
      </div>
      <div class="row mt-4">
        <div class="col-lg-4 p-3" v-for="(item,index) in listDataB" :key="index" v-if="index<3">
          <div class="light-border p-3" style="--x: 30.024509803921568%;">
            <div class="staking-plan-img">
              <img :src="InitData.setting.up_url + item.cover_img" alt="" class="img-fluid rounded-3">
            </div>
            <div class="mt-2" style="height: 1.5rem;">
              <a href="javascript:;" @click="$router.push(`/blogDetail?id=${item.id}`)">
                <p class="title-two-lines text-light">{{item.title}}</p>
              </a>
            </div>
            <div class="separator-animated mt-4 mb-3"></div>

            <a href="javascript:;" @click="$router.push(`/blogDetail?id=${item.id}`)" class=" d-flex justify-content-between text-decoration-none">
              <div class="fs-5 text-light">Read More</div>
              <div><i class="bi bi-arrow-right fs-5 fw-bold text-light"></i></div>
            </a>
          </div>
        </div>

      </div>
      <div class="text-center my-5">
        <a href="javascript:;" @click="$router.push('/blog')" type="button" class="btn staking-btn border border-0  py-3 text-light fw-bold">View All</a>
      </div>
    </div>
    <div class=" w-100">
      <img :src="'./static/images/img/separator-bottom.svg'" alt="" class="img-fluid w-100">
    </div>
    <div class="container  my-5">
      <div class="mt-3  text-center">
        <h6 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold">ACCEPT A VARIETY OF PAYMENT METHODS</span></h6>
      </div>
      <jr-icon-list
        ref="jrIconList"
      ></jr-icon-list>
    </div>
    <div class="container  my-5">
      <div class="mt-3  text-center">
        <h6 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold">Our Partners</span></h6>
      </div>
      <jrPartners
        ref="jrPartners"
        :listData="jrPartnersData"
      ></jrPartners>
    </div>
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
  import jrCalculator from '@/components/common/jr_calculator.vue'
  import jrPartners from '@/components/common/jr_partners.vue'
  import jrIconList from '../components/common/jr_icon_list.vue';
  export default {
    name: 'Home',
    inject: ['reloadHtml'],
    components: {
      swiper,
      swiperSlide,
      jrCalculator,
      jrPartners,
      jrIconList
    },
    data() {
      return {
        jrPartnersData: [
          { url: require('../../static/images/img/google.png') },
          { url: require('../../static/images/img/ngular.png') },
          { url: require('../../static/images/img/laravel.png') },
          { url: require('../../static/images/img/woo.png') },
          { url: require('../../static/images/img/magento.png') },
          { url: require('../../static/images/img/pingdom.png') },
          { url: require('../../static/images/img/envato.png') },
          { url: require('../../static/images/img/colorlib.png') },
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
          slidesPerView:5,
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
          loop: false,  // 是否循环轮播
          speed:2000,
          autoplay: {
            delay: 3000,
            // disableOnInteraction: false,
            // stopOnLastSlide: false,
          },
          // effect : 'fade',
          // fadeEffect: {
          //   crossFade: true,
          // }
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
      }
    },

    computed: {
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
      goDetail(item) {
        // if(item.progress<100){
          this.$router.push(`/productDetail?id=${item.id}`)
        // }
      },
      resize () {
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

</style>


