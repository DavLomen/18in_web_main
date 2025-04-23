<template>
  <header  id="header-nav" class="new-navbar">
    <div  id="main__header" class="main__header">
      <div  class="container">
        <div  class="logo-box" v-if="showLogo">
          <a  href="javascript:;" @click="$router.push('/')" class="logo-icon router-link-active">
            <img :src="'./static/img/logo.png?t=2'" alt=""></a>
        </div>
        <div  class="language pc">
          <div  id="navbarNavDarkDropdown" class="navbar-collapse">
            <div  class="dropdown" @click="showPcLan = !showPcLan">
              <a  href="javascript: void (0)" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false" class="btn dropdown-toggle header__menu--link" style="font-weight: 400;">
                <i  class="fa fa-globe"></i>
                <span v-if="$i18n.locale=='en-US'">Language</span>
<!--                <span v-if="$i18n.locale=='zh-CN'">简体中文</span>-->
                <span v-if="$i18n.locale=='de-DE'">Deutsch</span>
                <span v-if="$i18n.locale=='fr-FR'">Français</span>
                <span v-if="$i18n.locale=='ko-KO'">한국인</span>
                <span v-if="$i18n.locale=='ja-JP'">日本語</span>
                <span v-if="$i18n.locale=='pt-PT'">Português</span>
                <span v-if="$i18n.locale=='ru-RU'">Русский</span>
                <span v-if="$i18n.locale=='es-ES'">Español</span>
                <span v-if="$i18n.locale=='ar-AR'">عربي</span>
                <span v-if="$i18n.locale=='yd-YD'">हिंदी</span>
                <span v-if="$i18n.locale=='tr-TR'">Türkçe</span>
                <span v-if="$i18n.locale=='yd-YD'">हिंदी</span>
                <span v-if="$i18n.locale=='nl-NL'">Nederlands</span>
                <span v-if="$i18n.locale=='it-IT'">Italiano</span>
              </a>
              <div class="dropdown-menu1"  v-show="showPcLan">
<!--                <span v-if="$i18n.locale=='it-IT'">Italiano</span>-->
<!--                <a class="dropdown-item header__menu&#45;&#45;link" href="javascript:;" @click="changeLanguage('zh-CN')" style="font-weight: 400;">-->
<!--                  <i class="fi fi-gb"></i>简体中文</a>-->
                <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('en-US')" style="font-weight: 400;">
                  <i class="fi fi-gb"></i>English</a>
                <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('de-DE')" style="font-weight: 400;">
                  <i class="fi fi-de"></i>Deutsch</a>
                <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('fr-FR')" style="font-weight: 400;">
                  <i class="fi fi-fr"></i>Français</a>
                <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('ko-KO')" style="font-weight: 400;">
                  <i class="fi fi-ko"></i>한국인</a>
                <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('ja-JP')" style="font-weight: 400;">
                  <i class="fi fi-jp"></i>日本語</a>
                <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('pt-PT')" style="font-weight: 400;">
                  <i class="fi fi-pt"></i>Português</a>
                <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('ru-RU')" style="font-weight: 400;">
                  <i class="fi fi-ru"></i>Русский</a>
                <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('es-ES')" style="font-weight: 400;">
                  <i class="fi fi-es"></i>Español</a>
                <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('ar-AR')" style="font-weight: 400;">
                  <i class="fi fi-ar"></i>عربي</a>
                <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('yd-YD')" style="font-weight: 400;">
                  <i class="fi fi-yd"></i>हिंदी</a>
                <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('tr-TR')" style="font-weight: 400;">
                  <i class="fi fi-tr"></i>Türkçe</a>
                <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('nl-NL')" style="font-weight: 400;">
                  <i class="fi fi-nl"></i>Nederlands</a>
                <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('it-IT')" style="font-weight: 400;">
                  <i class="fi fi-it"></i>Italiano</a>
              </div>
            </div>
          </div>
        </div>
        <div class="language mobile" style="width: 100%;margin-right: 15px">
          <div v-if="!UserInfo" class=" header__account">
            <ul  class="d-flex align-items-center">
              <li  class="right-extend_items header__account--items" style="display: flex;justify-content: space-between;"><a href="javascript:;" @click="$router.push('/login')"
                                                                        class="but but_login"> {{$t('head[3]')}} </a>
                <a  href="javascript:;" @click="$router.push('/register')" class="but but_signup">{{$t('head[2]')}} </a></li>
            </ul>
          </div>
        </div>
        <div  class="navigation">
          <ul  class="navigation-menu" style="justify-content: right;">
