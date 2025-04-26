<template>
  <header  class="header-section has-header-main">
    <div  class="header-main is-sticky is-transparent has-fixed">
      <div class="container">
        <div class="header-wrap">
          <div class="d-flex align-items-center">
            <div class="header-logo"><a href="javascript:;" @click="$router.push('/')" class="logo-link">
              <img class="logo-dark logo-img" :src="'./static/img/logo.6059159f.png?t=2'" alt="logo"><img
              class="logo-light logo-img" :src="'./static/img/logo.6059159f.png?t=2'" alt="logo"></a>
            </div>
            <div class="language">
              <div class="navbar-collapse" id="navbarNavDarkDropdown">
                <div class="dropdown"><a @click="showPcLan = !showPcLan"
                                                            class="dropdown-toggle header__menu--link"
                                                            href="javascript: void (0)" role="button"
                                                            id="dropdownMenuLink" data-toggle="dropdown"
                                                            aria-expanded="false" style="font-weight: 400;">
                  <i v-if="$i18n.locale=='en-US'" class="fi fi-gb"></i>
                  <i v-if="$i18n.locale=='zh-CN'" class="fi fi-cn"></i>
                  <i v-if="$i18n.locale=='de-DE'" class="fi fi-de"></i>
                  <i class="fi fi-fr" v-if="$i18n.locale=='fr-FR'"></i>
                  <i class="fi fi-jp" v-if="$i18n.locale=='ja-JP'"></i>
                  <i class="fi fi-kr" v-if="$i18n.locale=='ko-KO'"></i>
                  <i class="fi fi-pt" v-if="$i18n.locale=='pt-PT'"></i>
                  <i class="fi fi-es" v-if="$i18n.locale=='es-ES'"></i>
                  <i class="fi fi-tr" v-if="$i18n.locale=='tr-TR'"></i>
                  <i class="fi fi-vi" v-if="$i18n.locale=='vi-VN'"></i>
                  <i class="fi fi-ru" v-if="$i18n.locale=='ru-RU'"></i>
                  <i class="fi fi-ar" v-if="$i18n.locale=='ar-AR'"></i>
                  <i class="fi fi-it" v-if="$i18n.locale=='it-IT'"></i>
                </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" v-show="showPcLan">
                    <a @click="changeLanguage('en-US')" v-if="InitData.setting.en==1" class="dropdown-item header__menu--link" href="javascript:;" style="font-weight: 400;">
                      <i class="fi fi-gb"></i>English</a>
<!--                    <a @click="changeLanguage('zh-CN')" v-if="InitData.setting.cn==1" class="dropdown-item header__menu&#45;&#45;link" href="javascript:;" style="font-weight: 400;">-->
<!--                      <i class="fi fi-gb"></i>简体中文</a>-->

                    <a @click="changeLanguage('fr-FR')" v-if="InitData.setting.fr==1" class="dropdown-item header__menu--link" href="javascript:;" style="font-weight: 400;">
                      <i class="fi fi-fr"></i>Français</a>
                    <a @click="changeLanguage('ja-JP')" v-if="InitData.setting.ja==1 ||InitData.setting.jp==1" class="dropdown-item header__menu--link" href="javascript:;" style="font-weight: 400;">
                      <i class="fi fi-jp"></i>日本語</a>
                    <a @click="changeLanguage('ko-KO')" v-if="InitData.setting.ko==1" class="dropdown-item header__menu--link" href="javascript:;" style="font-weight: 400;">
                      <i class="fi fi-kr"></i>한국어</a>
                    <a @click="changeLanguage('pt-PT')" v-if="InitData.setting.pt==1" class="dropdown-item header__menu--link" href="javascript:;" style="font-weight: 400;">
                      <i class="fi fi-pt"></i>Português</a>

                    <a @click="changeLanguage('es-ES')" v-if="InitData.setting.es==1" class="dropdown-item header__menu--link" href="javascript:;" style="font-weight: 400;">
                      <i class="fi fi-es"></i>Español</a>
                    <a @click="changeLanguage('tr-TR')" v-if="InitData.setting.tr==1"  class="dropdown-item header__menu--link" href="javascript:;" style="font-weight: 400;">
                      <i class="fi fi-tr"></i>Türk</a>
