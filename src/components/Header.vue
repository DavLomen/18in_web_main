<template>
    <div class="header">
      <div class="header-wrapper">
        <img @click="$router.push('/')" v-lazy="'./static/image/logo1.png'"
             class="logo">
        <div class="nav-list">

          <div :class="'nav-item '+(index==0?'active':'')" @click="$router.push('/')">
            {{$t('head[0]')}}
            <div class="underlined"></div>
          </div>
<!--          <div :class="'nav-item '+(index==18?'active':'')" @click="$router.push('/app')">-->
<!--            {{$t('head[1]')}}-->
<!--            <div class="underlined"></div>-->
<!--          </div>-->
          <div :class="'nav-item '+(index==1?'active':'')" @click="$router.push('/product')">
            {{$t('foot[2]')}}
            <div class="underlined"></div>
          </div>
          <div :class="'nav-item '+(index==2?'active':'')" @click="$router.push('/about')"> {{$t('foot[3]')}}<div class="underlined"></div></div>
<!--          <div :class="'nav-item '+(index==9?'active':'')" style="color: #FF9800;" @click="$router.push('/Bounty')"> {{$t('bounty')}}<div class="underlined"></div></div>-->
          <div :class="'nav-item '+(index==3?'active':'')" @click="$router.push('/FAQ')"> {{$t('foot[4]')}}<div class="underlined"></div></div>
          <!--        <div :class="'nav-item '+(index==5?'active':'')" @click="$router.push('/blog')"> {{$t('foot[6]')}}<div class="underlined"></div></div>-->
          <!--        <div :class="'nav-item '+(index==6?'active':'')" @click="$router.push('/contact')"> {{$t('foot[7]')}}<div class="underlined"></div></div>-->
          <div :class="'nav-item '+(index==8?'active':'')" @click="$router.push('/welfare')"> {{$t('welfare[0]')}}<div class="underlined"></div></div>
          <div :class="'nav-item '+(index==4?'active':'')" @click="$router.push('/affiliate')">{{$t('foot[5]')}}<div class="underlined"></div></div>
          <div :class="'nav-item '+(index==7?'active':'')" @click="$router.push('/app')"> {{$t('head[1]')}}<div class="underlined"></div></div>
          <div :class="'nav-item '+(index==10?'active':'')" @click="$router.push('/teach')"> {{$t('teach[0]')}}<div class="underlined"></div></div>
        </div>
        <div class="nav-list" style="margin-right: 5rem">
          <div class="el-dropdown">
            <div class="cur-lang el-dropdown-selfdefine" aria-haspopup="list" @click="showPcLan = !showPcLan"
                 aria-controls="dropdown-menu-6877" role="button" tabindex="0">
              <span v-if="$i18n.locale=='en-US'">
<!--                <img v-lazy="'./static/image/en-us1.png?t=1'" style="width: 2.5rem;">-->
                <img v-lazy="'./static/image/en-US.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='es-ES'">
                <img v-lazy="'./static/image/es-ES.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='pt-PT'">
                <img v-lazy="'./static/image/pt-PT.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='ru-RU'">
                <img v-lazy="'./static/image/ru-RU.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='de-DE'">
                <img v-lazy="'./static/image/de-DE.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='fr-FR'">
                <img v-lazy="'./static/image/fr-FR.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='nl-NL'">
                <img v-lazy="'./static/image/nl-NL.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='ro-RO'">
                <img v-lazy="'./static/image/ro-RO.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='pl-PL'">
                <img v-lazy="'./static/image/pl-PL.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='it-IT'">
                <img v-lazy="'./static/image/it-IT.png'" style="width: 2.5rem;">
              </span>

              <span v-if="$i18n.locale=='ko-KO'">
                <img v-lazy="'./static/image/ko-KO.png'" style="width: 2.5rem;">
              </span>
<!--              <span v-if="$i18n.locale=='yd-YD'">-->
<!--                <img v-lazy="'./static/image/yd-YD.png'" style="width: 2.5rem;">-->
<!--              </span>-->
              <span v-if="$i18n.locale=='ar-AR'">
                <img v-lazy="'./static/image/ar-AR.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='ja-JP'">
                <img v-lazy="'./static/image/ja-JP.png'" style="width: 2.5rem;">
              </span>