<!--            <li  class="nav__menu&#45;&#45;items">-->
<!--              <a  href="/" class="header__menu&#45;&#45;link router-link-active">HOME</a></li>-->
            <li class="nav__menu--items">

              <a href="javascript:;" :class="'header__menu--link '+(index==0?'header__menu--link_active':'')" @click="showMenu=false,$router.push('/')">{{$t('head[0]')}}</a>
            </li>
            <li class="nav__menu--items">
              <a href="javascript:;" :class="'header__menu--link '+(index==1?'header__menu--link_active':'')" @click="showMenu=false,$router.push('/product')">{{$t('head[9]')}}</a>
            </li>
            <li class="nav__menu--items" v-if="UserInfo">
              <a href="javascript:;" :class="'header__menu--link '+(index==9?'header__menu--link_active':'')" @click="showMenu=false,$router.push('/tutorial')">{{$t('tutorial[0]')}}</a>
            </li>
<!--            <li class="nav__menu&#45;&#45;items">-->
<!--              <a href="javascript:;" :class="'header__menu&#45;&#45;link '+(index==8?'header__menu&#45;&#45;link_active':'')" @click="showMenu=false,$router.push('/Bounty')">-->
<!--                {{$t('bounty')}}-->
<!--              </a>-->
<!--            </li>-->
            <li class="nav__menu--items">
              <a href="javascript:;" :class="'header__menu--link '+(index==2?'header__menu--link_active':'')" @click="showMenu=false,$router.push('/about')">{{$t('foot[3]')}}</a>
            </li>
            <li class="nav__menu--items">
              <a href="javascript:;" :class="'header__menu--link '+(index==8?'header__menu--link_active':'')" @click="showMenu=false,$router.push('/FAQ')">
                {{$t('foot[4]')}}
              </a>
            </li>
            <li class="nav__menu--items">
              <a href="javascript:;" :class="'header__menu--link '+(index==4?'header__menu--link_active':'')" @click="showMenu=false,$router.push('/affiliate')">{{$t('foot[5]')}}</a>
            </li>
