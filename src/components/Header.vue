<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top d-none d-lg-block">
      <div class="container" style="margin-top: 0px !important">
        <a class="navbar-brand" href="javascript:;" @click="$router.push('/')">
          <img :src="'./static/images/img/logo.png'" alt="OkayCoin">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto data-flex justify-content-between" style="width: 70%;padding: 0 5px;">
            <li class="nav-item ">
              <a :class="'nav-link '+(index=='/'?'active':'')" href="javascript:;" @click="$router.push('/')">{{$t('header[0]')}}</a>
            </li>
            <li class="nav-item">
              <a :class="'nav-link '+(index=='/contracts'?'active':'')" @click="$router.push('/contracts')" href="javascript:;">{{$t('header[1]')}}</a>
            </li>
            <li class="nav-item">
              <a :class="'nav-link '+(index=='/about'?'active':'')"  @click="$router.push('/about')" href="javascript:;">{{$t('header[3]')}}</a>
            </li>
            <li class="nav-item">
              <a :class="'nav-link '+(index=='/affiliate'?'active':'')"  @click="$router.push('/affiliate')" href="javascript:;">{{$t('header[2]')}}
              </a>
            </li>
            <li class="nav-item">
              <a :class="'nav-link '+(index=='/welfare'?'active':'')"  @click="$router.push('/welfare')" href="javascript:;">{{$t('header[26]')}}
              </a>
            </li>
            <li class="nav-item">
              <a :class="'nav-link '+(index=='/FAQ'?'active':'')"  @click="$router.push('/FAQ')" href="javascript:;">{{$t('header[4]')}}</a>
            </li>
            <li class="nav-item">
              <a :class="'nav-link '+(index=='/app'?'active':'')" @click="$router.push('/app')" href="javascript:;">{{$t('header[7]')}}</a>
            </li>
            <li class="nav-item">
              <a :class="'nav-link '+(index=='/teach'?'active':'')" @click="$router.push('/teach')" href="javascript:;">{{$t('header[5]')}}</a>
            </li>
