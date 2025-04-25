<template>
  <div class="HomePage">
    <Header></Header>
    <div  class="app-wrapper container">
      <section namespace="referral_image">
        <div class="container">
          <div class="box7">
            <div class="image_main">
<!--              <img :src="'./static/image/64ea25d8a58bf1693066712.png?t=1'">-->
              <div class="white_image_effect"></div>
            </div>
          </div>
        </div>
      </section>

      <div class="box2">
        <div class="box-wrapper">
          <div class="box2-title">{{$t('affliliate[0]')}}</div>
          <div class="tab-list">
            <div class="tab-item"><img :src="'./static/image/aff1.png'"
                                                          class="img">
              <div class="line"></div>
              <div class="title">{{$t('affliliate[1]')}}</div>
              <div class="desc">
                {{$t('affliliate[2]')}}
              </div>
            </div>
            <div class="tab-item"><img :src="'./static/image/aff2.png'"
                                                          class="img">
              <div class="line"></div>
              <div class="title">{{$t('affliliate[3]')}}</div>
              <div class="desc">
                {{$t('affliliate[4]')}}
              </div>
            </div>
            <div class="tab-item"><img :src="'./static/image/aff3.png'"
                                                          class="img">
              <div class="line"></div>
              <div class="title">{{$t('affliliate[5]')}}</div>
              <div class="desc">
                {{$t('affliliate[6]')}}
              </div>
            </div>
            <div class="tab-item"><img :src="'./static/image/aff4.png'"
                                                          class="img">
              <div class="line"></div>
              <div class="title">{{$t('affliliate[7]')}}</div>
              <div class="desc">{{$t('affliliate[8]')}}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section namespace="referral-info">
        <div class="container">
          <div class="rect">
            <p class="rectp" style="text-align: left;"></p>
<!--            <div>-->
<!--              <img :src="'./static/image/afff.png'" style="width: 100%;">-->
<!--            </div>-->
            <div>
              {{$t('affliliate[9]')}}
              <br>
              <br>{{$t('affliliate[10]')}}
              <br>
              <br>{{$t('affliliate[11]')}}
              <br>
              <br>{{$t('affliliate[12]')}}
              <br>
              <br>{{$t('affliliate[13]')}}
              <br>
              <br>{{$t('affliliate[14]')}}
              <br>
              <br>{{$t('affliliate[15]')}}
            </div>
            <p></p>
            <div class="centered" style="margin-top: 28px;"><a href="javascript:;" @click="$router.push('/login')">
              <div class="main-btnNew" style="font-weight: 500;">{{$t('affliliate[23]')}}</div>
            </a></div>
          </div>
        </div>
      </section>
    </div>
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
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
    }
  }