<!--            <li class="nav__menu&#45;&#45;items">-->
<!--              <a href="javascript:;" :class="'header__menu&#45;&#45;link '+(index==6?'header__menu&#45;&#45;link_active':'')" @click="showMenu=false,$router.push('/contact')">{{$t('foot[7]')}}</a>-->
<!--            </li>-->
            <li class="nav__menu--items">
              <a href="javascript:;" :class="'header__menu--link '+(index==8?'header__menu--link_active':'')" @click="showMenu=false,$router.push('/welfare')">{{$t('welfare[0]')}}</a>
            </li>
            <li class="nav__menu--items" v-if="!UserInfo">
              <a href="javascript:;" :class="'header__menu--link '+(index==9?'header__menu--link_active':'')" @click="showMenu=false,$router.push('/tutorial')">{{$t('tutorial[0]')}}</a>
            </li>
            <li class="nav__menu--items">
              <a href="javascript:;" :class="'header__menu--link '+(index==7?'header__menu--link_active':'')" @click="showMenu=false,$router.push('/app')">{{$t('head[1]')}}</a>
            </li>
            <!--                  <li class="nav__menu--items">-->
            <!--                    <a href="javascript:;" :class="'header__menu--link '+(index==0?'header__menu--link_active':'')" @click="showMenu=false,$router.push('/blog')">{{$t('foot[6]')}}</a>-->
            <!--                  </li>-->
            <li class="nav__menu--items" v-if="UserInfo">
              <a href="javascript:;" :class="'header__menu--link '+(index==10?'header__menu--link_active':'')" @click="showMenu=false,$router.push('/dashboard')">{{$t('head[4]')}}</a>
            </li>
          </ul>
        </div>
        <div v-if="!UserInfo" class="right-extend header__account">
          <ul  class="d-flex align-items-center">
            <li  class="right-extend_items header__account--items"><a href="javascript:;" @click="$router.push('/login')"
                                                                                        class="but but_login"> {{$t('head[3]')}} </a>
              <a  href="javascript:;" @click="$router.push('/register')" class="but but_signup">{{$t('head[2]')}} </a></li>
              <li class="ml-1 OlineNum">
                <div class="">{{ $t('head[25]') }}</div>
                <span>{{InitData.setting.online || 0}}</span>
              </li>
          </ul>
        </div>
        <div v-else class="right-extend header__account">
          <ul  class="d-flex align-items-center">
            <li  class="header__account--items d-sm-u-none">
              <div  class="dropdown">
                <a  @click="showLogout = !showLogout"  href="javascript:;" class="dropdown-toggle header__menu--link">{{UserInfo.username}}</a>
                <div  class="dropdown-menu1" style="left: auto; right: 0px;display: block !important;" v-show="showLogout">
                  <a href="javascript:;" @click="$Model.Logout()" class="dropdown-item header__menu--link" style="font-weight: 400;">{{$t('head[5]')}}</a></div>
              </div>
            </li>
          </ul>
        </div>
        <div  class="offcanvas__header--menu__open" style="margin-right: 0.625rem; padding: 10px 0px;" @click="showPcLan=false,showMask = true">
          <div class="offcanvas__header--menu__open--btn">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ionicon offcanvas__header--menu__open--svg">
              <path  fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="header-overlay" v-if="showMask">
      <div  :class="'offcanvas__header ' +(showMask?'open':'')">
        <div  class="offcanvas__inner">
          <div  class="offcanvas__logo">
            <a  href="javascript:;" @click="$router.push('/')" class="offcanvas__logo_link router-link-active">
              <img  :src="'./static/img/logo.png?t=2'" height="32" alt="" class="logo__light logo__light"></a>
            <div  class="language mobile">
              <div class="navbar-collapse">
                <div  class="dropdown" @click="showPcLan = !showPcLan">
                  <a  href="javascript: void (0)" role="button" data-toggle="dropdown" aria-expanded="false" class="btn dropdown-toggle header__menu--link" style="font-weight: 400;">
                    <i  class="fa fa-globe"></i>
                    <span v-if="$i18n.locale=='en-US'">Language</span>
<!--                    <span v-if="$i18n.locale=='zh-CN'">简体中文</span>-->
                    <span v-if="$i18n.locale=='de-DE'">Deutsch</span>
                    <span v-if="$i18n.locale=='fr-FR'">Français</span>
                    <span v-if="$i18n.locale=='ko-KO'">한국인</span>
                    <span v-if="$i18n.locale=='ja-JP'">日本語</span>
                    <span v-if="$i18n.locale=='pt-PT'">Português</span>
                    <span v-if="$i18n.locale=='ru-RU'">Русский</span>
                    <span v-if="$i18n.locale=='es-ES'">Español</span>
                    <span v-if="$i18n.locale=='ar-AR'">عربي</span>
                    <span v-if="$i18n.locale=='yd-YD'">हिंदी</span>
                    <span v-if="$i18n.locale=='tr-TR'">Türkçe</span>
                    <span v-if="$i18n.locale=='yd-YD'">हिंदी</span>
                    <span v-if="$i18n.locale=='nl-NL'">Nederlands</span>
                    <span v-if="$i18n.locale=='it-IT'">Italiano</span>
                  </a>
                  <div class="dropdown-menu1"  v-show="showPcLan">
                    <!--                <span v-if="$i18n.locale=='it-IT'">Italiano</span>-->