<!--            <li class="nav-item">-->
<!--              <a :class="'nav-link '+(index=='/contact'?'active':'')" @click="$router.push('/contact')" href="javascript:;">Contact</a>-->
<!--            </li>-->
            <li class="nav-item">
              <a :class="'nav-link '+(index=='/blog'?'active':'')" @click="$router.push('/blog')" href="javascript:;">{{$t('header[6]')}}</a>
            </li>
          </ul>
          <div class="d-flex gap-3" v-if="UserInfo">
            <a href="javascript:;" @click="$router.push('/dashboard')" class="btn btn-join">{{$t('header[8]')}}</a>
          </div>
          <div class="d-flex gap-3" v-else>
            <a href="javascript:;" @click="$router.push('/login')" class="btn btn-login">{{$t('header[9]')}}</a>
            <a href="javascript:;" @click="$router.push('/register')" class="btn btn-join">{{$t('header[10]')}}</a>
          </div>
          <div class="ml-1 OlineNum">
              <div class="">{{ $t('header[25]') }}</div>
              <span>{{InitData.setting.online || 0}}</span>
          </div>
          <div class="btn-group ">
            <button @click="showPcLan = !showPcLan" class="btn  dropdown-toggle p-1 ms-3 col-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img v-if="$i18n.locale=='en-US'" :src="'./static/images/en-US.png'" style="width: 2rem;">
              <img v-if="$i18n.locale=='ar-AR'" :src="'./static/images/uploads/20250218/4b617811af41d0445973e6de96b878cb.png'" style="width: 2rem;">
              <img v-if="$i18n.locale=='es-ES'" :src="'./static/images/uploads/20250214/e861c808006e9bd7e71d2a4c688e5920.png'" style="width: 2rem;">
              <img v-if="$i18n.locale=='de-DE'"  :src="'./static/images/uploads/20250214/c3f5ae27f6c2c8825893cad0e770f0f5.png'" style="width: 2rem;">
              <img v-if="$i18n.locale=='fr-FR'"  :src="'./static/images/uploads/20250214/2d9d7b78e14f54d6f1d61c087022d68d.png'" style="width: 2rem;">
              <img v-if="$i18n.locale=='ja-JP'" :src="'./static/images/uploads/20250214/9cbaa7f64e75efcc10c3c477a4c192a7.png'" style="width: 2rem;">
              <img v-if="$i18n.locale=='ko-KO'" :src="'./static/images/ko-KO.png'" style="width: 2rem;">
              <img v-if="$i18n.locale=='it-IT'" :src="'./static/images/uploads/20250215/5581fce3c38db971dd0e388b5cec27c5.png'" style="width: 2rem;">
              <img v-if="$i18n.locale=='nl-NL'" :src="'./static/images/nl-NL.png'" style="width: 2rem;">
              <img v-if="$i18n.locale=='pt-PT'" :src="'./static/images/uploads/20250215/74bbe4ec4c22c83c14b9f089b0203c60.png'" style="width: 2rem;">
              <img v-if="$i18n.locale=='ru-RU'" :src="'./static/images/uploads/20250215/8b35279908e14c6d54702130abaf9051.png'" style="width: 2rem;">
              <img v-if="$i18n.locale=='vi-VN'" :src="'./static/images/uploads/20250215/c787c2a9525dd767e67fef599fff4cfe.png'" style="width: 2rem;">
              <img v-if="$i18n.locale=='yd-YD'" :src="'./static/images/yd-YD.png'" style="width: 2rem;">
            </button>
            <ul :class="showPcLan?'dropdown-menu show':'dropdown-menu'" style="left: -6rem;top: 3rem;">
              <li><a class="dropdown-item" v-if="InitData.setting.en==1" href="javascript:;" @click="changeLanguage('en-US')"><img :src="'./static/images/en-US.png'" style="width: 2rem;"> English</a></li>
              <li><a class="dropdown-item" v-if="InitData.setting.ar==1" href="javascript:;" @click="changeLanguage('ar-AR')"><img :src="'./static/images/uploads/20250218/4b617811af41d0445973e6de96b878cb.png'" style="width: 2rem;"> اللغة العربية</a></li>
              <!--                <li><a class="dropdown-item" href="javascript:;" @click="changeLanguage('kr')"><img :src="'./static/images/uploads/20250214/6425da9d1f95c1df115d27caa4e900a0.png'" style="width: 2rem;"> 한국인</a></li>-->
              <li><a class="dropdown-item" v-if="InitData.setting.es==1" href="javascript:;" @click="changeLanguage('es-ES')"><img :src="'./static/images/uploads/20250214/e861c808006e9bd7e71d2a4c688e5920.png'" style="width: 2rem;"> Español</a></li>
              <li><a class="dropdown-item" v-if="InitData.setting.de==1" href="javascript:;" @click="changeLanguage('de-DE')"><img :src="'./static/images/uploads/20250214/c3f5ae27f6c2c8825893cad0e770f0f5.png'" style="width: 2rem;"> Deutsch</a></li>
              <li><a class="dropdown-item" v-if="InitData.setting.fr==1" href="javascript:;" @click="changeLanguage('fr-FR')"><img :src="'./static/images/uploads/20250214/2d9d7b78e14f54d6f1d61c087022d68d.png'" style="width: 2rem;"> Français</a></li>
              <li><a class="dropdown-item" v-if="InitData.setting.jp==1" href="javascript:;" @click="changeLanguage('ja-JP')"><img :src="'./static/images/uploads/20250214/9cbaa7f64e75efcc10c3c477a4c192a7.png'" style="width: 2rem;"> 日本語</a></li>
              <li><a class="dropdown-item" v-if="InitData.setting.ko==1" href="javascript:;" @click="changeLanguage('ko-KO')"><img :src="'./static/images/ko-KO.png'" style="width: 2rem;">한국인</a></li>
              <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.it==1" @click="changeLanguage('it-IT')"><img :src="'./static/images/uploads/20250215/5581fce3c38db971dd0e388b5cec27c5.png'" style="width: 2rem;"> Italiano</a></li>
              <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.nl==1" @click="changeLanguage('nl-NL')"><img :src="'./static/images/nl-NL.png'" style="width: 2rem;"> Nederlands</a></li>
              <li><a class="dropdown-item" v-if="InitData.setting.pt==1" href="javascript:;" @click="changeLanguage('pt-PT')"><img :src="'./static/images/uploads/20250215/74bbe4ec4c22c83c14b9f089b0203c60.png'" style="width: 2rem;"> Português</a></li>
              <li><a class="dropdown-item" v-if="InitData.setting.ru==1" href="javascript:;" @click="changeLanguage('ru-RU')"><img :src="'./static/images/uploads/20250215/8b35279908e14c6d54702130abaf9051.png'" style="width: 2rem;"> Русский</a></li>
              <li><a class="dropdown-item" v-if="InitData.setting.vi==1" href="javascript:;" @click="changeLanguage('vi-VN')"><img :src="'./static/images/uploads/20250215/c787c2a9525dd767e67fef599fff4cfe.png'" style="width: 2rem;"> Tiếng Việt </a></li>
              <li><a class="dropdown-item" v-if="InitData.setting.yd==1 || InitData.setting.hi==1" href="javascript:;" @click="changeLanguage('yd-YD')"><img :src="'./static/images/yd-YD.png'" style="width: 2rem;"> हिन्दी </a></li>
              <!--                <li><a class="dropdown-item" href="javascript:;" @click="changeLanguage('rin ')"><img :src="'./static/images/uploads/20250215/1bbcfe92678e6478842fed4c0be0e31c.png'" style="width: 2rem;"> हिंदी</a></li>-->
            </ul>
          </div>
        </div>
      </div>
    </nav>