<!--              <span v-if="$i18n.locale=='zh-TW'">-->
<!--                <img v-lazy="'./static/image/zh-TW.png'" style="width: 2.5rem;">-->
<!--              </span>-->
              <van-icon name="arrow-down" class="el-icon-arrow-down"/>
            </div>
            <ul class="el-dropdown-menu" id="dropdown-menu-6877" v-show="showPcLan">
              <li  @click="changeLanguage('en-US')" v-if="InitData.setting.en==1" class="el-dropdown-menu__item"><!---->
                <div class="lang-item">
                  <img v-lazy="'./static/image/en-US.png'"
                                            class="flag">
                  English
                </div>
              </li>
              <li @click="changeLanguage('es-ES')" v-if="InitData.setting.es==1" class="el-dropdown-menu__item">
                <div class="lang-item"><img v-lazy="'./static/image/es-ES.png'"
                                            class="flag"> Español
                </div>
              </li>
              <li @click="changeLanguage('pt-PT')" v-if="InitData.setting.pt==1"  class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/pt-PT.png'"
                                            class="flag"> Português
                </div>
              </li>
              <li @click="changeLanguage('ru-RU')" v-if="InitData.setting.ru==1"   class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/ru-RU.png'"
                                            class="flag"> Русский
                </div>
              </li>

              <li @click="changeLanguage('de-DE')" v-if="InitData.setting.de==1"  class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/de-DE.png'"
                                            class="flag"> Deutsch
                </div>
              </li>

              <li @click="changeLanguage('ko-KO')" v-if="InitData.setting.ko==1" class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/ko-KO.png'"
                                            class="flag"> 한국인
                </div>
              </li>
                            <li @click="changeLanguage('ja-JP')" v-if="InitData.setting.jp==1"  class="el-dropdown-menu__item"><!---->
                              <div class="lang-item"><img v-lazy="'./static/image/ja-JP.png'"
                                                          class="flag"> 日本語
                              </div>
                            </li>
              <!--            <li  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
              <!--              <div class="lang-item"><img v-lazy="'./static/images/flag7.597f635f.png'"-->
              <!--                                          class="flag"> Türkçe-->
              <!--              </div>-->
              <!--            </li>-->
<!--              <li @click="changeLanguage('yd-YD')" v-if="InitData.setting.yd==1"  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
<!--                <div class="lang-item"><img v-lazy="'./static/image/yd-YD.png'"-->
<!--                                            class="flag"> हिंदी-->
<!--                </div>-->
<!--              </li>-->
<!--              <li @click="changeLanguage('ur-UR')" v-if="InitData.setting.ur==1"  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
<!--                <div class="lang-item"><img v-lazy="'./static/images/flagur.png'"-->
<!--                                            class="flag"> اردو-->
<!--                </div>-->
<!--              </li>-->
              <li @click="changeLanguage('ar-AR')" v-if="InitData.setting.ar==1"  class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/ar-AR.png'"
                                            class="flag">عربي
                </div>
              </li>


              <li @click="changeLanguage('fr-FR')" v-if="InitData.setting.fr==1" class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/fr-FR.png'"
                                            class="flag"> Français
                </div>
              </li>
              <li @click="changeLanguage('nl-NL')" v-if="InitData.setting.nl==1" class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/nl-NL.png'"
                                            class="flag"> Nederlands
                </div>
              </li>
              <li @click="changeLanguage('ro-RO')" v-if="InitData.setting.ro==1" class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/ro-RO.png'"
                                            class="flag"> română
                </div>
              </li>
              <li @click="changeLanguage('pl-PL')" v-if="InitData.setting.pl==1" class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/pl-PL.png'"
                                            class="flag"> Polski
                </div>
              </li>
              <li @click="changeLanguage('it-IT')" v-if="InitData.setting.it==1" class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/it-IT.png'"
                                            class="flag"> Italiano
                </div>
              </li>
