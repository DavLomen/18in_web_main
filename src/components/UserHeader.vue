<template>
<!--  <header data-v-39d1ae32="" id="header-nav" class="new-navbar">-->
<!--    <div data-v-39d1ae32="" id="main__header" class="main__header">-->
<!--      <div data-v-39d1ae32="" class="container">-->
<!--        <div data-v-39d1ae32="" class="logo-box"><a data-v-39d1ae32="" href="/"-->
<!--                                                    class="logo-icon router-link-active"><img data-v-39d1ae32=""-->
<!--                                                                                              :src="'./static/img/logo.png'"-->
<!--                                                                                              alt=""></a></div>-->
<!--        <div data-v-39d1ae32="" class="language">-->
<!--          <div data-v-39d1ae32="" id="navbarNavDarkDropdown" class="navbar-collapse">-->
<!--            <div data-v-39d1ae32="" class="dropdown"><a data-v-39d1ae32="" href="javascript: void (0)" role="button"-->
<!--                                                        id="dropdownMenuLink" data-toggle="dropdown"-->
<!--                                                        aria-expanded="false"-->
<!--                                                        class="btn dropdown-toggle header__menu&#45;&#45;link"-->
<!--                                                        style="font-weight: 400;"><i data-v-39d1ae32=""-->
<!--                                                                                     class="fa fa-globe"></i> Language-->
<!--            </a>&lt;!&ndash;&ndash;&gt;</div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div data-v-39d1ae32="" class="navigation">-->
<!--          <ul data-v-39d1ae32="" class="navigation-menu" style="justify-content: right;">-->
<!--            <li data-v-39d1ae32="" class="nav__menu&#45;&#45;items"><a data-v-39d1ae32="" href="/"-->
<!--                                                               class="header__menu&#45;&#45;link router-link-active" id="/">-->
<!--              HOME </a></li>-->
<!--            <li data-v-39d1ae32="" class="nav__menu&#45;&#45;items"><a data-v-39d1ae32="" href="/plans"-->
<!--                                                               class="header__menu&#45;&#45;link">PLANS </a></li>-->
<!--            <li data-v-39d1ae32="" class="nav__menu&#45;&#45;items"><a data-v-39d1ae32="" href="/profile/overview"-->
<!--                                                               class="header__menu&#45;&#45;link router-link-exact-active router-link-active"-->
<!--                                                               aria-current="page">DASHBOARD </a></li>-->
<!--            <li data-v-39d1ae32="" class="nav__menu&#45;&#45;items"><a data-v-39d1ae32="" href="/referral"-->
<!--                                                               class="header__menu&#45;&#45;link">AFFILIATES </a></li>-->
<!--            <li data-v-39d1ae32="" class="nav__menu&#45;&#45;items"><a data-v-39d1ae32="" href="/about-us"-->
<!--                                                               class="header__menu&#45;&#45;link">ABOUT </a></li>-->
<!--            <li data-v-39d1ae32="" class="nav__menu&#45;&#45;items"><a data-v-39d1ae32="" href="/faq"-->
<!--                                                               class="header__menu&#45;&#45;link">FAQ </a></li>-->
<!--          </ul>-->
<!--        </div>-->
<!--        <div data-v-39d1ae32="" class="right-extend header__account">-->
<!--          <ul data-v-39d1ae32="" class="d-flex align-items-center">-->
<!--            <li data-v-39d1ae32="" class="header__account&#45;&#45;items d-sm-u-none">-->
<!--              <div data-v-39d1ae32="" class="dropdown"><a data-v-39d1ae32="" href="#"-->
<!--                                                          class="dropdown-toggle header__menu&#45;&#45;link">-->
<!--                132123456@qq.com</a>-->
<!--                <div data-v-39d1ae32="" aria-labelledby="dropdownMenuLink" class="dropdown-menu"-->
<!--                     style="left: auto; right: 0px; display: none;"><a data-v-39d1ae32="" href="#"-->
<!--                                                                       class="dropdown-item header__menu&#45;&#45;link"-->
<!--                                                                       style="font-weight: 400;">Sign out</a></div>-->
<!--              </div>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--        <div data-v-39d1ae32="" class="offcanvas__header&#45;&#45;menu__open"-->
<!--             style="margin-right: 0.625rem; padding: 10px 0px;">-->
<!--          <div data-v-39d1ae32="" href="javascript:void(0)" data-offcanvas=""-->
<!--               class="offcanvas__header&#45;&#45;menu__open&#45;&#45;btn">-->
<!--            <svg data-v-39d1ae32="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"-->
<!--                 class="ionicon offcanvas__header&#45;&#45;menu__open&#45;&#45;svg">-->
<!--              <path data-v-39d1ae32="" fill="currentColor" stroke="currentColor" stroke-linecap="round"-->
<!--                    stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"></path>-->
<!--            </svg>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div data-v-39d1ae32="" class="offcanvas__header">-->
<!--      <div data-v-39d1ae32="" class="offcanvas__inner">-->
<!--        <div data-v-39d1ae32="" class="offcanvas__logo"><a data-v-39d1ae32="" href="/"-->
<!--                                                           class="offcanvas__logo_link router-link-active"><img-->
<!--          data-v-39d1ae32="" src="/images/logo.png" height="32" alt="" class="logo__light logo__light"></a>-->
<!--          <button data-v-39d1ae32="" data-offcanvas="" class="offcanvas__close&#45;&#45;btn">close</button>-->
<!--        </div>-->
<!--        <nav data-v-39d1ae32="" class="offcanvas__menu">-->
<!--          <ul data-v-39d1ae32="" class="offcanvas__menu_ul">-->
<!--            <li data-v-39d1ae32="" class="offcanvas__menu_li"><a data-v-39d1ae32="" href="/" id="/"-->
<!--                                                                 class="offcanvas__menu_item">Home</a></li>-->
<!--            <li data-v-39d1ae32="" class="offcanvas__menu_li"><a data-v-39d1ae32="" href="/plans" id="/plans"-->
<!--                                                                 class="offcanvas__menu_item">Plans</a></li>-->
<!--            <li data-v-39d1ae32="" class="offcanvas__menu_li"><a data-v-39d1ae32="" href="/profile" id="/profile"-->
<!--                                                                 class="offcanvas__menu_item header__menu&#45;&#45;link_active">Dashboard</a>-->
<!--            </li>-->
<!--            <li data-v-39d1ae32="" class="offcanvas__menu_li"><a data-v-39d1ae32="" href="/referral" id="/referral"-->
<!--                                                                 class="offcanvas__menu_item">Referral</a></li>-->
<!--            <li data-v-39d1ae32="" class="offcanvas__menu_li"><a data-v-39d1ae32="" href="/about-us" id="/about-us"-->
<!--                                                                 class="offcanvas__menu_item">About</a></li>-->
<!--            <li data-v-39d1ae32="" class="offcanvas__menu_li"><a data-v-39d1ae32="" href="/faq" id="/faq"-->
<!--                                                                 class="offcanvas__menu_item">Faq</a></li>-->
<!--          </ul>-->
<!--          <div data-v-39d1ae32="" class="header__account offcanvas__account">-->
<!--            <ul data-v-39d1ae32="" class="align-items-center login-but_box">-->
<!--              <li data-v-39d1ae32="" class="header__account&#45;&#45;items"><a data-v-39d1ae32="" href="/profile/overview">-->
<!--                132123456@qq.com</a></li>-->
<!--              <br data-v-39d1ae32="">-->
<!--              <li data-v-39d1ae32="" class="header__account&#45;&#45;items"><a data-v-39d1ae32="" href="#"-->
<!--                                                                       class="but but_signup"> Sign out </a></li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </nav>-->
<!--      </div>-->
<!--    </div>-->
<!--  </header>-->
  <div class="window"
       style="margin-top: 50px; margin-bottom: 50px; margin-right: 20px; border-radius: 28px; box-shadow: rgb(221, 221, 221) 0px 0px 5px; min-height: 300px; overflow: hidden;">
    <ul role="menubar" class="el-menu" style="border: none;">
      <a href="javascript:;" @click="$router.push('/dashboard/view')" class="router-link-exact-active router-link-active" aria-current="page">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/dashboard/view'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-data-analysis"></i>
          <span>{{$t('head[4]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/transactions')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/transactions'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-money"></i>
          <span>{{$t('head[22]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/dashboard/deposit')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/dashboard/deposit'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-sell"></i>
          <span>{{$t('head[7]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/dashboard/withdraw')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/dashboard/withdraw'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-sold-out"></i>
          <span>{{$t('head[8]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/dashboard/MyPackages')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/dashboard/MyPackages'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-shopping-cart-full"></i>
          <span>{{$t('head[11]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/product')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/product'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-position"></i>
          <span>{{$t('foot[2]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/dashboard/affiliates')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/dashboard/affiliates'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-user"></i>
          <span>{{$t('foot[5]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/dashboard/message')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/dashboard/message'?'is-active':'')" style="padding-left: 20px;">
<!--          <i class="el-icon-message"></i>-->
          <van-icon name="comment-o" size="18" style="    margin-right: 5px;" :dot="$store.state.MessageInfo>0"/>
          <span>{{$t('head[13]')}} {{$store.state.MessageInfo}}</span>
        </li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/lucky')" v-if="InitData.setting.luckydraw !=undefined && InitData.setting.luckydraw.status ==1">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/lucky'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-s-goods"></i>
          <span>{{$t('common[2]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="showMenu =!showMenu">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/setting'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-setting"></i>
          <span>{{$t('head[14]')}}</span></li>
      </a>
    </ul>
    <ul v-if="showMenu" class="setting">
      <li class="el-menu-item" @click="showMenu=false,$router.push('/dashboard/walletAddress')">
        <a href="javascript:;" class="t-link primary-menu__sub-link text-capitalize">{{$t('walletAddress[0]')}}</a>
      </li>
      <li class="el-menu-item" @click="showMenu=false,$router.push('/dashboard/loginPassword')">
        <a href="javascript:;"  class="t-link primary-menu__sub-link text-capitalize">{{$t('walletAddress[1]')}}</a>
      </li>
      <li class="el-menu-item" @click="showMenu=false,$router.push('/dashboard/payPassword')">
        <a href="javascript:;"  class="t-link primary-menu__sub-link text-capitalize">{{$t('walletAddress[2]')}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'userHeader',
    components: {

    },
    props: [],
    data() {
      return {
        pageIndex:0,
        showPcLan: false,
        showMenu:false,
        index:'',
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
      this.index = localStorage.getItem("pageIndex");
      console.log(this.index);
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
.setting {

}

</style>