<!--    mobile contauner-->
    <div class=" text-center fixed-top d-block d-lg-none">
      <nav class="navbar" style="padding-top: 0px; padding-bottom: 0px;">
        <div v-if="UserInfo" class="container-fluid p-2 ">
          <div class="d-flex justify-content-between align-items-center">
            <button @click="showMobileMenu = true" class="btn " type="button"><i class="bi bi-sliders text-dark fs-3"></i></button>
            <div :class="'offcanvas offcanvas-start border-end border-bshs col-lg-5'+(showMobileMenu?' show':'')" style="width: 19rem; background-color: #fff; border: 0px !important;;">
              <div class="offcanvas-header text-center ">
                <img :src="'./static/images/img/logo.png'" alt="" class="mx-auto" style="width: 50%;">
              </div>
              <div class="text-center text-bhs pt-2">
                <span class="fs-7">{{UserInfo.username}}</span>

              </div>
              <div class="text-center text-bhs pt-2">
        <span class="fs-7">{{$t('header[11]')}}:{{UserInfo.useridentity}}</span>

              </div>
              <div class="text-center text-bhs pt-2">
                <span class="fs-7">{{$t('header[12]')}}: {{UserInfo.idcode}}</span>
              </div>
              <div class="d-flex justify-content-around mt-5 ">
                <a href="javascript:;" @click="$router.push('/deposit')" class="text-decoration-none text-black">
                  <div class="text-center">
                    <i class="bi bi-wallet fs-1 text-bhs"></i>
                    <p class="fs-6 text-bhs">{{$t('header[13]')}}</p>
                  </div>
                </a>
                <a href="javascript:;" @click="$router.push('/withdraw')" class="text-decoration-none text-black">
                  <div class="text-center">
                    <i class="bi bi-wallet2 fs-1 text-bhs"></i>
                    <p class="fs-6 text-bhs">{{$t('header[14]')}}</p>
                  </div>
                </a>
                <a href="javascript:;" @click="$router.push('/affiliates')" class="text-decoration-none text-black">
                  <div class="text-center">
                    <i class="bi bi-people fs-1 text-bhs"></i>
                    <p class="fs-6 text-bhs">{{$t('header[15]')}}</p>
                  </div>
                </a>
              </div>

              <div class="offcanvas-body px-4">
                <!-- <div class="py-2">
                    <a class="text-bhs" href="/index/user/record.html">
                        <i class="bi bi-person-circle fs-4"></i>
                        <span class="ps-2 fs-6">Trading log</span>
                    </a>
                </div> -->
                <div class="py-2">
                  <a class="text-bhs active" href="javascript:;" @click="$router.push('/dashboard')">
                    <i class="bi bi-grid fs-4"></i>
                    <span class="ps-2 fs-6">{{$t('header[8]')}}</span>
                  </a>
                </div>
                <div class="py-2">
                  <a class="text-bhs" href="javascript:;" @click="$router.push('/MyPackages')">
                    <i class="bi bi-ui-checks fs-4"></i>
                    <span class="ps-2 fs-6">{{$t('header[16]')}}</span>
                  </a>
                </div>
                <div class="py-2">
                  <a class="text-bhs" href="javascript:;"  @click="$router.push('/transactions')">
                    <i class="bi bi-journal-bookmark fs-4"></i>
                    <span class="ps-2 fs-6">{{$t('header[17]')}}</span>
                  </a>
                </div>

                <div class="py-2">
                  <a href="javascript:;" @click="showSet = !showSet" class=" fs-6 text-bhs " style="color: rgb(185, 192, 196);" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    <i class="bi bi-plus-circle fs-4"></i>
                    <span class="ps-2 fs-6">{{$t('header[18]')}}</span>
                  </a>
                </div>
                <div id="collapseOne"  :class="showSet?'accordion-collapse collapse show':'accordion-collapse collapse'" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="py-2">
                      <a class="text-bhs" href="javascript:;" @click="$router.push('/walletAddress')">
                        <i class="bi bi-wallet-fill fs-4"></i>
                        <span class="ps-2 fs-6">{{$t('header[19]')}}</span>
                      </a>
                    </div>
                    <div class="py-2">
                      <a class="text-bhs" href="javascript:;" @click="$router.push('/loginPassword')">
                        <i class="bi bi-shield-lock-fill fs-4"></i>
                        <span class="ps-2 fs-6">{{$t('header[20]')}}</span>
                      </a>
                    </div>
                    <div class="py-2">
                      <a class="text-bhs" href="javascript:;" @click="$router.push('/payPassword')">
                        <i class="bi bi-safe2 fs-4"></i>
                        <span class="ps-2 fs-6">{{$t('header[21]')}}</span>
                      </a>
                    </div>
                  </div>
                </div>


               <div class="py-2">
                    <a class="text-bhs" href="javascript:;" @click="$router.push('/teach')">
                        <i class="bi bi-shield-lock-fill fs-4"></i>
                        <span class="ps-2 fs-6">{{$t('header[5]')}}</span>
                    </a>
                </div>
                <!-- <div class="py-2">
                   <a class="text-bhs" href="/index/user/payment.html">
                       <i class="bi bi-safe2 fs-4"></i>
                       <span class="ps-2 fs-6">Payment password</span>
                   </a>
               </div> -->
                <div class="py-2">
                  <a class="text-bhs" href="javascript:;" @click="$Model.Logout()">
                    <i class="bi bi-box-arrow-right fs-4"></i>
                    <span class="ps-2 fs-6">{{$t('header[22]')}}</span>
                  </a>
                </div>
                <div class="py-5">
                  <a class="text-bhs" href="javascript:;" @click="$router.push('/app')">
                    <i class="bi bi-download fs-4"></i>
                    <span class="ps-2 fs-6">{{$t('header[23]')}}</span>
                  </a>
                </div>
              </div>
            </div>
            <span class="fs-4" id="usertitle">{{$t('header[8]')}}</span>
            <div v-if="showMobileMenu" @click="showMobileMenu = false" :class="'offcanvas-backdrop fade'+(showMobileMenu?' show':'')"></div>
          </div>
          <div class="btn-group">
            <button @click="showMobileLan = !showMobileLan" class="btn  dropdown-toggle p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img :src="'./static/images/uploads/20241117/cd3300dc91a25db0b825e2a43cc7304d.png'" style="width: 2rem;">
            </button>
            <ul :class="showMobileLan?'dropdown-menu show':'dropdown-menu'" style="left: -6.5rem;top: 3rem;">
              <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.en==1" @click="changeLanguage('en-US')"><img :src="'./static/images/en-US.png'" style="width: 2rem;"> English</a></li>
              <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.ar==1" @click="changeLanguage('ar-AR')"><img :src="'./static/images/uploads/20250218/4b617811af41d0445973e6de96b878cb.png'" style="width: 2rem;"> اللغة العربية</a></li>
              <!--                <li><a class="dropdown-item" href="javascript:;" @click="changeLanguage('kr')"><img :src="'./static/images/uploads/20250214/6425da9d1f95c1df115d27caa4e900a0.png'" style="width: 2rem;"> 한국인</a></li>-->
              <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.es==1" @click="changeLanguage('es-ES')"><img :src="'./static/images/uploads/20250214/e861c808006e9bd7e71d2a4c688e5920.png'" style="width: 2rem;"> Español</a></li>
              <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.de==1" @click="changeLanguage('de-DE')"><img :src="'./static/images/uploads/20250214/c3f5ae27f6c2c8825893cad0e770f0f5.png'" style="width: 2rem;"> Deutsch</a></li>
              <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.fr==1" @click="changeLanguage('fr-FR')"><img :src="'./static/images/uploads/20250214/2d9d7b78e14f54d6f1d61c087022d68d.png'" style="width: 2rem;"> Français</a></li>
              <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.jp==1" @click="changeLanguage('ja-JP')"><img :src="'./static/images/uploads/20250214/9cbaa7f64e75efcc10c3c477a4c192a7.png'" style="width: 2rem;"> 日本語</a></li>
              <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.it==1" @click="changeLanguage('it-IT')"><img :src="'./static/images/uploads/20250215/5581fce3c38db971dd0e388b5cec27c5.png'" style="width: 2rem;"> Italiano</a></li>
              <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.nl==1" @click="changeLanguage('nl-NL')"><img :src="'./static/images/nl-NL.png'" style="width: 2rem;"> Nederlands</a></li>
              <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.ko==1" @click="changeLanguage('ko-KO')"><img :src="'./static/images/ko-KO.png'" style="width: 2rem;">한국인</a></li>
              <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.pt==1" @click="changeLanguage('pt-PT')"><img :src="'./static/images/uploads/20250215/74bbe4ec4c22c83c14b9f089b0203c60.png'" style="width: 2rem;"> Português</a></li>
              <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.ru==1"  @click="changeLanguage('ru-RU')"><img :src="'./static/images/uploads/20250215/8b35279908e14c6d54702130abaf9051.png'" style="width: 2rem;"> Русский</a></li>
              <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.vi==1" @click="changeLanguage('vi-VN')"><img :src="'./static/images/uploads/20250215/c787c2a9525dd767e67fef599fff4cfe.png'" style="width: 2rem;"> Tiếng Việt </a></li>
              <!--                <li><a class="dropdown-item" href="javascript:;" @click="changeLanguage('rin ')"><img :src="'./static/images/uploads/20250215/1bbcfe92678e6478842fed4c0be0e31c.png'" style="width: 2rem;"> हिंदी</a></li>-->
              <li><a class="dropdown-item" v-if="InitData.setting.yd==1 || InitData.setting.hi==1" href="javascript:;" @click="changeLanguage('yd-YD')"><img :src="'./static/images/yd-YD.png'" style="width: 2rem;"> हिन्दी </a></li>

            </ul>

            <div v-if="showMobileMenu" @click="showMobileMenu = false" class="offcanvas-backdrop show"></div>
          </div>
        </div>
        <div v-else class="container-fluid p-2 ">