<!--              <li @click="changeLanguage('zh-TW')" v-if="InitData.setting.ft==1" class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
<!--                <div class="lang-item"><img v-lazy="'./static/image/zh-TW.png'"-->
<!--                                            class="flag"> 繁體中文-->
<!--                </div>-->
<!--              </li>-->
              <!--            <li @click="changeLanguage('zh-CN')" v-if="InitData.setting.cn==1" class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
              <!--              <div class="lang-item"><img v-lazy="'./static/images/zh-CN.png'"-->
              <!--                                          class="flag"> 中文简体-->
              <!--              </div>-->
              <!--            </li>-->
            </ul>
          </div>
          <div class="action-box" v-if="!UserInfo">
            <div class="action-btn"  @click="$router.push('/register')">{{$t('head[2]')}}</div>
          </div>
          <div class="action-box" v-if="!UserInfo" >
            <div class="action-btn dasbtn" @click="$router.push('/login')">{{$t('head[3]')}}</div>
          </div>
          <div class="action-box" v-if="UserInfo" >
            <div class="action-btn dasbtn" v-if="UserInfo" @click="$router.push('/dashboard')">{{$t('head[4]')}}</div>
          </div>
          <div class="action-box" v-if="UserInfo">
            <div class="action-btn"  @click="$Model.Logout()">{{$t('head[5]')}}</div>
          </div>
          <div style="color:#fff;text-align:center;font-size: 1.5rem;margin-left: 10px;border-radius: 10px;border: 1px solid #662282;padding: 5px">
            {{$t('online')}}<br>{{InitData.setting.online || 0}}
          </div>
        </div>
        <div class="menu-box">
          <div style="color:#fff;text-align:center;font-size: 1.25rem;margin-left: 10px;border-radius: 10px;padding: 5px">
            {{$t('online')}}<br>{{InitData.setting.online ||0}}
          </div>
          <div class="el-dropdown">
            <div class="cur-lang el-dropdown-selfdefine" aria-haspopup="list" @click="showMobileLan = !showMobileLan"
                 aria-controls="dropdown-menu-5477" role="button" tabindex="0">
             <span v-if="$i18n.locale=='en-US'">
                <img v-lazy="'./static/image/en-US.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='ko-KO'">
                <img v-lazy="'./static/image/ko-KO.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='es-ES'">
                <img v-lazy="'./static/image/es-ES.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='yd-YD'">
                <img v-lazy="'./static/image/yd-YD.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='ar-AR'">
                <img v-lazy="'./static/image/ar-AR.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='pt-PT'">
                <img v-lazy="'./static/image/pt-PT.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='ru-RU'">
                <img v-lazy="'./static/image/ru-RU.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='ja-JP'">
                <img v-lazy="'./static/image/ja-JP.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='de-DE'">
                <img v-lazy="'./static/image/de-DE.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='fr-FR'">
                <img v-lazy="'./static/image/fr-FR.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='it-IT'">
                <img v-lazy="'./static/image/it-IT.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='zh-TW'">
                <img v-lazy="'./static/image/zh-TW.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='nl-NL'">
                <img v-lazy="'./static/image/nl-NL.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='ro-RO'">
                <img v-lazy="'./static/image/ro-RO.png'" style="width: 2.5rem;">
              </span>
              <span v-if="$i18n.locale=='pl-PL'">
                <img v-lazy="'./static/image/pl-PL.png'" style="width: 2.5rem;">
              </span>
              <van-icon name="arrow-down" class="el-icon-arrow-down"/>
            </div>
            <ul class="el-dropdown-menu" id="dropdown-menu-5477" v-show="showMobileLan">
              <li  @click="changeLanguage('en-US')" v-if="InitData.setting.en==1" class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/en-US.png'"
                                            class="flag"> English
                </div>
              </li>
              <li @click="changeLanguage('ko-KO')" v-if="InitData.setting.ko==1" class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/ko-KO.png'"
                                            class="flag"> 한국인
                </div>
              </li>
              <li @click="changeLanguage('es-ES')" v-if="InitData.setting.es==1" class="el-dropdown-menu__item">
                <div class="lang-item"><img v-lazy="'./static/image/es-ES.png'"
                                            class="flag"> Español
                </div>
              </li>
              <!--            <li  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
              <!--              <div class="lang-item"><img v-lazy="'./static/images/flag7.597f635f.png'"-->
              <!--                                          class="flag"> Türkçe-->
              <!--              </div>-->
              <!--            </li>-->
