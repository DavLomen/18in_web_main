<template>

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
        this.index = 1;
      }
      if (localStorage.getItem("pageIndex") == '/product') {
        this.index = 2;
      }
      if (localStorage.getItem("pageIndex") == '/contracts') {
        this.index = 2;
      }
      if (localStorage.getItem("pageIndex") == '/dashboard') {
        this.index = 3;
      }
      if (localStorage.getItem("pageIndex") == '/about') {
        this.index = 4;
      }
      if (localStorage.getItem("pageIndex") == '/affiliate') {
        this.index = 5;
      }

      if (localStorage.getItem("pageIndex") == '/help') {
        this.index = 6;
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