<!--                    <a @click="changeLanguage('vi-VN')" v-if="InitData.setting.vi==1" class="dropdown-item header__menu&#45;&#45;link" href="javascript:;" style="font-weight: 400;">-->
<!--                      <i class="fi fi-vi"></i>Tiếng Việt</a>-->

                    <a @click="changeLanguage('de-DE')" v-if="InitData.setting.de==1" class="dropdown-item header__menu--link" href="javascript:;" style="font-weight: 400;">
                      <i class="fi fi-de"></i>Deutsch</a>
                    <a @click="changeLanguage('ru-RU')" v-if="InitData.setting.ru==1" class="dropdown-item header__menu--link" href="javascript:;" style="font-weight: 400;">
                      <i class="fi fi-ru"></i>Русский</a>
                    <a @click="changeLanguage('ar-AR')" v-if="InitData.setting.ar==1" class="dropdown-item header__menu--link" href="javascript:;" style="font-weight: 400;">
                      <i class="fi fi-ar"></i>عربي</a>
                    <a @click="changeLanguage('it-IT')" v-if="InitData.setting.it==1" class="dropdown-item header__menu--link" href="javascript:;" style="font-weight: 400;">
                      <i class="fi fi-it"></i>Italiano</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-mobile-action">
            <div class="header-mobile-wallet me-2"><a @click="$router.push('/dashboard')" href="javascript:;" class="icon-btn"><em
              class="ni ni-user-fill"></em></a></div>
            <div class="header-toggle" @click="showMask =!showMask">
              <button v-if="!showMask" class="menu-toggler"><em class="menu-on menu-icon ni ni-menu"></em><em
                class="menu-off menu-icon ni ni-cross"></em></button>
              <button v-else class="menu-toggler active"><em class="menu-on menu-icon ni ni-menu"></em><em class="menu-off menu-icon ni ni-cross"></em></button>
            </div>
          </div>
          <nav style="justify-content: space-around;" :class="'header-menu menu nav '+(showMask?'mobile-menu active':'')">
            <ul class="menu-list">
              <li class="menu-item">
                <a href="javascript:;" @click="$router.push('/')" :class="(index=='/'?'router-link-active router-link-exact-active menu-link active':'menu-link')">
        <span class="menu-title">{{$t('header[0]')}}
                <img v-if="index=='/'" class="menu-link_line active" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAICAYAAACCuR0hAAAAAXNSR0IArs4c6QAAAS5JREFUOE/FlE1LQlEQhp+ZPiCkoFUgV7dhVBC0qZaamzblUpJ+SSD0S+KGS21durRFbSKCaKsgtC1cpN0zcYPQxOKmRmd75jzzznlnRpJre4tB0MloQL35eNlijJNY3o0zJXkzCiFGBJ/ASpPgOtWNoKvX4qWyNwibgMOoGnL2NmPlp7uLdhTtS+vZ2HRXcoIdImQAHXg3Se6teCvZV2B2IEkbsbI68RsP2zUouq/3RU2mrtJOrYBJDohFKQ4Yl9sJBVeA/R8Shm1SQtX/iHEutDsPxCOK/C5sFO65eN7WnCzMHxsc/ZOIKHW3BE7t+eVEetFFTazWM+Yk/MGDX9kMFVHzm/c71WHtM0lun+Ce9M9BQq0gRnrYIJlQw4k/yoCOwx0quN+jv1xVo6zAd010tziJ0OBUAAAAAElFTkSuQmCC" alt=""></span></a>
                </li>
              <li class="menu-item">
                <a href="javascript:;" @click="$router.push('/contracts')" :class="(index=='/contracts'?'router-link-active router-link-exact-active menu-link active':'menu-link')">
        <span class="menu-title">{{$t('header[6]')}}
                <img v-if="index=='/contracts'" class="menu-link_line active" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAICAYAAACCuR0hAAAAAXNSR0IArs4c6QAAAS5JREFUOE/FlE1LQlEQhp+ZPiCkoFUgV7dhVBC0qZaamzblUpJ+SSD0S+KGS21durRFbSKCaKsgtC1cpN0zcYPQxOKmRmd75jzzznlnRpJre4tB0MloQL35eNlijJNY3o0zJXkzCiFGBJ/ASpPgOtWNoKvX4qWyNwibgMOoGnL2NmPlp7uLdhTtS+vZ2HRXcoIdImQAHXg3Se6teCvZV2B2IEkbsbI68RsP2zUouq/3RU2mrtJOrYBJDohFKQ4Yl9sJBVeA/R8Shm1SQtX/iHEutDsPxCOK/C5sFO65eN7WnCzMHxsc/ZOIKHW3BE7t+eVEetFFTazWM+Yk/MGDX9kMFVHzm/c71WHtM0lun+Ce9M9BQq0gRnrYIJlQw4k/yoCOwx0quN+jv1xVo6zAd010tziJ0OBUAAAAAElFTkSuQmCC" alt=""></span></a>
                </li>
