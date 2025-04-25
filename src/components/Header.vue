<template>
  <div class="header">
    <div class="header-wrapper">
      <img :src="'./static/image/dashboard.png?t=2'"  @click="$router.push('/')"
                                     class="logo">
      <div class="nav-list">
        <div :class="'nav-item '+(index==0?'active':'')" @click="$router.push('/')">
          {{$t('head[0]')}}
          <div class="underlined"></div>
        </div>
        <div :class="'nav-item '+(index==1?'active':'')" @click="$router.push('/contract')">
           {{$t('head[9]')}}
          <div class="underlined"></div>
        </div>
<!--        <div :class="'nav-item '+(index==9?'active':'')" @click="$router.push('/Bounty')">-->
<!--          BOUNTY-->
<!--          <div class="underlined"></div>-->
<!--        </div>-->
        <div :class="'nav-item '+(index==10?'active':'')" @click="$router.push('/blog')"> {{$t('foot[6]')}}<div class="underlined"></div></div>
        <div :class="'nav-item '+(index==2?'active':'')" @click="$router.push('/about')"> {{$t('about[0]')}}<div class="underlined"></div></div>
        <div :class="'nav-item '+(index==3?'active':'')" @click="$router.push('/FAQ')"> {{$t('foot[4]')}}<div class="underlined"></div></div>
        <!--        <div :class="'nav-item '+(index==6?'active':'')" @click="$router.push('/contact')"> {{$t('foot[7]')}}<div class="underlined"></div></div>-->
        <div style="margin-left: 1rem;" :class="'nav-item '+(index==7?'active':'')" @click="$router.push('/app')"> {{$t('head[1]')}}<div class="underlined"></div></div>
        <div :class="'nav-item '+(index==11?'active':'')" @click="$router.push('/teach')"> {{$t('teach[0]')}}<div class="underlined"></div></div>
          <div :class="'nav-item '+(index==4?'active':'')" @click="$router.push('/affiliate')"> {{$t('head[18]')}}<div class="underlined"></div></div>
          <div :class="'nav-item '+(index==8?'active':'')" @click="$router.push('/welfare')"> {{$t('welfare[0]')}}<div class="underlined"></div></div>

        <div class="action-box">
          <div class="action-btn" v-if="!UserInfo" @click="$router.push('/register')">{{$t('head[2]')}}</div>
          <div class="action-btn dasbtn" v-if="!UserInfo" @click="$router.push('/login')">{{$t('head[3]')}}</div>

          <div class="action-btn dasbtn" v-if="UserInfo" @click="$router.push('/dashboard')">{{$t('head[4]')}}</div>
          <div class="action-btn" v-if="UserInfo" @click="$Model.Logout()">{{$t('head[5]')}}</div>
        </div>
        <div style="text-align:center;font-size: 1.5rem;margin:0 10px;border-radius: 10px;border: 1px solid #fff;padding: 5px;color: #fff!important;">
          {{$t('online')}}<br>{{InitData.setting.online||0}}
        </div>
        <div class="el-dropdown">
          <div class="cur-lang el-dropdown-selfdefine" aria-haspopup="list" @click="showPcLan = !showPcLan"
               aria-controls="dropdown-menu-6877" role="button" tabindex="0">
            <span v-if="$i18n.locale=='en-US'">English</span>
            <span v-if="$i18n.locale=='ko-KO'">한국인</span>
            <span v-if="$i18n.locale=='es-ES'">Español</span>
            <span v-if="$i18n.locale=='cs-CS'">čeština</span>
            <span v-if="$i18n.locale=='hu-HU'">magyar</span>