<!--              <li @click="changeLanguage('yd-YD')" v-if="InitData.setting.yd==1"  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
<!--                <div class="lang-item"><img v-lazy="'./static/image/yd-YD.png'"-->
<!--                                            class="flag"> हिंदी-->
<!--                </div>-->
<!--              </li>-->
<!--              <li @click="changeLanguage('ur-UR')" v-if="InitData.setting.ur==1"  class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
<!--                <div class="lang-item"><img v-lazy="'./static/image/flagur.png'"-->
<!--                                            class="flag"> اردو-->
<!--                </div>-->
<!--              </li>-->
              <li @click="changeLanguage('ar-AR')" v-if="InitData.setting.ar==1"  class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/ar-AR.png'"
                                            class="flag">عربي
                </div>
              </li>
              <li @click="changeLanguage('pt-PT')" v-if="InitData.setting.pt==1"  class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/pt-PT.png'"
                                            class="flag"> Português
                </div>
              </li>
              <li @click="changeLanguage('ru-RU')" v-if="InitData.setting.ru==1"   class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/ru-RU.png'"
                                            class="flag"> Русский
                </div>
              </li>
              <li @click="changeLanguage('ja-JP')" v-if="InitData.setting.jp==1"  class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/ja-JP.png'"
                                            class="flag"> 日本語
                </div>
              </li>
              <li @click="changeLanguage('de-DE')" v-if="InitData.setting.de==1"  class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/de-DE.png'"
                                            class="flag"> Deutsch
                </div>
              </li>
              <li @click="changeLanguage('fr-FR')" v-if="InitData.setting.fr==1" class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/fr-FR.png'"
                                            class="flag"> Français
                </div>
              </li>
              <li @click="changeLanguage('nl-NL')" v-if="InitData.setting.nl==1" class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/nl-NL.png'"
                                            class="flag"> Nederlands
                </div>
              </li>
              <li @click="changeLanguage('ro-RO')" v-if="InitData.setting.ro==1" class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/ro-RO.png'"
                                            class="flag"> română
                </div>
              </li>
              <li @click="changeLanguage('pl-PL')" v-if="InitData.setting.pl==1" class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/pl-PL.png'"
                                            class="flag"> Polski
                </div>
              </li>
              <li @click="changeLanguage('it-IT')" v-if="InitData.setting.it==1" class="el-dropdown-menu__item"><!---->
                <div class="lang-item"><img v-lazy="'./static/image/it-IT.png'"
                                            class="flag"> Italiano
                </div>
              </li>
<!--              <li @click="changeLanguage('zh-TW')" v-if="InitData.setting.ft==1" class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
<!--                <div class="lang-item"><img v-lazy="'./static/image/zh-TW.png'"-->
<!--                                            class="flag"> 繁體中文-->
<!--                </div>-->
<!--              </li>-->
              <!--            <li @click="changeLanguage('zh-CN')" v-if="InitData.setting.cn==1" class="el-dropdown-menu__item">&lt;!&ndash;&ndash;&gt;-->
              <!--              <div class="lang-item"><img v-lazy="'./static/images/zh-CN.png'"-->
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
            <div :class="'nav-item '+(index==0?'active':'')" @click="$router.push('/')"> {{$t('head[0]')}}</div>
<!--            <div :class="'nav-item '+(index==7?'active':'')" @click="$router.push('/app')"> {{$t('head[1]')}}</div>-->
            <div :class="'nav-item '+(index==1?'active':'')" @click="$router.push('/product')"> {{$t('foot[2]')}}</div>
            <div :class="'nav-item '+(index==2?'active':'')" @click="$router.push('/about')"> {{$t('foot[3]')}}</div>
            <div :class="'nav-item '+(index==3?'active':'')" @click="$router.push('/FAQ')"> {{$t('foot[4]')}}</div>
