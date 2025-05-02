<template>
  <div class="container d-flex flex-column ps-4" style="min-height: calc(100vh - 120px);">
    <div class="flex-grow-1 container">
      <div class="py-2 border border-0  rounded-4  p-3 ">
        <a :class="'text-bhs '+(index=='/dashboard'?'active':'')" href="javascript:;" @click="$router.push('/dashboard')">
          <!-- <i class="bi bi-grid fs-4"></i> -->
          <img :src="'./static/images/img/dash_l_1.png?t=1'" alt="">
          <span class="ps-2 fs-5">{{$t('side[0]')}}</span>
        </a>
      </div>
      <div class="py-2 mt-3 border border-0  rounded-4  p-3 ">
        <a :class="'text-bhs '+(index=='/deposit'?'active':'')" href="javascript:;" @click="$router.push('/deposit')">
          <!-- <i class="bi bi-wallet fs-4"></i> -->
          <img :src="'./static/images/img/dash_l_2.png?t=1'" alt="">
          <span class="ps-2 fs-5">{{$t('side[1]')}}</span>
        </a>
      </div>
      <div class="py-2 mt-3 border border-0  rounded-4 p-3 ">
        <a :class="'text-bhs '+(index=='/withdraw'?'active':'')" href="javascript:;" @click="$router.push('/withdraw')">
          <!-- <i class="bi bi-wallet2 fs-4"></i> -->
          <img :src="'./static/images/img/dash_l_3.png?t=1'" alt="">
          <span class="ps-2 fs-5">{{$t('side[2]')}}</span>
        </a>
      </div>

      <div class="py-2 mt-3 border border-0  rounded-4 p-3 ">
        <a :class="'text-bhs '+(index=='/affiliates'?'active':'')" href="javascript:;" @click="$router.push('/affiliates')">
          <!-- <i class="bi bi-people fs-4"></i> -->
          <img :src="'./static/images/img/dash_l_4.png?t=1'" alt="">
          <span class="ps-2 fs-5">{{$t('side[3]')}}</span>
        </a>
      </div>

      <div class="py-2 mt-3 border border-0  rounded-4 p-3 ">
        <a :class="'text-bhs '+(index=='/MyPackages'?'active':'')" href="javascript:;" @click="$router.push('/MyPackages')">
          <!-- <i class="bi bi-ui-checks fs-4"></i> -->
          <img :src="'./static/images/img/dash_l_5.png?t=1'" alt="">
          <span class="ps-2 fs-5">{{$t('side[4]')}}</span>
        </a>
      </div>
      <div class="py-2 mt-3 border border-0  rounded-4 p-3 ">
        <a :class="'text-bhs '+(index=='/transactions'?'active':'')" href="javascript:;" @click="$router.push('/transactions')">
          <!-- <i class="bi bi-journal-bookmark fs-4"></i> -->
          <img :src="'./static/images/img/dash_l_6.png?t=1'" alt="">
          <span class="ps-2 fs-5">{{$t('side[5]')}}</span>
        </a>
      </div>

      <div class="py-2 mt-3 border border-0  rounded-4 p-3 ">
        <a href="javascript:;" @click="showSet = !showSet" class="accordion-button fs-5 text-bhs " style="color: #000;" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          <i class="bi bi-plus-circle fs-4"></i>
          <!-- <img :src="'./static/images/img/dash_l_7.png?t=1'" alt=""> -->
          <span class="ps-2 fs-5">{{$t('side[6]')}}</span>
        </a>
      </div>
      <div id="collapseOne" :class="showSet?'accordion-collapse collapse show':'accordion-collapse collapse'" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div class="py-2 ms-4">
            <a :class="'text-bhs '+(index=='/walletAddress'?'active':'')" href="javascript:;" @click="$router.push('/walletAddress')">
              <!-- <i class="bi bi-wallet-fill fs-4"></i> -->
              <img :src="'./static/images/img/dash_l_8.png?t=1'" alt="">
              <span class="ps-2 fs-5">{{$t('side[7]')}}</span>
            </a>
          </div>
          <div class="py-2 ms-4">
            <a :class="'text-bhs '+(index=='/loginPassword'?'active':'')" href="javascript:;" @click="$router.push('/loginPassword')">
              <!-- <i class="bi bi-shield-lock-fill fs-4"></i> -->
              <img :src="'./static/images/img/dash_l_9.png?t=1'" alt="">
              <span class="ps-2 fs-5">{{$t('side[8]')}}</span>
            </a>
          </div>
          <div class="py-2 ms-4">
            <a :class="'text-bhs '+(index=='/payPassword'?'active':'')" href="javascript:;" @click="$router.push('/payPassword')">
              <!-- <i class="bi bi-safe2 fs-4"></i> -->
              <img :src="'./static/images/img/dash_l_7.png?t=1'" alt="">
              <span class="ps-2 fs-5">{{$t('side[9]')}}</span>
            </a>
          </div>
        </div>
      </div>
      <div class="py-2 mt-3 border-top border-bottom border-hhs p-3 ">
        <div class="py-2 mt-3 border border-0  rounded-4">
          <a :class="'text-bhs '+(index=='/dashboard'?'active':'')" href="javascript:;" @click="$router.push(`/article/privacy/detail`)">
            <!-- <i class="bi bi-shield-check fs-4"></i> -->
            <img :src="'./static/images/img/dash_l_11.png?t=1'" alt="">
            <span class="ps-2 fs-5">{{$t('side[10]')}}</span>
          </a>
        </div>
        <div class="py-2 my-3 border border-0  rounded-4 ">
          <a :class="'text-bhs '+(index=='/dashboard'?'active':'')" href="javascript:;" @click="$router.push(`/article/terms/detail`)">
            <!-- <i class="bi bi-clipboard2-check fs-4"></i> -->
            <img :src="'./static/images/img/dash_l_12.png?t=1'" alt="">
            <span class="ps-2 fs-5">{{$t('side[11]')}}</span>
          </a>
        </div>
      </div>
      <div class="p-3 mt-4">
        <a href="javascript:;" @click="$Model.Logout()" type="button" class="btn col-12 p-3 text-light fw-bold" style="background-color: rgb(250,126,25, 0.79);">{{$t('side[12]')}}</a>
      </div>
    </div>