<!--            <span v-if="$i18n.locale=='yd-YD'">हिंदी</span>-->
<!--            <span v-if="$i18n.locale=='ur-UR'">اردو</span>-->
<!--            <span v-if="$i18n.locale=='ar-AR'">عربي</span>-->
            <span v-if="$i18n.locale=='pt-PT'">Português</span>
            <span v-if="$i18n.locale=='ru-RU'">Русский</span>
            <span v-if="$i18n.locale=='ja-JP'">日本語</span>
            <span v-if="$i18n.locale=='de-DE'">Deutsch</span>
            <span v-if="$i18n.locale=='fr-FR'">Français</span>
            <span v-if="$i18n.locale=='it-IT'">Italiano</span>
<!--            <span v-if="$i18n.locale=='zh-CN'">中文简体</span>-->
            <van-icon name="arrow-down" class="el-icon-arrow-down"/>
          </div>
          <ul class="el-dropdown-menu el-popper" id="dropdown-menu-6877" v-show="showPcLan">
            <li  @click="changeLanguage('en-US')" v-if="InitData.setting.en==1" class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/flag1.5a756c97.png'"
                                          class="flag"> English
              </div>
            </li>
            <li @click="changeLanguage('ko-KO')" v-if="InitData.setting.ko==1" class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/flag9.eaf3de18.png'"
                                          class="flag"> 한국인
              </div>
            </li>
            <li @click="changeLanguage('es-ES')" v-if="InitData.setting.es==1" class="el-dropdown-menu__item">
              <div class="lang-item"><img :src="'./static/images/flag2.93be9cfe.png'"
                                          class="flag"> Español
              </div>
            </li>
            <li @click="changeLanguage('cs-CS')" v-if="InitData.setting.cs==1" class="el-dropdown-menu__item">
              <div class="lang-item"><img :src="'./static/images/cs-CS.png'"
                                          class="flag"> čeština
              </div>
            </li>
            <li @click="changeLanguage('hu-HU')" v-if="InitData.setting.hu==1" class="el-dropdown-menu__item">
              <div class="lang-item"><img :src="'./static/images/hu-HU.png'"
                                          class="flag"> magyar
              </div>
            </li>
<!--            <li  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
<!--              <div class="lang-item"><img :src="'./static/images/flag7.597f635f.png'"-->
<!--                                          class="flag"> Türkçe-->
<!--              </div>-->
<!--            </li>-->
<!--            <li @click="changeLanguage('yd-YD')" v-if="InitData.setting.yd==1"  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
<!--              <div class="lang-item"><img :src="'./static/images/flagyd.png'"-->
<!--                                          class="flag"> हिंदी-->
<!--              </div>-->
<!--            </li>-->
<!--            <li @click="changeLanguage('ur-UR')" v-if="InitData.setting.ur==1"  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
<!--              <div class="lang-item"><img :src="'./static/images/flagur.png'"-->
<!--                                          class="flag"> اردو-->
<!--              </div>-->
<!--            </li>-->
<!--            <li @click="changeLanguage('ar-AR')" v-if="InitData.setting.ar==1"  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
<!--              <div class="lang-item"><img :src="'./static/images/flagar.png'"-->
<!--                                          class="flag">عربي-->
<!--              </div>-->
<!--            </li>-->
            <li @click="changeLanguage('pt-PT')" v-if="InitData.setting.pt==1"  class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/flag3.49d12693.png'"
                                          class="flag"> Português
              </div>
            </li>
            <li @click="changeLanguage('ru-RU')" v-if="InitData.setting.ru==1"   class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/flag6.cfe423f5.png'"
                                          class="flag"> Русский
              </div>
            </li>
            <li @click="changeLanguage('ja-JP')" v-if="InitData.setting.jp==1"  class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/flag8.a1c0a73c.png'"
                                          class="flag"> 日本語
              </div>
            </li>
            <li @click="changeLanguage('de-DE')" v-if="InitData.setting.de==1"  class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/flag5.f403fe65.png'"
                                          class="flag"> Deutsch
              </div>
            </li>
            <li @click="changeLanguage('fr-FR')" v-if="InitData.setting.fr==1" class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/flag4.6ffdaa83.png'"
                                          class="flag"> Français
              </div>
            </li>
            <li @click="changeLanguage('it-IT')" v-if="InitData.setting.it==1" class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/it-IT.png'"
                                          class="flag"> Italiano
              </div>
            </li>
