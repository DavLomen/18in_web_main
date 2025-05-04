<template>
  <div class="HomePage">
    <Header></Header>
    <div class="app-wrapper">
      <section namespace="referral_image">
        <div class="">
          <div class="" style="padding: 0 16px">
            <div class="image_main">
              <img :src="'./static/image/vvvvv.jpg'">
              <div class="white_image_effect"></div>
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="box">
          <div class="title">{{showInfo.title}}</div>
          <div class="content" v-html="showInfo.content.replace(/text-wrap: nowrap;/ig,'')" style="font-size: 1.4rem"></div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  export default {
    name: 'Info',
    components: {
    },
    data() {
      return {
        showInfo: {
          title: '',
          content:'',
        },
      }
    },
    computed: {

    },
    watch: {
      '$route'(to, from) {
        this.$router.go(0)
      }
    },
    created() {
      this.getListData(14);
    },
    mounted() {

    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      getListData(type){
        this.$Model.noticeList({gropid: type, page_no: this.pageNo}, data => {
          if (data.code == 1 && data.info.length>0) {
            this.showInfo = data.info[0];
          }
        });
      }
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

  @keyframes tobig-5c8759ee {
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
    .container {
      width:100%;
      box-sizing: border-box;
      padding: 8rem 3rem
    }

    .container .box {
      width: 100%;
      max-width: 1300px;
      margin: 0 auto
    }

    .container .box .title {
      position: relative;
      width: 100%;
      margin-bottom: 2rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box .content {
      width: 100%
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      width:100%;
      box-sizing: border-box;
      padding: 3rem 1rem
    }

    .container .box {
      width: 100%
    }

    .container .box .title {
      position: relative;
      width: 100%;
      margin-bottom: 1rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box .content {
      width: 100%
    }
  }
  .content img {
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    display: block;
  }
  .content p img {
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    display: block;
  }
  .content>>>img {
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    display: block;
  }
  .image_main {
    width: 100%;
    position: relative;
    max-width: 900px;
    margin: 0 auto;
  }
  .image_main img {
    width: 100%;
    border-radius: 5px;
  }
  /*.white_image_effect {*/
  /*  width: 100%;*/
  /*  position: absolute;*/
  /*  height: 284px;*/
  /*  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);*/
  /*  bottom: 0;*/
  /*}*/
</style>