<!--              <li class="menu-item">-->
<!--                <a @click="$router.push('/dashboard')" href="javascript:;" :class="(index=='/dashboard'?'router-link-active router-link-exact-active menu-link active':'menu-link')">-->
<!--        <span class="menu-title">{{$t('header[1]')}}-->
<!--                <img v-if="index=='/dashboard'" class="menu-link_line active" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAICAYAAACCuR0hAAAAAXNSR0IArs4c6QAAAS5JREFUOE/FlE1LQlEQhp+ZPiCkoFUgV7dhVBC0qZaamzblUpJ+SSD0S+KGS21durRFbSKCaKsgtC1cpN0zcYPQxOKmRmd75jzzznlnRpJre4tB0MloQL35eNlijJNY3o0zJXkzCiFGBJ/ASpPgOtWNoKvX4qWyNwibgMOoGnL2NmPlp7uLdhTtS+vZ2HRXcoIdImQAHXg3Se6teCvZV2B2IEkbsbI68RsP2zUouq/3RU2mrtJOrYBJDohFKQ4Yl9sJBVeA/R8Shm1SQtX/iHEutDsPxCOK/C5sFO65eN7WnCzMHxsc/ZOIKHW3BE7t+eVEetFFTazWM+Yk/MGDX9kMFVHzm/c71WHtM0lun+Ce9M9BQq0gRnrYIJlQw4k/yoCOwx0quN+jv1xVo6zAd010tziJ0OBUAAAAAElFTkSuQmCC" alt=""></span></a>-->
<!--                </li>-->
              <li class="menu-item">
                <a href="javascript:;" @click="$router.push('/about')" :class="(index=='/about'?'router-link-active router-link-exact-active menu-link active':'menu-link')">
        <span class="menu-title">{{$t('header[9]')}}
                <img v-if="index=='/about'" class="menu-link_line active" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAICAYAAACCuR0hAAAAAXNSR0IArs4c6QAAAS5JREFUOE/FlE1LQlEQhp+ZPiCkoFUgV7dhVBC0qZaamzblUpJ+SSD0S+KGS21durRFbSKCaKsgtC1cpN0zcYPQxOKmRmd75jzzznlnRpJre4tB0MloQL35eNlijJNY3o0zJXkzCiFGBJ/ASpPgOtWNoKvX4qWyNwibgMOoGnL2NmPlp7uLdhTtS+vZ2HRXcoIdImQAHXg3Se6teCvZV2B2IEkbsbI68RsP2zUouq/3RU2mrtJOrYBJDohFKQ4Yl9sJBVeA/R8Shm1SQtX/iHEutDsPxCOK/C5sFO65eN7WnCzMHxsc/ZOIKHW3BE7t+eVEetFFTazWM+Yk/MGDX9kMFVHzm/c71WHtM0lun+Ce9M9BQq0gRnrYIJlQw4k/yoCOwx0quN+jv1xVo6zAd010tziJ0OBUAAAAAElFTkSuQmCC" alt=""></span></a>
                </li>
              <li class="menu-item">
                <a href="javascript:;" @click="$router.push('/affiliate')" :class="(index=='/affiliate'?'router-link-active router-link-exact-active menu-link active':'menu-link')">
        <span class="menu-title">{{$t('header[7]')}}
                <img v-if="index=='/affiliate'" class="menu-link_line active" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAICAYAAACCuR0hAAAAAXNSR0IArs4c6QAAAS5JREFUOE/FlE1LQlEQhp+ZPiCkoFUgV7dhVBC0qZaamzblUpJ+SSD0S+KGS21durRFbSKCaKsgtC1cpN0zcYPQxOKmRmd75jzzznlnRpJre4tB0MloQL35eNlijJNY3o0zJXkzCiFGBJ/ASpPgOtWNoKvX4qWyNwibgMOoGnL2NmPlp7uLdhTtS+vZ2HRXcoIdImQAHXg3Se6teCvZV2B2IEkbsbI68RsP2zUouq/3RU2mrtJOrYBJDohFKQ4Yl9sJBVeA/R8Shm1SQtX/iHEutDsPxCOK/C5sFO65eN7WnCzMHxsc/ZOIKHW3BE7t+eVEetFFTazWM+Yk/MGDX9kMFVHzm/c71WHtM0lun+Ce9M9BQq0gRnrYIJlQw4k/yoCOwx0quN+jv1xVo6zAd010tziJ0OBUAAAAAElFTkSuQmCC" alt=""></span></a>
              </li>
              <li class="menu-item">
                <a aria-current="page" href="javascript:;" @click="$router.push('/welfare')" :class="(index=='/welfare'?'router-link-active router-link-exact-active menu-link active':'menu-link')">
        <span class="menu-title">{{$t('welfare[0]')}}
          <img v-if="index=='/welfare'" class="menu-link_line active" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAICAYAAACCuR0hAAAAAXNSR0IArs4c6QAAAS5JREFUOE/FlE1LQlEQhp+ZPiCkoFUgV7dhVBC0qZaamzblUpJ+SSD0S+KGS21durRFbSKCaKsgtC1cpN0zcYPQxOKmRmd75jzzznlnRpJre4tB0MloQL35eNlijJNY3o0zJXkzCiFGBJ/ASpPgOtWNoKvX4qWyNwibgMOoGnL2NmPlp7uLdhTtS+vZ2HRXcoIdImQAHXg3Se6teCvZV2B2IEkbsbI68RsP2zUouq/3RU2mrtJOrYBJDohFKQ4Yl9sJBVeA/R8Shm1SQtX/iHEutDsPxCOK/C5sFO65eN7WnCzMHxsc/ZOIKHW3BE7t+eVEetFFTazWM+Yk/MGDX9kMFVHzm/c71WHtM0lun+Ce9M9BQq0gRnrYIJlQw4k/yoCOwx0quN+jv1xVo6zAd010tziJ0OBUAAAAAElFTkSuQmCC" alt=""></span></a>
              </li>
              <li class="menu-item">
                <a aria-current="page" href="javascript:;" @click="$router.push('/FAQ')" :class="(index=='/FAQ'?'router-link-active router-link-exact-active menu-link active':'menu-link')">
        <span class="menu-title">{{$t('header[10]')}}
          <img v-if="index=='/FAQ'" class="menu-link_line active" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAICAYAAACCuR0hAAAAAXNSR0IArs4c6QAAAS5JREFUOE/FlE1LQlEQhp+ZPiCkoFUgV7dhVBC0qZaamzblUpJ+SSD0S+KGS21durRFbSKCaKsgtC1cpN0zcYPQxOKmRmd75jzzznlnRpJre4tB0MloQL35eNlijJNY3o0zJXkzCiFGBJ/ASpPgOtWNoKvX4qWyNwibgMOoGnL2NmPlp7uLdhTtS+vZ2HRXcoIdImQAHXg3Se6teCvZV2B2IEkbsbI68RsP2zUouq/3RU2mrtJOrYBJDohFKQ4Yl9sJBVeA/R8Shm1SQtX/iHEutDsPxCOK/C5sFO65eN7WnCzMHxsc/ZOIKHW3BE7t+eVEetFFTazWM+Yk/MGDX9kMFVHzm/c71WHtM0lun+Ce9M9BQq0gRnrYIJlQw4k/yoCOwx0quN+jv1xVo6zAd010tziJ0OBUAAAAAElFTkSuQmCC" alt=""></span></a>
              </li>
              <li class="menu-item">
                <a href="javascript:;" @click="$router.push('/Bounty')" :class="(index=='/Bounty'?'router-link-active router-link-exact-active menu-link active':'menu-link')">
        <span class="menu-title">
                    {{$t('bounty[0]')}}
                <img v-if="index=='/Bounty'" class="menu-link_line active" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAICAYAAACCuR0hAAAAAXNSR0IArs4c6QAAAS5JREFUOE/FlE1LQlEQhp+ZPiCkoFUgV7dhVBC0qZaamzblUpJ+SSD0S+KGS21durRFbSKCaKsgtC1cpN0zcYPQxOKmRmd75jzzznlnRpJre4tB0MloQL35eNlijJNY3o0zJXkzCiFGBJ/ASpPgOtWNoKvX4qWyNwibgMOoGnL2NmPlp7uLdhTtS+vZ2HRXcoIdImQAHXg3Se6teCvZV2B2IEkbsbI68RsP2zUouq/3RU2mrtJOrYBJDohFKQ4Yl9sJBVeA/R8Shm1SQtX/iHEutDsPxCOK/C5sFO65eN7WnCzMHxsc/ZOIKHW3BE7t+eVEetFFTazWM+Yk/MGDX9kMFVHzm/c71WHtM0lun+Ce9M9BQq0gRnrYIJlQw4k/yoCOwx0quN+jv1xVo6zAd010tziJ0OBUAAAAAElFTkSuQmCC" alt=""></span></a>
              </li>
              <li class="menu-item">
                <a aria-current="page" href="javascript:;" @click="$router.push('/Tutorial')" :class="(index=='/Tutorial'?'router-link-active router-link-exact-active menu-link active':'menu-link')">
        <span class="menu-title">{{$t('tutorial[0]')}}
          <img v-if="index=='/Tutorial'" class="menu-link_line active" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAICAYAAACCuR0hAAAAAXNSR0IArs4c6QAAAS5JREFUOE/FlE1LQlEQhp+ZPiCkoFUgV7dhVBC0qZaamzblUpJ+SSD0S+KGS21durRFbSKCaKsgtC1cpN0zcYPQxOKmRmd75jzzznlnRpJre4tB0MloQL35eNlijJNY3o0zJXkzCiFGBJ/ASpPgOtWNoKvX4qWyNwibgMOoGnL2NmPlp7uLdhTtS+vZ2HRXcoIdImQAHXg3Se6teCvZV2B2IEkbsbI68RsP2zUouq/3RU2mrtJOrYBJDohFKQ4Yl9sJBVeA/R8Shm1SQtX/iHEutDsPxCOK/C5sFO65eN7WnCzMHxsc/ZOIKHW3BE7t+eVEetFFTazWM+Yk/MGDX9kMFVHzm/c71WHtM0lun+Ce9M9BQq0gRnrYIJlQw4k/yoCOwx0quN+jv1xVo6zAd010tziJ0OBUAAAAAElFTkSuQmCC" alt=""></span></a>
              </li>


