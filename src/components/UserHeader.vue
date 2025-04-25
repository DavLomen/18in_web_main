<template>
  <div>
    <div class="app-nav" style="width: 25rem;box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);border-radius: 0 2rem 2rem 0;">
      <div class="mav-top"><img @click="$router.push('/')" :src="'./static/image/logo1.png'" class="logo">
<!--        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAJtJREFUSEvdlNENQyEIRR/F6Idp09ldwGXcyNCIwrNfTdoBoMlzAE/u5QAcTg+cOMcFQcz8ijHeLCucc54wxpCUElqCmFmBiCSEYDqrtdaG1trdMs3nb9Mk3wH8QKWUh0t1RDQR0VRvVd1+evfe1VpvEdlQa33mnLflnIgI/KyzTPKzR27Vucngeb0XIppKoaqnKeA/R9VN78uB3ilEVtbdgbvTAAAAAElFTkSuQmCC" class="menu-icon">-->
      </div>
      <ul role="menubar" class="nav-menu el-menu">
<!--        <li @click="$router.push('/')"   :class="'el-menu-item '+(index==0?'is-active':'')" style="padding-left: 20px;">-->
<!--          <i class="el-icon-house"></i>-->
<!--          <span>{{$t('head[0]')}}</span></li>-->
        <li @click="$router.push('/dashboard')"   :class="'el-menu-item '+(index==1?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-menu"></i><span>{{$t('head[4]')}}</span></li>
        <li  @click="$router.push('/app')"  :class="'el-menu-item '+(index==19?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-download"></i><span>{{$t('head[1]')}}</span></li>

        <li  @click="$router.push('/transactions')" :class="'el-menu-item '+(index==6?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-notebook-2"></i><span>{{$t('head[12]')}}</span></li>
        <li @click="$router.push('/deposit')"   :class="'el-menu-item '+(index==2?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-bank-card"></i><span>{{$t('head[7]')}}</span></li>
        <li @click="$router.push('/withdraw')"   :class="'el-menu-item '+(index==3?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-top"></i><span>{{$t('head[8]')}}</span></li>
        <li @click="$router.push('/product')"   :class="'el-menu-item '+(index==4?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-folder"></i><span>{{$t('head[10]')}}</span></li>
        <li @click="$router.push('/MyPackages')"   :class="'el-menu-item '+(index==5?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-edit-outline"></i><span>{{$t('head[11]')}}</span></li>