<!--                    <a class="dropdown-item header__menu&#45;&#45;link" href="javascript:;" @click="changeLanguage('zh-CN')" style="font-weight: 400;">-->
<!--                      <i class="fi fi-gb"></i>简体中文</a>-->
                    <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('en-US')" style="font-weight: 400;">
                      <i class="fi fi-gb"></i>English</a>
                    <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('de-DE')" style="font-weight: 400;">
                      <i class="fi fi-de"></i>Deutsch</a>
                    <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('fr-FR')" style="font-weight: 400;">
                      <i class="fi fi-fr"></i>Français</a>
                    <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('ko-KO')" style="font-weight: 400;">
                      <i class="fi fi-ko"></i>한국인</a>
                    <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('ja-JP')" style="font-weight: 400;">
                      <i class="fi fi-jp"></i>日本語</a>
                    <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('pt-PT')" style="font-weight: 400;">
                      <i class="fi fi-pt"></i>Português</a>
                    <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('ru-RU')" style="font-weight: 400;">
                      <i class="fi fi-ru"></i>Русский</a>
                    <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('es-ES')" style="font-weight: 400;">
                      <i class="fi fi-es"></i>Español</a>
                    <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('ar-AR')" style="font-weight: 400;">
                      <i class="fi fi-ar"></i>عربي</a>
                    <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('yd-YD')" style="font-weight: 400;">
                      <i class="fi fi-yd"></i>हिंदी</a>
                    <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('tr-TR')" style="font-weight: 400;">
                      <i class="fi fi-tr"></i>Türkçe</a>
                    <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('nl-NL')" style="font-weight: 400;">
                      <i class="fi fi-nl"></i>Nederlands</a>
                    <a class="dropdown-item header__menu--link" href="javascript:;" @click="changeLanguage('it-IT')" style="font-weight: 400;">
                      <i class="fi fi-it"></i>Italiano</a>
                  </div>
                </div>
              </div>
            </div>
            <button  @click="showMask = false" class="offcanvas__close--btn">{{$t('deposit[28]')}}</button>
          </div>
          <nav  class="offcanvas__menu">
            <ul  class="offcanvas__menu_ul">
              <li class="offcanvas__menu_li">
                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/')">{{$t('head[0]')}}</a>
              </li>
              <li class="offcanvas__menu_li" >
                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/product')">{{$t('head[9]')}}</a>
              </li>
              <li class="offcanvas__menu_li" >
                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/FAQ')">
                  {{$t('foot[4]')}}
                </a>
              </li>
<!--              <li class="offcanvas__menu_li" >-->
<!--                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/Bounty')">-->
<!--                  {{$t('bounty')}}-->
<!--                </a>-->
<!--              </li>-->
              <li class="offcanvas__menu_li" >
                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/about')">{{$t('foot[3]')}}</a>
              </li>
              <li class="offcanvas__menu_li" >
                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/affiliate')">{{$t('foot[5]')}}</a>
              </li>
              <!--            <li class="offcanvas__menu_li">-->
              <!--              <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/contact')">{{$t('foot[7]')}}</a>-->
              <!--            </li>-->
              <li class="offcanvas__menu_li" >
                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/welfare')">{{$t('welfare[0]')}}</a>
              </li>
              <li class="offcanvas__menu_li" >
                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/app')">{{$t('head[1]')}}</a>
              </li>
              <!--                  <li class="offcanvas__menu_li">-->
              <!--                    <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/blog')">{{$t('foot[6]')}}</a>-->
              <!--                  </li>-->
              <li class="offcanvas__menu_li">
                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/tutorial')">{{$t('tutorial[0]')}}</a>
              </li>
              <li class="offcanvas__menu_li">
                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/message')">{{$t('head[13]')}}</a>
              </li>