<!--          未登录-->
          <img data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" :src="'./static/images/img/logo.png'" alt="" height="35" style="height: 35px;">
          <div>
            <button @click="showMobileMenu = true" class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-list-task text-dark fs-1"></i></button>

            <div class="btn-group">
              <button @click="showMobileLan = !showMobileLan" class="btn  dropdown-toggle p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img v-if="$i18n.locale=='en-US'" :src="'./static/images/en-US.png'" style="width: 2rem;">
                <img v-if="$i18n.locale=='ar-AR'" :src="'./static/images/uploads/20250218/4b617811af41d0445973e6de96b878cb.png'" style="width: 2rem;">
                <img v-if="$i18n.locale=='es-ES'" :src="'./static/images/uploads/20250214/e861c808006e9bd7e71d2a4c688e5920.png'" style="width: 2rem;">
                <img v-if="$i18n.locale=='de-DE'"  :src="'./static/images/uploads/20250214/c3f5ae27f6c2c8825893cad0e770f0f5.png'" style="width: 2rem;">
                <img v-if="$i18n.locale=='fr-FR'"  :src="'./static/images/uploads/20250214/2d9d7b78e14f54d6f1d61c087022d68d.png'" style="width: 2rem;">
                <img v-if="$i18n.locale=='ja-JP'" :src="'./static/images/uploads/20250214/9cbaa7f64e75efcc10c3c477a4c192a7.png'" style="width: 2rem;">
                <img v-if="$i18n.locale=='ko-KO'" :src="'./static/images/ko-KO.png'" style="width: 2rem;">
                <img v-if="$i18n.locale=='it-IT'" :src="'./static/images/uploads/20250215/5581fce3c38db971dd0e388b5cec27c5.png'" style="width: 2rem;">
                <img v-if="$i18n.locale=='nl-NL'" :src="'./static/images/nl-NL.png'" style="width: 2rem;">
                <img v-if="$i18n.locale=='pt-PT'" :src="'./static/images/uploads/20250215/74bbe4ec4c22c83c14b9f089b0203c60.png'" style="width: 2rem;">
                <img v-if="$i18n.locale=='ru-RU'" :src="'./static/images/uploads/20250215/8b35279908e14c6d54702130abaf9051.png'" style="width: 2rem;">
                <img v-if="$i18n.locale=='vi-VN'" :src="'./static/images/uploads/20250215/c787c2a9525dd767e67fef599fff4cfe.png'" style="width: 2rem;">
                <img v-if="$i18n.locale=='yd-YD'" :src="'./static/images/yd-YD.png'" style="width: 2rem;">
              </button>
              <div :class="'offcanvas offcanvas-end border-end border-bshs text-start col-lg-5'+(showMobileMenu?' show':'')" style="width: 18rem; background-color: #fff; border:0px;" data-bs-scroll="true" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRight">
                <div class="offcanvas-header text-center">
                  <img :src="'./static/images/img/logo.png'" alt="" class="mx-auto" style="width: 50%;">
                </div>
                <div class="offcanvas-body px-4">
                  <div class="py-2 border-bottom border-bshs ">
                    <a class="text-bhs d-flex active" href="javascript:;" @click="$router.push('/')">
                      <img class="d-block" style="height: 26px;" :src="'./static/images/img/sid1.png'">
                      <h5 class="ps-2 ">{{$t('header[0]')}}</h5>
                    </a>
                  </div>
                  <div class="py-2 mt-2 border-bottom border-bshs">
                    <a class="text-bhs d-flex" href="javascript:;" @click="$router.push('/contracts')">
                      <img class="d-block" style="height: 26px;" :src="'./static/images/img/sid2.png'">
                      <h5 class="ps-2 ">{{$t('header[1]')}}</h5>
                    </a>
                  </div>

                  <div class="py-2 mt-2 border-bottom border-bshs">
                    <a class="text-bhs d-flex" href="javascript:;" @click="$router.push('/about')">
                      <img class="d-block" style="height: 26px;" :src="'./static/images/img/sid4.png'">
                      <h5 class="ps-2 ">{{$t('header[3]')}}</h5>
                    </a>
                  </div>



                  <div class="py-2 mt-2 border-bottom border-bshs">
                    <a class="text-bhs d-flex" href="javascript:;" @click="$router.push('/FAQ')">
                      <img class="d-block" style="height: 26px;" :src="'./static/images/img/sid5.png'">
                      <h5 class="ps-2 ">{{$t('header[4]')}}</h5>
                    </a>
                  </div>

                  <div class="py-2 mt-2 border-bottom border-bshs">
                    <a class="text-bhs d-flex" href="javascript:;" @click="$router.push('/affiliate')">
                      <img class="d-block" style="height: 26px;" :src="'./static/images/img/sid3.png'">
                      <h5 class="ps-2 ">{{$t('header[24]')}}</h5>
                    </a>
                  </div>

                  <!-- <div class="py-2 mt-2 border-bottom border-bshs">
                      <a class="text-bhs d-flex" href="/index/index/bounty.html">
                          <img class="d-block" style="height: 26px;"   :src="'./static/images/img/bounty.png'">
                          <h5 class="ps-2 ">Bounty Hunter</h5>
                      </a>
                  </div> -->

                  <!-- <div class="py-2 mt-2 border-bottom border-bshs">
                      <a class="text-bhs d-flex" href="/index/index/vipclub.html">
                          <img class="d-block" style="height: 26px;"   :src="'./static/images/img/vipc.png'">
                          <h5 class="ps-2 ">VIP CLUB</h5>
                      </a>
                  </div> -->


                  <div class="py-2 mt-2 border-bottom border-bshs">
                    <a class="text-bhs d-flex" href="javascript:;" @click="$router.push('/contact')">
                      <img class="d-block" style="height: 26px;" :src="'./static/images/img/sid7.png'">
                      <h5 class="ps-2 ">{{$t('header[1]')}}</h5>
                    </a>
                  </div>
                  <div class="py-2 mt-2 border-bottom border-bshs">
                    <a class="text-bhs d-flex" href="javascript:;" @click="$router.push('/app')">
                      <img class="d-block" style="height: 26px;" :src="'./static/images/img/sid6.png'">
                      <h5 class="ps-2 ">{{$t('header[7]')}}</h5>
                    </a>
                  </div>
                  <div class="py-2 mt-2 border-bottom border-bshs" >
                    <a class="text-bhs d-flex" href="javascript:;" @click="$router.push('/teach')">
                      <img class="d-block" style="height: 26px;" :src="'./static/images/img/sid8.png'">
                      <h5 class="ps-2 ">{{$t('header[5]')}}</h5>
                    </a>
                  </div>

                  <div v-if="UserInfo" class="text-center pt-4" style="padding-bottom: 2rem;">
                    <a href="javascript:;" @click="$Model.Logout()" class="btn border border-0 staking-btn rounded-3 p-2 my-4 text-light fw-bold fs-5 col-10">{{$t('header[22]')}}</a>
                  </div>
                  <div class="d-flex gap-3" v-else>
                    <div class="text-center pt-4" style="padding-bottom: 4rem;">
                      <a href="javascript:;" @click="$router.push('/login')" class="btn btn-login">{{$t('header[9]')}}</a>
                      <a href="javascript:;" @click="$router.push('/register')" class="btn btn-join">{{$t('header[10]')}}</a>
                    </div>
                  </div>
                </div>

              </div>
              <ul :class="showMobileLan?'dropdown-menu show':'dropdown-menu'" style="left: -6.5rem;top: 3rem;">
                <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.en==1" @click="changeLanguage('en-US')"><img :src="'./static/images/en-US.png'" style="width: 2rem;"> English</a></li>
                <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.ar==1" @click="changeLanguage('ar-AR')"><img :src="'./static/images/uploads/20250218/4b617811af41d0445973e6de96b878cb.png'" style="width: 2rem;"> اللغة العربية</a></li>
