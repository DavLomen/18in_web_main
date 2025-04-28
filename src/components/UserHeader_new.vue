<template>
  <div class="window">
    <ul role="menubar" class="el-menu mt-4" style="border: none;">
      <a href="javascript:;" @click="$router.push('/dashboard')" class="router-link-exact-active router-link-active" aria-current="page">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/dashboard'?'is-active':'')" style="padding-left: 20px;">
          <i class="bi bi-grid fs-4"></i>
          <span>{{$t('side[0]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/deposit')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/deposit'?'is-active':'')" style="padding-left: 20px;">
          <i class="bi bi-wallet fs-4"></i>
          <span>{{$t('side[1]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/withdraw')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/withdraw'?'is-active':'')" style="padding-left: 20px;">
          <i class="bi bi-wallet2 fs-4"></i>
          <span>{{$t('side[2]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/affiliates')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/affiliates'?'is-active':'')" style="padding-left: 20px;">
          <i class="bi bi-people fs-4"></i>
          <span>{{$t('side[3]')}}</span></li>
      </a>
      <a href="javascript:;" class="" @click="$router.push('/MyPackages')">
        <li role="menuitem" tabindex="-1" :class="'el-menu-item '+(index=='/MyPackages'?'is-active':'')" style="padding-left: 20px;">
          <i class="bi bi-ui-checks fs-4"></i>
          <span>{{$t('side[4]')}}</span></li>
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
.window {
width: 15vw;
margin-top: 110px;
}
.logo-box{
  display: inline-block;
  padding: var(--logoIconPadding) 0;
}
.el-menu{
  background: none !important;
  color: #fff;
}
.el-menu-item {
  font-size: 1rem !important;
  font-weight: 700 !important;
}
</style>