<!--              <li class="offcanvas__menu_li" v-if="UserInfo">-->
<!--                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/transactions')">{{$t('head[12]')}}</a>-->
<!--              </li>-->
<!--              <li class="offcanvas__menu_li" v-if="UserInfo">-->
<!--                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/deposit')">{{$t('head[7]')}}</a>-->
<!--              </li>-->
<!--              <li class="offcanvas__menu_li" v-if="UserInfo">-->
<!--                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/withdraw')">{{$t('head[8]')}}</a>-->
<!--              </li>-->
<!--              <li class="offcanvas__menu_li" v-if="UserInfo">-->
<!--                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/MyPackages')">{{$t('head[11]')}}</a>-->
<!--              </li>-->
<!--              <li class="offcanvas__menu_li" v-if="UserInfo">-->
<!--                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/product')">{{$t('head[9]')}}</a>-->
<!--              </li>-->
<!--              <li class="offcanvas__menu_li" v-if="UserInfo">-->
<!--                <a href="javascript:;" class="offcanvas__menu_item " @click="showMenu=false,$router.push('/affiliates')">{{$t('foot[5]')}}</a>-->
<!--              </li>-->
              <li class="offcanvas__menu_li" v-if="UserInfo">
                <a href="javascript:;" class="offcanvas__menu_item " @click="showH5set =!showH5set">{{$t('head[14]')}}</a>
                <ul role="menu" class="el-menu el-menu--inline" v-show="showH5set">
                  <li class="el-menu-item-group">
                    <div class="el-menu-item-group__title" style="padding-left: 40px;"></div>
                    <ul>
                      <li @click="$router.push('/walletAddress')"   :class="'el-menu-item '+(index==8?'is-active':'')" style="padding-left: 40px;">{{$t('walletAddress[0]')}} </li>
                      <li @click="$router.push('/loginPassword')"   :class="'el-menu-item '+(index==9?'is-active':'')" style="padding-left: 40px;">{{$t('walletAddress[1]')}} </li>
                      <li @click="$router.push('/payPassword')"   :class="'el-menu-item '+(index==10?'is-active':'')" style="padding-left: 40px;">{{$t('walletAddress[2]')}} </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div  class="header__account offcanvas__account">
              <ul  class="align-items-center login-but_box">
                <li  class="header__account--items">
                  <a  href="javascript:;">{{UserInfo.username}}</a></li>
                <br >
                <li  class="header__account--items">
                  <a v-if="UserInfo" href="javascript:;" @click="$Model.Logout()" class="but but_signup">{{$t('head[5]')}}</a>
                  <ul v-else class="d-flex align-items-center">
                    <li  class="right-extend_items header__account--items"><a href="javascript:;" @click="$router.push('/login')"
                                                                              class="but but_login"> {{$t('head[3]')}} </a>
                      <a  href="javascript:;" @click="$router.push('/register')" class="but but_signup">{{$t('head[2]')}} </a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>

  </header>
</template>

<script>

  export default {
    name: 'userHeader',
    components: {

    },
    props: {
      showLogo: {
        type:Boolean,
        default:true
      }
    },
    data() {
      return {
        showMask:false,
        showLogout: false,
        showPcLan: false,
        showMenu:false,
        index:0,
        showH5nav:false,
        showPackage:false,
        showSet:false,
        showH5packet:false,
        showH5set:false,
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
      if (localStorage.getItem("pageIndex") == '/product') {
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
        this.index = 5;
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
      if (localStorage.getItem("pageIndex") == '/tutorial') {
        this.index = 9;
      }
      if (localStorage.getItem("pageIndex") == '/dashboard') {
        this.index = 10;
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
  .fs-5{font-size:1.25rem!important}
  .header__menu--link_active {
    color: #222226 !important;
  }
  .header__menu--link_active,router-link-active {
    color: #222226 !important;
  }
  .dropdown-menu1 {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: .25rem;
  }
  .nav__menu--items {
    text-align: center;
    font-weight: bolder;
  }
  .pc {

  }

  @media (max-width: 768px) {
    .pc {
      display: none;
    }
  }
  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {
    .mobile {
      display: none;
    }
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
</style>