<!--    <div class="mt-auto p-2 ">-->
<!--      <div class="p-3 border border-0 border-hhs rounded-4 d-flex bg-hs">-->
<!--        <div class="me-2 col-5">-->
<!--          <img :src="'./static/images/img/logo2.png'" alt="" class="pt-2" style="width: 100px;">-->
<!--        </div>-->
<!--        <div class="col-7">-->
<!--          <div class="mt-3">-->
<!--            <h6>ojbk052</h6>-->
<!--            <p class="text-dhs">ojbk@gmail.com</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="text-center mt-2">-->
<!--        <span class="text-dhs mt-2">COPYRIGHT</span>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
  export default {
    name: 'Side',
    components: {},
    props: [],
    data() {
      return {
        index: 0,
        isM: false,
        showSet:false,
      }
    },
    computed: {},
    watch: {},
    created() {
      // let that = this;
      // window.onresize = () => {
      //   that.reresize();
      // };
    },
    mounted() {
      // let that = this;
      // that.reresize();
      // window.onresize = () => {
      //   that.reresize();
      // };
      this.index = localStorage.getItem("userIndex");

    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      reresize() {
        let that = this;
        let w = window.innerWidth;
        if (w < 992) {
          that.isM = true;
        } else {
          that.isM = false;
        }
      },
    }
  }
</script>

<style scoped>
  .window {
    width: 20vw;
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
  /* 菜单项基础样式 */
  .container a.text-bhs {
    position: relative;
    display: flex;
    align-items: center;
    padding: 12px 20px;
    border-radius: 8px;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  /* 菜单项悬停效果 */
  .container a.text-bhs:hover {
    background: linear-gradient(90deg, #198754 0%, #ebedf0 100%) !important;
    color: #fff !important;
  }

  /* 菜单项激活状态 */
  .container a.text-bhs.active {
    background: linear-gradient(90deg, #198754 0%, #ebedf0 100%) !important;
    color: #fff !important;
  }

  /* 图标样式 */
  .container a.text-bhs i {
    transition: all 0.3s ease;
  }

  /* 悬停时图标颜色变化 */
  .container a.text-bhs:hover i,
  .container a.text-bhs.active i {
    color: #fff;
  }

  /* 添加悬停时的左边框效果 */
  .container a.text-bhs::before {
    content: '';
    position: absolute;
    left: -20px; /* 根据实际布局调整 */
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 0;
    background: linear-gradient(90deg, #198754 0%, #ebedf0 100%);
    border-radius: 0 4px 4px 0;
    transition: height 0.3s ease;
  }

  /* 悬停和激活时显示左边框 */
  .container a.text-bhs:hover::before,
  .container a.text-bhs.active::before {
    height: 70%;
  }

  /* 设置按钮样式 */
  .accordion-button {
    background: transparent !important;
    box-shadow: none !important;
    padding: 12px 20px !important;
  }

  .accordion-button:not(.collapsed) {
    color: #0d6efd !important;
  }

  /* 设置面板样式 */
  .accordion-body {
    padding: 0 !important;
  }

  .accordion-body .py-2 a.text-bhs {
    padding-left: 40px !important;
  }

  /* 退出按钮样式 */
  .btn-logout {
    background: linear-gradient(90deg, #8B2AB8 0%, #E535AB 100%) !important;
    border: none !important;
    transition: all 0.3s ease !important;
  }

  .btn-logout:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(139, 42, 184, 0.3);
  }

  /* 底部用户信息卡片悬停效果 */
  .bg-hs {
    transition: all 0.3s ease;
  }

  .bg-hs:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(139, 42, 184, 0.1);
  }
</style>