<!--        <li  aria-haspopup="true" class="el-submenu">-->
<!--          <div class="el-submenu__title" style="padding-left: 20px;" @click="showPackage = !showPackage">-->
<!--            <i class="el-icon-document"></i><span slot="title">{{$t('head[9]')}}</span>-->
<!--            <i class="el-submenu__icon-arrow el-icon-arrow-down" v-if="!showPackage"></i>-->
<!--            <van-icon name="arrow-up" class="el-submenu__icon-arrow" v-if="showPackage"/>-->
<!--          </div>-->
<!--          <ul role="menu" class="el-menu el-menu&#45;&#45;inline" v-show="showPackage">-->
<!--            <li class="el-menu-item-group">-->
<!--              <div class="el-menu-item-group__title" style="padding-left: 40px;"></div>-->
<!--              <ul>-->
<!--                <li  @click="$router.push('/PackageList')" :class="'el-menu-item '+(index==4?'is-active':'')" style="padding-left: 40px;"><i class="el-icon-files"></i> {{$t('head[10]')}} </li>-->
<!--                <li  @click="$router.push('/MyPackages')" :class="'el-menu-item '+(index==5?'is-active':'')" style="padding-left: 40px;"><i class="el-icon-folder-opened"></i> {{$t('head[11]')}} </li>-->
<!--              </ul>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </li>-->
        <li @click="$router.push('/welfare')" :class="'el-menu-item '+(index==8?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-grape"></i><span>{{$t('welfare[0]')}}</span></li>

        <li  @click="$router.push('/affiliates')"  :class="'el-menu-item '+(index==7?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-office-building"></i><span>{{$t('foot[5]')}}</span></li>
        <li  @click="$router.push('/lucky')" v-if="InitData.setting.luckydraw !=undefined && InitData.setting.luckydraw.status ==1" :class="'el-menu-item '+(index==12?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-sunny"></i><span>{{$t('common[2]')}}</span></li>
        <li  @click="$router.push('/message')"  :class="'el-menu-item '+(index==11?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-message-solid"></i><span>{{$t('head[13]')}}</span></li>
        <li  @click="$router.push('/coupon')"  :class="'el-menu-item '+(index==12?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-s-goods"></i><span>{{$t('coupon[0]')}}</span></li>
        <li  @click="$router.push('/security')"  :class="'el-menu-item '+(index==18?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-s-platform"></i><span>f2a</span></li>
        <li  aria-haspopup="true" class="el-submenu">
          <div class="el-submenu__title" style="padding-left: 20px;" @click="showSet = !showSet"><i class="el-icon-setting"></i><span slot="title">{{$t('head[14]')}}</span>
            <i class="el-submenu__icon-arrow el-icon-arrow-down" v-if="!showSet"></i>
            <van-icon name="arrow-up" class="el-submenu__icon-arrow" v-if="showSet"/>
          </div>
          <ul role="menu" class="el-menu el-menu--inline" v-show="showSet">
            <li class="el-menu-item-group">
              <div class="el-menu-item-group__title" style="padding-left: 40px;"></div>
              <ul>
                <li @click="$router.push('/walletAddress')"   :class="'el-menu-item '+(index==8?'is-active':'')" style="padding-left: 40px;"><i class="el-icon-wallet"></i> {{$t('walletAddress[0]')}} </li>
                <li @click="$router.push('/loginPassword')"   :class="'el-menu-item '+(index==9?'is-active':'')" style="padding-left: 40px;"><i class="el-icon-lock"></i> {{$t('walletAddress[1]')}} </li>
                <li @click="$router.push('/payPassword')"   :class="'el-menu-item '+(index==10?'is-active':'')" style="padding-left: 40px;"><i class="el-icon-lock"></i> {{$t('walletAddress[2]')}} </li>
                <li @click="deleteAccount"   :class="'el-menu-item '+(index==-1?'is-active':'')" style="padding-left: 40px;"><i class="el-icon-user"></i> {{$t('delete[0]')}} </li>
              </ul>
            </li>
          </ul>
        </li>
        <li @click="$Model.Logout()"   class="el-menu-item" style="padding-left: 20px;"><i class="el-icon-switch-button"></i><span>{{$t('head[5]')}}</span></li>
      </ul>
    </div>
    <div class="app-nav-h5">
      <img @click="$router.push('/')" :src="'./static/image/logo1.png'" class="logo">
      <div style="display:flex;">
        <div class="el-dropdown">
          <div class="cur-lang el-dropdown-selfdefine" aria-haspopup="list" @click="showPcLan = !showPcLan"
               aria-controls="dropdown-menu-6877" role="button" tabindex="0" style="margin-right: 1rem;display: flex;align-items: center;">
              <span v-if="$i18n.locale=='en-US'">
                <img :src="'./static/image/en-US.png'" style="width: 2.5rem;">
              </span>
            <span v-if="$i18n.locale=='ko-KO'">
                <img :src="'./static/image/ko-KO.png'" style="width: 2.5rem;">
              </span>
            <span v-if="$i18n.locale=='es-ES'">
                <img :src="'./static/image/es-ES.png'" style="width: 2.5rem;">
              </span>
            <span v-if="$i18n.locale=='yd-YD'">
                <img :src="'./static/image/yd-YD.png'" style="width: 2.5rem;">
              </span>
            <span v-if="$i18n.locale=='ar-AR'">
                <img :src="'./static/image/ar-AR.png'" style="width: 2.5rem;">
              </span>
            <span v-if="$i18n.locale=='pt-PT'">
                <img :src="'./static/image/pt-PT.png'" style="width: 2.5rem;">
              </span>
            <span v-if="$i18n.locale=='ru-RU'">
                <img :src="'./static/image/ru-RU.png'" style="width: 2.5rem;">
              </span>
            <span v-if="$i18n.locale=='ja-JP'">
                <img :src="'./static/image/ja-JP.png'" style="width: 2.5rem;">
              </span>
            <span v-if="$i18n.locale=='de-DE'">
                <img :src="'./static/image/de-DE.png'" style="width: 2.5rem;">
              </span>
            <span v-if="$i18n.locale=='fr-FR'">
                <img :src="'./static/image/fr-FR.png'" style="width: 2.5rem;">
              </span>
            <van-icon name="arrow-down" class="el-icon-arrow-down"/>
          </div>
          <ul class="el-dropdown-menu" id="dropdown-menu-6877" v-show="showPcLan" style="position: absolute;top: 3rem;left: -4rem">
            <li  @click="changeLanguage('en-US')" v-if="InitData.setting.en==1" class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/image/en-US.png'"
                                          class="flag"> English
              </div>
            </li>
            <li @click="changeLanguage('ko-KO')" v-if="InitData.setting.ko==1" class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/image/ko-KO.png'"
                                          class="flag"> 한국인
              </div>
            </li>
            <li @click="changeLanguage('es-ES')" v-if="InitData.setting.es==1" class="el-dropdown-menu__item">
              <div class="lang-item"><img :src="'./static/image/es-ES.png'"
                                          class="flag"> Español
              </div>
            </li>
            <!--            <li  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
            <!--              <div class="lang-item"><img :src="'./static/images/flag7.597f635f.png'"-->
            <!--                                          class="flag"> Türkçe-->
            <!--              </div>-->
            <!--            </li>-->
            <li @click="changeLanguage('yd-YD')" v-if="InitData.setting.yd==1"  class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/image/yd-YD.png'"
                                          class="flag"> हिंदी
              </div>
            </li>
            <!--              <li @click="changeLanguage('ur-UR')" v-if="InitData.setting.ur==1"  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
            <!--                <div class="lang-item"><img :src="'./static/images/flagur.png'"-->
            <!--                                            class="flag"> اردو-->
            <!--                </div>-->
            <!--              </li>-->
            <li @click="changeLanguage('ar-AR')" v-if="InitData.setting.ar==1"  class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/image/ar-AR.png'"
                                          class="flag">عربي
              </div>
            </li>
            <li @click="changeLanguage('pt-PT')" v-if="InitData.setting.pt==1"  class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/image/pt-PT.png'"
                                          class="flag"> Português
              </div>
            </li>
            <li @click="changeLanguage('ru-RU')" v-if="InitData.setting.ru==1"   class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/image/ru-RU.png'"
                                          class="flag"> Русский
              </div>
            </li>
            <li @click="changeLanguage('ja-JP')" v-if="InitData.setting.jp==1"  class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/image/ja-JP.png'"
                                          class="flag"> 日本語
              </div>
            </li>
            <li @click="changeLanguage('de-DE')" v-if="InitData.setting.de==1"  class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/image/de-DE.png'"
                                          class="flag"> Deutsch
              </div>
            </li>
            <li @click="changeLanguage('fr-FR')" v-if="InitData.setting.fr==1" class="el-dropdown-menu__item"><!---->
              <div class="lang-item"><img :src="'./static/image/fr-FR.png'"
                                          class="flag"> Français
              </div>
            </li>
            <!--            <li @click="changeLanguage('zh-CN')" v-if="InitData.setting.cn==1" class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
            <!--              <div class="lang-item"><img :src="'./static/images/zh-CN.png'"-->
            <!--                                          class="flag"> 中文简体-->
            <!--              </div>-->
            <!--            </li>-->
          </ul>
        </div>
        <div @click="showPcLan=false,showH5nav=!showH5nav" class="menu"><i  class="el-icon-s-operation"></i> {{$t('head[6]')}} </div>
      </div>
    </div>
    <div v-if="showH5nav" class="app-nav-mask">
      <ul role="menubar" class="nav-menu el-menu">
        <li @click="$router.push('/')"   :class="'el-menu-item '+(index==0?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-house"></i><span>{{$t('head[0]')}}</span></li>
        <li @click="$router.push('/app')"   :class="'el-menu-item '+(index==19?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-discover"></i><span>{{$t('head[1]')}}</span></li>
        <li @click="$router.push('/dashboard')"   :class="'el-menu-item '+(index==1?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-discover"></i><span>{{$t('head[4]')}}</span></li>
        <li @click="$router.push('/deposit')"   :class="'el-menu-item '+(index==2?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-folder-add"></i><span>{{$t('head[7]')}}</span></li>
        <li @click="$router.push('/withdraw')"   :class="'el-menu-item '+(index==3?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-coin"></i><span>{{$t('head[8]')}}</span></li>