<!--                            <li class="menu-item">-->
<!--                              <a aria-current="page" href="javascript:;" @click="$router.push('/blog')" :class="(index=='/blog'?'router-link-active router-link-exact-active menu-link active':'menu-link')">-->
<!--                      <span class="menu-title">{{$t('foot[6]')}}-->
<!--                        <img v-if="index=='/blog'" class="menu-link_line active" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAICAYAAACCuR0hAAAAAXNSR0IArs4c6QAAAS5JREFUOE/FlE1LQlEQhp+ZPiCkoFUgV7dhVBC0qZaamzblUpJ+SSD0S+KGS21durRFbSKCaKsgtC1cpN0zcYPQxOKmRmd75jzzznlnRpJre4tB0MloQL35eNlijJNY3o0zJXkzCiFGBJ/ASpPgOtWNoKvX4qWyNwibgMOoGnL2NmPlp7uLdhTtS+vZ2HRXcoIdImQAHXg3Se6teCvZV2B2IEkbsbI68RsP2zUouq/3RU2mrtJOrYBJDohFKQ4Yl9sJBVeA/R8Shm1SQtX/iHEutDsPxCOK/C5sFO65eN7WnCzMHxsc/ZOIKHW3BE7t+eVEetFFTazWM+Yk/MGDX9kMFVHzm/c71WHtM0lun+Ce9M9BQq0gRnrYIJlQw4k/yoCOwx0quN+jv1xVo6zAd010tziJ0OBUAAAAAElFTkSuQmCC" alt=""></span></a>-->
<!--                              </li>-->
                            <li class="menu-item">
                                <a href="javascript:;" @click="$router.push('/blog')" :class="(index=='/blog'?'router-link-active router-link-exact-active menu-link active':'menu-link')">
                                  <span class="menu-title">
                                              {{$t('foot[6]')}}
                                    <img v-if="index=='/blog'" class="menu-link_line active" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAICAYAAACCuR0hAAAAAXNSR0IArs4c6QAAAS5JREFUOE/FlE1LQlEQhp+ZPiCkoFUgV7dhVBC0qZaamzblUpJ+SSD0S+KGS21durRFbSKCaKsgtC1cpN0zcYPQxOKmRmd75jzzznlnRpJre4tB0MloQL35eNlijJNY3o0zJXkzCiFGBJ/ASpPgOtWNoKvX4qWyNwibgMOoGnL2NmPlp7uLdhTtS+vZ2HRXcoIdImQAHXg3Se6teCvZV2B2IEkbsbI68RsP2zUouq/3RU2mrtJOrYBJDohFKQ4Yl9sJBVeA/R8Shm1SQtX/iHEutDsPxCOK/C5sFO65eN7WnCzMHxsc/ZOIKHW3BE7t+eVEetFFTazWM+Yk/MGDX9kMFVHzm/c71WHtM0lun+Ce9M9BQq0gRnrYIJlQw4k/yoCOwx0quN+jv1xVo6zAd010tziJ0OBUAAAAAElFTkSuQmCC" alt="">
                                  </span>
                                </a>
                            </li>
                            <li class="menu-item">
                              <a aria-current="page" href="javascript:;" @click="$router.push('/app')" :class="(index=='/app'?'router-link-active router-link-exact-active menu-link active':'menu-link')">
                      <span class="menu-title">{{$t('head[1]')}}
                        <img v-if="index=='/app'" class="menu-link_line active" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAICAYAAACCuR0hAAAAAXNSR0IArs4c6QAAAS5JREFUOE/FlE1LQlEQhp+ZPiCkoFUgV7dhVBC0qZaamzblUpJ+SSD0S+KGS21durRFbSKCaKsgtC1cpN0zcYPQxOKmRmd75jzzznlnRpJre4tB0MloQL35eNlijJNY3o0zJXkzCiFGBJ/ASpPgOtWNoKvX4qWyNwibgMOoGnL2NmPlp7uLdhTtS+vZ2HRXcoIdImQAHXg3Se6teCvZV2B2IEkbsbI68RsP2zUouq/3RU2mrtJOrYBJDohFKQ4Yl9sJBVeA/R8Shm1SQtX/iHEutDsPxCOK/C5sFO65eN7WnCzMHxsc/ZOIKHW3BE7t+eVEetFFTazWM+Yk/MGDX9kMFVHzm/c71WHtM0lun+Ce9M9BQq0gRnrYIJlQw4k/yoCOwx0quN+jv1xVo6zAd010tziJ0OBUAAAAAElFTkSuQmCC" alt=""></span></a>
                              </li>
       

              <li :class="'menu-item d-lg-none has-sub '+(showMobileLan?'active':'')" @click="showMobileLan = !showMobileLan">
                <a href="javascript:;" class="menu-link menu-toggle">{{$t('header[11]')}}</a>
                <div class="menu-sub menu-mega" v-if="showMobileLan">
                  <div class="menu-mega-row">
                    <ul class="menu-list menu-list-mega">
                      <li class="menu-item">
                        <a href="javascript:;" @click="$router.push('/transactions')" class="menu-link">{{$t('header[12]')}}
                          </a></li>
                      <li class="menu-item">
                        <a href="javascript:;" @click="$router.push('/deposit')" class="menu-link">{{$t('header[3]')}}
                          </a></li>
                      <li class="menu-item">
                        <a href="javascript:;" @click="$router.push('/withdraw')" class="menu-link">{{$t('header[4]')}}
                          </a></li>
                      <li class="menu-item">
                        <a href="javascript:;" @click="$router.push('/MyPackages')" class="menu-link">{{$t('header[5]')}}
                          </a></li>