<!--            <li @click="changeLanguage('zh-CN')" v-if="InitData.setting.cn==1" class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
<!--              <div class="lang-item"><img :src="'./static/images/zh-CN.png'"-->
<!--                                          class="flag"> 中文简体-->
<!--              </div>-->
<!--            </li>-->
          </ul>
        </div>

      </div>
      <div class="d-show" style="text-align:center;font-size: 12px;border-radius: 10px;padding: 5px;display: block;color: #fff!important;">
        {{$t('online')}}<br>{{InitData.setting.online||0}}
      </div>
      <div class="menu-box">
        <div class="el-dropdown" style="margin-right: 10px">
          <div class="cur-lang el-dropdown-selfdefine" aria-haspopup="list" @click="showMobileLan = !showMobileLan"
               aria-controls="dropdown-menu-5477" role="button" tabindex="0">
            <span v-if="$i18n.locale=='en-US'">English</span>
            <span v-if="$i18n.locale=='ko-KO'">한국인</span>
            <span v-if="$i18n.locale=='es-ES'">Español</span>
<!--            <span v-if="$i18n.locale=='yd-YD'">हिंदी</span>-->
<!--            <span v-if="$i18n.locale=='ur-UR'">اردو</span>-->
<!--            <span v-if="$i18n.locale=='ar-AR'">عربي</span>-->
            <span v-if="$i18n.locale=='cs-CS'">čeština</span>
            <span v-if="$i18n.locale=='hu-HU'">magyar</span>
            <span v-if="$i18n.locale=='pt-PT'">Português</span>
            <span v-if="$i18n.locale=='ru-RU'">Русский</span>
            <span v-if="$i18n.locale=='ja-JP'">日本語</span>
            <span v-if="$i18n.locale=='de-DE'">Deutsch</span>
            <span v-if="$i18n.locale=='fr-FR'">Français</span>
            <span v-if="$i18n.locale=='it-IT'">Italiano</span>
            <!--            <span v-if="$i18n.locale=='zh-CN'">中文简体</span>-->
            <van-icon name="arrow-down" class="el-icon-arrow-down"/>
          </div>
          <ul class="el-dropdown-menu el-popper" id="dropdown-menu-5477" v-show="showMobileLan">
            <li  @click="changeLanguage('en-US')" v-if="InitData.setting.en==1" class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/flag1.5a756c97.png'"
                                          class="flag"> English
              </div>
            </li>
            <li @click="changeLanguage('ko-KO')" v-if="InitData.setting.ko==1" class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/flag9.eaf3de18.png'"
                                          class="flag"> 한국인
              </div>
            </li>
            <li @click="changeLanguage('es-ES')" v-if="InitData.setting.es==1" class="el-dropdown-menu__item">
              <div class="lang-item"><img :src="'./static/images/flag2.93be9cfe.png'"
                                          class="flag"> Español
              </div>
            </li>
            <li @click="changeLanguage('cs-CS')" v-if="InitData.setting.cs==1" class="el-dropdown-menu__item">
              <div class="lang-item"><img :src="'./static/images/cs-CS.png'"
                                          class="flag"> čeština
              </div>
            </li>
            <li @click="changeLanguage('hu-HU')" v-if="InitData.setting.hu==1" class="el-dropdown-menu__item">
              <div class="lang-item"><img :src="'./static/images/hu-HU.png'"
                                          class="flag"> magyar
              </div>
            </li>
            <!--            <li  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
            <!--              <div class="lang-item"><img :src="'./static/images/flag7.597f635f.png'"-->
            <!--                                          class="flag"> Türkçe-->
            <!--              </div>-->
            <!--            </li>-->