<!--        <li  aria-haspopup="true" class="el-submenu">-->
<!--          <div class="el-submenu__title" style="padding-left: 20px;" @click="showH5packet = !showH5packet">-->
<!--            <i class="el-icon-document"></i>-->
<!--            <span slot="title">{{$t('head[9]')}}</span><i class="el-submenu__icon-arrow el-icon-arrow-down"></i>-->
<!--          </div>-->
<!--          <ul role="menu" class="el-menu el-menu&#45;&#45;inline" v-show="showH5packet">-->
<!--            <li class="el-menu-item-group">-->
<!--              <div class="el-menu-item-group__title" style="padding-left: 40px;"></div>-->
<!--              <ul>-->
<!--                <li @click="$router.push('/PackageList')"  :class="'el-menu-item '+(index==4?'is-active':'')" style="padding-left: 40px;"><i class="el-icon-files"></i> {{$t('head[10]')}} </li>-->
<!--                <li  @click="$router.push('/MyPackages')" :class="'el-menu-item '+(index==5?'is-active':'')" style="padding-left: 40px;"><i class="el-icon-folder-opened"></i> {{$t('head[11]')}} </li>-->
<!--              </ul>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </li>-->

        <li @click="$router.push('/MyPackages')" :class="'el-menu-item '+(index==5?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-edit-outline"></i><span>{{$t('head[11]')}}</span></li>
        <li @click="$router.push('/transactions')" :class="'el-menu-item '+(index==6?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-sort"></i><span>{{$t('head[12]')}}</span></li>
        <li @click="$router.push('/welfare')" :class="'el-menu-item '+(index==8?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-grape"></i><span>{{$t('welfare[0]')}}</span></li>

        <li  @click="$router.push('/affiliates')" :class="'el-menu-item '+(index==7?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-office-building"></i><span>{{$t('foot[5]')}}</span></li>