<!--                      <li class="menu-item">-->
<!--                        <a href="javascript:;" @click="$router.push('/contracts')" class="menu-link">{{$t('header[6]')}}-->
<!--                          </a></li>-->
                      <li class="menu-item">
                        <a href="javascript:;" @click="$router.push('/affiliates')" class="menu-link">{{$t('header[7]')}}
                          </a></li>
                      <li class="menu-item has-sub">
                        <a href="javascript:;" @click="$router.push('/loginPassword')" class="menu-link">{{$t('header[8]')}}
                          </a></li>
                    </ul>
                    <ul class="menu-list menu-list-mega"></ul>
                  </div>
                </div>
              </li>


            </ul>
            <ul class="menu-btns" v-if="!UserInfo">
              <li>
                <a style="background: linear-gradient(to right, #2777ed,#00070e);border: none;color: #fff;" href="javascript:;" @click="$router.push('/register')" :class="'btn '+(index=='7'?'btn-dark':'btn-outline-dark')+' menu-title'">{{$t('header[14]')}}</a>
              </li>
              <li>
                <a style="background: linear-gradient(to right, #2777ed,#00070e);border: none;color: #fff;" href="javascript:;" @click="$router.push('/login')" :class="'btn '+(index!='7'?'btn-dark':'btn-outline-dark')+' menu-title'">{{$t('header[13]')}}</a></li>
            </ul>
            <ul v-else class="menu-btns">
              <li  class="header__account--items"><a  href="javascript:;" @click="$router.push('/dashboard')"
                                                      class="btn btn-dark menu-title">
