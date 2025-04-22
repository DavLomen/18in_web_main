<template>
  <div class="HomePage">
    <Header></Header>
    <section  class="section pb-2">
      <div  class="container">
        <div  class="row justify-content-center">
          <div  class="col-12 text-center">
            <div  class="section-title mb-4 pb-2"><h4  class="title mb-4">{{$t('affliliate[0]')}}</h4></div>
          </div>
        </div>
        <div  class="col-12">
          <div  class="sidebar__product mb--n30">
            <div  class="row">
              <div  class="col-lg-4 col-12 mt-10">
                <article  class="product__card--horizontall d-flex mb-10" style="padding: 0.8125rem;">
                  <div  class="product__card--horizontall__thumbnail"
                       style="width: 150px; height: 150px;">
                    <a  href="javascript:;" @click="$router.push('/login')"
                                                               class="product__card--thumbnail__link display-block"><img
                     :src="'./static/img/1111.png'" class="product__card--thumbnail__img"
                    style="width: 150px; height: 150px;"></a>

                  </div>
                  <div  class="product__card--horizontall__content"><h3
                                                                                          class="product__card--horizontall__title product__card--horizontall__title"
                                                                                          style="display: flex; gap: 1.25rem;">
                    <img
                         src="data:image/png;base64,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"
                         style="width: 30px; height: 30px;"><span  style="font-size: 16px;"><a
                     href="javascript:;" @click="$router.push('/register')">{{$t('affliliate[1]')}}</a></span></h3><span
                                                                                            class="product__card--author__text"> {{$t('affliliate[2]')}}</span>
                  </div>
                </article>
              </div>
              <div  class="col-lg-4 col-12 mt-10">
                <article  class="product__card--horizontall d-flex mb-10" style="padding: 0.8125rem;">
                  <div  class="product__card--horizontall__thumbnail"
                       style="width: 150px; height: 150px;"><a  href="javascript:;" @click="$router.push('/product')"
                                                               class="product__card--thumbnail__link display-block"><img
                     :src="'./static/img/44444.png'" class="product__card--thumbnail__img"
                    style="width: 150px; height: 150px;"></a></div>
                  <div  class="product__card--horizontall__content"><h3
                                                                                          class="product__card--horizontall__title product__card--horizontall__title"
                                                                                          style="display: flex; gap: 1.25rem;">
                    <img  :src="'./static/img/no2.50b9205d.png'" style="width: 30px; height: 30px;"><span
                     style="font-size: 16px;">{{$t('affliliate[3]')}}</span></h3><span
                                                                                                  class="product__card--author__text"> {{$t('affliliate[4]')}}</span>
                  </div>
                </article>
              </div>
              <div  class="col-lg-4 col-12 mt-10">
                <article  class="product__card--horizontall d-flex mb-30" style="padding: 0.8125rem;">
                  <div  class="product__card--horizontall__thumbnail"
                       style="width: 150px; height: 150px;"><a  href="javascript:;" @click="$router.push('/dashboard')"
                                                               class="product__card--thumbnail__link display-block"><img
                     :src="'./static/img/77777.png'" class="product__card--thumbnail__img"
                    style="width: 150px; height: 150px;"></a></div>
                  <div  class="product__card--horizontall__content"><h3
                                                                                          class="product__card--horizontall__title product__card--horizontall__title"
                                                                                          style="display: flex; gap: 1.25rem;">
                    <img  :src="'./static/img/no3.7e2b0dc0.png'" style="width: 30px; height: 30px;"><span
                     style="font-size: 16px;"><a
                                                                   href="javascript:;" @click="$router.push('/dashboard')">{{$t('affliliate[5]')}}</a></span></h3>
                    <span  class="product__card--author__text">{{$t('affliliate[6]')}}</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  class="container mt-100 mt-60" style="margin-bottom: 150px;">
        <div  class="row align-items-center">
          <div  class="col-lg-6 col-md-5" style="overflow: hidden;">
            <div  class="position-relative">
              <div  class="text-center text-md-left"><img
                                                                            :src="'./static/img/friend1.png'" alt=""
                                                                            class="img-fluid"></div>
            </div>
          </div>
          <div  class="col-lg-6 col-md-7 mt-5 mt-sm-0">
            <div  class="section-title">