<!--        <li  @click="$router.push('/lucky')" v-if="InitData.setting.luckydraw !=undefined && InitData.setting.luckydraw.status ==1" :class="'el-menu-item '+(index==12?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-sunny"></i><span>{{$t('common[2]')}}</span></li>-->
        <li  @click="$router.push('/message')"  :class="'el-menu-item '+(index==11?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-message-solid"></i><span>{{$t('head[13]')}}</span></li>
        <li  @click="$router.push('/coupon')"  :class="'el-menu-item '+(index==12?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-s-goods"></i><span>{{$t('coupon[0]')}}</span></li>
        <li  @click="$router.push('/security')"  :class="'el-menu-item '+(index==18?'is-active':'')" style="padding-left: 20px;"><i class="el-icon-s-platform"></i><span>f2a</span></li>
        <li  aria-haspopup="true" class="el-submenu">
          <div @click="showH5set = !showH5set" class="el-submenu__title" style="padding-left: 20px;"><i class="el-icon-setting"></i><span slot="title">{{$t('head[14]')}}</span><i class="el-submenu__icon-arrow el-icon-arrow-down"></i></div>
          <ul role="menu" class="el-menu el-menu--inline" v-show="showH5set">
            <li class="el-menu-item-group">
              <div class="el-menu-item-group__title" style="padding-left: 40px;"></div>
              <ul>
                <li @click="$router.push('/walletAddress')"   :class="'el-menu-item '+(index==8?'is-active':'')" style="padding-left: 40px;"><i class="el-icon-wallet"></i> {{$t('walletAddress[0]')}} </li>
                <li @click="$router.push('/loginPassword')"   :class="'el-menu-item '+(index==9?'is-active':'')" style="padding-left: 40px;"><i class="el-icon-lock"></i> {{$t('walletAddress[1]')}} </li>
                <li @click="$router.push('/payPassword')"   :class="'el-menu-item '+(index==10?'is-active':'')" style="padding-left: 40px;"><i class="el-icon-lock"></i> {{$t('walletAddress[2]')}} </li>
                <li @click="deleteAccount"   :class="'el-menu-item '+(index==-1?'is-active':'')" style="padding-left: 40px;"><i class="el-icon-user"></i> {{$t('delete[0]')}} </li>
              </ul>
            </li>
          </ul>
        </li>
        <li @click="$Model.Logout()"   class="el-menu-item" style="padding-left: 20px;"><i class="el-icon-switch-button"></i><span>{{$t('head[5]')}}</span></li>
      </ul>
      <div class="close-box"><i @click="showH5nav=false" class="el-icon-error nav-close"></i></div>
    </div>
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
        index:0,
        showH5nav:false,
        showPcLan:false,
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
      if (localStorage.getItem("userIndex") == '/') {
        this.index = 0;
      }
      if (localStorage.getItem("userIndex") == '/dashboard') {
        this.index = 1;
      }
      if (localStorage.getItem("userIndex") == '/deposit') {
        this.index = 2;
      }
      if (localStorage.getItem("userIndex") == '/withdraw') {
        this.index = 3;
      }
      if (localStorage.getItem("userIndex") == '/PackageList') {
        this.showPackage = true;
        this.showH5packet = true;
        this.index = 4;
      }
      if (localStorage.getItem("userIndex") == '/MyPackages') {
        this.showPackage = true;
        this.showH5packet = true;
        this.index = 5;
      }
      if (localStorage.getItem("userIndex") == '/transactions') {
        this.index = 6;
      }
      if (localStorage.getItem("userIndex") == '/affiliates') {
        this.index = 7;
      }
      if (localStorage.getItem("userIndex") == '/walletAddress') {
        this.showSet = true;
        this.showH5set = true;
        this.index = 8;
      }
      if (localStorage.getItem("userIndex") == '/loginPassword') {
        this.showSet = true;
        this.showH5set = true;
        this.index = 9;
      }
      if (localStorage.getItem("userIndex") == '/payPassword') {
        this.showSet = true;
        this.showH5set = true;
        this.index = 10;
      }
      if (localStorage.getItem("userIndex") == '/message') {
        this.index = 11;
      }
      if (localStorage.getItem("userIndex") == '/coupon') {
        this.index = 12;
      }
      if (localStorage.getItem("userIndex") == '/security') {
        this.index = 18;
      }
      if (localStorage.getItem("userIndex") == '/app') {
        this.index = 19;
      }
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      deleteAccount() {
        let that = this;
        this.$Dialog.Confirm(that.$t('delete[1]'),()=>{
          that.$Model.SetUserInfo({state:2},data=>{
            if(data.code==1){
              that.$Model.Logout();
            }
          })
        })
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

</style>