<!--                <li><a class="dropdown-item" href="javascript:;" @click="changeLanguage('kr')"><img :src="'./static/images/uploads/20250214/6425da9d1f95c1df115d27caa4e900a0.png'" style="width: 2rem;"> 한국인</a></li>-->
                <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.es==1" @click="changeLanguage('es-ES')"><img :src="'./static/images/uploads/20250214/e861c808006e9bd7e71d2a4c688e5920.png'" style="width: 2rem;"> Español</a></li>
                <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.de==1" @click="changeLanguage('de-DE')"><img :src="'./static/images/uploads/20250214/c3f5ae27f6c2c8825893cad0e770f0f5.png'" style="width: 2rem;"> Deutsch</a></li>
                <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.fr==1" @click="changeLanguage('fr-FR')"><img :src="'./static/images/uploads/20250214/2d9d7b78e14f54d6f1d61c087022d68d.png'" style="width: 2rem;"> Français</a></li>
                <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.jp==1" @click="changeLanguage('ja-JP')"><img :src="'./static/images/uploads/20250214/9cbaa7f64e75efcc10c3c477a4c192a7.png'" style="width: 2rem;"> 日本語</a></li>
                <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.it==1" @click="changeLanguage('it-IT')"><img :src="'./static/images/uploads/20250215/5581fce3c38db971dd0e388b5cec27c5.png'" style="width: 2rem;"> Italiano</a></li>
                <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.nl==1" @click="changeLanguage('nl-NL')"><img :src="'./static/images/nl-NL.png'" style="width: 2rem;"> Nederlands</a></li>
                <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.ko==1" @click="changeLanguage('ko-KO')"><img :src="'./static/images/ko-KO.png'" style="width: 2rem;">한국인</a></li>
                <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.pt==1" @click="changeLanguage('pt-PT')"><img :src="'./static/images/uploads/20250215/74bbe4ec4c22c83c14b9f089b0203c60.png'" style="width: 2rem;"> Português</a></li>
                <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.ru==1" @click="changeLanguage('ru-RU')"><img :src="'./static/images/uploads/20250215/8b35279908e14c6d54702130abaf9051.png'" style="width: 2rem;"> Русский</a></li>
                <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.vi==1" @click="changeLanguage('vi-VN')"><img :src="'./static/images/uploads/20250215/c787c2a9525dd767e67fef599fff4cfe.png'" style="width: 2rem;"> Tiếng Việt </a></li>
                <li><a class="dropdown-item" href="javascript:;" v-if="InitData.setting.yd==1 || InitData.setting.hi==1" @click="changeLanguage('yd-YD')"><img :src="'./static/images/yd-YD.png'" style="width: 2rem;"> हिन्दी </a></li>