<!--              <div  class="para-desc">{{$t('affliliate[7]')}}</div>-->
              <div  class="para-desc" v-html="showInfo.content"></div>
              <div  class="mt-4">
                <a v-if="UserInfo"  href="javascript:;" @click="$router.push('/dashboard')" class="btn btn-primary">{{$t('affliliate[8]')}}<i  class="mdi mdi-chevron-right"></i></a>
                <a v-else  href="javascript:;" @click="$router.push('/login')" class="btn btn-primary">{{$t('affliliate[8]')}}<i  class="mdi mdi-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
  export default {
    name: 'affiliate',
    components: {
    },
    data() {
      return {
        showInfo:{},
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      this.getListData(20);
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
    background-color: #fbc241
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

  @keyframes tobig-cffeeb80 {
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
    background-color: #fbc241!important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: #fbc241!important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #1ab5ff!important;
  }

  .el-pagination.is-background .el-pager li:not(.active):hover {
    color: #fff!important
  }

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
    color: #fbc241;
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: #fbc241
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
    color: #fbc241
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #fbc241!important;
    border-color: #fbc241!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #fbc241!important
  }

  @media only screen and (min-width: 1024px) {
    .container {
      width:100%
    }

    .container .box-wrapper {
      width: 100%;
      max-width: 1300px;
      margin: 0 auto
    }

    .container .box1 {
      width: 100%;
      box-sizing: border-box;
      padding: 8rem 3rem
    }

    .container .box1 .box-wrapper {
      display: flex;
      align-items: center
    }

    .container .box1 .box-wrapper .img {
      min-width: 50rem;
      max-width: 50rem
    }

    .container .box1 .box-wrapper .right {
      width: 100%;
      margin-left: 5rem
    }

    .container .box1 .box-wrapper .right .title {
      position: relative;
      width: 100%;
      margin-bottom: 6rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box1 .box-wrapper .right .title:after {
      position: absolute;
      bottom: -2rem;
      left: 0;
      content: "";
      width: 16rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box1 .box-wrapper .right .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.8rem;
      color: #000;
      word-wrap: break-word
    }

    .container .box2 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 3rem 8rem
    }

    .container .box2 .box2-title {
      position: relative;
      width: 100%;
      margin-bottom: 10rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box2 .box2-title:after {
      position: absolute;
      bottom: -2rem;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 16rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box2 .tab-list {
      display: flex;
      justify-content: space-between;
      width: 100%
    }

    .container .box2 .tab-list .tab-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      box-sizing: border-box;
      padding: 0 1.2rem
    }

    .container .box2 .tab-list .tab-item .img {
      min-width: 13rem;
      max-width: 13rem;
      height: 13rem
    }

    .container .box2 .tab-list .tab-item .line {
      width: 8rem;
      height: 2px;
      margin: 2rem 0;
      border-radius: 2px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box2 .tab-list .tab-item .title {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 2.4rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box2 .tab-list .tab-item .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.5rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .join-box {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 45rem;
      box-sizing: border-box;
      padding: 0 3rem;
      background-position: 100%
    }

    .container .join-box .inner-area {
      min-width: 50rem;
      width: 60%
    }

    .container .join-box .inner-area .title {
      width: 100%;
      line-height: 110%;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .join-box .inner-area .content {
      width: 100%;
      margin: 1.5rem 0 3rem;
      line-height: 160%;
      font-size: 1.6rem;
      color: #000;
      word-wrap: break-word
    }

    .container .join-box .inner-area .join-btn {
      display: inline-block;
      height: 4rem;
      line-height: 4rem;
      box-sizing: border-box;
      padding: 0 2rem;
      border-radius: .5rem;
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-color: #fbc241;
      cursor: pointer
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      width:100%
    }

    .container .box1 {
      width: 100%;
      box-sizing: border-box;
      padding: 3rem 1rem
    }

    .container .box1 .box-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%
    }

    .container .box1 .box-wrapper .img {
      width: 100%
    }

    .container .box1 .box-wrapper .right {
      width: 100%;
      margin-top: 1rem
    }

    .container .box1 .box-wrapper .right .title {
      position: relative;
      width: 100%;
      margin-bottom: 4.5rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box1 .box-wrapper .right .title:after {
      position: absolute;
      bottom: -1.5rem;
      left: 0;
      content: "";
      width: 10rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box1 .box-wrapper .right .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.6rem;
      color: #000;
      word-wrap: break-word
    }

    .container .box2 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 1rem 3rem
    }

    .container .box2 .box2-title {
      position: relative;
      width: 100%;
      margin-bottom: 4.5rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box2 .box2-title:after {
      position: absolute;
      bottom: -1.5rem;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 10rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box2 .tab-list {
      width: 100%
    }

    .container .box2 .tab-list .tab-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%
    }

    .container .box2 .tab-list .tab-item:not(:last-child) {
      margin-bottom: 2rem
    }

    .container .box2 .tab-list .tab-item .img {
      min-width: 12rem;
      max-width: 12rem;
      height: 12rem
    }

    .container .box2 .tab-list .tab-item .line {
      width: 8rem;
      height: 2px;
      margin: 1.5rem 0;
      border-radius: 2px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box2 .tab-list .tab-item .title {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box2 .tab-list .tab-item .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.5rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .join-box {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 45rem;
      box-sizing: border-box;
      padding: 0 1rem;
    }

    .container .join-box .inner-area {
      width: 100%
    }

    .container .join-box .inner-area .title {
      width: 100%;
      line-height: 110%;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .join-box .inner-area .content {
      width: 100%;
      margin: 1rem 0 2rem;
      line-height: 160%;
      font-size: 1.5rem;
      color: #000;
      word-wrap: break-word
    }

    .container .join-box .inner-area .join-btn {
      display: inline-block;
      height: 4rem;
      line-height: 4rem;
      box-sizing: border-box;
      padding: 0 2rem;
      border-radius: 4px;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-color: #fbc241;
      cursor: pointer
    }
  }
  .title-main {
    font-family: 'Roboto';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 120.5%;
    text-align: center;
  }
  .main-btnNew {
    display: inline-block;
    border-radius: 10px;
    background-image: linear-gradient(to right, #36e4f5 0%, rgba(42, 234, 227, 0.47) 51%, #09f5c5 100%);
    padding: 14px 30px 14px 30px;
    text-align: center;
    color: #fff;
    font-family: 'Poppins';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.2px;
    text-align: center;
    margin: 0 auto;
  }
</style>