<!--            <li @click="changeLanguage('yd-YD')" v-if="InitData.setting.yd==1"  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
<!--              <div class="lang-item"><img :src="'./static/images/flagyd.png'"-->
<!--                                          class="flag"> हिंदी-->
<!--              </div>-->
<!--            </li>-->
<!--            <li @click="changeLanguage('ur-UR')" v-if="InitData.setting.ur==1"  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
<!--              <div class="lang-item"><img :src="'./static/images/flagur.png'"-->
<!--                                          class="flag"> اردو-->
<!--              </div>-->
<!--            </li>-->
<!--            <li @click="changeLanguage('ar-AR')" v-if="InitData.setting.ar==1"  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
<!--              <div class="lang-item"><img :src="'./static/images/flagar.png'"-->
<!--                                          class="flag">عربي-->
<!--              </div>-->
<!--            </li>-->
            <li @click="changeLanguage('pt-PT')" v-if="InitData.setting.pt==1"  class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/flag3.49d12693.png'"
                                          class="flag"> Português
              </div>
            </li>
            <li @click="changeLanguage('ru-RU')" v-if="InitData.setting.ru==1"   class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/flag6.cfe423f5.png'"
                                          class="flag"> Русский
              </div>
            </li>
            <li @click="changeLanguage('ja-JP')" v-if="InitData.setting.jp==1"  class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/flag8.a1c0a73c.png'"
                                          class="flag"> 日本語
              </div>
            </li>
            <li @click="changeLanguage('de-DE')" v-if="InitData.setting.de==1"  class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/flag5.f403fe65.png'"
                                          class="flag"> Deutsch
              </div>
            </li>
            <li @click="changeLanguage('fr-FR')" v-if="InitData.setting.fr==1" class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/flag4.6ffdaa83.png'"
                                          class="flag"> Français
              </div>
            </li>
            <li @click="changeLanguage('it-IT')" v-if="InitData.setting.it==1" class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/images/it-IT.png'"
                                          class="flag"> Italiano
              </div>
            </li>
            <!--            <li @click="changeLanguage('zh-CN')" v-if="InitData.setting.cn==1" class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
            <!--              <div class="lang-item"><img :src="'./static/images/zh-CN.png'"-->
            <!--                                          class="flag"> 中文简体-->
            <!--              </div>-->
            <!--            </li>-->
            <div x-arrow="" class="popper__arrow" style="left: 87.8312px;"></div>
          </ul>
        </div>
        <div class="menu" @click="showMask=true"><i class="el-icon-s-operation"></i> {{$t('head[6]')}}</div>
      </div>
      <div v-if="showMask" class="nav-mask">
        <div class="nav-list">
          <div :class="'nav-item '+(index==0?'active':'')" @click="$router.push('/')"> HOME</div>
          <div :class="'nav-item '+(index==1?'active':'')" @click="$router.push('/contract')"> {{$t('foot[2]')}}</div>
          <div :class="'nav-item '+(index==2?'active':'')" @click="$router.push('/about')"> ABOUT US</div>
          <div :class="'nav-item '+(index==3?'active':'')" @click="$router.push('/FAQ')"> FAQ</div>
          <div :class="'nav-item '+(index==9?'active':'')" @click="$router.push('/Bounty')"> BOUNTY</div>
          <div :class="'nav-item '+(index==4?'active':'')" @click="$router.push('/affiliate')"> {{$t('foot[5]')}}</div>
          <div :class="'nav-item '+(index==5?'active':'')" @click="$router.push('/blog')"> BLOG</div>
          <div :class="'nav-item '+(index==11?'active':'')" @click="$router.push('/teach')"> TUTORIAL</div>
