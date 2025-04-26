<template>
  <div class="window">
    <div class="container d-flex align-items-center">
      <div  class="logo-box">
      <a  href="javascript:;" @click="$router.push('/')" class="logo-icon router-link-active">
        <img style="width: 100%;"  :src="'./static/img/logo.png?t=2'" alt=""></a>
    </div>
    </div>
    <ul role="menubar" class="el-menu mt-4" style="border: none;">
      <a href="javascript:;" @click="$router.push('/dashboard')" class="router-link-exact-active router-link-active" aria-current="page">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/dashboard'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-data-analysis"></i>
          <span>{{$t('head[4]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/transactions')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/transactions'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-money"></i>
          <span>{{$t('head[22]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/deposit')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/deposit'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-sell"></i>
          <span>{{$t('head[7]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/withdraw')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/withdraw'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-sold-out"></i>
          <span>{{$t('head[8]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/MyPackages')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/MyPackages'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-shopping-cart-full"></i>
          <span>{{$t('head[11]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/product')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/product'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-position"></i>
          <span>{{$t('foot[2]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/affiliates')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/affiliates'?'is-active':'')" style="padding-left: 20px;">
          <i class="el-icon-user"></i>
          <span>{{$t('foot[5]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/message')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/message'?'is-active':'')" style="padding-left: 20px;">
          <van-icon name="comment-o" size="18" style="    margin-right: 5px;" :dot="$store.state.MessageInfo>0"/>
          <span>{{$t('head[13]')}}</span></li>
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
      <li class="el-menu-item" @click="showMenu=false,$router.push('/walletAddress')">
        <a href="javascript:;" class="t-link primary-menu__sub-link text-capitalize">{{$t('walletAddress[0]')}}</a>
      </li>
      <li class="el-menu-item" @click="showMenu=false,$router.push('/loginPassword')">
        <a href="javascript:;"  class="t-link primary-menu__sub-link text-capitalize">{{$t('walletAddress[1]')}}</a>
      </li>
      <li class="el-menu-item" @click="showMenu=false,$router.push('/payPassword')">
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
.window {
width: 15vw;
}
.logo-box{
  display: inline-block;
  padding: var(--logoIconPadding) 0;
}

</style>