<!--                <em-->
<!--                class="ni ni-user-fill"></em>-->
                {{$t('header[1]')}}
              </a></li>
              <li ><a  href="javascript:;" @click="$Model.Logout()" class="btn btn-dark menu-title">{{$t('header[15]')}}</a></li>
            </ul>
          </nav>
          <div class="header-overlay" @click="showMask=!showMask"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    components: {

    },
    props: [],
    data() {
      return {
        index:'/',
        showMask:false,
        showMobileLan: false,
        showPcLan: false,
        showNext:false,
      }
    },
    computed: {
    },
    watch: {
    },
    created() {

    },
    mounted() {
      if (localStorage.getItem("pageIndex") == '/') {
        this.index = '/';
      }else if (localStorage.getItem("pageIndex") == '/contracts') {
        console.log(11111);
        this.index = '/contracts';
        console.log(this.index)
      }else if (localStorage.getItem("pageIndex") == '/dashboard') {
        this.index = '/dashboard';
      }else if (localStorage.getItem("pageIndex") == '/loginPassword') {
        this.index = '/loginPassword';
      }else if (localStorage.getItem("pageIndex") == '/walletAddress') {
        this.index = '/walletAddress';
      }else if (localStorage.getItem("pageIndex") == '/payPassword') {
        this.index = '/payPassword';
      }else if (localStorage.getItem("pageIndex") == '/about') {
        this.index = '/about';
      }else if (localStorage.getItem("pageIndex") == '/affiliate') {
        this.index = '/affiliate';
      }else if (localStorage.getItem("pageIndex") == '/FAQ') {
        this.index = '/FAQ';
      }else if (localStorage.getItem("pageIndex") == '/deposit') {
        this.index = '/deposit';
        this.showNext = true;
      }else if (localStorage.getItem("pageIndex") == '/withdraw') {
        this.index = '/withdraw';
        this.showNext = true;
      }else if (localStorage.getItem("pageIndex") == '/MyPackages') {
        this.index = '/MyPackages';
        this.showNext = true;
      }else if (localStorage.getItem("pageIndex") == '/affiliates') {
        this.index = '/affiliates';
        this.showNext = true;
      }else if (localStorage.getItem("pageIndex") == '/transactions') {
        this.index = '/transactions';
        this.showNext = true;
      }else if (localStorage.getItem("pageIndex") == '/blog') {
        this.index = '/blog';
      }else if (localStorage.getItem("pageIndex") == '/help') {
        this.index = '/help';
      }else if (localStorage.getItem("pageIndex") == '/app') {
        this.index = '/app';
      }

    },
    activated() {

    },
    destroyed() {

    },
    methods: {
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
  .header-main {
    background: #1bd17d;
  }
  .language {
    margin-left: 13px;
  }
  .language .dropdown-menu {
    display: block;
    z-index: 9999;
  }
  @media(min-width: 992px) {
    .header-menu {
      flex:1;
      width: 0
    }

    .menu-title {
      font-size: 14px
    }

    .menu-email {
      display: none
    }

    .btn {
      padding: 8px 6px
    }

    .ni-user-fill {
      margin-right: 6px
    }
  }

  @media(min-width: 1200px) {
    .btn {
      padding:8px 12px
    }

    .menu-title {
      font-size: 16px
    }

    .menu-email {
      display: flex
    }
  }
</style>