<!--          <div :class="'nav-item '+(index==6?'active':'')" @click="$router.push('/contact')"> {{$t('foot[7]')}}</div>-->
          <div :class="'nav-item '+(index==8?'active':'')" style="color:#0aff22;" @click="$router.push('/welfare')"> VIP EXCLUSIVE</div>
          <div :class="'nav-item '+(index==7?'active':'')" @click="$router.push('/app')"> APP</div>
          <div class="action-box">
            <div class="action-btn" v-if="!UserInfo" @click="$router.push('/register')">Sign Up</div>
            <div class="action-btn dasbtn" v-if="!UserInfo" @click="$router.push('/login')">Sign In</div>

            <div class="action-btn dasbtn" v-if="UserInfo" @click="$router.push('/dashboard')">DASHBOARD</div>
            <div class="action-btn" v-if="UserInfo" @click="$Model.Logout()">Logout</div>
          </div>
        </div>
        <div class="close-box"><i class="el-icon-error nav-close" @click="showMask = false"></i></div>
      </div>
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
        this.index = 0;
      }
      if (localStorage.getItem("pageIndex") == '/contract') {
        this.index = 1;
      }
      if (localStorage.getItem("pageIndex") == '/about') {
        this.index = 2;
      }
      if (localStorage.getItem("pageIndex") == '/FAQ') {
        this.index = 3;
      }
      if (localStorage.getItem("pageIndex") == '/affiliate') {
        this.index = 4;
      }
      if (localStorage.getItem("pageIndex") == '/blog') {
        this.index = 10;
      }
      if (localStorage.getItem("pageIndex") == '/contact') {
        this.index = 6;
      }
      if (localStorage.getItem("pageIndex") == '/app') {
        this.index = 7;
      }
      if (localStorage.getItem("pageIndex") == '/welfare') {
        this.index = 8;
      }
      if (localStorage.getItem("pageIndex") == '/Bounty') {
        this.index = 9;
      }
      if (localStorage.getItem("pageIndex") == '/teach') {
        this.index = 11;
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
  @media only screen and (min-width: 1024px) {
    html {
      font-size:10px
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
    background-color: rgb(13,110,253)
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
    background-color: rgb(13,110,253)!important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
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
    color: rgb(13,110,253)
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: rgb(13,110,253)!important;
    border-color: rgb(13,110,253)!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: rgb(13,110,253)!important
  }

  @media only screen and (min-width: 1024px) {
    .header {
      position:sticky;
      top: 0;
      z-index: 20;
      width: 100%;
      height: 10rem;
      box-sizing: border-box;
      padding: 0 3rem;
      background:  #000000;
    }

    .header .header-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1300px;
      height: 100%;
      margin: 0 auto
    }

    .header .header-wrapper .logo {
      height: 5.5rem;
      cursor: pointer
    }

    .header .header-wrapper .nav-list {
      display: flex;
      align-items: center;
      max-width: 100%
    }

    .header .header-wrapper .nav-list .nav-item {
      display: flex;
      align-items: center;
      margin-right: 2.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      white-space: nowrap;
      cursor: pointer;
      text-transform: uppercase;
    }

    .header .header-wrapper .nav-list .active,.header .header-wrapper .nav-list .nav-item:hover {
      color: #fff
    }

    .header .header-wrapper .nav-list .cur-lang {
      display: flex;
      align-items: center;
      margin-right: 2.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      white-space: nowrap;
      cursor: pointer;
      border: 1px solid #aaa;
      border-radius: 5px;
      padding: 5px 10px;
    }

    .header .header-wrapper .nav-list .cur-lang:hover {
      color: #fff
    }

    .header .header-wrapper .nav-list .cur-lang i {
      margin-left: 5px
    }

    .header .header-wrapper .nav-list .action-box {
      /*display: flex;*/
      /*align-items: center*/
    }

    .header .header-wrapper .nav-list .action-box .action-btn {
      height: 3.8rem;
      line-height: 3.8rem;
      box-sizing: border-box;
      padding: 0 1.5rem;
      border-radius: .5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background:linear-gradient(110deg, #9C27B0, #8647af 59%, #6c4982);
      cursor: pointer
    }

    .header .header-wrapper .nav-list .action-box .action-btn:not(:last-child) {
      margin-right: 1rem
    }

    .header .header-wrapper .menu-box,.header .header-wrapper .nav-mask {
      display: none
    }
  }

  @media only screen and (max-width: 1024px) {
    .header {
      position:sticky;
      top: 0;
      z-index: 20;
      width: 100%;
      height: 6rem;
      box-sizing: border-box;
      padding: 0 1rem;
      background:  #000000;
    }

    .header .header-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: inherit
    }

    .header .header-wrapper .logo {
      height: 4.5rem;
      cursor: pointer
    }

    .header .header-wrapper .nav-list {
      display: none
    }

    .header .header-wrapper .menu-box {
      display: flex;
      align-items: center
    }

    .header .header-wrapper .menu-box .menu {
      display: flex;
      align-items: center;
      max-width: 100%;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      cursor: pointer
    }

    .header .header-wrapper .menu-box .menu i {
      margin-right: 2px;
      font-size: 2.2rem
    }

    .header .header-wrapper .menu-box .cur-lang {
      display: flex;
      align-items: center;
      margin-left: 2rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      white-space: nowrap;
      cursor: pointer
    }

    .header .header-wrapper .menu-box .cur-lang:hover {
      color: #fff;
    }

    .header .header-wrapper .menu-box .cur-lang i {
      margin-left: 2px
    }

    .header .header-wrapper .nav-mask {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      display: flex;
      width: 100%;
      height: 100vh;
      background-color: rgba(0,0,0,.5)
    }

    .header .header-wrapper .nav-mask .nav-list {
      display: flex;
      flex-direction: column;
      width: calc(50% - 0rem);
      height: inherit;
      background-color: #000
    }

    .header .header-wrapper .nav-mask .nav-list .nav-item {
      display: flex;
      align-items: center;
      width: 100%;
      height: 4.5rem;
      box-sizing: border-box;
      padding: 0 1rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      word-wrap: break-word;
      cursor: pointer;
      text-transform: uppercase;
    }

    .header .header-wrapper .nav-mask .nav-list .active,.header .header-wrapper .nav-mask .nav-list .nav-item:hover {
      color: rgb(124 58 237);
    }
    .header .header-wrapper .nav-mask .nav-list .action-box {
      /*display: flex;*/
      /*justify-content: space-between;*/
      /*align-items: center;*/
      width: 100%;
      height: 6rem;
      box-sizing: border-box;
      padding: 0 1rem
    }

    .header .header-wrapper .nav-mask .nav-list .action-box .action-btn {
      min-width: 48%;
      margin-bottom: 1rem;
      height: 3.8rem;
      line-height: 3.8rem;
      box-sizing: border-box;
      padding: 0 1.5rem;
      border-radius: .5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-color: rgb(124 58 237);
      cursor: pointer
    }

    .header .header-wrapper .nav-mask .close-box {
      display: flex;
      justify-content: center;
      width: 7rem;
      height: inherit;
      box-sizing: border-box;
      padding: 1.5rem 0 0
    }

    .header .header-wrapper .nav-mask .close-box .nav-close {
      width: 4.2rem;
      height: 4.2rem;
      font-size: 4.2rem;
      color: #fff;
      cursor: pointer
    }
  }
  .header #dropdown-menu-5477 {
    left: -40px;
    top: 25px;
  }
  .header #dropdown-menu-6877 {
    left: -40px;
    top: 25px;
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
    background: #fff;
    width: 0%;
    height: 2px;
    margin-top: 2px;
    opacity: 0;
    bottom: -0.5rem;
    transition: width 0.3s, opacity 0.3s;
  }

  /*.dasbtn {*/
  /*  background:linear-gradient(110deg, #dc9d3c,#e7bd7d 59%, #f5bc63) !important;*/
  /*}*/
  .el-dropdown {
    color: #fff;
  }
  @media only screen and (min-width: 1024px) {
    .header .header-wrapper .nav-list .action-box {
      display: flex;
      align-items: center
    }
    .header .header-wrapper .nav-mask .nav-list .action-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .d-show {
      display: none!important;
    }
  }
</style>