<!--                <li><a class="dropdown-item" href="javascript:;" @click="changeLanguage('rin ')"><img :src="'./static/images/uploads/20250215/1bbcfe92678e6478842fed4c0be0e31c.png'" style="width: 2rem;"> हिंदी</a></li>-->
              </ul>

              <div v-if="showMobileMenu" @click="showMobileMenu = false" class="offcanvas-backdrop fade show"></div>
            </div>
          </div>

        </div>
      </nav>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Header',
    components: {

    },
    props: [],
    data() {
      return {
        index:0,
        showMask:false,
        showMobileLan: false,
        showPcLan: false,
        showMobileMenu: false,
        showPcMenu: false,
        showNext:false,
        showSet:false,
      }
    },
    computed: {
    },
    watch: {
    },
    created() {

    },
    mounted() {
      this.index = localStorage.getItem("pageIndex");
      console.log(this.index)
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      downloadApp() {
        var ua = navigator.userAgent;
        if (/(iPod|iPhone|iPad)/.test(ua)) {
          this.$Util.OpenUrl(this.InitData.setting.app_down_ios);
        } else {
          this.$Util.OpenUrl(this.InitData.setting.app_down_android);
        }
      },
      changeLanguage(lan) {
        localStorage['is_self_change'] = 1
        this.$SetLanguage(lan)
        this.$Model.GetBackData()
        // this.$Model.GetUserInfo();
        this.showMobileLan = false;
        this.showPcLan = false;
        this.$router.go(0);
      },
    }
  }