<!--            <div :class="'nav-item '+(index==9?'active':'')" style="color: #662282;" @click="$router.push('/Bounty')"> {{$t('bounty')}}</div>-->
            <div :class="'nav-item '+(index==4?'active':'')" @click="$router.push('/affiliate')"> {{$t('foot[5]')}}</div>
            <div :class="'nav-item '+(index==5?'active':'')" @click="$router.push('/blog')"> {{$t('foot[6]')}}</div>
            <div :class="'nav-item '+(index==6?'active':'')" @click="$router.push('/contact')"> {{$t('foot[7]')}}</div>
            <div :class="'nav-item '+(index==8?'active':'')" @click="$router.push('/welfare')"> {{$t('welfare[0]')}}</div>
            <div :class="'nav-item '+(index==7?'active':'')" @click="$router.push('/app')"> {{$t('head[1]')}}</div>
            <div :class="'nav-item '+(index==5?'active':'')" @click="$router.push('/teach')"> {{$t('teach[0]')}}</div>

            <div class="action-box" v-if="!UserInfo">
              <div class="action-btn"  @click="$router.push('/register')">{{$t('head[2]')}}</div>
            </div>
            <div class="action-box" v-if="!UserInfo">
              <div class="action-btn dasbtn"  @click="$router.push('/login')">{{$t('head[3]')}}</div>
            </div>
            <div class="action-box" v-if="UserInfo">
              <div class="action-btn dasbtn"  @click="$router.push('/dashboard')">{{$t('head[4]')}}</div>
            </div>
            <div class="action-box" v-if="UserInfo">
              <div class="action-btn"  @click="$Model.Logout()">{{$t('head[5]')}}</div>
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
      if (localStorage.getItem("pageIndex") == '/Bounty') {
        this.index = 9;
      }
      if (localStorage.getItem("pageIndex") == '/teach') {
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
    margin-right: .6rem;
    object-fit: contain;
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

  @media only screen and (min-width: 1024px) {
    .header {
      position: sticky;
      top: 0;
      z-index: 20;
      width: 100%;
      height: 10rem;
      box-sizing: border-box;
      padding: 0rem;
      background-color: #fff;
    }

    .header .header-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /*width: 100%;*/
      /*max-width: 1300px;*/
      height: 100%;
      margin: 0 auto;
      padding: 0 3rem;
      background: #373737;
      /*background: linear-gradient(#00f785, #3d4355) padding-box, linear-gradient(180deg, hsl(31, 68%, 38%) 2.95%, hsl(59, 90%, 77%) 54.04%, hsl(31, 68%, 38%) 105.51%) border-box;*/
    }

    .header .header-wrapper .logo {
      height: 5rem;
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
      margin-right: 1.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #FFC107;
      white-space: nowrap;
      cursor: pointer;
      text-transform: uppercase;
    }

    .header .header-wrapper .nav-list .active,.header .header-wrapper .nav-list .nav-item:hover {
      color: #FF9800
    }

    .header .header-wrapper .nav-list .cur-lang {
      display: flex;
      align-items: center;
      margin-right: 2.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      white-space: nowrap;
      cursor: pointer;
      border-radius: 5px;
      padding: 5px 10px;
    }

    .header .header-wrapper .nav-list .cur-lang:hover {
      color: #FF9800
    }

    .header .header-wrapper .nav-list .cur-lang i {
      margin-left: 5px
    }

    .header .header-wrapper .nav-list .action-box {
      display: flex;
      align-items: center
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
      background: linear-gradient(to right, #fff, #410093);
      /*background: #4caf50;*/
      cursor: pointer;
      margin-right: 1rem;
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
      padding: 0rem;
      background-color: #fff
    }

    .header .header-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /*width: 100%;*/
      height: inherit;
      padding: 0 1rem;
      background: #373737;
      /*background: linear-gradient(#00f785, #3d4355) padding-box, linear-gradient(180deg, hsl(31, 68%, 38%) 2.95%, hsl(59, 90%, 77%) 54.04%, hsl(31, 68%, 38%) 105.51%) border-box;*/

    }

    .header .header-wrapper .logo {
      height: 3.5rem;
      cursor: pointer
    }

    .header .header-wrapper .nav-list {
      display: none
    }

    .header .header-wrapper .menu-box {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: right;
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
      margin-left: 0.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
      white-space: nowrap;
      cursor: pointer
    }

    .header .header-wrapper .menu-box .cur-lang:hover {
      color: #662282
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
      /*display: flex;*/
      display: block;
      flex-direction: column;
      width: calc(100% - 10rem);
      background-color: #fff;
      height: calc(100% - 6rem);
      overflow-y: scroll;
    }

    .header .header-wrapper .nav-mask .nav-list .nav-item {
      display: flex;
      align-items: center;
      width: 100%;
      height: 5.5rem;
      box-sizing: border-box;
      padding: 0 1rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #333333;
      word-wrap: break-word;
      cursor: pointer
    }

    .header .header-wrapper .nav-mask .nav-list .active,.header .header-wrapper .nav-mask .nav-list .nav-item:hover {
      color: #662282
    }

    .header .header-wrapper .nav-mask .nav-list .action-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 6rem;
      box-sizing: border-box;
      padding: 0 1rem
    }

    .header .header-wrapper .nav-mask .nav-list .action-box .action-btn {
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
      background: linear-gradient(to right, #fff, #410093);
      /*background:#4caf50;*/
      cursor: pointer;
      min-width: 80%;
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
    background: #FF9800;
    width: 0%;
    height: 2px;
    margin-top: 2px;
    opacity: 0;
    bottom: -0.5rem;
    transition: width 0.3s, opacity 0.3s;
  }

  /*.dasbtn {*/
  /*  background: linear-gradient(180deg, #B62283 0%, #722283 100%) !important;*/
  /*}*/
  .el-dropdown {
    margin-right: 10px;
  }

</style>
