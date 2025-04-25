<template>
  <div class="HomePage">
    <Header></Header>
    <div class="app-wrapper">
      <section namespace="referral_image">
        <div class="container" style="padding: 0;">
          <div class="box3">
            <div class="box-wrapper">
              <div class="carousel-container1 info-block">
                <div class="carousel1 info-block">
                  <div class="carousel-item1">
                    <img v-lazy="'./static/image/vipvvv.jpg?t=2'" style="object-fit:cover">
                    <div class="carousel-desc info-block-title">
                    </div>
                  </div>
                </div>
              </div>
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
  .carousel-container1 {
    overflow: hidden;
    margin-top: 10px;
    width: 100%;
    border-radius: 26px;
    padding: 2rem 0;
  }
  .carousel1 {
    display: flex;
    flex-direction: column;
    transition: transform 0.5s ease;
  }
  .carousel-item1 {
    position: relative;
    border-radius: 26px;
    max-width: 900px;
    margin: 0 auto;
    max-height: 350px;
    overflow: hidden;

  }
  .info-block-title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #FFF;
    font-family: 'Roboto';
    font-size: 4rem;
    font-style: normal;
    font-weight: 800;
    line-height: 95.836%;
    z-index: 999;
  }
  .carousel-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    line-height: 95.84%;
    background: linear-gradient(98.57deg, #ce048b -4.59%, #4c0a8e 101.92%);
    border-radius: 26px;
  }
  .carousel-item1 img {
    width: 100%;
    position: relative;
    border-radius: 26px;
    z-index: 2;
  }
  .carousel-container1 {
    overflow: hidden;
    margin-top: 10px;
    width: 100%;
    border-radius: 26px;
    padding: 2rem 0;
  }
  .carousel1 {
    display: flex;
    flex-direction: column;
    transition: transform 0.5s ease;
  }
  .carousel-item1 {
    position: relative;
    border-radius: 26px;
    max-width: 900px;
    margin: 0 auto;
    max-height: 350px;
    overflow: hidden;

  }
  .info-block-title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #FFF;
    font-family: 'Roboto';
    font-size: 4rem;
    font-style: normal;
    font-weight: 800;
    line-height: 95.836%;
    z-index: 999;
  }
  .carousel-item1 img {
    width: 100%;
    position: relative;
    border-radius: 26px;
    z-index: 2;
    min-width: 900px;
  }
  @media only screen and (max-width: 1024px) {
    .container .box3 {
      width: 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 1rem 1rem;
    }
  }
  @media (max-width: 768px) {
    .carousel-item1 img {
      width: 100%;
      min-width: 100%;
    }
  }
</style>