</script>
<style scoped>
  .navbar {
    background-color: #000;
    padding: 1rem 0;
  }

  .navbar-brand img {
    height: 35px;
  }

  .nav-link {
    font-size: 1rem;
    padding: 0.5rem 1rem !important;
    transition: all 0.3s ease;
  }

  .nav-link:hover,
  .nav-link.active {
    color: #1989fac9 !important;
  }

  .btn {
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    font-size: 0.95rem;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .btn-login {
    background: transparent;
    border: 1px solid #5c9fe7;
    color: #000;
  }

  .btn-login:hover {
    background: #5c9fe7;
    color: #000;
  }

  .btn-join {
    background: #5c9fe7;
    border: 1px solid #5c9fe7;
    color: #fff;
  }

  .btn-join:hover {
    background: transparent;
    border: 1px solid #5c9fe7;
    color: #5c9fe7;
  }

  @media (max-width: 991.98px) {
    .navbar-collapse {
      padding: 1rem 0;
    }

    .navbar-nav {
      margin: 1rem 0;
    }
  }

  h5{
    line-height: 1.5 !important;
  }
  .py-2,.py-5 {
    text-align: left;
  }
  .py-2 h5 {
    color: #000;
  }
  .OlineNum{
    text-align: center;
    margin-left: 10px;
    border-radius:10px;
    border:1px solid rgb(102, 34, 130);
    font-size: 0.8rem;
    font-weight: 600;
    padding: 5px;
  }
  .nav-link{
    padding: 0!important;
  }
</style>