</script>
<style scoped>
  .d3-block {
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 10px;
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
  .white_image_effect {
    width: 100%;
    position: absolute;
    height: 284px;
    bottom: 0;
  }
  .titled_2 {

    text-align: center;
    font-family: 'Roboto';
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .item-3 {
    width: 100%;
    padding-top: 18px;
    padding-bottom: 18px;
    padding-right: 18px;
    left: calc(50% - 343px/2 + 4.5px);
    top: 356px;
    margin-top: 23px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 60px 0px;
  }
  .item-3 {
    width: 280px;
    position: relative;
    left: auto;
    top: auto;
  }
  .d3-block {
    padding: 10px;
  }
  .d3-block {
    display: flex;
    justify-content: space-between;
  }
  .box {
    width: 100px;
    position: absolute;
    height: 90px;
    background-color: #dd4f39;
    border-top-left-radius: 10px;
    transform: translateY(-30px);
    left: 11px;
    clip-path: polygon(94% 0%, 40% 61%, 1% 100%, 0 100%, 0 53%, 0% 0%);
    padding-left: 16px;
    padding-top: 18px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
  }
  .box {
    left: -9px;
  }
  .item-3 h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    padding-left: 70px;
    margin-bottom: 6px;
    line-height: 21px;
    text-align: left;
    color: #FE9F44;
  }
  .item-3 p {
    font-family: 'Roboto';
    font-style: normal;
    padding-left: 70px;
    font-weight: 400;
    margin: 0;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    color: #000000;
  }
  .rect {
    border-radius: 10px;
    color: #FAF9F9;
    padding: 28px;
    margin-top: 54px;
    font-size: 1.75rem;
  }
  .centered {
    display: flex;
    justify-content: center;
  }
  .main-btnNew {
    display: inline-block;
    border-radius: 10px;
    background: linear-gradient(90deg, #9C27B0, #673AB7);
    padding: 14px 30px 14px 30px;
    text-align: center;
    color: #fff;
    font-family: 'Poppins';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.2px;
  }

  @media only screen and (min-width: 1024px) {
    html {
      font-size:10px
    }

  }

  @media only screen and (max-width: 1024px) {
    html {
      font-size:10px
    }
    .rect {
      padding: 28px 16px;
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
    background-color: #fbc241!important
  }

  .el-pagination.is-background .el-pager li:not(.active):hover {
    color: #fbc241!important
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
      padding: 4rem 1.5rem
    }

    .container .box1 .box-wrapper {
      display: flex;
      align-items: center
    }

    .container .box1 .box-wrapper .img {
      min-width: 25rem;
      max-width: 25rem
    }

    .container .box1 .box-wrapper .right {
      width: 100%;
      margin-left: 5rem
    }

    .container .box1 .box-wrapper .right .title {
      position: relative;
      width: 100%;
      margin-bottom: 6rem;
      font-size: 1.8rem;
      font-weight: 700;

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
      background-image: linear-gradient(90deg, #9C27B0, #673AB7)
    }

    .container .box1 .box-wrapper .right .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.1rem;

      word-wrap: break-word
    }

    .container .box2 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 1.5rem 4rem
    }

    .container .box2 .box2-title {
      position: relative;
      width: 100%;
      margin-bottom: 10rem;
      font-size: 2.5rem;
      font-weight: 700;

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
      background-image: linear-gradient(90deg, #9C27B0, #673AB7)
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
      padding: 0 1.4rem
    }

    .container .box2 .tab-list .tab-item .img {
      min-width: 7rem;
      max-width:7rem;
      height: 7rem;
    }

    .container .box2 .tab-list .tab-item .line {
      width: 8rem;
      height: 2px;
      margin: 2rem 0;
      border-radius: 2px;
      background-image: linear-gradient(90deg, #9C27B0, #673AB7)
    }

    .container .box2 .tab-list .tab-item .title {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 2.2rem;
      font-weight: 700;

      text-align: center;
      word-wrap: break-word
    }

    .container .box2 .tab-list .tab-item .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.6rem;

      text-align: center;
      word-wrap: break-word
    }

    .container .join-box {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 25rem;
      box-sizing: border-box;
      padding: 0 3rem;
      background-position: 100%;

    }

    .container .join-box .inner-area {
      min-width: 35rem;
      width: 60%
    }

    .container .join-box .inner-area .title {
      width: 100%;
      line-height: 110%;
      font-size: 1.5rem;
      font-weight: 700;

      word-wrap: break-word
    }

    .container .join-box .inner-area .content {
      width: 100%;
      margin: 1.5rem 0 3rem;
      line-height: 160%;
      font-size: 1.1rem;

      word-wrap: break-word
    }

    .container .join-box .inner-area .join-btn {
      display: inline-block;
      height: 4rem;
      line-height: 4rem;
      box-sizing: border-box;
      padding: 0 2rem;
      border-radius: .5rem;
      font-size: 1.1rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-color: #1c2b46;
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
      font-size: 1.2rem;
      font-weight: 700;

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
      background-image: linear-gradient(90deg, #9C27B0, #673AB7)
    }

    .container .box1 .box-wrapper .right .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.1rem;

      word-wrap: break-word
    }

    .container .box2 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 0.5rem 1rem
    }

    .container .box2 .box2-title {
      position: relative;
      width: 100%;
      margin-bottom: 4.5rem;
      font-size: 2rem;
      font-weight: 700;

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
      background-image: linear-gradient(90deg, #9C27B0, #673AB7)
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
      background-image: linear-gradient(90deg, #9C27B0, #673AB7)
    }

    .container .box2 .tab-list .tab-item .title {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 1.5rem;
      font-weight: 700;

      text-align: center;
      word-wrap: break-word
    }

    .container .box2 .tab-list .tab-item .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.3rem;

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
      background: none !important;
    }

    .container .join-box .inner-area {
      width: 100%
    }

    .container .join-box .inner-area .title {
      width: 100%;
      line-height: 110%;
      font-size: 1.2rem;
      font-weight: 700;

      word-wrap: break-word
    }

    .container .join-box .inner-area .content {
      width: 100%;
      margin: 1rem 0 2rem;
      line-height: 160%;
      font-size: 1rem;

      word-wrap: break-word
    }

    .container .join-box .inner-area .join-btn {
      display: inline-block;
      height: 4rem;
      line-height: 4rem;
      box-sizing: border-box;
      padding: 0 2rem;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-color: #fbc241;
      cursor: pointer
    }
  }
</style>
